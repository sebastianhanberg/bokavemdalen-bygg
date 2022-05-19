import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import GoogleMaps from './GoogleMaps'

function Footer() {
  return (

    <div id="footer" className="p-16 sm:p-16 bg-dark-blue">

      <div className="container mx-auto md:flex md:justify-between">

        <div>
          <h2 className="mb-6 text-tiny font-bold text-white uppercase dark:text-white">Om Bokavemdalen</h2>

          <p className="w-56 text-white mb-12 sm:mb-0 text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sit ducimus ipsa quis minus commodi? Incidunt aperiam provident eos soluta, numquam, distinctio eligendi eum veniam maxime, harum libero voluptates odio?</p>

        </div>

        <div>
          <h2 className="mb-6 text-tiny font-bold text-white uppercase dark:text-white">Kontaktuppgifter</h2>

          <p className="w-56 text-white text-xs font-semibold">Besöksadress:</p>
          <p className="w-56 text-white text-xs"></p>
          <p className="w-56 text-white mb-3 text-xs">VEMDALEN</p>


          {/* <p className="w-56 text-white text-xs font-semibold">Telefonnummer:</p> */}

          {/* <p className="w-56 flex-row flex text-white text-xs mb-3"><span className="pr-2"><FaPhoneAlt /></span> 010-204 03 55</p> */}

          {/* <p className="w-56 text-white text-xs font-semibold">E-mail:</p> */}
          <a href="mailto:info@exentor.se" className="w-56 text-white mb-3 text-xs flex-row flex hover:underline cursor-pointer"><FaEnvelope className='mr-2' /> Info@exentor.se</a>

          <p className="w-56 text-white text-xs font-semibold">Orgnr:</p>
          <p className="w-56 text-white text-xs">559123-0882</p>

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
        <div>

          <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2022 Bokavemdalen Bygg AB. All rights reserved
          </span>
        </div>
        <div>

          <span className="text-sm text-white sm:text-center dark:text-gray-400">HÄR SKA INSTAGRAM OCH FACEBOOKLÄNK LIGGA
          </span>
        </div>

      </div>
    </div >

  )
}

export default Footer