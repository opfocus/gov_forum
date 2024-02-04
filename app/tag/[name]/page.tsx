import Processing from "@/ui/processing"
import TopicsList from "@/ui/topics-list"
import { Suspense } from "react"

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