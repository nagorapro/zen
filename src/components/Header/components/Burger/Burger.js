import clsx from 'clsx'

const Burger = ({
  parentClassName,
  isBurgerActive,
  onBurgerClick
}) => {

  const currentClassName = parentClassName
    ? `${parentClassName}__burger`
    : 'burger'

  const classes = clsx(currentClassName, {
    'active': isBurgerActive
  })

  return (
    <button
      className={classes}
      onClick={onBurgerClick}
    >
      <span></span>
    </button>
  )
}

export default Burger