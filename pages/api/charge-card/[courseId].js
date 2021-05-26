import { PrismaClient } from '@prisma/client'
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0'

const prisma = new PrismaClient()

module.exports = async (req, res) => {
  const { courseId } = req.query
  const {
    user: { email },
  } = getSession(req, res)

  const course = prisma.course.findUnique({
    where: {
      id: parseInt(courseId),
    },
  })

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  res.send(
    `charging ${user.email} ${course.price} cents for course ${courseId}`
  )
}
