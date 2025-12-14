import React from 'react'
import Main from '../../Layout/Main'
import Typography from '../../Components/Typography'

const RecipePage = (props) => {
  return (
    <>
      <div className='bg-amber-400 items-center justify-center flex flex-col gap-2 mt-20 mx-64'>
        <img src={props.image} alt={props.title} className='h-120 w-full rounded-2xl object-fill' />
        <Typography className={'text-[40px] font-bold self-start pl-4 mt-4'}>{props.title}</Typography>
      </div>
    </>
  )
}

export default Main(RecipePage)