import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



// Components
import Navbar from "../src/components/Navbar.jsx";
import Footer from "../src/components/footer.jsx";
import Cta from "../src/components/Cta.jsx";
// import Homeproducts from "../src/components/";
// Pages
import Women from "../src/pages/ Women.jsx";
import Hero from "../src/pages/Hero.jsx";
import Men from "../src/pages/Men.jsx";
import Kids from "../src/pages/ Kids.jsx";
import ProductDetails from "../src/pages/ ProductDetails.jsx";
import Reviewparalax from "../src/pages/Reviewparalax.jsx";
import AllReviews from "../src/pages/Review.jsx";
import Contact from "../src/pages/Contact.jsx";

// Category Pages
import Sweaters from "../src/pages/Category.jsx/Sweaters.jsx";
import Jackets from "../src/pages/Category.jsx/Jackets.jsx"
import Jeans from "../src/pages/Category.jsx/Jeans.jsx";
import Hoodies from "../src/pages/Category.jsx/Hoodies.jsx";
 
//Category Women Pages
import WoolCoats from "./pages/womencategory/woolcoat.jsx";
import Pullover from "./pages/womencategory/Pullover.jsx";
import CableKnite from "./pages/womencategory/Cableknite.jsx";
import Sweater from "./pages/womencategory/Sweatershirts.jsx";
import Support from "./pages/support.jsx";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (    
    <BrowserRouter>    
      <Navbar />
      <Routes>         
        <Route path="/" element={
          <>
            <Hero />             
            <Men />
            <Women />
            <Kids />
            <ProductDetails />
            <Cta />
            <Reviewparalax />
            <Contact /> 
            <Footer />
          </>
        } />   

        {/* Category Pages */}
        <Route path="/men/sweaters" element={<Sweaters />} />
        <Route path="/men/jackets" element={<Jackets />} />        
        <Route path="/men/jeans" element={<Jeans />} />
        <Route path="/men/hoodies" element={<Hoodies />} />

        {/* Women */}
   <Route path="/women/woolcoat" element={<WoolCoats />} />
<Route path="/women/pullover" element={<Pullover />} />
<Route path="/women/cableknite" element={<CableKnite />} />
<Route path="/women/sweatershirts" element={<Sweater />} />

{/* Support Details */}
<Route path="/review" element={<AllReviews />} />
<Route path="/contact" element={<Contact />} />
<Route path="/support" element={<Support />} />

</Routes>
</BrowserRouter>
  );
}
export default App;
