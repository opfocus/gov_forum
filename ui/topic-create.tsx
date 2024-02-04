//   todo:  title need requaried.  building....


"use client";

import { useState, useContext  } from "react";
import { OpenEditorContext } from "@/app/components/open-editor-provider";
import clsx from "clsx";

import TopicCreateControlPanel from "@/ui/topic-create-control-panel";
import TopicCreateBottomControlPanel from "@/ui/topic-create-bottom-control-panel";
import TopicEditorTitleCategoryTag from "./topic-editor-title-category-tag";
import Editor from "@/app/components/focus-plugin";

import {generateSlug} from '@/lib/genrateTopicSlug'
import { useUser } from "@auth0/nextjs-auth0/client";
import { createTopic } from "@/lib/createTopic";
import { createPost } from "@/lib/createPost";
import type { Post, Topic} from "@/lib/type";

export default function TopicCreate() {
  const [isZoomEditorTextarea, setIsZoomEditorTextarea] = useState(false);
  const context = useContext(OpenEditorContext);
  const [myString, setMyString] = useState("");
  const {user} = useUser()
  const [status, setStatus] =useState("create")

  const [categorySelected, setCategorySelected] = useState<
  {
    id: number,
    name: string
  } | undefined
  >()

  const [tagSelected, setTagSelected] = useState([""]);

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
  if (context === undefined) {
    throw new Error("Editor context not work in topic-create component");
  }
  const { isOpen, setIsOpen } = context;

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
    setIsOpen(false);
    if (isZoomEditorTextarea) {
      document.documentElement.style.removeProperty("overflow");
      setIsZoomEditorTextarea(false);
    }
  };

  const handleCreate = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_UR}api/counters`)
    const [newPostIdCounter, newTopicIdCounter] = await res.json() 

    // topic construct
    //asign new topic id 
     const topiciId = newTopicIdCounter.sequence_value
    
    const inputElement = document.getElementById('topic-input') as HTMLInputElement;
   
   
   title = inputElement.value;

    //asign new topic create date
     const create_at = (new Date()).toISOString()
    // asign new topic post stream
     const stream = [newPostIdCounter.sequence_value]
    //asign new topic slug
     const topicSlug = generateSlug(title)
     const user_id = user?.sub!
    // user name
     const user_name = user!.nickname!
    //tag name
     const tags = tagSelected
    //category id (hard write for testing)
     const category_id = categorySelected!.id
     const category_name = categorySelected!.name
     const last_posted_at = create_at
     const avatar_template = user?.picture!

    const topic: Topic = createTopic(topiciId, title, create_at, stream, topicSlug, user_id, user_name, tags,category_id, category_name, last_posted_at, avatar_template)
    //post construct
    //post id
    const postId =  newPostIdCounter.sequence_value
    // psot related user name
     const name = user?.name!
    //post cooked
     const cooked = myString

    const post: Post = createPost(postId, name, user_name, user_id, avatar_template, create_at, cooked, topiciId, topicSlug)

    //for testing... (not complete)
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      })
    fetch(`${process.env.NEXT_PUBLIC_BASE_UR}api/topic`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(topic),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      })
      setStatus("created")
    }
    
    let title 
   const createable:boolean =  myString !== '' &&  tagSelected[0] !== '' && categorySelected !== undefined
  return (
    <div
      className={clsx(
        " bg-white transition-height transform origin-bottom fixed w-screen bottom-0  left-0 duration-300 z-20",
        {
          "h-0": !isOpen,
          " h-full": isZoomEditorTextarea,
          " h-96": !isZoomEditorTextarea && isOpen,
        }
      )}
    >
      <div
        className={clsx(
          "transition-width transform origin-center mx-auto shadow-2xl h-full duration-300  flex flex-col",
          {
            " w-full over": isZoomEditorTextarea,
            " w-3/5": !isZoomEditorTextarea,
          }
        )}
      >
        <div className=" h-2 bg-blue-400"></div>
        <div className=" px-2 py-2 flex flex-col gap-2 overflow-y-auto">
          <TopicCreateControlPanel
            isZoomEditorTextarea={isZoomEditorTextarea}
            handleZoom={handleZoom}
            hiddenEditor={hiddenEditor}
          />
          <div className="w-full flex flex-row gap-4 grow">
            <div className="w-full flex flex-col gap-2 h-full">
              <div
                className={clsx("w-full", {
                  hidden: isZoomEditorTextarea,
                })}
              >
                <TopicEditorTitleCategoryTag 
                  categorySelected = {categorySelected}
                  setCategorySelected = {setCategorySelected}
                  tagSelected = {tagSelected}
                  setTagSelected ={setTagSelected}
                />
              </div>
              <div className="  border border-solid border-gray-400 growo">
                <Editor
                  setMyString={setMyString}
                  isZoomEditorTextarea={isZoomEditorTextarea}
                />
              </div>
            </div>
          </div>
          <TopicCreateBottomControlPanel handleCreate={handleCreate} createable = {createable} status ={status} setStatus = {setStatus}/>
        </div>
      </div>
    </div>
  );
}
