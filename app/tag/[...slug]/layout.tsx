import React from "react";
import FilterBars from "@/ui/filter-bars";
import NewTopicButton from "@/ui/new-topic-button";
import TagInfoButton from "@/ui/tag-info-button";
import TagNotificationButton from "@/ui/tag-notifications-button";

export default function layout({ children, params }: 
  { 
    children: React.ReactNode
    params: {
      slug: string[]
    }
   }) {
  const tabs = [
    {
      index: 1,
      name: 'Latest',
      segment: `latest`,
    },
    {
      index: 2,
      name: 'Unread',
      segment: `unread`,
    },
    {
      index: 3,
      name: 'Top',
      segment: `top`,
    },
  ]
  return (
    <div className=" relative mt-8 space-y-6">
      <div className="flex justify-between items-center flex-wrap">
        <FilterBars tabs={tabs}/>
        <div className="flex flex-row gap-2">
          <TagInfoButton />
          <NewTopicButton />
          <TagNotificationButton />
        </div>
      </div>
      {children}
    </div>
  );
}
