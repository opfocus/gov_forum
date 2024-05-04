"use client";

import TopicEditorCategories from "./topic-editor-categories";
import TopicEditorTags from "./topic-editor-tags";
import { Input } from "@/ui/custom-compoment";

export default function TopicEditorTitleCategoryTag({
  categorySelected,
  setCategorySelected,
  tagSelected,
  setTagSelected,
}: any) {
  return (
    <div className=" flex w-full flex-col gap-2">
      <Input id="topic-input" placeholder="Type title, or paste a link here" />
      <div className="flex flex-row gap-2">
        <div className="flex-1">
          <TopicEditorCategories
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
          />
        </div>
        <div className="flex-1">
          <TopicEditorTags
            tagSelected={tagSelected}
            setTagSelected={setTagSelected}
          />
        </div>
      </div>
    </div>
  );
}
