import React from 'react'
import Button from "../../../components/Button"
import countries from "world-countries";


const Form = ({Heading , selectedCountry }) => {
  const countryOptions = countries.map((country) => ({
    value: country.cca2, // Country code
    label: country.name.common, // Country name
  }));
  return (
    <div className='flex flex-col space-y-4'>
      <p className='text-gray-600 text-2xl md:text-3xl font-bold'>{Heading}</p>

      <form>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700" htmlFor="name">
            Nome
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            type="text"
            id="name"
            name="name"
            placeholder='Joao Marcos'
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            type="text"
            id="email"
            name="email"
            placeholder='exemplo@gmail.com'
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700" htmlFor="phone">
            Numero
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            type="text"
            id="phone"
            name="phone"
            placeholder='ex: +258 843600543'
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700" htmlFor="address">
          Localização
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            type="text"
            id="address"
            name="address"
            placeholder='ex: Bairro George Dimitrov, Benfica, Maputo'
          />
        </div>

        <div className='mb-4'>
          <label className="block text-lg font-medium text-gray-700"  htmlFor="countries">
            País
            </label> 
      <select
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        value={selectedCountry}
        onChange={(e) => selectedCountry(e.target.value)}
      >
        <option value="" disabled>
        Selecione um país...
        </option>
        {countryOptions.map((country) => (
          <option key={country.value} value={country.value}>
            {country.label}
          </option>
        ))}
      </select>

        </div>
        <div className='mb-4'>
        <label className="block text-lg font-medium text-gray-700" htmlFor="name">
            Assunto pelo qual nos contacta
          </label>
          <select name="assunto" id="assunto" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
            <option value="" disabled>Selecione um assunto...</option>
            <option value="0">Solicitar informação sobre IICGP</option>
            <option value="1">Pedido de Oração</option>
            <option value="">Conferência</option>
            <option value="">Outros</option>
          </select>

        </div>
        
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700" htmlFor="message">
            Mensagem
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 h-32"
            id="message"
            name="message"
            rows="4"
            placeholder='Escreva a sua mensagem aqui'
          ></textarea>
        </div>

        <div className='mb-4 w-32'>
          <Button type="submit" text="Enviar"/>

        </div>







      </form>
    </div>
    
    
  )
}

export default Form