export function template46(resume) {
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
        <section id="education">
        <h2>Certificate</h2>
        <div class="edtable">
            ${certificates
              .map(
                (element) =>
                  `<div class="tablerow">
              <span class="jobtitle"> ${element.certificate}</span>
              <span class="right">${element.Year}${cleanMonth(
                    element.fromMonth
                  )}</span>
              </div>
              <div class="tablerow">
              <span>${element.institute}</span>
              
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
      awardsHtml = `
        <section id="education">
        <h2>Awards</h2>
        <div class="edtable">
            ${awards
              .map(
                (element) =>
                  `<div class="tablerow">
              <span class="jobtitle"> ${element.awards}</span>
              <span class="right">${element.Year}</span>
              </div>
              <div class="tablerow">
              <span>${element.institute}</span>
              
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
      referencesHtml = `
        <section id="education">
        <h2>Reference</h2>
        <div class="edtable">
            ${references
              .map(
                (element) =>
                  `<div class="tablerow">
              <span class="jobtitle"> ${element.reference}</span>
            
              </div>
              <div class="tablerow">
              <span>${element.institute}</span>
              
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
      result += `<div class="jobtable">
<div class="tablerow">
    <span class="jobtitle">${element.position}</span>
    <span class="right">${element.fromYear}${cleanMonth(element.fromMonth)} - ${
        element.toMonth
      } / ${element.toYear}</span>
</div>
<div class="tablerow">
    <span>${element.company}</span>
    <span class="right">${element?.city ?? []}</span>
</div>
</div>
<ul>`;

      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li>${role}</li>`;
      });
      result += `${roles}
  
</ul>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `<div class="tablerow">
<span class="jobtitle">${element.degree}</span>
<span class="right">${element.fromYear}${cleanMonth(element.fromMonth)} - ${
          element.toMonth
        } / 
${element.toYear}</span>
</div>
<div class="tablerow">
<span>${element.university}</span>
<span class="right">${element.city ?? []}</span>
</div>`;
    });

    return result;
  }

  return `
    <!DOCTYPE HTML>
    
    <html>
    <head>
        <meta charset="UTF-8">
        <title>First M. Last</title>
        <link href="resume.css" rel="stylesheet" type="text/css">
    </head>
      <style>

      @page {
        margin: 0px;
      }

    body {
        margin: 40px;
        font-family: "Adobe Caslon Pro", "Minion Pro", serif;
        font-size: 12pt;
    }
    
    header {
        font-family: "Trajan Pro", serif;
        padding-bottom: 10px;
    }
    
    header h1 {
        font-size: 20pt;
        letter-spacing: 2pt;
        border-bottom: 1px solid black;
        margin-bottom: 4px;
    }
    
    header span {
        font-size: 10pt;
        float: right;
    }
    
    section h2 {
        font-family: "Trajan Pro", serif;
        font-size: 14pt;
    }
    
    section p {
        margin-left: 40px;
    }
    
    section.coverletter {
        margin-top: 40px;
    }
    
    section.coverletter p {
        margin-left: 0px;
    }
    
    section ul {
        list-style-type: circle;
    }
    
    .jobtable {
        display: table;
        width: 100%;
        border-bottom: 1px solid black;
        margin-left: 20px;
    }
    
    .edtable {
        display: table;
        width: 100%;
        margin-left: 20px;
        padding-bottom: 15px;
    }
    
    .skillstable {
        display: table;
        width: 100%;
    }
    
    .table {
        display: table;
        margin-left: 20px;
    }
    
    .tablerow {
        display: table-row;
    }
    
    .jobtitle {
        display: table-cell;
        font-style: italic;
    }
    
    .right {
        display: table-cell;
        text-align: right;
    }
    
    .cell {
        display: table-cell;
    }
    
    .onlinecell {
        font-style: italic;
        padding-right: 10px;
    }
    
    .urlcell {
        display: table-cell;
        letter-spacing: 1px;
    }
    
    .pagebreak {
        page-break-before: always;
    }
    .row {
      display: flex;
    }
    
    .column {
      flex: 50%;
    }
      
      </style>
    <body>
        <header id="info">
            <h1>${personDetail.firstName}  ${personDetail.lastName}</h1>
            <span>${personDetail.city}, ${personDetail.country};
            ${personDetail.phone} &bull;
            ${personDetail.email}</span>
        </header>
        <section id="statement">
            <h2>${jobPosition}</h2>
            <p>${userSummary}.</p>
        </section>
        <section id="employment">
            <h2>Employment</h2>
            <section>
                ${renderExperience()}
            </section>
           
        </section>
        <section id="education">
        <h2>Education</h2>
        <div class="edtable">
            ${renderEducation()}
        </div>
        
        </section>
        ${renderCertificate()}
        ${renderAwards()}
        ${renderReferences()}
        <div class="row">
        <div class="column">
        <h2>Skills</h2>
        <ul class="cell">
          ${renderSkills()}
        </ul> 
        </div>
        <div class="column">
        <h2>Hobbies</h2>
        <ul class="cell">
        ${renderHobbies()}
      </ul>
    </div>
      </div>
      
    
       
        
        
        
    </body>
    </html>
     `;
}
