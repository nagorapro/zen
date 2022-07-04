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
import ModalImage from './components/ModalImage'

const App = () => {
  const {lang} = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
  const {getData} = useFetch(API_BASE_URL)

  useEffect(() => {
    document.body.translate = false
  }, [])

  useEffect(() => {
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

      {!isLoading && <ModalImage/>}
    </>
  )
}

export default App
