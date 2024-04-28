"use client";

import { useEffect, useState } from "react";
import Processing from "@/ui/processing";
import { useDetailsClickOutside } from "@/hook/myHook";
import FilterDropdownContent from "./filter-dropdown-content";
import FilterOptionsCategories from "./fiter-options-categories";
import { useFetch } from "@/hook/myHook";
import { URLIngredients, generateNextURL } from "@/utils/url";

export default function FilterDropdownBarCategories({
  currentURLIngredients,
  selectedCategory,
  setSelectedCategory,
}: {
  currentURLIngredients: URLIngredients;
  selectedCategory: any;
  setSelectedCategory:
    | React.Dispatch<React.SetStateAction<object>>
    | React.Dispatch<React.SetStateAction<undefined>>;
}) {
  const [searchValue, setSearchValue] = useState("");

  //Listen click outside details
  useDetailsClickOutside("categories-filter");

  // Fetch categories data from the "/api/categories" endpoint when the component mounts
  const categories = useFetch("/api/categories") as undefined | any[];

  // Filter the categories array based on the search value.
  const data = categories?.filter(
    (item: any) =>
      (item.name + item.description)
        .toLowerCase()
        .indexOf(searchValue.toLowerCase()) !== -1,
  );

  //Get the selected category based on the URL.
  const getSelectedCategoryBySlug = () => {
    if (currentURLIngredients.category !== "") {
      const item = categories?.find(
        (category: any) => category.slug === currentURLIngredients.category,
      );
      return item;
    }
    return undefined;
  };
  useEffect(
    () => setSelectedCategory(getSelectedCategoryBySlug()),
    [categories],
  );
  
  const element: React.ReactNode =
    selectedCategory === undefined ? (
      "categories"
    ) : (
      <div className="flex flex-row items-center gap-1">
        <div
          className=" h-2 w-2"
          style={{ backgroundColor: `#${selectedCategory.color}` }}
        ></div>
        <div>{selectedCategory.name}</div>
      </div>
    );

  return (
    <FilterDropdownContent
      element={element}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      elementId="categories-filter"
    >
      {data === undefined ? (
        <Processing />
      ) : (
        data.map((item: any) => (
          <li key={item.name}>
            <FilterOptionsCategories
              href={generateNextURL({
                ...currentURLIngredients,
                category: item.slug,
                id: String(item.id),
                categoryRouter: "c",
                excipients:'',
                sort:""
              })}
              item={item}
            />
          </li>
        ))
      )}
    </FilterDropdownContent>
  );
}
