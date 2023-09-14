"use client"
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { BsFilterCircleFill } from 'react-icons/bs';
import DarkMode from '../DarkMode/DarkMode';

const Navbar = () => {
  const pathname = usePathname(); // Get the current route using useRouter

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const links = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navContainer">
      <div className="px-10 md:px-20">
        <div className="flex items-center justify-between h-20">
          <Link href={"/"} className='logo'>Genosoo</Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className={`link-btn px-2 p-1 rounded-md ${
                    pathname === link.path ? 'activelink' : ''
                  }`}
                  onClick={closeNavbar}
                >
                  {link.text}
                </Link>
              ))}
              <DarkMode />
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <div className="mr-5 flex items-center">
              <DarkMode />
            </div>
            <button
              onClick={toggleNavbar}
              type="button"
              className="icon "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <div className="iconWrapper">
                  <BsFilterCircleFill />
                </div>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? 'block open' : 'hidden'} md:hidden mobile-menu`}
        id="mobile-menu"
      >
        <div className="px-6 pt-2 pb-3 space-y-1 sm:px-3">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`link-btn px-3 p-2 rounded-2xl block ${
                pathname === link.path ? 'activelink' : ''
              }`}
              onClick={closeNavbar}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
