import type { BarItem, BarItem2 } from "@/lib/type";
import A from "@/app/_components/a";
import clsx from "clsx";

export default function UserNavTab({
  tab,
  path,
}: {
  tab: BarItem | BarItem2,
  path: string,
}) {
  return (
    // @ts-ignore
    <A path={path} slug={tab.slug} isNav1={tab.children === undefined}>
      <div
        className={clsx("flex flex-row place-content-center w-full whitespace-nowrap", {
            // @ts-ignore
          " text-sm": tab.children === undefined,
        })}
      >
        <tab.icon className=" w-5 h-5 " />
        <span className=" pl-2 ">{tab.name}</span>
      </div>
    </A>
  );
}
