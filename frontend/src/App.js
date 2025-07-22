import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

// Placeholder components for other routes
const About = () => <div className="min-h-screen bg-gray-100 pt-32 px-8"><h1 className="text-4xl font-light">About Page</h1><p className="mt-4 text-gray-600">Coming soon...</p></div>;
const Work = () => <div className="min-h-screen bg-gray-100 pt-32 px-8"><h1 className="text-4xl font-light">Work Page</h1><p className="mt-4 text-gray-600">Coming soon...</p></div>;
const Offices = () => <div className="min-h-screen bg-gray-100 pt-32 px-8"><h1 className="text-4xl font-light">Offices Page</h1><p className="mt-4 text-gray-600">Coming soon...</p></div>;
const Careers = () => <div className="min-h-screen bg-gray-100 pt-32 px-8"><h1 className="text-4xl font-light">Careers Page</h1><p className="mt-4 text-gray-600">Coming soon...</p></div>;
const Contact = () => <div className="min-h-screen bg-gray-100 pt-32 px-8"><h1 className="text-4xl font-light">Contact Page</h1><p className="mt-4 text-gray-600">Coming soon...</p></div>;
const MetaTalks = () => <div className="min-h-screen bg-gray-100 pt-32 px-8"><h1 className="text-4xl font-light">MetaTalks Page</h1><p className="mt-4 text-gray-600">Coming soon...</p></div>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/offices" element={<Offices />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/metatalks" element={<MetaTalks />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;