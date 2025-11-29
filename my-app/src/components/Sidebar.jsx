import { useState } from "react"; 
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar({ active, scrollToSection }) {
  // State to manage the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle clicks, scroll, and close the mobile menu
  const handleScrollAndCloseMenu = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    // Responsive container classes:
    // Mobile (default): w-full, sticky top-0, bg-gray-900, z-10
    // Desktop (lg:): lg:w-1/3, lg:fixed, lg:h-screen, lg:left-0, lg:bg-transparent, lg:z-0
    <aside className="relative text-gray-300 p-6 flex flex-col justify-between transition-all duration-300 w-full sticky top-0 bg-gray-900 z-10 lg:w-1/5 lg:fixed lg:h-screen lg:left-0 lg:ml-7 lg:static lg:bg-transparent lg:z-0 lg:p-6">
      
      {/* 1. Main Content Block (Logo, Name, Nav) */}
      {/* On mobile: Horizontal header layout (Logo/Name and Hamburger) */}
      {/* On desktop: Vertical sidebar layout */}
      <div className="flex flex-row items-center justify-between w-full lg:flex-col lg:items-start lg:justify-start">
        
        {/* Logo and Text (Horizontal on mobile, vertical on desktop) */}
        <div className="flex flex-row space-x-2 items-center lg:flex-col lg:items-start lg:space-x-0 lg:pt-1">
          <img src="/slo.png" alt="Logo" className="w-18 h-18 lg:mb-4 rounded-full" />
          <div className="lg:w-full">
            <h1 className="font-sans font-bold text-1 md:text-2xl lg:text-3xl whitespace-nowrap truncate">Saw Eh Thalay Htoo</h1>
            <h2 className="font-mono font-bold text-sm lg:text-lg hidden lg:block mb-6 pt-3">IT Student</h2>
            <br className="hidden lg:block" />
          </div>
        </div>
        
        {/* --- HAMBURGER BUTTON (MOBILE ONLY) --- */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-label="Toggle navigation menu">
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        {/* --- DESKTOP NAVIGATION (HIDDEN ON MOBILE) --- */}
        <nav className="hidden lg:flex flex-col space-y-4" aria-label="Main Navigation">
          {["ABOUT", "EXPERIENCE", "PROJECT","SKILLS", "CONTACT"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-sm text-left p-1 w-32 transition-all border-b-2 ${active === id ? "border-sky-500 text-sky-400 font-semibold tracking-wider" : "border-transparent hover:border-sky-400"}`}
            >
              {id}
            </button>
          ))}
        </nav>
      </div>

      {/* 2. SOCIAL ICONS BLOCK (HIDDEN ON MOBILE, VISIBLE ON DESKTOP) */}
      <div className="hidden lg:flex space-x-4 mt-6">
        <a href="https://www.facebook.com/share/1FixKYf8Tu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
          <FaFacebook size={30} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
          <FaInstagram size={30} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
          <FaLinkedin size={30} />
        </a>
      </div>

      {/* --- MOBILE SLIDING MENU (MOBILE ONLY) --- */}
      {/* Positioned absolutely, taking the full width below the main header row */}
      {isMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-gray-800 p-4 flex flex-col items-center space-y-4 z-20 shadow-lg" aria-label="Mobile Navigation">
          {["ABOUT", "EXPERIENCE", "PROJECT", "CONTACT"].map((id) => (
            <button
              key={id}
              onClick={() => handleScrollAndCloseMenu(id)} 
              className={`text-sm p-2 w-full text-center ${active === id ? "text-sky-400 font-semibold" : "text-gray-300"}`}
            >
              {id}
            </button>
          ))}
          {/* OPTIONAL: Add mobile social icons here if desired, currently only desktop */}
        </nav>
      )}
    </aside>
  );
}