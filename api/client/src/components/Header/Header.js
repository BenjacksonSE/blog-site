import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>Ben Jackson</span>
        <span className='headerTitleLg'>Tech Blog</span>
      </div>
      <div className="buffer"></div>
      {/* <img className='headerImg' src="https://s3.amazonaws.com/stockfreedom/wp-content/uploads/2018/02/23164928/ti01105005sm.jpg" alt=''/> */}
    </div>
  )
}

export default Header