
import UserSummary from "@/ui/user_summary"

import { getUserBadges, getUserMessages, getUserNotifications, getUserSummary } from "@/utils/getUserInfo"
import { getUserActivity } from "@/utils/getUserInfo"
import { getCategories } from "@/utils/getCategories"
import UserNotifications from "@/ui/user-notifications"
import UserActionsList from "@/ui/user_actions_list"
import TopicsTable from "@/ui/topics_table"
import BadgesList from "@/ui/badges_list"

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
    return <UserActionsList data={data.user_actions} categories={categories}/>
  }
  if (params.nav1 === "notifications") {
    data = await getUserNotifications()
    return <UserNotifications data={data.notifications}/>
  }
  if (params.nav1 === "messages") {
    data = await getUserMessages()
   return <TopicsTable topics={data.topics} categories={categories}/>
  }
  if (params.nav1 === "invites") {
    return (
      <main>
        <section className=" mt-8">
          [TBA]
        </section>
      </main>
    )
  }
  if (params.nav1 === "badges") {
    data = await getUserBadges()
    console.log(data)
    return <BadgesList userBadges={data.user_badges} badges={data.badges} />
  }
  return (
    <h1>{params.nav1}</h1>
  )
}