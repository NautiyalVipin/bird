import React, { useEffect,createContext, useState } from 'react'
import {Leftbar,Rightbar} from './sidebar'
import Middlebar from './middlebar'
import { dataGetter,dataSetter } from '../../Components/localStorageStore'
import { useNavigate } from 'react-router-dom'


const searchContext = createContext({})

const Dashboard = () => {
  let navigate = useNavigate()
  const [searchTerm,setSearchTerm] = useState("")
  
  useEffect(()=>{
    if(!dataGetter("user")){
      navigate("/")    
  }},[])


  return (
    
    <div className='h-[200vh]  bg-black w-screen overflow-clip relative flex justify-between '>    
       <searchContext.Provider value={{searchTerm,setSearchTerm}}>
       <Leftbar />
        <Middlebar/>
        <Rightbar/>
        </searchContext.Provider>
    </div>
    
  )
}

export default Dashboard
export {searchContext}