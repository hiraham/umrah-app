// component/Header/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
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
  );
};

export default Header;

