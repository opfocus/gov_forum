

export default function UserActivityTopics({topics}: {
  topics: any[]
}) {

  if (topics.length === 0)
    return (
      <main>
        <section className=" mt-8">
          <div className=" flex flex-col ">
            <div className=" font-semibold">
            You have not started any topics yet
            </div>
            <p className=" py-4 text-sm text-gray-700">
            It’s always best to search for existing topics of conversation before starting a new one, but if you’re confident the topic you want isn’t out there already, go ahead and start a new topic of your very own. Look for the + New Topic button at the top right of the topic list, category, or tag to begin creating a new topic in that area.
            </p>
          </div>
        </section>
      </main>
      )
  return (
    <div>[TBA]display topic here, but I don't have topics demo data here</div>
  )
}