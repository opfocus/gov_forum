import Link from "next/link";
import React from "react";

export default async function TopicsLatest({topics}: {
  topics:any[]
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
          <div className="flex flex-col grow">
            <Link
              href={"t/" + topic.slug + "/" + topic.id.toString()}
              scroll={false}
            >
              <div className=" text-gray-700">{topic.title}</div>
            </Link>
            <div className=" text-sm text-gray-400 font-light">
              {`${topic.category_name} ${topic.tags.join(",")}`}
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
