import { Link } from "react-router-dom";
import './Topbar.css'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaSearch } from 'react-icons/fa';
import {useContext} from 'react';
import { Context } from "../../context/Context";

const TopBar = () => {
  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({type:'LOGOUT'});
  }
  return (
    <div className='top'>
      <div className='topLeft'>
        <a href='https://twitter.com/Benjacksonse' target="_blank" rel="noreferrer" className='topIcon'><FaTwitter/></a>
        <a href='https://github.com/BenjacksonSE' target="_blank" rel="noreferrer" className='topIcon'><FaGithub/></a>
        <a href='https://www.linkedin.com/in/benjamin-jackson-864148225/' target="_blank" rel="noreferrer" className='topIcon'><FaLinkedin/></a>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to="/" className='link'>HOME</Link>
          </li>
          <li className='topListItem'>
            <a href='https://benjacksonse.com/' target="_blank" rel="noreferrer" className='link'>PORTFOLIO</a>
          </li>
          <li className='topListItem'>
            <Link to="/write" className='link'>NEW POST</Link>
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {
          user ? (
            <>
              <img src={user.profilepic} alt='' className='topImg'/>
              {/* <div className='topUsername'>{user.username}</div> */}
              <div className='topListItem topLogout' onClick={handleLogout}>
                LOGOUT
              </div>
            </>
          ) : (
            <ul className='topList'>
              <li className='topListItem'>
                <Link to="/login" className='link'>LOGIN</Link>
              </li>
              <li className='topListItem'>
                <Link to="/register" className='link'>REGISTER</Link>
              </li>
            </ul>  
          )
        }
        
        {/* <FaSearch className='topSearchIcon'/> */}
      </div>
    </div>
  )
}

export default TopBar