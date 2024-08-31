import SocialLink from "./ui/scm_link";

export default function Socials() {
  const iconGithub = "fa-brands fa-github fa-xl";
  const iconLinkedIN = "fa-brands fa-linkedin fa-xl";
  const iconEmail = "fa-brands fa-google-plus-g fa-xl";
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row gap-4">
        <SocialLink icon={iconGithub} url="https://github.com/sd535682" />
        <SocialLink
          icon={iconLinkedIN}
          url="https://www.linkedin.com/in/subhadeepsad/"
        />
        <SocialLink
          icon={iconEmail}
          url="https://mail.google.com/mail/?view=cm&to=sd535682@gmail.com&su=Interview for [Position] at [Company Name]"
        />
      </div>
    </div>
  );
}
