import React from 'react';
import Link from 'next/link';
import Header from './component/Header/header';
import Footer from'./component/Footer/footer';
import Hero from './component/Hero/hero';
import styles from './style/style.module.css';
// Example import in Website.tsx and About.tsx





function Website() {
  return (
    <div>
      <header>
        <h1>
          <img src="./LOGO.png" width={100} height={50} alt="Website Logo" />
         <i> AL HIRA TRAVELS</i>
        </h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/apple">Images</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <h2><i><b>Welcome to Our Website!</b></i></h2>
        <Hero />
        <section>
          <h2>Discover the world with us! At <b><i>Al Hira Travels</i></b>...</h2>
          <p>
            We believe every journey is an opportunity to create unforgettable memories...
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 AL Hira Travels. All Rights Reserved.</p>
        <br></br>
        <Link href='https://github.com/hiraham'>Github</Link>
        <br></br>
        <Link href='https://www.linkedin.com/in/hira-hammad-6847592b5/'>linkedin</Link>
        

        <br></br>
        <Link href='https://vercel.com/hirahams-projects'> vercel</Link>
      </footer>
    </div>
    
  );
}

export default Website;
