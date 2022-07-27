import React, { useState,useEffect } from 'react'
import Signup from '../Components/signLayout'
import { ButtonWhite } from '../Components/buttons'
import { checkPassword, checkUsername, dataSetter } from '../Components/localStorageStore'
import { useNavigate } from 'react-router-dom'

const Register = (props) => {
   let navigate = useNavigate();
    const [username,setUsername] = useState({value:"",pass:0,fail:0})
    const [email,setEmail] = useState({value:"",pass:0,fail:0})
    const [password,setPassword] = useState({value:"",pass:0,fail:0})
    const [cpassword,setCpassword] = useState({value:"",pass:0,fail:0})
    const [user,setUser] = useState({username:"",email:"",password:""})
    const [loading,setLoading] = useState(false)
    const [errorMsg,setErrorMsg] = useState("Please Create a strong Alphanumeric password of minimum 8 characters with an uppercase, a lowercase and a special character")

const handlerName =(e)=>setUsername(old=>{return {...old,value:e.target.value}})
const handlerEmail =(e)=>setEmail(old=>{return {...old,value:e.target.value}})
const handlerPassword =(e)=>setPassword(old=>{return {...old,value:e.target.value}})
const handlerConfirm =(e)=>setCpassword(old=>{return {...old,value:e.target.value}})

useEffect(() => {
if(user.username!==""){
    dataSetter("users",user)
    navigate("/signin");
}
}, [user])

useEffect(()=>{
    setLoading(false)
},[username,password])




const submitHandler = ()=>{
    let validateUsername=checkUsername(username.value)
    if(username.value ==="" ||
       password.value ==="" ||
       cpassword.value==="" 
            ){
                setLoading(true)
                setErrorMsg("Please fill all the required fields")
                return false

            }

    if(password.value !== cpassword.value){
        setLoading(true)
        setErrorMsg("Passwords Do Not Match!")
        return false    

  }
    if(validateUsername===1){
        if(checkPassword(password.value)){
        setUser({username:username.value,
            email:email.value,
            password:password.value
        })
       
        

        setCpassword({value:"",pass:0,fail:0})
        setPassword({value:"",pass:0,fail:0})
        setEmail({value:"",pass:0,fail:0})
        setUsername({value:"",pass:0,fail:0})
        return true

    }
    else {
        setLoading(true)
        setErrorMsg("Password is not strong enough")
        return false
    
    }
        
    }
    else if(validateUsername===0)
    {
        setLoading(true); setErrorMsg("Username already exist")}
    else{               
        setLoading(true); setErrorMsg("Username should be alphanumeric only, without any special characters")

    }
}

  return (
    <Signup handler={props.handler} bgColor={props.bgColor} button={<ButtonWhite onclick={submitHandler} title="Sign Up"/>} heading="Step 1 of 2" title="Sign up" >
        {loading && <div id="alert-1" className="flex p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200" role="alert">
  <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" ></path></svg>
  <span className="sr-only">Info</span>
  <div className="ml-3 text-sm font-medium text-blue-700 dark:text-blue-800">
    {errorMsg}<a  className="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>. Give it a click if you like.
  </div>
    <button type="button" onClick={()=>setLoading(!loading)} className="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300" data-dismiss-target="#alert-1" aria-label="Close">
      <span className="sr-only">Close</span>
      <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path></svg>
  </button>
</div>}
         <div className='w-[72%] h-[80vh]  overflow-y-auto  flex gap-6 flex-col p-4 m-auto '>
            <h1 className='text-white mb-6 text-4xl font-bold'>Create your account </h1>
            <section>
            <input type="email"  onChange={handlerEmail} value={email.value} className="bg-black border border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[88%] pt-4 mb-5 pb-4 p-2.5" placeholder="Enter your email" /></section>
            <input type="text"  onChange={handlerName} value={username.value} className="bg-black border border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[88%] pt-4 mb-5 pb-4 p-2.5" placeholder="Set a username" />
            <input type="password"  onChange={handlerPassword} value={password.value} className="bg-black border border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[88%] pt-4 mb-5 pb-4 p-2.5" placeholder="Set a password" />
            <input type="password"  onChange={handlerConfirm} value={cpassword.value} className="bg-black border border-gray-300 text-white text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[88%] pt-4 mb-5 pb-4 p-2.5" placeholder="Confirm password" />
    </div>
    </Signup>
  )
}

export default Register