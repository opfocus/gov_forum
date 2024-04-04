import "server-only";
import * as Realm from "realm-web";
import { NextRequest } from "next/server";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export const POST = withApiAuthRequired(async function POST(
  request: NextRequest,
) {
  const newPost = await request.json();
  const apiKey = process.env.REALM_API_KEY!;
  const app = new Realm.App({ id: process.env.NEXT_PUBLIC_APP_ID! });

  // Log in user using realm API key
  const credentials = Realm.Credentials.apiKey(apiKey);
  const user = await app.logIn(credentials);

  // Connect to database
  const mongo = user.mongoClient("mongodb-atlas");
  const collection = mongo.db("forum_demo").collection("posts");

  const incertResult = await collection.insertOne(newPost);

  if (incertResult.insertedId) {
    // If matchedCount is 1, it means the update was successful
    return Response.json({
      message: `Post inserted successfully, _id: ${incertResult.insertedId}`,
      status: 200,
    });
  } else {
    return Response.json({ message: "Failed to incert post", status: 500 });
  }
});
