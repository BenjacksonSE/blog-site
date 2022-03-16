import './Login.css'

const Login = () => {
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form className='loginForm'>
        <label>Email</label>
          <input className='loginInput' type='text' placeholder='Enter your email...' />
        <label>Email</label>
          <input className='loginInput' type='text' placeholder='Enter your email...' />
        <button className='loginButton'>Login</button>
      </form>
      <button className='loginRegisterButton'>Register</button>
    </div>
  )
}

export default Login