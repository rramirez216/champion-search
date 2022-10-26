import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setData(response.data.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [url])
  return data
}
export default useFetch
