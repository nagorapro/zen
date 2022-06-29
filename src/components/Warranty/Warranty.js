import Title from '../../common/Title'
import Text from '../../common/Text'

const Warranty = ({data}) => {

  const {name, title, texts, image} = data

  const className = 'warranty'

  return (
    <section
      className={className}
      id={name}
    >
      <div className={`${className}__wrapper`}>

        <div className={`${className}__body`}>

          {title?.content && (
            <Title
              size={title.priority}
              parentClassName={className}
            >
              {title.content}
            </Title>
          )}

          {texts?.length > 0 && texts.map((text) => (
            <Text
              key={text}
              parentClassName={className}
            >
              {text}
            </Text>
          ))}
        </div>

        <div className={`${className}__image`}>
          {image && (
            <img
              src={image.source}
              alt={image.alternate}
            />
          )}
        </div>

      </div>
    </section>
  )
}

export default Warranty