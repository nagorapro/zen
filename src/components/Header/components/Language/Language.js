import {ReactComponent as ArrowIcon} from './assets/arrov.svg'

const Language = ({
  parentClassName,
  language,
  onLanguageChange
}) => {

  return (
    <label className={`${parentClassName}__lang`}>

      <select
        value={language}
        onChange={onLanguageChange}
      >
        <option value='en'>EN</option>
        <option value='ru'>RU</option>
      </select>

      <ArrowIcon />
    </label>
  )
}

export default Language