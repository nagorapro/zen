import {useRef, useEffect} from 'react'

const Progress = () => {
  
  const progressRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleWindowScroll = () => {
    const clientRect = document.body.getBoundingClientRect()
    const clientPassed = Math.abs(clientRect.top)
    const clientHeight = document.body.clientHeight
    const screenHeight = window.screen.height
    const clientNotPassed = clientHeight - screenHeight
    const percent = Math.floor(clientPassed / clientNotPassed * 100)
    progressRef.current.style.width = `${percent}%`
  }

  return (
    <div className='progress' ref={progressRef}></div>
  )
}

export default Progress