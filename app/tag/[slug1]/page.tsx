import Processing from "@/ui/processing"
import TopicsList from "@/ui/topics-list"
import { Suspense } from "react"

import type { Metadata } from "next";

export async function generateMetadata({params}: {
  params: {slug1: string}
}): Promise<Metadata> {

  return {
    title: params.slug1,
    description: `Explore a curated list of topics based on the tags you've selected: ${params.slug1}. Dive into discussions, insights, and updates that match your interests and preferences. Stay engaged with the latest conversations across a variety of subjects tailored just for you.`,
  }
}

export default function Page({
  params
}: {
  params: {slug1: string}
}) {

  return (
    <Suspense fallback={<Processing />}>
    <TopicsList   queryFrom = {"tags"} queryValue = {params.slug1}/>
    </Suspense>
  )
}
