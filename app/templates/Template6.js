export function template6(resume) {
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
      certificateHtml = `<div class="skill-section">
        <!-- Education -->
        <div class="section-title">Certificate</div>
            ${certificates
              .map(
                (element) =>
                  `<div class="enumeration-text"> ${element.certificate} (${
                    element.Year
                  }${cleanMonth(element.fromMonth)})</div>
                <div class="enumeration-text">${element.institute} </div>`
              )
              .join("")}
           </div>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `<div class="skill-section">
        <!-- Education -->
        <div class="section-title">Awards</div>
            ${awards
              .map(
                (element) =>
                  `<div class="enumeration-text"> ${element.awards} (${element.Year})</div>
                <div class="enumeration-text">${element.institute} </div>`
              )
              .join("")}
           </div>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `<div class="skill-section">
        <!-- Education -->
        <div class="section-title">Reference</div>
            ${references
              .map(
                (element) =>
                  `<div class="enumeration-text"> ${element.reference} </div>
                <div class="enumeration-text">${element.institute} </div>`
              )
              .join("")}
           </div>`;
    }
    return referencesHtml;
  }

  function renderSkills() {
    var result = "";
    skills.forEach((element) => {
      result = result + `<div class="enumeration-text">• ${element.name}</div>`;
    });
    return result;
  }

  function renderHobbies() {
    var result = "";
    hobbies.forEach((element) => {
      result = result + `<div class="enumeration-text">• ${element.name}</div>`;
    });
    return result;
  }

  function renderExperience() {
    var result = "";
    experience.forEach((element) => {
      result += `<div class="experience-details-card text-detail">
<a class="url-text" href="">${element.position}</a>:<br/>
${element.company} , ${element?.city ?? []}<br/>`;

      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li>${role}</li>`;
      });
      result += `${roles}


<div class="right-aligned-text bold-text">${element.fromYear}${cleanMonth(
        element.fromMonth
      )} - ${element.toYear}${cleanMonth(element.toMonth)}</div>
</div>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `  <div class="enumeration-text">${element.degree} (${
          element.fromYear
        } - ${element.toYear})</div>
<div class="enumeration-text">${element.university} ${
          element.city ?? []
        }</div>`;
    });

    return result;
  }

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.4.1/paper.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <title>Resume</title>
    <style>

    @page {
      margin: 0px;
    }

    @page { size: A4 }
        @media print {
          body {-webkit-print-color-adjust: exact;}
      }
      
      .background {
          height: 100%;
          width: 100%;
          background-color: #f2f2f2;
          font-family: 'Roboto', sans-serif;
          font-size: 1.5rem;
          color: white;
      }
      
      /* HEADER */
      .header {
          background-color: #37a4dc;
          overflow: hidden;
          box-shadow: 0 0 6px 0 rgba(81, 81, 81, 0.98);
      }
      
      .profile-image {
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 4px 4px 4px -4px rgba(0, 0, 0, 0.2);
          float: left;
          height: 8.5em;
          width: 8.5em;
          margin: 1em;
      }
      .profile-name {
          color: white;
          font-weight: bold;
          font-size: 1.2em;
          padding-top: 15px;
          padding-bottom: 15px;
      }
      
      
      .public-info-box {
          display: inline-block;
          overflow: hidden;
          padding: 1em;
      }
      
      
      .public-info-item {
          overflow: hidden;
          content: '';
      }
      .public-info-item-text {
          color: white;
          font-size: 0.55em;
          font-style: normal;
          text-decoration: none;
          vertical-align: middle;
          padding-left: 10px;
          display: inline-block;
      }
      .public-info-item-image {
          height: 0.9em;
          width: 0.9em;
          vertical-align: middle;
      }
      
      
      /* BODY */
      .content-root {
          display: table;
          height: 100%;
          width: 100%;
      }
      .content-left-column {
          display: table-cell;
          width: 40%;
          padding-left: 20px;
      }
      .content-right-column {
          display: table-cell;
          width: 70%;
      }
      
      
      .skill-section {
          padding-top: 20px;
          padding-bottom: 20px;
          padding-left: 20px;
      }
      
      .section-title {
          font-size: 0.9em;
          font-weight: bold;
          color: #37a4dc;
          padding-bottom: 10px;
      }
      
      .enumeration-text {
          font-size: 13px;
          font-weight: bold;
          padding-top: 2px;
          padding-bottom: 2px;
          color: #212121
      }
      .text-detail {
          font-size: 11px;
          font-weight: normal;
          color: #212121
      }
      
      .horizontal-image {
          display: inline-block;
          height: 1.6em;
          width: auto;
          padding-left: 20px;
          padding-right: 5px;
      }
      
      
      .experience-topic-container {
          overflow: hidden;
      }
      
      .experience-title-card {
          height: 40px;
          width: 80px;
          font-size: 12px;
          text-align: center;
          font-weight: bold;
          display: table;
          float: left;
          box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
          border-radius: 3px;
          padding: 5px;
          margin-bottom: 5px;
          background-color: #37a4dc;
          color: white;
      }
      span {
          display: table-cell;
          vertical-align: middle;
      }
      
      .experience-details-card {
          height: auto;
          width: 335px;
          position: relative;
          float: left;
          box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
          border-radius: 3px;
          padding: 8px 8px 15px;
          margin-left: 5px;
          margin-right: 5px;
          margin-bottom: 5px;
          background-color: white;
          color: #212121;
      }
      
      .right-aligned-text {
          position: absolute;
          right: 8px;
      }
      
      .bold-text {
          font-weight: bold;
      }
      
      .url-text {
          color: #212121;
          font-style: normal;
          font-weight: bold;
      }
      
    </style>
  </head>
  <body class="A4">
    <section class="sheet">
      <article class="background">
        <!-- Header -->
        <div class="header">
          <div class="public-info-box">
            <div class="profile-name">
              ${personDetail.firstName} ${personDetail.lastName}
            </div>
            <div class="public-info-item">
              <a class="public-info-item-text" href=""><b>${jobPosition}</b><br/>
              ${userSummary}</a>
            </div>
            <div class="public-info-item">
              <a class="public-info-item-text" href="">${personDetail.phone}</a>
            </div>
            <div class="public-info-item">
              <a class="public-info-item-text" href="">${personDetail.email}</a>
            </div>
            <div class="public-info-item">
              <a class="public-info-item-text" href="">${
                personDetail.website
              }</a>
            </div>
            <div class="public-info-item">
              <a class="public-info-item-text" href="">${personDetail.city} - ${
    personDetail.country
  }</a>
            </div>
          </div>
        </div><!-- Body - content -->
        <div class="content-root">
          <div class="content-left-column">

            <div class="skill-section">
              <!-- Skills -->
              <div class="section-title">
                Skills
              </div>
              ${renderSkills()}
            </div>

            <div class="skill-section">
              <!-- Education -->
              <div class="section-title">
                Education
              </div>${renderEducation()}
            </div>${renderCertificate()} ${renderAwards()} ${renderReferences()}
            <div class="skill-section">
              <!-- Hobbies -->
              <div class="section-title">
                Hobbies
              </div>
              <div class="skill-section">
                ${renderHobbies()}
              </div>
            </div>
          </div>
          <div class="content-right-column">
            <!-- Experience -->
            <div class="skill-section">
              <div class="section-title">
                Experience
              </div>
              <div class="experience-topic-container">
                ${renderExperience()}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </body>
  </html>
     `;
}
