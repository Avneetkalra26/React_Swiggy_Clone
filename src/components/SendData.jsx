import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import { RES_LIST_URL } from '../utils/constants'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
const SendData = () => {
  const [listOfRes, setListOfRes] = useState([])
  const [filteredListOfRes, setFilteredListOfRes] = useState([])
  // const [searchText, setSearchText] = useState("")
  const filterData = () => {
    const filterList = listOfRes.filter((data) => data.info.avgRating > 4)
    setFilteredListOfRes(filterList)
  }

  const fetchData = async () => {
    const apiData = await fetch(RES_LIST_URL)
    const apiJSON = await apiData.json()
    setListOfRes(apiJSON.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredListOfRes(apiJSON.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }

  useEffect(() => {
    fetchData()
  }
    , [])

  // Conditional Rendering
  return listOfRes.length === 0 ? <div className="flex flex-wrap gap-6 p-4 justify-center">
    {[...Array(8)].map((_, index) => (
      <Shimmer key={index} />
    ))}
  </div> : (
    <>
      <input className='m-5 border-b-2 outline-none' placeholder='Search Restaurant' onChange={(e) => {
        const value = e.target.value
        setFilteredListOfRes(listOfRes.filter((data) => data.info.name.toLowerCase().includes(value.toLowerCase())))
      }}
      ></input>
      {/* <button className='p-3 border-2 border-orange-600 rounded-lg shadow-lg'
        onClick={() => {
          setFilteredListOfRes(listOfRes.filter((data) => data.info.name.toLowerCase().includes(searchText.toLowerCase())))
          setSearchText("")
        }}
      >
        Search
      </button> */}
      <button className='p-3 border-2 border-orange-600 rounded-lg shadow-lg m-4'
        onClick={filterData}
      >
        Filter Restaurant
      </button>
      {
        filteredListOfRes.length === 0 ? <h1 className='m-5'>No Restaurant Found!!!!</h1> :
          <div className='flex flex-wrap gap-6 p-4 justify-center'>
            {filteredListOfRes.map((data) =>
              <Link to={`restaurants/${data.info.id}`} key={data.info.id}>
                <ResCard resData={data} />
              </Link>
            )}
          </div>}
    </>)
}

export default SendData