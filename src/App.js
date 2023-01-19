import React,{useEffect,useContext} from 'react'
import Create from './componets/Create/Create'
import Login from './componets/Login/Login'
import Entry from './componets/EntryPoint/Entry'
import Signup from './componets/SignUp/Signup'
import Home from './componets/Home/Home'
import { AuthContext, FirebaseContext } from "./store/firebaseContext";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {

  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })

  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' exact element={<Entry/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App