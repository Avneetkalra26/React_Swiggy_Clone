import React from 'react';

const ResCard = (props) => {
  // const {id,name,cloudinaryImageId,avgRating,cuisines,slaString} = props.resData[0].card.info
  const { resData } = props
  // const { id, name, cloudinaryImageId, avgRating, cuisines, sla } = resData[0].card.info

  return (
    <div className='flex justify-start p-4'>
      {
        resData.map((data) => (
          <div className='w-56 h-80 rounded-lg shadow-lg overflow-hidden bg-white me-4' key={data.card.info.id}>
            {/* Image Section */}
            <a href="#">
              <img
                className='w-full h-48 object-cover rounded-t-lg'
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.card.info.cloudinaryImageId}`}
                alt="Restaurant"
              />
            </a>

            {/* Text Content Section */}
            <div className='p-4'>
              <h5 className='text-xl font-semibold text-gray-800 hover:text-amber-600 transition duration-300'>
                {data.card.info.name}
              </h5>
              <div className='flex items-center space-x-2 text-sm text-gray-600'>
                <span>⭐ {data.card.info.avgRating}</span>
                <span>• {data.card.info.sla.slaString}</span>
              </div>
              <p className='text-sm text-gray-500 mt-3'>{data.card.info.cuisines.join(", ")}</p>
            </div>
          </div>
        
        ))
      }

    </div>
  );
}

export default ResCard;
