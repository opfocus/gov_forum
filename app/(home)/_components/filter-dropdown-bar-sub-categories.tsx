"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Processing from "../../../ui/processing";
import { subCategories } from "@/lib/sub-categories";
import { useDetailsClickOutside } from "@/hook/myHook";
import { useFetch } from "@/hook/myHook";
import FilterDropdownContent from "./filter-dropdown-content";
import FilterOptionsCategories from "./fiter-options-categories";
import { URLIngredients, generateNextURL } from "@/utils/url";

export default function FilterDropdownBarSubCategories({
  currentURLIngredients,
  selectedCategory,
  selectedSubCategory,
  setSeleSubctedCategory,
}: {
  currentURLIngredients: URLIngredients;
  selectedCategory: any;
  selectedSubCategory: any;
  setSeleSubctedCategory:
    | React.Dispatch<React.SetStateAction<object>>
    | React.Dispatch<React.SetStateAction<undefined>>;
}) {
  const [searchValue, setSearchValue] = useState("");

  //Listen click outside details
  useDetailsClickOutside("subcategories-filter");

  // selected subcategory
  const getSelectedSubCategoryBySlug = () => {
    if (currentURLIngredients.subCategory !== "") {
      const item: any = subCategories.find(
        (sub) => currentURLIngredients.subCategory === String(sub.slug),
      );
      return item;
    }
    return undefined;
  };

  // sub-categories display options
  const getSubCategoriesOptions = () => {
    return subCategories.filter((sub) =>
      selectedCategory?.subcategory_ids.includes(sub.id),
    );
  };

  //searched
  const data = getSubCategoriesOptions().filter(
    (item: any) =>
      (item.name + item.description)
        .toLowerCase()
        .indexOf(searchValue.toLowerCase()) !== -1,
  );
  // useEffect (() => 
  setSeleSubctedCategory(getSelectedSubCategoryBySlug())
  // ,[])
  const element: React.ReactNode =
    selectedSubCategory === undefined ? (
      "subcategories"
    ) : (
      <div className="flex flex-row items-center gap-1">
        <div
          className=" h-2 w-2"
          style={{
            backgroundColor: `#${selectedSubCategory.color}`,
          }}
        ></div>
        <div>{selectedSubCategory!.name}</div>
      </div>
    );

  if (getSubCategoriesOptions().length !== 0)
    return (
      <FilterDropdownContent
        elementId="subcategories-filter"
        element={element}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      >
        {data === undefined ? (
          <Processing />
        ) : (
          data.map((item: any) => (
            <li key={item.name}>
              <FilterOptionsCategories
                href={generateNextURL({
                  ...currentURLIngredients,
                  category: selectedCategory.slug,
                  subCategory: item.slug,
                  id: String(item.id),
                  categoryRouter: "c",
                })}
                item={item}
              />
            </li>
          ))
        )}
      </FilterDropdownContent>
    );
  return null;
}
