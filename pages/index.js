// import { getCourses } from '../utils/db'
import { useUser } from '@auth0/nextjs-auth0'

// const HomePage = ({ courses }) => {
//   return (
//     <div>
//       <h1>Courses</h1>
//       <pre>{JSON.stringify(courses, null, 2)}</pre>
//     </div>
//   )
// }

// export const getStaticProps = async () => {
//   const data = await getCourses()

//   return {
//     props: {
//       courses: JSON.parse(JSON.stringify(data)),
//     },
//   }
// }

const HomePage = () => {
  const { user, error, isLoading } = useUser()
  isLoading ? <div>Loading...</div> : null
  error ? <div>{error.message}</div> : null

  user ? (
    <div>
      welcome {user.name}! <a href="/api/auth/logout">Logout</a>
    </div>
  ) : (
    <a href="/api/auth/login"> Login </a>
  )
}

export default HomePage
