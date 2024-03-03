'use client'

import { MagnifyingGlassIcon,  ArrowLongRightIcon} from "@heroicons/react/16/solid";
import { searchPosts } from "@/utils/actions";
import { useFormState } from "react-dom";
import SearchPostsResult from "./search-posts-result";

let initialState = ''

export default function SearchPosts() {
  const [state, formAction] = useFormState(searchPosts, initialState)
  
  return (
    <section>
      <div className=" w-full py-4 px-24 bg-gray-100 space-y-4">
        <div className=" text-lg font-semibold">{(state)? `${JSON.parse(state).length} results` : "Search"}</div>
        <form action={formAction} className=" space-y-4">
          <div className=" flex flex-row gap-2">
            <input
              type="text"
              placeholder="Search"
              id="keyworlds"
              name="keyworlds"
              className=" px-2 py-1 border border-solid border-gray-400 grow focus: outline-blue-400"
            />
            <select
            id="scope"
              name="scope"
              className=" border border-solid border-gray-400 focus: outline-blue-400"
            >
              <option value="Topic/post">
                Topic/post
              </option>
              <option value="Categories/tags">Categories/tags</option>
              <option value="Users">Users</option>
            </select>
            <button
              type="submit"
              className=" px-2 py-1 text-white bg-blue-400 hover:bg-blue-700 flex flex-row gap-1 items-center"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
          <details className=" space-y-4">
            <summary className=" text-blue-500">Advanced filters</summary>
            <div className=" grid grid-cols-2 gap-6">
              <label htmlFor="categories">
                <span className=" text-base text-gray-500 font-medium">
                  Categorized
                </span>
                <br />
                <select
                  name="categories"
                  id="categories"
                  defaultValue="1"
                  className=" mt-1 w-full px-2 py-1 border border-solid border-gray-400 focus:outline-blue-400"
                >
                  <option value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <label htmlFor="topics">
                <span className=" text-base text-gray-500 font-medium">
                  Where topics
                </span>
                <br />
                <select
                  name="topics"
                  id="topics"
                  defaultValue="1"
                  className=" mt-1 w-full px-2 py-1 border border-solid border-gray-400 focus:outline-blue-400"
                >
                  <option value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <label htmlFor="tags">
                <span className=" text-base text-gray-500 font-medium">
                  Tagged
                </span>
                <select
                  name="tags"
                  id="tags"
                  defaultValue="1"
                  className=" mt-1 w-full px-2 py-1 border border-solid border-gray-400 focus:outline-blue-400"
                >
                  <option value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <label htmlFor="author">
                <span className=" text-base text-gray-500 font-medium">
                  Posted by
                </span>
                <select
                  name="author"
                  id="author"
                  defaultValue="1"
                  className=" mt-1 w-full px-2 py-1 border border-solid border-gray-400 focus:outline-blue-400"
                >
                  <option value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </label>
              <div>
                <span className=" text-base text-gray-500 font-medium">
                  Only return topics/posts...
                </span>
                <br />
                <label htmlFor="title" className=" text-gray-500 font-light text-sm">
                  <input type="checkbox" id="title" name="title" /> Matching in
                  title only
                </label>
                <br />
                <label htmlFor="like" className=" text-gray-500 font-light text-sm">
                  <input type="checkbox" id="like" name="like" /> I liked
                </label>
                <br />
                <label htmlFor="owner" className=" text-gray-500 font-light text-sm">
                  <input type="checkbox" id="owner" name="owner" /> In my
                  messages
                </label>
                <br />
                <label htmlFor="read" className=" text-gray-500 font-light text-sm">
                  <input type="checkbox" id="read" name="read" /> I read
                </label>
                <br />
              </div>
              <div>
                <span className=" text-base text-gray-500 font-medium">
                  Posted
                </span>
                <div id="date_chosed" className=" flex flex-row gap-2 justify-start">
                  <select
                    name="before_after"
                    id="before_after"
                    defaultValue="before"
                    className=" mt-1 w-full px-2 py-1 border border-solid border-gray-400 focus:outline-blue-400"
                  >
                    <option value="before">
                      before
                    </option>
                    <option value="after">after</option>
                  </select>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className=" mt-1 w-full px-2 py-1 border border-solid border-gray-400 focus:outline-blue-400"
                  ></input>
                </div>
              </div>
              <div>
                <span className=" text-base text-gray-500 font-medium">
                  Posts
                </span>
                <br />
                <div className="mt-1 flex flex-row gap-2 w-full items-center text-gray-500">
                  <input type="number" placeholder="min" name="posts_min" id="post_min" className=" w-5/12 px-2 py-1 border border-solid border-gray-400 grow focus: outline-blue-400"/>
                  <ArrowLongRightIcon className=" w-5 h-5" />
                  <input type="number" placeholder="max" name="posts_max" id="post_max"
                  className=" w-5/12 px-2 py-1 border border-solid border-gray-400 grow focus: outline-blue-400"/>
                </div>
                </div>
                <div>
                <span className=" text-base text-gray-500 font-medium">
                  views
                </span>
                <br />
                <div className="mt-1 flex flex-row gap-2 items-center text-gray-500">
                  <input type="number" placeholder="min" id="views_min" name="views_min" className=" w-5/12 px-2 py-1 border border-solid border-gray-400 grow focus: outline-blue-400"/>
                  <ArrowLongRightIcon className=" w-5 h-5" />
                  <input type="number" placeholder="max" name="views_max" id="views_max"
                  className=" w-5/12 px-2 py-1 border border-solid border-gray-400 grow focus: outline-blue-400"/>
                </div>
                </div>
            </div>
          </details>
        </form>
      </div>
      <div className=" w-full py-4 px-24 ">
        {state && <SearchPostsResult posts = {JSON.parse(state)} />}
      </div>
    </section>
  );
}
