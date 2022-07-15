/* eslint-disable react-hooks/exhaustive-deps */
import {useContext, useState, useRef, useEffect} from 'react'
import {AppContext} from '../../context/AppContext'
import Description from './components/Description'
import Slider from './components/Slider'

const ModalSlider = () => {

  const sliderRef = useRef(null)
  const [isSliderBackward, setIsSliderBackward] = useState(false)
  const [isDescriptionHidden, setIsDescriptionHidden] = useState(true)
  const {previewDetails, setPreviewDetails} = useContext(AppContext)

  const className = 'modal-slider'

  useEffect(() => {
    if (!previewDetails) return

    const screenHeight = window.screen.availHeight
    const screenWidth = document.body.getBoundingClientRect().width

    sliderRef.current.style.top = previewDetails.top + 'px'
    sliderRef.current.style.left = previewDetails.left + 'px'
    sliderRef.current.style.width = previewDetails.width + 'px'
    sliderRef.current.style.height = previewDetails.height + 'px'

    const timerID = setTimeout(() => {
      setIsDescriptionHidden(false)
      sliderRef.current.style.top = (((screenHeight / 2)) - (previewDetails.height / 2)) + 'px'
      sliderRef.current.style.left = ((screenWidth / 2) - (previewDetails.width / 2)) + 'px'
    }, 500)

    return () => clearTimeout(timerID)

  }, [previewDetails])

  useEffect(() => {
    if (!previewDetails && !isSliderBackward) return

    sliderRef.current.style.top = previewDetails.top + 'px'
    sliderRef.current.style.left = previewDetails.left + 'px'

    const timerID = setTimeout(() => {
      setPreviewDetails(null)
      setIsSliderBackward(false)
    }, 500)

    return () => clearTimeout(timerID)

  }, [isSliderBackward])

  const handleCloseClick = () => {
    setIsSliderBackward(true)
    setIsDescriptionHidden(true)
  }

  if (!previewDetails) return null

  return (
    <div className={className}>

      <Description
        parentClassName={className}
        isDescriptionHidden={isDescriptionHidden}
      />

      <Slider
        ref={sliderRef}
        currentSlideID={previewDetails.id}
        slideWidth={previewDetails.width}
        isSliderBackward={isSliderBackward}
        onCloseClick={handleCloseClick}
      />

      <div
        className={`${className}__overlay`}
        onClick={handleCloseClick}
      ></div>

    </div>
  )
}

export default ModalSlider