import TopicsList from "@/ui/topics-list";
import { Suspense } from "react";
import Processing from "@/ui/processing";

export default function Page() {
  return (
    <Suspense fallback={<Processing />}>
      <TopicsList queryFrom={undefined} queryValue={undefined} />
    </Suspense>
  );
}
