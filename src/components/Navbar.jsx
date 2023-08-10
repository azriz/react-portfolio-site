import { useState, useEffect } from 'react';
import {logo, menu, close, sun, githubIcon } from '../assets';
import { navItems, GithubURL } from '../constants';

const Navbar = ( {scrollToElementProjects} ) => {

  // const [scroll, setScroll] = useState(false);


  // window.addEventListener("scroll", () => {
  //   setScroll(window.scrollY > 200);
  // });

  // const [scrolled, setScrolled] = useState(false);
  // const frosted = () => {
  //   if (windows.scrollY >= 90) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // }

  // window.addEventListener('scroll', frosted);


  const [menuToggle, setMenuToggle] = useState(false)

  return (

    <>

    <div className={`fade-in-down navbar w-full flex justify-center items-center ${scroll ? '' : ''}`}>
    
      <nav className="w-full flex justify-between items-center">
        
        <img src={ logo } alt="Az Riz Logo" className="sm:w-auto w-1/2"/>

        <ul className="md:flex hidden gap-x-10 sm:gap-x-5 justify-end items-center list-none">
          {navItems.map((nav, index) => (
            <a key={nav.id} onClick={scrollToElementProjects}>
            <li
            className="nav-link border-2 border-white rounded-lg px-5 py-2 bg-black hover:bg-white hover:text-purple-950 transition-colors font-bold cursor-pointer"
            >
              {nav.title}
            </li>
            </a>
          ))}
          {/* Dark Mode to be added later
           <li className="nav-link">
            <img src={sun} alt="" />
          </li> */}
          <li className="nav-link">
            <a href={GithubURL} target="_blank">
              <img src={githubIcon} alt="GitHub Profile" className="hover:from-violet-950" />
            </a>
          </li>
        </ul>

        <div className="md:hidden flex">
          <img
          src={menuToggle ? close : menu}
          alt="Nav toggle"
          className="w-[25px] h-[25px] object-contain mt-1 cursor-pointer"
          onClick={() => setMenuToggle((prev) => !prev)} 
          />

          <div
          className={`${menuToggle ? 'flex' : 'hidden'} absolute top-[90px] right-7 bg-black-gradient sidebar`}>
            <ul className="flex flex-col gap-y-6 justify-center items-center list-none w-full text-white">
              {navItems.map((nav, index) => (
                <li
                key={nav.id}
                className="nav-link w-[120px] border-2 border-white rounded-lg px-5 py-2 hover:bg-white hover:text-purple-950 transition-colors font-bold"
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
              <li className="nav-link flex gap-x-4">
                <img src={sun} alt="" />
                <a href={GithubURL} target="_blank">
                  <img src={githubIcon} alt="GitHub Profile" />
                </a>
              </li>
            </ul>
          </div>
        </div>

      </nav>

    </div>

    </>

  );
}
 
export default Navbar;