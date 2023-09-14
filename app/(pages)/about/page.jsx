import React from 'react'
import Image from 'next/image'
import Bubble from '../../../public/bubble.svg'
import MyImage from '../../../public/Myimage.jpg'
import Link from 'next/link'

export default function About() {
  return (
    <div className='aboutContainer'>
        <div className="aboutContent-1">
            <div className="aboutTitleWrapper">
                 <Image src={Bubble} alt='bubble image' className='bubble' />
                 <h1 className='aboutTitle'>About Me</h1>
            </div>

            <div className="aboutDetailWrapper">
                <div className="aboutDetail">
                    <h3>Geno Ureta</h3>
                    <h4>Web Developer</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. </p>
                    <Link href={'/about/aboutme'} className='aboutReadMorebtn'>Read More</Link>
                </div>
                <div className="aboutImageContainer">
                    <Image src={MyImage} alt='me' className='myImage'  />
                </div>
            </div>
           
        </div>

        
    </div>
  )
}
