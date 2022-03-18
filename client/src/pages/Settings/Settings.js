import Sidebar from '../../components/Sidebar/Sidebar'
import './Settings.css'
import {FaRegUserCircle} from 'react-icons/fa'

const Settings = () => {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Your Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsProfilePic'>
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <FaRegUserCircle className='settingsProfilePicIcon'/>
            </label>
            <input type='file' id='fileInput' style={{display: "none"}}/>
          </div>
          <label>Username</label>
            <input type='text' placeholder='Username'/>
          <label>Email</label>
            <input type='text' placeholder='Email'/>
          <label>Password</label>
            <input type='password'/>
          <button className='settingsSubmit'>Update Profile</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings