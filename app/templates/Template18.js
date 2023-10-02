export function template18(resume) {
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
      <div class="heading">
      <div class="section-title">Certificate</div>
     </div>
          ${certificates
            .map(
              (element) =>
                `<div class="single-column">
         <span class="padded-line"
           ><span class="degree"></span><span class="program-line">${
             element.certificate
           }</span></span
         ><span class="padded-line txtItalics"
           ><span
             class="companyname companyname_educ"
             dependency="SCHO"
             >${element.institute}</span
           ><span> </span>
           <span class="job-location jobcity">${element.Year}${cleanMonth(
                  element.fromMonth
                )}</span
           ><span> </span
           ><span class="job-location jobstate"></span></span
         ><span class="padded-line"><span class="field"></span></span>
         </div>`
            )
            .join("")}
          </div> `;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
      <div class="heading">
      <div class="section-title">Awards</div>
     </div>
          ${awards
            .map(
              (element) =>
                `<div class="single-column">
         <span class="padded-line"
           ><span class="degree"></span><span class="program-line">${element.awards}</span></span
         ><span class="padded-line txtItalics"
           ><span
             class="companyname companyname_educ"
             dependency="SCHO"
             >${element.institute}</span
           ><span> - </span>
           <span class="job-location jobcity">${element.Year}</span
           ><span> </span
           ><span class="job-location jobstate"></span></span
         ><span class="padded-line"><span class="field"></span></span>
         </div>`
            )
            .join("")}
          </div> `;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `
      <div class="heading">
      <div class="section-title">Reference</div>
     </div>
          ${references
            .map(
              (element) =>
                `<div class="single-column">
         <span class="padded-line"
           ><span class="degree"></span><span class="program-line">${element.reference}</span></span
         ><span class="padded-line txtItalics"
           ><span></span>
           <span class="job-location jobcity">${element.institute}</span
           ><span> </span
           ><span class="job-location jobstate"></span></span
         ><span class="padded-line"><span class="field"></span></span>
         </div>`
            )
            .join("")}
          </div> `;
    }
    return referencesHtml;
  }

  function renderSkills() {
    let skillsHtml = "";
    if (skills && skills.length > 0) {
      const hobbyNames = skills.map((element) => element.name);
      const hobbiesString = hobbyNames.join(", ");
      skillsHtml = `
        <div class="section hobbies">
          <div class="heading">
            <div class="section-title">Skills</div>
          </div>
          <p>${hobbiesString}</p>
        </div>
      `;
    }
    return skillsHtml;
  }

  function renderHobbies() {
    let hobbyHtml = "";
    if (hobbies && hobbies.length > 0) {
      const hobbyNames = hobbies.map((element) => element.name);
      const hobbiesString = hobbyNames.join(", ");
      hobbyHtml = `
          <div class="section hobbies">
            <div class="heading">
              <div class="section-title">Hobbies</div>
            </div>
            <p>${hobbiesString}</p>
          </div>
        `;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";
    if (experience && experience.length > 0) {
      result += `
      <div class="heading">
        <div class="headingIcon"></div>
        <div class="section-title">Work Experience</div>
      </div>
      <div class="paragraph first-paragraph">
    `;
      experience.forEach((element) => {
        result += `
        <div class="single-column">
          <div class="padded-line date-content">
            <span class="jobdates">${element.fromYear}${cleanMonth(
          element.fromMonth
        )}</span>
            <span> - </span>
            <span class="jobdates">${element.toYear}${cleanMonth(
          element.toMonth
        )}</span>
          </div>
          <span class="padded-line">
            <span class="job-title">${element.position}</span>
          </span>
          <span class="padded-line txtItalics">
            <span class="companyname">${element.company}</span>
            <span>,</span>
            <span class="job-location jobcity">${element?.city ?? []}</span>
          </span>
          <span class="padded-line">
            <span class="jobline">
              <ul>
                ${
                  element?.roles
                    ? element.roles.map((role) => `<li>${role}</li>`).join("")
                    : ""
                }
              </ul>
            </span>
          </span>
        </div>
        `;
      });
      result += "</div>";
    }
    return result;
  }

  function renderEducation() {
    var result = "";
    if (education && education.length > 0) {
      result += `
      <div class="heading">
        <div class="headingIcon"></div>
        <div class="section-title">Education</div>
      </div>
    `;
      education.forEach((element) => {
        result += `
        <div class="paragraph first-paragraph">
          <div class="single-column">
            <span class="padded-line mb5">
              <span class="program-line">${element.degree}</span>
            </span>
            <span class="padded-line txtItalics mb5">
              <span class="companyname companyname_educ" dependency="SCHO">${
                element.university
              }</span>
              <span>${element?.city ?? []}</span>
              <span> - </span>
              <span class="job-location jobcity">${
                element.fromYear
              }${cleanMonth(element.fromMonth)} - ${element.toYear}${cleanMonth(
          element.toMonth
        )}</span>
            </span>
            <span class="padded-line">
              <span class="field"></span>
            </span>
          </div>
        </div>
      `;
      });
    }
    return result;
  }

  return `<html>
  <head>
   <style>

   @page {
    margin: 0px;
  }
      body {
        margin: auto;
      }
      .genie-mjs8 ol,
      .genie-mjs8 ul {
        list-style: none;
      }
      .genie-mjs8 table {
        border-collapse: collapse;
        border-spacing: 0;
        font-size: inherit;
        color: inherit;
        width: 100%;
      }
      .genie-mjs8 ul,
      .genie-mjs8 li {
        margin: 0;
        padding: 0;
        list-style-type: disc;
      }
      .genie-mjs8 ul li {
        margin: 0 0 0 16px;
        padding: 0;
      }
      .genie-mjs8 span.job-title,
      .genie-mjs8 span.degree,
      .genie-mjs8 span.program-line {
        font-weight: bold;
      }
      .genie-mjs8 span.padded-line {
        display: block;
      }
      .genie-mjs8 span.dates_wrapper {
        font-weight: bold;
        display: block;
        float: left;
        text-align: left;
        padding-right: 10px;
      }
      .genie-mjs8 .txtItalics {
        font-style: italic;
      }
      .genie-mjs8 .txtBold {
        font-weight: bold;
      }
      .genie-mjs8 .mb5 {
        margin-bottom: 5px;
      }
      .genie-mjs8 {
        box-sizing: border-box;
        word-wrap: break-word;
      }
      .genie-mjs8 .nameSec {
        padding-top: 24px !important;
      }
      .genie-mjs8 .name {
        color: #fff;
        font-size: 15px;
        line-height: 17px;
        font-weight: bold;
        padding: 0;
        text-align: left;
        position: relative;
        z-index: 2;
      }
      .genie-mjs8 .resumeTitle {
        font-weight: 400;
        color: #fff;
        position: relative;
        z-index: 2;
      }
      .genie-mjs8 .name .fName {
        font-weight: normal;
      }
      .genie-mjs8 .paragraph {
        position: relative;
        clear: both;
      }
      .genie-mjs8 .heading {
        clear: both;
        color: #373d48;
        font-weight: bold;
      }
      .genie-mjs8 .section-title {
        border-bottom: 1px solid #ccc;
      }
      .genie-mjs8 .address {
        color: #fff;
        text-align: left;
        font-size: 0.917em;
        line-height: 1.25em;
        margin-top: 0;
        white-space: nowrap;
        position: relative;
        z-index: 2;
      }
      .genie-mjs8 .address .txtBold {
        margin-right: 3px;
      }
      .genie-mjs8 .addressLeft,
      .genie-mjs8 .addressRight {
        width: 49%;
        padding: 0 1% 0 0;
        white-space: normal;
        display: inline-block;
        vertical-align: top;
      }
      .genie-mjs8 .addressRight {
        padding: 0 0 0 1%;
      }
      .genie-mjs8 .table_wrapper {
        width: 100%;
        margin-top: 0;
      }
      .genie-mjs8 table.twocol td {
        width: 50%;
      }
      .genie-mjs8 table.skills {
        width: 100%;
      }
      .genie-mjs8 table.skills th,
      .genie-mjs8 table.skills td {
        width: 20%;
        text-align: center;
      }
      .genie-mjs8 table.skills th {
        text-decoration: underline;
      }
      .genie-mjs8 table.skills .skill-name,
      .genie-mjs8 table.skills .skill-rating {
        text-align: left;
        width: 35%;
      }
      .genie-mjs8 table.skills .skill-rating {
        width: 20%;
      }
      .genie-mjs8 table.skills .skill-years,
      .genie-mjs8 table.skills .skill-last {
        width: 19%;
      }
      .genie-mjs8 table.skills .pad1 {
        width: 5%;
      }
      .genie-mjs8 table.skills .pad2,
      .genie-mjs8 table.skills .pad3 {
        width: 1%;
      }
      .genie-mjs8 td.twocol_2 {
        border-left: 1px solid #fefdfd;
      }
      .genie-mjs8 .rating-wrapper {
        white-space: nowrap;
      }
      .genie-mjs8 .rating-text,
      .genie-mjs8 .rating-svg {
        width: 68%;
        padding: 0 1% 0 0;
        display: inline-block;
        white-space: normal;
        vertical-align: top;
      }
      .genie-mjs8 .rating-svg {
        width: 30%;
        text-align: right;
        padding: 0;
      }
      .genie-mjs8 .outer-square {
        height: 7px;
        background: #d5d6d6;
      }
      .genie-mjs8 .inner-square {
        background: #373d48;
        height: 7px;
      }
      .genie-mjs8 .nameSec,
      .genie-mjs8 .SECTION_CNTC {
        position: relative;
      }
      .genie-mjs8 .nameSec:before,
      .genie-mjs8 .SECTION_CNTC:before {
        background: #373d48;
        content: "";
        display: block;
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
      }
      .genie-mjs8,
      .genie-mjs8 table {
        line-height: 16px;
      }
      .genie-mjs8.pagesize {         width: 792px;
      }
      .genie-mjs8.fontsize {
        font-size: 11px;
      }
      .genie-mjs8.font-face {
        font-family: "Century Gothic", Helvetica, sans-serif;
      }
      .genie-mjs8.vmargins {
        padding-bottom: 24px;
      }
      .genie-mjs8.hmargins {
        padding-left: 24px;
        padding-right: 24px;
      }
      .genie-mjs8 .section {
        padding-top: 15px;
      }
      .genie-mjs8 .heading {
        color: #373d48;
        padding-bottom: 10px;
      }
      .genie-mjs8 .job-title,
      .genie-mjs8 span.degree,
      .genie-mjs8 span.program-line {
        font-size: 14px;
      }
      .genie-mjs8 .paragraph {
        padding-top: 10px;
      }
      .genie-mjs8 .rtngSec .paragraph {
        padding-top: 5px;
      }
      .genie-mjs8 .SECTION_CNTC,
      .genie-mjs8 .first-paragraph {
        padding-top: 0 !important;
      }
      .genie-mjs8 .single-column,
      .genie-mjs8 .main-column {
        margin-left: 120px;
      }
      .genie-mjs8 span.dates_wrapper {
        width: 110px;
        font-size: 11px;
        line-height: 17px;
      }
      .genie-mjs8 .section-title,
      .genie-mjs8 .resumeTitle {
        font-size: 16px;
        line-height: 21px;
      }
      .genie-mjs8 .name {
        font-size: 36px;
        line-height: 46px;
      }
      .genie-mjs8 .address {
        font-size: 11px;
        line-height: 21px;
        padding-top: 10px;
        padding-bottom: 15px;
      }
      .genie-mjs8 table.skills td {
        padding-top: 5px;
      }
      .genie-mjs8 .noPind {
        margin-left: 0;
      }
      .genie-mjs8 .nameSec:before,
      .genie-mjs8 .SECTION_CNTC:before,
      .genie-mjs8 .inner-square {
        background: #373d48;
      }
      .genie-mjs8 .rating-svg {
        padding-top: 5px;
      }
      .genie-mjs8 .nameSec,
      .genie-mjs8 .SECTION_CNTC {
        margin-left: -24px !important;
        margin-right: -24px !important;
        padding-left: 24px;
        padding-right: 24px;
      }
      .genie-mjs8
        .sortableInner
        .sortable-item.active
        > .wrapper-bg
        + div[data-section] {
        position: relative;
        z-index: 8;
      }
    </style>
  </head>
  <body>
    <section class="page-wrap">
      <div class="genie-mjs8 fontsize font-face vmargins hmargins pagesize">
        <div class="top-section">
          <div class="left-box">
            <div class="section nameSec notdraggable first-section">
              <div class="paragraph first-paragraph">
                <div class="name">
               <span> </span
                  ><span class="field">${personDetail.firstName}${" "}${
    personDetail.lastName
  }</span>
                </div>
                <div class="resumeTitle">${jobPosition}</div>
              </div>
            </div>
            <div class="section SECTION_CNTC notdraggable">
              <div class="paragraph PARAGRAPH_CNTC first-paragraph">
                <div class="address">
                  <div class="addressLeft">
                    <div>
                      <span class="txtBold">Address </span
                      ><span class="field"></span
                      ><span class="spaced field">${personDetail.city}</span
                      ><span>, </span><span class="spaced field">${
                        personDetail.country
                      }</span>
                    </div>
                    <div>
                      <span class="txtBold">Phone   </span
                      ><span class="field" dependency="HPHN"
                        >${personDetail.phone}</span
                      ><span class="field"></span>
                    </div>
                    <div>
                      <span class="txtBold">E-mail   </span
                      ><span class="field">${personDetail.email}</span>
                    </div>
                  </div>
                  <div class="addressRight"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="right-box"></div>
        </div>
        <div class="parentContainer">
          <div>
            <div class="section notdraggable">
              <div class="paragraph first-paragraph">
                <div class="field single-column noPind">
                  <p>
                  ${userSummary}
                  </p>
                </div>
              </div>
            </div>
            <div class="section rtngSec">

                        ${renderSkills()}

            </div>
            <div class="section rtngSec">

                      ${renderHobbies()}
                   
            </div>
          </div>
            <div class="section">
            
              ${renderExperience()}
              
            </div>
            <div class="section">
              
              ${renderEducation()}
            </div>

            <div class="section">
              ${renderCertificate() ?? []}
            </div>

            <div class="section">
            ${renderAwards() ?? []}
         
            ${renderReferences() ?? []}
          </div>

          </div>
        </div>
      </div>
    </section>
  </body>
</html>`;
}
