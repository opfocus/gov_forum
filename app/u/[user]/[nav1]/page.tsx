
import UserSummary from "@/ui/user_summary"
import { getUserSummary } from "@/utils/getUserInfo"
import { getUserActivity } from "@/utils/getUserInfo"
import UserActivity from "@/ui/user_activity"
import { getCategories } from "@/utils/getCategories"

export const revalidate = 1800

export default async function Page({params} : {
  params: {
    nav1: string
  }
}) {
    let data:any
    const categories = await getCategories() 

  if (params.nav1 === "summary") {
    data = await getUserSummary()
    return <UserSummary  data={data.user_summary} />
  }
  if (params.nav1 === "activity") {
    data = await getUserActivity()
    return <UserActivity data={data.user_actions} categories={categories}/>
  }
  return (
    <h1>{params.nav1}</h1>
  )
}