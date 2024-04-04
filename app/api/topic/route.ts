import "server-only";
import * as Realm from "realm-web";
import { NextRequest } from "next/server";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export const POST = withApiAuthRequired(async function POST(
  request: NextRequest,
) {
  const newTopic = await request.json();
  const apiKey = process.env.REALM_API_KEY!;
  const app = new Realm.App({ id: process.env.NEXT_PUBLIC_APP_ID! });

  // Log in user using realm API key
  const credentials = Realm.Credentials.apiKey(apiKey);
  const user = await app.logIn(credentials);

  // Connect to database
  const mongo = user.mongoClient("mongodb-atlas");

  const collection1 = mongo.db("forum_demo").collection("topics_demo");
  const collection2 = mongo.db("forum_demo").collection("categories_demo");

  const incertResult = await collection1.insertOne(newTopic);
  const updateResult = await collection2.updateOne(
    { id: newTopic.category_id },
    { $inc: { topic_count: 1 } },
  );

  if (incertResult.insertedId && updateResult.modifiedCount) {
    // If matchedCount is 1, it means the update was successful
    return Response.json({
      message: `Topic inserted successfully, _id: ${incertResult.insertedId}; update category topic count sucessfully`,
      status: 200,
    });
  } else if (!incertResult.insertedId) {
    return Response.json({ message: "Failed to incert topic  ", status: 500 });
  } else if (updateResult.modifiedCount !== 1) {
    return Response.json({
      message: "Failed to update category topic_count  ",
      status: 500,
    });
  } else {
    return Response.json({
      message: "Failed insert topic and update category topic_count",
      status: 500,
    });
  }
});
