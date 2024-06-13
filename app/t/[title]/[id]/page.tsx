import PostsStream from "@/ui/posts-stream";
import PostsStreamFooterButtons from "@/ui/posts-stream-footer-buttons";
import TopicSuggested from "@/ui/topic-suggested";
export default async function Page() {
  return (
    <section className=" mt-8 space-y-6">
      <PostsStream />
      <PostsStreamFooterButtons />
      <TopicSuggested />
    </section>
  );
}
