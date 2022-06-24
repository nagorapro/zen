import {useRef} from 'react'
import useAnimateRef from '../../hooks/useAnimateRef'

const Text = ({parentClassName, children}) => {

  const textRef = useRef(null)

  useAnimateRef(textRef)

  return (
    <p
      className={`${parentClassName}__copy`}
      ref={textRef}
    >
      {children}
    </p>
  )
}

export default Text