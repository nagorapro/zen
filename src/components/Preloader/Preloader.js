import {AppContext} from '../../context/AppContext'
import {useContext} from 'react'
import clsx from 'clsx'

const Preloader = () => {

  const {theme} = useContext(AppContext)

  const classes = clsx({
    'preloader': true,
    'dark': theme === 'dark'
  })

  return (
    <div className={classes}></div>
  )
}

export default Preloader