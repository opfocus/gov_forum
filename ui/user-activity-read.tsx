import Link from "next/link";

export default function UserActivityReadTopics({
  topics,
  categories,
}: {
  topics: any[];
  categories: any[];
}) {
  const matchCategory = (id: number) => {
    const cate = categories!.find((item: any) => item.id === id);
    return cate ? cate : "category not found";
  };

  return (
    <main>
      <section className=" mt-8">
        <table className=" w-full">
          <thead className=" text-sm text-gray-400 border-b-2  border-gray-400">
            <tr>
              <th className=" font-medium py-4 text-left">Topics</th>
              <th className=" font-medium py-4">Replies</th>
              <th className=" font-medium py-4">Activity</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((item: any, index) => (
              <tr
                key={index}
                className=" border-b border-solid border-gray-200"
              >
                <td className=" py-3 px-2">
                  <div>
                    <Link
                      href={`/t/${item.slug}/${item.topic_id}`}
                      className=" text-cyan-700"
                    >
                      {item.title}
                    </Link>
                    <div className=" flex flex-row gap-1 items-center">
                      <div
                        className=" w-2 h-2"
                        style={{
                          backgroundColor: `#${
                            matchCategory(item.category_id).color
                          }`,
                        }}
                      ></div>
                      <span className=" text-xs text-gray-400">
                        {matchCategory(item.category_id).name}
                      </span>
                    </div>
                  </div>
                </td>
                <td className=" text-center py-3 text-red-400 font-bold">
                  {item.posts_count}
                </td>
                <td className=" text-center py-3 whitespace-nowrap text-sm text-gray-400">
                  {new Date(item.bumped_at).toLocaleString("default", {
                    month: "short",
                  })}
                  {","}
                  {""} {new Date(item.bumped_at).getFullYear()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
