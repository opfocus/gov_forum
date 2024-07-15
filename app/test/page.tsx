

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}


export default async function Page() {
  const data = await getData()

  console.log(data.title)
  return (
    <div>test page</div>
  )
}