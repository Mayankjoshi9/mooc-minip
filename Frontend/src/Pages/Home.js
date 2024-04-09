import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const [Data,setData]=useState();
    let getAllUser=async()=>{
        try {
            let url='http://127.0.0.1:4000/api/v1/getEmployee';
            
            const data= await fetch(url,
                {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
            const res=await data.json();
            setData(res);
            console.log(res);
        } catch (error) {
            console.log("error in fetching employee data");
        }
    }
     useEffect
     (()=>{
        getAllUser();
     },[])

    return (
        <div className='dark:bg-black h-screen w-screen' >

            <div className='flex justify-between px-10 items-center '>
                <div className=' pb-5 pt-4'>
                    <h1 className='font-medium text-xl pb-2 dark:text-white'>Employees</h1>
                    <p className='dark:text-white'>This is a list of all employees. You can add new employees, edit or delete existing ones.</p>
                </div>
               <Link to="/employee">
                <button className='bg-blue-500 w-[150px] h-[40px] rounded-lg text-base font-medium dark:bg-blue-700 dark:text-white  ' >Add Employee</button>
                   
               </Link>
            </div>

            <div className='flex items-center justify-center  w-full h-full dark:bg-black'>
                <table className=' flex flex-col   dark:divide font-thin px-10  w-full h-full '>
                    <thead className='w-full'>
                        <tr className='flex flex-row dark:text-gray-400 justify-around bg-blue-500 dark:bg-gray-800 border-t-[1px] border-x-[1px] dark:border-t-gray-600 dark:border-x-gray-600 py-4 w-full  rounded-t-md'>
                            <th>Employee</th>
                            <th>Title</th>
                            <th>Role</th>
                        </tr>
                    </thead>

                    <tbody>
                       { Data?.data.map((person)=>(
                        <tr key={person._id} className='flex flex-row justify-around items-center bg-blue-300 dark:bg-gray-900 border-[1px] dark:border-gray-600 py-4 w-full  rounded-b-md'>
                            <td className='flex items-start justify-between  w-[100px]'>
                                <img className='rounded-full h-10 w-10 object-cover' src={person.image} alt=''></img>
                                <div className='ml-7'>
                                    <p className='text-lg font-medium text-gray-900 dark:text-white'>{person.Name}</p>
                                    <p className='text-lg font-medium text-gray-500 dark:text-gray-500'>{person.Email}</p>
                                </div>

                            </td>
                            <td className='flex flex-col justify-center items-center'>
                                <p className='text-lg font-medium text-gray-900 dark:text-white'>{person.Title}</p>
                                <p className='text-lg font-medium text-gray-600  dark:text-gray-500'>{person.department}</p>
                            </td>
                            <td className='text-lg font-medium text-gray-900 dark:text-white'>{person.role}</td>
                        </tr>
                       ))
                        }

                    </tbody>


                </table>

            </div>
        </div>
    )
}

export default Home