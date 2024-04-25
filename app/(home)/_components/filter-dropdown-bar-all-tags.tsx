"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import FilterDropdownContent from "./filter-dropdown-content";
import Processing from "../../../ui/processing";
import { mapping } from "@/lib/mapping_for_test";
import { useDetailsClickOutside } from "@/hook/useDetailsClickOutside";
import FilterOptionsTags from "./filter-option-tags";

export default function FilterDropdownBarAllTags() {
  const pramas = useParams();
  const [searchValue, setSearchValue] = useState("");
  const [tags, setTags] = useState<string[] | undefined>(undefined);

  //Listen click outside details
  useDetailsClickOutside("tags-filter");
  // fetch data
  useEffect(() => {
    fetch("/api/tags")
      .then((res) => res.json())
      .then((data) => {
        setTags(data.top_tags);
      });
  }, []);

  // get mapping tags
  const getMappingTags = () => {
    let mappingTags;
    let categoryLocationId: number;
    let subCategoryLocationId: number;

    // condition: path in "/"
    if (pramas.slug === undefined) return tags;
    // condition: path in tag name
    else if (pramas.slug.length === 1) return tags;
    // condition: path in category latest topics
    else if (pramas.slug.length === 3) {
      categoryLocationId = Number(pramas.slug[1]);
      mappingTags = mapping.category_tags_mapping.find(
        (item) => item.category_id === categoryLocationId,
      )?.tags;
      return mappingTags;
    }
    // condition: path in sub-category latest topics
    else {
      subCategoryLocationId = Number(pramas.slug[2]);
      mappingTags = mapping.category_tags_mapping.find(
        (item) => item.category_id === categoryLocationId,
      )?.tags;
      return mappingTags;
    }
  };

  // console.log(getMappingTags())

  // searched
  const data = getMappingTags()?.filter(
    (item: any) => item.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1,
  );

  // selected
  let name: string = "tags";
  let length = pramas.slug?.length;

  if (tags && pramas.slug !== undefined) {
    const item = tags.find((tag) => tag === pramas.slug[length - 2]);
    if (item) name = item;
  }

  // href
  let herfSolt = "";
  // condition: path in "/c/..."
  if (3 <= length && length <= 4)
    herfSolt = `c/${(pramas.slug.slice(0, length - 1) as string[]).join("/")}`;
  else if (4 <= length && length <= 5) {
    herfSolt = `${(pramas.slug.slice(0, length - 1) as string[]).join("/")}`;
  }

  const element: React.ReactNode = name;

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
               herfSolt={ herfSolt}
               tagName={ tagName}
            />
          </li>
        ))
      )}
    </FilterDropdownContent>
  );
}
