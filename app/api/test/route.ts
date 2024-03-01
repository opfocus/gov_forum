// only for test route handle
import {headers, cookies} from 'next/headers' 

export async function GET(request: Request) {
  const headersList = headers()
  const token = headersList.get("Authorization")
  console.log(token)

  const cookiesStore = cookies()
  const theme = cookiesStore.get('theme')
console.log(theme)
  return new Response("<h1>Hello world</h1>", {
    headers: {
      'Content-Type': 'text/html',
      'Set-Cookie': 'theme=dark'
    }
  })
  
}