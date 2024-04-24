"use client";

import { formatTimeSince } from "@/utils/formatTimeSince";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEditorOpen } from "@/app/context/open-editor-provider";
import { usePathname } from "next/navigation";
import type { Post } from "@/lib/type";
import { incrementLike } from "@/utils/actions";
import clsx from "clsx";
import Link from "next/link";

import {
  HeartIcon,
  LinkIcon,
  EllipsisHorizontalIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/16/solid";

export default function PostC({
  post,
  index,
  setIsOpenReplyEditor,
  setReplyWhichPost,
  postsRecord,
}: {
  post: Post;
  index: number;
  setIsOpenReplyEditor: (isOpen: boolean) => void;
  setReplyWhichPost: (post: Post) => void;
  postsRecord: Post[];
}) {
  const [likes, setLikes] = useState(post.likes.length);
  const { user } = useUser();
  const path = usePathname();

  const [, setOpen] = useEditorOpen()

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
      className=" flex max-w-3xl flex-row gap-1 border-t border-solid border-gray-200"
    >
      <img
        src={post.avatar_template}
        alt="user avatar"
        width={48}
        height={48}
        className="mt-4 h-12 w-12 rounded-full"
      ></img>
      <div className=" grow">
        <div className="flex flex-row items-center gap-2 px-3 pb-1 pt-3">
          <div className=" grow text-base font-semibold text-gray-500">
            {post.username}
          </div>
          {post.reply_to_post_number > 0 ? (
            <div
              className={clsx(
                " flex flex-row items-center gap-1 text-gray-400",
              )}
            >
              <img
                src={replyToPost(post.reply_to_post_number).avatar_template}
                alt="use avatar"
                className=" h-6 w-6 rounded-full"
              />
              <span>{replyToPost(post.reply_to_post_number).username}</span>
              <ArrowUturnLeftIcon className=" h-5 w-5" />
            </div>
          ) : null}
          <div className=" text-sm font-medium text-gray-400">
            {formatTimeSince(post.created_at)}
          </div>
        </div>
        <div
          className="px-3 pb-1 pt-3"
          dangerouslySetInnerHTML={{ __html: post.cooked }}
        ></div>
        <div className="my-5 flex flex-row justify-end text-gray-300">
          <button
            className={clsx(
              "flex flex-row items-center gap-2 p-2 hover:bg-gray-200",
              {
                "cursor-not-allowed":
                  user === undefined ||
                  post.likes.includes(user!.sub!) ||
                  post.likes.length !== likes,
              },
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
              className={clsx(" h-5 w-5 hover:text-red-200", {
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
            <LinkIcon className=" h-6 w-6" />
          </button>
          <button
            className=" cursor-not-allowed  p-2 hover:bg-gray-200  hover:text-gray-700"
            title="TBA"
          >
            <EllipsisHorizontalIcon className=" h-6 w-6" />
          </button>
          {user ? (
            <button
              className=" flex flex-row p-2 text-base font-medium hover:bg-gray-200 hover:text-gray-700"
              onClick={() => {
                setOpen(false);
                setIsOpenReplyEditor(true);
                setReplyWhichPost(post);
              }}
            >
              <ArrowUturnLeftIcon className=" h-6 w-6" />
              <span>Reply</span>
            </button>
          ) : (
            <Link
              className=" flex flex-row p-2 text-base font-medium hover:bg-gray-200 hover:text-gray-700"
              href={"/api/auth/login"}
            >
              <ArrowUturnLeftIcon className=" h-6 w-6" />
              <span>Reply</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
