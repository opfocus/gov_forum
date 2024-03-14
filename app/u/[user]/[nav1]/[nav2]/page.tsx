// For user-info UI testing only.

import UserActivityTopics from "@/ui/user_activity_topics";
import UserActivityReadTopics from "@/ui/user_activity_read";
import UserActivityLikes from "@/ui/user_activity_likes";
import UserActivityBookmarks from "@/ui/user_activity_bookmarks";
import UserActivityVotes from "@/ui/user-activity-votes";
import { getCategories } from "@/utils/getCategories";
// import {
//   getUserActivity,
//   getUserActivityBookmarks,
//   getUserActivityLikes,
//   getUserActivityReadTopics,
//   getUserActivityTopics,
//   getUserMessagesSent,
//   getUserNotificationsMentions,
//   getUserNotificationsResponses,
// } from "@/utils/getUserInfo";
import UserActivitySolved from "@/ui/user-activity-solved";
import UserNotificationsResponses from "@/ui/user-notifications-responses";
import UserActionsList from "@/ui/user_actions_list";
import TopicsTable from "@/ui/topics_table";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import UserSecurity from "@/ui/user-security";
import UserProfile from "@/ui/user-profile";
import UserEmails from "@/ui/user-emails";
import UserPreferencesNotifications from "@/ui/user-preferences-notifications";
import UserTracking from "@/ui/user-tracking";
import UserUsers from "@/ui/user-users";
import UserInterface from "@/ui/user-interface";
import UserNavMenuSet from "@/ui/user-nav-menu-set";

import {topic_list_for_test} from "lib/topic_list_for_test"
import {activity_for_test} from "lib/activity_for_test"
import {activity_read_topics_for_test} from "lib/activity_read_topics_for_test"
import {activity_likes_for_test} from "lib/activity_likes_for_test"
import {activity_bookmarks_for_test} from "lib/activity_bookmarks_for_test"
import {notifications_responses_for_test} from "lib/notifications_responses_for_test"
import {notifications_mentions_for_test} from "lib/notifications_mentions_for_test"
import {messages_sent_for_test} from "lib/messages_sent_for_test"

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
    // data = await getUserActivityTopics();
    data = topic_list_for_test
    return <UserActivityTopics topics={data.topic_list.topics} />;
  }
  if (params.nav2 === "replies") {
    // data = await getUserActivity();
    data = activity_for_test

    return <UserActionsList data={data.user_actions} categories={categories} />;
  }
  if (params.nav2 === "read") {
    // data = await getUserActivityReadTopics();
    data = activity_read_topics_for_test
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
    // data = await getUserActivityLikes();
    data = activity_likes_for_test
    return (
      <UserActivityLikes likes={data.user_actions} categories={categories} />
    );
  }
  if (params.nav2 === "bookmarks") {
    // data = await getUserActivityBookmarks();
    data = activity_bookmarks_for_test
    return <UserActivityBookmarks bookmarks={data.bookmarks} />;
  }
  if (params.nav2 === "solved") {
    return <UserActivitySolved />;
  }
  if (params.nav2 === "votes") {
    return <UserActivityVotes />;
  }
  if (params.nav2 === "responses") {
    // data = await getUserNotificationsResponses();
    data = notifications_responses_for_test
    return (
      <UserNotificationsResponses
        data={data.user_actions}
        categories={categories}
      />
    );
  }
  if (params.nav2 === "mentions") {
    // data = await getUserNotificationsMentions();
    data = notifications_mentions_for_test
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
    // data = await getUserMessagesSent();
    data = messages_sent_for_test
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
              avatar and using the{" "}
              <span>
                <EnvelopeIcon className=" w-4 h-4 inline-block " />
              </span>{" "}
              message button.
            </p>
            <br />
            If you need help, you can{" "}
            <Link href={"/about"} className=" text-cyan-700">
              message a staff member.
            </Link>
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
              avatar and using the{" "}
              <span>
                <EnvelopeIcon className=" w-4 h-4 inline-block" />
              </span>{" "}
              message button.
            </p>
            <br />
            If you need help, you can{" "}
            <Link href={"/about"} className=" text-cyan-700">
              message a staff member.
            </Link>
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
              avatar and using the{" "}
              <span>
                <EnvelopeIcon className=" w-4 h-4 inline-block" />
              </span>{" "}
              message button.
            </p>
            <br />
            If you need help, you can{" "}
            <Link href={"/about"} className=" text-cyan-700">
              message a staff member.
            </Link>
          </div>
        </section>
      </main>
    );
  }
  if (params.nav2 === "new-message") {
    //TBA
    return (
      <main>
        <section className=" mt-8">[TBA]</section>
      </main>
    );
  }
  if (params.nav2 === "security") {
    return <UserSecurity />;
  }
  if (params.nav2 === "profile") {
    return <UserProfile />;
  }
  if (params.nav2 === "emails") return <UserEmails />;
  if (params.nav2 === "notifications") return <UserPreferencesNotifications />
  if (params.nav2 === "tracking") return <UserTracking />
  if (params.nav2 === "users") return <UserUsers />
  if (params.nav2 === "interface") return <UserInterface />
  if (params.nav2 === "navigation-menu") return <UserNavMenuSet />

  return <div>here is the activity 2 page</div>;
}
