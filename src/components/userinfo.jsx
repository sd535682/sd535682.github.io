import Typewriter from "typewriter-effect";
import CopyTextComponent from "./ui/copytext";
import DownloadButton from "./downloadcv";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col justify-between gap-5 text-inter">
        <div className="flex flex-row justify-between">
          <img
            src="https://raw.githubusercontent.com/sd535682/sd535682.github.io/main/src/assets/images/avatar.webp"
            className="rounded-full size-48"
          />
          <div className="rotate-90 flex flex-row text-start font-poppins font-bold text-xs py-5 dark:text-darkTheme-textColor">
            sd535682@gmail.com&nbsp;&nbsp;
            <CopyTextComponent />
          </div>
        </div>
        <h1 className="font-inter font-bold dark:text-darkTheme-textColor">
          <Typewriter
            options={{
              strings: [
                "Mobile Application Developer...",
                "Web Developer...",
                "Learning => Backend Development...",
                "Goal => Full Stack Developer...",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 0,
            }}
          />
        </h1>
        <DownloadButton />
      </div>
      <h1 className="text-2xl lg:text-3xl font-poppins font-bold dark:text-darkTheme-textColor">
        Hey, I&apos;m Subhadeep Das.
        <br />
        I&apos;m a &nbsp;
        <span className="inline-block">
          <Typewriter
            options={{
              strings: [
                "React Native Dev",
                "ReactJS Developer",
                "Front-End Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
        <br />
        based in Kolkata, WB.
      </h1>
      <p className="text-gray-700 text-md lg:text-lg font-inter font-medium dark:text-darkTheme-textGrey">
        I’m a frontend developer who loves transforming ideas into reality with
        code. I’m always eager to learn new technologies and optimize my
        workflow. When I’m not coding, I’m probably traveling, drawing, or
        geeking out over the latest gadgets. Let’s build something amazing
        together!
      </p>
    </>
  );
}
