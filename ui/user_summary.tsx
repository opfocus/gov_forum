import { HeartIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

export default function UserSummary({ data }: any) {
  return (
    <main>
      <section className=" flex flex-col gap-3 justify-between mt-6">
        <div className=" text-lg font-semibold text-gray-700">STATS</div>
        <ul className=" flex flex-row flex-wrap gap-4">
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.days_visited}</div>
            <div className=" text-sm text-gray-400">days visited</div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.time_read}</div>
            <div className=" text-sm text-gray-400">read time</div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.recent_time_read}</div>
            <div className=" text-sm text-gray-400">recent read time</div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.topics_entered}</div>
            <div className=" text-sm text-gray-400">topic viewed</div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.posts_read_count}</div>
            <div className=" text-sm text-gray-400">posts read</div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.likes_given}</div>
            <div className=" text-sm flex flex-row items-center">
              <HeartIcon className=" w-4 h-4 text-red-400" />
              <span className=" text-gray-400">given</span>
            </div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.likes_received}</div>
            <div className=" text-sm flex flex-row items-center">
              <HeartIcon className=" w-4 h-4 text-red-400" />
              <span className=" text-gray-400"> received</span>
            </div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.topic_count}</div>
            <div className=" text-sm text-gray-400">topic created</div>
          </li>
          <li className=" flex flex-row gap-1 items-baseline">
            <div className=" text-lg font-medium">{data.post_count}</div>
            <div className=" text-sm text-gray-400">posts created</div>
          </li>
        </ul>
        <div>sshshsh</div>
        <div>heheh</div>
      </section>
      <section className=" flex flex-col gap-3 justify-between mt-6">
        <div className=" text-lg font-semibold text-gray-700">TOP REPLIES</div>
        <ul className=" space-y-4">
          {data.replies.map((item: any) => (
            <li key={item.post_number} className=" border-l border-gray-400 border-solid px-2 py-2 flex flex-col gap-1">
              <div className=" flex flex-row gap-2 text-gray-400 text-sm">
                {new Date(item.created_at).toLocaleString("default", {
                  month: "short",
                })}{" "}
                {""} {new Date(item.created_at).getFullYear()}
                <div className=" flex flex-row items-center">
                  <HeartIcon className=" w-4 h-4 text-red-400" />
                  <span>{item.like_count}</span>
                </div>
                {/* only test ui here */}
              </div>
              <Link href={String(item.topic_id)}>{item.topic_id}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
