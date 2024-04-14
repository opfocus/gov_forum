import Link from "next/link";
import React from "react";
import { getTopics } from "@/utils/actions";
import type { Topic } from "@/lib/type";
import { formatTimeSince } from "@/utils/formatTimeSince";
import { getCategories } from "@/utils/getCategories";
import { subCategories } from "@/lib/sub-categories";

export default async function TopicsList({
  queryFrom,
  queryValue,
}: {
  queryFrom: string | undefined;
  queryValue: string | undefined;
}) {
  let topics: Topic[] | [];
  let categories = await getCategories();

  const fetchCategoryDetailsById = (id: number) => {
    let matchedCategory = categories?.find(
      (category: any) => category.id === id,
    );
    if (matchedCategory !== undefined)
      return {
        id: matchedCategory.id,
        color: matchedCategory.color,
        href: `/c/${matchedCategory.slug}/${matchedCategory.id}`,
      };
    matchedCategory = subCategories.find(
      (subCategory: any) => subCategory.id === id,
    );
    let parentCategory = categories?.find(
      (category: any) => category.id === matchedCategory.id,
    );
    return {
      id: matchedCategory?.id,
      color: matchedCategory?.color,
      href: `/c/${parentCategory?.slug}/${matchedCategory?.slug}/${matchedCategory?.id}`,
    };
  };

  const res = await getTopics(queryFrom, queryValue);
  topics = JSON.parse(res);

  if (topics.length === 0) return <div>No data</div>;
  else {
    return (
      <table className="w-full">
        <thead className=" border-b-4 border-solid border-slate-100 dark:border-slate-600">
          <tr>
            <th className=" p-2 text-left font-medium text-slate-400 dark:text-slate-300">
              Topic
            </th>
            <th className=" p-2 font-medium text-slate-400 dark:text-slate-300 sm-hidden"></th>
            <th className=" p-2 font-medium text-slate-400 dark:text-slate-300">
              Replies
            </th>
            <th className=" p-2 font-medium text-slate-400 dark:text-slate-300 sm-hidden">
              Views
            </th>
            <th className=" p-2 font-medium text-slate-400 dark:text-slate-300">
              Activity
            </th>
          </tr>
        </thead>
        <tbody>
          {topics.map((topic, index) => (
            <tr
              key={index}
              className=" border-b border-solid border-slate-100 dark:border-slate-600"
            >
              <td className=" p-4 text-left">
                <div className="flex grow flex-col gap-0.5">
                  <Link
                    href={"/t/" + topic.slug + "/" + topic.id.toString()}
                    scroll={true}
                    className=" text-slate-500 dark:text-slate-200 "
                  >
                    {topic.title}
                  </Link>
                  <div className=" flex flex-row flex-wrap gap-1 text-xs text-slate-500 dark:text-slate-200">
                    <Link
                      href={fetchCategoryDetailsById(topic.category_id).href}
                      title={`Link to ${topic.category_name}`}
                      className=" flex flex-row items-center gap-1 whitespace-nowrap"
                    >
                      <span
                        className=" h-2 w-2"
                        style={{
                          backgroundColor: `#${
                            fetchCategoryDetailsById(topic.category_id).color
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
              <td className="w-40 p-4 text-left sm-hidden">
                <img
                  src={topic.avatar_template}
                  alt="user avatar"
                  width={24}
                  height={24}
                  className="rounded-full m-auto"
                ></img>
              </td>
              <td className="px-2 py-3 text-center  text-base font-normal text-slate-400 dark:text-slate-30 ">
                {topic.reply_count}
              </td>
              <td className="px-2 py-3 text-center  text-base font-normal text-slate-400 dark:text-slate-300 sm-hidden">
                {topic.views}
              </td>
              <td className="px-2 py-3 text-center  text-base font-normal text-slate-400 dark:text-slate-300 ">
                {formatTimeSince(topic.last_posted_at!)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
