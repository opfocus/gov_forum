import Image from "next/image";
import Link from "next/link";
import { matchCategory } from "@/utils/common";

export default function UserActionsList({
  data,
  categories,
}: {
  data: any[];
  categories: any[];
}) {
  return (
    <main>
      <section className=" mt-8">
        <ul>
          {data.map((item: any) => (
            <li
              key={item.post_id}
              className=" border-b border-solid border-gray-200 px-2 py-4"
            >
              <div className=" flex flex-row ">
                <Image
                  src={item.avatar_template}
                  alt="user avatar"
                  width={48}
                  height={48}
                  className=" mr-2 self-start rounded-full"
                ></Image>
                <div className=" grow">
                  <Link
                    href={`/t/${item.slug}/${item.topic_id}`}
                    className=" text-cyan-700"
                  >
                    {item.title}
                  </Link>
                  <div className=" flex flex-row items-center gap-1">
                    <div
                      className=" h-2 w-2"
                      style={{
                        backgroundColor: `#${
                          matchCategory(item.category_id, categories).color
                        }`,
                      }}
                    ></div>
                    <span className=" text-xs text-gray-400">
                      {matchCategory(item.category_id, categories).name}
                    </span>
                  </div>
                </div>
                <div className=" whitespace-nowrap text-xs text-gray-400">
                  {new Date(item.created_at).toLocaleString("default", {
                    month: "short",
                  })}
                  {","}
                  {""} {new Date(item.created_at).getFullYear()}
                </div>
              </div>
              <p
                className=" mt-4 text-sm text-gray-700"
                dangerouslySetInnerHTML={{ __html: item.excerpt }}
              ></p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
