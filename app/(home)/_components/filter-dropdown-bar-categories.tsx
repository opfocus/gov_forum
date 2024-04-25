"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Processing from "../../../ui/processing";
import { useDetailsClickOutside } from "@/hook/useDetailsClickOutside";
import FilterDropdownContent from "./filter-dropdown-content";
import FilterOptionsCategories from "./fiter-options-categories";

export default function FilterDropdownBarCategories() {
  const pramas = useParams();
  // const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState<any>(undefined);

  //Listen click outside details
  useDetailsClickOutside("categories-filter");

  // fetch data
  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  // // search input handle
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchValue(e.target.value);
  // };

  //searched
  const data = categories?.filter(
    (item: any) =>
      (item.name + item.description)
        .toLowerCase()
        .indexOf(searchValue.toLowerCase()) !== -1,
  );

  // selected

  const getSelectedCategory = () => {
    // condition: path in "/"
    if (pramas.slug === undefined) return undefined;
    // condition: path in c/... latest topics
    else if (pramas.slug.length <= 4) {
      const item = categories?.find(
        (category: any) => category.slug === pramas.slug[0],
      );
      return item;
    }
    // condition: path in tag/.../tagName latest topics
    else {
      const item = categories?.find(
        (category: any) => category.slug === pramas.slug[1],
      );
      return item;
    }
  };

  // href
  let herfPrefix: string = "";
  let herfSuffix: string = "";
  let length = pramas.slug?.length;
  // condition: path in "/"
  if ((3 <= length && length <= 4) || length === undefined) {
    herfPrefix = `/c`;
    herfSuffix = "latest";
  } else if (2 == length || (length <= 6 && length >= 5)) {
    herfPrefix = `/tag/c`;
    herfSuffix = (pramas.slug as string[]).slice(-2).join("/");
  }

  const element: React.ReactNode =
    getSelectedCategory() === undefined ? (
      "categories"
    ) : (
      <div className="flex flex-row items-center gap-1">
        <div
          className=" h-2 w-2"
          style={{ backgroundColor: `#${getSelectedCategory().color}` }}
        ></div>
        <div>{getSelectedCategory().name}</div>
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
              herfPrefix={herfPrefix}
              herfSuffix={herfSuffix}
              item={item}
            />
          </li>
        ))
      )}
    </FilterDropdownContent>
  );
}
