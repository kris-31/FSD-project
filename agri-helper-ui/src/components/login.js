import React from 'react'
import Logincss from '../css/Login.css'

const Login = () => {
  return (
    <div className="login-form">
    <form action="/examples/actions/confirmation.php" method="post">
      <p className="text-center heading">Agri Planning</p>
      <p className="pull-left">
        Sign in 
      </p>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Email or mobile number"
        
          required="required"
        />
      </div>
      <div className="form-group pass">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          
          required="required"
        />
      </div>
      <div className="form-group pass">
        <button
          type="submit"
          className="btn btn-block btn-cust"
         
        >
          Log in
        </button>
      </div>
      {/* <div className="clearfix">
          <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
          <a href="#" className="pull-right">Forgot Password?</a> 
      </div>         */}
      <p className="text-center linktofruitbasket">
        New User ? Sign Up{" "}
        
      </p>
    </form>
  </div>
  )
}

export default Login
