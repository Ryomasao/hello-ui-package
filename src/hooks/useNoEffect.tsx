import { useEffect } from 'react'

const useNoEffect = () => {
  useEffect(() => {
    console.log('effect')
  }, [])
}

export default useNoEffect