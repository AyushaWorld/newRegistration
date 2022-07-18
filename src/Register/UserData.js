import axios from 'axios';
import { useState,useEffect } from 'react';

function UserData() {
   const [details,setDetails] = useState({});
    console.log("000000",details);
    
    useEffect(() => {
        axios.get('https://reqres.in/api/users/2').then((response) => {
            setDetails(response.data.data);
            console.log("ddddddd",response.data.data);
        });
     }, []);

    // const loginHandle=()=>{
    //     alert('Are you sure to login !')
    //     // let UserData={email,password};

    //     axios.get('https://reqres.in/api/users/2', {
    //         params: {
    //           ID: 12345
    //         }
    //       })
    //       .then(function (response) {
    //         console.log(response);
    //       })

    //     // let Details = axios.get('https://reqres.in/api/users/2', {
    //     // email:email,
    //     // password:password
    //     // })
    //     //   .then(function (response) {
    //     //     console.log("response",response);
    //     //   })
    //     //   .catch(function (error) {
    //     //     console.log(error);
    //     //   });
    // }

  return (
    <div>
     <hr
        style={{
          background: 'lime',
          color: 'lime',
          borderColor: 'lime',
          height: '3px',
        }}
        />
        
    <h1>Show UserData</h1>

    <form style={{ padding:"2rem" }}>
    {/* <!-- Email input --> */}
    <div class="form-outline mb-4">
      <input type="email" id="form2Example1" class="form-control" value={details.email} />
      <label class="form-label" for="form2Example1">Email address</label>
    </div>

    <div class="form-outline mb-4">
      <input type="text" id="form2Example1" class="form-control" value={details.first_name} />
      <label class="form-label" for="form2Example1">Email address</label>
    </div>
  
    <div class="form-outline mb-4">
      <input type="text" id="form2Example2" class="form-control" value={details.last_name}/>
      <label class="form-label" for="form2Example2">Password</label>
    </div>
  
    {/* <!-- Submit button --> */}
    <button type="button" class="btn btn-primary btn-block mb-4">Add User</button>
  
    
  </form>
    </div>
  )
}

export default UserData;