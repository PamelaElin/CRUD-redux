import React from 'react'

const Button = ({onClick, children,onChange}) => {
  return (
    <div>
        
        <button className='bg-emerald-400 ring-2  text-white font-medium py-2 px-6 my-10 rounded-lg hover:bg-emerald-700'
        onClick={onClick}
       >
        {children}
        </button>
    </div>
  )
}

export default Button 