import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchIcon from "@mui/icons-material/SearchOutlined";
import bg from '../assets/images/backgrounds/seven.jpg'

function Output() {
  const location = useLocation()
  const searchData = location.state || {}; // Default to empty object if no state is passed



  return (

    <div className="wrapper h-screen w-screen">
      <div className="navbar w-full h-[80px] bg-slate-500 flex justify-center items-center gap-4  px-4">
        <SearchIcon style={{ color: "red", fontSize: "40px" }} />
        <input type="text" name="" id="" className='w-[60%] h-[40%] rounded-sm outline-none pl-4 pr-3 font-kanitFont' />
        <button type='submit' className='py-2 px-4 bg-[blue] rounded-md text-white font-semibold'>Search</button>
      </div>



      <div className="content-wrapper w-screen h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: '',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>


        <div className="tablecontainer pb-4 w-[85%] h-auto md:w-[80%]   rounded-xl flex flex-col gap-4  bg-[#382388] px-2 lg:max-w-[60%]">
          <div className="collegename w-full flex justify-center items-center font-bold font-kanitFont py-2 text-white text-[22px] lg:text-[22px] underline decoration-2 underline-offset-8">
            {searchData.COLLEGE ? `${searchData.COLLEGE} COLLEGE` : ''}
          </div>


          <div className="coursename bg-[#008FE8] flex justify-between px-4 md:px-6 items-center py-2 rounded-[6px]"> <p className='font-semibold  font-kanitFont text-[15px] md:text-[22px] text-white'>Course Name </p> <p className='font-semibold font-kanitFont text-[15px]   text-white md:text-[22px]'>{searchData.COURSENAME}</p> </div>

          <div className="specialisations flex py-2 justify-center items-center flex-col bg-[#3B4AAF] rounded-[6px]">
            <p className='font-semibold  font-kanitFont text-[18px] md:text-[22px] text-white underline decoration-2 underline-offset-4'>SPECIALISATIONS</p>

            <div className="spwrapper flex flex-col gap-4 w-full justify-around px-4 md:px-6 py-2">
              {/* <div className="coursewrapper w-full border-2 flex flex-col gap-4"> */}
              {searchData.SPECIALISATIONS &&
                searchData.FEESAMOUNT &&
                searchData.SPECIALISATIONS.map((specialisation, index) => (
                  <div key={index} className="flex justify-between items-center gap-8">
                    <p className="font-kanitFont text-white text-[14px] custom:text-[16px] md:text-[18px] lg:text-[20px]">{specialisation}</p>
                    <p className="font-kanitFont text-white text-[14px] custom:text-[16px] md:text-[18px] lg:text-[20px]">{searchData.FEESAMOUNT[index]}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="coursename bg-[#008FE8] flex justify-between px-4 md:px-6 items-center py-2 rounded-[6px]"> <p className='font-semibold  font-kanitFont text-[15px] md:text-[22px] text-white'>Location </p>   <p className='font-semibold font-kanitFont text-[15px] text-white md:text-[22px]'>{searchData.LOCATION}</p> </div>









        </div>
      </div>
    </div>
  )
}

export default Output
