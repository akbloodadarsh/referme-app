import React from 'react'
import { useState, useEffect } from "react";
import Post from '../posts/Post';
import '../../css/refermefor/refermefor.css'
import FilterBox from '../filter-box/FilterBox';

export default function ReferMeFor() {
  const [postList, setPostList] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    experience : 0,
    company : '',
    position : '',
    country : '',
    city : '',
    role : ''
  });

  useEffect(() => {
    fetch(process.env.REACT_APP_API + "api/Posts/get-posts")
      .then((response) => response.json())
      .then((data) => {
        setPostList(data)
      });
    },[]);

    async function handleClick() {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          {
            "post_id": "",
            "user_id": "",
            "post_description": "",
            "delete_on": "",
            "for_company": filterCriteria.company,
            "position": filterCriteria.position,
            "role": filterCriteria.role,
            "experience_required": filterCriteria.experience,
            "job_location_country": filterCriteria.country,
            "job_location_city": filterCriteria.city
          }
        )
      };
      await fetch(process.env.REACT_APP_API + "api/Posts/get-filtered-posts", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPostList(data)
      });
    }

  return (
    <div className='refermefor-css'>
      <div className='refermefor-left-css'>
        <FilterBox setFilterCriteria={setFilterCriteria} filterCriteria={filterCriteria} handleClick ={handleClick} setPostList={setPostList} />
      </div>

      <div className='refermefor-center-css'>
        {postList?.map((post) => <Post key={post.id} post = {post} />)}
      </div>
    
      <div className='refermefor-right-css'>

      </div>
    </div>
  )
}
