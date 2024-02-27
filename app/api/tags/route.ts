import 'server-only'
import * as Realm from "realm-web";

export async function GET() {


const apiKey = process.env.REALM_API_KEY!;
const app = new Realm.App({ id: process.env.NEXT_PUBLIC_APP_ID! });

const credentials = Realm.Credentials.apiKey(apiKey);
const user = await app.logIn(credentials);

const mongo = user.mongoClient("mongodb-atlas");

const collection = mongo.db("forum_demo").collection("tags_demo");

const data = (await collection.find({})).sort((a, b) => a.index-b.index);

return Response.json(data, {
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'max-age=1800',
  }  
})
}
