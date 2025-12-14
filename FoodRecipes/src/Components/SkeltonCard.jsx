import React from 'react'
import CustomImage from './CustomImage'
import Typography from './Typography'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const SkeltonCard = () => {

  return (
    <div className='bg-white h-fit text-black shadow-sm rounded-2xl inset-shadow-sm p-1 cursor-pointer hover:scale-105'>
      <div className='flex flex-col'>
        <div className={'bg-gray-400 animate-pulse aspect-4/3 rounded-2xl'} />

        <section className='flex flex-col px-4 py-4'>
          <section className='flex gap-1'>
            <div className='aspect-square bg-gray-400 animate-pulse h-3 w-6' />
            <div className='aspect-square bg-gray-400 animate-pulse h-3 w-6' />
          </section>

          <section className='flex justify-between mt-2 gap-2'>
            <div className='aspect-square bg-gray-400 animate-pulse h-4 w-full'/>
            <div className='aspect-square bg-gray-400 animate-pulse h-4 w-full'/>
          </section>

          <section className='flex justify-between mt-2 gap-2'>
            <div className='aspect-square bg-gray-400 animate-pulse h-4 w-full'/>
            <div className='aspect-square bg-gray-400 animate-pulse h-4 w-full'/>
          </section>
        </section>
      </div>
    </div>
  )
}

export default SkeltonCard