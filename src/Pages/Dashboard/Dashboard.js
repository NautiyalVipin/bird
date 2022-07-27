import React, { useEffect } from 'react'
import {Leftbar,Rightbar} from './sidebar'
import Middlebar from './middlebar'
import { dataGetter,dataSetter } from '../../Components/localStorageStore'
import { useNavigate } from 'react-router-dom'



const Dashboard = () => {
  let navigate = useNavigate()
  
  useEffect(()=>{
    if(!dataGetter("user")){
      navigate("/")    
  }},[])


  return (
    
    <div className='h-[200vh]  bg-black w-screen overflow-clip relative flex justify-between '>    
       <Leftbar />
        <Middlebar/>
        <Rightbar/>
    </div>
    
  )
}

export default Dashboard