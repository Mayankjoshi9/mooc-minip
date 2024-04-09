import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaBackward } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Title: "",
    department: "",
    role: "",
  });
  const navigate=useNavigate();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData(() => {
      return {
        ...formData,
        [name]: value
      }
    })
  }
   function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
    const savedUser=async()=>{await fetch('http://127.0.0.1:4000/api/v1/createEmployee',
    {
      method:'POST',
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(formData),
    })}
    savedUser(formData);
    console.log(savedUser);
    navigate("/");
    
  }
  return (
    <div>
      <div className='flex flex-col bg-blue w-full mx-[150px] mt-[100px]'>
        {/* employee */}
        <div className='flex flex-col justify-center items-start '>
          <p className='font-bold text-3xl dark:text-white'>Create a Employee</p>
          <Link to='/'>
            <div className='flex items-center pt-2 text-blue-800 dark:text-blue-700  justify-center gap-3'>
              <FaBackward />

              <p className='font-medium  text-lg'>Back to all Employee List</p>

            </div>

          </Link>
        </div>

        <form onSubmit={submitHandler} className='mt-[30px] flex flex-col  mx-[0px] gap-4 '>
        {/* employee name */}
          <div className='flex flex-col gap-1'>
            <label className='font-medium text-lg dark:text-white'>Employee Name</label>
            <input
              className='w-[50%] border-gray-500 border-[1px] rounded-md h-10  text-gray-700 p-2  dark:bg-black dark:border-gray-300 outline-none dark:text-white'
              placeholder='Enter Your Full Name'
              value={formData.Name}
              name='Name'
              onChange={changeHandler}
            />
          </div>
          {/* email id */}
          <div className='flex flex-col '>
            <label className='font-medium text-lg dark:text-white'>Employee Email Id</label>
            <input
              className='w-[50%] border-gray-500 border-[2px] rounded-md h-10  text-gray-700  p-2  dark:bg-black dark:border-gray-300 outline-none dark:text-white'
              placeholder='Enter Your Email Id'
              value={formData.Email}
              name='Email'
              onChange={changeHandler}
            />
          </div>
{/* title */}
          <div className='flex flex-col '>
            <label className='font-medium text-lg dark:text-white'>Employee Title </label>
            <input
              className='w-[50%] border-gray-500 border-[2px] rounded-md h-10  text-gray-700  p-2  dark:bg-black dark:border-gray-300 outline-none dark:text-white'
              placeholder='Enter Your Employee Title'
              value={formData.Title}
              name='Title'
              onChange={changeHandler}
            />
          </div>
          {/* department */}
          <div className='flex flex-col '>
            <label className='font-medium text-lg dark:text-white'>Employee Department </label>
            <input
              className='w-[50%] border-gray-500 border-[2px] rounded-md h-10  text-gray-700  p-2  dark:bg-black dark:border-gray-300 outline-none dark:text-white'
              placeholder='Enter Your Employee Department'
              value={formData.department}
              name='department'
              onChange={changeHandler}
            />
          </div>
          {/* role */}
          <div className='flex flex-col '>
            <label className='font-medium text-lg dark:text-white'>Employee Role</label>
            <input
              className='w-[50%] border-gray-500 border-[2px] rounded-md h-10  text-gray-700  p-2  dark:bg-black dark:border-gray-300 outline-none dark:text-white'
              placeholder='Enter Your Employee Role'
              value={formData.role}
              name='role'
              onChange={changeHandler}
            />
          </div>

          <button type='submit' className='flex justify-center text-white items-center rounded-md bg-blue-500 w-[50%] h-[50px] '>
          <div className='font-medium'>
          Create Employee

          </div>
          <GrFormNextLink />
          
          </button>

        </form>
      </div>

    </div>
  )
}

export default EmployeeForm