import Processing from "@/ui/processing";
import TopicsListTable from "@/ui/topics-list-table";
import { Suspense } from "react";

import type { Metadata } from "next";
import { getCategories } from "@/utils/getCategories";
import { getTopics } from "@/utils/getTopics";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const length = params.slug.length;
  const id = Number(params.slug[length - 1]);

  // const categories = await getCategories();
  // const item = categories.find((category) => category.id === id);

  // return {
  //   title: item?.name,
  //   description: item?.description,
  // };

  //replace to test for response time
  return {
    title: "Category topic list",
    description: "The leatest topic in this category",
  };
}

export default function Page({ params }: { params: { slug: string[] } }) {
  // pramas.slug?.[length-1] the category/subCategory id
  const length = params.slug.length;
  const id = params.slug[length - 1];

  return (
    <Suspense fallback={<Processing />}>
      <TopicsListTable
        topicsData={getTopics("categories", id)}
        categoriesData={getCategories()}
      />
    </Suspense>
  );
}
