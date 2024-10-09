import Link from 'next/link';
import { BiColor } from 'react-icons/bi';

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <br></br>
      <h6>
      
      "At <i>Al Hira Travels</i>, our passion for travel drives us to curate extraordinary journeys for our clients. With over <i>10 years</i> of experience in the travel industry, we pride ourselves on our dedication to providing personalized, hassle-free, and unforgettable travel experiences. Our team of seasoned travel experts is committed to helping you explore the world with confidence, offering a wide range of services from destination planning to exclusive guided tours. We understand that every traveler is unique, which is why we tailor our packages to suit your individual needs and preferences. Join us as we turn your travel dreams into reality and make every trip a remarkable adventure!"</h6>
      <br></br>
      <Link href="/">Back to Home</Link>
      <a className="text-lgtext-gray-700 hover:text-blue-500 flex items-center space-x-1 bg-stone-600"></a>
      
    
    
      
</div>
  )
}
