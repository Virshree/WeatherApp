
import { useEffect, useState } from 'react'
import './App.css'
import DailyForecast from './components/DailyForecast'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HourlyForecast from './components/HourlyForecast'
import SubCloud from './components/SubCloud'

function App() {


  return (
    <>
      <div className='bg-[#02012C] text-white h-[1000px] p-3 '>
        <div className='flex flex-col  '>
        <Header/>
        <HeroSection   />
        <SubCloud  />
        <DailyForecast/>
        </div>
      <div className='flex ml-300 mt-[-620px]'>
      <HourlyForecast />
      </div>
   
      </div>
       
    </>
  )
}

export default App
