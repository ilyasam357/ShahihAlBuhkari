import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link, Outlet } from "react-router-dom";
import NavTop from "./components/fragments/Navtop";
import DarkModeProvider from "./context/DarkMode";
import CardDark from "./components/fragments/TemplateDarkMode";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DarkModeProvider>
        <CardDark>
          <div className=" dark:bg-slate-600  h-full">
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
              className={`dark:bg-slate-900 bg-slate-100 w-80 h-screen fixed pt-20 px-5 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <ul>
                <li>
                  <Link
                    to="jilid1"
                    className="dark:text-white font-bold text-xl text-green-500"
                  >
                    Jilid 1
                  </Link>
                </li>
                <li>
                  <Link
                    to="jilid2"
                    className="dark:text-white font-bold text-xl text-green-500"
                  >
                    Jilid 2
                  </Link>
                </li>
                <li>
                  <Link
                    to="jilid3"
                    className="dark:text-white font-bold text-xl text-green-500"
                  >
                    Jilid 3
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-2/3 mx-auto pt-20">
              {/* {window.location.pathname === "/" && (
                <div className="h-screen">
                  <h1 className="text-3xl font-bold text-center dark:text-white">
                    ahlan wa sahlan
                  </h1>
                </div>
              )}
              {window.location.pathname === "/jilid1" && <Outlet />} */}
              <Outlet />
            </div>
          </div>
        </CardDark>
      </DarkModeProvider>
    </>
  );
}

export default App;
