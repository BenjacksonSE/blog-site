import './SinglePost.css'
import { useLocation} from 'react-router'
import {FaRegEdit, FaRegTrashAlt} from 'react-icons/fa'

const SinglePost = () => {
  const location = useLocation();
  console.log(location.pathname.split('/')[2]);
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img className="singlePostImg" src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
        <h1 className='singlePostTitle'>
          Lorem ipsum et alta doris
          <div className='singlePostEdit'>
            <FaRegEdit className='singlePostIcon'/>
            <FaRegTrashAlt className='singlePostIcon'/>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>Author: <b>Ben Jackson</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum eros nibh, a pharetra orci congue in. Maecenas elementum diam ac tortor interdum, non sagittis enim iaculis. Curabitur hendrerit dictum accumsan. Pellentesque sodales massa at dolor ornare, sit amet dignissim lorem imperdiet. Phasellus ultrices fermentum tellus. In iaculis enim ac nisl fringilla pretium. Curabitur magna diam, mollis sed vulputate eget, lobortis vitae diam. Quisque at lectus nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque semper a nunc eu finibus. Curabitur imperdiet id lectus eget convallis. Etiam rutrum sed velit a porttitor. In eleifend massa et orci rutrum dapibus. Sed aliquam magna sem, ac maximus nisl varius at. Mauris maximus, massa sed pharetra lacinia, sapien neque accumsan nisi, id tincidunt ante urna a nisl. Suspendisse bibendum nec quam sed interdum. Praesent accumsan justo lectus, ac hendrerit lorem fringilla et. Donec sit amet eleifend felis. Duis iaculis metus diam, vel congue metus iaculis id. Nam tempor lacinia augue, eget bibendum magna lobortis vel. Nullam feugiat lorem dui, eu tempus neque efficitur non. Ut auctor libero velit, ac molestie urna vulputate vitae. Cras non nunc eu mi consequat varius quis non nunc. In placerat, mauris quis pulvinar gravida, massa odio pharetra est, vitae imperdiet nulla ante sed massa. Quisque pharetra mi ornare, ultrices turpis vitae, consectetur est. Integer vulputate arcu quis odio euismod ornare.
        </p>
      </div>
    </div>
  )
}

export default SinglePost