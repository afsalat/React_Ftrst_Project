import React,{useState,useContext} from 'react'
import {AuthContext, FirebaseContext} from '../../store/firebaseContext'
import {useNavigate} from 'react-router-dom'
import './Create.css'

function Create() {

    const [name,setName] = useState('')
    const [category,setCategory] = useState('')
    const [price,setPrice] = useState('')
    const [image,setImage] = useState(null)

    // const navigate = useNavigate()
    const {firebase} = useContext(FirebaseContext)
    const date = new Date()
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()


    const handlePost =()=>{

        firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
          ref.getDownloadURL().then((url)=>{
            console.log(url);
            firebase.firestore().collection('products').add({
              name,
              category,
              price,
              url,
              userId:user.uid,
              createdAt:date.toDateString()

            })
            navigate("/home")

          })
        }).catch((err)=>{
          alert(err.message)
        })
      }



  return (
    <div className='create-main-page'>
        <div className='create-page'>
           
        </div>
        <div className='create-form'>
            
            <div>
                <h2>CREATE YOUR POST </h2>
                <input 
                type="text"
                name="Name"
                placeholder='Product name'
                value={name}
                onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <input 
                type="text"
                placeholder='Category'
                name='category'
                value={category}
                onChange={(e)=>setCategory(e.target.value)}/><br/><br/>
                <input 
                type="number" 
                placeholder='Price'
                name='Price'
                value={price}
                onChange={(e)=>setPrice(e.target.value)}/><br/><br />
                <br />
                <input 
                type="file" 
                id="file" 
                placeholder='product image'
                onChange={(e)=>setImage(e.target.files[0])} />
                <button type="submit" onClick={handlePost} className='submit-b'>Post</button>
            </div>
        </div>
    </div>
  )
}

export default Create
