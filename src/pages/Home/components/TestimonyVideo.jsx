import React from 'react'

const TestimonyVideo = ({ description }) => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center p md:p-16'>
      <div className='flex flex-col justify-center items-center p-4 mt-5'>
              <p className='text-2xl text-gray-950 md:text-6xl text-center font-bold'>Meu Testemunho</p>
      </div>
      <div className='flex flex-col justify-center items-center p-2 md:w-[800px] md:mt-20'>
      <iframe className='aspect-video w-full' src="https://www.youtube.com/embed/axwmARZdjSQ"></iframe>
      <p className='text-2xl md:text-2xl text-gray-500 text-center mt-3'>{description}</p>

      </div>
      <div className='flex flex-col justify-center items-center mt-10 space-y-2 mb-5 md:mb-0'>
        <p className='text-xl md:text-2xl font-semibold italic text-center font-lora'>"Deus é o nosso refúgio e fortaleza, socorro bem-presente na angústia. <br/> Pelo que não temeremos, ainda que a terra se mude, e ainda que os montes se transportem para o meio dos mares."</p>
        <p className='text-xl md:text-2xl font-semibold italic text-center font-lora'>Salmos 46:1-2</p>
      </div>

      
    </div>
  )
}

export default TestimonyVideo