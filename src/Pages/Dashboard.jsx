import React, { useState } from 'react'
import bg from '../assets/images/bg.jpg'

function Dashboard() {
  return (
    <div className="container w-screen h-screen flex justify-center items-center" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat:'no-repeat',objectFit:'contain' }}>
      <div 
        className="form-container w-[90%] max-w-[600px] h-auto  rounded-xl p-8" 
        style={{
          backgroundImage: 'linear-gradient(to right, #211C84, #6A5ACD)',
        }}
      >
        <form action="" className="w-full h-full flex flex-col justify-center px-4 gap-6">
          <div className="contentArea flex flex-col gap-2 w-full h-auto">
            <label htmlFor="" className="text-[#ffffffe9] font-kanitFont text-[18px]">Course name</label>
            <input 
              type="text" 
              className="rounded-sm h-[30px] border-2 border-white focus:border-gray-600 outline-none pl-2" 
              placeholder="course name"
            />  
          </div>

          <div className="contentArea flex flex-col gap-2 w-full h-auto">
            <label htmlFor="" className="text-[#ffffffe9] font-kanitFont text-[18px]">College name</label>
            <input 
              type="text" 
              className="rounded-sm h-[30px] border-2 border-white focus:border-gray-600 outline-none pl-2" 
              placeholder="College name"
            />
          </div>

          <div className="contentArea flex flex-col gap-2 w-full h-auto">
            <label htmlFor="" className="text-[#ffffffe9] font-kanitFont text-[18px]">Location</label>
            <input 
              type="text" 
              className="rounded-sm h-[30px] border-2 border-white focus:border-gray-600 outline-none pl-2" 
              placeholder="Location"
            />
          </div>

   


          <div className="button-area w-full flex justify-center items-center">
            <button className="bg-[#A1E3F9] text-black font-bold  hover:bg-white md:rounded-[8px] outline-2 outline-gray-600 p-2 rounded-sm w-32 active:scale-[.96] duration-200 ease-in-out font-Kanit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Dashboard
