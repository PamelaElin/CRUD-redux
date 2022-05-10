import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <div>
        
        <button className='bg-indigo-400 ring-2  text-white font-medium py-2 px-6 my-10 rounded-lg hover:bg-fuchsia-500'
        onClick={onClick}
       >
        {children}
        </button>
    </div>
  )
}

export default Button 