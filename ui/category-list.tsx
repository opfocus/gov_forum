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
      <thead className=" border-b-4 border-gray-200 border-solid">
        <tr>
          <th className=" text-left text-gray-400 p-2 text-base font-medium">
            Category
          </th>
          <th className=" text-right text-gray-400 p-2 text-base font-medium">
            Toptic
          </th>
        </tr>
      </thead>
      <tbody>
        {/* Category list */}
        {categories.map((category) => (
          <tr
            key={category.position}
            className=" border-b border-gray-200  border-l-[6px] border-solid"
            style={{
              borderLeftColor: `#${category.color}`,
            }}
          >
            <td className=" text-left pl-[10px] pr-[5px] py-3  space-y-1">
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
                      className=" flex flex-row gap-1 items-center mr-2"
                    >
                      <span
                        className=" w-2 h-2"
                        style={{
                          backgroundColor: `#${
                            subCategories.find((each) => each.id === id)!.color
                          }`,
                        }}
                      ></span>
                      <span className=" text-gray-400 text-sm">
                        {subCategories.find((each) => each.id === id)!.name}
                      </span>
                    </Link>
                  </span>
                ))}
              </div>
            </td>
            <td className=" text-right px-2 py-4  text-lg font-semibold text-gray-500">
              {category.topic_count}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
