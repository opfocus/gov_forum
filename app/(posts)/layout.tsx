import React from "react";
import FilterBars from "@/ui/filter-bars";
import NewTopicButton from "@/ui/new-topic-button";

import type { Metadata } from "next";

export const revalidate = 1800

export const metadata:Metadata = {
  title: "topics",
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" mt-8 space-y-6">
      <div className="flex justify-between items-center flex-wrap">
        <FilterBars />
        <NewTopicButton />
      </div>
      {children}
    </div>
  );
}
