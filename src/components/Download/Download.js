import Title from '../../common/Title'
import {ReactComponent as AppleIcon} from './assets/apple.svg'
import {ReactComponent as GoogleIcon} from './assets/google.svg'

const Download = ({data}) => {

  const {name, title, texts, links, image} = data

  const className = 'download'

  return (
    <section
      className={className}
      data-name={name}
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
            <p
              className={`${className}__copy`}
              key={text}
            >
              {text}
            </p>
          ))}

          <div className={`${className}__links`}>
            {links?.length > 0 && links.map((link) => (
              <a
                key={link.name}
                className={`${className}__link`}
                href={link.url}
              >
                {
                  link.name === 'apple'
                    ? <AppleIcon />
                    : <GoogleIcon />
                }
              </a>
            ))}
          </div>
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

export default Download