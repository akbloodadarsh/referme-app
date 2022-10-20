import React from 'react'
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../../css/post/post.css';

export default function Post({post}) {
  console.log(post);

  return (
    <div className='post-css'>
      <div className='post-cap-css' />
      <Card className='post-inner-background-css'>
        <CardContent className='post-left-css'>
          <Typography className='post-left-details-css'>
            <Avatar alt={post.for_company} src="/static/images/avatar/1.jpg" />
            <div>
              <div className='post-left-details-sub-heading-css'>Position</div> {post.position}
            </div>
            <div>
              <TimelapseIcon /> {post.delete_on}
            </div>
            <div>
              <div className='post-left-details-sub-heading-css'>Experience Required</div>{post.experience_required}
            </div>
            <div>
              <BusinessIcon /> {post.for_company}
            </div>
            <div><LocationOnIcon /> {post.job_location_city}{post.job_location_country}</div>
          </Typography>
        </CardContent>
        <CardContent className='post-right-css'>
          <Typography className='post-right-details-css'>
            <div className='post-right-details-header-css'>Post Description</div>
            <div className='post-right-details-description-css'>
              {post.post_description}
            </div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
