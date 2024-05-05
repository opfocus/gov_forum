import { Input } from "@/ui/custom-compoment";

export default function Page() {
  return (
    <section className=" mt-8 space-y-6">
      <div className=" flex justify-between">
        <select
          name="user-select"
          id="user-select"
          className=" border-none text-lg font-bold focus:ring-0"
        >
          <option value="all" selected>
            All Time
          </option>
          <option value="Year">Year</option>
          <option value="">Quarter</option>
          <option value="">Month</option>
          <option value="">Week</option>
          <option value="">Today</option>
        </select>
        <label>
          <span className=" text-gray-400">11324 users: </span>
          <Input placeholder="filter by username" name="user-filter"></Input>
        </label>
      </div>
      <div className=" flex flex-col gap-6">
        <div className=" flex gap-4">
          <img
            src="https://avatars.discourse-cdn.com/v4/letter/c/b3f665/96.png"
            alt="user avantar"
            className=" h-12 w-12 shrink-0 rounded-full"
          />
          <span className=" font-semibold text-gray-500">chooose</span>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          <div>
            <span>Received</span>
            <span> ......... </span>
            <span>26</span>
          </div>
          <div>
            <span>Received</span>
            <span> ......... </span>
            <span>26</span>
          </div>
          <div>
            <span>Received</span>
            <span> ......... </span>
            <span>26</span>
          </div>
          <div>
            <span>Received</span>
            <span> ......... </span>
            <span>26</span>
          </div>
          <div>
            <span>Received</span>
            <span> ......... </span>
            <span>26</span>
          </div>
          <div>
            <span>Received</span>
            <span> ......... </span>
            <span>26</span>
          </div>
          <div>
            <span>Received</span>
            <span> ......... </span>
            <span>26</span>
          </div>
          <div>
            <span>Received</span>
            <span> ......... </span>
            <span>26</span>
          </div>
        </div>
      </div>
    </section>
  );
}
