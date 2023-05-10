import Link from 'next/link';
import { AiOutlineMail, AiOutlineClose } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaYoutube, } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { useState } from 'react';

function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full px-4 2xl:px-16">
        <h1 className="text-xl font-bold">Joseph Soto</h1>
        <div>
          {/* Here is the menu displayed when there is a screen that is at least large */}
          <ul className="hidden lg:flex">
            <Link href="#Home">
              <li className="ml-10 text-lg">Home</li>
            </Link>
            <Link href="#About">
              <li className="ml-10 text-lg">About</li>
            </Link>
            <Link href="#Projects">
              <li className="ml-10 text-lg">Projects</li>
            </Link>
            <Link href="#Contact">
              <li className="ml-10 text-lg">Contact</li>
            </Link>
            <Link href="#Blog">
              <li className="ml-10 text-lg">Blog</li>
            </Link>
          </ul>
        </div>
        <div className="text-3xl lg:hidden cursor-pointer pl-24" onClick={handleNav}><HiOutlineMenu />
        </div>
        <a
          href="mailto:josephsoto684@gmail.com"
          className="flex items-center  hidden lg:flex"><AiOutlineMail />
          <span className="p-2 text-sm">josephsoto684@gmail.com</span>
        </a>
      </div>
      <div className={
        menuOpen
        ? "fixed right-0 top-0 w-[65%] lg:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
        : "fixed right-[-100%] top-0 p-10 h-screen ease-in duration-500"
      }>
        <div className="flex w-full items-center">
          <div onClick={handleNav} className="cursor-pointer text-3xl">
            <AiOutlineClose/>
          </div>
        </div>
        <div className="flex-col py-4 text-center">
          <ul>
            <Link href="#Home">
              <li className="text-2xl py-4"
              onClick={handleNav}>Home</li>
            </Link>
            <Link href="#About">
              <li className="text-2xl py-4"
              onClick={handleNav}>About</li>
            </Link>
            <Link href="#Projects">
              <li className="text-2xl py-4"
              onClick={handleNav}>Projects</li>
            </Link>
            <Link href="#Contact">
              <li className="text-2xl py-4"
              onClick={handleNav}>Contact</li>
            </Link>
            <Link href="#Blog">
              <li className="text-2xl py-4"
              onClick={handleNav}>Blog</li>
            </Link>
          </ul>
        </div>
        <div className="text-2xl flex justify-center gap-16 py-3 text-gray-300">
                  <a
                    href="https://github.com/sotojn"
                    target="_blank"><FaGithub /></a>
                  <a
                  href="https://www.linkedin.com/in/joseph-soto66/"
                  target="_blank"><FaLinkedin /></a>
                  <a
                  href="https://www.youtube.com/@josephsoto66"
                  target="_blank"><FaYoutube /></a>
                </div>
      </div>
    </nav>
  );
}



  export default NavBar;