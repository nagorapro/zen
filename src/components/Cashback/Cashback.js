import {AppContext} from '../../context/AppContext'
import {useContext, useRef} from 'react'
import useAnimateRef from '../../hooks/useAnimateRef'
import Title from '../../common/Title'
import Text from '../../common/Text'
import clsx from 'clsx'

const Cashback = ({data}) => {

  const {theme, isModalActive, setIsModalActive} = useContext(AppContext)

  const {name, title, texts, buttonText} = data

  const buttonBoxRef = useRef(null)

  useAnimateRef(buttonBoxRef)

  const className = 'cashback'

  const buttonDarkClassName = clsx({
    'dark': theme === 'dark'
  })

  const handleButtonClick = () => {
    setIsModalActive(true)
  }

  return (
    <section
      className={className}
      id={name}
    >
      <div className={`${className}__wrapper`}>

        <div className={`${className}__body`}>

          {title?.content && (
            <Title
              size={title.priority}
              parentClassName={className}
            >
              {title.content}
            </Title>
          )}

          {texts?.length > 0 && texts.map((text) => (
            <Text
              parentClassName={className}
              key={text}
            >
              {text}
            </Text>
          ))}

          <div ref={buttonBoxRef}>
            <button
              className={`${className}__btn ${buttonDarkClassName}`}
              onClick={handleButtonClick}
              disabled={isModalActive}
            >
              {buttonText ?? 'Order'}
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Cashback