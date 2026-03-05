import React from 'react'
import { RES_URL } from '../utils/constants'
const ResCard = (props) => {
  const { resData } = props
  const { name, avgRating, sla, cuisines, cloudinaryImageId,id } = resData.info
  // console.log(`card:-${id}`)
  return (
    <div className='w-60 h-90 rounded-lg shadow-lg bg-white me-4'>
        <img
          className='w-full h-48 object-cover rounded-t-lg'
          src={`${RES_URL}${cloudinaryImageId}`}
          alt="Restaurant"
        />
      <div className='p-4 mb-9'>
        <h5 className='text-l font-semibold text-gray-800 hover:text-amber-600 transition duration-300'>
          {name}
        </h5>
        <div className='flex items-center space-x-2 text-sm text-gray-600 mt-2'>
          <span>⭐ {avgRating}</span>
          <span>• {sla.slaString}</span>
        </div>
        <p className='text-sm text-gray-500 mt-3'>{cuisines.join(", ")}</p>
      </div>
    </div>
  )
}

export default ResCard