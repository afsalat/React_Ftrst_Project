import React from 'react'
import './Entry.css'
import { Link } from 'react-router-dom'

function Entry() {
  return (
    <div className='entry-page'>
        <div className='button-side'>
            <div className='button-side-sub'>
              <h1>DARK KNIGHT</h1>
              <h3>-  30 DAY'S FREE REACT WORKSHOP -</h3>
              <div className='buttons'>
                <Link to={'/login'} id="li"><div id="b-login">Login</div></Link>
                <Link to={'/signup'} id="li"><div id="b-signup">SignUp</div></Link><br /><br /><br />
              </div>
            </div>
            <div className="image-side">
              <div className="image-side-sub">

              </div>
            </div>
         </div>
    </div>
  )
}

export default Entry;