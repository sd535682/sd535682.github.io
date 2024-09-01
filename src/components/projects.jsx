import Cards from "./ui/cards";

export default function Projects() {
  return (
    <>
      <h1 className="text-xl lg:text-2xl font-poppins font-bold dark:text-darkTheme-textColor">
        Projects
      </h1>
      {/* Projects List */}
      <Cards
        url="https://github.com/sd535682/Nectarful-Ai"
        title="Nectarful AI"
        year="2024"
        desc="Developed a React Native app to create AI-powered fruit smoothie recipes, highlighting expertise in mobile development, API integration, and AI."
        imageurl=""
        stack="React Native, Expo, Expo Router, Supabase, Zustand, LLaMA 3"
      />
      <Cards
        url=" https://addons.mozilla.org/en-US/firefox/addon/cloud-cover-lite-weather/"
        title="Cloud Cover - Browser Extension"
        year="2024"
        desc="Built a cross-browser extension for real-time weather updates using geolocation and reverse geocoding, proudly published on the Firefox Add-ons store."
        imageurl=""
        stack="JavaScript, HTML, CSS"
      />
      <Cards
        url="https://github.com/sd535682/Mood_Quotes"
        title="Mood Quotes"
        year="2022"
        desc="Created a React Native app that fetches random quotes and offers Text-to-Speech for an inspiring motivation."
        imageurl=""
        stack="React Native"
      />
      <Cards
        url="https://github.com/sd535682/Ecommerce-App-UI"
        title="Simple Ecommerce"
        year="2024"
        desc="Developed a React Native e-commerce app using Redux and Fakestore API, showcasing efficient state management and navigation."
        imageurl=""
        stack="React Native, Expo, Redux Toolkit"
      />
      <Cards
        url="https://reactjs-form-level-1.netlify.app/"
        title="Form Validation"
        year="2024"
        desc="Implemented a React JS app demonstrating conditional form validation with real-time user input."
        imageurl=""
        stack="React JS, Tailwind CSS"
      />
      <Cards
        url="https://sd535682.github.io/Weather_Watch/"
        title="Weather Watch"
        year="2022"
        desc="Built an interactive weather with dynamic backgrounds reflecting real-time conditions via OpenWeatherMap API."
        imageurl=""
        stack="HTML, CSS, JavaScript"
      />
      <Cards
        url="https://sd535682.github.io/Apod_API/"
        title="APOD Explorer"
        year="2022"
        desc="Developed APOD Explorer, a web app showcasing NASA's Astronomy Picture of the Day with an interactive, visually stunning experience."
        imageurl=""
        stack="HTML, CSS, JavaScript"
      />
      <Cards
        url="https://www.kaggle.com/code/subhadeepdas1998/lungs-segmentation"
        title="Enhanced Lung Segmentation"
        year="2024"
        desc="Enhanced lung segmentation in chest X-rays using Python and image processing, boosting accuracy from 72% to 81% for pneumonia diagnosis refinement."
        imageurl=""
        stack="Python, OpenCV, MatplotLib, SKLearn"
      />
    </>
  );
}
