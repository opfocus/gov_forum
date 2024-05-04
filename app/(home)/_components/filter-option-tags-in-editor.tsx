"use client";

export default function FilterOptionsTagsInEditor({
  item,
  setTagSelected,
  tagSelected,
}: {
  setTagSelected: any;
  item: any;
  tagSelected:string[]
}) {
  return (
    <button
      onClick={() =>
        setTagSelected(
          [...tagSelected, item]
        )
      }
      className="block px-2 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-600"
    >
      {item}
    </button>
  );
}
