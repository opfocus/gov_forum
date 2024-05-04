"use client";

import { useState } from "react";
import { useDetailsClickOutside } from "@/hook/myHook";
import { useFetch } from "@/hook/myHook";
import FilterDropdownContent from "@/app/(home)/_components/filter-dropdown-content";
import Processing from "@/ui/processing";
import FilterOptionsTagsInEditor from "@/app/(home)/_components/filter-option-tags-in-editor";

export default function TopicEditorTags({
  tagSelected,
  setTagSelected
}: any) {
  const [searchValue, setSearchValue] = useState("");
  
  //Listen click outside details
  useDetailsClickOutside("tags-filter-in-editor", tagSelected);

  // Fetch tags data from the "/api/tags" endpoint when the component mounts
  const tagsData: any = useFetch("/api/tags");
  const tags: any[] | undefined = tagsData?.tags

  // Filter the categories array based on the search value.
  const data = tags?.filter(
    (item: any) => item.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1,
  );

  const element: React.ReactNode =
  tagSelected === undefined ? (
    "tags"
  ) : (
    <div className="flex flex-row  gap-1">
      {tagSelected.map((tag: string) => (
      <button className=" bg-gray-100">
        {tag}
      </button>
      ))}

    </div>
  );

  return (
    <FilterDropdownContent
      element={element}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      elementId="tags-filter-in-editor"
    >
      {data === undefined ? (
        <Processing />
      ) : (
        data.map((item: any) => (
          <li key={item + "editor"}>
            <FilterOptionsTagsInEditor
            setTagSelected={ setTagSelected}
            tagSelected={tagSelected}
              item={item}
            />
          </li>
        ))
      )}
    </FilterDropdownContent>
  );
}
