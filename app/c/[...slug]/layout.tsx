import React from "react";
import FilterBars from "@/ui/filter-nav";
import NewTopicButton from "@/ui/new-topic-button";
import TagNotificationButton from "@/ui/tag-notifications-button";

export default function layout({ children }: { children: React.ReactNode }) {
  const tabs = [
    {
      index: 1,
      name: "Latest",
      segment: "latest",
    },
    {
      index: 2,
      name: "Unread",
      segment: "unread",
    },
    {
      index: 3,
      name: "Top",
      segment: "top",
    },
  ];

  return (
    <div className=" mt-8 space-y-6">
      <div className=" relative flex flex-wrap items-center justify-between">
        <FilterBars tabs={tabs} />
        <div className=" flex flex-row gap-2">
          <NewTopicButton />
          <TagNotificationButton />
        </div>
      </div>
      {children}
    </div>
  );
}
