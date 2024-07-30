import React from 'react'
import img1 from './../../assets/imags/port1.png'
import img2 from './../../assets/imags/port2.png'
import img3 from './../../assets/imags/port3.png'


export default function Portfolio() {
  return (
   
    <div className='  text-center text-black p-5 '>
        <h1 className='text-4xl font-bold'>PORTFOLIO COMPONENT</h1>
        <div className="line3 flex items-center  m-5 ">
     <i className="fa-solid fa-star" ></i>
     </div>
     <div className="line-2   m-5 ">
      <i className="fa-solid fa-star" ></i>
     </div>

     
<div className="grid cols-1 md:grid-cols-2  lg:grid-cols-3  gap-4">

    <div className='meal relative overflow-hidden cursor-pointer rounded-2xl'>
    <img className=' max-w-sm rounded-lg' src={img1} alt="port1" />
    <div className="inner absolute flex items-center">
    <i class="fa-solid fa-plus fa-10x text-white m-auto"></i>
    </div>
    </div>
    <div className='meal relative overflow-hidden cursor-pointer rounded-2xl'>
    <img className=' max-w-sm rounded-lg' src={img2} alt="port2" />
    <div className="inner absolute flex items-center">
    <i class="fa-solid fa-plus fa-10x text-white m-auto"></i>
    </div>
    </div>
    <div className='meal relative overflow-hidden cursor-pointer rounded-2xl'>
    <img className=' max-w-sm rounded-lg' src={img3} alt="port3" />
    <div className="inner absolute flex items-center">
    <i class="fa-solid fa-plus fa-10x text-white m-auto"></i>
    </div>
    </div>
    <div className='meal relative overflow-hidden cursor-pointer rounded-2xl'>
    <img className=' max-w-sm rounded-lg' src={img1} alt="port1" />
    <div className="inner absolute flex items-center">
    <i class="fa-solid fa-plus fa-10x text-white m-auto "></i>
    </div>
    </div>
    <div className='meal relative overflow-hidden cursor-pointer rounded-2xl'>
    <img className=' max-w-sm rounded-lg' src={img2} alt="port2" />
    <div className="inner absolute flex items-center">
    <i class="fa-solid fa-plus fa-10x text-white  m-auto"></i>
    </div>
    </div>
    <div className='meal relative overflow-hidden cursor-pointer rounded-2xl'>
    <img className=' max-w-sm rounded-lg' src={img3} alt="port3" />
    <div className="inner absolute flex items-center">
    <i class="fa-solid fa-plus fa-10x text-white m-auto"></i>
    </div>
    </div>
   



</div>

      
    </div>
  )
}
