import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation, NavLink } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUserName, setCurrentUserName] = useState("Guest");
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);
  const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
  const isWatchPage = location.pathname.startsWith('/watch');

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) setCurrentUserName(name);
  }, []);

  useEffect(() => {
    if (!location.pathname.startsWith('/search')) {
      setSearchQuery("");
    }
    setMobileMenuOpen(false);
    setShowDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.length > 2) {
        try {
          const res = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchQuery}`);
          setSuggestions(res.data.results.slice(0, 6));
        } catch (err) { console.error(err); }
      } else {
        setSuggestions([]);
      }
    };
    const timer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const transitionNavBar = () => {
      if (window.scrollY > 50) handleShow(true);
      else handleShow(false);
    };
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowDropdown(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length > 0) {
      navigate(`/search?q=${value}`);
    } else if (location.pathname === "/search") {
      navigate("/home");
    }
  };

  if (isWatchPage) return null;

  const navLinkClass = ({ isActive }) =>
    `transition duration-300 hover:text-red-600 ${isActive ? "text-red-600 font-bold" : "text-gray-200"}`;

  
  const AvatarIcon = () => (
    <div className="w-8 h-8 rounded border border-gray-600 shadow-md bg-red-700 flex items-center justify-center text-white font-bold text-sm select-none">
      {currentUserName?.charAt(0).toUpperCase() || "G"}
    </div>
  );

  return (
    <nav ref={navRef} className={`fixed top-0 w-full z-[100] transition-all duration-500 ${show || mobileMenuOpen ? "bg-[#111] shadow-2xl" : "bg-transparent"}`}>
      <div className="flex items-center justify-between px-4 py-4 md:px-12 lg:px-16">

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white text-2xl focus:outline-none"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          <Link to="/home" onClick={() => setSearchQuery("")}>
            <h1 className="text-red-600 text-xl md:text-3xl font-black tracking-tighter uppercase transition hover:scale-105">
              Cinema+
            </h1>
          </Link>

          <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <li><NavLink to="/home" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/tv-shows" className={navLinkClass}>TV Shows</NavLink></li>
            <li><NavLink to="/movies" className={navLinkClass}>Movies</NavLink></li>
            <li><NavLink to="/latest" className={navLinkClass}>New & Popular</NavLink></li>
            <li><NavLink to="/my-list" className={navLinkClass}>My List</NavLink></li>
          </ul>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <div className="relative">
            <input
              value={searchQuery}
              onChange={handleSearch}
              type="text"
              placeholder="Search..."
              className="bg-black/40 border border-gray-600 text-white text-xs px-4 py-2 rounded-full focus:outline-none focus:border-red-600 w-32 md:w-64 transition-all focus:bg-black"
            />
          </div>

          <div className="relative">
            
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
              <AvatarIcon />
            </div>

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-48 bg-[#111] border border-gray-800 py-3 rounded shadow-2xl animate-in fade-in zoom-in duration-200">
                <div className="px-4 py-2 text-[10px] text-gray-500 border-b border-gray-800 mb-2 uppercase tracking-widest">{currentUserName}</div>
                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-200 hover:bg-red-600 transition">Account</Link>
                <Link to="/help" className="block px-4 py-2 text-sm text-gray-200 hover:bg-red-600 transition">Help Center</Link>
                <div className="my-2 border-t border-gray-800"></div>
                <button onClick={() => { localStorage.clear(); navigate("/signin"); }} className="w-full text-left px-4 py-2 text-sm text-white hover:bg-red-700 transition font-bold">Sign Out</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? "max-h-96 border-b border-gray-800" : "max-h-0"}`}>
        <ul className="flex flex-col items-center gap-4 py-6 bg-[#111] text-sm">
          <li><NavLink to="/home" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/tv-shows" className={navLinkClass}>TV Shows</NavLink></li>
          <li><NavLink to="/movies" className={navLinkClass}>Movies</NavLink></li>
          <li><NavLink to="/latest" className={navLinkClass}>New & Popular</NavLink></li>
          <li><NavLink to="/my-list" className={navLinkClass}>My List</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;