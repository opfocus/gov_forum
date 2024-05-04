import { CategoriesList, CategoriesSkeleton } from "@/ui/category-list";
import TopicsListDiv from "@/ui/topics-list-div";
import React from "react";
import { Suspense } from "react";
import { LinkButton } from "@/ui/custom-compoment";

import { getCategories } from "@/utils/getCategories";
import { getTopics } from "@/utils/getTopics";
import { TopicsDivSkeleton } from "@/ui/topics-skeleton";

export const revalidate = false

export default async function HomePage() {

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
      <section className=" flex gap-2">
        <LinkButton href="/u/me/summary">Test user-profile UI</LinkButton>
        <LinkButton href="/login">Test another login way</LinkButton>
      </section>
    </React.Fragment>
  );
}
