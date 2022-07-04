import {useContext, useRef} from 'react'
import {AppContext} from '../../context/AppContext'
import useAnimateRef from '../../hooks/useAnimateRef'

const Preview = ({image}) => {

  const {setPreviewDetails} = useContext(AppContext)
  const previewRef = useRef(null)

  useAnimateRef(previewRef)

  const handlePreviewClick = (event) => {

    const {src, alt} = event.currentTarget.children[0]

    const clientRect = event.currentTarget.getBoundingClientRect()

    const {top, left, width, height} = clientRect

    const previewDetails = {
      src,
      alt,
      top,
      left,
      width,
      height,
    }

    setPreviewDetails(previewDetails)
  }

  return (
    <button
      className='preview'
      type='button'
      ref={previewRef}
      onClick={handlePreviewClick}
    >
      <img
        src={image.source}
        alt={image.alternate}
      />
    </button>
  )
}

export default Preview