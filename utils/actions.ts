"use server";
import * as Realm from "realm-web";
import { cache } from "react";

export {getTopics, getPosts, incrementLike, generatePostId, searchPosts,}

////////////////////
const getTopics = cache(
  async (
    queryFrom: string | undefined = undefined,
    queryValue: string | undefined = undefined,
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
    return JSON.stringify(data);
  },
);
///////////
const getPosts = async (topicId: number) => {
  const apiKey = process.env.REALM_API_KEY!;
  const app = new Realm.App({ id: process.env.NEXT_PUBLIC_APP_ID! });

  // Log in user using realm API key
  const credentials = Realm.Credentials.apiKey(apiKey);
  const user = await app.logIn(credentials);

  // Connect to database
  const mongo = user.mongoClient("mongodb-atlas");

  const collection = mongo.db("forum_demo").collection("posts");

  // Use plants.findOne to query the database
  const data = await collection.find({ topic_id: topicId });

  return JSON.stringify(data);
};
///////////
const incrementLike = async (id: number, user_id: string) => {
  const apiKey = process.env.REALM_API_KEY!;
  const app = new Realm.App({ id: process.env.NEXT_PUBLIC_APP_ID! });

  // Log in user using realm API key
  const credentials = Realm.Credentials.apiKey(apiKey);
  const user = await app.logIn(credentials);

  // Connect to database
  const mongo = user.mongoClient("mongodb-atlas");

  const collection = mongo.db("forum_demo").collection("posts");
  const updateResult = await collection.updateOne(
    { id: id },
    { $push: { likes: user_id } },
  );
  if (!updateResult) {
    // update fail
    return JSON.stringify({ message: "updata like count fail", status: 400 });
  }
};
////////
const generatePostId = async () => {
  const apiKey = process.env.REALM_API_KEY!;
  const app = new Realm.App({ id: process.env.NEXT_PUBLIC_APP_ID! });

  // Log in user using realm API key
  const credentials = Realm.Credentials.apiKey(apiKey);
  const user = await app.logIn(credentials);

  // Connect to database
  const mongo = user.mongoClient("mongodb-atlas");
  const collection = mongo.db("forum_demo").collection("counters_demo");

  const nextPostId = await collection.find(
    { id_name: "postId" },
    { projection: { sequence_value: 1 } },
  );
  if (!nextPostId || nextPostId.length === 0) {
    // qurey fail
    return JSON.stringify({ message: "query post id fail", status: 400 });
  }
  // update the database
  const updateResult = await collection.updateMany(
    { id_name: "postId" },
    { $inc: { sequence_value: 1 } },
  );

  if (!updateResult) {
    // update fail
    return JSON.stringify({ message: "updata post id fail", status: 400 });
  }

  return JSON.stringify(nextPostId);
};
//////////////////////////////////////////////
import type { Post } from "@/app/api/post";
const searchPosts = async (prevState: string, formData: FormData) => {
  const rawFormData = Object.fromEntries(formData.entries());

  const apiKey = process.env.REALM_API_KEY!;
  const app = new Realm.App({ id: process.env.NEXT_PUBLIC_APP_ID! });

  // Log in user using realm API key
  const credentials = Realm.Credentials.apiKey(apiKey);
  const user = await app.logIn(credentials);

  // Connect to database
  const mongo = user.mongoClient("mongodb-atlas");

  const collection = mongo.db("forum_demo").collection("posts");

  const data: Post[] = await collection.aggregate([
    {
      $search: {
        index: "content",
        text: {
          query: rawFormData.keyworlds,
          path: {
            wildcard: "*",
          },
        },
      },
    },
  ]);
  return JSON.stringify(data);
};
