import React from 'react'

function Header({dark,setDark}) {
    console.log(dark)
  return (
   <header className='flex flex-col  fixed top-0 h-15 w-screen items-end justify-center  bg-slate-600 text-white dark:text-slate-700 font-bold  '>
<div onClick={()=>(setDark((prev)=>(!prev)))} className='text-center rounded-3xl bg-slate-800 mr-8 dark:bg-white  p-3'>{!dark ? "Dark mode" :"Light mode" }</div>
   </header>
  )
}

export default Header
