import {AppContext} from '../../context/AppContext'
import {useContext} from 'react'
import Title from '../../common/Title'
import Text from '../../common/Text'
import clsx from 'clsx'

const Cashback = ({data}) => {

  const {theme, isModalActive, setIsModalActive} = useContext(AppContext)

  const {name, title, texts, buttonText} = data

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
      data-name={name}
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
              key={text}
              parentClassName={className}
            >
              {text}
            </Text>
          ))}

          <button
            className={`${className}__btn ${buttonDarkClassName}`}
            onClick={handleButtonClick}
            disabled={isModalActive}
          >
            {buttonText ?? 'Order'}
          </button>
        </div>

      </div>
    </section>
  )
}

export default Cashback