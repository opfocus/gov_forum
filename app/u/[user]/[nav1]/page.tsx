

export default function Page({params} : {
  params: {
    nav1: string
  }
}) {
  return (
    <h1>{params.nav1}</h1>
  )
}