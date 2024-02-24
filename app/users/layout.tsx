import React from 'react'
import CardUser from '../components/CardUser'

const layout = () => {
  return (
    <>
        <div className='flex justify-center flex-col items-center gap-10'>
            <h2 className='font-bold text-2xl'>List Users <span className='font-bold text-2xl text-yellow-300'>Last 2024</span></h2>
            <CardUser/>
        </div>
    </>
  )
}

export default layout