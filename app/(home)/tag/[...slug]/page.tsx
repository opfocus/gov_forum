import Processing from "@/ui/processing";
import TopicsListTable from "@/ui/topics-list-table";
import { Suspense } from "react";
import { getCategories } from "@/utils/getCategories";
import { getTopics } from "@/utils/getTopics";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { name: string };
}): Promise<Metadata> {
  const tagName = params.name;

  return {
    title: tagName,
    description: `Explore a curated list of topics based on the tags you've selected: ${tagName}. Dive into discussions, insights, and updates that match your interests and preferences. Stay engaged with the latest conversations across a variety of subjects tailored just for you.`,
  };
}

export default function Page({ params }: { params: { slug: string[] } }) {
  const length = params.slug.length;
  const name = params.slug[length - 1];

  return (
    <Suspense fallback={<Processing />}>
      <TopicsListTable
        topicsData={getTopics("tags", name)}
        categoriesData={getCategories()}
      />
    </Suspense>
  );
}
