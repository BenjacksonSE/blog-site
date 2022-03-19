import './SinglePost.css'
import {useEffect, useState} from 'react';
import { useLocation} from 'react-router'
import axios from 'axios';
import {FaRegEdit, FaRegTrashAlt} from 'react-icons/fa'

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
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
        {post.pic &&(
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
          <span className='singlePostAuthor'>Author: <b>{post.username}</b></span>
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