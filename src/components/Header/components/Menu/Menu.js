import MenuItem from './components/MenuItem'
import clsx from 'clsx'

const Menu = ({
  parentClassName,
  items,
  theme,
  isMenuActive,
  onMenuItemClick
}) => {

  const classes = clsx({
    'active': isMenuActive,
    'dark': theme === 'dark'
  })

  return (
    <ul className={`${parentClassName}__menu ${classes}`}>
      {items?.length > 0 && items.map(item => (
        <MenuItem
          parentClassName={parentClassName}
          key={item.target}
          item={item}
          onMenuItemClick={onMenuItemClick}
        />
      ))}
    </ul>
  )
}

export default Menu