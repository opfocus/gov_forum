import UserActivityTopics from "@/ui/user_activity_topics";
import UserActivityReadTopics from "@/ui/user_activity_read";
import UserActivityLikes from "@/ui/user_activity_likes";
import UserActivityBookmarks from "@/ui/user_activity_bookmarks";
import UserActivityVotes from "@/ui/user-activity-votes";
import { getCategories } from "@/utils/getCategories";
import {
  getUserActivity,
  getUserActivityBookmarks,
  getUserActivityLikes,
  getUserActivityReadTopics,
  getUserActivityTopics,
  getUserMessagesSent,
  getUserNotificationsMentions,
  getUserNotificationsResponses,
} from "@/utils/getUserInfo";
import UserActivitySolved from "@/ui/user-activity-solved";
import UserNotificationsResponses from "@/ui/user-notifications-responses";
import UserActionsList from "@/ui/user_actions_list";
import TopicsTable from "@/ui/topics_table";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import UserSecurity from "@/ui/user-security";

export const revalidate = 1800;

export default async function Page({
  params,
}: {
  params: {
    nav2: string;
  };
}) {
  let data: any;
  const categories = await getCategories();

  if (params.nav2 === "topics") {
    data = await getUserActivityTopics();

    return <UserActivityTopics topics={data.topic_list.topics} />;
  }
  if (params.nav2 === "replies") {
    data = await getUserActivity();

    return <UserActionsList data={data.user_actions} categories={categories} />;
  }
  if (params.nav2 === "read") {
    data = await getUserActivityReadTopics();

    return (
      <UserActivityReadTopics
        topics={data.topic_list.topics}
        categories={categories}
      />
    );
  }
  if (params.nav2 === "drafts")
    return (
      <main>
        <section className=" mt-8">
          [TBA]Draft functionality has not been provided yet.
        </section>
      </main>
    );
  if (params.nav2 === "likes") {
    data = await getUserActivityLikes();
    return (
      <UserActivityLikes likes={data.user_actions} categories={categories} />
    );
  }
  if (params.nav2 === "bookmarks") {
    data = await getUserActivityBookmarks();
    return <UserActivityBookmarks bookmarks={data.bookmarks} />;
  }
  if (params.nav2 === "solved") {
    return <UserActivitySolved />;
  }
  if (params.nav2 === "votes") {
    return <UserActivityVotes />;
  }
  if (params.nav2 === "responses") {
    data = await getUserNotificationsResponses();
    return (
      <UserNotificationsResponses
        data={data.user_actions}
        categories={categories}
      />
    );
  }
  if (params.nav2 === "mentions") {
    data = await getUserNotificationsMentions();
    return <UserActionsList data={data.user_actions} categories={categories} />;
  }
  if (params.nav2 === "edits") {
    return (
      <main>
        <section className=" mt-8">
          <div className=" font-semibold">No activity yet</div>
        </section>
      </main>
    );
  }
  if (params.nav2 === "dismiss") {
    return (
      <main>
        <section className=" mt-8">[TBA]</section>
      </main>
    );
  }
  if (params.nav2 === "sent") {
    data = await getUserMessagesSent();
    return <TopicsTable topics={data.topics} categories={categories} />;
  }
  if (params.nav2 === "new") {
    // not test data
    return (
      <main>
        <section className="mt-8">
          <div className=" font-semibold">You don’t have any messages</div>
          <div className=" my-4 text-gray-700 text-sm">
            <p>
              Need to have a direct personal conversation with someone, outside
              the normal conversational flow? Message them by selecting their
              avatar and using the <span><EnvelopeIcon className=" w-4 h-4 inline-block " /></span> message button.
            </p>
            <br />
            If you need help, you can{" "}
            <Link href={"/about"} className=" text-cyan-700">message a staff member.</Link>
          </div>
        </section>
      </main>
    );
  }
  if (params.nav2 === "unread") {
    // not test data
    return (
      <main>
        <section className="mt-8">
          <div className=" font-semibold">You don’t have any messages</div>
          <div className=" my-4 text-gray-700 text-sm">
            <p>
              Need to have a direct personal conversation with someone, outside
              the normal conversational flow? Message them by selecting their
              avatar and using the <span><EnvelopeIcon className=" w-4 h-4 inline-block" /></span> message button.
            </p>
            <br />
            If you need help, you can{" "}
            <Link href={"/about"} className=" text-cyan-700">message a staff member.</Link>
          </div>
        </section>
      </main>
    );
  }
  if (params.nav2 === "archive") {
    // not test data
    return (
      <main>
        <section className="mt-8">
          <div className=" font-semibold">You don’t have any messages</div>
          <div className=" my-4 text-gray-700 text-sm">
            <p>
              Need to have a direct personal conversation with someone, outside
              the normal conversational flow? Message them by selecting their
              avatar and using the <span><EnvelopeIcon className=" w-4 h-4 inline-block" /></span> message button.
            </p>
            <br />
            If you need help, you can{" "}
            <Link href={"/about"} className=" text-cyan-700">message a staff member.</Link>
          </div>
        </section>
      </main>
    );
  }
  if (params.nav2 === "new-message") {
    //TBA
    return (
      <main>
        <section className=" mt-8">
          [TBA]
        </section>
      </main>
    )
  }
  if (params.nav2 === "security") {
    return <UserSecurity />
  }
  return <div>here is the activity 2 page</div>;
}
