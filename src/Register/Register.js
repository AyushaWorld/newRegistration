import axios from 'axios';
import { useState } from 'react';
import UserData from './UserData';

function Register() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const formHandle=()=>{
        alert('you want to Register !')
        let userData={name,email,password};
        let Details = axios.post('https://reqres.in/api/register', {
        email:email,
        name:name,
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
    <div class="rounded d-flex justify-content-center">
       <hr
        style={{
          background: 'lime',
          color: 'lime',
          borderColor: 'lime',
          height: '3px',
        }}
      />
        <div class="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
            <div class="text-center">
                <h3 class="text-primary">Create Account</h3>
            </div>
            <div class="p-4">
                <form action="">
                    <div class="input-group mb-3">
                        <span class="input-group-text bg-primary"><i
                                class="bi bi-person-plus-fill text-white"></i></span>
                        <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control" placeholder="Username" value={name}/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text bg-primary"><i
                                class="bi bi-envelope text-white"></i></span>
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} class="form-control" placeholder="Email" value={email}/>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text bg-primary"><i
                                class="bi bi-key-fill text-white"></i></span>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} class="form-control" placeholder="password" value={password}/>
                    </div>
                    <div class="d-grid col-12 mx-auto">
                        <button onClick={formHandle} class="btn btn-primary" type="button"><span></span> Sign up</button>
                    </div>
                    <p class="text-center mt-3">Already have an account?
                        <span class="text-primary">Sign in</span>
                    </p>
                </form>
                
            </div>
        </div>
         <div><UserData/></div>

    </div>

    
  )
}

export default Register;