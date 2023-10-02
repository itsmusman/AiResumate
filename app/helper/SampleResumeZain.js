import names from "./PersonNames";
import titles from "./JobTitles";

export function createSampleResume() {
  var citys = [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Multan",
    "Gujrat",
    "Faisalabad",
    "Peshawar",
  ];

  var randomIndex1 = Math.floor(Math.random() * names.length);
  var randomIndex2 = Math.floor(Math.random() * names.length);
  var firstName = names[randomIndex1];
  var lastName = names[randomIndex2];

  var randomTitleIdx = Math.floor(Math.random() * titles.length);
  var randomTitle = titles[randomTitleIdx];

  var cityIdx = Math.floor(Math.random() * citys.length);
  var city = citys[cityIdx];

  const newResume = {
    educationDetail: [
      {
        degree: "Bachelor's in Software Engineering",
        fromMonth: "1",
        fromYear: "2012",
        toMonth: "10",
        toYear: "2016",
        university: "University of  Gujrat",
      },
    ],
    certificatesDetail: null,
    awardsDetail: null,
    referenceDetail: null,
    personDetail: {
      city: "Lahore",
      country: "Pakistan",
      email: "zainsidhu@gmail.com",
      firstName: "Muhammad",
      lastName: "Zain",
      phone: "+92(300)9812911",
      website: "linkedin.com/in/zainsidhu",
    },
    jobPosition: "iOS Developer",
    userSummary:
      "I'm a passionate mobile apps engineer with expertise in Swift, React Native and Flutter development. I excel at creative problem solving and integrating complex systems. With strong communication skills, I enjoy collaborating with cross-functional teams to drive project success. I'm eager to pursue a challenging technical career in application development and continue advancing my skills.",
    skills: [
      { id: "1", name: "Swift, SwiftUI, UIKit, Kotlin" },
      { id: "4", name: "React Native, Flutter, Javascript" },
      { id: "7", name: "Dart, Git, Unit Testing, CI/CD" },
      { id: "11", name: "Agile, MVC, MVVM" },
    ],
    userHobbies: [
      {
        id: "0",
        name: "Reading, Gardening, Coding",
      },
    ],
    workExperience: [
      {
        company: "Telebu Communications",
        fromMonth: "03",
        fromYear: "2022",
        position: "Senior Software Engineer, iOS (Remote)",
        toMonth: "",
        city: "Dubai",
        toYear: "Present",
        roles: [
          "Create and maintain internal communication app with APIs, coredata, and socket-io. Write optimized code using best practices and stay up-to-date with trends.",
          "Led operational activities of mobile application development process within the agreed budget and timeframe.",
          "Played a key and leading role in architecture and developing solutions.",
          "Drove significant challenges associated with analysing code, testing process, fixing bugs, and writing documentation.",
        ],
      },
      {
        company: "AimFit",
        fromMonth: "03",
        fromYear: "2022",
        position: "React Native developer",
        toMonth: "12",
        toYear: "2022",
        city: "Lahore, Pakistan",
        roles: [
          "Improved app quality, added features, worked on live stream.",
          "Revamped app by breaking down into manageable modules.",
          "Implemented precommits for linting and unit tests.",
          "Completed robust CI/CD pipeline using Github actions. ",
          "Utilized CodePush for efficient and smooth updates.",
        ],
      },
      {
        company: "Coeus Solutions",
        fromMonth: "02",
        fromYear: "2018",
        position: "Senior Software Engineer",
        toMonth: "03",
        toYear: "2022",
        city: "Lahore, Pakistan",
        roles: [
          "Assists team, code reviews, and stays current with new technologies.",
          "Developed and maintained high-quality iOS apps for various clients.",
          "Collaborated with cross-functional teams to integrate iOS apps with backend services.",
          "Improved app performance and added new features by optimizing code and adopting new technologies.",
          "Led and mentored a team of junior developers to deliver high-quality code.",
        ],
      },
      {
        company: "Coeus Solutions",
        fromMonth: "02",
        fromYear: "2017",
        position: "Associate Software Engineer",
        toMonth: "01",
        toYear: "2018",
        city: "Lahore, Pakistan",
        roles: [
          "Collaborate with cross-functional teams to define, design, and ship new features",
          "Unit-test code for robustness, including edge cases, usability, and general reliability. on bug fixing and improving application performance",
          "Continuously discover, evaluate, and implement new technologies to maximize development efficiency",
        ],
      },
    ],
  };

  return newResume;
}
