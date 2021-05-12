import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const Dashboard = withPageAuthRequired(({ user }) => {
  return <p>Welcome {user.name}</p>
})

export const getServerSideProps = withPageAuthRequired()

export default Dashboard
