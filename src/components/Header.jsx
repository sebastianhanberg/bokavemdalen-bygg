import React from 'react'
import '../App.css'
import 'flowbite';
import logo from '../assets/logo3.png'
import { Link } from 'react-scroll'


function Header() {
  return (

    <nav class="bg-black shadow-lg py-6 md:px-10 px-7">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="main" smooth={true} duration={1000} className="home-link flex items-center cursor-pointer">
          <img src={logo} class="cursor-pointer mr-3 h-8 sm:h-16" alt="Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
        </Link>
        <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              {/* <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Hem</a> */}
              <Link to="main" className=" cursor-pointer block py-2 pr-4 pl-3 text-white text-sm font-medium opacity-90  rounded md:bg-transparent md:hover:text-boka-orange duration-700 transistion md:p-0 dark:hover:bg-gray-600 md:dark:bg-transparent" aria-current="page">Hem</Link>
            </li>
            <li>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex justify-between items-center py-2 pr-4 pl-3 w-full text-white opacity-90 border-b 
            border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-boka-orange text-sm duration-700 font-medium transistion md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white 
            dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                Våra tjänster <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

              <div id="dropdownNavbar" class="hidden z-10 w-44 bg-dark-blue rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-white dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                  <li>
                    {/* <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Våra tjänster</a> */}
                    <Link to="tjanster" className="cursor-pointer block py-2 px-4 text-sm hover:bg-gray-100 text-white text-opacity-90 md:hover:text-boka-orange duration-700 transistion font-medium opacity-90 dark:hover:bg-gray-600 dark:hover:text-white">Våra tjänster</Link>
                  </li>
                  <li>
                    {/* <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Referensprojekt</a> */}
                    <Link to="projekt" className="cursor-pointer block py-2 px-4 text-sm hover:bg-gray-100 text-white text-opacity-90 md:hover:text-boka-orange duration-700 transistion font-medium opacity-90 dark:hover:bg-gray-600 dark:hover:text-white">Referensprojekt</Link>
                  </li>
                </ul>

              </div>
            </li>
            <li>
              <Link to="about" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 
          hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-sm md:hover:text-boka-orange duration-700 font-medium opacity-90 transistion md:p-0 
          dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Om oss</Link>

            </li>

            <li>
              <Link to="about" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 
          hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-sm md:hover:text-boka-orange duration-700 font-medium opacity-90 transistion md:p-0 
          dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Offert</Link>

            </li>
            <li>
              <Link to="about" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 
          hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-sm md:hover:text-boka-orange duration-700 font-medium opacity-90 md:p-0 
          dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Kontakt</Link>
            </li>
            {/* <li>
              <a href="#" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 
          hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
          dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Kontakt</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>



    // <div className="shadow-md w-full bg-gray-dark">
    //   <div className="md:flex items-center justify-between bg-gray-dark py-6 md:px-10 px-7">
    //     <div>
    //       <img src={logo} alt="" />
    //     </div>
    //     <ul className="md:flex md:items-center justify-between cursor-pointer mx-auto">
    //       <li className="md:ml 8 text-l text-white hover:text-gray duration-500 mr-10 ">Tjänster</li>
    //       <li className="md:ml 8 text-l text-white hover:text-gray duration-500 mr-10 ">Projekt</li>
    //       <li className="md:ml 8 text-l text-white hover:text-gray duration-500 mr-10">Jobba hos oss</li>
    //       <li className="md:ml 8 text-l text-white hover:text-gray duration-500 mr-10 ">Om oss</li>
    //       <li className="md:ml 8 text-l text-white hover:text-gray duration-500">Kontakt</li>
    //     </ul>
    //   </div>



    // </div >

  )
}

export default Header