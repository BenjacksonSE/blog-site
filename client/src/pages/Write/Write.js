import './Write.css'
import {FaPlus} from 'react-icons/fa'

const Write = () => {
  return (
    <div className='write'>
      <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt='' className='writeImage'/>
      <form className='writeForm'>
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
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}

export default Write