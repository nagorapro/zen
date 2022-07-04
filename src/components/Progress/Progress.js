import {AppContext} from '../../context/AppContext'
import {useContext, useRef, useEffect} from 'react'
import {showProgress} from '../../utils/helpers'
import clsx from 'clsx'

const Progress = () => {

  const {previewDetails} = useContext(AppContext)
  const progressRef = useRef(null)

  const classNames = clsx('progress', {
    'hidden': previewDetails !== null && previewDetails.top < 100
  })

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleWindowScroll = () => {
    showProgress(progressRef)
  }

  return (
    <div className={classNames} ref={progressRef}></div>
  )
}

export default Progress