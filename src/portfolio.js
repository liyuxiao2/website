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
    "A passionate Developer, having experience in building applications using Java, Python, Unity, C# and other frameworks."
  ),
  resumeLink: "https://www.dropbox.com/scl/fi/5pb7qt1rnkw95vdbtxhqu/Resume.pdf?rlkey=soafv49n81af2shkp7sly46yq&st=fr3fdfmi&dl=0", // Set to empty to hide the button
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

// Skills Section

const skillsSection = {
  title: "What I do",
  skills: [
    emoji(
      "⚡ Develop games using python, java, and unity"
    ),
    emoji("⚡ Create applications using react, HTML and CSS"),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-laptop-code"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "McMaster University",
      logo: require("./assets/images/mcmaster.png"),
      subHeader: "BSAc in Computer Science",
      duration: "September 2024 - April 2029",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java",
      progressPercentage: "70%"
    },
    {
      Stack: "Game Development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Python Tutor",
      company: "Upper Markham Learning Center",
      companylogo: require("./assets/images/python_logo.png"),
      date: "June 2024 – September 2024",
      desc: "curated personalized lesson plans for over 25 students to create basic games and applications",
    },
    {
      role: "Math Tutor",
      company: "Kumon",
      companylogo: require("./assets/images/kumon_logo.png"),
      date: "October 2021 – April 2024",
      desc: "Taught students factorization, logarithims, trigonemtric identities, and derivative rules"
    },
    {
      role: "Chess Program instructor",
      company: "City of Markham",
      companylogo: require("./assets/images/city_markham.png"),
      date: "Sep 2023 – August 2024",
      desc: "Taught over 50 students, the basic rules of chess and simple tatics and strategy"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
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
      image: require("./assets/images/black_jack.gif"),
      projectName: "Black Jack",
      projectDesc: "A remake of the card game black jack, made using pygame and OOP principles",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/liyuxiao2/BlackJack"
        }
      ]
    },

    {
      image: require("./assets/images/space_invaders.gif"),
      projectName: "Space invaders",
      projectDesc: "A remake of the game space invaders, made using pygame",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/liyuxiao2/space-invaders"
        }
      ]
    },
    {
      image: require("./assets/images/calculator.gif"),
      projectName: "Calculator",
      projectDesc: "Built a calculator using JavaScript, HTML, and CSS.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/liyuxiao2/Calculator"
        }
      ]
    },
    {
      image: require("./assets/images/EtchASketch.png"),
      projectName: "Etch A Sketch",
      projectDesc: "Remade an Etch A Sketch using JavaScript, HTML, and CSS.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/liyuxiao2/EtchASketch"
        }
      ]
    },
    {
      image: require("./assets/images/Tasker.gif"),
      projectName: "Tasker",
      projectDesc: "Developed a task organizer app using JavaScript(ES6) and Webpack.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/liyuxiao2/Tasker"
        }
      ]
    },
    {
      image: require("./assets/images/Insurify.png"),
      projectName: "Insurify",
      projectDesc: "Created an insurance claim app using React, Flask, OpenAI API, and AWS.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/liyuxiao2/Insurify"
        }
      ]
    },
    {
      image: require("./assets/images/HealMotion.png"),
      projectName: "Heal Motion",
      projectDesc: "Designed a fitness app for workout planning using React, Flask, and Gemini API.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/liyuxiao2/HealMotion"
        }
      ]
    },
    {
      image: require("./assets/images/LibraryApp.png"),
      projectName: "Library Application",
      projectDesc: "Created a tool for managing library collections using JavaScript(ES6) and CSS.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/liyuxiao2/LibraryApp"
        }
      ]
    },
    {
      image: require("./assets/images/TicTacToe.gif"),
      projectName: "Tic Tac Toe",
      projectDesc: "Implemented a classic Tic Tac Toe game using JavaScript, HTML, and CSS.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/liyuxiao2/TicTacToe"
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  isHireable,
  resumeSection
};
