const Shimmer = () => {
  return (
    <div className='w-64 h-72 rounded-lg shadow-lg bg-white m-4 animate-pulse'>
      <div className='p-4 mb-9'>
        <div className='h-48 bg-gray-200 rounded-lg'></div>
        <div className='h-3 w-20 bg-gray-200 mt-3 rounded'></div>
        <div className='h-9 w-36 bg-gray-200 mt-3 rounded'></div>
      </div>
    </div>
  )
}

export default Shimmer
