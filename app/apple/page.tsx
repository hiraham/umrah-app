// pages/apple.tsx
import Link from 'next/link';
import Header from '../component/Header/header';
import Footer from '../component/Footer/footer';

const Apple = () => {
  return (
    <div>
      <Header />
      <h1 className="text-center mt-5">Images</h1>
      
      <div className="flex justify-center mt-4 space-x-4">
        <img src="/cc.png" alt="Image 1" width={300} className="rounded shadow" />
        <img src="/ee.png" alt="Image 2" width={300} className="rounded shadow" />
        <img src="/bb.png" alt="Image 3" width={300} className="rounded shadow" />
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <img src="/hh.png" alt="Image 1" width={300} className="rounded shadow" />
        <img src="/ii.png" alt="Image 2" width={300} className="rounded shadow" />
        <img src="/ff.png" alt="Image 3" width={300} className="rounded shadow" />
        
      </div>
  
          
      <Footer />
    </div>
  );
};

export default Apple;
