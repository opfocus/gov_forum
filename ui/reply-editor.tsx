"use client";

import { useState } from "react";
import clsx from "clsx";

import ReplyControlPanel from "@/ui/reply-control-panel";
import ReplyBottomControlPanel from "@/ui/reply-bottom-control-panel";
import Editor from "@/app/_components/focus-plugin";
import { useUser } from "@auth0/nextjs-auth0/client";
import { createPost } from "@/lib/createPost";
import type { Post } from "@/lib/type";
import { generatePostId } from "@/utils/actions";

export default function ReplyEditor({
  replyWhichPost,
  isOpenReplyEdior,
  setIsOpenReplyEditor,
  setPostsRecord,
  postsRecord,
}: {
  replyWhichPost: Post | undefined;
  isOpenReplyEdior: boolean;
  setIsOpenReplyEditor: (isOpen: boolean) => void;
  setPostsRecord: (post: Post[]) => void;
  postsRecord: Post[];
}) {
  const [isZoomEditorTextarea, setIsZoomEditorTextarea] = useState(false);
  const [myString, setMyString] = useState("");
  const { user } = useUser();

  //newPost, setNewPost Reserved for draft, not used yet
  // const [newPost, setNewPost] = useState<NewPost>(
  //   {
  //     id: 0,
  //     name: '',
  //     username: '',
  //     user_id: 0,
  //     avatar_template: '',
  //     created_at: '',
  //     cooked: '',
  //     topic_id: 0,
  //     topic_slug: ''
  //   }
  // )
  // const [newTopic, setNewTopic] = useState<NewTopic>({
  //   id: 0,
  //   title: '',
  //   create_at: '',
  //   stream: [0],
  //   slug: '',
  //   user_id: 0,
  //   user_name: '',
  //   tags: [''],
  //   category_id: 0
  // })

  const handleZoom = () => {
    if (!isZoomEditorTextarea) {
      document.documentElement.style.overflow = "hidden";
      setIsZoomEditorTextarea(true);
    } else {
      document.documentElement.style.removeProperty("overflow");
      setIsZoomEditorTextarea(false);
    }
  };

  const hiddenEditor = () => {
    setIsOpenReplyEditor(false);
    if (isZoomEditorTextarea) {
      document.documentElement.style.removeProperty("overflow");
      setIsZoomEditorTextarea(false);
    }
  };

  const handleReply = async () => {
    const res = await generatePostId();
    const [newPostIdCounter] = JSON.parse(res);

    const create_at = new Date().toISOString();
    const user_id = user?.sub!;
    const user_name = user!.nickname!;
    const avatar_template = user?.picture!;
    const postId = newPostIdCounter.sequence_value;
    const name = user?.name!;
    const cooked = myString;
    const topicId = replyWhichPost?.topic_id!;
    //test
    const topicSlug = replyWhichPost?.topic_slug!;
    const reply_to_post_number = replyWhichPost?.id!;
    const post: Post = createPost(
      postId,
      name,
      user_name,
      user_id,
      avatar_template,
      create_at,
      cooked,
      topicId,
      topicSlug,
      reply_to_post_number,
    );

    fetch("/api/reply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    });
    const newPosts = [...postsRecord, post];
    setPostsRecord(newPosts);
  };
  const createable: boolean = myString !== "";
  return (
    <div
      className={clsx(
        " transition-height fixed bottom-0 left-0 z-10 w-screen origin-bottom  transform bg-white duration-300",
        {
          "h-0": !isOpenReplyEdior,
          " h-full": isZoomEditorTextarea,
          " h-80": !isZoomEditorTextarea && isOpenReplyEdior,
        },
      )}
    >
      <div
        className={clsx(
          "transition-width mx-auto flex h-full origin-center transform flex-col  shadow-2xl duration-300",
          {
            " over w-full": isZoomEditorTextarea,
            " w-3/5": !isZoomEditorTextarea,
          },
        )}
      >
        <div className=" h-2 bg-blue-400"></div>
        <div className=" flex flex-col gap-2 px-2 py-2 ">
          <ReplyControlPanel
            isZoomEditorTextarea={isZoomEditorTextarea}
            handleZoom={handleZoom}
            hiddenEditor={hiddenEditor}
            replyWhichPost={replyWhichPost}
          />
          <div className="flex w-full grow flex-row gap-4">
            <div className="flex h-full w-full flex-col gap-2">
              <div
                className={clsx("w-full", {
                  hidden: isZoomEditorTextarea,
                })}
              ></div>
              <div className="  growo border border-solid border-gray-400">
                <Editor
                  setMyString={setMyString}
                  isZoomEditorTextarea={isZoomEditorTextarea}
                />
              </div>
            </div>
          </div>
          <ReplyBottomControlPanel
            handleReply={handleReply}
            createable={createable}
          />
        </div>
      </div>
    </div>
  );
}
