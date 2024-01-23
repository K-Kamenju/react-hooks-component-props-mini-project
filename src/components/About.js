import React from 'react'

function About({image, about}) {
  return (
    <aside>
        <img src={image} alt='Blog Logo'  />
        <p>{about}</p>
    </aside>
  )
}

export default About