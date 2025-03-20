import React, { useEffect, useState } from 'react';
import bg from '../assets/images/bg.jpg';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../Instances/AxiosInstance';

function Dashboard() {
  const [searchData, setSearchData] = useState({ COURSENAME: '', COLLEGE: '' });
  const [courseNames, setCourseNames] = useState([])
  const [collegedata, setCollegeData] = useState([])
  const [selectedCourse, setSelectedCourse] = useState('')
  const [courseToCollegeMap, setCourseToCollegeMap] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const response = await axiosInstance.get('/fetchdata');
        if (response.data && response.data.allData) {
          setCourseNames(response.data.allData.map(course => course.COURSENAME)) 

          


          if (response.data && response.data.allData) {
            setCourseNames(response.data.allData.map(course => course.COURSENAME));
          
            // Create a mapping of course names to their corresponding colleges
            const mapping = {};
            response.data.allData.forEach(course => {
              mapping[course.COURSENAME] = course.COLLEGES || []; // Assuming 'COLLEGES' is an array in response
            });
          
            setCourseToCollegeMap(mapping);
          }
          

        }
        else {
          console.error('Data structure unexpected', response.data);
        }
      } catch (err) {
        console.log('Data fetching failed', err);
      }
    };

    fetchDataAsync();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  useEffect(() => {
    if (selectedCourse && courseToCollegeMap[selectedCourse]) {
      setCollegeData(courseToCollegeMap[selectedCourse]); // Set colleges based on selected course
    } else {
      setCollegeData([]); // Reset if no course is selected
    }
  }, [selectedCourse]); // Run when selectedCourse changes
  


  function handleChange(e) {
    const { name, value } = e.target; // Get the name and value from the event
    const upperValue = value.toUpperCase();
  
    // Update state based on the selected field
    setSearchData(prevState => ({
      ...prevState,
      [name]: upperValue,
    }));
  
    // If the course dropdown is changed
    if (name === "COURSENAME") {
      setSelectedCourse(upperValue); // Update selected course
      setSearchData(prevState => ({ ...prevState, COLLEGE: "" })); // Reset college selection
    }
  
    // Log selected values immediately (not relying on state update)
    console.log("Selected Course:", name === "COURSENAME" ? upperValue : searchData.COURSENAME);
    console.log("Selected College:", name === "COLLEGE" ? upperValue : searchData.COLLEGE);
  }
  
  

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axiosInstance.post('/search', searchData);
      console.log('Search submitted', response);
    } catch (err) {
      console.log('Searching error', err);
    }

    // navigate('/output', { state: searchData }); // Uncomment to pass searchData to next page
  };


  return (
    <div
      className="container w-screen h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        objectFit: 'contain',
      }}
    >
      <div
        className="form-container w-[90%] max-w-[600px] h-auto rounded-xl p-8"
        style={{ backgroundImage: 'linear-gradient(to right, #211C84, #6A5ACD)' }}
      >
        <form
          action=""
          className="w-full h-full flex flex-col justify-center px-4 gap-6"
          onSubmit={handleSubmit}
        >
          {/* Course name dropdown */}
          <div className="contentArea flex flex-col gap-2 w-full h-auto">
            <label
              htmlFor="COURSENAME"
              className="text-[#ffffffe9] font-kanitFont text-[18px] md:text-[20px]"
            >
              Course name
            </label>
            <select
              name="COURSENAME"
              className="rounded-sm h-[30px] md:h-[38px] border-2 border-white focus:border-gray-600 outline-none pl-2"
              value={searchData.COURSENAME}
              onChange={handleChange}
            >
              <option value="">Select a Course</option>
              {courseNames.length > 0 ? (
                courseNames.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                
                ))
              ) : (
                <option value="">No Courses Available</option>
              )}
            </select>

          </div>


          {/* College dropdown */}
          <div className="contentArea flex flex-col gap-2 w-full h-auto">
            <label
              htmlFor="COLLEGE"
              className="text-[#ffffffe9] font-kanitFont text-[18px] md:text-[20px]"
            >
              College name
            </label>
            <select
              name="COLLEGE"
              className="rounded-sm h-[30px] md:h-[38px] border-2 border-white focus:border-gray-600 outline-none pl-2"
              value={searchData.COLLEGE}
              onChange={handleChange}
            >
              <option value="">Select a College</option>
              {collegedata.length > 0 ? (
                collegedata.map((college, index) => (
                  <option key={index} value={college}>
                    {college}
                  </option>
                ))
              ) : (
                <option value="">No Colleges Available</option> // Add fallback in case of empty data
              )}
            </select>

          </div>

          <div className="button-area w-full flex justify-center items-center">
            <button
              type="submit" // Use submit button to trigger form submission
              className="bg-[#A1E3F9] text-black font-bold hover:bg-white hover:rounded-none md:rounded-[8px] outline-2 outline-gray-600 p-2 rounded-sm w-32 active:scale-[.96] duration-200 ease-in-out font-Kanit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
