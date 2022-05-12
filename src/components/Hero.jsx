import React from 'react'
import hero from '../images/bygg1.jpg'
import { Link } from 'react-router-dom'
import logo from '../assets/logo3.png'
import 'flowbite';


function Navbar() {
  return (

    <div class="relative font-serif">
      <img src={hero} class="absolute inset-0 object-cover w-full h-full" alt="" />
      <div class="relative bg-gray-dark bg-opacity-75">



        <nav class="bg-dark-blue bg-opacity-25 shadow-md py-6 md:px-10 px-7">
          <div class="container flex flex-wrap justify-between items-center mx-auto">
            <Link to="/" class="flex items-center">
              <img src={logo} class="mr-3 h-8 sm:h-16" alt="Logo" />
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
                  <Link to="/" className="block py-2 pr-4 pl-3 text-white text-sm font-medium opacity-90  rounded md:bg-transparent md:hover:text-boka-orange duration-700 transistion md:p-0 dark:hover:bg-gray-600 md:dark:bg-transparent" aria-current="page">Hem</Link>
                </li>
                <li>
                  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex justify-between items-center py-2 pr-4 pl-3 w-full text-white opacity-90 border-b 
            border-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-boka-orange text-sm duration-700 font-medium transistion md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white 
            dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    Våra tjänster <svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

                  <div id="dropdownNavbar" class="hidden z-10 w-44 bg-dark-blue rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-1 text-sm text-white dark:text-gray-400" aria-labelledby="dropdownLargeButton">

                      <li>
                        {/* <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Våra tjänster</a> */}
                        <Link to="/tjanster" className="block py-2 px-4 text-sm hover:bg-gray-100 text-white text-opacity-90 md:hover:text-boka-orange duration-700 transistion font-medium opacity-90 dark:hover:bg-gray-600 dark:hover:text-white">Våra tjänster</Link>
                      </li>
                      <li>
                        {/* <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Referensprojekt</a> */}
                        <Link to="/projekt" className="block py-2 px-4 text-sm hover:bg-gray-100 text-white text-opacity-90 md:hover:text-boka-orange duration-700 transistion font-medium opacity-90 dark:hover:bg-gray-600 dark:hover:text-white">Referensprojekt</Link>
                      </li>
                    </ul>

                  </div>
                </li>
                <li>
                  <Link to="/about" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 
          hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-sm md:hover:text-boka-orange duration-700 font-medium  opacity-90 transistion md:p-0 
          dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Om oss</Link>

                </li>

                <li>
                  <Link to="/about" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 
          hover:bg-gray-50 md:hover:bg-transparent md:border-0 text-sm md:hover:text-boka-orange duration-700 font-medium opacity-90 transistion md:p-0 
          dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Offert</Link>

                </li>
                <li>
                  <Link to="/about" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 
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



        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="flex flex-col items-center justify-between xl:flex-row">
            <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 class="max-w-lg mb-6 font-serif text-2xl sm-text-3xl font-bold tracking-tight text-white text-shadow-md sm:text-4xl sm:leading-none">
                Bokavemdalen bygg<br class="hidden md:block" />

              </h2>
              <p class="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

              </p>
              <a href="/" aria-label="" class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-grey">
                Läs mer
                <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                </svg>
              </a>
            </div>


            <div class="w-full max-w-xl xl:px-8 xl:w-2/3">
              <div class="bg-gray-light bg-opacity-75 rounded shadow-2xl p-7 sm:p-10">
                <h3 class="mb-4 text-xl text-dark-blue font-semibold sm:text-center sm:mb-6 sm:text-3xl">
                  Kontakta oss för offert
                </h3>
                <form>
                  <div class="mb-1 sm:mb-2">
                    <label for="firstName" class="inline-block mb-1 text-dark-blue font-medium text-sm">Förnamn</label>
                    <input
                      placeholder="Förnamn"
                      required=""
                      type="text"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div class="mb-1 sm:mb-2">
                    <label for="lastName" class="inline-block mb-1 text-dark-blue font-medium text-sm">Efternamn</label>
                    <input
                      placeholder="Efternamn"
                      required=""
                      type="text"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div class="mb-1 sm:mb-2">
                    <label for="email" class="inline-block mb-1 text-dark-blue font-medium text-sm">E-postadress</label>
                    <input
                      placeholder="mail@gmail.com"
                      required=""
                      type="text"
                      class="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div class="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-700 rounded shadow-md bg-dark-blue hover:bg-boka-orange  focus:shadow-outline focus:outline-none"
                    >
                      Kontakta oss
                    </button>
                  </div>
                  <p class="text-xs text-gray-600 sm:text-sm">
                    Alla uppgifter hanteras enligt vår <a href="#" className="underline">integritetspolicy.</a>

                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar