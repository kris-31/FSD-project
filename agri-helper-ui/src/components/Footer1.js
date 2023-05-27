import React from 'react';
import {Link} from 'react-router-dom';

function FooterSection() {
  return(
<div className='footer-container'>
  
  <section className='footer-subscription'>
  <h2>
      About us
    </h2>
    <p className='footer-subscriptionn-heading'>
    At Agri Helper, we are passionate about revolutionizing the agricultural industry by providing innovative solutions and empowering farmers around the world. Our mission is to assist farmers in maximizing their productivity, optimizing resource utilization, and promoting sustainable farming practices.
    Join us on this journey towards a sustainable and prosperous future for agriculture. At Agri Helper, we are committed to providing high-quality agri products that meet the unique requirements of farmers. Our products are sourced from trusted suppliers and manufacturers, and we ensure they adhere to stringent quality standards. Explore Agri Helper today and unlock the full potential of your farm. Together, let's cultivate a better tomorrow.
             </p>
             <div className='input- areas'>
              <form>
                <input
                className='footer-input' name='email'
                type='email' placeholder='Your Email'

                />
             <button className = 'footer-btn'>save

             </button>
              </form>
              </div>


  </section>

  {/*  Footer links*/}
  <div className='footer-links'>
<div  className='footer-link-wrapper'>
  <div className='footer-link-items'>
    <h2>
      Services 
    </h2>
    <Link to='/'>Select Product</Link>
    <Link to='/'>Blog</Link>
    <Link to='/'>Agri Planning</Link>
     
  </div>
  
  <div className='footer-link-items'>
    <h2>
      Social media
    </h2>
    <Link to='/'>Instagram</Link>
    <Link to='/'>Facebook</Link>
    <Link to='/'>Youtube</Link>
    <Link to='/'>Twitter</Link>
     
  </div>

</div>


<div  className='footer-link-wrapper'>
  <div className='footer-link-items'>
    <h2>
      Contact Us
    </h2>
    <Link to='/'>Agri-Helper</Link>
    <Link to='/'>+917285920399</Link>
    <Link to='/'>Gandhi nagar,beside Botanical garden</Link>
    <Link to='/'>PUDUCHERRY - 605014</Link>
     
  </div>
 
  </div>

</div>
<hr/>
<div>
  <p className='last'>
    @ Agri-Helper Project 2023
  </p>
</div>

</div>

  );
}
export default FooterSection;
