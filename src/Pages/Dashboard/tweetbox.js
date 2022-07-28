import React from 'react'

const Tweetbox = (props) => {
  return (
    <div className="space-y-1 text-sm h-[40vh] mt-20  text-gray-300  font-bold ">
    <textarea
      autoFocus={true}
      onChange={props.onChange}
      value={props.value}
      type="search"
      id="default-search"
      className={`block p-4 resize-none scrollbar-hide lg:w-[32rem] md:w-[52vw] flex-1 w-[72vw]  h-[20vh] rounded-md font-normal text-white ${props.background}   border-gray-300 mb-2 outline-none focus:bg-neutral-700 `}
      placeholder="Whats Happening?"
      required
    />

    <div className="text-sm text-gray-500">@{props.user}</div>
    <button
      type="button"
      onClick={props.onClick}
      className="text-white float-right bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50  rounded-full text-md  font-bold px-2 py-1 w-24 justify-center inline-flex mr-2 mb-6"
    >
      {props.title}
    </button>
  </div>
  )
}

export default Tweetbox