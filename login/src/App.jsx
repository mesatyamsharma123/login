import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './component/login/Login'
import Header from './component/header/Header'
import useDark from '../src/component/dark/useDark'

function App() {
 const {dark,setDark}=useDark();
  return (
    <div className='flex flex-col min-h-screen  dark:bg-slate-700 items-center justify-center'>
    <Header dark={dark} setDark={setDark}/>
      <Login/>
    </div>
  )
}

export default App
