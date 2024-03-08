
import UserSummary from "@/ui/user_summary"
import { getUserSummary } from "@/utils/getUserSummary"

export default async function Page({params} : {
  params: {
    nav1: string
  }
}) {
    const data = await getUserSummary() as any
  if (params.nav1 === "summary") {
    return <UserSummary  data={data.user_summary}/>
  }
  
  return (
    <h1>{params.nav1}</h1>
  )
}