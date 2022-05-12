import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import GoogleMaps from './GoogleMaps'

function Footer() {
  return (

    <div id="footer" className="p-16 sm:p-16 bg-dark-blue">

      <div className="container mx-auto md:flex md:justify-between">

        <div>
          <h2 className="mb-6 text-tiny font-bold text-white uppercase dark:text-white">Om Bokavemdalen</h2>

          <p className="w-56 text-white mb-12 sm:mb-0 text-xs">Exentor bygger och anpassar alltifrån bostäder, skolor, samhällsfastigheter och kommersiella
            fastigheter i Stockholm. Vi erbjuder helhetslösningar inom entreprenad, styr och reglerteknik, projektutveckling, fastighetsunderhåll
            och inredningssnickeri. Koncernen startade i Stockholm 1963 och omsätter cirka 20 miljoner kronor.</p>

        </div>

        <div>
          <h2 className="mb-6 text-tiny font-bold text-white uppercase dark:text-white">Kontaktuppgifter</h2>

          <p className="w-56 text-white text-xs font-semibold">Besöksadress:</p>
          <p className="w-56 text-white text-xs">Dalagatan 37</p>
          <p className="w-56 text-white mb-3 text-xs">113 23 STOCKHOLM</p>


          {/* <p className="w-56 text-white text-xs font-semibold">Telefonnummer:</p> */}

          <p className="w-56 flex-row flex text-white text-xs mb-3"><span className="pr-2"><FaPhoneAlt /></span> 010-204 03 55</p>

          {/* <p className="w-56 text-white text-xs font-semibold">E-mail:</p> */}
          <a href="mailto:info@exentor.se" className="w-56 text-white mb-3 text-xs flex-row flex hover:underline cursor-pointer"><FaEnvelope className='mr-2' /> Info@exentor.se</a>

          <p className="w-56 text-white text-xs font-semibold">Orgnr:</p>
          <p className="w-56 text-white text-xs">556086-6237</p>

        </div>


        <div className="flex flex-col md:flex-col pr-10 sm:pr-0">

          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Hitta till oss</h2>

            <GoogleMaps className="" />

          </div>

        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="container mx-auto sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2022 Bokavemdalen Bygg AB. All rights reserved
        </span>

      </div>
    </div >

  )
}

export default Footer