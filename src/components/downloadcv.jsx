export default function DownloadButton() {
  return (
    <>
      <a
        href="https://drive.google.com/file/d/1w1UoMrbqIirkd-35roXvmi_9fmyP-GOY/view"
        target="_blank"
        className="px-4 py-2 bg-black dark:bg-darkTheme-textColor text-darkTheme-textColor dark:text-black w-fit text-sm font-inter font-extrabold rounded-lg"
      >
        Download Resume&nbsp;&nbsp;
        <i className="fa-solid fa-cloud-arrow-down"></i>
      </a>
    </>
  );
}
