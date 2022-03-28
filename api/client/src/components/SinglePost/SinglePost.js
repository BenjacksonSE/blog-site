import './SinglePost.css'
import {useEffect, useState, useContext} from 'react';
import { useLocation} from 'react-router'
import {axiosInstance} from '../../../utils';
import {FaRegEdit, FaRegTrashAlt} from 'react-icons/fa'
import {Link} from "react-router-dom";
import {Context} from '../../context/Context'; 

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const PF = 'http://localhost:3000/images/';
  const {user} = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [editMode, setEditmode] = useState(false);
  useEffect(() =>{
    const getPost = async ()=>{
      const res = await axiosInstance.get("/posts/" + path);
      setPost(res.data)
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }
    getPost();
  }, [path]);

  const handleDelete = async () =>{
    try{
      await axiosInstance.delete("/posts/" + path, {data:{username:user.username}});
       window.location.replace('/');
    }catch(err){

    }
  }

  const handleUpdate = async () => {
    try{
      await axiosInstance.put("/posts/" + path, {username:user.username, title, desc});
       window.location.reload();
    }catch(err){

    }
  }

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {PF + post.photo &&(
          <img className="singlePostImg" src={PF + post.photo} alt=''/>  
        )}
        {editMode ? <input type='text' value={title} className='singlePostTitleInput' onChange={(e)=>setTitle(e.target.value)}/> : (
          <h1 className='singlePostTitle'>
          {title}
          {post.username === user?.username &&(
            <div className='singlePostEdit'>
              <FaRegEdit className='singlePostIcon' onClick={()=>setEditmode(true)}/>
              <FaRegTrashAlt className='singlePostIcon' onClick={handleDelete}/>
            </div>
          )}
          </h1>
        )}
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>Author: 
          <Link to={`/?user=${post.username}`} className='link'>
            <b>{post.username}</b>
          </Link></span>
          <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {editMode ? (
          <textarea className='singlePostDescInput' value={desc} onChange={(e)=>setDesc(e.target.value)}/>) : (
          <p className='singlePostDesc'>
            {desc}
          </p>
          )}
          {editMode && <button className='singlePostButton' onClick={handleUpdate}>Save Changes</button>}
             
      </div>
    </div>
  )
}

export default SinglePost