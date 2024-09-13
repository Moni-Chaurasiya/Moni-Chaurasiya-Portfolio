import { useState } from "react";
//import { Container} from "../index";
//import { Link } from "react-router-dom";
import { Logo, Logout } from "../index";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.status); // Changed to 'isAuthenticated'
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Skills",
      slug: "/skills",
      active: true,
    },
    // {
    //   name: "Experience",
    //   slug: "/experience",
    //   active: true,
    // },
    {
      name: "Projects",
      slug: "/projects",
      active: true,
    },
    {
      name: "Education",
      slug: "/education",
      active: true,
    },
    {
      name: "Contact",
      slug: "/contact",
      active: true,
    },
  ];

  const handleNavigation = (slug) => {
    setIsMenuOpen(false);
    navigate(slug);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="flex items-center justify-between py-2   px-6">
        {/* Logo */}
        <a href="/" className="outline-none border-none">
          <Logo />
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex flex-grow justify-center space-x-7 md:space-x-7">
          {navItems
            .filter((item) => item.active)
            .map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.slug)}
                className="text-gray-700 hover:text-gray-900 text-2xl font-serif"
              >
                {item.name}
              </button>
            ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex space-x-4">
          {isAuthenticated ? (
            <Logout /> // Use the logout component
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-900 text-white font-bold px-4 py-2 rounded-lg hover:bg-navy-blue transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-blue-900 text-white font-bold px-4 py-2 rounded-lg hover:bg-navy-blue transition"
              >
                Signup
              </button>
            </>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-40">
          <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg z-50 p-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 focus:outline-none mb-4"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="space-y-4 ">
              {navItems
                .filter((item) => item.active)
                .map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.slug)}
                      className="text-gray-700 hover:text-gray-900 w-full text-left text-2xl font-serif "
                    >
                      {item.name}
                      {/* <a href={item.slug}> {item.name} </a> */}
                    </button>
                  </li>
                ))}
              {isAuthenticated ? (
                <Logout />
              ) : (
                <>
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-blue-900 text-white font-bold px-4 py-2 rounded-lg hover:bg-navy-blue transition"
                  >
                    Login
                  </button>
                  <br />
                  <button
                    onClick={() => navigate("/signup")}
                    className="bg-blue-900 text-white font-bold px-4 py-2 rounded-lg hover:bg-navy-blue transition"
                  >
                    Signup
                  </button>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
