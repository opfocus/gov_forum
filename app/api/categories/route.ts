import "server-only";
import * as Realm from "realm-web";

export async function GET() {
  const apiKey = process.env.REALM_API_KEY!;
  const app = new Realm.App({ id: process.env.NEXT_PUBLIC_APP_ID! });

  const credentials = Realm.Credentials.apiKey(apiKey);
  const user = await app.logIn(credentials);

  const mongo = user.mongoClient("mongodb-atlas");

  const collection = mongo.db("forum_demo").collection("categories_demo");

  const data = (await collection.find({})).sort(
    (a, b) => a.position - b.position,
  );

  return Response.json(data);
}
