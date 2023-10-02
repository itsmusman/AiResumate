export function template7(resume) {
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
        <div class="section-heading">Certificates</div>
        <div class="section-content">
          <ul>
            ${certificates
              .map(
                (element) => `
                  <li>
                    <p>${element.certificate}</p>
                    <span></span>
                    <p>${element.institute}</p>
                    <p class="dates">${element.Year}${cleanMonth(
                  element.fromMonth
                )}</p>
                  </li>
                `
              )
              .join("")}
          </ul>
        </div>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
        <div class="section-heading">Awards</div>
        <div class="section-content">
          <ul>
            ${awards
              .map(
                (element) => `
                  <li>
                    <p>${element.awards}</p>
                    <p>${element.institute}</p>
                    <p class="dates">${element.Year}</p>
                  </li>
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
        <div class="section-heading">References</div>
        <div class="section-content">
          <ul>
            ${references
              .map(
                (element) => `
                  <li>
                    <p>${element.reference}</p>
                    <p>${element.institute}</p>
                  </li>
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
      result += `<li>${element.name}</li>`;
    });
    return result;
  }

  function renderHobbies() {
    var result = "";
    hobbies.forEach((element) => {
      result += `<li>${element.name}</li>`;
    });
    return result;
  }

  function renderExperience() {
    var result = "";
    experience.forEach((element) => {
      result += `
        <div class="experience-item">
          <p class="degree-position-heading">${element.position}</p>
          <p class="company-university-heading">${element.company}, ${
        element?.city ?? []
      }</p>
          <p class="dates">${element.fromYear}${cleanMonth(
        element.fromMonth
      )} - ${element.toYear}${cleanMonth(element.toMonth)}</p>
          <ul>
            ${element.roles
              .map(
                (role) => `
                <li><p class="roles">${role}</p></li>
              `
              )
              .join("")}
          </ul>
        </div>
      `;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result += `
        <div class="education-item">
          <p class="degree-position-heading">${element.degree}</p>
          <p class="company-university-heading">${element.university}</p>
          <p class="company-university-heading">${element?.city ?? []}</p>
          <p class="dates">${element.fromYear}${cleanMonth(
        element.fromMonth
      )} - ${element.toYear}${cleanMonth(element.toMonth)}</p>
        </div>
      `;
    });
    return result;
  }

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Resume</title>
      <style>
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        
        .container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        
        .left {
          width: 48%;
          margin-bottom: 20px;
        }
        
        .right {
          width: 48%;
          margin-bottom: 20px;
        }
        
        .section-heading {
          font-weight: bold;
          margin-top: 10px;
        }
        
        .section-content {
          margin-top: 10px;
        }
        
        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        
        li {
          margin-bottom: 5px;
        }
        
        .user-info {
          margin-bottom: 20px;
        }
        
        .user-info h3 {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
        }
        
        .user-position {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        
        .user-summary {
          margin-bottom: 10px;
        }
        
        .user-contact-info {
          display: flex;
          flex-wrap: wrap;
          margin-top: 10px;
        }
        
        .contact-info {
          margin: 0;
          margin-right: 20px;
        }
        
        .experience-item {
          margin-bottom: 20px;
        }
        
        .degree-position-heading {
          font-weight: bold;
          margin-bottom: 5px;
        }
        
        .company-university-heading {
          margin-bottom: 5px;
        }
        
        .dates {
          margin-bottom: 5px;
        }
        
        .roles {
          margin: 0;
        }
        
        .education-item {
          margin-bottom: 20px;
        }
        
        .degree-position-heading,
        .company-university-heading,
        .dates {
          margin: 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="left">
         
          <div class="user-info">
            <h3>${personDetail.firstName} ${personDetail.lastName} </h3>
            <p class="user-position">${jobPosition}</p>
            <p class="user-summary">${userSummary}</p>
            <div class="user-contact-info">
              <div class="user-inner">
                <p class="contact-info">${personDetail.email}</p>
                <p class="contact-info">${personDetail.phone}</p>
                <p class="contact-info">${personDetail.city},
                                      ${personDetail.country}</p>
              </div>
              <div class="user-inner">
                <p class="contact-info">${personDetail.website}</p>
              </div>
            </div>
          </div>
          <div class="section-heading">
            <h3>Skills</h3>
          </div>
          <div class="section-content">
            <ul>
              ${renderSkills()}
            </ul>
          </div>
          <div class="section-heading">
            <h3>Hobbies</h3>
          </div>
          <div class="section-content">
            <ul>
              ${renderHobbies()}
            </ul>
          </div>
         
        </div>
        <div class="right">
          <div class="section-heading">
            <h3>Work Experience</h3>
          </div>
          ${renderExperience()}
          <div class="section-heading">
            <h3>Education</h3>
          </div>
          ${renderEducation()}


          <div>
          ${renderCertificate()}
          
          ${renderAwards()}
          
          ${renderReferences()}</div>
        </div>
      </div>
    </body>
    </html>`;
}
