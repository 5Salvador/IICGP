import React from 'react'

const Button = ({text, type, onClick}) => {
  return (
    <button className="w-full bg-blue-500 hover:bg-yellow-600 hover:text-red-800 text-xl transition-all focus:bg-yellow-600 duration-300 text-white font-bold p-4 px-4 rounded"
    onClick={onClick} type={type}
    >
      {text}
    </button>
  )
}

export default Button