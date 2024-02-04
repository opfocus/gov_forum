import Link from "next/link";
import React from "react";
import { getTopics } from "@/utils/actions";
import type { Topic } from "@/lib/type";

export default async function TopicsLatest() {
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

  let topics: Topic[] | [];

  const res = await getTopics();
  topics = JSON.parse(res)

  if (topics.length === 0) return <div>No data</div>;
  else {
    return (
      <div>
        <div className=" border-b-2 border-gray-400 border-solid">
          <div className="text-gray-400 text-base font-medium p-2">Latest</div>
        </div>
        {topics.map((topic) => (
          <div
            key={topic.id}
            className=" border-b border-gray-200 border-solid flex flex-row gap-4 items-center px-2 py-4"
          >
            <img
              src={topic.avatar_template}
              alt="user avatar"
              width={40}
              height={40}
              className="rounded-full"
            ></img>
            <div className="flex flex-col grow">
            <Link href={"t/"+topic.slug + "/" + topic.id.toString()}>{topic.title}</Link>
              <div className=" text-sm text-gray-400 font-light">
                {`${topic.category_name} ${topic.tags.join(',')}`}
              </div>
            </div>
            <div className=" flex flex-col gap-1">
            <div className="text-right text-lg font-semibold text-gray-400 ">
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
}
