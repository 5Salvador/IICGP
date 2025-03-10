import React from 'react'
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import PageHeader from "../../components/PageHeader"
import Footer from "../../components/Footer"
import CardEnsinosList from './components/CardEnsinosList'
import ensinos from "../../assets/ensinos.json"
import { motion } from "framer-motion"

const Ensinos = () => {
  return (
    <>
    <Header />
    <Navbar />
    <PageHeader Heading="Ensinos" firstText="Explore os ensinamentos do Pastor Jose gratuitamente"/>
    <motion.div 
     animate = {{ scale:0.5, opacity: 0}}
     whileInView={{ scale: 1, opacity: 1 }}
     transition={{ duration: 2, ease: "easeInOut" }}
    className='container mx-auto md:p-10'>
      <CardEnsinosList ensinos={ensinos}/>

    </motion.div>
    <Footer />
    </>
  )
}

export default Ensinos