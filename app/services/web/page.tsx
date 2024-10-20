import React from 'react';
import Link from 'next/link';
import styles from './style/style.module.css';
import { BiColor } from 'react-icons/bi';


export default function Web() {
  return (
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
  <div/>

    <div>
      
      
      <h1>Our Umrah Packages 2024</h1><
        br/>
<p>We take pride in offering a comprehensive and well-organized Umrah package that caters to the diverse needs of our fellow Muslims from Pakistan. Our package is designed to ensure a smooth and hassle-free journey, allowing you to focus on your spiritual devotion.<br/>

Exciting news for all aspiring Umrah travelers who wish to embark on a sacred journey to Makkah and Madinah! Umrah packages are now available, and dtravel.pk is delighted to offer a wide range of packages to cater to our esteemed clients' preferences. A typical Umrah package encompasses the following components:
<br/>
<ul>
  <li>. Umrah Visa</li>
  <li>. Round-trip air ticket</li>
  <li>. Hotel accommodation in Makkah and/or Madinah</li>
  <li>. Ground transportation</li>
  <li>. Optional Ziarat (visits to sacred sites)</li>
</ul>
<br/>
At <b>AL HIRA travel.,</b><br/> our experienced team has been dedicatedly serving countless pilgrims (Mautamreen) over the past few years. We understand the significance of your journey and are committed to tailoring the perfect Umrah package that aligns with your needs and timelines, ensuring an exceptional experience for you and your family.


<b>
Discover your perfect Umrah package 2023 with Umrah Companions,</b> catering to Muslims worldwide. Our Umrah packages for 2023 are designed to offer both pre-defined options and customizable choices, ensuring a tailored experience for all pilgrims. Booking your ideal Umrah package now.
</p>
     <div className='aligen-center'>
      <Link href="/services">Back to Services</Link>
      </div> 
      </div>
      <div>
      <footer className="white">
      <p>About us</p>
      <p>&copy; 2024 AL Hira Travels. All Rights Reserved.</p>
    </footer>
    </div>
    </div>
  );
}
