import ContactForm from "../components/contactform";
import Education from "../components/education";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Profile from "../components/userinfo";

export default function Body() {
  return (
    <div className="flex flex-col gap-5 max-w-[576px]">
      <Profile />
      <Skills />
      <Projects />
      <Education />
      <ContactForm />
    </div>
  );
}
