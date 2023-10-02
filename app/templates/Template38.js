export function template38(resume) {
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
      certificateHtml = `<div class="section">
        <div class="section-header">
            <i class="fa fa-graduation-cap"></i> CERTIFICATE
        </div>
            ${certificates
              .map(
                (element) =>
                  `<div class="item">
                <div class="item-header">
                    <div class="item-title">${element.institute}</div>
                    <div class="item-date">${element.fromYear}${cleanMonth(
                    element.fromMonth
                  )}</div>
                </div>
                <ul>
                    
                    <li>${element.certificate}</li>
                    
                </ul>
                </div>`
              )
              .join("")}
           
           </div>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `<div class="section">
        <div class="section-header">
            <i class="fa fa-graduation-cap"></i> AWARDS
        </div>
            ${awards
              .map(
                (element) =>
                  `<div class="item">
                <div class="item-header">
                    <div class="item-title">${element.institute}</div>
                    <div class="item-date">${element.Year}</div>
                </div>
                <ul>
                    
                    <li>${element.awards}</li>
                    
                </ul>
                </div>`
              )
              .join("")}
           
           </div>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `<div class="section">
        <div class="section-header">
            <i class="fa fa-graduation-cap"></i> REFERENCE
        </div>
            ${references
              .map(
                (element) =>
                  `<div class="item">
                <div class="item-header">
                    <div class="item-title">${element.institute}</div>
                   
                </div>
                <ul>
                    
                    <li>${element.reference}</li>
                    
                </ul>
                </div>`
              )
              .join("")}
           
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
      result += `<div class="item">
<div class="item-header">
    <div class="item-title">${element.position}</div>
    <div class="item-title">${element.company}</div>
    <div class="item-title">${element?.city ?? []}</div>
    <div class="item-date">${element.fromYear}${cleanMonth(
        element.fromMonth
      )} - ${element.toYear}${cleanMonth(element.toMonth)}</div>
</div>
<ul>`;
      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li>${role}</li>`;
      });
      result += `${roles}
</ul>
</div>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `<div class="item">
<div class="item-header">
    <div class="item-title">${element.university} , ${element.city ?? []}</div>
    <div class="item-date">${element.fromYear} - ${element.toYear}</div>
</div>
<ul>
    
    <li>${element.degree}</li>
    
</ul>
</div>`;
    });

    return result;
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML Resume Example</title>
    
        <style>

        @page {
          margin: 0px;
        }

            @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
          body, html {
        background-color: gray;
        padding: 0px;
        margin: 0px;
    }
    
    #pdf {
        /* 96 ppi */
        height: 1056px;
        width: 816px;
        background-color: white;
        font-family: 'Quicksand', sans-serif;
    }
    
    #header {
        display: flex;
    }
    
    #header-left {
        width: 25%;
        padding: 10px;
    }
    
    #header-middle {
        display: flex;
        width: 50%;
        /* margin: auto;
        text-align: center; */
    }
    
    #header-middle p {
        margin: auto;
        font-size: 45px;
        font-weight: bold;
    }
    
    #header-right {
        width: 25%;
        padding: 10px;
        text-align: right;
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    
    .section {
        padding: 5px 10px 0px 10px;
        padding-bottom: 0px;
    }
    
    .section-header {
        border-bottom: 2px solid black;
        font-size: 18px;
        font-weight: bold;
    }
    
    .item-header {
        display: flex;
        padding-top: 5px;
    }
    
    .item-title {
        width: 80%;
    }
    
    .item-date {
        width: 20%;
    }
    
    .item ul {
        /* padding: 0; */
        padding-left: 20px;
        margin: 0;
    }
        </style>
        <script src="https://use.fontawesome.com/905a50b7d1.js"></script>
    
        <link href="index.css" rel="stylesheet" />
    
    </head>
    
    <div>
        
        <div id="pdf">
            <div id="header">
                <div id="header-left">
                    <div>
                        <i class="fa fa-envelope"></i> <a href="">${
                          personDetail.email
                        }</a>
                    </div>
                    <div>
                        <i class="fa fa-phone"></i> <a href="">${
                          personDetail.phone
                        }</a>
                    </div>
                    <div>
                        <i class="fa fa-map"></i> <a href="">${
                          personDetail.city
                        } , ${personDetail.country} </a>
                    </div>
                    <div>
                    <i class="fa fa-envelope"></i> <a href="">${
                      personDetail.website
                    }</a>
                </div>
                </div>
                <div id="header-middle">
                    <p>${personDetail.firstName} ${personDetail.lastName}</p>
                    
                </div>
                
            </div>
            <div class="section">
                <h3>${jobPosition}</h3>
                <p>${userSummary}</p>
            </div>
            <div class="section">
                <div class="section-header">
                    <i class="fa fa-graduation-cap"></i> EDUCATION
                </div>
                ${renderEducation()}
            </div>
            ${renderCertificate()}
            ${renderAwards()}
            ${renderReferences()}
    
            <div class="section">
                <div class="section-header">
                    <i class="fa fa-briefcase"></i> EXPERIENCE
                </div>
                ${renderExperience()}
                
                
            </div>
    
            <div class="section">
                <div class="section-header">
                    <i class="fa fa-wrench"></i> SKILLS
                </div>
                <div class="item">
                    <ul>
                       ${renderSkills()}
                    </ul>
                </div>
            </div>
            <div class="section">
                <div class="section-header">
                    <i class="fa fa-play"></i> Hobbies
                </div>
                <div class="item">
                    <ul>
                        ${renderHobbies()}
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    
    
    </html> `;
}
