import 'server-only'
import * as Realm from "realm-web";

export const revalidate = 0

export async function GET(request: Request) {


const apiKey = process.env.REALM_API_KEY!;
const app = new Realm.App({ id: process.env.NEXT_PUBLIC_APP_ID! });

// Log in user using realm API key
const credentials = Realm.Credentials.apiKey(apiKey);
const user = await app.logIn(credentials);

// Connect to database
const mongo = user.mongoClient("mongodb-atlas");

const collection = mongo.db("forum_demo").collection("tags_demo");

// Use plants.findOne to query the database
const data = (await collection.find({})).sort((a, b) => a.index-b.index);

return Response.json(data, {
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'max-age=3600', // 例如，设置缓存有效期为1小时
  }
})
}
