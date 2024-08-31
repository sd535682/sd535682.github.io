export default function Header() {
  return (
    <>
      <div className="flex w-full md:w-[576px] flex-row justify-between items-center">
        <div className="flex flex-row gap-2">
          <span>
            <i className="fa-brands fa-connectdevelop"></i>
          </span>
          <h1>Subhadeep Portfolio</h1>
        </div>
        <a href="#">
          <i className="fa-solid fa-moon"></i>
        </a>
      </div>
    </>
  );
}
