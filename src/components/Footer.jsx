import React from 'react'
import {  Globe,  Mail, Phone} from 'lucide-react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { logoChurch, escolaDaVerdade } from '../assets/assets';
import Button from './Button';

const Footer = () => {
  return (
      <footer className='w-full bg-tertiary text-white py-10'>
        {/* Redes sociais */}
        <div className='flex flex-col justify-center space-y-2 md:p-8'>
              <div className='flex flex-row gap-4 justify-center p-4'>
                <div>
                <a href="">
                <FaFacebook className='text-2xl' />
                </a>
                </div>
                <div>
                <a href="">
                <FaSquareInstagram className='text-2xl'/>
                </a>
                </div>
                <div className=''>
                <a href="" >
                <FaYoutube className='text-2xl'/>
                </a>
                </div>
              </div>

            </div>

        <div className='flex flex-col md:flex-row items-center md:items-start justify-center gap-10 mb-10'>
          {/* Card with Links */}
          <div className='flex flex-col p-2 space-y-4 w-96 md:items-start'>
            <div className='flex flex-row justify-center font-lora italic'>
            <p className='text-xl text-center font-bold'>Contato</p>
            </div>
            <div className='flex flex-row gap-2 justify-center'>
              <div className='flex items-center'>
              <Mail />
              </div>
              <a href="">
              <p className='text-lg hover:text-yellow-400 transition duration-300'><span className='font-semibold text-gray-400'>Email:</span> casadagloria@gmail.com</p>
              </a>
            </div>
            <div className='flex flex-row gap-2 justify-center'>
              <div className='flex items-center'>
              <Phone />
              </div>
              <a href="">
              <p className='text-lg hover:text-yellow-400 transition duration-300'><span className='font-semibold text-gray-400'>Telefone:</span> +258 84 36 00543</p>
              </a>
            </div>
            <div className='flex flex-row gap-2 justify-center'>
              <div className='flex items-center'>
              <Globe />
              </div>
              <a href="">
              <p className='text-lg hover:text-yellow-400 transition duration-300'><span className='font-semibold text-gray-400'>Website:</span> iicgp.com</p>
              </a>
            </div>
            <div className='flex flex-col space-y-2 md:items-start'>
              <p className='text-lg text-center font-semibold text-gray-400'>Localização</p>
              <p className='text-lg text-center md:text-start hover:text-yellow-400 transition duration-300'>Coqueiros (Zimpeto) ao lado do Comando da CUC, em frente às Bombas da BP., Maputo, Mozambique</p>
            </div>

          </div>

          {/* Card with Links & logo */}
          <div className='flex flex-col p-2 space-y-4 justify-center items-center md:items-start'>
            <div className='flex flex-row justify-center font-lora italic'>
            <p className='text-xl text-center font-bold'>Links</p>
            </div>
            <a href="">
            <p className='text-xl text-center text-gray-400 hover:text-yellow-400 transition duration-300' >Sobre-Nós</p>
            </a>
            <a href="">
            <p className='text-xl text-gray-400 hover:text-yellow-400 transition duration-300'>Contacte-nos</p>
            </a>
            <a href="">
            <p className='text-xl text-gray-400 hover:text-yellow-400 transition duration-300'>Ensinamentos</p>
            </a>
            <a href="">
            <p className='text-xl text-gray-400 hover:text-yellow-400 transition duration-300'>Celulas</p>
            </a>
            <div className='flex flex-col justify-center space-y-2'>
              <p className='text-xl text-center'>Redes Sociais</p>
              <div className='flex flex-row gap-4 justify-center'>
                <div>
                <a href="">
                <FaFacebook className='text-xl' />
                </a>
                </div>
                <div>
                <a href="">
                <FaSquareInstagram className='text-xl'/>
                </a>
                </div>
                <div className=''>
                <a href="" >
                <FaYoutube className='text-xl'/>
                </a>
                </div>
              </div>

            </div>

          </div>
          

          {/* Card with Links 2 */}
          <div className='flex flex-col p-2 space-y-4 justify-center items-center md:items-start'>
            <div className='flex flex-row justify-center'>
            <p className='text-xl text-center font-bold font-lora italic'>Links</p>
            </div>
            <a href="">
            <p className='text-xl text-center text-gray-400 hover:text-yellow-400 transition duration-300' >Sobre-Nós</p>
            </a>
            <a href="">
            <p className='text-xl text-gray-400 hover:text-yellow-400 transition duration-300'>Contacte-nos</p>
            </a>
            <a href="">
            <p className='text-xl text-gray-400 hover:text-yellow-400 transition duration-300'>Ensinamentos</p>
            </a>
            <a href="">
            <p className='text-xl text-gray-400 hover:text-yellow-400 transition duration-300'>Celulas</p>
            </a>
            
          </div>
          {/* Card with Links 3 */}
          <div className='flex flex-col p-2 space-y-4 justify-center items-center md:items-start'>
            <div className='flex flex-row justify-center'>
            <p className='text-xl text-center font-bold font-lora italic'>Links</p>
            </div>
            <a href="">
            <p className='text-xl text-center text-gray-400 hover:text-yellow-400 transition duration-300' >Sobre-Nós</p>
            </a>
            <a href="">
            <p className='text-xl text-gray-400 hover:text-yellow-400 transition duration-300'>Contacte-nos</p>
            </a>
            <a href="">
            <p className='text-xl text-gray-400 hover:text-yellow-400 transition duration-300'>Ensinamentos</p>
            </a>
            <a href="">
            <p className='text-xl text-gray-400 hover:text-yellow-400 transition duration-300'>Celulas</p>
            </a>
          </div>
          

        </div>
        <div className='flex justify-center items-center'>
          <p className='text-center'> 2025 Igreja Internacional Casa da Gloria da Palavra. Todos os direitos reservados.</p>
        </div>
      </footer>
  
  )
}

export default Footer