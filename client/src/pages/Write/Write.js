import './Write.css'
import {FaPlus} from 'react-icons/fa'
import {useState, useContext} from 'react';
import {Context} from './../../context/Context'; 
import axios from 'axios';

const Write = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username:user.username,
      title,
      desc,
    }
    if(file){
      const data = FormData();
      const filename = Date.now() + file.name;
      data.append('name',filename)
      data.append('file',file)
      newPost.pic = filename;
      try{
        await axios.post('/upload', data)
      }catch(err){

      }
    }
    try{
      const res = await axios.post('/posts', newPost)
      window.location.replace('/post/' + res.data._id)
    }catch(err){

    }
    
  }
  return (
    <div className='write'>
      {file &&(
          <img src={URL.createObjectURL(file)} alt='' className='writeImage'/>
      )}
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <FaPlus className='writeIcon'/>
          </label>
          <input type='file' id='fileInput' style={{display:'none'}}/>
          <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className='writeFormGroup'>
          <textarea placeholder='Write post here...' type='text' className='writeInput writeText'></textarea>
        </div>
        <button className='writeSubmit' type='submit'>Publish</button>
      </form>
    </div>
  )
}

export default Write