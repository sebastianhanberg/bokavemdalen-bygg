import React from 'react'
import image1 from '../images/work2.jpg'
import image2 from '../images/work1.jpg'
import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
            <div id="about" className="px-4 py-16 mt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            Bokavemdalens historia
                        </h2>
                        <p className="text-sm text-gray-700 md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vero. Consequatur culpa, magnam aliquid debitis cumque sequi pariatur labore fuga officia nam incidunt magni eum explicabo fugit accusamus facere esse.
                        </p>

                    </div>
                    <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                        <img
                            className="object-cover w-full h-56 shadow-lg sm:h-64 md:h-80 lg:h-96"
                            src={image2}
                            alt=""
                        />
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




            </div>
        </motion.div>

    )
}

export default About