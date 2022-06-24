import clsx from 'clsx'

const Connection = ({
  parentClassName,
  details,
  connection,
  isValidConnection,
  onConnectionChange
}) => {

  if (!Object.keys(details).length) return null

  const {label, options} = details

  const currentClassName = parentClassName
    ? `${parentClassName}__select`
    : 'select'

  const connectionClasses = clsx(currentClassName, {
    'success': isValidConnection
  })

  return (
    <label className={connectionClasses}>

      {!isValidConnection && <span>{label}</span>}

      <select
        value={connection}
        onChange={onConnectionChange}
      >
        <option></option>

        {options?.length > 0 && options.map((option, index) => (
          <option
            key={index}
            value={option.value}
          >
            {option.content}
          </option>
        ))}
      </select>
    </label>
  )
}

export default Connection