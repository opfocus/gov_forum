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
  let collection = mongo.db("forum_demo").collection("posts");
  const incertResult = await collection.insertOne(newPost);

  collection = mongo.db("forum_demo").collection("topics_demo");
  const updateResult = await collection.updateMany(
    { id: newPost.topic_id },
    { $push: { stream: newPost.id } },
  );

  if (incertResult.insertedId && updateResult.modifiedCount) {
    // If matchedCount is 1, it means the update was successful
    return Response.json({
      message: `Post inserted reply post and update topic stream successfully, _id: ${incertResult.insertedId}`,
      status: 200,
    });
  } else if (incertResult) {
    return Response.json({ message: "Update stream fail", status: 500 });
  } else if (updateResult) {
    return Response.json({
      message: "Incert reply post stream fail",
      status: 500,
    });
  } else {
    return Response.json({
      message: "Incert reply post and update topic  stream fail",
      status: 500,
    });
  }
});
