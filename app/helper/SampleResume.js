import cityData from "./WorldAllCapitalCitiesData";

import technicalData from "./TechnicalJobsData";
import financeData from "./FinanceJobData";
import designingData from "./DesignerJobsData";

import jobSummaries from "./RandomSummaryData";

import companiesName from "./WorlsCompaniesName";

import responsibilities from "./ResposibilitiesData";

export function createSampleResume(firstName, lastName, cardName) {
  var citys = cityData;

  //Cities Random Function
  var cityIdx = Math.floor(Math.random() * citys.length);
  var city = citys[cityIdx];

  var technicals = technicalData;
  var finances = financeData;
  var designers = designingData;

  //Random Titles Functions

  var randomTitleIdx = Math.floor(Math.random() * technicals.length);
  var randomTechnicalTitle = technicals[randomTitleIdx];

  var randomTitleIdx = Math.floor(Math.random() * finances.length);
  var randomFinanceTitle = finances[randomTitleIdx];

  var randomTitleIdx = Math.floor(Math.random() * designers.length);
  var randomDesignerTitle = designers[randomTitleIdx];

  // Random Summary Functions
  const technicalSummaries = jobSummaries.technicalJobSummaries;

  const randomTechnicalSummary =
    technicalSummaries[Math.floor(Math.random() * technicalSummaries.length)];

  const designerSummaries = jobSummaries.designerJobSummaries;

  const randomDesignerSummary =
    designerSummaries[Math.floor(Math.random() * designerSummaries.length)];

  const financeSummaries = jobSummaries.financeJobSummaries;

  const randomFinanceSummary =
    financeSummaries[Math.floor(Math.random() * financeSummaries.length)];

  // Random Companies Functions

  const financeCompany = companiesName.financeCompanies;

  const randomFinanceCompany =
    financeCompany[Math.floor(Math.random() * financeCompany.length)];

  const designerCompany = companiesName.designerCompanies;

  const randomDesignerCompany =
    designerCompany[Math.floor(Math.random() * designerCompany.length)];

  const techCompany = companiesName.financeCompanies;

  const randomTechCompany =
    techCompany[Math.floor(Math.random() * techCompany.length)];

  let selectedResume;

  // Load the appropriate resume based on the selected card

  if (cardName === "Technical") {
    //Technical Resume Data

    selectedResume = {
      educationDetail: [
        {
          degree: "BS Software Engineering",
          fromMonth: "10",
          fromYear: "2008",
          toMonth: "10",
          toYear: "2012",
          university: "Columbia University",
          city: "Albany",
        },
      ],
      certificatesDetail: [
        {
          certificate: "POM",
          institute: randomTechCompany,
          fromMonth: "10",
          Year: "2014",
        },
      ],
      awardsDetail: [
        {
          awards: "BPOM",
          institute: randomTechCompany,
          Year: "2014",
        },
      ],
      referenceDetail: [
        {
          reference: "Liam Johnson",
          institute: randomTechCompany,
        },
      ],
      personDetail: {
        city: "New York",
        country: "United State",
        email: "send@email.io",
        firstName: firstName,
        lastName: lastName,
        phone: "+1-518-555-0199",
        website: "www.myWebsite.io",
      },
      jobPosition: randomTechnicalTitle,
      userSummary: randomTechnicalSummary,
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
      workExperience: [
        {
          company: randomTechCompany,
          city: "Albany",
          fromMonth: "12",
          fromYear: "2017",
          position: randomTechnicalTitle,
          toMonth: "12",
          toYear: "2023",
          roles: [
            "I am looking for large text files for testing the compression and decompression in all sizes from 1kb to 100mb. Can someone please refer me to download it from some link.",
            "Arbitrarily large text files can be generated on Linux with the following command.",
            "Um, no, not at all what you want for testing the effectiveness of your compressor. The resulting text is highly repetitive, and does not represent what a compressor will see in the real world. Do not use this answer. See the compression corpora in the other answers.",
            "This is a test role for your job.",
          ],
        },
        {
          company: randomTechCompany,
          city: "Albany",
          fromMonth: "01",
          fromYear: "2016",
          position: "Developer Internship",
          toMonth: "12",
          toYear: "2013",
          roles: [
            "You can download enwik8 and enwik9 from here. They are respectively 100,000,000 and 1,000,000,000 bytes of text for compression benchmarks. You can always pull subsets of those for smaller tests.",
            "Project Gutenberg looks exceptionally promising for this purpose. This resource contains thousands of books in many formats. Here is a sample of what is available.",
            "Delete it, or replace it with a different answer. Lorem ipsum is no help here.",
            "It's obvious to me from what I see in your answer history, that you know what you're talking about, so respectfully, I'm quite interested in any explanation you would have to offer.",
          ],
        },
      ],
    };

    // Creative Resume Data
  } else if (cardName === "Graphic") {
    selectedResume = {
      educationDetail: [
        {
          degree: "BS Arts",
          city: "London",
          fromMonth: "10",
          fromYear: "2006",
          toMonth: "10",
          toYear: "2010",
          university: "Imperial College London",
        },
      ],
      certificatesDetail: [
        {
          certificate: "POM",
          institute: randomTechCompany,
          fromMonth: "10",
          Year: "2014",
        },
      ],
      awardsDetail: [
        {
          awards: "BPOM",
          institute: randomTechCompany,
          Year: "2015",
        },
      ],
      referenceDetail: [
        {
          reference: "Emily Johnson",
          institute: randomTechCompany,
        },
      ],
      personDetail: {
        city: "London",
        country: "United Kingdom",
        email: "send@email.io",
        firstName: firstName,
        lastName: lastName,
        phone: "+44 20 7946 0089",
        website: "www.mySite.io",
      },
      jobPosition: randomDesignerTitle,
      userSummary: randomDesignerSummary,
      skills: [
        {
          id: "1",
          name: "Logo Designer",
        },
        {
          id: "0",
          name: "Animations",
        },
        {
          id: "3",
          name: "Adobe PhotoShop",
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
          name: "Art",
        },
      ],
      workExperience: [
        {
          company: randomDesignerCompany,
          city: "London",
          fromMonth: "12",
          fromYear: "2017",
          position: randomDesignerTitle,
          toMonth: "12",
          toYear: "2023",
          roles: [
            "I am looking for large text files for testing the compression and decompression in all sizes from 1kb to 100mb. Can someone please refer me to download it from some link.",
            "Arbitrarily large text files can be generated on Linux with the following command.",
            "Um, no, not at all what you want for testing the effectiveness of your compressor. The resulting text is highly repetitive, and does not represent what a compressor will see in the real world. Do not use this answer. See the compression corpora in the other answers.",
            "This is a test role for your job.",
          ],
        },
        {
          company: randomDesignerCompany,
          city: "London",
          fromMonth: "03",
          fromYear: "2016",
          position: "Designer Internship",
          toMonth: "03",
          toYear: "2011",
          roles: [
            "You can download enwik8 and enwik9 from here. They are respectively 100,000,000 and 1,000,000,000 bytes of text for compression benchmarks. You can always pull subsets of those for smaller tests.",
            "Project Gutenberg looks exceptionally promising for this purpose. This resource contains thousands of books in many formats. Here is a sample of what is available.",
            "Delete it, or replace it with a different answer. Lorem ipsum is no help here.",
            "It's obvious to me from what I see in your answer history, that you know what you're talking about, so respectfully, I'm quite interested in any explanation you would have to offer.",
          ],
        },
      ],
    };

    // Finance Management Resume
  } else if (cardName === "Finance") {
    selectedResume = {
      educationDetail: [
        {
          degree: "BS Finance",
          fromMonth: "10",
          fromYear: "2006",
          toMonth: "10",
          toYear: "2010",
          university: "Fordham University",
          city: "Brentwood",
        },
      ],
      certificatesDetail: [
        {
          certificate: "POM",
          institute: randomTechCompany,
          fromMonth: "10",
          Year: "2013",
        },
      ],
      awardsDetail: [
        {
          awards: "BPOM",
          institute: randomTechCompany,
          Year: "2015",
        },
      ],
      referenceDetail: [
        {
          reference: "Noah Brown",
          institute: randomTechCompany,
        },
      ],
      personDetail: {
        city: "New York",
        country: "United State",
        email: "send@email.io",
        firstName: firstName,
        lastName: lastName,
        phone: "+1-631-555-0129",
        website: "www.myWeb.io",
      },
      jobPosition: randomFinanceTitle,
      userSummary: randomFinanceSummary,
      skills: [
        {
          id: "1",
          name: "Accounting",
        },
        {
          id: "0",
          name: "Communication",
        },
        {
          id: "3",
          name: "Presentation",
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
          name: "Data Manipulation",
        },
      ],
      workExperience: [
        {
          company: randomFinanceCompany,
          city: "Brentwood",
          fromMonth: "12",
          fromYear: "2016",
          position: randomFinanceTitle,
          toMonth: "12",
          toYear: "2023",
          roles: [
            "I am looking for large text files for testing the compression and decompression in all sizes from 1kb to 100mb. Can someone please refer me to download it from some link.",
            "Arbitrarily large text files can be generated on Linux with the following command.",
            "Um, no, not at all what you want for testing the effectiveness of your compressor. The resulting text is highly repetitive, and does not represent what a compressor will see in the real world. Do not use this answer. See the compression corpora in the other answers.",
            "This is a test role for your job.",
          ],
        },
        {
          company: randomFinanceCompany,
          city: "Brentwood",
          fromMonth: "01",
          fromYear: "2011",
          position: "Accountant Internship",
          toMonth: "01",
          toYear: "2015",
          roles: [
            "You can download enwik8 and enwik9 from here. They are respectively 100,000,000 and 1,000,000,000 bytes of text for compression benchmarks. You can always pull subsets of those for smaller tests.",
            "Project Gutenberg looks exceptionally promising for this purpose. This resource contains thousands of books in many formats. Here is a sample of what is available.",
            "Delete it, or replace it with a different answer. Lorem ipsum is no help here.",
            "It's obvious to me from what I see in your answer history, that you know what you're talking about, so respectfully, I'm quite interested in any explanation you would have to offer.",
          ],
        },
      ],
    };
  }

  const newResume = {
    ...selectedResume,
    personDetail: {
      ...selectedResume.personDetail,
      firstName: firstName,
      lastName: lastName,
    },
    //jobPosition: cardName,
  };

  return newResume;
}
