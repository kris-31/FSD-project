import React from 'react'
import bgImg from '../assets/bg.jpg';

export default function Form() {

        
  return (
    <section>
        <div className="register1">
            <div className="col-11">
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>

                <form id='form1' className='flex flex-col1' >
                    <input type="text" placeholder='username' />
                    <input type="text"  placeholder='password' />
                    <input type="text" placeholder='confirm password' />
                    <input type="text" placeholder='mobile number' />
                    <button className='btn1'>Sign In</button>
                </form>

            </div>
            <div className="col-21">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
