import './Topbar.css'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaSearch } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className='top'>
      <div className='topLeft'>
        <FaTwitter className='topIcon'/>
        <FaGithub className='topIcon'/>
        <FaLinkedin className='topIcon'/>
        <FaInstagram className='topIcon' />
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>HOME</li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
          <li className='topListItem'>WRITE</li>
          <li className='topListItem'>LOGOUT</li>
        </ul>
      </div>
      <div className='topRight'>
        <img src='https://avatars.githubusercontent.com/u/91221815?v=4' alt='' className='topImg'/>
        <FaSearch className='topSearchIcon'/>
      </div>
    </div>
  )
}

export default TopBar