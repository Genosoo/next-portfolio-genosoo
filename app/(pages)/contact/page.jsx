import React from 'react'
import Bubble from '../../../public/bubble.svg'
import Image from 'next/image'
import ContactImage from '../../../public/contact-image.svg'

export default function Contact() {
  return (
    <div className='contactContainer'>
      <div className="contactContent">
        <Image src={Bubble} alt='bubble' className='bubble' />
        <h1 className='contactTitle'>CONTACT ME</h1>
        <div className="contactBox">
           <p>
           Need to get in touch with me? Just fill out the form and hit a message with me. or just click on the right side of footer and you can see my social media you can also direct message there.
           </p>
        </div>
        <Image src={ContactImage} alt='contact image' className='contactIma' />
      </div>

      <div className="contactFormContainer">
         <form className='formContact'>
             <div>
              <label>
                <span>Firstname</span>
                <input type="text" />
              </label>

              <label>
                  <span>Lastname</span>
                  <input type="text" />
              </label>

             </div>
             <label>
              <span>Email Address</span>
               <input type="email" />
             </label>

             <label>
              <span>Message</span>
               <textarea  cols="30" rows="40" />
             </label>
         </form>
      </div>
    </div>
  )
}
