import { prisma } from '@/utils/db'
import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

const createNewUser = async () => {
  // current user can never be null
  const user = await currentUser()
//   console.log(user)

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  })

  if (!match) {
    // then this is a new user
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user?.emailAddresses[0].emailAddress,
      },
    })
  }

  redirect('/journal')
}

const NewUser = async () => {
  await createNewUser()
  return <div>...loading</div>
}

export default NewUser
