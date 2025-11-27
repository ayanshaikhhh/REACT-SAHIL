import React from 'react'

const FailedTask = ({data}) => {
  return (
        <div className='flex-shrink-0 h-full w-[430px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center' >
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-xl mt-3'>{data.description}</p>
            

                        <div className='mt-4'>
                <button>Failed Task</button>
            </div>

        </div>
  )
}

export default FailedTask   
