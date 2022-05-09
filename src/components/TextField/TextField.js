import React from 'react'

const TextField = ({label,inputProps,onChange,value}) => {
  return (
    <div className='flex flex-col '>
       <label className='mb-2  font-bold text-gray-700'>{label}</label>
       <input className='bg-black/30 py-2 px-3 border-2 outline-none rounded-full text-white ' 
       {...inputProps}
       onChange={onChange}
       value={value} />
        </div>
  )
}

export default TextField