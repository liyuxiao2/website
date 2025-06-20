/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Liyu Xiao",
  title: "Hey, I'm Liyu",
  subTitle: emoji(
    "A fullstack Developer, having experience in building applications using Java, Python, React, C# and other Technologies."
  ),
  resumeLink: "https://www.dropbox.com/scl/fi/pkbk26nspjn5zqeutqg49/LiyuXiaoResume.pdf?rlkey=a45s8eipvmhfg1l8j6iuoyh7i&st=e4rhapxu&dl=0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/liyuxiao2",
  linkedin: "https://www.linkedin.com/in/liyu-xiao-593176206/",
  gmail: "liyuxiao2006@gmail.com",
  instagram: "https://www.instagram.com/__liyuxiao/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};



// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "McMaster University",
      logo: require("./assets/images/mcmaster.png"),
      subHeader: "BSAc in Computer Science",
      duration: "September 2024 - April 2028",
    },
  ]
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Qoherent",
      companylogo: require("./assets/images/qoherent.png"),
      date: "May 2025 – August 2025",
      desc: "ML/Full stack, Radio classification models 📡"
    },
    {
      role: "Product Designer",
      company: "Yika",
      companylogo: require("./assets/images/yika.png"),
      date: "March 2025 – May 2025",
      desc: "Designing, coding, shipping 🎨"
    },
    {
      role: "Python Tutor",
      company: "Upper Markham Learning Center",
      companylogo: require("./assets/images/python_logo.png"),
      date: "June 2024 – September 2024",
      desc: "Taught DSA's 🧮",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const gitHub = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF THE PROJECTS I HAVE MADE",
  projects: [
    {
      image: require("./assets/images/Fortopia.png"),
      projectName: "Fortopia",
      projectDesc: "Platform runner, where the goal is to get past obstacles to avoid being eliminated by the monsters!",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/liyuxiao2/Fortopia"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/plan.png"),
      projectName: "Flutter",
      projectDesc: "B2B SaaS solution that empowers dating apps with AI-generated date itineraries",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/liyuxiao2/Flutter"
        }
      ]
    },
    {
      image: require("./assets/images/TutorMatch.png"),
      projectName: "Tutor Match",
      projectDesc: "Centralized platform that brings tutors/students together.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/liyuxiao2/TutorMatch"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Im open to anything Feel Free to reach Out!",
  number: "+647-894-2609",
  email_address: "liyuxiao2006@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  educationInfo,
  workExperiences,
  gitHub,
  bigProjects,
  contactInfo,
  isHireable,
  resumeSection
};
