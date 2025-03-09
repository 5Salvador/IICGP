import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const ContactCard = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row gap-10 justify-center items-center my-20'>
      {/* First Card*/}
      <div className='flex flex-col w-[250px] h-full  rounded-2xl shadow-xl bg-tertiary p-4 px-4 space-y-4'>
        <div className='flex justify-center items-center'>
          <HomeIcon className='text-yellow-600' sx={{ fontSize: 72 }}/>
        </div>
        <div className='flex flex-col space-y-2 text-white text-center'>
          <p className='text-3xl'>Office</p>
          <p>Coqueiros (Zimpeto) ao lado do Comando da CUC, em frente às Bombas da BP., Maputo, Mozambique</p>
        </div>

      </div>

      {/* Second Card*/}
      <div className='flex flex-col w-[250px] h-[275px] rounded-2xl shadow-xl bg-tertiary p-4 px-4 space-y-4'>
        <div className='flex justify-center items-center'>
          <CallIcon className='text-yellow-600' sx={{ fontSize: 72 }}/>
        </div>
        <div className='flex flex-col space-y-2 text-white text-center'>
          <p className='text-3xl'>Call Center</p>
          <p>+258 84 36 0000</p>
          <p>+258 84 36 0000</p>
        </div>

      </div>

      {/* Third Card*/}
      <div className='flex flex-col w-[250px] h-[275px] rounded-2xl shadow-xl bg-tertiary p-4 px-4 space-y-4'>
        <div className='flex justify-center items-center'>
          <EmailIcon className='text-yellow-600' sx={{ fontSize: 72 }}/>
        </div>
        <div className='flex flex-col space-y-2 text-white text-center'>
          <p className='text-3xl'>Email</p>
          <p>casadagloria@gmail.ac.mz</p>
        </div>

      </div>

    </div>
    
  )
}

export default ContactCard