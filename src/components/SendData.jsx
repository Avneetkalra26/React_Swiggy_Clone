import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import resList from '../utils/mockData'
import Shimmer from './Shimmer'
const SendData = () => {
  const [listOfRes, setListOfRes] = useState([])
  const filterData = () => {
    const filterList = listOfRes.filter((data) => data.info.avgRating > 4)
    setListOfRes(filterList)
  }

  const fetchData = async () => {
    const apiData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const apiJSON = await apiData.json()
    setListOfRes(apiJSON.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }

  useEffect(() => { fetchData() }
    , [])

  // Conditional Rendering
  return listOfRes.length === 0 ? (<div className="flex flex-wrap gap-6 p-4 justify-center">
    {[...Array(8)].map((_, index) => (
      <Shimmer key={index} />
    ))}
  </div>) : (
    <>
      <button className='p-3 border-2 border-orange-600 rounded-lg shadow-lg m-4'
        onClick={filterData}
      >
        Filter Restaurant
      </button>
      <div className='flex flex-wrap gap-6 p-4 justify-center'>
        {listOfRes.map((data) =>
          <ResCard resData={data} key={data.info.id} />
        )}
      </div>
    </>
  )
}

export default SendData