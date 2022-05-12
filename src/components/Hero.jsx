import React from 'react'
import hero from '../images/bygg1.jpg'
import { Link } from 'react-router-dom'


function Navbar() {
  return (

    <div class="relative">
      <img src={hero} class="absolute inset-0 object-cover w-full h-full" alt="" />
      <div class="relative bg-gray-dark bg-opacity-75">
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="flex flex-col items-center justify-between xl:flex-row">
            <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
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
            <div class="w-full max-w-xl xl:px-8 xl:w-6/12">
              <div class="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 class="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Kontakta oss för offert
                </h3>
                <form>
                  <div class="mb-1 sm:mb-2">
                    <label for="firstName" class="inline-block mb-1 font-medium">Förnamn</label>
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
                    <label for="lastName" class="inline-block mb-1 font-medium">Efternamn</label>
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
                    <label for="email" class="inline-block mb-1 font-medium">E-postadress</label>
                    <input
                      placeholder="email@gmail.com"
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
                      class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-dark hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
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