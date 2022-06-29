const MenuItem = ({
  parentClassName,
  item,
  onMenuItemClick
}) => {

  return (
    <li className={`${parentClassName}__item`}>
      <a
        href={`#${item.target}`}
        onClick={onMenuItemClick}
      >
        {item.text}
      </a>
    </li>
  )
}

export default MenuItem