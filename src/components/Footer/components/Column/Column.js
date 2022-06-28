import Title from '../../../../common/Title'
import List from './components/List'

const Column = ({parentClassName, data}) => {

  if (!Object.keys(data).length) return null

  const {title, links} = data

  return (
    <div className={`${parentClassName}__column`}>

      {title?.content && (
        // <h3 className={`${parentClassName}__title`}>
        //   {title.content}
        // </h3>
        <Title
          parentClassName={parentClassName}
          size={title.priority}
        >
          {title.content}
        </Title>
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