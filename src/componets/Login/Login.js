import React,{useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FirebaseContext } from "../../store/firebaseContext";

function Signup() {

  const [email,setEmail] = useState('')
  const [password,setPassord] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()
  

  const handleSubmit = (e) =>{
    e.preventDefault()

    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        navigate("/home")
      }).catch((err)=>{
        alert(err.message)
      })

  }



  return (
    <div className="signup-box">
      <div className="signup-box-sub">
          <h1>Login</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <label htmlFor="email">Email : </label>
          <input 
          type="email" 
          name="" 
          id="email" 
          value={email} 
          placeholder="Enter a Email ID"
          onChange={(e)=>setEmail(e.target.value)}/>
          <br />
          <label htmlFor="Password">Password : </label>
          <input 
          type="password" 
          id="Password" 
          value={password} 
          placeholder="Create a Password"
          onChange={(e)=>setPassord(e.target.value)}/>
          <br/>
          <br />
          <button type="submit" id="signup-b">Login</button>
          <br />
          <br />
          <br />
          <a id="submit-b">Create an acount!</a>
        </form>
      </div>
    </div>
  );
}

export default Signup;
