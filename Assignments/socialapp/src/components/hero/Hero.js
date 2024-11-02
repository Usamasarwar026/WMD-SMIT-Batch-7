import React from 'react'
import './hero.css'
import Postmodel from '../model/Postmodel';
import Post from '../post/Post';
import Share from '../share/Share';
import post2 from '../../assets/post1.png'
import postimage from '../../assets/screen.png'
import post3 from '../../assets/google.png'
import post4 from '../../assets/asana-template.webp'

function Hero() {
  return (
    <>
    <div className="sharebox">
      <Share/>
    </div>
    <div className="createpost">
        <div className="text">
        <Postmodel/>
        </div>
    </div>
    <div className="feed">
      <Post image={postimage} />
      {/* <Post image={post2}/>
      <Post image={post3} />
      <Post image={postimage} />
      <Post image={post4} />
      <Post image={postimage} />
      <Post image={postimage} /> */}
     
    </div>
        
    </>
  )
}

export default Hero
