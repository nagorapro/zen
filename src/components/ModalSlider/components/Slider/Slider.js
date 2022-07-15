/* eslint-disable react-hooks/exhaustive-deps */
import {AppContext} from '../../../../context/AppContext'
import {forwardRef, useContext, useRef, useState, useEffect} from 'react'
import {ReactComponent as CloseIcon} from './assets/close.svg'
import {ReactComponent as ArrowLeftIcon} from './assets/left.svg'
import {ReactComponent as ArrovRightIcon} from './assets/right.svg'
import clsx from 'clsx'

const Slider = forwardRef(({
  currentSlideID,
  slideWidth,
  isSliderBackward,
  onCloseClick
}, ref) => {

  const {slides, setSlideDescription} = useContext(AppContext)

  const slidesRef = useRef(null)

  const [activeSlideID, setActiveSlideID] = useState(currentSlideID)
  const [isControlsHidden, setIsControlsHidden] = useState(false)

  const className = 'slider'
  const hiddenClassName = clsx({'hidden': isControlsHidden})


  useEffect(() => {
    if (!isSliderBackward) {
      setSlideDescription(slides[activeSlideID - 1].alternate)
    }
  }, [activeSlideID, isSliderBackward])

  useEffect(() => {
    if (isSliderBackward) {
      setIsControlsHidden(true)
      setActiveSlideID(currentSlideID)
    }
  }, [isSliderBackward])

  const handlePrevClick = () => {
    setActiveSlideID((prevID) => prevID - 1)
  }

  const handleNextClick = () => {
    setActiveSlideID((prevID) => prevID + 1)
  }

  return (
    <div
      className={className}
      ref={ref}
    >
      <button
        className={`${className}__close`}
        type='button'
        onClick={onCloseClick}
      >
        <CloseIcon />
      </button>

      <div
        className={`${className}__slides`}
        ref={slidesRef}
        style={{
          left: activeSlideID !== 1
            ? -(slideWidth * (activeSlideID - 1)) + 'px'
            : 0
        }}
      >
        {slides.map((slide) => (
          <img
            className={`${className}__slide`}
            style={{width: `${slideWidth}px`}}
            key={slide.id}
            src={slide.source}
            alt={slide.alternate}
          />
        ))}
      </div>

      <button
        className={`${className}__prev ${hiddenClassName}`}
        onClick={handlePrevClick}
        disabled={activeSlideID === 1}
      >
        <ArrowLeftIcon />
      </button>

      <button
        className={`${className}__next ${hiddenClassName}`}
        onClick={handleNextClick}
        disabled={activeSlideID === slides.length}
      >
        <ArrovRightIcon />
      </button>

      <p className={`${className}__pagination ${hiddenClassName}`}>
        {`${activeSlideID} / ${slides.length}`}
      </p>

    </div>
  )
})

export default Slider