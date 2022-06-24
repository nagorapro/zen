import List from './components/List'

const Column = ({
  parentClassName,
  data
}) => {

  const {title, links} = data

  return (
    <div className={`${parentClassName}__column`}>

      {title?.content && (
        <h3 className={`${parentClassName}__title`}>
          {title.content}
        </h3>
      )}

      {links?.length > 0 && (
        <List
          parentClassName={parentClassName}
          list={links}
        />
      )}
    </div>
  )
}

export default Column