import {useState} from 'react'

const useFetch = (baseURL) => {

  const [isLoading, setIsLoading] = useState(false)

  const getData = (endPoint) => {

    setIsLoading(true)

    return new Promise((resolve, reject) => {
      fetch(baseURL + endPoint)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            return reject(data)
          }
          resolve(data)
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false))
    })
  }

  const postData = (endPoint, body) => {

    setIsLoading(true)

    return new Promise((resolve, reject) => {
      fetch(baseURL + endPoint, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            return reject(data)
          }
          resolve(data)
        })
        .catch((error) => console.error({error}))
        .finally(() => setIsLoading(false))
    })
  }

  return {getData, postData, isLoading}
}

export default useFetch