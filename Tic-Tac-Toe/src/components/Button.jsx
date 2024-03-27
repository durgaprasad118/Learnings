import React from 'react'
const Button = ({ children, setChild }) => {
  return (
    <button
      onClick={setChild}
      className="px-6 py-2 text-3xl font-bold border-none bg-black text-white rounded flex items-center justify-center"
    >
      {children}
    </button>
  )
}
export default Button
