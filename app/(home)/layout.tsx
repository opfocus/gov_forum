import React from "react";
import TabGroup from "@/ui/tab-group";
import { homeItems } from "@/lib/tab-group-data";

import type { Metadata } from "next";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "topics",
};


export default function layout({ children }: { children: React.ReactNode }) {
  const items = homeItems
  const path = ""
 
  return (
    <div className=" mt-8 space-y-6 bg-inherit">
      <TabGroup items={items} path={path}/>
      {children}
    </div>
  );
}
