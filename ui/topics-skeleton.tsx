export { TopicsTableSkeleton, TopicsDivSkeleton };

//Topic table
function TopicsTableSkeleton() {
  return (
    <table className="w-full">
      <thead className=" border-b-4 border-solid border-gray-100 font-medium text-gray-400 dark:border-gray-600 dark:text-gray-300">
        <tr>
          <th className=" p-2 text-left ">Topic</th>
          <th className=" sm-hidden p-2"></th>
          <th className=" p-2">Replies</th>
          <th className=" sm-hidden p-2">Views</th>
          <th className=" p-2">Activity</th>
        </tr>
      </thead>
      <tbody className=" animate-pulse">
        <TopicTableSkeleton />
        <TopicTableSkeleton />
        <TopicTableSkeleton />
        <TopicTableSkeleton />
        <TopicTableSkeleton />
        <TopicTableSkeleton />
      </tbody>
    </table>
  );
}

function TopicTableSkeleton() {
  return (
    <tr className="border-b border-solid border-gray-100 dark:border-gray-600">
      <td className=" w-7/12 p-4">
        <div className="flex grow flex-col gap-0.5">
          <div className="h-6 w-4/5 rounded-lg bg-gray-300 dark:bg-gray-400 "></div>
          <div className="h-4 w-2/5 rounded-lg bg-gray-300 dark:bg-gray-400 "></div>
        </div>
      </td>
      <td className="sm-hidden w-1/6 p-4 text-left">
        <div className="m-auto h-6 w-2/5 rounded-lg bg-gray-300 dark:bg-gray-400"></div>
      </td>
      <td className=" w-1/12 p-4">
        <div className="m-auto h-6 w-2/5 rounded-lg bg-gray-300 dark:bg-gray-400"></div>
      </td>
      <td className="sm-hidden w-1/12 p-4">
        <div className="m-auto h-6 w-2/5 rounded-lg bg-gray-300 dark:bg-gray-400"></div>
      </td>
      <td className=" w-12 p-4">
        <div className="m-auto h-6 w-2/5 rounded-lg bg-gray-300 dark:bg-gray-400"></div>
      </td>
    </tr>
  );
}

//Topic div
function TopicsDivSkeleton() {
  return (
    <div>
      <div className=" border-b-4 border-solid border-gray-100 dark:border-gray-600">
        <div className="p-2 font-medium text-gray-400 dark:text-gray-300">
          Latest
        </div>
      </div>
      <div className=" animate-pulse">
        <TopicDivSkeleton />
        <TopicDivSkeleton />
        <TopicDivSkeleton />
        <TopicDivSkeleton />
        <TopicDivSkeleton />
        <TopicDivSkeleton />
      </div>
    </div>
  );
}

function TopicDivSkeleton() {
  return (
    <div className=" flex flex-row items-center border-b border-solid  border-gray-100 p-4 dark:border-gray-600">
      <div className="mr-3 h-12 w-12 shrink-0 rounded-full bg-gray-300 dark:bg-gray-400 "></div>
      <div className="flex grow flex-col gap-0.5">
        <div className="h-6 w-4/5 rounded-lg bg-gray-300 dark:bg-gray-400 "></div>
        <div className="h-4 w-2/5 rounded-lg bg-gray-300 dark:bg-gray-400 "></div>
      </div>
      <div className=" self-end flex flex-col gap-1 w-1/12">
        <div className=" h-7  rounded-lg bg-gray-300 dark:bg-gray-400 "></div>
        <div className=" h-5  rounded-lg bg-gray-300 dark:bg-gray-400"></div>
      </div>
    </div>
  );
}
