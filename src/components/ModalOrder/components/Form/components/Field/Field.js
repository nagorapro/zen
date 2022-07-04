import clsx from 'clsx'

const Field = ({
  type,
  parentClassName,
  details,
  name,
  isValidName,
  onNameChange,
  tel,
  isValidTel,
  onTelChange,
  email,
  isValidEmail,
  onEmailChange,
}) => {

  const currentClassName = parentClassName
    ? `${parentClassName}__field`
    : 'field'

  const fieldNameClasses = clsx(currentClassName, {
    'success': isValidName,
    'error': name?.length && !isValidName
  })

  const fieldTelClasses = clsx(currentClassName, {
    'success': isValidTel,
    'error': tel?.length && !isValidTel
  })

  const fieldEmailClasses = clsx(currentClassName, {
    'success': isValidEmail,
    'error': email?.length && !isValidEmail
  })

  switch (type) {
    default: return (
      <label className={fieldNameClasses}>
        <input
          type='text'
          value={name}
          placeholder={details?.placeholder}
          onChange={onNameChange}
        />
      </label>
    )

    case 'tel': return (
      <label className={fieldTelClasses}>
        <input
          type='tel'
          value={tel}
          placeholder={details?.placeholder}
          onChange={onTelChange}
        />
      </label>
    )

    case 'email': return (
      <label className={fieldEmailClasses}>
        <input
          type='email'
          value={email}
          placeholder={details?.placeholder}
          onChange={onEmailChange}
        />
      </label>
    )
  }
}

export default Field