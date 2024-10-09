import Link from 'next/link';
// pages/_app.js
import '../style/style.css';



 function Contact() {
  return(
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
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
