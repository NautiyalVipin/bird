import React from 'react'


const ButtonGoogle =({title,handler})=>{
  return ( <div>
    <button type="button"  onClick={handler} className="text-white w-64 pl-14  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-gray-600/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
<svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
{title}
</button> 
    </div>)
}

const ButtonApple = ({title,handler})=>{
  return (<button type="button" onClick={handler}  className="text-black w-64 pl-14 bg-white  hover:bg-white/90 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-full  text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-white/30 mr-2 mb-2">
  <svg className="mr-2 -ml-1  w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
  {title}
</button>

  )
}

const ButtonPlain = ({title,handler})=>{
  return (
<button type="button" onClick={handler}  className="text-[#4285f4] w-64  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-600/50 font-bold rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-[#4285f4] dark:hover:bg-gray-700 mr-2 pl-[6.5rem] mb-2">{title}</button>
  )
}

const ButtonWhite = ({title,onclick})=>{
  return (
    <button type="button" onClick={onclick} className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-full w-64 pl-24 text-sm px-5 py-2.5 text-center inline-flex font-bold items-center mr-2 mb-2">{title}</button>
  )
}

const ButtonTweet =()=>{
  return (<button type="button"  className="text-white w-64 pl-14  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-gray-600/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
  Tweet
  </button> 
  

  )
}

export {ButtonApple,ButtonGoogle,ButtonPlain,ButtonWhite}