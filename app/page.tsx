import Image from 'next/image';
import Link from 'next/link';





import react from 'react';
import { TbHelpSquareFilled } from 'react-icons/tb';

 function Website() {
  return (

    
      <div>
      <h1><b>Welcome to Our Website!</b></h1>
      
      
      

      <br></br>

       <nav>
         <ul>
          
    
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/services">Services</Link></li>
          
           </ul>
        </nav>
        <div>
        <br></br>
        
      <h6 className='bg-slate-100'>
      <i><b className='text-left'>Welcome to Our Website !</b></i>
      <br></br>
      
      "Discover the world with us! At <b><i>" Al Hira Travels"</i></b>, we believe every journey is an opportunity to create unforgettable memories. Whether you're seeking a tranquil escape, an exhilarating adventure, or a cultural immersion, our team is here to craft the perfect itinerary tailored to your desires. From breathtaking beaches and vibrant cities to serene mountain retreats, we offer a wide range of destinations and experiences for every type of traveler. Let us handle all the details so you can focus on enjoying the journey. Your dream vacation is just a click away—explore, dream, and travel with us!"
      </h6>
       </div> 
    </div>
  )
};
export default Website;