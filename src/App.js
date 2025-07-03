import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-blue-700 text-white flex items-center justify-between px-4 py-4 md:px-8 shadow-md">
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1 cursor-pointer">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </div>

        <nav className="hidden md:flex space-x-6">
          {["Home", "Services", "Doctors", "Contact", "About"].map((item) => (
            <a key={item} href="#" className="hover:underline">
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex space-x-2">
          <button className="bg-white text-blue-700 font-semibold px-4 py-1 rounded hover:bg-blue-100">
            Login
          </button>
          <button className="bg-white text-blue-700 font-semibold px-4 py-1 rounded hover:bg-blue-100">
            Sign Up
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="md:hidden bg-blue-600 text-white px-4 py-2 space-y-2">
          {["Home", "Services", "Doctors", "Contact", "About"].map((item) => (
            <a key={item} href="#" className="block hover:underline">
              {item}
            </a>
          ))}
        </nav>
      )}

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-4 py-16">
        <img
          src="https://via.placeholder.com/600x300?text=Medical+Hero+Image"
          alt="Medical Hero"
          className="mb-6 rounded shadow-md max-w-full h-auto"
        />
        <p className="max-w-xl text-lg text-gray-700">
          Welcome to MedicBot — your trusted AI health companion. Get fast, reliable answers to your medical questions, 24/7.
        </p>
      </section>
    </div>
  );
}

export default App;
