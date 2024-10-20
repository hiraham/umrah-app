
import '../style/style.css'


import React from 'react';
import Link from 'next/link';
import { BiColor } from 'react-icons/bi';
import Header from '../component/Header/header';
import Footer from '../component/Footer/footer';

 function Contact() {
  return(
    <div>
        <header>
    <h1>AL HIRA TRAVELS</h1>
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/apple">Images</Link>
        </li>
      </ul>
    </nav>
  </header>
        
    
    
        <div className="row justify-content-center mt-5">
            <div className="col-md-7 text-center">
                <h2>Have a <span>Question?</span></h2>
                <h3>Contact us</h3>
              
                <form className="mt-4">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Your Name" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Your Email" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Subject" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                    <textarea 
                     className="form-control" 
                         
                     placeholder="Your Message" 
                         required 
                         >

                         </textarea>

                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary py-3 px-5"
                    >  <Link href='hirahammad34@gmail.com'></Link>
                        Submit
                    </button>
                </form>
               
            </div>
            
        </div>
        <div>
         <footer className="white">
      <p>About us</p>
      <p>&copy; 2024 AL Hira Travels. All Rights Reserved.</p>
    </footer>
        </div>
    </div>

    )
};

export default Contact;
