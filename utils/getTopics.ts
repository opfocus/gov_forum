import * as Realm from "realm-web";
import { cache } from "react";
import "server-only"

export const getTopics = cache(
  async (
    queryFrom?: string,
    queryValue?: string ,
  ) => {
    const apiKey = process.env.REALM_API_KEY!;
    const app = new Realm.App({ id: process.env.NEXT_PUBLIC_APP_ID! });

    // Log in user using realm API key
    const credentials = Realm.Credentials.apiKey(apiKey);
    const user = await app.logIn(credentials);

    // Connect to database
    const mongo = user.mongoClient("mongodb-atlas");

    const collection = mongo.db("forum_demo").collection("topics_demo");

    let data: any;

    switch (queryFrom) {
      case "categories":
        data = await collection.find({ category_id: Number(queryValue) });
        break;
      case "tags":
        data = await collection.find({ tags: { $in: [queryValue] } });
        break;
      case "postStream":
        data = await collection.findOne({ id: Number(queryValue) });
        collection.updateOne(
          { id: Number(queryValue) },
          { $inc: { views: 1 } },
        );
        break;
      default:
        data = (await collection.find()).sort((a, b) => b.id - a.id);
        break;
    }
    return data
  },
);