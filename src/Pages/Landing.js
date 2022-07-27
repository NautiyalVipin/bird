import React, { useState,useEffect } from 'react'
import Image from "../Images/landing.png" 
import {ButtonGoogle,ButtonApple,ButtonPlain} from '../Components/buttons'
import Footer from '../Components/footer'
import Login from './Login'
import Register from './Register'



const Landing = () => {
  const [showLogin,setShowLogin] = useState(false)
  const [showRegister,setShowRegister] = useState(false)

  const signinHandler =()=>setShowLogin(true)
  const signupHandler =()=>setShowRegister(true)

  const closeLogin = ()=>setShowLogin(false)
  const closeRegister = ()=>setShowRegister(false)

  useEffect(()=>{
    if(!localStorage.getItem("users")){
    let arr =[
        {
            username:"admin1",
            password:"Admin@123",
            email:"email"
        },
        {
            username:"admin2",
            password:"Admin@123",
            email:"email"
        },
        {
            username:"admin3",
            password:"Admin@123",
            email:"email"
        }
        ]
        
        localStorage.setItem("users",JSON.stringify(arr))}
},[])

  
  return (
    <div>
      <div id="top" className={showLogin?"opacity-30" :showRegister? "opacity-50":"" }>
    <div className='bg-black flex flex-col  h-[124vh] w-screen'>
        <div className='bg-black flex flex-col md:flex-col lg:flex-row-reverse h-[108vh] overflow-y-auto w-screen'>
            <div className='text-white p-8 m-3 font-extrabold tracking-wide flex  flex-col gap-4 z-10 md:[90vw]  lg:w-[49vw] '> 
                <i className="fab fa-twitter" style={{fontSize:"56px", color:"white"}}></i>
                <h1 className='text-6xl mt-6 mb-6'>Happening Now</h1>
                <h1 className='text-4xl mb-4'>Join Social-Bird today.</h1>
                <ButtonGoogle handler={signupHandler} title="Sign up with Google" />
                <h1  className='font-sm mb-2 w-64  text-gray-500 font-thin   text-left text-xs'>
                <ButtonApple handler={signupHandler} title="Sign up with Apple"/>
                <p className='ml-3'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p></h1>
                <hr className=' mb-2 border border-[#414446]' />
                <h1 className='text-xl ml-2 font-bold'>Already have an account?</h1>
                <ButtonPlain handler={signinHandler} title="Sign in" />
            </div>
            <div id='imgDiv' className='flex  md:w-[90vw] h-[30vh] md:h-[60vh] lg:h-[108vh]   lg:w-[52vw]'>
                <img className='bg-blue-200 w-fit lg:h-[108vh] md:h-[50vh] h-[30vh]  z-0  ' src={Image} alt="img"  />
                <span className='z-10 ml-[-40vw] lg:mt-[20vh]'>
                <i className="fab fa-twitter" style={{fontSize:"28vw", color:"white"}} ></i>
                </span>
            </div>
        </div>
        <Footer/>
        </div>
       
        </div>
        {showLogin && <div className='fixed z-40 top-0'>
          <Login  handler={closeLogin}/>
        </div>}
        {showRegister && <div className='fixed z-40 top-0'>
          <Register  handler= {closeRegister}/>
        </div>}
   
    </div>

  )
}

export default Landing