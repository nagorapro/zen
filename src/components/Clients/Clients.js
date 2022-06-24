import {AppContext} from '../../context/AppContext'
import {useContext} from 'react'

const Clients = ({data}) => {

  const {name, ligthThemeClients, darkThemeClients} = data

  const {theme} = useContext(AppContext)

  const className = 'clients'

  const clients = theme === 'dark'
    ? darkThemeClients
    : ligthThemeClients

  return (
    <section
      className={className}
      data-name={name}
    >
      <div className={`${className}__wrapper`}>

        {clients?.length > 0 && clients.map((client) => (
          <img
            className={`${className}__image`}
            key={client.alternate}
            src={client.source}
            alt={client.alternate}
          />
        ))}

      </div>
    </section>
  )
}

export default Clients