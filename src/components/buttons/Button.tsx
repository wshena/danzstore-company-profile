import React from 'react'

interface Props {
  children: React.ReactNode,
  className: string
  handleClick?: any
}

const Button = ({children, className, handleClick}:Props) => {
  return (
    <button onClick={handleClick} className={`
      rounded-full px-5 py-3 capitalize transition-all duration-300 ease-in-out
      ${className}
    `}>
      {children}
    </button>
  )
}

export default Button