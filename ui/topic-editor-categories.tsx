"use client";

import { useState } from "react";
import { useDetailsClickOutside } from "@/hook/myHook";
import { useFetch } from "@/hook/myHook";
import FilterDropdownContent from "@/app/(home)/_components/filter-dropdown-content";
import Processing from "@/ui/processing";
import FilterOptionsCategoriesInEditor from "@/app/(home)/_components/fiter-options-categories-in-editor";

export default function TopicEditorCategories({
  categorySelected,
  setCategorySelected,
}: any) {
  const [searchValue, setSearchValue] = useState("");
  
  //Listen click outside details
  useDetailsClickOutside("categories-filter-in-editor", categorySelected);

    // Fetch categories data from the "/api/categories" endpoint when the component mounts
    const categories = useFetch("/api/categories") as undefined | any[];

  // Filter the categories array based on the search value.
  const data = categories?.filter(
    (item: any) =>
      (item.name + item.description)
        .toLowerCase()
        .indexOf(searchValue.toLowerCase()) !== -1,
  );

  const element: React.ReactNode =
  categorySelected === undefined ? (
    "categories"
  ) : (
    <div className="flex flex-row items-center gap-1">
      <div
        className=" h-2 w-2"
        style={{ backgroundColor: `#${categorySelected.color}` }}
      ></div>
      <div>{categorySelected.name}</div>
    </div>
  );

  return (
    <FilterDropdownContent
      element={element}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      elementId="categories-filter-in-editor"
    >
      {data === undefined ? (
        <Processing />
      ) : (
        data.map((item: any) => (
          <li key={item.name}>
            <FilterOptionsCategoriesInEditor
           setCategorySelected={setCategorySelected}
              item={item}
            />
          </li>
        ))
      )}
    </FilterDropdownContent>
  );
}
