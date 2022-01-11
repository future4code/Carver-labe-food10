import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import  {goToHomeList}  from '../routes/coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToHomeList(history)
    }
  }, [history])
}

export default useUnprotectedPage
