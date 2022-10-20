import React from 'react'
import Post from './Post'

export default function Posts({postList}) {
  console.log(postList);
  return (
    <div>
      {
        postList.map(post => <Post post = {post} /> )
      }
    </div>
  )
}
