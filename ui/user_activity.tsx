import Image from "next/image";
import Link from "next/link";

export default function UserActivity({data, categories}: {
  data: any,
  categories: any[]
}) {

  const matchCategory = (id: number) => {
    const cate = categories!.find((item: any)=> item.id === id)
    return cate? cate.name : "category not found"
  }

  return (
    <main className=" mt-8">
      <ul>
        {
          data.map((item: any) => (
            <li key={item.post_id} className=" border-b border-gray-200 border-solid px-2 py-4">
            <div className=" flex flex-row ">
              <Image
                src={item.avatar_template}
                alt="user avatar"
                width={48}
                height={48}
                className=" mr-2 rounded-full"
              ></Image>
              <div className=" grow">
                <Link href={`/t/${item.slug}/${item.topic_id}`} className=" text-cyan-400">{item.title}</Link>
                <div className=" flex flex-row gap-1 items-center">
                  <div className=" w-2 h-2 bg-blue-400" >
                  </div>
                  <span className=" text-xs text-gray-400">
                    {matchCategory(item.category_id)}
                  </span>
                </div>
              </div>
              <div className=" text-xs text-gray-400 whitespace-nowrap">
              {new Date(item.created_at).toLocaleString("default", {
                    month: "short",
                  })}
                  {","}{""} {new Date(item.created_at).getFullYear()}
                </div>
            </div>
            <p className=" mt-4 text-sm text-gray-700">
            {item.excerpt}
            </p>
          </li>
          )
          )
          }
      </ul>
    </main>
  );
}
