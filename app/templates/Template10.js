export function template10(resume) {
  var {
    personDetail,
    educationDetail,
    workExperience,
    skills,
    userHobbies,
    userSummary,
    jobPosition,
    certificatesDetail,
    awardsDetail,
    referenceDetail,
  } = resume.details;

  const education = educationDetail;
  const experience = workExperience;
  const hobbies = userHobbies;

  const certificates = certificatesDetail;
  const awards = awardsDetail;
  const references = referenceDetail;

  function cleanMonth(month) {
    return month == 0 ? "" : "-" + month.toString().padStart(2, "0");
  }

  function renderCertificate() {
    let certificateHtml = "";
    if (certificates && certificates.length > 0) {
      certificateHtml = `
   <h4 class="rela-block caps title"">Certificates</h4>
   <div class="section-content">
     <ul>
       ${certificates
         .map(
           (element) => `
      
           <p>${element.certificate} ( ${element.institute} ) - ${
             element.Year
           }${cleanMonth(element.fromMonth)}</p>
       
       `
         )
         .join("")}
     </ul>
     </div>  `;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
   <h4 class="rela-block caps title"">Awards</h4>
   <div class="section-content">
     <ul>
       ${awards
         .map(
           (element) => `

           <p>${element.awards} ( ${element.institute} ) - ${element.Year}</p>
   
       `
         )
         .join("")}
     </ul>
   </div>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `
   <h4 class="rela-block caps title"">References</h4>
   <div class="section-content">
     <ul>
       ${references
         .map(
           (element) => `
        
           <p>${element.reference} (${element.institute})</p>
        
       `
         )
         .join("")}
     </ul>
   </div>`;
    }
    return referencesHtml;
  }

  function renderSkills() {
    var result = "";
    skills.forEach((element) => {
      if (result == "") {
        result = `${element.name}`;
      }
      result = result + ", " + `${element.name}`;
    });
    return result;
  }

  function renderHobbies() {
    var result = "";
    hobbies.forEach((element) => {
      if (result == "") {
        result = `${element.name}`;
      }
      result = result + ", " + `${element.name}`;
    });
    return result;
  }
  function renderExperience() {
    var result = "";
    experience.forEach((element) => {
      result =
        result +
        `<h3>${element.position}</h3>
        <p class="light">${element.company}</p>
        <p class="light">${element?.city ?? []}</p>
        <p class="justified">${element.fromYear}${cleanMonth(
          element.fromMonth
        )} - ${element.toYear}${cleanMonth(element.toMonth)}</p><div>`;
      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<p>${role}</p></div>`;
      });
      result += `${roles} 
`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `<div class="rela-block caps greyed">${element.degree}</div>
        <p> ${element.university}</p>
        <p> ${element?.city ?? []}</p>
        <p>${element.fromYear}${cleanMonth(element.fromMonth)} - ${
          element.toMonth
        } / ${element.toYear} </p>`;
    });
    return result;
  }

  return `<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
<style>  

@page {
  margin: 0px;
}
   .name{
    color:black ;
    font-size: 20px;
    font-weight: bold;
   }
    .skills-Hobbies{
      color:black ;
      font-size: 16px;
      font-weight: bold;
    }.education-Experience-heading{
      color:black ;
      font-size: 18px;
      font-weight: bold;
    }
    
	</style>
</head>
<body>
   <!-- FONTS -->
<link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Raleway:100' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>

<!-- PAGE STUFF -->
<div class="rela-block page">
    <div class="rela-block top-bar">
        <div class="name">
        <h3> ${personDetail.firstName + " " + personDetail.lastName}
        </h3>
        </div>
    </div>
    <div class="side-bar">
        <p>${personDetail.city},${personDetail.country}</p>
        <p>${personDetail.phone}</p>
        
        <p>${personDetail.email}</p>
        <p>${personDetail.website}</p>
        <h4 class="rela-block caps title">${jobPosition}</h4>
        <p class="rela-block caps side-header">${userSummary}</p>
        <p class="skills-Hobbies">Expertise</p>
        <p class="rela-block list-thing">${renderSkills()}</p>
        
        <p class="skills-Hobbies">Killer Taste</p>
        <p class="rela-block caps side-header">${renderHobbies()}</p>
       
    </div>
    <div class="rela-block content-container">
       
        <div class="education-Experience-heading">Education</div>
        ${renderEducation()}
        <div class="education-Experience-heading">Experience</div>
         ${renderExperience()} 
       
    </div>
    <div class="rela-block content-container">
    ${renderCertificate() ?? []}
     ${renderAwards() ?? []}
     ${renderReferences() ?? []} 

    </div>
</div>
  </body>
</html>`;
}
