import Link from "next/link";

//for test sub-categories
import { subCategories } from "@/lib/sub-categories";

export default async function CategoryList({
  categories,
}: {
  categories: any[];
}) {
  return (
    <table className="w-full">
      <thead className=" border-b-4 border-solid border-gray-200">
        <tr>
          <th className=" p-2 text-left text-base font-medium text-gray-400">
            Category
          </th>
          <th className=" p-2 text-right text-base font-medium text-gray-400">
            Toptic
          </th>
        </tr>
      </thead>
      <tbody>
        {/* Category list */}
        {categories.map((category) => (
          <tr
            key={category.position}
            className=" border-b border-l-[6px]  border-solid border-gray-200"
            style={{
              borderLeftColor: `#${category.color}`,
            }}
          >
            <td className=" space-y-1 py-3 pl-[10px] pr-[5px]  text-left">
              <h3 className=" text-lg font-semibold">
                <Link href={`/c/${category.slug}/${category.id}`}>
                  {category.name}
                </Link>
              </h3>
              <p className=" text-base font-medium text-gray-500">
                {category.description}
              </p>
              <div className=" flex flex-row  flex-wrap">
                {category.subcategory_ids.map((id: number) => (
                  <span key={id} className=" space-x-1">
                    <Link
                      href={`/c/${category.slug}/${subCategories.find((each) => each.id === id)!.slug}/${subCategories.find((each) => each.id === id)!.id}`}
                      className=" mr-2 flex flex-row items-center gap-1"
                    >
                      <span
                        className=" h-2 w-2"
                        style={{
                          backgroundColor: `#${
                            subCategories.find((each) => each.id === id)!.color
                          }`,
                        }}
                      ></span>
                      <span className=" text-sm text-gray-400">
                        {subCategories.find((each) => each.id === id)!.name}
                      </span>
                    </Link>
                  </span>
                ))}
              </div>
            </td>
            <td className=" px-2 py-4 text-right  text-lg font-semibold text-gray-500">
              {category.topic_count}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
