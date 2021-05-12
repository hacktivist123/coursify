import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0'

module.exports = withPageAuthRequired(async (req, res) => {
  // checks to see is authenticated
  const { user } = getSession(req, res)

  res.send(courses)
})
