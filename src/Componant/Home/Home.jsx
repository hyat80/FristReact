import React from 'react'
import avatar from './../../assets/imags/avatar.png'
export default function Home() {
  return (
    <>
    <div className='  bg-green-400 text-center text-white p-5 '>
      <img className='m-auto' src={avatar} alt="avatar" />
     <h1 className='text-4xl font-bold'>START FRAMEWORK</h1>
     <div className="line flex items-center  m-5 ">
     <i className="fa-solid fa-star" ></i>
     </div>
     <div className="line-1 m-5 ">
      <i className="fa-solid fa-star" ></i>
     </div> 
     
<p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>
  )
}