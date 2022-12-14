import React from 'react'
import { useState, useEffect } from "react";
import Post from '../posts/Post';
import '../../css/home/home.css'
import CreatePost from '../create-post/CreatePost';

export default function Home({userId}) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API + "api/Posts/get-posts")
      .then((response) => response.json())
      .then((data) => {
        setPostList(data)
      });
    },[]);

  return (
    <div className='home-css'>
      <div className='home-left-css'>
      
      </div>
      <div className='home-center-css'>
        <CreatePost userId={userId} setPostList={setPostList} />
        {postList?.map((post) => <Post key={post.id} post = {post} />)}
      </div>
    
      <div className='home-right-css'>

      </div>
    </div>
  )
}
