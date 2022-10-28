import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import TimelapseIcon from '@mui/icons-material/Timelapse';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Avatar from '@mui/material/Avatar';
import '../../css/post/post.css';

export default function Post({post}) {

  return (
    <div className='post-css'>
      <div className='post-header-css' />
      <Card className='post-inner-css'>
        <div className='post-left-css'>
          <div>
            <Avatar 
              alt={post.for_company} 
              src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg"  
              sx=
                {{
                  width: '10vw', 
                  height: '10vh'
                }}
            />
            <Typography className='post-left-details-css'>
              <div>
                <div className='post-left-details-sub-heading-css'>Position {post.position} </div>
              </div>
              <div>
                <div className='post-left-details-sub-heading-css'>Role {post.role} </div>
              </div>
              <div>
                <div>Minimum Experience {post.experience_required}</div>
              </div>
              <div>
                <BusinessIcon /> <span className='post-left-details-items-css'>{post.for_company}</span>
              </div>
              <div>
                <LocationOnIcon /> <span className='post-left-details-items-css'>{post.job_location_city}, {post.job_location_country}</span>
              </div>
              <div>
                <TimelapseIcon /> <span className='post-left-details-items-css'>Expiry {post.delete_on}</span>
              </div>
            </Typography>
          </div>
        </div>
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
