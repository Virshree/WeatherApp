import React from 'react'

function SubCloud() {
  return (
    <div className='flex   ml-75  right-44   '>
    <div className='bg-[#3C3B5E] text-white w-[177px] flex flex-col rounded-2xl m-4 h-[118px]   p-4 '>
      <span className='text-[#D4D3D9] w-[82px] h-[22px] m-2 '>Feels like</span>
      <span className='text-left m-2 text-[24px]' >18°</span>
      </div>
      <div className='bg-[#3C3B5E] text-white w-[177px] flex flex-col m-4 rounded-2xl h-[118px]   p-4 '>
      <span className='text-[#D4D3D9] w-[82px] h-[22px] m-2 '>Humidity</span>
      <span className='text-left m-2 text-[24px]' >46%</span>
    
      </div>
      <div className='bg-[#3C3B5E] text-white w-[177px] flex flex-col m-4 rounded-2xl h-[118px]   p-4 '>
      <span className='text-[#D4D3D9] w-[82px] h-[22px] m-2 '>Wind</span>
      <span className='text-left m-2 text-[24px]' >14 km/h</span>
    
      </div>
      <div className='bg-[#3C3B5E] text-white w-[177px] flex flex-col m-4 rounded-2xl h-[118px]   p-4 '>
      <span className='text-[#D4D3D9] w-[82px] h-[22px] m-2 '>Precipitation</span>
      <span className='text-left m-2 text-[24px]' >0 mm</span>
    
      </div>
    </div>
  )
}

export default SubCloud