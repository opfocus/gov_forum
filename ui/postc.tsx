"use client";

import { formatTimeSince } from "@/utils/formatTimeSince";
import { useState, useContext } from "react";
import { OpenEditorContext } from "@/app/components/open-editor-provider";
import { useUser } from "@auth0/nextjs-auth0/client";
import { usePathname } from "next/navigation";
import type { Post } from "@/lib/type";
import { incrementLike } from "@/utils/actions";
import clsx from "clsx";
import Link from "next/link";

import {
  HeartIcon,
  LinkIcon,
  DotsHorizontalIcon,
  ReplyIcon,
} from "@heroicons/react/outline";

export default function PostC({
  post,
  index,
  setIsOpenReplyEditor,
  setReplyWhichPost,
  postsRecord,
}: {
  post:Post,
  index:number
  setIsOpenReplyEditor: (isOpen: boolean) => void;
  setReplyWhichPost: (post: Post) => void;
  postsRecord: Post[];
}) {
  const [likes, setLikes] = useState(post.likes.length);
  const { user } = useUser();
  const context = useContext(OpenEditorContext);
  const path = usePathname();


  //Check whether topic-editor is open. If it is open, it will be closed when reply button is clicked.
  if (context === undefined) {
    throw new Error("Editor context not work in topic-create component");
  }
  const { setIsOpen } = context;

  function copyToClipboard(index: number) {
    const text = process.env.NEXT_PUBLIC_BASE_URL + path + `#post-${index}`;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  }

  const replyToPost = (id: number): Post => {
    const [replyedPost] = postsRecord.filter((post) => post.id === id);
    return replyedPost;
  };

  return (
        <div
          id={`post-${index}`}
          className=" max-w-4xl border-t border-solid border-gray-200 flex flex-row gap-1"
        >
          <img
            src={post.avatar_template}
            alt="user avatar"
            width={48}
            height={48}
            className="rounded-full w-12 h-12 mt-4"
          ></img>
          <div className=" grow">
            <div className="flex flex-row gap-2 items-center px-3 pt-3 pb-1">
              <div className=" grow text-base font-semibold text-gray-500">
                {post.username}
              </div>
              {(post.reply_to_post_number >0) ? 
                <div className={clsx(" flex flex-row gap-1 items-center text-gray-400")}>
                  <img
                    src={replyToPost(post.reply_to_post_number).avatar_template}
                    alt="use avatar"
                    className=" w-6 h-6 rounded-full"
                  />
                  <span>{replyToPost(post.reply_to_post_number).username}</span>
                  <ReplyIcon className=" w-5 h-5"/>
                </div>
                :
                null
              }
              <div className=" text-sm font-medium text-gray-400">
                {formatTimeSince(post.created_at)}
              </div>
            </div>
            <div
              className="px-3 pt-3 pb-1"
              dangerouslySetInnerHTML={{ __html: post.cooked }}
            ></div>
            <div className="flex justify-end flex-row text-gray-300 my-5">
              <button
                className={clsx(
                  "flex flex-row gap-2 items-center p-2 hover:bg-gray-200",
                  {
                    "cursor-not-allowed":
                      user === undefined ||
                      post.likes.includes(user!.sub!) ||
                      post.likes.length !== likes,
                  }
                )}
                disabled={
                  user === undefined ||
                  post.likes.includes(user!.sub!) ||
                  post.likes.length !== likes
                }
                onClick={() => {
                  incrementLike(post.id, user?.sub!);

                  const like_count = likes;
                  setLikes(like_count + 1);
                }}
              >
                <span className="hover:text-gray-700">{likes}</span>
                <HeartIcon
                  className={clsx(" w-5 h-5 hover:text-red-200", {
                    "text-red-400":
                      post.likes.length !== likes ||
                      (user?.sub && post.likes.includes(user.sub)),
                  })}
                />
              </button>
              <button
                className=" p-2 hover:bg-gray-200  hover:text-gray-700"
                title="copy a link to this post to clipboard"
                onClick={() => copyToClipboard(index)}
              >
                <LinkIcon className=" w-6 h-6" />
              </button>
              <button
                className=" cursor-not-allowed  p-2 hover:bg-gray-200  hover:text-gray-700"
                title="TBA"
              >
                <DotsHorizontalIcon className=" w-6 h-6" />
              </button>
              {user ? 
              <button
              className=" text-base font-medium flex flex-row p-2 hover:bg-gray-200 hover:text-gray-700"
              onClick={() => {
                setIsOpen(false);
                setIsOpenReplyEditor(true);
                setReplyWhichPost(post);
              }}
            >
              <ReplyIcon className=" w-6 h-6" />
              <span>Reply</span>
            </button>
            :
            <Link
            className=" text-base font-medium flex flex-row p-2 hover:bg-gray-200 hover:text-gray-700"
              href={'/api/auth/login'}
          >
            <ReplyIcon className=" w-6 h-6" />
            <span>Reply</span>
          </Link>
              }

            </div>
          </div>
        </div>
  );
}
