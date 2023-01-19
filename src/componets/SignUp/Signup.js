import React,{useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { FirebaseContext } from "../../store/firebaseContext";

function Signup() {

  const [username,setName] = useState('')
  const [phone,setPhone] = useState('') 
  const [email,setEmail] = useState('')
  const [password,setPassord] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()
  

  const handleSubmit = (e) =>{
    e.preventDefault()

    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{

        firebase.firestore().collection('users').add({
          id:result.user.uid,
          name:username,
          phone:phone

          
        }).then(()=>{
          console.log("accessfully created !") 
          navigate("/login")

        })
        })
      }).catch((err)=>{
        alert(err.massage)
      })
  }



  return (
    <div className="signup-box">
      <div className="signup-box-sub">
          <h1>Sign-Up</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <label htmlFor="Name">Name : </label>
          <input
           type="text" 
           id="Name" 
           value={username} 
           placeholder="Enter full name"
           onChange={(e)=>setName(e.target.value)}/>
          <br />
          <label htmlFor="age">Phone : </label>
          <br />
          <input 
          type='tel' 
          name="" 
          id="phone" 
          value={phone} 
          placeholder="active phone number"
          onChange={(e)=>setPhone(e.target.value)}/>
          <br />
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
          <button type="submit" id="signup-b">SignUp</button>
          <br />
          <br />
          <br />
          <a id="submit-b">Already have acount!</a>
        </form>
      </div>
    </div>
  );
}

export default Signup;
