import React from "react";

export default function About() {
  return (
    <>
      <div className="container  bg-green-400 text-center text-white p-20 ">
        <h1 className="text-4xl font-bold">ABOUT COMPONENT</h1>
        <div className="line flex items-center  m-5 ">
          <i className="fa-solid fa-star"></i>
        </div>

        <div className="line-1   m-5 ">
          <i className="fa-solid fa-star"></i>
        </div>

        <div className="grid cols-1  md:grid-cols-2  lg:grid-cols-2   mx-auto">
          <div>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
          
          <div>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </div>
        </div>
      </div>
    </>
  );
}
