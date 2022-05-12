import React from 'react'
import image1 from '../images/work2.jpg'
import image2 from '../images/work1.jpg'
import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
            <div className="px-4 py-16 mt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                    <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                            src={image2}
                            alt=""
                        />
                    </div>
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            Exentors historia
                        </h2>
                        <p className="text-sm text-gray-700 md:text-base">
                            Exentor bygger och anpassar alltifrån bostäder, skolor, samhällsfastigheter och kommersiella fastigheter i Stockholm. Vi erbjuder helhetslösningar inom entreprenad, styr och reglerteknik, projektutveckling, fastighetsunderhåll och inredningssnickeri. Koncernen startade i Stockholm 1963 och omsätter cirka 20 miljoner kronor.
                        </p>

                    </div>
                </div>

                {/* <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            Kvalitetssäkrad arbetsprocess
                        </h2>
                        <p className="text-sm text-gray-700 md:text-base">
                            Kvalitetssäkring är viktigt inom alla delar av arbetsprocessen för att kunna leverera toppresultat inom den utsatta tiden. För att du ska kunna se att vi tar kvalitet på största allvar är vi även certifierade enligt byggbranschens kvalitetssystem BF9K. Under arbetets gång strävar vi efter att hålla en öppen kommunikation mellan hantverkare, projektledare och kund för att kunna vara flexibla inför eventuella förändrade förutsättningar.

                            För oss är alltid ett gott bemötande grunden för ett lyckat samarbete. Därför ställer vi alltid höga krav på oss själva när det handlar om tillgänglighet för våra kunder och snabb återkoppling. Vi levererar alltid hög kvalitet till bra priser i en heltäckande tjänst med lojalitet, struktur och ett kvalitetssäkrat arbetssätt.
                        </p>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            Bred kompetens inom många områden
                        </h2>
                        <p className="text-sm text-gray-700 md:text-base">
                            Vi på företaget har en bred kompetens som täcker in det mesta inom bygg och byggledning. Detta har vi fått genom att arbeta inom branschen i många år samt vidareutbilda oss när möjligheter getts för att alltid ligga i framkant när det kommer till nya tekniker och material.

                            Kontakta oss idag om du är intresserad av en pålitlig och erfaren samarbetspartner inom bygg som hjälper dig till perfekta resultat utan genvägar med fokus på kvalitet och effektivitet.
                        </p>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            Seriöst och dedikerat team
                        </h2>
                        <p className="text-sm text-gray-700 md:text-base">
                            Vi vet att ett byggprojekt i det egna hemmet påverkar vardagen – både för dig och även dina grannar. Därför är ett effektivt arbete - utan fusk och utan genvägar - det bästa alternativet. Anlitar du oss anlitar du ett dedikerat team som är där för att arbeta. Du kommer inte att se någon stå och prata i mobilen eller ha tankarna på annat. Jobbet går först - i alla lägen!

                            Kontakta oss idag om du är intresserad av en pålitlig och erfaren samarbetspartner inom bygg som hjälper dig till perfekta resultat utan genvägar med fokus på kvalitet och effektivitet.
                        </p> */}


                <div className="px-4 py-16 mt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                    Jobba hos oss {' '}
                                    <span className="relative px-1">
                                        <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />

                                    </span>
                                </h2>
                                <p className="lg:text-base text-gray-dark md:text-sm">
                                    Just nu söker vi medarbetare till våra byggprojekt.
                                </p>
                            </div>
                            <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                                Lediga tjänster:
                            </p>
                            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                                <ul className="space-y-3">
                                    <li className="flex">
                                        <span className="mr-1">
                                            <svg
                                                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </span>
                                        Projektledare

                                    </li>
                                    <li className="flex">
                                        <span className="mr-1">
                                            <svg
                                                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </span>
                                        Projektledare

                                    </li>
                                    <li className="flex">
                                        <span className="mr-1">
                                            <svg
                                                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </span>
                                        Projektledare
                                    </li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex">
                                        <span className="mr-1">
                                            <svg
                                                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </span>
                                        Projektledare
                                    </li>
                                    <li className="flex">
                                        <span className="mr-1">
                                            <svg
                                                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </span>
                                        Projektledare
                                    </li>
                                    <li className="flex">
                                        <span className="mr-1">
                                            <svg
                                                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </span>
                                        Projektledare
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                                src={image1}
                                alt=""
                            />
                        </div>
                    </div>

                </div>

            </div>
        </motion.div>

    )
}

export default About