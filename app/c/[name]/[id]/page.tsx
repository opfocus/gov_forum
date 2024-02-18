import Processing from "@/ui/processing";
import TopicsList from "@/ui/topics-list";
import { Suspense } from "react";

import type { Metadata} from "next";
import { getCategories } from "@/utils/getCategories";

export async function generateMetadata({params}: {
  params: {id: string}
}): Promise<Metadata> {
  const id = params.id
  const categories = await getCategories()

  const [item] = categories.filter((category) => category.id === Number(id))

  return {
    title: item?.name,
    description: item?.description,
  }
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<Processing />}>
      <TopicsList queryFrom={"categories"} queryValue={params.id} />
    </Suspense>
  );
}


