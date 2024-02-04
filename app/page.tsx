import FilterBars from "@/ui/filter-bars";
import CategoryList from "@/ui/category-list";
import TopicsLatest from "@/ui/topics-latest";
import NewTopicButton from "@/ui/new-topic-button";
import Banner from "@/ui/banner";

export const revalidate = 60;
// test only
import TestUi from "@/ui/test-ui";
import { Suspense } from "react";
import Processing from "@/ui/processing";

export default function Page() {
  return (
    <div className="space-y-6">
      <Banner />
      <div className="flex justify-between items-center flex-wrap">
        <FilterBars />
        <NewTopicButton />
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className=" w-full lg:flex-1">
          <Suspense fallback={<Processing />} >
          <CategoryList />
          </Suspense>
        </div>
        <div className=" w-full lg:flex-1">
        <Suspense fallback={<Processing />} >
          <TopicsLatest />
        </Suspense>
        </div>
      </div>
      <TestUi />
    </div>
  );
}
