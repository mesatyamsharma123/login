import React, { useEffect, useState } from 'react'

export default function useDark() {
  const [dark,setDark]=useState(false)
 useEffect(()=>{
  if(dark){
    document.documentElement.classList.add("dark")
  }
  else{
    document.documentElement.classList.remove("dark")
  }



 })
 
  return {
dark,setDark


  }
}


