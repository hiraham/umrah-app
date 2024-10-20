// About.tsx
import React from 'react';
import Link from 'next/link';
import { BiColor } from 'react-icons/bi';
import Header from '../component/Header/header';
import Footer from '../component/Footer/footer';

export default function About() {
  return (
    <div>
      
      <Header />

      
      <main>
        <div>
          
          <h1>About Us</h1>
        </div>

        <br />

        <section>
          <img src="/z.jpg" alt="AL HIRA TRAVELS" width="400px" />
          <p className="text-base">
            At <b><i>Al Hira Travels</i></b>, our passion for travel drives us to curate extraordinary journeys for our clients. With over <b>10 years</b> of experience in the travel industry, we pride ourselves on our dedication to providing personalized, hassle-free, and unforgettable travel experiences. Our team of seasoned travel experts is committed to helping you explore the world with confidence, offering a wide range of services from destination planning to exclusive guided tours. We understand that every traveler is unique, which is why we tailor our packages to suit your individual needs and preferences. Join us as we turn your travel dreams into reality and make every trip a remarkable adventure!
          </p>
        </section>

        <br />

        <h3>Trusted by the world’s most innovative teams</h3>
        <Link href="/">Back to Home</Link>
        <br />
    
      </main>

    
      <Footer />
    </div>
  );
}

