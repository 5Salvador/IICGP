import React from 'react'
import CardEnsinos from './CardEnsinos'
import { motion } from "framer-motion"



const CardEnsinosList = ({ensinos}) => {
  return (
     <div
    
      className='flex flex-col md:flex-row md:flex-wrap justify-center items-center p-6 gap-5'>
        {ensinos.map((ensino, index) => (
          <CardEnsinos key={index} teachingTitle={ensino.teachingTitle} teachingDescription={ensino.teachingDescription} />
        ))}
     </div>
  )
}

export default CardEnsinosList