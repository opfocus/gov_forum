import UserActivity from "@/ui/user_activity"
import UserActivityTopics from "@/ui/user_activity_topics"
import UserActivityReadTopics from "@/ui/user_activity_read"
import UserActivityLikes from "@/ui/user_activity_likes"
import UserActivityBookmarks from "@/ui/user_activity_bookmarks"
import UserActivityVotes from "@/ui/user-activity-votes"
import { getCategories } from "@/utils/getCategories"
import { getUserActivity, getUserActivityBookmarks, getUserActivityLikes, getUserActivityReadTopics, getUserActivityTopics } from "@/utils/getUserInfo"
import UserActivitySolved from "@/ui/user-activity-solved"

export const revalidate = 1800

export default async function Page({params}: {
  params: {
    nav2: string
  }
}) {

  let data:any
  const categories = await getCategories()

  if (params.nav2 === "topics") {
    data = await getUserActivityTopics()

    return <UserActivityTopics topics = {(data.topic_list).topics} />
  }
  if (params.nav2 === "replies") {
    data = await getUserActivity()

    return <UserActivity data={data.user_actions} categories={categories}/>
  }
  if (params.nav2 === "read") {
    data = await getUserActivityReadTopics()

    return <UserActivityReadTopics topics={data.topic_list.topics} categories={categories} />
  }
  if (params.nav2 === "drafts")
    return (
      <main>
        <section className=" mt-8">
        [TBA]Draft functionality has not been provided yet.
        </section>
      </main>
      )
  if (params.nav2 === "likes") {
    data = await getUserActivityLikes()
    return <UserActivityLikes likes={data.user_actions} categories={categories}/>
  }
  if (params.nav2 === "bookmarks") {
    data = await getUserActivityBookmarks()
    return <UserActivityBookmarks bookmarks={data.bookmarks} />
  }
  if (params.nav2 === "solved") {
    
    return <UserActivitySolved />
  }
  if(params.nav2 === "votes") {

    return <UserActivityVotes />
  }

  return (
    <div>
      here is the activity 2 page
    </div>
  )
}