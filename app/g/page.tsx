
import { Input } from "@/ui/custom-compoment"
import { UserIcon } from "@heroicons/react/16/solid"

export default function Page() {
  return (
    <section className=" mt-8 space-y-6">
      <h1>[TBA]</h1>
      <div className=" flex gap-1">
        <Input placeholder="All Groups" name="group"></Input>
        <select name="group-selected" id="group-select"
          className=" border border-solid border-gray-300 dark:border-gray-400 focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
        >
          <option value="type" selected>Filter by group type</option>
          <option value="my">My Groups</option>
          <option value="own">Groups I own</option>
          <option value="public">Pubilc Groups</option>
          <option value="closed">Closed Groups</option>
        </select>
      </div>
      <div className=" flex flex-col gap-6 w-full p-4 border border-solid border-gray-300 dark:border-gray-400 hover:shadow-lg">
        <div className=" flex gap-1 justify-between">
          <h3 className=" grow font-semibold">
            moderators
          </h3>
          <div className=" flex items-center">
            <UserIcon className=" w-5 h-5 shrink-0" />
            <span>9</span>
          </div>
        </div>
        <div>
          Automatic
        </div>
      </div>
    </section>
  )
}