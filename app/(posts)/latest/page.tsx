import TopicsList from "@/ui/topics-list";
import { Suspense } from "react";
import Processing from "@/ui/processing";
export const revalidate = 0;

import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Explore collection of recently released topics, sorted by release date from newest to oldest. Stay updated on the latest discussions, trends, and insights across a diverse range of subjects.",
};

export default function Page() {
  return (
    <Suspense fallback={<Processing />}>
      <TopicsList queryFrom={undefined} queryValue={undefined} />
    </Suspense>
  );
}
