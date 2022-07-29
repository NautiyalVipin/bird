import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  dataSetter,
  dataGetter,
  dataDelete,
  dataUpdate,
} from "../../Components/localStorageStore";
import profilepic from "../../Images/profilepic.jpg";
import Post from "./post";
import Tweetbox from "./tweetbox";
import { searchContext } from "./Dashboard";






const Middlebar = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState(dataGetter("user"))
  const [isUpdating, setIsUdating] = useState(false);
  const [editID,setEditID] = useState("")
  const [msgEditBody,setMsgEditBody] = useState("")
  const [msgBody, setMsgBody] = useState("");
  const [message, setMessage] = useState({
    postID: "",
    contents: "",
    postAuthor: user,
    createdOn: "",
    updatedOn: "",
    profilePic: "",
    postPhotoUrl: "",
    comments:[],
    likes:[]
  });

  const [updatedMessages, setUpdatedMessages] = useState(
    dataGetter("messages")
  );

  useEffect(() => {
    if (msgBody !== "") {
      dataSetter("messages", message);
      setUpdatedMessages(dataGetter("messages"));
      setMsgBody("");
    }
  }, [message]);

  const {searchTerm,setSearchTerm} = useContext(searchContext)
  const searchHandler =()=>{setUpdatedMessages(dataGetter("messages").filter(e=>{
    return e.contents.toLowerCase().includes(searchTerm.toLowerCase())
   }))}
 
 
useEffect(()=>{
  let timer
if(searchTerm!==""){
timer = setTimeout(()=>{
searchHandler()
  },[500])
  }
else{(setUpdatedMessages(dataGetter("messages")))}
return () => clearTimeout(timer)
},[searchTerm])


  const addComment =(obj,id)=>{
    let currentData = dataGetter("messages");
    dataUpdate("messages", currentData.map((e) => {
        if (e.postID === id) {
          e.comments.push(obj);

          return e;
        }
        return e;
      })
    );
    setUpdatedMessages(dataGetter("messages"));
  
  }

  const addLike =(id)=>{
    let currentData = dataGetter("messages");
    dataUpdate("messages", currentData.map((e) => {
      if (e.postID === id) {
        if(e.likes.find(e=>e===user)){
          e.likes.pop(user)
        }
        else{
          e.likes.push(user)
        }
        return e;
      }
      return e;
    })
  );
  setUpdatedMessages(dataGetter("messages"));

  }

  
 

  const isLiked =(id)=>{
    let currentData = dataGetter("messages");
    let element=currentData.find((e) => e.postID === id)
        if(element.likes.find(el=>el===user)){
          return true
        }
        else {
          return false}

  }


  const writeMessage = (e) => {
    setMsgBody(e.target.value);
  };
  const editMessage = (e) => {
    setMsgEditBody(e.target.value);
  };

  const addMessage = () => {
    if (msgBody !== "") {
      setMessage((oldValue) => {
        return {
          ...oldValue,
          postID: user + new Date().getTime(),
          createdOn: new Date().toLocaleString(),
          contents: msgBody,
        };
      });
    } else {
      alert("Please Enter a Messsage!");
    }
  };

  const deleteHandler = (id) => {
    let currentData = dataGetter("messages");
    dataDelete("messages",currentData.filter((e) => e.postID !== id));
    setUpdatedMessages(dataGetter("messages"));
  };

  const startEditHandler = (id)=>{
    setIsUdating(true);
    setEditID(id)
    let element=updatedMessages.find(e=>e.postID===id)
    setMsgEditBody(element.contents)

  }
  const editHandler = () => {
     let currentData = dataGetter("messages");
    dataUpdate("messages", currentData.map((e) => {
        if (e.postID === editID) {e.contents = msgEditBody;
          e.updatedOn=new Date().toLocaleString()
          return e;
        }
        return e;
      })
    );
    setUpdatedMessages(dataGetter("messages"));
    setIsUdating(false)
  };

  const logouthandler = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="bg-black  divide-y divide-gray-700 border-x-[1px] left-[16.5rem] sticky z-20 right-[25rem]  overflow-y-auto scroll-smooth scrollbar-hide h-[200vh] border-gray-700 basis-[40rem]">
      <i title="Logout" onClick={logouthandler} className="fas fa-sign-out-alt text-white float-right mt-5  mr-4 rounded-full"></i>
      <div className={isUpdating ? "flex opacity-10 items-center h-[40vh]  p-2 space-x-4": "flex items-center h-[40vh]  p-2 space-x-4" }>
        <div className="mb-24 flex-shrink-0">
          <img className="w-10 ml-3 h-10  mb-2 rounded-full" src={profilepic} alt="pro"/>
        </div>
        <Tweetbox onChange={writeMessage} onClick={addMessage} value={msgBody} background="bg-black" title="Tweet" user={user}/>
      </div>
      <div>
        <div className={isUpdating ? "divide-y opacity-10 flex flex-col-reverse divide-gray-100 dark:divide-gray-700": " divide-y flex flex-col-reverse divide-gray-100 dark:divide-gray-700"}>
          {updatedMessages?.map((element, index) => {
            let isOwner = element.postAuthor === user;
            return (
              <Post
                isLiked={isLiked(element.postID)}
                addLike ={addLike}
                addComment={addComment}
                key={element.postID}
                postID={element.postID}
                comments={element.comments}
                currentUser={user}
                likes={element.likes}
                username={element.postAuthor}
                createdOn={element.createdOn}
                updatedOn={element.updatedOn}
                profilepic={profilepic}
                contents={element.contents}
                url={element.url}
                photo={index<10?`https://source.unsplash.com/random/?${index}`:""}>
                {isOwner && (
                  <div className="float-right">
                    <button title="edit post" onClick={() => startEditHandler(element.postID)} className="hover:bg-gray-800 mb-1.5 px-2 rounded-full">
                      <i className="fas fa-pencil-alt" style={{ fontSize: "12px", color: "gray" }}></i>
                    </button>
                    <button
                      onClick={() => deleteHandler(element.postID)} title="delete post"
                      className="hover:bg-gray-800 px-2 mb-2  rounded-full">
                      <i className=" 	far fa-trash-alt" style={{ fontSize: "12px", color: "gray" }}></i>
                    </button>
                  </div>
                )}
              </Post>
            );
          })}
        </div>
      </div>
      <div
        className={isUpdating ? "z-50 fixed left-10 top-10 md:top-[28vh] md:right-[32vw] opacity-1 md:left-[30vw]": "hidden"}>
        <Tweetbox onChange={editMessage} onClick={editHandler}
          value={msgEditBody}
          background="bg-neutral-800"
          title="Update"
          user={user}
        />
      </div>
    </div>
  );
};

export default Middlebar;
