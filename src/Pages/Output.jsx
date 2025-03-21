import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchIcon from "@mui/icons-material/SearchOutlined";

function Output() {
  const location = useLocation()
  const searchData = location.state || {}; // Default to empty object if no state is passed
  console.log(searchData);  
  
  
  
  return (

    <div className="wrapper h-screen w-screen">
      {/* <div className ="navbar w-full h-[80px] bg-slate-500 flex justify-center items-center gap-8">
      <SearchIcon style={{ color: "red", fontSize: "40px" }} />
      <input type="text" name="" id="" className='w-[60%] h-[40%] rounded-sm outline-none pl-4 pr-3 font-kanitFont'/>
      </div> */}




      <div className="content-wrapper w-full  border-2 border-red-700 flex justify-center">
       <div className="tablecontainer w-auto h-auto md:w-[80%] bg-slate-400 mt-8 px-10 rounded-xl flex flex-col gap-2 py-4 ">
       <div className="collegename w-full border-2 border-green-700 flex justify-center items-center font-bold font-kanitFont py-2 ">{searchData.COLLEGE ? searchData.COLLEGE : '' }</div>


        <div className="coursename border-2 border-red-500 flex justify-around"> <p className='font-semibold font-kanitFont'>Course Name :</p> <p className='font-semibold font-kanitFont text-red-600'>{searchData.COURSENAME}</p> </div>
        <div className="specialisations border-2 border-red-500 flex py-4 md:justify-around">
  <p className='font-semibold font-kanitFont mb-2'>Specialisations :</p>

  <div className="flex flex-col gap-1 pl-4">
    {searchData.SPECIALISATION && searchData.SPECIALISATION.map((specialisation, index) => (
      <p key={index} className='font-semibold font-kanitFont text-red-600'>{specialisation}</p>
    ))}
  </div>
</div>

<div className="feesamount border-2 border-red-500 flex justify-around"> <p className='font-semibold font-kanitFont'>Fees Amount :</p> <p className='font-semibold font-kanitFont text-red-600'>{searchData.FEESAMOUNT}</p> </div>
<div className="location border-2 border-red-500 flex justify-around"> <p className='font-semibold font-kanitFont'>Location :</p> <p className='font-semibold font-kanitFont text-red-600'>{searchData.LOCATION}</p> </div>

       </div>
      </div>

    
    </div>
  )
}

export default Output
