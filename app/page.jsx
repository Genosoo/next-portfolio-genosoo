import Image from 'next/image'
import HomeImage from '../public/Home-image.svg'

export default function Home() {
  return (
    <div className="homeContainer">
       <div className="homeImageContainer">
         <Image 
            src={HomeImage}
            alt='Home Image'
            className="homeImage"
         />
       </div>

       <div className="homeContent">
           <h1 className='hello'>Hello!</h1>
           <h3 className='me'>I am Geno Ureta</h3>
           <h2 className='web-developer'>Web Developer</h2>
       </div>
    </div>
  )
}
