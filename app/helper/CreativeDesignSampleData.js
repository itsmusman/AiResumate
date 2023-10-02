import names from "./PersonNames";
import titles from "./JobTitles";

var citys = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Multan",
  "Gujrat",
  "Faisalabad",
  "Peshawar",
];

var randomTitleIdx = Math.floor(Math.random() * titles.length);
var randomTitle = titles[randomTitleIdx];

var cityIdx = Math.floor(Math.random() * citys.length);
var city = citys[cityIdx];

const creativeResume = {
  educationDetail: [
    {
      degree: "BS Software Engineering",
      fromMonth: "10",
      fromYear: "2006",
      toMonth: "10",
      toYear: "2010",
      university: "University of " + city,
    },
  ],
  certificatesDetail: [
    {
      certificate: "POM",
      institute: "GeniesDevs" + "  " + city,
      fromMonth: "10",
      Year: "2010",
    },
  ],
  awardsDetail: [
    {
      awards: "BPOM",
      institute: "GeniesDevs" + "  " + city,
      Year: "2010",
    },
  ],
  referenceDetail: [
    {
      reference: "Mr Junaid Sidhu",
      institute: "GeniesDevs" + "  " + city,
    },
  ],

  jobPosition: "iOS Developer",
  userSummary:
    "Entry point doesn't exist neither at index.js nor index.ios.js. Skip prewarming",
  skills: [
    {
      id: "1",
      name: "JavaScript",
    },
    {
      id: "0",
      name: "Swift",
    },
    {
      id: "3",
      name: "React Native",
    },
  ],
  userHobbies: [
    {
      id: "0",
      name: "Painting",
    },
    {
      id: "1",
      name: "Gardening",
    },
    {
      id: "3",
      name: "Coding",
    },
  ],

  //   personDetail: {
  //     city: city,
  //     country: "Pakistan",
  //     email: firstName + "@gmail.com",
  //     firstName: firstName,
  //     lastName: lastName,
  //     phone: "03328011990",
  //     website: "www.geniedevs.com",
  //   },

  workExperience: [
    {
      company: "Devsinc",
      fromMonth: "12",
      fromYear: "2012",
      position: "PhotoShop Designer",
      toMonth: "12",
      toYear: "2022",
      roles: [
        "I am looking for large text files for testing the compression and decompression in all sizes from 1kb to 100mb. Can someone please refer me to download it from some link.",
        "Arbitrarily large text files can be generated on Linux with the following command.",
        "Um, no, not at all what you want for testing the effectiveness of your compressor. The resulting text is highly repetitive, and does not represent what a compressor will see in the real world. Do not use this answer. See the compression corpora in the other answers.",
        "This is a test role for your job.",
      ],
    },
    {
      company: "System Limited",
      fromMonth: "01",
      fromYear: "2023",
      position: "Graphic Designer",
      toMonth: "",
      toYear: "",
      roles: [
        "You can download enwik8 and enwik9 from here. They are respectively 100,000,000 and 1,000,000,000 bytes of text for compression benchmarks. You can always pull subsets of those for smaller tests.",
        "Project Gutenberg looks exceptionally promising for this purpose. This resource contains thousands of books in many formats. Here is a sample of what is available.",
        "Delete it, or replace it with a different answer. Lorem ipsum is no help here.",
        "It's obvious to me from what I see in your answer history, that you know what you're talking about, so respectfully, I'm quite interested in any explanation you would have to offer.",
      ],
    },
  ],
};

export default creativeResume;
