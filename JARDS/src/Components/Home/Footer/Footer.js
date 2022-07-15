import React from 'react'
import './Footer.css'
import LaunchIcon from '@mui/icons-material/Launch';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (

    <div className='Footer'>
      <div>
        <h3 className='This-Site'> This Site </h3>
        <a href='https://www.ups.com/track?loc=en_US&requester=ST/'><p className='Tracking-1'> Tracking </p></a>
        <a href='src/Components/Shipping/Shipping.js'><p className='Shipping-1'> Shipping </p></a>
        <a href='https://www.ups.com/us/en/support/contact-us.page'><p className='Help'> Help & support </p></a>
        <a href='https://www.ups.com/marketingpreferences?loc=en_US&id=#/enteremail'><p className='Comm'> Communication Perfernces </p></a>
      </div>
      <div>
        <h3 className='Other-Sites'> Other UPS Sites  </h3>
        <a href='https://about.ups.com/us/en/home.html'><p className='About-ups'> About UPS <LaunchIcon className='LaunchIcon'/> </p></a>
        <a href='https://www.ups.com/us/en/supplychain/Home.page'><p className='sys'>  supply Chain solution <LaunchIcon className='LaunchIcon-1'/> </p></a>
        <a href='https://www.theupsstore.com/?loc=en_US'><p className=' Store'> The UPS store <LaunchIcon className='LaunchIcon-2'/> </p></a>
        <a href='https://www.jobs-ups.com/location'><p className=' jobs '>UPS Jobs <LaunchIcon className='LaunchIcon-3'/></p> </a>
      </div>
      <div>
      <h3 className='ConnectwithUs'> Connect with US </h3>
      <a href=''><p className='Facebook'>  <FacebookIcon className='FacebookIcon'/>  Facebook <LaunchIcon className='LaunchIcon-4'/></p></a>
      <a href=''><p className='Twiiter'>  < TwitterIcon className='TwitterIcon'/>  Twiiter <LaunchIcon className='LaunchIcon-5'/></p></a>
      <a href=''><p className='LinkedIn'>  < LinkedInIcon className='LinkedInIcon'/>  LinkedIn <LaunchIcon className='LaunchIcon-5'/></p></a>
      <a href=''><p className='YouTube'>  < YouTubeIcon className='YouTubeIcon'/>  YouTube <LaunchIcon className='LaunchIcon-5'/></p></a>
      
      </div>
    </div>
  )
}

export default Footer