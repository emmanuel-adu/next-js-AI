import type { User } from '@clerk/nextjs/api'
import { prisma } from './db'
import { auth } from '@clerk/nextjs'

export const getUserByClerkID = async () => {
  const { userId } = await auth()
  console.log(userId)
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  })

  return user
}
