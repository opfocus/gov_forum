import Link from "next/link";
import React from "react";
import { getTopics } from "@/utils/actions";
import type { Topic } from "@/lib/type";
import { formatTimeSince } from "@/utils/formatTimeSince";

export default async function TopicsList({
  queryFrom,
  queryValue,
}: {
  queryFrom: string | undefined;
  queryValue: string | undefined;
}) {
  let topics: Topic[] | [];

  const res = await getTopics(queryFrom, queryValue);
  topics = JSON.parse(res);

  if (topics.length === 0) return <div>No data</div>;
  else {
    return (
      <table className="w-full">
        <thead className=" border-b-[3px] border-solid border-gray-200">
          <tr>
            <th className=" px-2 py-3 text-left text-base font-medium text-gray-400">
              Topic
            </th>
            <th className=" px-2 py-3  text-base font-medium text-gray-400"></th>
            <th className=" px-2 py-3 text-base font-medium text-gray-400">
              Replies
            </th>
            <th className=" px-2 py-3 text-base font-medium text-gray-400">
              Views
            </th>
            <th className=" px-2 py-3 text-base font-medium text-gray-400">
              Activity
            </th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic, index) => (
            <tr key={index} className=" border-b border-solid border-gray-100">
              <td className=" px-2 py-3 text-left">
                <div className=" whitespace-nowrap text-base font-medium text-gray-700">
                  <Link
                    href={"/t/" + topic.slug + "/" + topic.id.toString()}
                    scroll={true}
                  >
                    {topic.title}
                  </Link>
                </div>
                <div className=" flex flex-row justify-start gap-1 text-sm font-normal text-gray-400">
                  <span>{topic.category_name}</span>
                  <span>{topic.tags.join(",")}</span>
                </div>
              </td>
              <td className="w-40 px-2 py-3 text-center  text-base font-normal text-gray-500">
                <img
                  src={topic.avatar_template}
                  alt="user avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                ></img>
              </td>
              <td className="w-20 px-2 py-3 text-center  text-base font-normal text-gray-400">
                {topic.reply_count}
              </td>
              <td className="w-20 px-2 py-3 text-center  text-base font-normal text-gray-400">
                {topic.views}
              </td>
              <td className="w-20 px-2 py-3 text-center  text-base font-normal text-gray-400">
                {formatTimeSince(topic.last_posted_at!)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
