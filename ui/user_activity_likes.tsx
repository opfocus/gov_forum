import Image from "next/image";
import Link from "next/link";
import { matchCategory } from "@/utils/common";
import { HeartIcon } from "@heroicons/react/16/solid";

export default function UserActivityLikes({likes, categories}: {
  likes: any[];
  categories: any[];
}) {
  
  return (
    <main>
      <section className=" mt-8">
      <ul>
          {likes.map((item: any) => (
            <li
              key={item.post_id}
              className=" border-b border-gray-200 border-solid px-2 py-4"
            >
              <div className=" flex flex-row items-start">
                <Image
                  src={item.avatar_template}
                  alt="user avatar"
                  width={48}
                  height={48}
                  className=" mr-2 rounded-full"
                ></Image>
                <div className=" grow">
                  <Link
                    href={`/t/${item.slug}/${item.topic_id}`}
                    className=" text-cyan-400"
                  >
                    {item.title}
                  </Link>
                  <div className=" flex flex-row gap-1 items-center">
                    <div className=" w-2 h-2" style={{
                      backgroundColor: `#${matchCategory(item.category_id, categories).color}`
                    }}
                    ></div>
                    <span className=" text-xs text-gray-400">
                      {matchCategory(item.category_id, categories).name}
                    </span>
                  </div>
                </div>
                <div className=" text-xs text-gray-400 whitespace-nowrap">
                  {new Date(item.created_at).toLocaleString("default", {
                    month: "short",
                  })}
                  {","}
                  {""} {new Date(item.created_at).getFullYear()}
                </div>
              </div>
              <p className=" mt-4 text-sm text-gray-700" dangerouslySetInnerHTML={{__html: item.excerpt}}></p>
              <div className=" mt-2 flex flex-row gap-1">
                <HeartIcon className=" w-4 h-4 text-red-400" />
                <Image
                  src={item.acting_avatar_template}
                  alt="user avatar"
                  width={24}
                  height={24}
                  className=" rounded-full"
                >
                </Image>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}