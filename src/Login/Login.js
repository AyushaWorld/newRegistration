import { useState } from 'react';
import axios from 'axios';

function Login() {
   const [email,setEmail] = useState();
   const [password,setPassword] = useState();

    const loginHandle=()=>{
        alert('Are you sure to login !')
        let userData={email,password};
        let Details = axios.post('https://reqres.in/api/login', {
        email:email,
        password:password
        })
          .then(function (response) {
            console.log("response",response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

  return (
  
    <form style={{ padding:"2rem" }}>
    {/* <!-- Email input --> */}
    <div class="form-outline mb-4">
      <input type="email" onChange={(e)=>setEmail(e.target.value)} id="form2Example1" class="form-control" value={email} />
      <label class="form-label" for="form2Example1">Email address</label>
    </div>
  
    <div class="form-outline mb-4">
      <input type="password" onChange={(e)=>setPassword(e.target.value)} id="form2Example2" class="form-control" value={password}/>
      <label class="form-label" for="form2Example2">Password</label>
    </div>
  
    {/* <!-- 2 column grid layout for inline styling --> */}
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
        {/* <!-- Checkbox --> */}
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
          <label class="form-check-label" for="form2Example31"> Remember me </label>
        </div>
      </div>
  
      <div class="col">
        {/* <!-- Simple link --> */}
        <a href="#!">Forgot password?</a>
      </div>
    </div>
  
    {/* <!-- Submit button --> */}
    <button type="button" onClick={loginHandle} class="btn btn-primary btn-block mb-4">Sign in</button>
  
    {/* <!-- Register buttons --> */}
    <div class="text-center">
      <p>Not a member? <a href="#!">Register</a></p>
      <p>or sign up with:</p>
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-facebook-f"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-google"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-twitter"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-github"></i>
      </button>
    </div>
  </form>
  )
}

export default Login;