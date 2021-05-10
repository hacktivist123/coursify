import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

module.exports = async (req, res) => {
  await prisma.course.create({
    data: {
      title: 'Javascript 101',
      thumbnail: 'hello world',
      lessons: {
        create: { title: 'Swtich Statements' },
      },
    },
  })
  const courses = await prisma.course.findMany({
    include: {
      lessons: true,
    },
  })
  res.send(courses)
}
