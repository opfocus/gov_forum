// For user-info UI testing only.
import UserSummary from "@/ui/user-summary";

// import { getUserBadges, getUserMessages, getUserNotifications, getUserSummary } from "@/utils/getUserInfo"
// import { getUserActivity } from "@/utils/getUserInfo"
import { getCategories } from "@/utils/getCategories";
import UserNotifications from "@/ui/user-notifications";
import UserActionsList from "@/ui/user-actions-list";
import TopicsTable from "@/ui/topics-table";
import BadgesList from "@/ui/badges-list";
import UserAccount from "@/ui/user-account";

import { summary_for_test } from "lib/summary-for-test";
import { activity_for_test } from "lib/activity-for-test";
import { notifications_for_test } from "lib/notifications-for-test";
import { messages_for_test } from "lib/messages-for-test";
import { user_badges_for_test } from "lib/user-badges-for-test";

export const revalidate = 1800;

export default async function Page({
  params,
}: {
  params: {
    nav1: string;
  };
}) {
  let data: any;
  const categories = await getCategories();

  switch (params.nav1) {
    case "summary":
      // data = await getUserSummary()
      data = summary_for_test;
      return <UserSummary data={data.user_summary} />;
    case "activity":
      // data = await getUserActivity()
      data = activity_for_test;
      return (
        <UserActionsList data={data.user_actions} categories={categories} />
      );
    case "notifications":
      //  data = await getUserNotifications()
      data = notifications_for_test;
      return <UserNotifications data={data.notifications} />;
    case "messages":
      // data = await getUserMessages()
      data = messages_for_test;
      return <TopicsTable topics={data.topics} categories={categories} />;
    case "invites":
      return (
        <main>
          <section className=" mt-8">[TBA]</section>
        </main>
      );
    case "badges":
      // data = await getUserBadges()
      data = user_badges_for_test;
      return <BadgesList userBadges={data.user_badges} badges={data.badges} />;
    case "preferences":
      return <UserAccount />;
    default:
      return <h1>{params.nav1}</h1>;
  }
}
