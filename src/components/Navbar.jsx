import React from 'react';
import { logoIICGP } from '../assets/assets';


const Header = () => {
  return (
    <header className="header flex flex-col md:flex-row items-center justify-center gap-y-10 md:gap-28 px-8 py-4 md:p-6 shadow-md ">
      {/* Logo */}
      <h1 className="hidden md:block text-4xl text-black">
        <a href="">
          <img src="" alt="" />
        </a>
      </h1>

      {/* Navigation */}
      <nav className="nav  font-normal text-sm md:text-md">
        <ul className="flex flex-wrap justify-center md:flex-row items-center font-lora  gap-6 md:gap-10">
          <li className="p-2 md:p-4 text-black border-opacity-0 hover:border-opacity-100 hover:text-yellow-400 duration-200 cursor-pointer active">
            <a href="/">Início</a>
          </li>
          <li className="p-2 md:p-4 text-black border-opacity-0 hover:border-opacity-100 hover:text-yellow-400 duration-200 cursor-pointer">
            <a href="/about">Sobre-Nós</a>
          </li>
          <li className="p-2 md:p-4 text-black border-opacity-0 hover:border-opacity-100 hover:text-yellow-400 duration-200 cursor-pointer">
            <a href="/eventos">Eventos</a>
          </li>
          <li className="p-2 md:p-4 text-black border-opacity-0 hover:border-opacity-100 hover:text-yellow-400 duration-200 cursor-pointer">
            <a href="/ensinos">Ensinos</a>
          </li>
          <li className="p-2 md:p-4 text-black border-opacity-0 hover:border-opacity-100 hover:text-yellow-400 duration-200 cursor-pointer">
            <a href="/team">Escutar</a>
          </li>
          <li className="p-2 md:p-4 text-black border-opacity-0 hover:border-opacity-100 hover:text-yellow-400 duration-200 cursor-pointer">
            <a href="/team">Celulas</a>
          </li>
          <li className="p-2 md:p-4 text-black border-opacity-0 hover:border-opacity-100 hover:text-yellow-400 duration-200 cursor-pointer">
            <a href="/contact">Contate-nos</a>
          </li>
          {/* <li className="p-2 md:p-4 px-4 md:px-6 rounded-full bg-button hover:text-black hover:bg-none transition all duration-300 cursor-pointer">
            <a href="/contact">Contact us</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;