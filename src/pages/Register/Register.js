import './Register.css'

const Register = () => {
  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm'>
        <label>Username</label>
          <input className='registerInput' type='text' placeholder='Enter your username...' />
        <label>Email</label>
          <input className='registerInput' type='text' placeholder='Enter your email...' /> 
        <label>Email</label>
          <input className='registerInput' type='text' placeholder='Enter your email...' />
        <button className='registerButton'>Register</button>
      </form>
      <button className='registerLoginButton'>Login</button>
    </div>
  )
}

export default Register