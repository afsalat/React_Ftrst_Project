import React,{useContext,useState,useEffect} from "react";
import {AuthContext,FirebaseContext} from '../../store/firebaseContext'
// import {PostContext} from '../../store/postContext'
import {useNavigate} from 'react-router-dom'
import "./Home.css";

function Home(prop) {
  const {user} = useContext(AuthContext)
  // const {setPostDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)
  const [products,setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allPost = snapshot.docs.map((product)=>{
        return{
          ...product.data(),
          id:product.id
        }
      })
      console.log(allPost);
      setProducts(allPost);
    })
  },[])

  const signOut=()=>{

 firebase.auth().signOut().then(()=>{
    navigate("/")
    console.log("SignOut");
  }).catch((err)=>{
    alert(err.message)
  })
}


  return (
    <div className="home-page">
      <div className="header">
        <img
          src="https://rlv.zcache.com/batman_the_dark_knight_bat_logo_classic_round_sticker-r58f9c17e1e1a4381a0577b23d32a0b33_0ugmp_8byvr_736.webp"
          alt="darknight"
        />
        <div className="search-combo">
          <input type="search" name="" id="" />
          <button>Search</button>
        </div>
        <select name="" id="">
          <option value="">sample1</option>
          <option value="">sample2</option>
          <option value="">sample3</option>
          <option value="">sample4</option>
          <option value="">sample5</option>
        </select>
        <h3 onClick={signOut}>{user ? user.displayName : 'Login'}</h3>
        <h1 onClick={()=>navigate('/create')}> + </h1>
      </div>
      <div className="gallery">
        <div className="row">
          <h5>POST'S</h5>
          <div className="cards-row">


            { products.map(product=>{

      return <div onClick={()=>{
              // setPostDetails(product)
            }} className="card">
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="details">
                <div className="name">
                   <a>{product.name}</a>
                </div>
                <div className="price">
                  <h4>₹ {product.price}</h4>
                </div>
                <div className="category">
                  <h4>{product.category}</h4>
                </div>
                <div className="date">
                  <p>{product.createdAt}</p>
                </div>

              </div>
            </div>
            })
          }

          </div>
        </div>
      </div>
      <div className="about">
        <div className="about-sub-1">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quae reprehenderit, dignissimos quisquam numquam libero accusamus, nulla voluptatum quos placeat itaque natus soluta ex excepturi? Doloremque id cumque alias praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quibusdam accusamus dignissimos sapiente consequuntur repellat sed. Non quos, omnis eius deleniti numquam sequi, blanditiis, recusandae tenetur quasi sed eaque quisquam.</p>
        </div>
        <div className="aout-sub-2">
          <a className="button">Read Me</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
