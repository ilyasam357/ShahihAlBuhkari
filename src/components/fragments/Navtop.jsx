import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../../context/DarkMode";
import CardDark from "./TemplateDarkMode";

const NavTop = (props) => {
  const { isDark, setIsDark } = useContext(Theme);
  const { children } = props;

  useEffect(() => {
    const storedIsDark = localStorage.getItem("isDark");
    if (storedIsDark) {
      setIsDark(JSON.parse(storedIsDark));
    }
  }, []);
  return (
    <CardDark>
      <div className="bg-slate-100 border-b-2 border-slate-500 py-4 w-full fixed z-30 px-3 flex justify-between dark:bg-slate-900 dark:text-white">
        <div className="flex gap-2">
          {children}
          <h1 className="text-green-500 font-bold text-xl dark:text-white">
            <Link to={"/"}>SHAHIH AL-BUKHARI</Link>
          </h1>
        </div>
        <ul>
          <li>
            <button
              onClick={() => {
                setIsDark(!isDark);
                localStorage.setItem("isDark", JSON.stringify(!isDark));
              }}
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </CardDark>
  );
};

export default NavTop;
