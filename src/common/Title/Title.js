import {useRef} from 'react'
import useAnimateRef from '../../hooks/useAnimateRef'

const Title = ({parentClassName, size, children}) => {

  const titleRef = useRef(null)

  useAnimateRef(titleRef)

  if (!children) return null

  const className = parentClassName ? `${parentClassName}__title` : 'title'

  switch (size) {
    case 6: return (
      <h6 className={className} ref={titleRef}>{children}</h6>
    )

    case 5: return (
      <h5 className={className} ref={titleRef}>{children}</h5>
    )

    case 4: return (
      <h4 className={className} ref={titleRef}>{children}</h4>
    )

    case 3: return (
      <h3 className={className} ref={titleRef}>{children}</h3>
    )

    case 2: return (
      <h2 className={className} ref={titleRef}>{children}</h2>
    )

    default: return (
      <h1 className={className} ref={titleRef}>{children}</h1>
    )
  }
}

export default Title