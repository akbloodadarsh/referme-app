import React from 'react'
// import axios from 'axios'
import { useState, useEffect } from "react";
import Post from '../posts/Post';

export default function Home() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API + "api/Posts/get-posts")
      .then((response) => response.json())
      .then((data) => {
        setPostList(data)
      });
    },[]);

  return (
    <div>
      <h1>Home</h1>
      {postList?.map((post) => <Post key={post.id} post = {post} />)}
    </div>
  )
}
