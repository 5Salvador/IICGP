import React from 'react'
import Header from '../../components/Header'
import Navbar from "../../components/Navbar"
import PageHeader from "../../components/PageHeader"
import Footer from "../../components/Footer"
import CardEventosList from './components/CardEventosList'
import { eventos } from "../../assets/assets"

const Eventos = () => {
  return (
    <>
    <Header />
    <Navbar />
    <PageHeader Heading="Eventos" firstText="Ano da Igreja e metas alcancadas" />
    {/* Eventos */}
    <div className='container mx-auto justify-center items-center p-6 md:p-10'>
    <CardEventosList eventos={eventos} />
    </div>
    

    <Footer />
    </>
  )
}

export default Eventos