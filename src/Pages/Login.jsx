import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import Teacherbg from '../assets/images/loginbg.jpeg'
import { useForm } from 'react-hook-form';
import axiosInstance from '../Instances/AxiosInstance'
import BasicAlerts from '../Components/BasicAlerts'

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login()); // Update Redux state
    navigate("/dashboard"); // Redirect to Dashboard
  };

  const { register, handleSubmit, getValues, formState: { errors } } = useForm(); // using useForm hook for validation
  const [alert, setalert] = useState({ visible: false, type: '', msg: '' })



  async function onsubmit(data) {
    try {
      const response = await axiosInstance.post('/login', data);
      console.log("Login successful:", response.data); // Debugging
      setalert({ visible: true, type: 'success', msg: response.data.message })

      dispatch(login(response.data.user)); // ✅ Update Redux auth state

      setTimeout(() => {

        navigate("/dashboard");
      }, 1000);
    } catch (err) {

      setalert({ visible: true, type: 'error', msg: err.response.data.message })


      console.error(err.response.data.message);
    }
  }

  if (alert) setTimeout(() => {
    setalert('')
  }, 1000);


  return (
    <div className="container w-screen h-screen flex justify-center items-center bg-white">
      <div className="form-container px-2 md:px-0 rounded-3xl md:rounded-2xl sm:w-[100%] md:w-[55%] md:h-[460px] flex flex-col md:flex-row shadow-customShadow  overflow-hidden h-auto">
        <div className={`welcome-area md:w-[50%] h-[230px] md:h-full flex justify-between md:py-5 items-center flex-col gap-5 py-2 md:gap-16`} style={{ backgroundImage: `url(${Teacherbg})`, backgroundPosition: "center", backgroundSize: "cover" }}>
          <h2 className="text-[#ffffffef] text-[24px] font-newFont text-base font-semibold">Aljaitra international</h2>
          <div className="description-area w-full flex justify-center items-center">
            <p className="description text-center text-[#ffffff96] pb-2 text-[.9rem] px-10 w-full ml-10 md:mb-5">"Discovering new horizons in education"</p>
          </div>
        </div>
        <div
          className="form-area flex flex-col md:w-[50%] justify-center pl-8 py-3 gap-6 md:gap-[32px]"
          style={{
            backgroundImage: 'linear-gradient(to right, #211C84, #6A5ACD)',
          }}>

          <div className="heading-area flex justify-center px-3">

            <h2 className="text-[white]  shadow-sm font-kanitFont text-[1.4rem] text-center ">Find your choice of course and college with us</h2>
          </div>
          <div className="signupform-area w-full justify-center">
            <form className="flex pl-10 flex-col gap-2.5 w-full" onSubmit={handleSubmit(onsubmit)}>
              <div className="form-outline flex flex-col gap-1">
                <label htmlFor="email" className="text-[#ffffffe9]  text-[16px] font-kanitFont">E mail</label>
                <input
                  type="email"
                  name="email"
                  className="border-gray-400 w-[80%] focus:border-b-[#4e87c5] focus:outline-none rounded-[6px] h-[36px] pl-3 sm:text-[1px] md:text-lg placeholder:text-gray-600 md:placeholder:font-semibold flex items-center placeholder:hidden sm:placeholder:hidden lg:placeholder:block"
                  placeholder="Enter your email address"
                  aria-label="Email"
                  {...register("email", {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: 'Invalid email address'

                    }
                  })}
                />
                {errors.email && <span className="text-white">{errors.email.message}</span>}

              </div>

              {alert.visible && (
                <span className=" w-[80%] mt-4">
                  <BasicAlerts type={alert.type} msg={alert.msg} />
                </span>
              )}


              <div className="button-area w-full flex justify-center md:mt-4 md:pr-8">
                <button
                  className="bg-[#A1E3F9] text-black  font-bold mb-5 hover:bg-white hover  md:rounded-[8px] outline-2 outline-gray-600 p-2 rounded-sm w-32 mr-10 mt-2 active:scale-[.96] duration-200 ease-in-out font-Kanit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div >
    </div>
  )
}

export default Login;
