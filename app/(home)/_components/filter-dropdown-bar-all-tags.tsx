"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import FilterDropdownContent from "./filter-dropdown-content";
import Processing from "../../../ui/processing";
import { mapping } from "@/lib/mapping_for_test";
import { useDetailsClickOutside } from "@/hook/myHook";
import FilterOptionsTags from "./filter-option-tags";
import { useFetch } from "@/hook/myHook";
import { URLIngredients, generateNextURL } from "@/utils/url";

export default function FilterDropdownBarAllTags({
  currentURLIngredients,
  selectedCategory,
  selectedSubCategory,
}: {
  currentURLIngredients: URLIngredients;
  selectedCategory: any;
  selectedSubCategory: any;
}) {
  const pramas = useParams();
  const [searchValue, setSearchValue] = useState("");

  //Listen click outside details
  useDetailsClickOutside("tags-filter");

  // Fetch tags data from the "/api/tags" endpoint when the component mounts
  const tagsData: any = useFetch("/api/tags");
  const tags: any[] | undefined = tagsData?.tags;

  // selected tag
  const getSelectedTagsBySlug = () => {
    if (currentURLIngredients.tagName !== "") {
      const item = currentURLIngredients.tagName;
      return item;
    }
    return "tags";
  };

  // tags display options
  const getTagsOptions = () => {
    if (currentURLIngredients.id === "") return tags;
    return mapping.category_tags_mapping.find((item) =>  item.category_id === Number(currentURLIngredients.id))?.tags
  };

  // searched
  const data = getTagsOptions()?.filter(
    (item: any) => item.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1,
  );

  const selectedTag = getSelectedTagsBySlug();
  const element: React.ReactNode = selectedTag;

  return (
    <FilterDropdownContent
      elementId="tags-filter"
      element={element}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    >
      {data === undefined ? (
        <Processing />
      ) : (
        data.map((tagName: any) => (
          <li key={tagName}>
            <FilterOptionsTags
              href={generateNextURL({
                ...currentURLIngredients,
                tagRoute: "tag",
                tagName: tagName,
              })}
              tagName={tagName}
            />
          </li>
        ))
      )}
    </FilterDropdownContent>
  );
}
