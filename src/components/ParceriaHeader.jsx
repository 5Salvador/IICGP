import React from 'react'
import { PiHandCoinsFill } from "react-icons/pi";

const PageHeader = ({ firstText, secondText, textButton}) => {
  return (
    <>
    <div className='w-full bg-[#6fb1d3] flex flex-col p-6 md:p-16 justify-center items-center'>
      <div className='flex text-center items-center max-w-screen-lg'>
      <p className='text-white text-3xl font-bold md:text-6xl mt-10'>{firstText}</p>
      </div>
      <div className='text-white text-center items-center max-w-screen-lg'>
      <p className='text-lg font-semibold md:text-xl mt-5'>{secondText}</p>
      </div>

      <div className='w-60 md:w-72 mt-10'>
        <a href="" className=''>
          <button className='w-full flex flex-row justify-center bg-blue-500 hover:bg-blue-600 text-xl transition duration-300 text-white font-bold p-4 px-4 rounded'>
            <PiHandCoinsFill className='text-white text-2xl' />
            <span className='ml-3 text-xl font-bold'>{textButton}</span>
          </button>
        </a>
      </div>

    </div>
    </>
  )
}

export default PageHeader