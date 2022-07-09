/* eslint-disable react-hooks/exhaustive-deps */
import {AppContext} from '../../context/AppContext'
import {useContext, useState, useRef, useEffect} from 'react'
import {ReactComponent as CloseIcon} from './assets/close.svg'
import {showAnimateDescription} from '../../utils/helpers.js'
import clsx from 'clsx'

const ModalImage = () => {

  const imageBoxRef = useRef(null)
  const descriptionRef = useRef(null)
  const [isImageBoxBackward, setIsImageBoxBackward] = useState(false)
  const [isDescriptionHidden, setIsDescriptionHidden] = useState(true)
  const {previewDetails, setPreviewDetails} = useContext(AppContext)
  
  const className = 'modal-image'
  const darkOutClassName = clsx({'dark-out': isImageBoxBackward})
  const hiddenClassName = clsx({'hidden': isDescriptionHidden})

  useEffect(() => {
    if (!previewDetails) return

    const screenHeight = window.screen.availHeight
    const screenWidth = window.screen.availWidth

    const imageBox = imageBoxRef.current

    imageBox.style.top = previewDetails.top + 'px'
    imageBox.style.left = previewDetails.left + 'px'
    imageBox.style.width = previewDetails.width + 'px'
    imageBox.style.height = previewDetails.height + 'px'

    const timerID = setTimeout(() => {
      imageBox.style.top = (((screenHeight / 2)) - (previewDetails.height / 2)) + 'px'
      imageBox.style.left = ((screenWidth / 2) - (previewDetails.width / 2)) + 'px'
      setIsDescriptionHidden(false)
      showAnimateDescription(descriptionRef, previewDetails.alt)
    }, 1000)

    return () => clearTimeout(timerID)

  }, [previewDetails])

  useEffect(() => {
    if (!previewDetails && !isImageBoxBackward) return

    const imageBox = imageBoxRef.current
    imageBox.style.top = previewDetails.top + 'px'
    imageBox.style.left = previewDetails.left + 'px'

    const timerID = setTimeout(() => {
      setPreviewDetails(null)
      setIsImageBoxBackward(false)
    }, 1000)

    return () => clearTimeout(timerID)

  }, [isImageBoxBackward])

  const handleCloseClick = () => {
    setIsImageBoxBackward(true)
    setIsDescriptionHidden(true)
  }

  if (!previewDetails) return null

  return (
    <div className={`${className} ${darkOutClassName}`}>

      <p
        className={`${className}__description ${hiddenClassName}`}
        ref={descriptionRef}
      ></p>

      <div
        className={`${className}__body`}
        ref={imageBoxRef}
      >
        <button
          className={`${className}__close`}
          type='button'
          onClick={handleCloseClick}
        >
          <CloseIcon />
        </button>

        <img
          className={`${className}__image`}
          src={previewDetails.src}
          alt={previewDetails.alt}
        />
      </div>

      <div
        className={`${className}__overlay`}
        onClick={handleCloseClick}
      ></div>

    </div>
  )
}

export default ModalImage