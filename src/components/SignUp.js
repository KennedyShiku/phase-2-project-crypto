import '../Signup.css'

const SignUp = () => {
  return ( 
    <div className='main-form'>
      <div className="form-box">
        <form className="form">
          <span className="title">Sign up</span>
          <span className="subtitle">Create a free account with your email.</span>
          <div className="form-container">
            <input type="text" className="input" placeholder="Full Name" required/>
            <input type="email" className="input" placeholder="Email" required/>
            <input type="password" className="input" placeholder="Password" required/>
          </div>
          <button>Sign up</button>
        </form>
        <div className="form-section">
          <p>Have an account? <a href="/">Log in</a> </p>
        </div>
      </div>
    </div>
   );
}
 
export default SignUp;