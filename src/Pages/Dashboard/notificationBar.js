import React, { useEffect, useState } from 'react'





const NotificationBar = () => {

  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,SetError] = useState(false)
  useEffect(()=>{
    let fetchdata =  async()=>{
      setLoading(true)
      try {
        let res = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
        let data= await res.json()
        setArticles(data)
        setLoading(false)
        SetError(false)
        
      } catch (error) {
        SetError(true)
        
      }
      
    }

    fetchdata()
  },[])


  return (
    <div className="divide-y h-[200vh] scroll-smooth  divide-gray-100 dark:divide-gray-700">
<h1 className="text-white p-4 w-80 rounded-lg font-semibold absolute bg-[#202327] ">What's happening</h1>
<div className='pt-12 p-2 divide-y divide-gray-700 '>
{loading?"...Loading":error?"...error":articles.map(e=>{

return (
 <NewsCard
    key={e.url}
    url={e.url}
    publishedAt={e.publishedAt}
    title={e.title}
    imageUrl={e.imageUrl}
    newsSite={e.newsSite}
 
 />
)
})}
</div>
</div>
  )
}


const NewsCard = (props)=>{
  return(
    <a href={props.url} className="flex py-3 px-1  hover:bg-gray-100 dark:hover:bg-gray-700">

  <div className="pl-2 w-full">
      <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">News from <span className="font-semibold text-gray-900 dark:text-white">{props.newsSite}:&nbsp;</span>{props.title}</div>
      <div className="text-xs text-blue-600 dark:text-blue-500">{(props.publishedAt).slice(0,10)}</div>
  </div>
  <div className="flex-shrink-0">
    <img className="w-11 h-11 " src={props.imageUrl} alt="news image"/>
  
  </div>
</a>
  )
}

export default NotificationBar