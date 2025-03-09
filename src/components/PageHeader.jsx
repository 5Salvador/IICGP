import React from 'react'
import { logoChurch } from "../assets/assets";

const PageHeader = ({Heading, firstText}) => {
  return (
    <div className='w-full flex flex-row justify-around p-2 md:p-16 bg-tertiary'>
        <div className='md:w-1/2 flex flex-col space-y-4 text-white'>
          <p className='text-4xl md:text-5xl'>{Heading}</p>
          <p className='text-lg'>{firstText}</p>
        </div>
        <div className='md:w-1/2 flex justify-end items-end'>
            <img src={logoChurch} alt="" className="h-48" />
        </div>
    </div>
  )
}

export default PageHeader