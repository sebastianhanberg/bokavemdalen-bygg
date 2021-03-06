
import './App.css';
import Tjanster from './components/Tjanster';
import About from './components/About';
import Projekt from './components/Projekt';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion'
import Main from './components/Main';
import Offert from './components/Offert';
import Nav from './components/Nav';



function App() {
  
  return (
    <div className='App' >
     
      
      <AnimatePresence>
      <Nav />
      <Hero />
      {/* <Main /> */}
      <Tjanster/>
      {/* <Projekt /> */}
      <About />      
      <Offert/>
      <Footer/>
      </AnimatePresence>
      
      
    </div>
  );
}

export default App;



// import './App.css';
// import HomePage from './components/HomePage'
// import { Routes, Route } from "react-router-dom"
// import Tjanster from './components/Tjanster';
// import About from './components/About';
// import Projekt from './components/Projekt';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Footer from './components/Footer';
// import { AnimatePresence } from 'framer-motion'
// import Main from './components/Main';



// function App() {
  
//   return (
//     <div className='App' >
//       <AnimatePresence exitBeforeEnter>
      
      
//       <Hero />
      

//       <Routes>
//         <Route exact path="/" element={ <HomePage/>}/>
//         <Route path="/tjanster" element={ <Tjanster/>}/>
//         <Route path="/about" element={ <About/>}/>
//         <Route path="/projekt" element={ <Projekt/>}/>
//       </Routes>
//       <Footer/>
      
//       </AnimatePresence>
//     </div>
//   );
// }

// export default App;

