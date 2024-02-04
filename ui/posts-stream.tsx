"use client";

import { getTopics } from "@/utils/actions";
import Posts from "@/ui/posts";
import { getPosts } from "@/utils/actions";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

import type { Post, Topic } from "@/lib/type";
import Processing from "@/ui/processing";

export default function PostsStream() {
  const [topicRecord, setTopicRecord] = useState<Topic | undefined>(undefined);
  const [postsRecord, setPostsRecord] = useState<Post[] | undefined>(undefined);

  const params = useParams<{ title: string; id: string }>();

  useEffect(() => {
    async function getPostStream() {
      const [topicRes, postsRes] = await Promise.all([
        getTopics("postStream", params.id),
        getPosts(Number(params.id))
      ]);
      const topicData = JSON.parse(topicRes!);
      const postsData = JSON.parse(postsRes);
      setTopicRecord(topicData);
      setPostsRecord(postsData);
    }
    getPostStream();
  }, []);

  if (topicRecord === undefined || postsRecord === undefined)
    return <Processing />;
  else {
    return (
      <div>
        <div className=" max-w-4xl flex flex-col mb-4">
          <div className=" text-2xl font-semibold text-gray-700">
            <Link href={"#"}>{topicRecord.title}</Link>
          </div>
          <div className=" flex flex-row gap-1 justify-start text-sm font-normal text-gray-400">
            <span>{topicRecord.category_name}</span>
            <span>{topicRecord.tags.join(",")}</span>
          </div>
        </div>
        <Posts
          postsRecord={postsRecord}
          setPostsRecord={setPostsRecord}
        />
      </div>
    );
  }
}
