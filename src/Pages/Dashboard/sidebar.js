import React from 'react'
import profilepic from "../../Images/profilepic.jpg"
import { dataGetter } from '../../Components/localStorageStore'
import NotificationBar from './notificationBar'
import { ButtonWhite } from '../../Components/buttons'
import { useNavigate } from 'react-router-dom'

const Leftbar = () => {


    

  return (
    <div className='bg-black fixed  w-[18rem] h-full basis-[18rem] '>
    <div className='text-white'>
    <ul className='flex font-bold mx-5 text-xl flex-col justify-evenly h-screen gap-2 p-4'>
        <li><i className="fab fa-twitter" style={{fontSize:"40px", color:"white"}}></i></li>
        <li className='flex'><svg aria-hidden="true" className="flex-shrink-0 w-6 h-8 text-white transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>&nbsp; Home</li>
        <li  className='flex'> <svg aria-hidden="true" className="flex-shrink-0 w-6 h-8 text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>&nbsp; Explore</li>
        <li  className='flex'>
        <svg className="w-6 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
            &nbsp; Notifications</li>
        <li className='flex'>  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-8 text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>&nbsp; Messages</li>
        <li  className='flex'> <svg aria-hidden="true" className="flex-shrink-0 w-6 h-7 text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>&nbsp; Profile</li>
        <li>&nbsp;...&nbsp; More</li>
        <li><button type="button" className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50  rounded-full text-lg  font-bold px-5 py-3 w-52 justify-center inline-flex mr-2 mb-6">Tweet</button> </li>
        <li className='justify-self-end'>
<div className="flex items-center  m-auto hover:bg-[#202327] p-2 rounded-full  space-x-4">
<img className="w-10 h-10  rounded-full" src={profilepic} alt="pro"/>
<div className="space-y-1 text-sm font-bold ">
<div>Jesse Pinkman</div>
<div className="text-sm text-gray-500">@{dataGetter("user")}</div>
</div>
</div>
    </li>
        </ul>
</div>
</div>
  )
}


const Rightbar = ()=>{
    const navigate = useNavigate()

    return(
        <div className='bg-black flex flex-col absolute w-[25rem] px-10 pt-2 scroll-smooth left-[55rem] h-full basis-[25rem] '>
        <div className='mb-12 '>
        <div className="fixed z-30 h-12 m-auto bg-black w-[25rem] ">
   
    <input type="search" id="default-search" className="block p-4 pl-10 w-80 text-sm text-white bg-[#202327] rounded-full border border-gray-300 focus:ring-[#1da1f2] focus:border-[#1da1f2]" placeholder="Search Bird feed" required/>      
</div>
        </div>
        <div id="dropdownNotification" className=" mt-6 h-[25vh]  overflow-y-auto scroll-smooth  scrollbar-hide z-10 w-full max-w-sm bg-white rounded-lg divide-y divide-gray-100 shadow  dark:bg-[#202327] dark:divide-gray-700" >
        <h1 className="text-white p-3 w-80 h-10 rounded-lg text-sm font-semibold  bg-[#202327] ">Relevant People</h1>
<a  className="flex  px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-700">
  <div className="flex-shrink-0">
    <img  className="w-11 h-11  obkect-scale-down rounded-full" src="https://miro.medium.com/max/1400/1*htbUdWgFQ3a94PMEvBr_hQ.png" alt="Jese image"/>
  
  </div>
  <div className="pl-3 w-full">
      <div className="text-gray-500 text-sm mb-1 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Next.js</span><br/> The react framework created by</div>
      <div className="text-sm text-blue-600 dark:text-blue-500"> @vercel</div>
      <button type="button"  className="text-gray-900 bg-gray-100 float-right  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-full w-20 text-sm px-5 py-1 text-center inline-flex font-bold items-center mr-2 mb-2">follow</button>
  </div>
</a>
<a  className="flex  px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
  <div className="flex-shrink-0">
    <img className="w-11 h-11  rounded-full" src="https://randomuser.me/api/portraits/thumb/women/1.jpg" alt="Jese image"/>
  
  </div>
  <div className="pl-3 w-full">
      <div className="text-gray-500 text-sm mb-2 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Jese Leos</span><br/>Content Creator</div>
      <button type="button" onClick={onclick} className="text-gray-900 bg-gray-100 float-right  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-full w-20 text-sm px-5 py-1 text-center inline-flex font-bold items-center mr-2 mb-2">follow</button>
  </div>
</a>
        </div>
<div id="dropdownNotification" className=" mt-6 h-[80vh]  overflow-y-auto scroll-smooth  scrollbar-hide z-10 w-full max-w-sm bg-white rounded-lg divide-y divide-gray-100 shadow  dark:bg-[#202327] dark:divide-gray-700" >
<NotificationBar/>
</div>

    </div>
    )
}



export {Leftbar,Rightbar}