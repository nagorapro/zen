import {ReactComponent as LogoIcon} from './assets/logo.svg'

const Logo = ({parentClassName, onLogoClick}) => {

  return (
    <button
      className={`${parentClassName}__logo`}
      onClick={onLogoClick}
    >
      <LogoIcon />
    </button>
  )
}

export default Logo