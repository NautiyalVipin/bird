import React, { useState,useRef } from 'react'
import { dataGetter } from '../../Components/localStorageStore';
import profilepic from "../../Images/profilepic.jpg"
import Tweetbox from './tweetbox'




const Post = (props) => {
  const postID=props.postID;
  const [comment,setComment] = useState("")
  const [isCommenting,setIsCommenting] = useState(false)



  const submitCommentHandler = ()=>{
    if(comment!==""){
    props.addComment({commentID:"",postAuthor:props.currentUser,createdOn:"",updatedOn:"",message:comment},postID)  
    setComment("")
    }
    else{ }

  }

  const addLike = ()=>{
    props.addLike(postID)

  }

  return (
    <a    className="flex py-4  px-3">
<div className="flex-shrink-0  ">
  <img className="w-11 h-11 rounded-full" src={props.profilepic} alt="Jese image"/>
 
</div>
<div className=" w-full">
<div className='flex justify-between'>
    <div className="text-gray-500 text-sm mb-1.5 pl-2 dark:text-gray-400">Message from <span className="font-semibold text-gray-900 dark:text-white">{props.username}</span>: What you think about it?
    <span className="text-xs text-blue-600 mt-1 dark:text-blue-500">{props.updatedOn===""?` posted on: ${props.createdOn}`:` updated on: ${props.updatedOn}`} </span>
    </div> 
    {props.children}
    </div>
  
    
<div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{(props.contents).slice(0,38)}!</h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.contents}</p>
    <img className="object-fit w-full h-96 rounded-lg md:h-60 " src={`https://source.unsplash.com/random/?${props.photo}`} alt=""/>
    <div className='pt-4 flex justify-between  gap-1 '>
    <span>
    <p className='text-white text-xs text-center font-extralight'></p>
      <button onClick={addLike} className={`mt-1  px-1  ${props.isLiked?"bg-red-500 color-black":""} rounded-full `}>  <svg className="h-6 w-5 text-neutral-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
</svg>
</button>
      </span>
      <button onClick={()=>setIsCommenting(e=>!e)} className='  hover:bg-neutral-600 px-1 rounded-full '><svg className="h-6 w-5 text-neutral-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg> </button>
      <button  className='  hover:bg-neutral-600 px-1 rounded-full '><svg className="h-6 w-5 text-neutral-400"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="6" cy="12" r="3" />  <circle cx="18" cy="6" r="3" />  <circle cx="18" cy="18" r="3" />  <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />  <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" /></svg></button>
  </div> 
  <p className='text-neutral-400 text-xs pl-2.5'>{props.likes?props.likes.length+1:""}</p><div className='divide-y p-2 bg-black divide-gray-700 rounded-lg'>
  {isCommenting && props.comments?.map((e,index)=>{
    return(<Comment key={index} postAuthor={e.postAuthor} profilepic={props.profilepic} message={e.message}/>)
  })}</div>

            <section className={`${isCommenting?"":"hidden"} flex flex-col items-end pr-4`}><textarea
      autoFocus={isCommenting}
      onChange={(e)=>setComment(e.target.value)}
      value={comment}
      type="search"
      id="default-search"
      className={`block p-4 resize-none scrollbar-hide lg:w-[40vw] md:w-[48vw]  w-[72vw]  h-[10vh] rounded-md font-normal bg-neutral-800 text-white ${props.background}   border-gray-300 mb-2 outline-none focus:bg-neutral-700 `}
      placeholder="Add a comment"
      required  
    /><div className=''>
    <button onClick={()=>submitCommentHandler()} className='bg-neutral-700 p-1 text-sm text-white float-right  w-20 rounded-full '>Add</button></div></section>
  
</div>
</div>
</a>
  )
}


const Comment =(props) =>{
  return(<div className="block  items-center p-3 sm:flex">
  <img className="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src={props.profilepic} alt="Jese Leos image"/>
  <div className="text-gray-600 dark:text-gray-400">
      <div className="text-base font-normal"><span className="font-medium text-gray-900 dark:text-white">{props.postAuthor}</span></div>
      <div className="text-sm font-normal">{props.message}</div>
  </div>
</div>

  )
}

export default Post