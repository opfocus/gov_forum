// For user-info UI testing only.
import UserSummary from "@/ui/user_summary"

// import { getUserBadges, getUserMessages, getUserNotifications, getUserSummary } from "@/utils/getUserInfo"
// import { getUserActivity } from "@/utils/getUserInfo"
import { getCategories } from "@/utils/getCategories"
import UserNotifications from "@/ui/user-notifications"
import UserActionsList from "@/ui/user_actions_list"
import TopicsTable from "@/ui/topics_table"
import BadgesList from "@/ui/badges_list"
import UserAccount from "@/ui/user-account"

import {summary_for_test} from "lib/summary_for_test"
import {activity_for_test} from "lib/activity_for_test"
import {notifications_for_test} from "lib/notifications_for_test"
import {messages_for_test} from "lib/messages_for_test"
import {user_badges_for_test} from "lib/user_badges_for_test"

export const revalidate = 1800

export default async function Page({params} : {
  params: {
    nav1: string
  }
}) {
    let data:any
    const categories = await getCategories() 

  if (params.nav1 === "summary") {
    // data = await getUserSummary()
    data = summary_for_test
    return <UserSummary  data={data.user_summary} />
  }
  if (params.nav1 === "activity") {
    // data = await getUserActivity()
    data = activity_for_test
    return <UserActionsList data={data.user_actions} categories={categories}/>
  }
  if (params.nav1 === "notifications") {
  //  data = await getUserNotifications()
  data = notifications_for_test
    return <UserNotifications data={data.notifications}/>
  }
  if (params.nav1 === "messages") {
    // data = await getUserMessages()
    data = messages_for_test
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
    // data = await getUserBadges()
    data = user_badges_for_test
    return <BadgesList userBadges={data.user_badges} badges={data.badges} />
  }
  if (params.nav1 === "preferences") {

    return <UserAccount />
  }
  return (
    <h1>{params.nav1}</h1>
  )
}