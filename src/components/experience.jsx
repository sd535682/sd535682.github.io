// export default function Experience() {
//   return (
//     <>
//       <h1 className="text-xl lg:text-2xl font-poppins font-bold dark:text-darkTheme-textColor">
//         Professional Experience
//       </h1>
//     </>
//   );
// }

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Klimb.io",
      duration: "14 Jan 25 - 16 Apr 25",
      achievements: [
        'Adapted the "Hire" module from the ReactJS web app into a React Native mobile application for Internal team, ensuring UI consistency and cross-platform functionality.',
        "Improved ReactJS web app performance by fixing 10+ major and multiple minor bugs, implementing reusable components, cutting codebase size and improving load times.",
        "Enhanced WordPress marketing site with custom HTML/CSS and plugin management, maintaining brand consistency across digital touchpoints.",
        "Converted Figma designs into responsive, accessible React and React Native components, ensuring pixel-perfect UI across devices.",
        "Collaborated cross-functionally in Agile sprints, using GitHub/Bitbucket for version control and Trello for task management, accelerating feature delivery by 20%.",
      ],
    },
    {
      title: "React Native Intern",
      company: "BrackettUp HealthTech Pvt Ltd",
      duration: "1 Oct 24 - 28 Dec 24",
      achievements: [
        "Designed and developed two cross-platform mobile apps with 20+ screens using React Native, improving feature accessibility for end users.",
        "Integrated RESTful APIs to enable efficient real-time data exchange, enhancing app responsiveness and backend communication.",
        "Translated Figma designs into responsive UIs for iOS and Android, ensuring consistency across screen sizes and devices.",
        "Diagnosed and resolved issues from 5+ third-party packages, improving overall app stability and reducing crashes by 30%.",
        "Collaborated with designers and developers in Agile sprints using modern development workflows.",
      ],
    },
  ];

  return (
    <>
      <div>
        <h1 className="text-xl lg:text-2xl font-poppins font-bold dark:text-darkTheme-textColor">
          Work Experience
        </h1>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="">
            {/* Timeline dot */}
            {/* <div className="absolute -left-3 top-0 w-6 h-6 bg-gray-400 rounded-full border-4 border-white"></div> */}

            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {exp.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <p className="text-lg font-medium text-gray-700">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 font-mono font-bold text-center bg-gray-200 px-3 py-1 rounded">
                    {exp.duration}
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-500 font-medium leading-relaxed text-md">
                        {achievement}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies (implied from content) */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {index === 0 ? (
                    <>
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                        React JS
                      </span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                        React Native
                      </span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                        WordPress
                      </span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                        Trello
                      </span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                        GitHub
                      </span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                        Agile
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                        React Native
                      </span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                        REST APIs
                      </span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                        iOS
                      </span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                        Android
                      </span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                        Figma
                      </span>
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded font-medium">
                        Agile
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
