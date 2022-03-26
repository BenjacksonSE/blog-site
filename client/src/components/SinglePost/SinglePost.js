import './SinglePost.css'
import {useEffect, useState} from 'react';
import { useLocation} from 'react-router'
import axios from 'axios';
import {FaRegEdit, FaRegTrashAlt} from 'react-icons/fa'
import {Link} from "react-router-dom";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const PF = 'http://localhost:3000/images/';
  useEffect(() =>{
    const getPost = async ()=>{
      const res = await axios.get("/posts/" + path);
      setPost(res.data)
    }
    getPost();
  }, [path])

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {PF + post.pic &&(
          <img className="singlePostImg" src={post.pic} alt=''/>  
        )}
        <h1 className='singlePostTitle'>
          {post.title}
          <div className='singlePostEdit'>
            <FaRegEdit className='singlePostIcon'/>
            <FaRegTrashAlt className='singlePostIcon'/>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>Author: 
          <Link to={`/?user=${post.username}`} className='link'>
            <b>{post.username}</b>
          </Link></span>
          <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='singlePostDesc'>
          {post.desc}
        </p>
      </div>
    </div>
  )
}

export default SinglePost