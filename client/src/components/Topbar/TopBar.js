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
        <FaTwitter className='topIcon'/>
        <FaGithub className='topIcon'/>
        <FaLinkedin className='topIcon'/>
        <FaInstagram className='topIcon' />
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to="/" className='link'>HOME</Link>
          </li>
          <li className='topListItem'>
            <Link to="/" className='link'>ABOUT</Link>
          </li>
          <li className='topListItem'>
            <Link to="/" className='link'>CONTACT</Link>
          </li>
          <li className='topListItem'>
            <Link to="/write" className='link'>WRITE</Link>
          </li>
          <li className='topListItem' onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {
          user ? (
            <img src='https://avatars.githubusercontent.com/u/91221815?v=4' alt='' className='topImg'/>
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
        
        <FaSearch className='topSearchIcon'/>
      </div>
    </div>
  )
}

export default TopBar