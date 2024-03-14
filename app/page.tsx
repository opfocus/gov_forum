import FilterBars from "@/ui/filter-bars";
import CategoryList from "@/ui/category-list";
import TopicsLatest from "@/ui/topics-latest";
import NewTopicButton from "@/ui/new-topic-button";
import Banner from "@/ui/banner";

// for testing
import Link from "next/link";

import {getCategories} from "@/utils/getCategories";
import { getTopics } from "@/utils/actions";

import { Suspense } from "react";
import Processing from "@/ui/processing";

export const revalidate = 1800


export default async function Page() {

  
  const categories = await getCategories() 
  const res = await getTopics();
  let topics = JSON.parse(res)

  return (
    <div className="space-y-6">
      <Banner />
      <div className="flex justify-between items-center flex-wrap">
        <FilterBars />
        <NewTopicButton />
      </div>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className=" w-full lg:flex-1">
          <Suspense fallback={<Processing />}>
            <CategoryList categories={categories}/>
          </Suspense>
        </div>
        <div className=" w-full lg:flex-1">
          <Suspense fallback={<Processing />}>
            <TopicsLatest  topics={topics}/>
          </Suspense>
        </div>
      </div>
      <Link href={"/u/me/summary"}>
        Test user page UI
      </Link>
    </div>
  );
}

