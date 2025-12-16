import React from 'react'
import CustomImage from './CustomImage'
import Typography from './Typography'
import {
  Link,
} from 'react-router-dom';


const RecipeCard = (props) => {

  const formatDate = (rawDate) => {
    if (!rawDate) return "No Update";

    const d = new Date(rawDate);
    if (isNaN(d)) return rawDate;

    return d.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  return (
    <Link to={`/recipe/${props.id}`}>
      <div
        className='bg-white h-fit text-black shadow-sm rounded-2xl inset-shadow-sm p-1 cursor-pointer hover:scale-105'>
        <div className='flex flex-col'>
          <CustomImage imgSrc={props.image || ''} imgAlt={props.title || 'meal image'} className={'aspect-4/3 rounded-2xl'} />

          <section className='flex flex-col px-4 py-4'>
            <section className='flex gap-1'>
              <Typography className={'font-medium text-[10px] text-[#A1A1A1]'}>{props.area || 'unknown area'}</Typography>
              <Typography className={'font-medium text-[10px] text-[#A1A1A1]'}>{props.category || 'unknown category'}</Typography>
            </section>

            <section className='flex justify-between'>
              <Typography className={'font-bold text-xl max-w-[200px] text-ellipsis overflow-hidden'}>{props.title || 'no title'}</Typography>
              {props.video && (
                <a
                  href={props.video}
                  target="_blank"
                  rel='noreferrer'
                  className='text-nowrap z-40 hover:text-blue-500'
                >
                  See Video
                </a>
              )}
            </section>

            <section className='flex justify-between'>
              <Typography>last Updated</Typography>
              <Typography>{formatDate(props.date)}</Typography>
            </section>
          </section>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard