const MenuItem = ({
  parentClassName,
  item,
  onMenuItemClick
}) => {

  return (
    <li className={`${parentClassName}__item`}>
      <button
        data-target={item.target}
        onClick={onMenuItemClick}
      >
        {item.text}
      </button>
    </li>
  )
}

export default MenuItem