import './Post.css'

const Post = () => {
  return (
    <div className='post'>
      <img className="postImg" src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt=''/>
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>
          Lorem ipsum dolor sit amer
        </span>
        <hr/>
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. ad nescuiunt minus accusamus magni quarat cumque blanditiis, maiores vero sed nihil sapiente accusantium soluta aliquid facere excepturi! Cupidaitate, earum! Molestiae, voluptatum?
      </p>
    </div>
  )
}

export default Post