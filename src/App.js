/* eslint-disable react-hooks/exhaustive-deps */
import {useContext, useState, useEffect} from 'react'
import {AppContext} from './context/AppContext'
import {API_BASE_URL} from './constants/api'
import useFetch from './hooks/useFetch'
import Preloader from './components/Preloader'
import Progress from './components/Progress'
import Header from './components/Header'
import Download from './components/Download'
import Warranty from './components/Warranty'
import Care from './components/Care'
import Cashback from './components/Cashback'
import Clients from './components/Clients'
import Footer from './components/Footer'
import ModalOrder from './components/ModalOrder'
import ModalSlider from './components/ModalSlider'

const App = () => {
  const {lang, setSlides} = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth)
  const {getData} = useFetch(API_BASE_URL)

  useEffect(() => {
    document.body.translate = false
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  useEffect(() => {
    setSlides([])
    getData(`${lang}.json`).then(
      (data) => setData(data),
      (error) => console.error({error})
    )
  }, [lang])

  useEffect(() => {
    if (data) {
      const timerID = setTimeout(() => setIsLoading(false), 3000)
      return () => clearTimeout(timerID)
    }
  }, [data])

  const handleWindowResize = (event) => {
    if (windowWidth !== event.target.innerWidth) {
      window.location.reload()
      setWindowWidth(event.target.innerWidth)
    }
  }

  return (
    <>
      {isLoading && <Preloader />}

      {!isLoading && <Progress />}

      {data?.header && <Header data={data.header} />}

      {data?.download && <Download data={data.download} />}

      {data?.warranty && <Warranty data={data.warranty} />}

      {data?.care && <Care data={data.care} />}

      {data?.cashback && <Cashback data={data.cashback} />}

      {data?.clients && <Clients data={data.clients} />}

      {data?.footer && <Footer data={data.footer} />}

      {data?.modal && <ModalOrder data={data.modal} />}

      {!isLoading && <ModalSlider />}
    </>
  )
}

export default App
