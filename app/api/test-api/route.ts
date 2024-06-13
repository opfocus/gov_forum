// only for test route handle
import { headers, cookies } from "next/headers";

export async function GET(request: Request) {

 setTimeout(() => {
  
 }, 5000);
  return Response.json({
    name:"wangzhsr",
    age:36
  })
}
