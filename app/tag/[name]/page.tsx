import Processing from "@/ui/processing"
import TopicsList from "@/ui/topics-list"
import { Suspense } from "react"

import type { Metadata, ResolvedMetadata } from "next";

export async function generateMetadata({params}: {
  params: {name: string}
}, parent: ResolvedMetadata): Promise<Metadata> {
  const tagName = params.name

  const previousTitle = (await parent).title
  const previousDescription = (await parent).description

  return {
    title: tagName || previousTitle,
    description: `Explore a curated list of topics based on the tags you've selected: ${tagName}. Dive into discussions, insights, and updates that match your interests and preferences. Stay engaged with the latest conversations across a variety of subjects tailored just for you.` || previousDescription,
  }
}

export default function Page({
  params
}: {
  params: {name: string}
}) {

  return (
    <Suspense fallback={<Processing />}>
    <TopicsList   queryFrom = {"tags"} queryValue = {params.name}/>
    </Suspense>
  )
}