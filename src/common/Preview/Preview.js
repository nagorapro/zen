/* eslint-disable react-hooks/exhaustive-deps */
import {useContext, useRef, useEffect} from 'react'
import {AppContext} from '../../context/AppContext'
import useAnimateRef from '../../hooks/useAnimateRef'

const Preview = ({image}) => {

  const {setPreviewDetails, setSlides} = useContext(AppContext)
  const previewRef = useRef(null)

  useAnimateRef(previewRef)

  useEffect(() => {
    setSlides((prevSlides) => [...prevSlides, image])
  }, [image])

  const handlePreviewClick = (event) => {

    const {src: source, alt: alternate, dataset} = event.currentTarget.children[0]
    const {top, left, width, height} = event.currentTarget.getBoundingClientRect()

    const previewDetails = {
      id: Number.parseInt(dataset.imageId, 10),
      source,
      alternate,
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
        data-image-id={image.id}
        src={image.source}
        alt={image.alternate}
      />
    </button>
  )
}

export default Preview