/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "portfolio",
  title: "Hi, I'm Duy Anh",
  subTitle: emoji(
    "A 3rd-year Computer Science student at UNSW passionate about Cyber Security and Full Stack Development. I love learning about security systems, interactive web applications, and experiment with LLMs and AI in my free time."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mwRSr1xwLDVzhiWzbTv4EfRaLcBZ_ced/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bobha2005",
  linkedin: "https://www.linkedin.com/in/bob-ha/",
  gmail: "bobha2005@gmail.com",
  facebook: "https://www.facebook.com/kekeduyanh",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle:
    "Focusing on Security, Full-Stack Development and Artificial Intelligence.",
  skills: [
    emoji(
      "⚡ Building secure, responsive Full Stack applications with a focus on seamless UX/UI and robust backend authentication"
    ),
    emoji(
      "⚡ Developing AI-integrated solutions and Computer Vision projects using Python and AutoGen"
    ),
    emoji(
      "⚡ Designing scalable software architectures using Java, JavaScript, React.js with cloud integrations"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of New South Wales",
      logo: require("./assets/images/unswLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2024 - Present",
      desc: "Minors in Marketing. Focusing on Software Security, Algorithms, and System Design.",
      descBullets: [
        "Relevant Coursework: DSA, Object-Oriented Programming",
        "Security Engineering and Cyber Security, Digital Forensics",
        "Database Systems, Algorithm Design and Analysis"
      ]
    },
    {
      schoolName: "Hanoi-Amsterdam High School for the Gifted",
      logo: require("./assets/images/amsLogo.png"),
      subHeader: "Specialized in Chemistry",
      duration: "2020 - 2023",
      desc: "Graduated from one of the most prestigious high schools in Vietnam.",
      descBullets: [
        "Chemistry Researcher: Gold Award at International Young Scientists Innovation Exhibition (Cancer Treatment Research)",
        "Academic Excellence: 1st Place District & 2nd Place City Chemistry Olympiad Winner",
        "Varsity Basketball Vice-Captain: 2023 City Runner-up, 2x Bronze medalist (3x3 BFH & Capital Sports Festival)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full Stack Development", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend & Security",
      progressPercentage: "70%"
    },
    {
      Stack: "DSA & Problem Solving",
      progressPercentage: "75%"
    },
    {
      Stack: "AI & Data",
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
      role: "AI Engineering Intern",
      company: "PC1",
      companylogo: require("./assets/images/pc1Logo.png"),
      date: "Dec 2025 – Present",
      desc: "Developing multi-agent AI solutions using the Microsoft AutoGen framework, focusing on intelligent automation and process optimization.",
      descBullets: [
        "Building an AI-powered email assistant with some automation assisted.",
        "Designing and implementing multi-agent workflows for automated data handling.",
        "Research on LLMs on how to train them to work for automation"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "FPT Software",
      companylogo: require("./assets/images/fptSoftwareLogo.png"),
      date: "Dec 2024 – Feb 2025",
      desc: "Engaged in technical research and backend development, bridging the gap between theoretical concepts and practical software implementation.",
      descBullets: [
        "Conducted in-depth research and literature reviews to support architectural decisions.",
        "Developed and optimized backend logic to ensure robust system performance.",
        "Designed and implemented RESTful APIs for seamless client-server integration."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "A SELECTION OF MY ACADEMIC AND PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/bankingSecurityProjectImage.jpg"),
      projectName: "DABank",
      projectDesc:
        "A comprehensive full-stack banking application. Focused on implementing robust security protocols (Auth/Encryption) while maintaining a seamless UX/UI for transaction management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bobha2005.github.io/banking_project/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/starryNightImage.webp"),
      projectName: "2D-to-3D Starry Night",
      projectDesc:
        "An experimental computer vision project that transforms 2D images (like Van Gogh's Starry Night) into interactive 3D depth maps upon user interaction.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bobha2005.github.io/art_transformer"
        }
      ]
    }
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

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
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
  title: emoji("Contact Me"),
  subtitle: "Message me for further information? My Inbox is open for all.",
  number: "+(61) 430073368",
  email_address: "bobha2005@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
