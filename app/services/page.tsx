// pages/services.tsx

import Link from 'next/link';
import React from 'react';
import { BiColor } from 'react-icons/bi';
import Header from '../component/Header/header';
import Footer from '../component/Footer/footer';
import Web from './web/page';


export default function Services() {
  return (
    
      <div>
        <Header/>
      
    <div><img src="/aero.png" alt="AL HIRA TRAVELS" width="100px" />

      <h1>
        At <b><i>AL Hira Travels</i></b>, we are dedicated to making your travel experiences seamless and memorable. We offer a range of services designed to cater to every aspect of your journey, from start to finish. Our services include:
      </h1>
      <ul>
        <li><b>Custom Travel Planning:</b> We work closely with you to create personalized itineraries tailored to your preferences, interests, and budget.</li>
        <li><b>Flight and Accommodation Booking:</b> Let us handle all your booking needs, including flights, hotels, resorts, and unique stays, ensuring you get the best deals and quality.</li>
        <li><b>Guided Tours and Excursions:</b> Discover your destination like a local with our carefully curated tours, led by experienced guides who share unique insights and stories.</li>
        <li><b>Travel Insurance and Support:</b> Travel with peace of mind knowing that our team is here to assist with insurance coverage and 24/7 support for any unexpected situations.</li>
        <li><b>Corporate and Group Travel:</b> Whether you’re planning a corporate retreat, a family vacation, or a group adventure, we offer packages that accommodate groups of all sizes.</li>
      </ul>
      <br></br>
      <br></br>

      

      <h1 className='text-center'color='blue'>
        Our mission is to provide you with a stress-free travel experience so you can focus on creating unforgettable memories. Let us take care of all the details, big and small, so you can travel with ease and confidence.
      </h1>

<br></br>
      <img src="/j.png" alt="AL HIRA TRAVELS" width="50%" />

      <ul>
        <li>
          <Link href="/services/web">
            Learn more about our web services
          </Link>
        </li>
      </ul>
      <Link href="/">
        Back to Home
      </Link>
      <div>
        <Footer/>
      </div>
    </div>
    </div>
  );
}

