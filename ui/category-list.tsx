import Link from "next/link";

//for test sub-categories
import { subCategories } from "@/lib/sub-categories";

export { CategoriesList, CategoriesSkeleton };

async function CategoriesList({
  categoriesData,
}: {
  categoriesData: Promise<any[]>;
}) {
  const categories = await categoriesData;

  return (
    <table className="w-full">
      <thead className=" border-b-4 border-solid border-gray-100 dark:border-gray-600">
        <tr>
          <th className=" p-2 text-left font-medium text-gray-400 dark:text-gray-300">
            Category
          </th>
          <th className=" whitespace-nowrap  p-2 text-right font-medium text-gray-400 dark:text-gray-300">
            Toptic
          </th>
        </tr>
      </thead>
      <tbody>
        {categories?.map((category: any) => (
          <tr
            key={category.position}
            className=" border-b border-l-[6px]  border-solid border-gray-100 dark:border-gray-600"
            style={{
              borderLeftColor: `#${category.color}`,
            }}
          >
            <td className=" space-y-1 py-3 pl-3 pr-1">
              <h3 className=" text-lg font-semibold text-gray-600 dark:text-gray-100">
                <Link href={`/c/${category.slug}/${category.id}`}>
                  {category.name}
                </Link>
              </h3>
              <p className="text-gray-500 dark:text-gray-200">
                {category.description}
              </p>
              <div className=" flex flex-row  flex-wrap gap-2">
                {category.subcategory_ids.map((id: number) => (
                  <Link
                    href={`/c/${category.slug}/${subCategories.find((each) => each.id === id)!.slug}/${subCategories.find((each) => each.id === id)!.id}`}
                    className=" flex flex-row items-center gap-1"
                  >
                    <span
                      className=" h-2 w-2"
                      style={{
                        backgroundColor: `#${
                          subCategories.find((each) => each.id === id)!.color
                        }`,
                      }}
                    ></span>
                    <span className=" text-xs text-gray-500 dark:text-gray-200">
                      {subCategories.find((each) => each.id === id)!.name}
                    </span>
                  </Link>
                ))}
              </div>
            </td>
            <td className=" px-2 py-4 text-right  text-lg font-semibold text-gray-400 dark:text-gray-300">
              {category.topic_count}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Category skeleton
function CategoriesSkeleton() {
  return (
    <table className="w-full">
      <thead className=" border-b-4 border-solid border-gray-100 dark:border-gray-600">
        <tr>
          <th className=" p-2 text-left font-medium text-gray-400 dark:text-gray-300">
            Category
          </th>
          <th className=" whitespace-nowrap  p-2 text-right font-medium text-gray-400 dark:text-gray-300">
            Toptic
          </th>
        </tr>
      </thead>
      <tbody className=" animate-pulse">
        <CategorySkeleton />
        <CategorySkeleton />
        <CategorySkeleton />
        <CategorySkeleton />
        <CategorySkeleton />
        <CategorySkeleton />
      </tbody>
    </table>
  );
}

function CategorySkeleton() {
  return (
    <tr className=" border-b border-l-[6px]  border-solid border-gray-100 dark:border-gray-600">
      <td className=" space-y-1 py-3 pl-3 pr-1 ">
        <div className=" h-7  w-1/4 rounded-lg bg-gray-300 dark:bg-gray-400"></div>
        <div className=" h-6 w-2/3 rounded-lg bg-gray-300 dark:bg-gray-400"></div>
        <div className=" h-4 w-1/2 rounded-lg bg-gray-300 dark:bg-gray-400"></div>
      </td>
      <td className=" px-2 py-4 w-1/12">
        <div className=" h-6 rounded-lg bg-gray-300 dark:bg-gray-400"></div>
      </td>
    </tr>
  );
}
