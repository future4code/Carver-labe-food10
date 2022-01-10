import { useEffect, useState } from 'react'
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(url , {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [url])

  return (data)
}

export default useRequestData

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InR6TlZ4bTRLWXd3ZGFNelFla25rIiwibmFtZSI6IlJlbmFuIiwiZW1haWwiOiJyZW5hbkBob3RtYWlsLmNvbSIsImNwZiI6Ijc3Ny43NzcuNzc3LTc3IiwiaGFzQWRkcmVzcyI6ZmFsc2UsImlhdCI6MTY0MTg0ODEzNH0.4qJEpeuaDfdvpGme_RrVdE6KINL5OcD5WIOnibAjRI4"
// }