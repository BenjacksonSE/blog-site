import './Sidebar.css'
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import {useState, useEffect} from 'react';
import {axiosInstance} from '../../../utils';
import {Link} from 'react-router-dom'

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    const getCategories = async ()=>{
      const res = await axiosInstance.get("/categories");
      setCategories(res.data)
    }
    getCategories();
  },[])
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          src="http://localhost:3000/images/sidebarImg.jpeg"
          alt=""
          className="sidebarImg"
        />
        <p>
          My name is Ben Jackson, I am a Full Stack software developer based in Brooklyn, New York.  I occasionally write blog posts on new things I’m learning and stuff I find related to tech.  Follow my socials and check out my portfolio!
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
          <a href='https://twitter.com/Benjacksonse' target="_blank" rel="noreferrer" className='sidebarIcon'><FaTwitter/></a>
          <a href='https://github.com/BenjacksonSE' target="_blank" rel="noreferrer" className='sidebarIcon'><FaGithub/></a>
          <a href='https://www.linkedin.com/in/benjamin-jackson-864148225/' target="_blank" rel="noreferrer" className='sidebarIcon'><FaLinkedin/></a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar