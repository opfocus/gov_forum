import Link from "next/link";

export default async function CategoryList({categories}: {
  categories: any[]
}) {

  return (
    <table className="w-full">
      <thead className=" border-b-2 border-gray-400 border-solid">
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
        {
            categories.map((category) =>(
                <tr key={category.position} className=" border-b border-gray-200  border-l-4 border-solid" style={{
                  borderLeftColor: `#${category.color}`,
                }}>
                <td className=" text-left px-2 py-4  space-y-1">
                  <h3 className=" text-lg font-semibold">
                    <Link href={`/c/${category.slug}/${category.id}`}>{category.name}</Link>
                  </h3>
                  <p className=" text-base font-medium text-gray-500">
                    {category.description}
                  </p>
                </td>
                <td className=" text-right px-2 py-4  text-lg font-semibold text-gray-500">
                  {category.topic_count}
                </td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
}
