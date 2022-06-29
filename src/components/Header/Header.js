import {AppContext} from '../../context/AppContext'
import {useContext, useState, useEffect} from 'react'
import clsx from 'clsx'
import Logo from './components/Logo'
import Menu from './components/Menu'
import Language from './components/Language'
import Theme from './components/Theme'
import Burger from './components/Burger'
import {scrollToTop, scrollToSection} from '../../utils/helpers'

const Header = ({data}) => {

  const {name, menuItems} = data
  const {theme, toggleTheme, lang, setLang} = useContext(AppContext)
  const [isBurgerActive, setIsBurgerActive] = useState(false)
  const [isLogoCliked, setIsLogoCliked] = useState(false)
  const [scrollTargetHash, setScrollTargetHash] = useState('')

  const className = 'header'

  const darkClassName = clsx({
    'dark': theme === 'dark'
  })

  useEffect(() => {
    if (isLogoCliked) {
      scrollToTop()
      setIsLogoCliked(false)
    }
  }, [isLogoCliked])

  useEffect(() => {
    if (scrollTargetHash) {
      scrollToSection(scrollTargetHash)
      setScrollTargetHash('')
    }
  }, [scrollTargetHash])

  const handleLogoClick = () => {
    setIsBurgerActive(false)
    setIsLogoCliked(true)
  }

  const handleMenuItemClick = (event) => {
    event.preventDefault()
    setScrollTargetHash(event.target.hash)
    setIsBurgerActive(false)
  }

  const handleLanguageChange = (event) => {
    setLang(event.target.value)
  }

  const handleBurgerClick = () => {
    setIsBurgerActive(!isBurgerActive)
  }

  return (
    <header
      className={`${className} ${darkClassName}`}
      id={name}
    >
      <div className={`${className}__wrapper`}>
        <nav className={`${className}__nav`}>

          <Logo
            parentClassName={className}
            theme={theme}
            onLogoClick={handleLogoClick}
          />

          <Menu
            parentClassName={className}
            items={menuItems}
            theme={theme}
            isMenuActive={isBurgerActive}
            onMenuItemClick={handleMenuItemClick}
          />

        </nav>

        <Language
          parentClassName={className}
          language={lang}
          onLanguageChange={handleLanguageChange}
        />

        <Theme
          parentClassName={className}
          theme={theme}
          onThemeClick={toggleTheme}
        />

        <Burger
          parentClassName={className}
          isBurgerActive={isBurgerActive}
          onBurgerClick={handleBurgerClick}
        />
      </div>
    </header>
  )
}

export default Header