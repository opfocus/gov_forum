import Link from "next/link";
import React from "react";
import { subCategories } from "@/lib/sub-categories";

export default async function TopicsLatest({
  topics,
  categories,
}: {
  topics: any[];
  categories: any[];
}) {
  const formatTimeSince = (timestamp: string): string => {
    const lastPostDate = new Date(timestamp) as Date;
    const currentDate = new Date() as Date;
    const difference =
      (currentDate.getTime() - lastPostDate.getTime()) / (1000 * 60);

    if (difference >= 1440) {
      return `${Math.floor(difference / 1440)}d`;
    } else if (difference >= 60) {
      return `${Math.floor(difference / 60)}h`;
    } else if (difference >= 1) {
      return `${Math.floor(difference)}min`;
    } else {
      return "just now";
    }
  };

  const fetchCategoryDetailsById = (id: number) => {
    let matchedCategory = categories?.find(
      (category: any) => category.id === id
    );
    if (matchedCategory !== undefined)
      return {
        id: matchedCategory.id,
        color: matchedCategory.color,
        href: `/c/${matchedCategory.slug}/${matchedCategory.id}`,
      };
    matchedCategory = subCategories.find(
      (subCategory: any) => subCategory.id === id
    );
    let parentCategory = categories?.find(
      (category: any) => category.id === matchedCategory.id
    );
    return {
      id: matchedCategory?.id,
      color: matchedCategory?.color,
      href: `/c/${parentCategory?.slug}/${matchedCategory?.slug}/${matchedCategory?.id}`,
    };
  };

  return (
    <div>
      <div className=" border-b-4 border-gray-200 border-solid">
        <div className="text-gray-400 text-base font-medium p-2">Latest</div>
      </div>
      {topics.map((topic) => (
        <div
          key={topic.name}
          className=" border-b border-gray-200 border-solid flex flex-row  items-center p-4"
        >
          <img
            src={topic.avatar_template}
            alt="user avatar"
            width={48}
            height={48}
            className="rounded-full mr-3"
          ></img>
          <div className="flex flex-col grow gap-[2px]">
            <Link
              href={"t/" + topic.slug + "/" + topic.id.toString()}
              scroll={false}
            >
              <div className=" text-gray-700">{topic.title}</div>
            </Link>
            <div className=" text-sm text-gray-400 flex flex-row gap-2">
              <Link
                href={fetchCategoryDetailsById(topic.category_id).href}
                title={`Link to ${topic.category_name}`}
                className=" flex flex-row gap-1 items-center"
              >
                <span
                  className=" w-2 h-2"
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
                  <Link href={`/tag/${tagName}`} title={`Link to ${tagName}`}>
                    {tagName}
                  </Link>
                ))}
              </span>
            </div>
          </div>
          <div className=" flex flex-col gap-1">
            <div className="text-right text-lg font-semibold text-gray-500 ">
              {topic.stream.length}
            </div>
            <div className=" text-right text-sm font-normal text-gray-400">
              {formatTimeSince(topic.last_posted_at!)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
