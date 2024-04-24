import Link from "next/link";
import React from "react";
import { formatTimeSince } from "@/utils/formatTimeSince";
import { fetchCategoryById } from "@/utils/fetchCategoryById";
import { Route } from "next";

export default async function TopicsList({
  topicsData,
  categoriesData,
}: {
  topicsData: Promise<any[]>;
  categoriesData: Promise<any[]>;
}) {
  const [topics, categories] = await Promise.all([topicsData, categoriesData])

  if (topics.length !== 0)
    return (
      <table className="w-full">
        <thead className=" border-gray-100 dark:border-gray-600 border-b-4 border-solid">
          <tr>
            <th className=" p-2 text-left font-medium text-gray-400 dark:text-gray-300">
              Topic
            </th>
            <th className=" sm-hidden p-2 font-medium text-gray-400 dark:text-gray-300"></th>
            <th className=" p-2 font-medium text-gray-400 dark:text-gray-300">
              Replies
            </th>
            <th className=" sm-hidden p-2 font-medium text-gray-400 dark:text-gray-300">
              Views
            </th>
            <th className=" p-2 font-medium text-gray-400 dark:text-gray-300">
              Activity
            </th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic: any) => (
            <tr
              key={topic.name}
              className=" border-gray-100 dark:border-gray-600 border-b border-solid"
            >
              <td className=" p-4 text-left">
                <div className="flex grow flex-col gap-0.5">
                  <Link
                    href={
                      ("/t/" + topic.slug + "/" + topic.id.toString()) as Route
                    }
                    scroll={true}
                    className=" text-gray-500 dark:text-gray-200 "
                  >
                    {topic.title}
                  </Link>
                  <div className=" flex flex-row flex-wrap gap-1 text-xs text-gray-500 dark:text-gray-200">
                    <Link
                      href={
                        fetchCategoryById(topic.category_id, categories)
                          .href as Route
                      }
                      title={`Link to ${topic.category_name}`}
                      className=" flex flex-row items-center gap-1 whitespace-nowrap"
                    >
                      <span
                        className=" h-2 w-2"
                        style={{
                          backgroundColor: `#${
                            fetchCategoryById(topic.category_id, categories)
                              .color
                          }`,
                        }}
                      ></span>
                      <span>{topic.category_name}</span>
                    </Link>
                    <span className=" flex flex-row gap-1">
                      {topic.tags.map((tagName: string) => (
                        <Link
                          href={`/tag/${tagName}`}
                          title={`Link to ${tagName}`}
                        >
                          {tagName}
                        </Link>
                      ))}
                    </span>
                  </div>
                </div>
              </td>
              <td className="sm-hidden w-40 p-4 text-left">
                <img
                  src={topic.avatar_template}
                  alt="user avatar"
                  width={24}
                  height={24}
                  className="m-auto rounded-full"
                ></img>
              </td>
              <td className="dark:text-gray-30 px-2 py-3  text-center text-base font-normal text-gray-400 ">
                {topic.reply_count}
              </td>
              <td className="sm-hidden px-2 py-3  text-center text-base font-normal text-gray-400 dark:text-gray-300">
                {topic.views}
              </td>
              <td className="px-2 py-3 text-center  text-base font-normal text-gray-400 dark:text-gray-300 ">
                {formatTimeSince(topic.last_posted_at)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  return <div>No data</div>;
}
