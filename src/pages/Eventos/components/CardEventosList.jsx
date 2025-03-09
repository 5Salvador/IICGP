import React from 'react'
import CardEventos from './CardEventos'

const CardEventosList = ({eventos}) => {
  return (
    <div className='flex flex-col space-y-14 justify-center items-center md:p-10'>
      {eventos.map((event, index) => (
        <CardEventos key={index}
         DataDoEvento={event.DataDoEvento}
         NomeDoEvento={event.NomeDoEvento}
         LocalDoEvento={event.LocalDoEvento}
         DescriçãoDoEvento={event.DescriçãoDoEvento}
         flyer={event.flyer}
         />
      ))

      }

    </div>
  )
}

export default CardEventosList