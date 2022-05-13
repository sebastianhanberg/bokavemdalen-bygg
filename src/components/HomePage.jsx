import '../App.css';
import Main from './Main';
import { motion } from 'framer-motion'


function HomePage() {

    return (

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >

            <Main />
        </motion.div>
    );
}

export default HomePage;
