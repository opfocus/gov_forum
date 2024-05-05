import React from "react";
import { aboutItems } from "@/lib/tab-group-data";
import TabGroup from "@/ui/tab-group";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
};

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = "";

  return (
    <div className=" mt-8 space-y-6 bg-inherit">
            <TabGroup
        items={aboutItems}
        path={path}
      />
      {children}
    </div>
  );
}
