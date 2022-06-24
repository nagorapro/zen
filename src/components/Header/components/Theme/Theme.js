import {ReactComponent as MoonIcon} from './assets/moon.svg'
import {ReactComponent as SunIcon} from './assets/sun.svg'

const Theme = ({
  parentClassName,
  theme,
  onThemeClick
}) => {
  return (
    <button
      className={`${parentClassName}__theme`}
      onClick={onThemeClick}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default Theme