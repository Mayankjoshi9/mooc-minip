import React from 'react'
import EmployeeForm from "../components/EmployeeForm"

const Employee = () => {
  return (
    <div>
      <div className='flex justify-between w-screen h-screen overflow-x-hidden dark:bg-black'>
        {/* image */}
        <div className='relative w-[50%] h-full'>
          <img
            className='w-full h-full object-cover object-top'
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt='img'
          />
          <div className='inset-0 bg-gradient-to-t from-black to-transparent absolute'></div>
          <div className='absolute left-[25%] font-bold bottom-10 text-white text-4xl '>
            Empower your business <br />
            with our employee creation!
          </div>
        </div>
        {/* form */}
        <div className='w-[50%] h-full '>
          <EmployeeForm />
        </div>
      </div>

    </div>
  )
}

export default Employee