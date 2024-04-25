import { CategoriesList, CategoriesSkeleton } from "@/ui/category-list";
import TopicsListDiv from "@/ui/topics-list-div";
import Link from "next/link";
import React from "react";
import { Suspense } from "react";

import { getCategories } from "@/utils/getCategories";
import { getTopics } from "@/utils/getTopics";
import { TopicsDivSkeleton } from "@/ui/topics-skeleton";

export const revalidate = 1800;

export default async function Page() {
  return (
    <React.Fragment>
      <main className="flex flex-col gap-6 lg:flex-row">
        <section className=" w-full lg:flex-1">
          <Suspense fallback={<CategoriesSkeleton />}>
            <CategoriesList categoriesData={getCategories()} />
          </Suspense>
        </section>
        <section className=" w-full lg:flex-1">
          <Suspense fallback={<TopicsDivSkeleton />}>
            <TopicsListDiv
              topicsData={getTopics()}
              categoriesData={getCategories()}
            />
          </Suspense>
        </section>
      </main>
      <section>
        <Link
          href={"/u/me/summary"}
          className=" mt-8 bg-sky-600 px-2 py-1 text-white hover:bg-sky-700"
        >
          Test user-profile UI
        </Link>
        <br />
        <br />
        <Link
          href={"/login"}
          className=" mt-8 bg-sky-600 px-2 py-1 text-white hover:bg-sky-700"
          title="Utilized for testing login with intercepted routes and Parallel routes in Next.js."
        >
          Test another login way
        </Link>
      </section>
    </React.Fragment>
  );
}
