// For user-info UI testing only.

import UserActivityTopics from "@/ui/user-activity-topics";
import UserActivityReadTopics from "@/ui/user-activity-read";
import UserActivityLikes from "@/ui/user-activity-likes";
import UserActivityBookmarks from "@/ui/user-activity-bookmarks";
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
import UserActionsList from "@/ui/user-actions-list";
import TopicsTable from "@/ui/topics-table";
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

import { topic_list_for_test } from "lib/topic-list-for-test";
import { activity_for_test } from "lib/activity-for-test";
import { activity_read_topics_for_test } from "lib/activity-read-topics-for-test";
import { activity_likes_for_test } from "lib/activity-likes-for-test";
import { activity_bookmarks_for_test } from "lib/activity-bookmarks-for-test";
import { notifications_responses_for_test } from "lib/notifications-responses-for-test";
import { notifications_mentions_for_test } from "lib/notifications-mentions-for-test";
import { messages_sent_for_test } from "lib/messages-sent-for-test";

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

  switch (params.nav2) {
    case "topics":
      // data = await getUserActivityTopics();
      data = topic_list_for_test;
      return <UserActivityTopics topics={data.topic_list.topics} />;
    case "replies":
      // data = await getUserActivity();
      data = activity_for_test;

      return (
        <UserActionsList data={data.user_actions} categories={categories} />
      );
    case "read":
      // data = await getUserActivityReadTopics();
      data = activity_read_topics_for_test;
      return (
        <UserActivityReadTopics
          topics={data.topic_list.topics}
          categories={categories}
        />
      );
    case "drafts":
      return (
        <main>
          <section className=" mt-8">
            [TBA]Draft functionality has not been provided yet.
          </section>
        </main>
      );
    case "likes":
      // data = await getUserActivityLikes();
      data = activity_likes_for_test;
      return (
        <UserActivityLikes likes={data.user_actions} categories={categories} />
      );
    case "bookmarks":
      // data = await getUserActivityBookmarks();
      data = activity_bookmarks_for_test;
      return <UserActivityBookmarks bookmarks={data.bookmarks} />;
    case "solved":
      return <UserActivitySolved />;
    case "votes":
      return <UserActivityVotes />;
    case "responses":
      // data = await getUserNotificationsResponses();
      data = notifications_responses_for_test;
      return (
        <UserNotificationsResponses
          data={data.user_actions}
          categories={categories}
        />
      );
    case "mentions":
      // data = await getUserNotificationsMentions();
      data = notifications_mentions_for_test;
      return (
        <UserActionsList data={data.user_actions} categories={categories} />
      );
    case "edits":
      return (
        <main>
          <section className=" mt-8">
            <div className=" font-semibold">No activity yet</div>
          </section>
        </main>
      );
    case "dismiss":
      return (
        <main>
          <section className=" mt-8">[TBA]</section>
        </main>
      );
    case "sent":
      // data = await getUserMessagesSent();
      data = messages_sent_for_test;
      return <TopicsTable topics={data.topics} categories={categories} />;
    case "new":
      // not test data
      return (
        <main>
          <section className="mt-8">
            <div className=" font-semibold">You don’t have any messages</div>
            <div className=" my-4 text-gray-700 text-sm">
              <p>
                Need to have a direct personal conversation with someone,
                outside the normal conversational flow? Message them by
                selecting their avatar and using the{" "}
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
    case "unread":
      // not test data
      return (
        <main>
          <section className="mt-8">
            <div className=" font-semibold">You don’t have any messages</div>
            <div className=" my-4 text-gray-700 text-sm">
              <p>
                Need to have a direct personal conversation with someone,
                outside the normal conversational flow? Message them by
                selecting their avatar and using the{" "}
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
    case "archive":
      // not test data
      return (
        <main>
          <section className="mt-8">
            <div className=" font-semibold">You don’t have any messages</div>
            <div className=" my-4 text-gray-700 text-sm">
              <p>
                Need to have a direct personal conversation with someone,
                outside the normal conversational flow? Message them by
                selecting their avatar and using the{" "}
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
    case "new-message":
      //TBA
      return (
        <main>
          <section className=" mt-8">[TBA]</section>
        </main>
      );
    case "security":
      return <UserSecurity />;
    case "profile":
      return <UserProfile />;
    case "emails":
      return <UserEmails />;
    case "notifications":
      return <UserPreferencesNotifications />;
    case "tracking":
      return <UserTracking />;
    case "users":
      return <UserUsers />;
    case "interface":
      return <UserInterface />;
    case "navigation-menu":
      return <UserNavMenuSet />;
    default:
      return <div>here is the activity 2 page</div>;
  }
}
