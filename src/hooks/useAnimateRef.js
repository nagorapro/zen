import {useEffect} from 'react'
import {showAnimateRef} from '../utils/helpers'

const useAnimateRef = (ref) => {
  
  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  })

  const handleWindowScroll = () => {
    showAnimateRef(ref)
  }
}

export default useAnimateRef