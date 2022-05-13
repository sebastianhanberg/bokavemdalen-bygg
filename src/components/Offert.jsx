import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import 'flowbite';
import { useForm, ValidationError } from '@formspree/react'
import App from '../App';

function Offert() {
    const [state, handleSubmit] = useForm("xyyolyjy");
    if (state.succeeded) {
        return <>
            <App />
        </>
    }
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
            <div id="offert" class="container mx-auto mb-10 w-full max-w-xl xl:px-8 xl:w-2/3">
                <div class="bg-white bg-opacity-100 rounded shadow-md p-7 sm:p-10">
                    <h3 class="mb-4 text-xl text-dark-blue font-semibold sm:text-center sm:mb-6 sm:text-3xl">
                        Kontakta oss för offert
                    </h3>
                    <form onSubmit={handleSubmit}>
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
                            <ValidationError
                                prefix="FirstName"
                                field="firstName"
                                errors={state.errors}
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
                            <ValidationError
                                prefix="Lastname"
                                field="lastName"
                                errors={state.errors}
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
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div class="mb-1 sm:mb-2">
                            <label for="firstName" class="inline-block mb-1 text-dark-blue font-medium text-sm">Vad vill du ha hjälp med? </label>
                            <textarea
                                placeholder="Beskriv så noga du kan så vi kan hjälpa dig på bästa sett.."
                                required=""
                                type="text"
                                class="flex-grow w-full h-24 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="message"
                                name="message"
                            />
                            <ValidationError
                                prefix="message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <div class="mt-4 mb-2 sm:mb-4">
                            <button
                                type="submit"
                                disabled={state.submitting}
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
        </motion.div>

    )
}

export default Offert