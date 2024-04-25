export default function Page() {
  return <SkeletonCard />;
}

export function SkeletonCard({ isLoading }: { isLoading?: boolean }) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl animate-pulse before:bg-gradient-to-r 
  "
    >
      <div className="space-y-3">
        <div className="h-14 rounded-lg bg-gray-700" />
        <div className="h-3 w-11/12 rounded-lg bg-gray-700" />
        <div className="h-3 w-8/12 rounded-lg bg-gray-700" />
      </div>
    </div>
  );
}
