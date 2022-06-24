const Burger = ({
  parentClassName,
  isBurgerActive,
  onBurgerClick
}) => {

  const className = isBurgerActive
    ? `${parentClassName}__burger active`
    : `${parentClassName}__burger`

  return (
    <button
      className={className}
      onClick={onBurgerClick}
    >
      <span></span>
    </button>
  )
}

export default Burger