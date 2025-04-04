import { useState,useEffect } from 'react'

import './App.css'
import Login from './component/login/Login'
import Header from './component/header/Header'

function App() {
  const [dark,setDark]=useState(false)
   useEffect(()=>{
    if(dark){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  
  
  
   })
 
  return (
    <div className='flex flex-col min-h-screen  dark:bg-slate-700 items-center justify-center'>
    <Header dark={dark} setDark={setDark}/>
      <Login/>
    </div>
  )
}

export default App
