import {useRef} from 'react'
import useAnimateRef from '../../hooks/useAnimateRef'

const Text = ({parentClassName, children}) => {

  const textRef = useRef(null)

  useAnimateRef(textRef)

  if (!children) return null

  const className = parentClassName ? `${parentClassName}__copy` : 'copy'

  return (
    <p className={className} ref={textRef}>{children}</p>
  )
}

export default Text