import Link from "next/link";
import React from "react";
import type { Route } from "next";
import { formatTimeSince } from "@/utils/formatTimeSince";
import { fetchCategoryById } from "@/utils/fetchCategoryById";

export default async function TopicListDiv({
  topicsData,
  categoriesData,
}: {
  topicsData: Promise<any[]> | any[];
  categoriesData: Promise<any[]> | any[];
}) {
  const [topics, categories] = await Promise.all([topicsData, categoriesData])
  let data = new Date().toISOString()
  return (
    <div>
      <div className=" border-b-4 border-solid border-gray-100 dark:border-gray-600">
        <div className="p-2 font-medium text-gray-400 dark:text-gray-300">
          Latest {data}
        </div>
      </div>
      {topics.map((topic) => (
        <div
          key={topic.name}
          className=" flex flex-row items-center border-b border-solid  border-gray-100 p-4 dark:border-gray-600"
        >
          <img
            src={topic.avatar_template}
            alt="user avatar"
            width={48}
            height={48}
            className="mr-3 shrink-0 rounded-full"
          ></img>
          <div className="flex grow flex-col gap-0.5">
            <Link
              href={("t/" + topic.slug + "/" + topic.id.toString()) as Route}
              scroll={false}
              className=" text-gray-500 dark:text-gray-200 "
            >
              {topic.title}
            </Link>
            <div className=" flex flex-row gap-2 text-xs text-gray-500 dark:text-gray-200">
              <Link
                href={fetchCategoryById(topic.category_id, categories).href as Route}
                title={`Link to ${topic.category_name}`}
                className=" flex flex-row items-center gap-1"
              >
                <span
                  className=" h-2 w-2"
                  style={{
                    backgroundColor: `#${
                      fetchCategoryById(topic.category_id, categories).color
                    }`,
                  }}
                ></span>
                <span>{topic.category_name}</span>
              </Link>
              <span className=" flex flex-row gap-1">
                {topic.tags.map((tagName: string) => (
                  <Link href={`/tag/${tagName}`} title={`Link to ${tagName}`}>
                    {tagName}
                  </Link>
                ))}
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-1">
            <div className="text-right text-lg font-semibold text-gray-400 dark:text-gray-300">
              {topic.stream.length}
            </div>
            <div className=" text-right text-sm font-normal text-gray-300 dark:text-gray-400">
              {formatTimeSince(topic.last_posted_at!)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
