export function template56(resume) {
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
      certificateHtml = `<section class="awards gap">
        <div class="right-title">Certificates</div>
        <div class="awards-contents">
            ${certificates
              .map(
                (element) =>
                  `<div class="education-left">
                <p class="education-school-name">${element.institute}</p>
                <p class="educationp-time-period">${element.Year}${cleanMonth(
                    element.fromMonth
                  )}</p>
                </div>
                <div class="education-right">
                <p class="education-subject"> ${element.certificate}</p>
                </div>`
              )
              .join("")}
           </div>
           </section>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `<section class="awards gap">
        <div class="right-title">Awards</div>
        <div class="awards-contents">
            ${awards
              .map(
                (element) =>
                  `<div class="education-left">
                <p class="education-school-name">${element.institute}</p>
                <p class="educationp-time-period">${element.Year}</p>
                </div>
                <div class="education-right">
                <p class="education-subject"> ${element.awards}</p>
                </div>`
              )
              .join("")}
           </div>
           </section>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `<section class="awards gap">
        <div class="right-title">Reference</div>
        <div class="awards-contents">
            ${references
              .map(
                (element) =>
                  `<div class="education-left">
                <p class="education-school-name">${element.institute}</p>
                </div>
                <div class="education-right">
                <p class="education-subject"> ${element.reference}</p>
                </div>`
              )
              .join("")}
           </div>
           </section>`;
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
      result += ` <div class="exp-left">
<p class="exp-company-name">${element.company}</p><span></span><p>${
        element?.city ?? []
      }</p>
<p class="exp-time-period">${element.fromYear}${cleanMonth(
        element.fromMonth
      )}-${element.toYear}${cleanMonth(element.toMonth)}</p>
</div>
<div class="exp-right">
<p class="exp-position">${element.position}</p>
<p class="exp-desc">`;
      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li>${role}</li>`;
      });
      result += `${roles}

</p>
</div>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `<div class="education-left">
<p class="education-school-name">${element.university}</p>
<p class="educationp-time-period">${element.fromYear}-${element.toYear}</p>
</div>
<div class="education-right">
<p class="education-subject">${element.degree}</p>
<p class="education-desc">
${element.city ?? []}
</p>
</div>`;
    });

    return result;
  }

  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML & CSS Resume Template</title><!-- Google font  -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&amp;display=swap" rel="stylesheet"><!-- font-awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><!-- Custom CSS -->
  <link rel="stylesheet" href="style.css">
  <style>

  @page {
    margin: 0px;
  }
  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Roboto', sans-serif;
    }
    
    body {
        background-color: #AED6F1;
    }
    
    .resume-contents {
        min-height: 100vh;
        width: 100%;
       
        display: grid;
        grid-template-columns: repeat(7, 1fr);
    }
    
    .left-section {
        grid-column: span 2;
        
        height: 100%;
        background-color: #34495E;
    }
    
    .right-section {
        grid-column: span 5;
        height: 100%;
        background-color: #D6DBDF;
    }
    
    .left-section-contents{
        padding: 2rem 2rem;
    }
    
    .profile {
        width: 100%;
        border-bottom: 2px solid #1B2631;
    }
    
    .profile .profile-image {
        width: 100%;
        border-radius: 50%;
        border: 8px solid #1B2631;
    }
    
    .name {
        color: #D6DBDF;
        font-size: 28px;
       
        text-transform: uppercase;
        text-align: center;
        font-weight: bold;
     
    }
    
    .profession {
        color: #F9E79F;
        font-size: 20px;
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 2px;
        font-weight: bold;
        padding-bottom: 1rem;
    }
    
    /* .contact-info { border-bottom: 2px solid #1B2631; } */
    .left-title {
        color: #D6DBDF;
        font-size: 20px;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: bold;
        display: flex;
        align-items: center;
        padding-top: 3rem;
    }
    
    .contact-info ul {
        padding-top: 1.5rem;
    }
    
    .contact-info ul li,
    .references ul li {
        padding: .4rem 0;
        display: flex;
        align-items: center;
        color: #d6dbdfaf;
        letter-spacing: 1px;
        font-size: 18px;
    }
    
    .contact-info ul li i,
    .references ul li i {
        padding-right: 1rem;
        font-size: 18px;
        color: #2E86C1;
    }
    
    .skills ul {
        padding-top: 1.5rem;
    }
    .skills ul li p {
        padding: .4rem 0;
        color: #d6dbdfaf;
        font-size: 18px;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        text-transform: uppercase;
    }
    
    .referance-name {
        padding-top: 1.5rem;
        padding-bottom: .4rem;
        font-size: 18px;
        color: #F9E79F;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    
    .referance-profession {
        font-size: 16px;
        color: #d6dbdfaf;
        letter-spacing: 1px;
        /* text-transform: uppercase; */
        padding-bottom: .4rem;
    }
    
    
    .right-section-contents {
        padding: 2rem 2rem;
    }
    
    .right-title {
        color: #34495E;
        font-size: 30px;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: bold;
        display: flex;
        align-items: center;
        padding: 2rem 0;
        position: relative;
    }
    
    .gap {
        padding-bottom: 2rem;
    }
    .about-me-contents {
        font-size: 18px;
        letter-spacing: 1px;
        line-height: 2rem;
    }
    
    .experience-contents,
    .education-contents,
    .awards-contents {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding-bottom: 2rem;
    }
    
    .exp-company-name,
    .education-school-name,
    .awards-company-name {
        font-size: 25px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #21638f;
        padding-bottom: .4rem;
    }
    
    .exp-time-period,
    .educationp-time-period,
    .awards-time-period {
        font-size: 18px;
        letter-spacing: 1px;
        line-height: 2rem;
    }
    
    .exp-position,
    .education-subject,
    .awards-name {
        font-size: 25px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #2E86C1;
        padding-bottom: .4rem;
    }
    
    .exp-desc,
    .education-desc,
    .awards-desc {
        font-size: 16px;
        letter-spacing: 1px;
        line-height: 1.5rem;
        border-left: 3px solid #a5a3a3;
        padding-left: 5px;
    }
    
    /* Media queries */
    @media screen and (max-width:780px) {
        .experience-contents,
        .education-contents,
        .awards-contents {
            grid-template-columns: repeat(1, 1fr);
        }
    }
    
    @media screen and (max-width:780px) {
        .left-section {
            grid-column: span 3;
        }
        
        .right-section {
            grid-column: span 4;
        }
        
    }
    
    @media screen and (max-width:1200px) {
        .resume-contents {
            grid-template-columns: repeat(1, 1fr);
        }
    }
    
    @media screen and (max-width:390px) {
        .resume-contents {
            width: 100%;
            margin: 0 auto;
        }
    
        .name {
            font-size: 20px;
        }
    
        .profession {
            font-size: 18px;
        }
    
        .left-title {
            font-size: 18px;
        }
    
        .right-title {
            font-size: 18px;
        }
    
        .contact-info ul li,
        .references ul li {
            font-size: 12px;
        }
    
        .contact-info ul li i,
        .references ul li i {
            /* padding-right: 1rem; */
            font-size: 12px;
        }
    
        .skills ul li p {
            font-size: 12px;
        }
    
        .about-me-contents {
            font-size: 16px;
            line-height: 1.5rem;
        }
    
        .exp-company-name,
        .education-school-name,
        .awards-company-name {
            font-size: 18px;
        }
    
        .exp-time-period,
        .educationp-time-period,
        .awards-time-period {
            font-size: 16px;
        }
    
        .exp-position,
        .education-subject,
        .awards-name {
            font-size: 18px;
        }
    }
    
  </style>
</head>
<body>
  <main class="resume-contents">
    <section class="left-section">
      <div class="left-section-contents">
        <div class="profile">
          <p class="name">${personDetail.firstName} </p>
          <p class="name">${personDetail.lastName}</p>
          <p class="profession">${jobPosition}</p>
        </div>
        <div class="contact-info">
          <p class="left-title">Contact Info</p>
          <ul>
            <li>${personDetail.phone}</li>
            <li>${personDetail.email}</li>
            <li>${personDetail.website}</li>
            <li>${personDetail.city}, ${personDetail.country}</li>
          </ul>
        </div>
        <div class="skills">
          <p class="left-title">Skills</p>
          <ul>
            ${renderSkills()}
          </ul>
        </div>
        <div class="skills">
          <p class="left-title">Hobbies</p>
          <ul>
            ${renderHobbies()}
          </ul>
        </div>
      </div>
    </section>
    <section class="right-section">
      <div class="right-section-contents">
        <section class="about gap">
          <div class="right-title">
            About Me
          </div>
          <p class="about-me-contents">${userSummary}</p>
        </section>
        <section class="experience gap">
          <div class="right-title">
            Experience
          </div>
          <div class="experience-contents">
            ${renderExperience()}
          </div>
        </section>
        <section class="education gap">
          <div class="right-title">
            Education
          </div>
          <div class="education-contents">
            ${renderEducation()}
          </div>
        </section>${renderCertificate()} ${renderAwards()} ${renderReferences()}
      </div>
    </section>
  </main>
</body>
</html> `;
}
