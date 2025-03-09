import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import Form from './components/Form'

const PedidoDeOracao = () => {
  return (
    <>
    <Header />
    <Navbar />
    <PageHeader Heading="Pedido de Oração" firstText="Deus te ama"/>
    <div className='flex flex-col md:flex-row container mx-auto p-4 md:p-10 gap-10'>
      <div className='flex flex-col md:w-1/2'>
      <p className="text-gray-600 text-2xl md:text-3xl font-bold">
      Você precisa de oração ?
          </p>
          <div className="flex flex-col space-y-2 text-lg text-black">
            <p>
              Precisando de oração, apoio ou apenas alguém para conversar?
              Envie-nos uma mensagem! Estamos aqui para você.
            </p>
            <p>
              Sua jornada de fé é importante para nós. Compartilhe suas dúvidas,
              alegrias e preocupações. Nossa equipe está pronta para ouvir e
              oferecer suporte.
            </p>
            <p>
              Acreditamos no poder da comunidade. Envie-nos uma mensagem e
              conecte-se com pessoas que se importam com você
            </p>
          </div>
          
      </div>
      <div className='md:w-1/2'>
      <Form />

      </div>

    </div>
    <Footer />
    </>
  )
}

export default PedidoDeOracao