

export default async function Page() {
  const user = await getData()
  
  return (
    <div>
      {user.name}
    </div>
  )
}




async function getData() {
  const res = await fetch("http://localhost:3000/api/test-api", {next: {revalidate:30}})

  if (!res.ok) {
    throw new Error("Fail to fetch data: getData()")
  }

  return res.json()
}