// only for test route handle
export const dynamic = "force-dynamic"

import { headers, cookies } from "next/headers";

export async function GET() {
  const headersList = headers()
  const theme = headersList.get("theme")
  console.log(theme)

  const data = {
    name:"Wangzfghhh",
    age:36
  }

  return new Response(JSON.stringify(data), {
    status:200,
    headers: {"Set-Cookie": `theme=${theme}`}
  })
}
