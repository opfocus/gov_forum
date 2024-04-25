import TopicsListTable from "@/ui/topics-list-table";
import { Suspense } from "react";
import type { Metadata } from "next";
import { getTopics } from "@/utils/getTopics";
import { getCategories } from "@/utils/getCategories";
import {TopicsTableSkeleton} from "@/ui/topics-skeleton";

export const revalidate = 0;

export const metadata: Metadata = {
  description:
    "Explore collection of recently released topics, sorted by release date from newest to oldest. Stay updated on the latest discussions, trends, and insights across a diverse range of subjects.",
};

export default function Page() {
  return (
    <Suspense fallback={<TopicsTableSkeleton />}>
      <TopicsListTable topicsData={getTopics()} categoriesData={getCategories()} />
    </Suspense>
  );
}
