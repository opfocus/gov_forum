'use client'

import TopicEditorCategories from "./topic-editor-categories"
import TopicEditorTags from "./topic-editor-tags"

export default function TopicEditorTitleCategoryTag({categorySelected, setCategorySelected,tagSelected, setTagSelected}:any ) {

  return (
    <div className=" flex flex-col gap-2 w-full">
      <div>
        <input id="topic-input" type="text" 
        className="w-full px-2 py-1 border border-solid border-gray-400 focus:outline-blue-400"
          placeholder="Type title, or paste a link here"
          required
        />
      </div>
      <div className="flex flex-row gap-2">
      <div className="flex-1">
        <TopicEditorCategories  categorySelected= {categorySelected} setCategorySelected = {setCategorySelected} />
      </div>
      <div className="flex-1">
        <TopicEditorTags  tagSelected = {tagSelected} setTagSelected={setTagSelected} />
      </div>
    </div>
    </div>
  )
}