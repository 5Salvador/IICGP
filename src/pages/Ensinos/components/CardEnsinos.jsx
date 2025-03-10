import React from 'react'

const CardEnsinos = ({teachingTitle, teachingDescription}) => {
  return (
    <div className="flex flex-col w-96 h-72 border rounded-lg shadow-xl justify-between items-center space-y-4 p-4 bg-blue-50">
        <p className='font-bold text-center text-2xl'>{teachingTitle}</p>
        <p className='text-md text-gray-500 text-center'>{teachingDescription}</p>
        <div className='justify-center'>
          <button className='bg-blue-500 p-2 rounded-lg border-4 border-blue-500 text-white transition-all duration-300 hover:bg-white hover:border-blue-800 hover:text-blue-500'>Saber mais</button>
        </div>
    </div>
  )
}

export default CardEnsinos