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
  topics = JSON.parse(res)

  if (topics.length === 0) return <div>No data</div>;
  else {
    return (
      <table className="w-full">
        <thead className=" border-b-2 border-gray-200 border-solid">
          <tr className=" ">
            <th className=" text-left text-gray-400 py-3 px-2 text-base font-medium">
              Topic
            </th>
            <th className=" text-gray-400 py-3 px-2 text-base font-medium"></th>
            <th className=" text-gray-400 py-3 px-2 text-base font-medium">
              Replies
            </th>
            <th className=" text-gray-400 py-3 px-2 text-base font-medium">
              Views
            </th>
            <th className=" text-gray-400 py-3 px-2 text-base font-medium">
              Activity
            </th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic) => (
            <tr
              key={topic.id}
              className=" border-b border-gray-100 border-solid"
            >
              <td className=" text-left px-2 py-3">
                <div className=" text-base font-medium text-gray-700 whitespace-nowrap">
                  <Link href={"/t/"+topic.slug + "/" + topic.id.toString()}>{topic.title}</Link>
                </div>
                <div className=" flex flex-row gap-1 justify-start text-sm font-normal text-gray-400">
                  <span>{topic.category_name}</span>
                  <span>{topic.tags.join(",")}</span>
                </div>
              </td>
              <td className="text-center w-40 px-2 py-3  text-base font-normal text-gray-500">
                <img
                  src={topic.avatar_template}
                  alt="user avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                ></img>
              </td>
              <td className="text-center w-20 px-2 py-3  text-base font-normal text-gray-400">
                {topic.reply_count}
              </td>
              <td className="text-center w-20 px-2 py-3  text-base font-normal text-gray-400">
                {topic.views}
              </td>
              <td className="text-center w-20 px-2 py-3  text-base font-normal text-gray-400">
                {formatTimeSince(topic.last_posted_at!)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
