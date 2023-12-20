import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link, Outlet } from "react-router-dom";
import NavTop from "./components/fragments/Navtop";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <NavTop>
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </NavTop>

        <div
          className={`bg-slate-100 w-80 h-screen fixed pt-20 px-5 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul>
            <li>
              <Link to="jilid1" className="font-bold text-xl text-green-500">
                Jilid 1
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-2/3 mx-auto pt-20">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
