import axios from 'axios'

const baseURL = 'http"//localhost:3000/api/get-courses'
const Homepage = ({ courses }) => {
  return (
    <div>
      <h1>Courisfy</h1>
      <pre>{JSON.stringify(courses, null, 2)}</pre>
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await axios.get(baseURL)
  return {
    props: {
      courses: data,
    },
  }
}

export default Homepage
