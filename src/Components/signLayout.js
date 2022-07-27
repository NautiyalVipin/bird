import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignLayout = (props) => {

const navigate = useNavigate()
const localHandler =()=>{
  navigate("/")
}

  return (
    <div className={props.bgColor}>
    <div className=' w-screen flex items-center h-screen'>
        <div className='bg-black mx-auto flex flex-col lg:h-[88vh] scrollbar-hide md:h-[88vh] items-center lg:p-1 md:p-1 pb-10 h-[100vh] w-[100vw]  lg:rounded-xl md:rounded-xl md:w-[40rem] lg:w-[40rem]'>
            <section className='flex w-full px-2 py-2'>
        <button type="button" onClick={props.handler?props.handler:localHandler} className="text-white bg-black hover:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-black focus:bg-gray-800 font-bold rounded-full  text-sm px-3 py-1  dark:bg-black dark:hover:bg-gray-600  dark:border-gray-900">&#10005;</button>
        <h1  className='sticky py-1.5 mx-20 text-2xl font-bold text-white'> {props.heading}</h1>
        </section>
        {props.children}
    <div className='h-20 text-center w-full'>
    <hr className='border-1 border-[#242d34c7] w-ful  mb-3 '/>
  {props.button}
    </div>
   </div>
 </div>
 </div>
  )
}

export default SignLayout