import React from "react";
import FilterBars from "@/ui/filter-bars";
import NewTopicButton from "@/ui/new-topic-button";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" space-y-6">
      <div className="flex justify-between items-center flex-wrap">
        <FilterBars />
        <NewTopicButton />
      </div>
      {children}
    </div>
  );
}
