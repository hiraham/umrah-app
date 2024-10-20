
// components/Hero.tsx
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <img src="/y.jpg" alt="Discover the World" width="100%" className="object-cover h-[300px] w-full" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
        <h1 className="text-lg md:text-xl mb-6">Discover the World!</h1>
        <Link href="/services">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Explore Our Services
          </button>
        </Link>
      </div>
    </div>
  )
};

export default Hero;


