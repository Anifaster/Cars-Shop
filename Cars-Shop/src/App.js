import React from "react";
import Driver from "./component/driver/Driver";
import Find from "./component/find/Find";
import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import Luxury from "./component/luxury/Luxury";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
      <Footer />
    </div>
  );
}

export default App;
