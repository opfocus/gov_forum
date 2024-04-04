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
          <thead className=" border-b-2 border-gray-400 text-sm  text-gray-400">
            <tr>
              <th className=" py-4 text-left font-medium">Topics</th>
              <th className=" py-4 font-medium">Replies</th>
              <th className=" py-4 font-medium">Activity</th>
            </tr>
          </thead>
          <tbody>
            {topics.map((item: any, index) => (
              <tr
                key={index}
                className=" border-b border-solid border-gray-200"
              >
                <td className=" px-2 py-3">
                  <div>
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
                <td className=" py-3 text-center font-bold text-red-400">
                  {item.posts_count}
                </td>
                <td className=" whitespace-nowrap py-3 text-center text-sm text-gray-400">
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
