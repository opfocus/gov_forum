import "server-only";
import * as Realm from "realm-web";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export const revalidate = 0;

export const GET = withApiAuthRequired(async function Get() {
  const apiKey = process.env.REALM_API_KEY!;
  const app = new Realm.App({ id: process.env.NEXT_PUBLIC_APP_ID! });

  // Log in user using realm API key
  const credentials = Realm.Credentials.apiKey(apiKey);
  const user = await app.logIn(credentials);

  // Connect to database
  const mongo = user.mongoClient("mongodb-atlas");

  const collection = mongo.db("forum_demo").collection("counters_demo");

  //  query the database
  const queryResult = (
    await collection.find({}, { projection: { id_name: 1, sequence_value: 1 } })
  ).sort((a, b) => a.id_name - b.id_name);

  if (!queryResult || queryResult.length === 0) {
    // qurey fail
    return new Response("query fail", { status: 400 });
  }

  // update the database
  const updateResult = await collection.updateMany(
    {},
    { $inc: { sequence_value: 1 } }
  );

  if (!updateResult) {
    // update fail
    return new Response("updata fail", { status: 400 });
  }

  return Response.json(queryResult);
});
