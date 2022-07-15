import {createContext, useState, useEffect} from 'react'

const AppContext = createContext()

const AppProvider = ({children}) => {

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') ?? 'en'
  })

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') ?? 'light'
  })

  const [slides, setSlides] = useState([])

  const [slideDescription, setSlideDescription] = useState(null)

  const [previewDetails, setPreviewDetails] = useState(null)

  const [isBurgerActive, setIsBurgerActive] = useState(false)

  const [isModalActive, setIsModalActive] = useState(false)

  const [isSuccessSubmit, setIsSuccessSubmit] = useState(false)

  const [isFormReset, setIsFormReset] = useState(false)

  useEffect(() => {
    localStorage.setItem('theme', theme)

    theme === 'dark'
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark')

  }, [theme])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  useEffect(() => {
    isBurgerActive || isModalActive || previewDetails
      ? document.body.classList.add('hidden')
      : document.body.classList.remove('hidden')

  }, [isBurgerActive, isModalActive, previewDetails])

  const toggleTheme = () => {
    theme === 'light'
      ? setTheme('dark')
      : setTheme('light')
  }

  const value = {
    lang, setLang,
    theme, toggleTheme,
    slides, setSlides,
    slideDescription, setSlideDescription,
    previewDetails, setPreviewDetails,
    isBurgerActive, setIsBurgerActive,
    isModalActive, setIsModalActive,
    isSuccessSubmit, setIsSuccessSubmit,
    isFormReset, setIsFormReset
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider}