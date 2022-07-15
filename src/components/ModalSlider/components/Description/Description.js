/* eslint-disable react-hooks/exhaustive-deps */
import {AppContext} from '../../../../context/AppContext'
import {useContext, useRef, useEffect} from 'react'
import useAnimatePrint from '../../../../hooks/useAnimatePrint'
import clsx from 'clsx'

const Description = ({parentClassName, isDescriptionHidden}) => {

  const descriptionRef = useRef(null)

  const {previewDetails, slideDescription} = useContext(AppContext)

  const {animatePrint} = useAnimatePrint(descriptionRef)

  const hiddenClassName = clsx({'hidden': isDescriptionHidden})

  useEffect(() => {
    if (slideDescription) {
      animatePrint(slideDescription, previewDetails.width)
    }
  }, [slideDescription])

  return (
    <p
      className={`${parentClassName}__description ${hiddenClassName}`}
      ref={descriptionRef}
      style={{width: previewDetails.width + 'px'}}
    ></p>
  )
}

export default Description