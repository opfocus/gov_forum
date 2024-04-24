import TopicsList from "@/ui/topics-list";
import { Suspense } from "react";
import Processing from "@/ui/processing";
import type { Metadata } from "next";
import { getTopics } from "@/utils/getTopics";
import { getCategories } from "@/utils/getCategories";

export const revalidate = 0;

export const metadata: Metadata = {
  description:
    "Explore collection of recently released topics, sorted by release date from newest to oldest. Stay updated on the latest discussions, trends, and insights across a diverse range of subjects.",
};

export default function Page() {
  return (
    <Suspense fallback={<Processing />}>
      <TopicsList topicsData={getTopics()} categoriesData={getCategories()} />
    </Suspense>
  );
}
