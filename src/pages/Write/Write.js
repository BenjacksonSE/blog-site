import './Write.css'
import {FaPlus} from 'react-icons/fa'

const Write = () => {
  return (
    <div className='write'>
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