/* eslint-disable react-hooks/exhaustive-deps */
import {AppContext} from '../../context/AppContext'
import {useContext, useEffect} from 'react'
import clsx from 'clsx'
import {ReactComponent as CloseIcon} from './assets/close.svg'
import Form from './components/Form'

const Modal = ({data}) => {

  const {
    lang,
    isModalActive,
    setIsModalActive,
    isSuccessSubmit,
    setIsSuccessSubmit,
    setIsFormReset
  } = useContext(AppContext)

  const {title, form} = data

  const className = 'modal'

  const activeClassName = clsx({
    'active': isModalActive
  })

  const successMessage = lang === 'en'
    ? 'Order submit successfully!'
    : 'Заказ успешно отправлен!'

  useEffect(() => {
    if (isSuccessSubmit) {
      const timerID = setTimeout(() => {
        setIsSuccessSubmit(false)
        setIsModalActive(false)
      }, 3000)

      return () => clearTimeout(timerID)
    }
  }, [isSuccessSubmit])

  const handleCloseClick = () => {
    setIsModalActive(false)
    setIsFormReset(true)
  }

  return (
    <div className={`${className} ${activeClassName}`}>

      <div className={`${className}__body`}>
        <button
          className={`${className}__close`}
          onClick={handleCloseClick}
        >
          <CloseIcon />
        </button>

        {title?.content && (
          <h2 className={`${className}__title`}>
            {isSuccessSubmit ? successMessage : title.content}
          </h2>
        )}

        {form && !isSuccessSubmit && (
          <Form
            parentClassName={className}
            data={form}
          />
        )}
      </div>

      <div
        className={`${className}__overlay`}
        onClick={handleCloseClick}
      >
      </div>

    </div>
  )
}

export default Modal