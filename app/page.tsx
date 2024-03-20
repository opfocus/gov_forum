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
    <div className=" mt-8 space-y-6">
      <Banner />
      <div className="flex justify-between items-center flex-wrap">
        <FilterBars />
        <NewTopicButton />
      </div>
      <main className="flex flex-col gap-6 lg:flex-row">
        <section className=" w-full lg:flex-1">
          <Suspense fallback={<Processing />}>
            <CategoryList categories={categories}/>
          </Suspense>
        </section>
        <section className=" w-full lg:flex-1">
          <Suspense fallback={<Processing />}>
            <TopicsLatest  topics={topics}/>
          </Suspense>
        </section>
      </main>
      <section>
      <Link href={"/u/me/summary"}
        className=" mt-8 px-2 py-1 bg-sky-600 text-white hover:bg-sky-700"
      >
        Test user-profile UI
      </Link>
      <br />
      <br />
      <Link href={"/login"}
        className=" mt-8 px-2 py-1 bg-sky-600 text-white hover:bg-sky-700"
        title="Utilized for testing login with intercepted routes and Parallel routes in Next.js."
      >
        Test another login way
      </Link>
      </section>
    </div>
  );
}

