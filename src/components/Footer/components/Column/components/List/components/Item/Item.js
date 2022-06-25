const Item = ({parentClassName, item}) => {

  const {url, content} = item

  switch (content.type) {
    case 'image': return (
      <li className={`${parentClassName}__item`}>
        <a href={url}>
          <img
            src={content.image.source}
            alt={content.image.alternate}
          />
        </a>
      </li>
    )

    case 'email': return (
      <li className={`${parentClassName}__item`}>
        <a href={`mailto:${url}`}>
          <span>{content.email}</span>
        </a>
      </li>
    )

    default: return (
      <li className={`${parentClassName}__item`}>
        <a href={url}>
          <span>{content.text}</span>
        </a>
      </li>
    )
  }
}

export default Item