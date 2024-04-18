import SearchPosts from "@/ui/search-posts";

export default function Page({searchParams}: {
  searchParams: {
    [key:string]: string | string[] | undefined
  }
}) {
  return (
    <div>
      {/* test searchParams */}
      <p>{searchParams.q}</p>
      <SearchPosts />
    </div>
  );
}
