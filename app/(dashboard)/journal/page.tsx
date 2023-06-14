import EntryCard from '@/app/components/EntryCard'
import NewEntryCard from '@/app/components/NewEntryCard'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getEntries = async () => {
  const user = await getUserByClerkID()
  console.log('hello')
  const data = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      analysis: true,
    },
  })

  return data
}

const JournalPage = async () => {
  const entries = await getEntries()
  console.log(entries)

  return (
    <div className="p-10">
      <h2 className="text-3xl mb-8">Journal</h2>
      <div className="grid gid-cols-3 gap-4">
        <NewEntryCard />
        {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  )
}

export default JournalPage
