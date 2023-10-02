export function template55(resume) {
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
      certificateHtml = ` <table class="w-100 section">
        <tr>
            <td colspan="4" class="section-header">
                <h3>CERTIFICATES</h3>
            </td>
        </tr>
        <tr>
        <th colspan="1">certificate</th>
        <th colspan="1">University/Institute</th>
        <th colspan="1">Year</th>
        
        </tr>
            ${certificates
              .map(
                (element) =>
                  `
                <tr>
                <td>
                    <b>${element.certificate}</b>
                </td>
                <td>
                ${element.institute} 
                </td>
                <td>
                ${element.Year}${cleanMonth(element.fromMonth)}
                </td>
                </tr>`
              )
              .join("")}
           </table>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = ` <table class="w-100 section">
        <tr>
            <td colspan="4" class="section-header">
                <h3>AWARDS</h3>
            </td>
        </tr>
        <tr>
        <th colspan="1">Award</th>
        <th colspan="1">University/Institute</th>
        <th colspan="1">Year</th>
        
        </tr>
            ${awards
              .map(
                (element) =>
                  `
                <tr>
                <td>
                    <b>${element.awards}</b>
                </td>
                <td>
                ${element.institute} 
                </td>
                <td>
               ${element.Year}
                </td>
                </tr>`
              )
              .join("")}
           </table>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = ` <table class="w-100 section">
        <tr>
            <td colspan="4" class="section-header">
                <h3>REFERENCE</h3>
            </td>
        </tr>
        <tr>
        <th colspan="1">reference</th>
        <th colspan="1">University/Institute</th>
        <th colspan="1">Year</th>
        
        </tr>
            ${certificates
              .map(
                (element) =>
                  `
                <tr>
                <td>
                    <b>${element.reference}</b>
                </td>
                <td>
                ${element.institute} 
                </td>
                <td>
                
                </td>
                </tr>`
              )
              .join("")}
           </table>`;
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
      result += `<tr>
<td class="w-80" valign="top">
    <p>
        <b>${element.position}</b>
    </p>
    <p>
    <b>${element.company}</b>
</p>`;
      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<p>${role}</p>`;
      });
      result += `${roles}
  
</td>
<td class="w-20" valign="top">
    <p>(${element.fromYear}${cleanMonth(element.fromMonth)}- ${
        element.toMonth
      }, ${element.toYear})</p>
</td>
<td class="w-20" valign="top">
    <p>${element?.city ?? []}</p>
</td>
</tr>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `
<tr>
<td>
    <b>${element.degree}</b>
</td>
<td>
${element.university} , ${element.city ?? []}
</td>
<td>
${element.fromYear}-${element.toYear}
</td>
</tr>`;
    });

    return result;
  }

  return ` 
  <!DOCTYPE html>
  <html>
  <head>
    <title>Resume</title>
    <meta http-equiv="Content-Type" content="text/html; charset=us-ascii">
    <link rel="stylesheet" href="./assets/css/style.css">
    <style>

    @page {
      margin: 0px;
    }

      * {
          padding: 0;
          margin: 0;
      }
      
      body {
          font-family: "Calibri", sans-serif;
          font-size: 12px;
          line-height: 1.5;
          background: #fff;
      }
      
      .intro p {
          display: block;
          margin-top: 15px;
          margin-bottom: 15px;
      }
      
      .main img {
          height: 150px;
          width: 150px;
      }
      
      .text-right {
          text-align: right;
      }
      
      .inline-block {
          display: inline-block;
      }
      
      table {
          padding: 15px;
          width: 100%;
      }
      
      .page-break {
          page-break-after: always;
      }
      
      .w-10 {
          width: 10%;
      }
      
      .w-20 {
          width: 20%;
      }
      
      .w-30 {
          width: 30%;
      }
      
      .w-40 {
          width: 40%;
      }
      
      .w-50 {
          width: 50%;
      }
      
      .w-60 {
          width: 60%;
      }
      
      .w-70 {
          width: 70%;
      }
      
      .w-80 {
          width: 80%;
      }
      
      .w-90 {
          width: 90%;
      }
      
      .w-100 {
          width: 100%;
      }
      
      .wrapper {
          margin: 40px;
          background: #ffffff;
      }
      
      .intro {
          padding: 0 20px;
      }
      
      .intro h1 {
          text-transform: uppercase;
          margin-bottom: 10px;
      }
      
      .section-header {
          border-bottom: solid 3px #666666;
          margin-bottom: 20px;
      }
      
      .section {
          margin-top: 20px;
      }
      
      .section th {
          text-align: left;
          padding: 10px;
      }
      
      .section td {
          padding: 10px;
      }
      
      .list li {
          margin-bottom: 10px;
      }
      
    </style>
  </head>
  <body>
    <div class="wrapper">
      <table class="main">
        <tr>
          <td class="intro w-80">
            <h1>${personDetail.firstName} ${personDetail.lastName}</h1>
            <h2>${jobPosition}</h2>
            <p><b>${userSummary}</b></p>
            <p><span class="w-60 inline-block"><b>Email:</b> ${
              personDetail.email
            }</span> <span class="w-60 inline-block"><b>Phone:</b> ${
    personDetail.phone
  }</span> <span class="w-60 inline-block"><b>Phone:</b> ${
    personDetail.website
  }</span></p>
            <p><b>Address:</b> ${personDetail.city}, ${personDetail.country}</p>
          </td>
        </tr>
      </table>${renderEducation()}
      <table class="w-100 section">
        <tr>
          <td colspan="4" class="section-header">
            <h3>EDUCATION</h3>
          </td>
        </tr>
        <tr>
          <th colspan="1">Degree</th>
          <th colspan="1">University/Institute</th>
          <th colspan="1">Year</th>
        </tr>
      </table>${renderCertificate()} ${renderAwards()} ${renderReferences()}
      <table class="w-100 section">
        <tr>
          <td colspan="2" class="section-header">
            <h3>SKILLS SET</h3>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <ul class="list">
              ${renderSkills()}
            </ul>
          </td>
        </tr>
      </table>
      <div class="page-break"></div>${renderExperience()}
      <table class="w-100 section">
        <tr>
          <td colspan="2" class="section-header">
            <h3>EXPERIENCES</h3>
          </td>
        </tr>
      </table>
      <table class="w-100 section">
        <tr>
          <td colspan="2" class="section-header">
            <h3>INTERESTS AND HOBBIES</h3>
          </td>
        </tr>
        <tr>
          <td valign="top">
            <ul class="list">
              ${renderHobbies()}
            </ul>
          </td>
        </tr>
      </table>
    </div>
  </body>
  </html>
    `;
}
