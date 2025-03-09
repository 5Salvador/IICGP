import React from 'react'
import CardInformation from './CardInformation'

const CardInformationList = ({ programs, title }) => {
  return (

    <>
    <div className='w-full flex flex-col  p-6 md:p-[5%] bg-[#212529] space-y-4'>
    <p className='text-2xl text-white font-semibold'>{title}</p>
    <div className='flex flex-col md:flex-row md:flex-wrap gap-10 justify-center items-center '>
    {/* // <div style={{ display: 'flex', gap: '20px', flexWrap: 'nowrap', justifyContent: 'center', padding: '10%', overflow: 'auto' }} className='bg-[#212529]'> */}
    
      {programs.map((program, index) => (
        <CardInformation
          key={index}
          img={program.img}
          programName={program.programName}
          description={program.description}
          secondDescription={program.secondDescription}
        />
      ))}
    </div>

    </div>
    </>
    
  )
}

export default CardInformationList