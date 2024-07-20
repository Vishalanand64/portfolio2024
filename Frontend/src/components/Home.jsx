import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import myBg from '../assets/myBg.png'
import GitLogo from '../assets/GitLogo.png'
import insta from '../assets/insta.png'
import linkedinLogo from '../assets/linkedinLogo.png'
import twitterLogo from '../assets/twitterLogo.png'
import downloadIcon from '../assets/downloadIcon.png'



const Home = () => {



  return (
    <div className='home-page'>
      <div className='home-container'>
      



        
        <div className="home-left">
        <h1 className='greet'>Hi , I'm <span >Vishal Anand</span></h1>
        <p className='webDev'>Web Developer  |  UI Designer  |  Programmer</p>

        <div className="left-btn-container">
            <button >Hire me</button>
            <button className='btn'>resume <img className='download-icon'  src={downloadIcon} alt="" /></button>
        </div>

        <div className='icon-container'>

       <Link><img src={GitLogo} className='icon' alt="" /></Link> 
        <Link><img src={linkedinLogo} className='icon' alt="" /></Link>
        <Link><img src={twitterLogo} className='icon' alt="" /></Link>
        <Link><img src={insta} className='icon' alt="" /></Link>

        </div>

        </div>
        <div className="home-right">

            <div className="home-right-bg">
                <img src={myBg} loading='lazy' className='myBg' alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
