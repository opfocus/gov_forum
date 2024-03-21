"use client";

import { getTopics } from "@/utils/actions";
import Posts from "@/ui/posts";
import { getPosts } from "@/utils/actions";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

import type { Post, Topic } from "@/lib/type";
import Processing from "@/ui/processing";
import TimeLine from "./time-line";

export default function PostsStream() {
  const [topicRecord, setTopicRecord] = useState<Topic | undefined>(undefined);
  const [postsRecord, setPostsRecord] = useState<Post[] | undefined>(undefined);
  const [activePostId, setActivePostId] = useState<string | undefined>(undefined);
  const [nextPostIndex, setNextPostIndex] = useState<string | undefined>(undefined)

  const params = useParams<{ title: string; id: string }>();

  useEffect(() => {
    async function getPostStream() {
      const [topicRes, postsRes] = await Promise.all([
        getTopics("postStream", params.id),
        getPosts(Number(params.id)),
      ]);
      const topicData = JSON.parse(topicRes!);
      const postsData = JSON.parse(postsRes);
      setTopicRecord(topicData);
      setPostsRecord(postsData);
    }
    getPostStream();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const allElements = document.querySelectorAll("[id^='post']");
      allElements.forEach((element) => {
        const elementRect = element.getBoundingClientRect();

        if (elementRect.top <= 60 && elementRect.bottom > 60) {
          setActivePostId(`${element.id}`);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  },[postsRecord])

  useEffect(() => {
    let postElement

    if (nextPostIndex !== undefined) {
       postElement = document.getElementById(nextPostIndex)
       if (postElement) {
        postElement.scrollIntoView({block: "start"});
      }
    } 
  }, [nextPostIndex])

  if (topicRecord === undefined || postsRecord === undefined)
    return <Processing />;
  else {
    return (
      <div>
        <div className=" max-w-5xl flex flex-col mb-4">
          <div className=" text-2xl font-semibold text-gray-700">
            {topicRecord.title}
          </div>
          <div className=" flex flex-row gap-1 justify-start text-sm font-normal text-gray-400">
            <span>{topicRecord.category_name}</span>
            <span>{topicRecord.tags.join(",")}</span>
          </div>
        </div>
        <div className=" flex flex-row gap-4">
          <Posts postsRecord={postsRecord} setPostsRecord={setPostsRecord} />
          <TimeLine
            postCount={postsRecord.length}
            postsRecord={postsRecord}
            activePostId={activePostId}
            setNextPostIndex = {setNextPostIndex}
          />
        </div>
      </div>
    );
  }
}
