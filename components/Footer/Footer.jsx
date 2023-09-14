import {BsFacebook, BsGithub} from 'react-icons/bs'
import {BiLogoInstagramAlt} from 'react-icons/bi'


export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="leftContent">
         <span>Ⓒ2023 genoureta, All rights reserved.</span>
      </div>
      <div className="rightContent">
         <div className="socialMediaWrapper">
           <a href='https://www.facebook.com/genojo.ureta/' target="_blank">
              <BsFacebook/>
           </a>
         </div>
         <div className="socialMediaWrapper">
           <a href='/'>
              <BiLogoInstagramAlt/>
           </a>
         </div>
         <div className="socialMediaWrapper">
           <a href='/'>
              <BsGithub />
           </a>
         </div>
      </div>
    </div>
  )
}
