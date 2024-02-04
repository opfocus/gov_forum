import CategoryList from "@/ui/category-list"
import TopicsLatest from "@/ui/topics-latest"
import { Suspense } from "react";
import Processing from "@/ui/processing";

export const revalidate = 60

export default function Page() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row">
        <div className=" w-full lg:flex-1">
          <Suspense fallback={<Processing />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className=" w-full lg:flex-1">
          <Suspense fallback={<Processing />}>
            <TopicsLatest />
          </Suspense>
        </div>
    </div>
  );
}
