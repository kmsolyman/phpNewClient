import React, { useState } from "react"
import axios from 'axios'
 
function Profile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [salary, setSalary] = useState("");
    const [file, setFile] = useState()
    const [msg, setMsg] = useState("");
       
    const upload = () => {
        const formData = new FormData()
        formData.append("name", name);
        formData.append("email", email);
        formData.append("address", address);
        formData.append("salary", salary);
        formData.append('file', file)
        axios.post('http://localhost:8080/create',formData )
        .then((res) => {
            console.log(res);
            if(res.data.Status === 'Success') {
                setMsg("File Successfully Uploaded");
            }else{
                setMsg("Error");
            }
        })
        .catch(err => console.log(err))
    }
    return (
    <div className="container" style={{paddingTop: 60}}>
    <div className="row"><h1>React JS Node Express JS Upload File with Mysql Insert data</h1>
        <div className="col-12">
            <label className="form-label">Name</label>
            <input type="text" 
            className="form-control"
             placeholder='Enter Name' 
             autoComplete='off'
            onChange={(e) => setName(e.target.value)}/> 
        </div>
        <div className="col-12">
            <label className="form-label">Email</label>
            <input type="text" 
            className="form-control"
             placeholder='Enter Email'
              autoComplete='off'
            onChange={(e) => setEmail(e.target.value)}/> 
        </div>
        <div className="col-12">
            <label className="form-label">Address</label>
            <input type="text" 
            className="form-control"
             placeholder='Enter Address' 
             autoComplete='off'
            onChange={(e) => setAddress(e.target.value)}/> 
        </div>
        <div className="col-12">
            <label className="form-label">Salary</label>
            <input type="Number"
             className="form-control"
              placeholder='Enter salary' 
              autoComplete='off'
            onChange={(e) => setSalary(e.target.value)}/> 
        </div>
                 
        <div className="col-12">
          <label className="form-label">Upload File</label>
          <input className="form-control form-control-lg" 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])}/>
        </div>
         
      <button type="button" 
      className="btn btn-primary btn-lg" 
      onClick={upload} style={{marginTop: '20px'}}>Upload</button>
      <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{msg}</h1>
    </div>
    </div>
  )
}
 
export default Profile;


// import React, { } from "react";
// import EditProfiles from "../Components/profile/EditProfiles/EditProfiles"

// export default function Profile(){
//     return(
//       <div className="container" style={{paddingTop: 60}}>
//         <div className="row">
//             <div style = {{minHeight: 800, marginTop: 20 }}>
//                 <h1>Profile Page</h1>
//                 <p>Hi, this is your profile</p>
//                   <EditProfiles />
//             </div>
//         </div>  
//       </div>
//     )
// }