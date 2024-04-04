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
    <section>
      <div className=" w-full space-y-4 bg-gray-100 px-24 py-4">
        <div className=" text-lg font-semibold">
          {state ? `${JSON.parse(state).length} results` : "Search"}
        </div>
        <form action={formAction} className=" space-y-4">
          <div className=" flex flex-row gap-2">
            <input
              type="text"
              placeholder="Search"
              id="keyworlds"
              name="keyworlds"
              className=" focus: grow border border-solid border-gray-400 px-2 py-1 outline-blue-400"
            />
            <select
              id="scope"
              name="scope"
              className=" focus: border border-solid border-gray-400 outline-blue-400"
            >
              <option value="Topic/post">Topic/post</option>
              <option value="Categories/tags">Categories/tags</option>
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
            <summary className=" text-blue-500">Advanced filters</summary>
            <div className=" grid grid-cols-2 gap-6">
              <label htmlFor="categories">
                <span className=" text-base font-medium text-gray-500">
                  Categorized
                </span>
                <br />
                <select
                  name="categories"
                  id="categories"
                  defaultValue="1"
                  className=" mt-1 w-full border border-solid border-gray-400 px-2 py-1 focus:outline-blue-400"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <label htmlFor="topics">
                <span className=" text-base font-medium text-gray-500">
                  Where topics
                </span>
                <br />
                <select
                  name="topics"
                  id="topics"
                  defaultValue="1"
                  className=" mt-1 w-full border border-solid border-gray-400 px-2 py-1 focus:outline-blue-400"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <label htmlFor="tags">
                <span className=" text-base font-medium text-gray-500">
                  Tagged
                </span>
                <select
                  name="tags"
                  id="tags"
                  defaultValue="1"
                  className=" mt-1 w-full border border-solid border-gray-400 px-2 py-1 focus:outline-blue-400"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <label htmlFor="author">
                <span className=" text-base font-medium text-gray-500">
                  Posted by
                </span>
                <select
                  name="author"
                  id="author"
                  defaultValue="1"
                  className=" mt-1 w-full border border-solid border-gray-400 px-2 py-1 focus:outline-blue-400"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <div>
                <span className=" text-base font-medium text-gray-500">
                  Only return topics/posts...
                </span>
                <br />
                <label
                  htmlFor="title"
                  className=" text-sm font-light text-gray-500"
                >
                  <input type="checkbox" id="title" name="title" /> Matching in
                  title only
                </label>
                <br />
                <label
                  htmlFor="like"
                  className=" text-sm font-light text-gray-500"
                >
                  <input type="checkbox" id="like" name="like" /> I liked
                </label>
                <br />
                <label
                  htmlFor="owner"
                  className=" text-sm font-light text-gray-500"
                >
                  <input type="checkbox" id="owner" name="owner" /> In my
                  messages
                </label>
                <br />
                <label
                  htmlFor="read"
                  className=" text-sm font-light text-gray-500"
                >
                  <input type="checkbox" id="read" name="read" /> I read
                </label>
                <br />
              </div>
              <div>
                <span className=" text-base font-medium text-gray-500">
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
                    className=" mt-1 w-full border border-solid border-gray-400 px-2 py-1 focus:outline-blue-400"
                  >
                    <option value="before">before</option>
                    <option value="after">after</option>
                  </select>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className=" mt-1 w-full border border-solid border-gray-400 px-2 py-1 focus:outline-blue-400"
                  ></input>
                </div>
              </div>
              <div>
                <span className=" text-base font-medium text-gray-500">
                  Posts
                </span>
                <br />
                <div className="mt-1 flex w-full flex-row items-center gap-2 text-gray-500">
                  <input
                    type="number"
                    placeholder="min"
                    name="posts_min"
                    id="post_min"
                    className=" focus: w-5/12 grow border border-solid border-gray-400 px-2 py-1 outline-blue-400"
                  />
                  <ArrowLongRightIcon className=" h-5 w-5" />
                  <input
                    type="number"
                    placeholder="max"
                    name="posts_max"
                    id="post_max"
                    className=" focus: w-5/12 grow border border-solid border-gray-400 px-2 py-1 outline-blue-400"
                  />
                </div>
              </div>
              <div>
                <span className=" text-base font-medium text-gray-500">
                  views
                </span>
                <br />
                <div className="mt-1 flex flex-row items-center gap-2 text-gray-500">
                  <input
                    type="number"
                    placeholder="min"
                    id="views_min"
                    name="views_min"
                    className=" focus: w-5/12 grow border border-solid border-gray-400 px-2 py-1 outline-blue-400"
                  />
                  <ArrowLongRightIcon className=" h-5 w-5" />
                  <input
                    type="number"
                    placeholder="max"
                    name="views_max"
                    id="views_max"
                    className=" focus: w-5/12 grow border border-solid border-gray-400 px-2 py-1 outline-blue-400"
                  />
                </div>
              </div>
            </div>
          </details>
        </form>
      </div>
      <div className=" w-full px-24 py-4 ">
        {state && <SearchPostsResult posts={JSON.parse(state)} />}
      </div>
    </section>
  );
}
