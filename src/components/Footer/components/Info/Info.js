import {useState, useEffect} from 'react'
import {ReactComponent as LogoIcon} from './assets/logo.svg'
import {scrollToTop} from '../../../../utils/helpers'

const Info = ({parentClassName, data}) => {

  const {texts, developer} = data
  const [isLogoCliked, setIsLogoCliked] = useState(false)

  useEffect(() => {
    if (isLogoCliked) {
      scrollToTop()
      setIsLogoCliked(false)
    }
  }, [isLogoCliked])

  const handleLogoClick = () => {
    setIsLogoCliked(true)
  }

  return (
    <div className={`${parentClassName}__info`}>

      <button
        className={`${parentClassName}__logo`}
        onClick={handleLogoClick}
      >
        <LogoIcon />
      </button>

      {texts?.length > 0 && texts.map((text) => (
        <p
          className={`${parentClassName}__copy`}
          key={text}
        >
          {text}
        </p>
      ))}

      {developer && (
        <a
          className={`${parentClassName}__developer`}
          href={developer.url}
          title='nagoraproweb.ru'
        >
          <img
            src={developer.content.source}
            alt={developer.content.alternate}
          />
        </a>
      )}
    </div>
  )
}

export default Info