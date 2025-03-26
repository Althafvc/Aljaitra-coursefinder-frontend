import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import Teacherbg from '../assets/images/loginbg.jpeg';
import { useForm } from 'react-hook-form';
import axiosInstance from '../Instances/AxiosInstance';
import BasicAlerts from '../Components/BasicAlerts';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(true)
  
  const [alert, setalert] = useState({ visible: false, type: '', msg: '' });


  useEffect(()=> {
    setLoading(false)
  },[])

  async function onsubmit(data) {
    try {
      const response = await axiosInstance.post('/login', data);
      console.log("Login successful:", response.data);

      setalert({ visible: true, type: 'success', msg: response.data.message });

      dispatch(login(response.data.user));

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      setalert({ 
        visible: true, 
        type: 'error', 
        msg: err.response?.data?.message || "Login failed. Please try again." 
      });

      console.error(err.response?.data?.message || "Unknown error");
    }
  }

  useEffect(() => {
    if (alert.visible) {
      const timer = setTimeout(() => setalert({ visible: false, type: '', msg: '' }), 2000);
      return () => clearTimeout(timer);
    }
  }, [alert.visible]);



  function LoadingSpinner() {
    return (
      <div className="h-full flex items-center justify-center mt-[20%] font-semibold text-lg">
        <img
          className="w-20 h-20 animate-spin mr-6"
          src="https://www.svgrepo.com/show/199956/loading-loader.svg"
          alt="Loading icon"
        />
        Loading...
      </div>
    );
  }


  if (loading) return <LoadingSpinner/>



  return (
    <div className="container w-screen h-screen flex justify-center items-center bg-white">
      <div className="form-container md:w-[80%] md:h-[460px] flex flex-col md:flex-row shadow-lg overflow-hidden h-auto lg:max-w-[50%] rounded-3xl">
        
        {/* Left Side (Image) */}
        <div 
          className="md:w-[50%] h-[230px] md:h-full flex flex-col items-center justify-between py-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${Teacherbg})` }}>
          <h2 className="text-white text-2xl font-semibold">Aljaitra International</h2>
          <p className="text-white text-center px-10">"Discovering new horizons in education"</p>
        </div>

        {/* Right Side (Login Form) */}
        <div className="md:w-[50%] flex flex-col justify-center pl-8 py-3 gap-6 bg-gradient-to-r from-[#211C84] to-[#6A5ACD]">
          <h2 className="text-white text-xl text-center font-bold">Find your choice of course and college with us</h2>

          <form className="flex flex-col gap-3 w-full px-6" onSubmit={handleSubmit(onsubmit)}>
            {/* Email Input */}
            <div className="flex flex-col">
              <label className="text-white text-lg">E-mail</label>
              <input
                type="email"
                className="border-gray-400 w-[80%] focus:border-blue-500 focus:outline-none rounded-md h-10 px-3 text-gray-700"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <span className="text-white">{errors.email.message}</span>}
            </div>

            {/* Alert Message */}
            {alert.visible && (
              <div className="mt-4">
                <BasicAlerts type={alert.type} msg={alert.msg} />
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button className="bg-blue-300 text-black font-bold rounded-md px-6 py-2 hover:bg-white transition duration-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
