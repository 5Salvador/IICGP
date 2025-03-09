import React from 'react'
import EventIcon from '@mui/icons-material/Event';
import Button from '../../../components/Button';
import { events } from '../../../assets/assets';
import EventsCarouselMobile from "./EventsCarouselMobile"

const Events = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row w-full justify-center p-6 gap-10 md:p-20 bg-[#eeeeee]'>
      <div className='flex flex-col md:w-1/4 p-4 justify-around space-y-10'>
        <div className='flex flex-row items-center gap-2'>
          <div className=''>
            <EventIcon className='text-yellow-600' fontSize='large'/>
          </div>
          <p className='font-medium text-2xl md:text-2xl underline underline-offset-8 decoration decoration-gold'>EVENTOS E CULTOS</p>
        </div>
       <p className='text-gray-500 text-2xl md:text-4xl font-semibold'>
       Junte-se a Nós!
       </p>
       <p className='text-gray-500 text-lg'>Busque conhecimento, inspire-se e aprofunde sua conexão com Deus. Nossos eventos oferecem oportunidades para aprendizado, reflexão e crescimento espiritual.</p>
       <div className='w-1/2'>
        <a href="/eventos">
          <Button text="Mais Eventos" />
        </a>
       </div>

      </div>
      <div className='flex md:max-w-screen-xl items-center '>
          <EventsCarouselMobile events={events}/>
      </div>

    </div>
    </>
  )
}

export default Events