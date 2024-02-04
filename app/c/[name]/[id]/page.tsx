import Processing from "@/ui/processing";
import TopicsList from "@/ui/topics-list";
import { Suspense } from "react";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<Processing />}>
      <TopicsList queryFrom={"categories"} queryValue={params.id} />
    </Suspense>
  );
}
