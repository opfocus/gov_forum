"use client";

import FilterDropdownBarCategories from "@/app/(home)/_components/filter-dropdown-bar-categories";
import FilterDropdownBarAllTags from "@/app/(home)/_components/filter-dropdown-bar-all-tags";
import FilterDropdownBarSubCategories from "@/app/(home)/_components/filter-dropdown-bar-sub-categories";
import TabGroup from "@/ui/tab-group";
import NewTopicButton from "@/ui/new-topic-button";
import { useParams, useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import type { Item } from "@/lib/tab-group-data";

export default function FilterDropdownBars({
  items,
  path,
  parallelRoutesKey,
}: {
  items: Item[];
  path: string;
  parallelRoutesKey?: string;
}) {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedSubCategory, setSeleSubctedCategory] = useState();
  const slug = useParams()?.slug as string[];
  const segment = useSelectedLayoutSegment();
  const currentURLIngredients = {
    tagRoute: "",
    categoryRouter: "",
    category: "",
    subCategory: "",
    id: "",
    tagName: "",
    excipients: "",
    sort: "",
  };

  if (segment === "c") {
    currentURLIngredients.categoryRouter = "c";
    currentURLIngredients.category = slug[0];
    switch (slug.length) {
      case 2:
        currentURLIngredients.id = slug[1];
        break;
      case 3:
        currentURLIngredients.subCategory = slug[1];
        currentURLIngredients.id = slug[2];
        break;
      case 4:
        currentURLIngredients.id = slug[1];
        currentURLIngredients.excipients = slug[2];
        currentURLIngredients.sort = slug[3];
        break;
      case 5:
        currentURLIngredients.subCategory = slug[1];
        currentURLIngredients.id = slug[2];
        currentURLIngredients.excipients = slug[3];
        currentURLIngredients.sort = slug[4];
        break;
      default:
        throw new Error("Url parse error");
    }
  } else if (segment === "tag") {
    currentURLIngredients.tagRoute = "tag";
    switch (slug.length) {
      case 1:
        currentURLIngredients.tagName = slug[0];
        break;
      case 3:
        currentURLIngredients.tagName = slug[0];
        currentURLIngredients.excipients = slug[1];
        currentURLIngredients.sort = slug[2];
        break;
      case 4:
        currentURLIngredients.categoryRouter = slug[0];
        currentURLIngredients.category = slug[1];
        currentURLIngredients.id = slug[2];
        currentURLIngredients.tagName = slug[3];
        break;
      case 5:
        currentURLIngredients.categoryRouter = slug[0];
        currentURLIngredients.category = slug[1];
        currentURLIngredients.subCategory = slug[2];
        currentURLIngredients.id = slug[3];
        currentURLIngredients.tagName = slug[4];
        break;
      case 6:
        currentURLIngredients.categoryRouter = slug[0];
        currentURLIngredients.category = slug[1];
        currentURLIngredients.id = slug[2];
        currentURLIngredients.tagName = slug[3];
        currentURLIngredients.excipients = slug[4];
        currentURLIngredients.sort = slug[5];
        break;
      case 7:
        currentURLIngredients.categoryRouter = slug[0];
        currentURLIngredients.category = slug[1];
        currentURLIngredients.subCategory = slug[2];
        currentURLIngredients.id = slug[3];
        currentURLIngredients.tagName[4];
        currentURLIngredients.excipients = slug[5];
        currentURLIngredients.sort = slug[6];
        break;
      default:
        throw new Error("Url parse error");
    }
  }

  return (
    <nav className=" my-2 flex w-full flex-row flex-wrap items-center  gap-2 bg-inherit text-gray-600 dark:text-gray-100">
      <div className=" flex gap-2 bg-inherit">
        <FilterDropdownBarCategories
          currentURLIngredients={currentURLIngredients}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <FilterDropdownBarSubCategories
          currentURLIngredients={currentURLIngredients}
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          setSeleSubctedCategory={setSeleSubctedCategory}
        />
        <FilterDropdownBarAllTags
          currentURLIngredients={currentURLIngredients}
          // selectedCategory={selectedCategory}
          // selectedSubCategory={selectedSubCategory}
        />
      </div>
      <TabGroup
        items={items}
        path={path}
        parallelRoutesKey={parallelRoutesKey}
        currentURLIngredients={currentURLIngredients}
      />
      <NewTopicButton />
    </nav>
  );
}
