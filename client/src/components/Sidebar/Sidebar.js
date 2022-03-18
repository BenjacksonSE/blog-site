import './Sidebar.css'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>Style</li>
          <li className='sidebarListItem'>Sport</li>
          <li className='sidebarListItem'>Tech</li>
          <li className='sidebarListItem'>Movies</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className='sidebarTitle'>FOLLOW ME</span>
        <div className='sidebarSocials'>
          <FaTwitter className='sidebarIcon'/>
          <FaGithub className='sidebarIcon'/>
          <FaLinkedin className='sidebarIcon'/>
          <FaInstagram className='sidebarIcon' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar