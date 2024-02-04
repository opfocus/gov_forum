import FilterBar from "./filter-bar";
import FilterDropdownBarCategories from "@/ui/filter-dropdown-bar-categories";
import FilterDropdownBarAllTags from "@/ui/filter-dropdown-bar-all-tags";

export type Item = {
  tab: string;
  slug: string;
};
const items = [
  {
    tab: "Categories",
    slug: "categories",
  },
  {
    tab: "Latest",
    slug: "latest",
  },
  {
    tab: "Unread",
    slug: "unread",
  },
  {
    tab: "Top",
    slug: "top",
  },
];

export default function FilterBars() {
  return (

      <ul className="flex flex-row  gap-2 text-gray-700">
        <li key={1}>
          <FilterDropdownBarCategories />
        </li>
        <li key={2}>
          <FilterDropdownBarAllTags />
        </li>
        {items.map((item) => (
          <li  key={item.tab}>
            <FilterBar item={item} />
          </li>
        ))}
      </ul>
  );
}
