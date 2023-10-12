import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <h1>Waitlist Form</h1>
     
       <div className='Form-container'>
          
        <div className='btn-container'>
           <div className='btnOne'>
            <span>1</span>

            <div>
              <h4>step 1</h4>
              <h3>Your info</h3>
            </div>
            
           </div>

           <div className='btntwo'>
            <span>2</span>

            <div>
              <h4>step 1</h4>
              <h3>Your info</h3>
            </div>
            
           </div>

           <div className='btnthree'>
            <span>3</span>

            <div>
              <h4>step 1</h4>
              <h3>Your info</h3>
            </div>
            
           </div>

           <div className='btnfour'>
            <span>4</span>

            <div>
              <h4>step 1</h4>
              <h3>Your info</h3>
            </div>
            
           </div>

        </div>  

        <div>
          <h1> Personal info </h1>
         
          <p>Please provide your name, email address and phone number.</p>

          <form>
            <label>Name</label>
            <input name="Name" type='text' required  />

            <label>Email Address</label>
            <input name="email" type='text' required  />
         
            <label>Phone Number</label>
            <input name="phone number" type='number' required  />
         
            <button>Next Step</button>
          </form>
        </div>
      </div> 
      </div>
     

    </>
  )
}

export default App;
