import React from "react";
import FilterBars from "@/ui/filter-bars";
import NewTopicButton from "@/ui/new-topic-button";
import TagNotificationButton from "@/ui/tag-notifications-button";



export  default function layout({ children }: { children: React.ReactNode }) {

  return (
    <div className=" mt-8 space-y-6">
      <div className="flex justify-between items-center flex-wrap">
        <FilterBars />
        <div className=" flex flex-row gap-2">
          <NewTopicButton />
          <TagNotificationButton />
        </div>
      </div>
      {children}
    </div>
  );
}
