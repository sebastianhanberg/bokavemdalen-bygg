import React from 'react'
import bygg1 from '../images/bygg1.jpg'
import bygg2 from '../images/bygg2.jpg'
import bygg3 from '../images/bygg3.jpg'

import { motion } from 'framer-motion'

function Projekt() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Några av våra kundprojekt</h1>
                            <div class="h-1 w-20 bg-exentor-yellow rounded"></div>
                        </div>
                        <p className="text-gray-700 lg:text-base text-sm lg:max-w-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore molestias vero incidunt illo cumque veritatis earum, repudiandae veniam dolor tempore doloribus temporibus tempora ea nostrum odio quo nobis qui ratione!</p>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={bygg1} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={bygg2} />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={bygg3} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={bygg2} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={bygg3} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={bygg1} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>


        // <section class="text-gray-600 body-font">
        //     <div class="container px-5 py-24 mx-auto">
        //         <div class="flex flex-wrap w-full mb-20">
        //             <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        //                 <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Referensprojekt</h1>
        //                 <div class="h-1 w-20 bg-exentor-yellow rounded"></div>
        //             </div>
        //             <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore molestias vero incidunt illo cumque veritatis earum, repudiandae veniam dolor tempore doloribus temporibus tempora ea nostrum odio quo nobis qui ratione!</p>
        //         </div>
        //         <div class="flex flex-wrap -m-4">
        //             <div class="lg:w-1/3 sm:w-1/2 p-4">
        //                 <div class="flex relative">
        //                     <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={bygg2} />
        //                     <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        //                         <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Projekt</h2>
        //                         <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
        //                         <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="lg:w-1/3 sm:w-1/2 p-4">
        //                 <div class="flex relative">
        //                     <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={bygg1} />
        //                     <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        //                         <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Projekt</h2>
        //                         <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
        //                         <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="lg:w-1/3 sm:w-1/2 p-4">
        //                 <div class="flex relative">
        //                     <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={bygg2} />
        //                     <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        //                         <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Projekt</h2>
        //                         <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
        //                         <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="lg:w-1/3 sm:w-1/2 p-4">
        //                 <div class="flex relative">
        //                     <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={bygg3} />
        //                     <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        //                         <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Projekt</h2>
        //                         <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
        //                         <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="lg:w-1/3 sm:w-1/2 p-4">
        //                 <div class="flex relative">
        //                     <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={bygg2} />
        //                     <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        //                         <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Projekt</h2>
        //                         <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
        //                         <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="lg:w-1/3 sm:w-1/2 p-4">
        //                 <div class="flex relative">
        //                     <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={bygg3} />
        //                     <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        //                         <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">Projekt</h2>
        //                         <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
        //                         <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Projekt