import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar () {
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white text-gray-600 md:px-8 pb-6">
      <div className="flex items-center">
        <Image src="/Logo.png" alt="Logo" fetchPriority='high' className="mr-2 rounded-xl h-12 w-12" height={25} width={25} />
        <span className="text-2xl font-bold">Skill Sphere</span>
      </div>
      <ul className={`flex space-x-6 items-center ${isMobile ? 'flex-col py-4 items-start bg-slate-600 text-white justify-start space-y-2 absolute top-16 right-0 w-full' : 'hidden'} md:flex md:space-x-6`}>
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#services" className="hover:text-gray-400">Services</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        <li><a href="#explore" className="hover:text-gray-400 bg-black p-2 text-white">Explore</a></li>
      </ul>
      <div className="md:hidden" onClick={handleClick}>
        {isMobile ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </nav>
  );
};

