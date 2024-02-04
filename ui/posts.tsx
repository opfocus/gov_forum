"use client";

import { useState} from "react";
import type { Post } from "@/lib/type";
import ReplyEditor from "@/ui/reply-editor";
import PostC from "@/ui/postc";

export default function Posts({
  postsRecord, setPostsRecord
}: {
  postsRecord: Post[];
  setPostsRecord:(post:Post[]) =>void
}) {
  const [replyWhichPost, setReplyWhichPost] = useState<Post | undefined>(undefined);
  const [isOpenReplyEdior, setIsOpenReplyEditor] = useState(false);

  return (
    <div>
      {postsRecord.map((post, index) => (
        <PostC 
        key={index}
        post={post} 
        index={index}
        postsRecord={postsRecord}
        setReplyWhichPost={setReplyWhichPost}
        setIsOpenReplyEditor={setIsOpenReplyEditor}
        />
      ))}

      <ReplyEditor
      replyWhichPost={replyWhichPost}
        isOpenReplyEdior={isOpenReplyEdior}
        setIsOpenReplyEditor={setIsOpenReplyEditor}
        setPostsRecord={setPostsRecord}
        postsRecord={postsRecord}
      />
    </div>
  );
}
