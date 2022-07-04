/* eslint-disable react-hooks/exhaustive-deps */
import {AppContext} from '../../../../context/AppContext'
import {useState, useContext, useEffect} from 'react'
import {
  validateName,
  validateTel,
  validateEmail,
} from '../../../../utils/helpers'
import {API_BASE_URL} from '../../../../constants/api'
import useFetch from '../../../../hooks/useFetch'
import Field from './components/Field'
import Connection from './components/Connection'

const Form = ({parentClassName, data}) => {

  const {inputs, select, policy, buttonText} = data
  const {postData, isLoading} = useFetch(API_BASE_URL)
  const {
    lang,
    isSuccessSubmit,
    setIsSuccessSubmit,
    isFormReset,
    setIsFormReset
  } = useContext(AppContext)

  const [name, setName] = useState('')
  const [isValidName, setIsValidName] = useState(false)
  const [tel, setTel] = useState('')
  const [isValidTel, setIsValidTel] = useState(false)
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [connection, setConnection] = useState('')
  const [isValidConnection, setIsValidConnection] = useState(false)
  const [isPolicyChecked, setIsPolicyChecked] = useState(true)

  const isSubmitDisabled = !(
    isValidName &&
    isValidTel &&
    isValidEmail &&
    isValidConnection &&
    isPolicyChecked
  )

  const handleNameChange = (event) => {
    const name = event.target.value
    setName(name)
    setIsValidName(validateName(name))
  }

  const handleTelChange = (event) => {
    const tel = event.target.value
    setTel(tel)
    setIsValidTel(validateTel(tel))
  }

  const handleEmailChange = (event) => {
    const email = event.target.value
    setEmail(email)
    setIsValidEmail(validateEmail(email))
  }

  const handleConnectionChange = (event) => {
    const connection = event.target.value
    setConnection(connection)
    connection
      ? setIsValidConnection(true)
      : setIsValidConnection(false)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const order = {
      type: 'order',
      date: new Date().toLocaleString(),
      name,
      tel,
      email,
      connection,
      isPolicyChecked
    }

    // console.log({order})

    postData(`${lang}/orders.json`, order).then(
      () => setIsSuccessSubmit(true),
      (error) => console.error({error})
    )
  }

  useEffect(() => {
    if (isSuccessSubmit || isFormReset) {
      setName('')
      setIsValidName(false)
      setTel('')
      setIsValidTel(false)
      setEmail('')
      setIsValidEmail(false)
      setConnection('')
      setIsValidConnection(false)
      setIsFormReset(false)
    }
  }, [isSuccessSubmit, isFormReset])

  return (
    <>
      <form
        className={`${parentClassName}__form`}
        onSubmit={handleFormSubmit}
      >
        {inputs?.length > 0 && inputs.map((input, index) => (
          <Field
            key={index}
            type={input.type}
            parentClassName={parentClassName}
            details={input}
            name={name}
            isValidName={isValidName}
            onNameChange={handleNameChange}
            tel={tel}
            isValidTel={isValidTel}
            onTelChange={handleTelChange}
            email={email}
            isValidEmail={isValidEmail}
            onEmailChange={handleEmailChange}
          />
        ))}

        {select && (
          <Connection
            parentClassName={parentClassName}
            details={select}
            connection={connection}
            isValidConnection={isValidConnection}
            onConnectionChange={handleConnectionChange}
          />
        )}

        {policy && (
          <label className={`${parentClassName}__policy`}>
            <input
              type='checkbox'
              checked={isPolicyChecked}
              onChange={() => setIsPolicyChecked(!isPolicyChecked)}
            />

            <a href={policy.url}>{policy.content}</a>
          </label>
        )}

        <button
          className={`${parentClassName}__btn`}
          type='submit'
          disabled={isSubmitDisabled}
        >
          {
            buttonText
              ? buttonText
              : (lang === 'en' ? 'Submit' : 'Отправить')
          }
        </button>
      </form>

      {isLoading && (
        <div className={`${parentClassName}__loader`}>
          {lang === 'en' ? 'Sending...' : 'Отправка...'}
        </div>
      )}
    </>
  )
}

export default Form