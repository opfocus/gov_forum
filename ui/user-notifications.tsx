import { BellIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function UserNotifications({ data }: { data: any[] }) {
  if (data === undefined)
    return (
      <main>
        <section className=" mt-8">no data here</section>
      </main>
    );
  return (
    <main>
      <section className=" mt-8">
        <div className=" p-2">Filter By All</div>
        <ul>
          {data.map((item: any, index) => (
            <li key={index} className=" py-3">
              <div className=" flex flex-row items-center m-1 px-1">
                <BellIcon className="w-4 h-4 mr-2 text-gray-400" />
                <Link href={`/t/${item.slug}/${item.topic_id}`}
                  className=" text-cyan-700 text-sm grow text-clip"
                >
                  {item.fancy_title}
                </Link>
                <span className=" text-xs text-gray-400">
                  {new Date(item.created_at).toLocaleString("default", {
                    month: "short"
                  })}{" "}{new Date(item.created_at).getDay() + 1}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
