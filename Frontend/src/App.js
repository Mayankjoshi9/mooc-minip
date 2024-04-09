import './App.css';
import React, { useState } from "react";
import Home from "./Pages/Home";
import Employee from "./Pages/Employee";
import { Route, Routes } from "react-router-dom";
// require("dotenv").config({path: '/path/to/.env'});


function App() {


  const [toggleDarkMode,setToggleDarkMode]=useState(
  (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) ?
      ('dark'):
      ('light')
  );
  
  

  const toggleDarkTheme=()=>{
    toggleDarkMode==="dark"?localStorage.theme = 'light':localStorage.theme = 'dark';
    toggleDarkMode==="dark"?setToggleDarkMode("light"):setToggleDarkMode("dark");
   

    console.log(toggleDarkMode);

  }

  

  return (
    
      <div className={` w-screen h-screen  ${toggleDarkMode} `}>
        <button className='absolute right-[100px] bg-yellow-400 px-3 py-2 rounded-md mt-7 mr-[100px] text-base font-medium dark:text-white dark:bg-blue-700' onClick={toggleDarkTheme}>Toggle Mode</button>

        <Routes>

          <Route path='/' element={<Home  />} />
          <Route path='/employee' element={<Employee/>} />

        </Routes>

      </div>
   

  );
}

export default App;


