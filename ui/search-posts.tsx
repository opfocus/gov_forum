"use client";

import {
  MagnifyingGlassIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/16/solid";
import { searchPosts } from "@/utils/actions";
import { useFormState } from "react-dom";
import SearchPostsResult from "./search-posts-result";

let initialState = "";

export default function SearchPosts() {
  const [state, formAction] = useFormState(searchPosts, initialState);

  return (
    <section className=" mt-8 space-y-6  text-gray-600 dark:text-gray-100">
      <div className=" space-y-2  bg-gray-100 px-4 py-4 dark:bg-gray-600 lg:px-24">
        <div className=" text-lg font-semibold">
          {state ? `${JSON.parse(state).length} results` : "Search"}
        </div>
        {/* <form action={formAction} className=" space-y-4"> */}
        <form action="/search" className=" space-y-4">
          <div className=" flex flex-col gap-2 sm:flex-row">
            <input
              type="text"
              placeholder="Search"
              id="keyworlds"
              name="q"
              className=" grow border border-solid border-black-300
               bg-white focus:border-sky-600 focus:ring-1
                focus:ring-sky-600 dark:border-black-400 dark:bg-gray-700  focus:dark:border-sky-600 focus:dark:ring-1 focus:dark:ring-sky-600"
            />
            <select
              id="scope"
              name="search_type"
              className=" borderr border-solid border-black-300 bg-white 
              focus:border-sky-600 focus:ring-1 focus:ring-sky-600 dark:border-black-400 dark:bg-gray-700  
              focus:dark:border-sky-600 focus:dark:ring-1 focus:dark:ring-sky-600"
            >
              <option value="Topic_post">Topic/post</option>
              <option value="Categories_tags">Categories/tags</option>
              <option value="Users">Users</option>
            </select>
            <button
              type="submit"
              className=" flex flex-row items-center gap-1 bg-blue-400 px-2 py-1 text-white hover:bg-blue-700"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>
          <details className=" space-y-4">
            <summary className=" text-sky-600">Advanced filters</summary>
            <div className=" grid grid-cols-2 gap-6">
              <label htmlFor="categories" className=" space-y-1">
                <span className=" text-base font-medium">Categorized</span>
                <br />
                <select
                  name="categories"
                  id="categories"
                  defaultValue="1"
                  className="borderr w-full border-solid border-black-300 bg-white 
                  focus:border-sky-600 focus:ring-1 focus:ring-sky-600 dark:border-black-400 dark:bg-gray-700  
                  focus:dark:border-sky-600 focus:dark:ring-1 focus:dark:ring-sky-600"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <label htmlFor="topics" className=" space-y-1">
                <span className=" text-base font-medium">
                  Where topics
                </span>
                <br />
                <select
                  name="topics"
                  id="topics"
                  defaultValue="1"
                  className="borderr w-full border-solid border-black-300 bg-white 
                  focus:border-sky-600 focus:ring-1 focus:ring-sky-600 dark:border-black-400 dark:bg-gray-700  
                  focus:dark:border-sky-600 focus:dark:ring-1 focus:dark:ring-sky-600"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <label htmlFor="tags" className=" space-y-1">
                <span className=" text-base font-medium">
                  Tagged
                </span>
                <select
                  name="tags"
                  id="tags"
                  defaultValue="1"
                  className="borderr w-full border-solid border-black-300 bg-white 
                  focus:border-sky-600 focus:ring-1 focus:ring-sky-600 dark:border-black-400 dark:bg-gray-700  
                  focus:dark:border-sky-600 focus:dark:ring-1 focus:dark:ring-sky-600"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <label htmlFor="author" className=" space-y-1">
                <span className=" text-base font-medium">
                  Posted by
                </span>
                <select
                  name="author"
                  id="author"
                  defaultValue="1"
                  className="borderr w-full border-solid border-black-300 bg-white 
                  focus:border-sky-600 focus:ring-1 focus:ring-sky-600 dark:border-black-400 dark:bg-gray-700  
                  focus:dark:border-sky-600 focus:dark:ring-1 focus:dark:ring-sky-600"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <div className=" space-y-1">
                <span className=" text-base font-medium">
                  Only return topics/posts...
                </span>
                <br />
                <label
                  htmlFor="title"
                  className=" text-sm font-light"
                >
                  <input type="checkbox" id="title" name="title" className=" focus:ring-0 focus:ring-offset-0 bg-white dark:bg-gray-700 "/> Matching in
                  title only
                </label>
                <br />
                <label
                  htmlFor="like"
                  className=" text-sm font-light"
                >
                  <input type="checkbox" id="like" name="like" className=" focus:ring-0 focus:ring-offset-0 bg-white dark:bg-gray-700"/> I liked
                </label>
                <br />
                <label
                  htmlFor="owner"
                  className=" text-sm font-light"
                >
                  <input type="checkbox" id="owner" name="owner" className="  focus:ring-0 focus:ring-offset-0 bg-white dark:bg-gray-700"/> In my
                  messages
                </label>
                <br />
                <label
                  htmlFor="read"
                  className=" text-sm font-light"
                >
                  <input type="checkbox" id="read" name="read" className=" focus:ring-0 focus:ring-offset-0 bg-white dark:bg-gray-700"/> I read
                </label>
                <br />
              </div>
              <div className=" space-y-1">
                <span className=" text-base font-medium ">
                  Posted
                </span>
                <div
                  id="date_chosed"
                  className=" flex flex-row justify-start gap-2"
                >
                  <select
                    name="before_after"
                    id="before_after"
                    defaultValue="before"
                    className="borderr w-full border-solid border-black-300 bg-white 
                    focus:border-sky-600 focus:ring-1 focus:ring-sky-600 dark:border-black-400 dark:bg-gray-700  
                    focus:dark:border-sky-600 focus:dark:ring-1 focus:dark:ring-sky-600"
                  >
                    <option value="before">before</option>
                    <option value="after">after</option>
                  </select>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="borderr w-full border-solid border-black-300 bg-white 
                    focus:border-sky-600 focus:ring-1 focus:ring-sky-600 dark:border-black-400 dark:bg-gray-700  
                    focus:dark:border-sky-600 focus:dark:ring-1 focus:dark:ring-sky-600"
                  ></input>
                </div>
              </div>
              <div className=" space-y-1">
                <span className=" text-base font-medium ">
                  Posts
                </span>
                <br />
                <div className="flex w-full flex-row items-center gap-2 ">
                  <input
                    type="number"
                    placeholder="min"
                    name="posts_min"
                    id="post_min"
                    className="borderr w-full border-solid border-black-300 bg-white 
                    focus:border-sky-600 focus:ring-1 focus:ring-sky-600 dark:border-black-400 dark:bg-gray-700  
                    focus:dark:border-sky-600 focus:dark:ring-1 focus:dark:ring-sky-600"
                  />
                  <ArrowLongRightIcon className=" h-5 w-5" />
                  <input
                    type="number"
                    placeholder="max"
                    name="posts_max"
                    id="post_max"
                    className="borderr w-full border-solid border-black-300 bg-white 
                    focus:border-sky-600 focus:ring-1 focus:ring-sky-600 dark:border-black-400 dark:bg-gray-700  
                    focus:dark:border-sky-600 focus:dark:ring-1 focus:dark:ring-sky-600"
                  />
                </div>
              </div>
              <div className=" space-y-1">
                <span className=" text-base font-medium ">
                  views
                </span>
                <br />
                <div className="flex flex-row items-center gap-2 ">
                  <input
                    type="number"
                    placeholder="min"
                    id="views_min"
                    name="views_min"
                    className="borderr w-full border-solid border-black-300 bg-white 
                    focus:border-sky-600 focus:ring-1 focus:ring-sky-600 dark:border-black-400 dark:bg-gray-700  
                    focus:dark:border-sky-600 focus:dark:ring-1 focus:dark:ring-sky-600"
                  />
                  <ArrowLongRightIcon className=" h-5 w-5" />
                  <input
                    type="number"
                    placeholder="max"
                    name="views_max"
                    id="views_max"
                    className="borderr w-full border-solid border-black-300 bg-white 
                    focus:border-sky-600 focus:ring-1 focus:ring-sky-600 dark:border-black-400 dark:bg-gray-700  
                    focus:dark:border-sky-600 focus:dark:ring-1 focus:dark:ring-sky-600"
                  />
                </div>
              </div>
            </div>
          </details>
        </form>
      </div>
      <div className=" px-24 py-4 ">
        {state && <SearchPostsResult posts={JSON.parse(state)} />}
      </div>
    </section>
  );
}
