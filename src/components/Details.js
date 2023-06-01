import React from 'react'
import "../styles/Details.scss"

const Details = () => {
  return (
    <div className='details'>
      <div>
        <h1>share your details</h1>
        <form>
          <label >full name</label>
          <input type='text' placeholder='enter your full name according to adhar' required/>
          <label >date of birth</label>
          <input type='number' placeholder='enter your date of birth here' required/>
          <label >mobile no.</label>
          <input type="number" placeholder='enter your aadhar linked mobile number here' required/>
          <label >aadhar card photo</label>
          <input type='image' placeholder='clear and updated aadhar card photo' required/>
          <label >PAN card photo</label>
          <input type="image" placeholder='clear pan card photo' required/>
          <label >UAN NO.</label>
          <input type='number' placeholder='enter your uan number' required/>
          <label >password</label>
          <input type="password" placeholder='enter your pf account password number' required/>
          <label >Company name</label>
          <input type='text' placeholder='enter your company name where you work' required/>

       
        </form>
      </div>
    </div>
  )
}

export default Details