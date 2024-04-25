import Link from "next/link";
import React from "react";
import { formatTimeSince } from "@/utils/formatTimeSince";
import { fetchCategoryById } from "@/utils/fetchCategoryById";
import { Route } from "next";

export default async function TopicsListTable({
  topicsData,
  categoriesData,
}: {
  topicsData: Promise<any[]>;
  categoriesData: Promise<any[]>;
}) {
  const [topics, categories] = await Promise.all([topicsData, categoriesData]);

  if (topics.length !== 0)
    return (
      <table className="w-full">
        <thead className=" border-b-4 border-solid border-gray-100 font-medium text-gray-400 dark:border-gray-600 dark:text-gray-300">
          <tr>
            <th className=" p-2 text-left ">Topic</th>
            <th className=" sm-hidden p-2"></th>
            <th className=" p-2">Replies</th>
            <th className=" sm-hidden p-2">Views</th>
            <th className=" p-2">Activity</th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic: any) => (
            <tr
              key={topic.name}
              className=" border-b border-solid border-gray-100 dark:border-gray-600"
            >
              <td className=" w-7/12 p-4 text-left text-gray-500 dark:text-gray-200 ">
                <div className="flex grow flex-col gap-0.5">
                  <Link
                    href={
                      ("/t/" + topic.slug + "/" + topic.id.toString()) as Route
                    }
                    scroll={true}
                  >
                    {topic.title}
                  </Link>
                  <div className=" flex flex-row flex-wrap gap-1 text-xs">
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
              <td className="sm-hidden w-1/6 p-4 text-left">
                <img
                  src={topic.avatar_template}
                  alt="user avatar"
                  width={24}
                  height={24}
                  className="m-auto rounded-full"
                ></img>
              </td>
              <td className="p-4 w-1/12 text-center text-base font-normal text-gray-400 dark:text-gray-300 ">
                {topic.reply_count}
              </td>
              <td className="sm-hidden w-1/12  p-4  text-center text-base font-normal text-gray-400 dark:text-gray-300">
                {topic.views}
              </td>
              <td className="p-4 w-1/12 text-center text-base font-normal text-gray-400 dark:text-gray-300 ">
                {formatTimeSince(topic.last_posted_at)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  return <div>No data</div>;
}
