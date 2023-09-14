import React from 'react'
import Image from 'next/image'
import Bubble from '../../../public/bubble.svg'
import web from '../../../public/1.png'

const projects = [
  {
    name:"Neomorphism Design Website",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lore Ipsum has been the industry standard dummy text",
    image: web
  },
  {
    name:"Neomorphism Design Website",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lore Ipsum has been the industry standard dummy text",
    image: web
  },
  {
    name:"Neomorphism Design Website",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lore Ipsum has been the industry standard dummy text",
    image: web
  }
]

export default function Projects() {
  return (
    <div className='projectContainer'>
      <div className="projectWrapper">
      <div className="projectContent-1">
            <Image src={Bubble} alt='bubble image' className='bubble' />
            <h1 className='projectTitle'>My Works</h1>
         <p className='projectDesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

      {projects.map((project, index) => (
        <div className="projectContent-2" key={index}>
        <div className="projectDetail-2">
           <h1>{project.name}</h1>
           <p>{project.desc}</p>
           <button>View More</button>
        </div>
        <div className="projectImageContainer">
           <Image src={project.image} alt='websie image' className='projectImage'/>
        </div>
     </div>
      ))}

      </div>
      
    </div>
  )
}
