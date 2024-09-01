import ThemeButton from "../components/themebutton";

export default function Header() {
  return (
    <>
      <div className="flex w-full md:w-[576px] dark:bg-darkTheme-backgroundColor flex-row justify-between items-center">
        <div className="flex flex-row gap-2">
          <span>
            <i className="fa-solid fa-terminal dark:text-darkTheme-textColor"></i>
          </span>
          <h1 className="dark:text-darkTheme-textColor">Subhadeep Portfolio</h1>
        </div>
        <ThemeButton />
      </div>
    </>
  );
}
