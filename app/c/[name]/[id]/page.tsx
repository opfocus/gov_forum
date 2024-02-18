import Processing from "@/ui/processing";
import TopicsList from "@/ui/topics-list";
import { Suspense } from "react";

import type { Metadata, ResolvedMetadata } from "next";
import { getCategories } from "@/utils/getCategories";

export async function generateMetadata({params}: {
  params: {id: string}
}, parent: ResolvedMetadata): Promise<Metadata> {
  const id = params.id
  const categories = await getCategories()

  const [item] = categories.filter((category) => category.id === Number(id))
  const previousTitle = (await parent).title
  const previousDescription = (await parent).description

  return {
    title: item?.name || previousTitle,
    description: item?.description || previousDescription,
  }
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<Processing />}>
      <TopicsList queryFrom={"categories"} queryValue={params.id} />
    </Suspense>
  );
}


