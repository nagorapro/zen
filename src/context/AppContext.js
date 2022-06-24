import {createContext, useState, useEffect} from 'react'

const AppContext = createContext()

const AppProvider = ({children}) => {

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') ?? 'en'
  })

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') ?? 'light'
  })

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
    isModalActive
      ? document.body.classList.add('hidden')
      : document.body.classList.remove('hidden')
  }, [isModalActive])

  const toggleTheme = () => {
    theme === 'light'
      ? setTheme('dark')
      : setTheme('light')
  }

  const value = {
    lang, setLang,
    theme, toggleTheme,
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