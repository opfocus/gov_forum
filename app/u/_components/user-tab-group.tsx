import type { BarItem, BarItem2 } from "@/lib/type";
import UserNavTab from "@/app/u/_components/user-tab";
import clsx from "clsx";

export default function UserTabGroup({
  userTabs,
  path,
}: {
  userTabs: BarItem[] | BarItem2[];
  path: string;
}) {
  return (
    <div
      className={clsx(
        " flex w-full flex-row border-y border-solid border-gray-200",
        {
          "": true,
        },
      )}
    >
      {userTabs.map((item) => (
        <UserNavTab key={item.id} tab={item} path={path} />
      ))}
    </div>
  );
}
