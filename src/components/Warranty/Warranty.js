import Title from '../../common/Title'
import Text from '../../common/Text'
import Preview from '../../common/Preview'

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

        {image && <Preview image={image} />}

      </div>
    </section>
  )
}

export default Warranty