import React from 'react'
import bygg1 from '../images/bygg1.jpg'
import bygg2 from '../images/bygg2.jpg'
import bygg3 from '../images/bygg3.jpg'
import bygg4 from '../images/bygg4.jpg'
import { motion } from 'framer-motion'

function Tjanster() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Våra tjänster</h1>
                            <div class="h-1 w-20 bg-exentor-yellow rounded"></div>
                        </div>
                        <p className="text-gray-700 lg:text-base lg:max-w-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore molestias vero incidunt illo cumque veritatis earum, repudiandae veniam dolor tempore doloribus temporibus tempora ea nostrum odio quo nobis qui ratione!</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/2 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-80 rounded w-full object-cover object-center mb-6" src={bygg1} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Exentor</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Byggnation och Renovering</h2>
                                <p className="text-gray-700 lg:text-base lg:max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos tempore tenetur doloribus asperiores reprehenderit aliquam quas! Debitis pariatur, laborum unde nesciunt et ratione error vero molestias, eius ullam voluptatibus?</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-80 rounded w-full object-cover object-center mb-6" src={bygg2} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Exentor</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Styr- och Reglersystem
                                </h2>
                                <p className="text-gray-700 lg:text-base lg:max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos tempore tenetur doloribus asperiores reprehenderit aliquam quas! Debitis pariatur, laborum unde nesciunt et ratione error vero molestias, eius ullam voluptatibus?</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-80 rounded w-full object-cover object-center mb-6" src={bygg3} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Exentor</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Mark och Anläggning</h2>
                                <p className="text-gray-700 lg:text-base lg:max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos tempore tenetur doloribus asperiores reprehenderit aliquam quas! Debitis pariatur, laborum unde nesciunt et ratione error vero molestias, eius ullam voluptatibus?</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-80 rounded w-full object-cover object-center mb-6" src={bygg1} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Exentor</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Fasad och Takarbeten</h2>
                                <p className="text-gray-700 lg:text-base lg:max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos tempore tenetur doloribus asperiores reprehenderit aliquam quas! Debitis pariatur, laborum unde nesciunt et ratione error vero molestias, eius ullam voluptatibus?</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-80 rounded w-full object-cover object-center mb-6" src={bygg4} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Exentor</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Projektering och Projektledning</h2>
                                <p className="text-gray-700 lg:text-base lg:max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos tempore tenetur doloribus asperiores reprehenderit aliquam quas! Debitis pariatur, laborum unde nesciunt et ratione error vero molestias, eius ullam voluptatibus?</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-80 rounded w-full object-cover object-center mb-6" src={bygg3} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Exentor</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">El- & styrsystem</h2>
                                <p className="text-gray-700 lg:text-base lg:max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos tempore tenetur doloribus asperiores reprehenderit aliquam quas! Debitis pariatur, laborum unde nesciunt et ratione error vero molestias, eius ullam voluptatibus?</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4">
                            <div class="bg-gray-100 p-6 rounded-lg">
                                <img class="h-80 rounded w-full object-cover object-center mb-6" src={bygg2} alt="content" />
                                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Exentor</h3>
                                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Service & installation</h2>
                                <p className="text-gray-700 lg:text-base lg:max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos tempore tenetur doloribus asperiores reprehenderit aliquam quas! Debitis pariatur, laborum unde nesciunt et ratione error vero molestias, eius ullam voluptatibus?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </motion.div>


        // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        //     <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

        //         <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        //             <span className="relative inline-block">

        //                 <defs>
        //                     <pattern
        //                         id="d9d7687a-355f-4502-8ec4-7945db034688"
        //                         x="0"
        //                         y="0"
        //                         width=".135"
        //                         height=".30"
        //                     >
        //                         <circle cx="1" cy="1" r=".7" />
        //                     </pattern>
        //                 </defs>
        //                 <rect
        //                     fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
        //                     width="52"
        //                     height="24"
        //                 />

        //                 <span className="relative">Våra tjänster</span>
        //             </span>{' '}

        //         </h2>

        //     </div>
        //     <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        //         <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
        //             <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
        //                 <svg
        //                     className="w-10 h-10 text-deep-purple-accent-400"
        //                     stroke="currentColor"
        //                     viewBox="0 0 52 52"
        //                 >
        //                     <polygon
        //                         strokeWidth="3"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         fill="none"
        //                         points="29 13 14 29 25 29 23 39 38 23 27 23"
        //                     />
        //                 </svg>
        //             </div>
        //             <h6 className="mb-2 font-semibold leading-5">Projektering och Projektledning</h6>
        //             <p className="text-sm text-gray-900">
        //                 Baseball ipsum dolor sit amet cellar rubber win hack tossed.
        //                 Slugging catcher slide bench league, left fielder nubber.
        //             </p>
        //         </div>
        //         <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
        //             <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
        //                 <svg
        //                     className="w-10 h-10 text-deep-purple-accent-400"
        //                     stroke="currentColor"
        //                     viewBox="0 0 52 52"
        //                 >
        //                     <polygon
        //                         strokeWidth="3"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         fill="none"
        //                         points="29 13 14 29 25 29 23 39 38 23 27 23"
        //                     />
        //                 </svg>
        //             </div>
        //             <h6 className="mb-2 font-semibold leading-5">Renovering & nybyggnation</h6>
        //             <p className="text-sm text-gray-900">
        //                 We meet at one of those defining moments - a moment when our nation
        //                 is at war, our economy is in turmoil, and the American promise has
        //                 been threatened once more.
        //             </p>
        //         </div>
        //         <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
        //             <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
        //                 <svg
        //                     className="w-10 h-10 text-deep-purple-accent-400"
        //                     stroke="currentColor"
        //                     viewBox="0 0 52 52"
        //                 >
        //                     <polygon
        //                         strokeWidth="3"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         fill="none"
        //                         points="29 13 14 29 25 29 23 39 38 23 27 23"
        //                     />
        //                 </svg>
        //             </div>
        //             <h6 className="mb-2 font-semibold leading-5">El & styrsystem</h6>
        //             <p className="text-sm text-gray-900">
        //                 Strategic high-level 30,000 ft view. Drill down re-inventing the
        //                 wheel at the end of the day but curate imagineer, or to be inspired
        //                 is to become creative.
        //             </p>
        //         </div>
        //         <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
        //             <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
        //                 <svg
        //                     className="w-10 h-10 text-deep-purple-accent-400"
        //                     stroke="currentColor"
        //                     viewBox="0 0 52 52"
        //                 >
        //                     <polygon
        //                         strokeWidth="3"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         fill="none"
        //                         points="29 13 14 29 25 29 23 39 38 23 27 23"
        //                     />
        //                 </svg>
        //             </div>
        //             <h6 className="mb-2 font-semibold leading-5">Service & installation</h6>
        //             <p className="text-sm text-gray-900">
        //                 Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.
        //                 Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et
        //                 tortor diam, id tempor elit.
        //             </p>
        //         </div>
        //         <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
        //             <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
        //                 <svg
        //                     className="w-10 h-10 text-deep-purple-accent-400"
        //                     stroke="currentColor"
        //                     viewBox="0 0 52 52"
        //                 >
        //                     <polygon
        //                         strokeWidth="3"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         fill="none"
        //                         points="29 13 14 29 25 29 23 39 38 23 27 23"
        //                     />
        //                 </svg>
        //             </div>
        //             <h6 className="mb-2 font-semibold leading-5">Fasad och Takarbeten
        //             </h6>
        //             <p className="text-sm text-gray-900">
        //                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        //                 accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
        //                 perspiciatis unde omnis.
        //             </p>
        //         </div>
        //         <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
        //             <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
        //                 <svg
        //                     className="w-10 h-10 text-deep-purple-accent-400"
        //                     stroke="currentColor"
        //                     viewBox="0 0 52 52"
        //                 >
        //                     <polygon
        //                         strokeWidth="3"
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         fill="none"
        //                         points="29 13 14 29 25 29 23 39 38 23 27 23"
        //                     />
        //                 </svg>
        //             </div>
        //             <h6 className="mb-2 font-semibold leading-5">Mark och Anläggning</h6>
        //             <p className="text-sm text-gray-900">
        //                 Flatland! Hypatia. Galaxies Orion's sword globular star cluster?
        //                 Light years quasar as a patch of light gathered by gravity Vangelis
        //                 radio telescope.
        //             </p>
        //         </div>
        //     </div>

        // </div >
    )
}

export default Tjanster