import {AppContext} from '../../context/AppContext'
import {useContext} from 'react'
import Client from './components/Client'

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

        {clients?.length > 0 && clients.map((client, index) => (
          <Client
            key={index}
            parentClassName={className}
            client={client}
          />
        ))}

      </div>
    </section>
  )
}

export default Clients