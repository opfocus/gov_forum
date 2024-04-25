"use client";



import type { Item } from "@/lib/tab-group-data";
import Tab from "@/ui/tab";

export default function TabGroup({
  items,
  path,
  parallelRoutesKey,
}: {
  items: Item[];
  path: string;
  parallelRoutesKey?: string;
}) {

  return (

      <ul className=" flex grow items-center gap-2">
        {items?.map((item: Item) => (
          <li key={item.name}>
            <Tab
              path={path}
              item={item}
              parallelRoutesKey={parallelRoutesKey}
            />
          </li>
        ))}
      </ul>
  );
}
