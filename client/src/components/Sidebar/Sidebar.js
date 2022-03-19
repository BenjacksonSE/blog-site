import './Sidebar.css'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    const getCategories = async ()=>{
      const res = await axios.get("/categories");
      setCategories(res.data)
    }
    getCategories();
  },[])
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
          {categories.map((c)=>(
            <Link to={`/?category=${c.name}`} className='link'>
              <li className='sidebarListItem'>{c.name}</li>
            </Link>
          ))}
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