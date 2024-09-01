import { useTheme } from "../../context/themetoggle";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div>
        <button onClick={toggleTheme}>
          {theme == "dark" ? (
            <i className="fa-solid fa-sun text-darkTheme-textColor transform-transition duration-500"></i>
          ) : (
            <i className="fa-solid fa-moon text-darkTheme-backgroundColor transform-transition duration-500"></i>
          )}
        </button>
      </div>
    </>
  );
}
