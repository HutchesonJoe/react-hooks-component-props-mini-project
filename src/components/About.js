import React from "react";

function About({imageSrc="https://via.placeholder.com/215", about}){
  return(
    <aside>
      <img src={imageSrc} alt ="blog logo" />
      <p>{about}</p>
      </aside>
  )
}

export default About;