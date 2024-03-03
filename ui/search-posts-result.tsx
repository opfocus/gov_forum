'use client'
import type { Post } from "@/lib/type"

export default function SearchPostsResult({posts}: {
  posts:Post[]
}) {
  return (
    <div className=" w-full space-y-4">
    {
      posts.map(post =>(
        <div key={post.id} className="flex flex-row justify-start border-b pb-4 border-gray-400 border-solid">
          <div>
            <img
              src={post.avatar_template}
              className=" w-8 h-8 rounded-full"
              alt="use avatar"
            >
            </img>
          </div>
          <div  dangerouslySetInnerHTML={{__html: post.cooked}} className=" grow pl-4">
          </div>
        </div>
      ))
    }
    </div>
  )
}