import React from 'react'
import Button from '../../../components/Button'
import { motion } from "framer-motion"

const PrayerRequestHeader = () => {
  return (
    <div className='w-full p-6 md:p-16 justify-center items-center bg-yellow-700'>
      <motion.div
      animate={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
       className='mx-auto md:w-1/2 flex flex-col p-10 justify-center items-center rounded-2xl bg-[#f7f7f7] space-y-4'>
        <p className='text-center font-semibold text-2xl md:text-4xl font-raleway'>Como podemos orar por ti?</p>
        <p className='text-md md:text-xl text-center font-raleway'>Sabemos que você tem muito em mente. Lembre-se, Deus está sempre aqui para você! O que quer que esteja te preocupando estamos aqui para orar consigo!</p>

        <div className='flex flex-col md:flex-row gap-5'>
          <a href="/pedido-de-oracao">
            <Button text="Pedido de Oração" />
          </a>
          <a href="">
            <Button text="Conhecer Jesus" />
          </a>
        </div>

      </motion.div>

    </div>
  )
}

export default PrayerRequestHeader