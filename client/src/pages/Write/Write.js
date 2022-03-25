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

  const handleSubmit = (e) => {
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
    }
    axios.post('/posts')
  }
  return (
    <div className='write'>
      <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='' className='writeImage'/>
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