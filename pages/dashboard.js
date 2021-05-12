import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const Dashboard = withPageAuthRequired(({ user }) => {
  return <p>Welcome {user.name}</p>
})

export default Dashboard
