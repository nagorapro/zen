import {useRef, useEffect} from 'react'
import {showProgress} from '../../utils/helpers'

const Progress = () => {

  const progressRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleWindowScroll = () => {
    showProgress(progressRef)
  }

  return (
    <div className='progress' ref={progressRef}></div>
  )
}

export default Progress