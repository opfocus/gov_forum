//   todo:  title need requaried.  building....

"use client";

import { useState, useContext } from "react";
import { useEditorOpen } from "@/app/context/open-editor-provider";
import clsx from "clsx";

import TopicCreateControlPanel from "@/ui/topic-create-control-panel";
import TopicCreateBottomControlPanel from "@/ui/topic-create-bottom-control-panel";
import TopicEditorTitleCategoryTag from "./topic-editor-title-category-tag";
import Editor from "@/app/_components/focus-plugin";

import { generateSlug } from "@/lib/genrateTopicSlug";
import { useUser } from "@auth0/nextjs-auth0/client";
import { createTopic } from "@/lib/createTopic";
import { createPost } from "@/lib/createPost";
import type { Post, Topic } from "@/lib/type";

export default function TopicCreate() {
  const [isZoomEditorTextarea, setIsZoomEditorTextarea] = useState(false);
  const [isOpen, setOpen] = useEditorOpen();
  const [myString, setMyString] = useState("");
  const { user } = useUser();
  const [status, setStatus] = useState("create");

  const [categorySelected, setCategorySelected] = useState<
    | {
        id: number;
        name: string;
      }
    | undefined
  >();

  const [tagSelected, setTagSelected] = useState<string[] | undefined>(
    undefined,
  );

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
    setOpen(false);
    if (isZoomEditorTextarea) {
      document.documentElement.style.removeProperty("overflow");
      setIsZoomEditorTextarea(false);
    }
  };

  const handleCreate = async () => {
    const res = await fetch("api/counters");
    const [newPostIdCounter, newTopicIdCounter] = await res.json();

    // topic construct
    //asign new topic id
    const topiciId = newTopicIdCounter.sequence_value;

    const inputElement = document.getElementById(
      "topic-input",
    ) as HTMLInputElement;

    title = inputElement.value;

    //asign new topic create date
    const create_at = new Date().toISOString();
    // asign new topic post stream
    const stream = [newPostIdCounter.sequence_value];
    //asign new topic slug
    const topicSlug = generateSlug(title);
    const user_id = user?.sub!;
    // user name
    const user_name = user!.nickname!;
    //tag name
    const tags = tagSelected;
    //category id (hard write for testing)
    const category_id = categorySelected!.id;
    const category_name = categorySelected!.name;
    const last_posted_at = create_at;
    const avatar_template = user?.picture!;

    const topic: Topic = createTopic(
      topiciId,
      title,
      create_at,
      stream,
      topicSlug,
      user_id,
      user_name,
      tags,
      category_id,
      category_name,
      last_posted_at,
      avatar_template,
    );
    //post construct
    //post id
    const postId = newPostIdCounter.sequence_value;
    // psot related user name
    const name = user?.name!;
    //post cooked
    const cooked = myString;

    const post: Post = createPost(
      postId,
      name,
      user_name,
      user_id,
      avatar_template,
      create_at,
      cooked,
      topiciId,
      topicSlug,
    );

    //for testing... (not complete)
    fetch("/api/posts", {
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
    fetch("api/topic", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(topic),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    });
    setStatus("created");
  };

  let title;
  const createable: boolean =
    tagSelected !== undefined &&
    myString !== "" &&
    categorySelected !== undefined;
  return (
    <div
      className={clsx(
        " overscroll-contain transition-height fixed bottom-0 left-0 z-10 w-screen origin-bottom  transform  duration-300",
        {
          "h-0": !isOpen,
          " h-full": isZoomEditorTextarea,
          " max-h-96": !isZoomEditorTextarea && isOpen,
        },
      )}
    >
      <div
        className={clsx(
          " transition-width mx-auto flex origin-center transform flex-col bg-white shadow-lg duration-300  dark:bg-gray-700",
          {
            " w-full h-full": isZoomEditorTextarea,
            " px-3 sm:max-lg:max-w-xl lg:max-xl:max-w-4xl  xl:max-w-6xl": !isZoomEditorTextarea,
          },
        )}
      >
        <div className=" -mt-2 h-2 bg-sky-600"></div>
        <div className="h-full  flex flex-col gap-2  bg-inherit p-2">
          <TopicCreateControlPanel
            isZoomEditorTextarea={isZoomEditorTextarea}
            handleZoom={handleZoom}
            hiddenEditor={hiddenEditor}
          />
          <div className="flex  grow flex-row gap-4 bg-inherit">
            <div className="flex w-full flex-col gap-2 bg-inherit">
              <div
                className={clsx("w-full bg-inherit", {
                  hidden: isZoomEditorTextarea,
                })}
              >
                <TopicEditorTitleCategoryTag
                  categorySelected={categorySelected}
                  setCategorySelected={setCategorySelected}
                  tagSelected={tagSelected}
                  setTagSelected={setTagSelected}
                />
              </div>
              <div className=" border border-solid border-gray-300 bg-inherit dark:border-gray-400">
                <Editor
                  setMyString={setMyString}
                  isZoomEditorTextarea={isZoomEditorTextarea}
                />
              </div>
            </div>
          </div>
          <TopicCreateBottomControlPanel
            handleCreate={handleCreate}
            createable={createable}
            status={status}
            setStatus={setStatus}
          />
        </div>
      </div>
    </div>
  );
}
