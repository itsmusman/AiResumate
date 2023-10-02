export function template20(resume) {
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
           ><span> - </span>
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
           ><span
             class="companyname companyname_educ"
             dependency="SCHO"
             >${element.institute}</span
           ><span> </span>
           
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
      skillsHtml = `
        <div class="heading">
          <span class="headingIcon"></span>
          <span class="section-title">Skills</span>
        </div>
        <div class="paragraph first-paragraph">
          ${skills
            .map((element) => `<span class="skill">${element.name}</span>`)
            .join(", ")}
        </div>`;
    }
    return skillsHtml;
  }

  function renderHobbies() {
    let hobbyHtml = "";
    if (hobbies && hobbies.length > 0) {
      hobbyHtml = `
        <div class="heading">
          <span class="headingIcon"></span>
          <span class="section-title">Hobbies</span>
        </div>
        <div class="paragraph first-paragraph">
          ${hobbies
            .map((element) => `<span class="skill">${element.name}</span>`)
            .join(", ")}
        </div>`;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";
    if (experience && experience.length > 0) {
      result += `
        <div class="heading">
          <div class="section-title">Experience</div>
        </div>
      `;
      experience.forEach((element) => {
        result += `
          <div class="paragraph first-paragraph">
            <span class="dates_wrapper">
              <span class="jobdates" format="%b %Y">${
                element.fromYear
              }${cleanMonth(element.fromMonth)}</span>
              <span> - </span>
              <span class="jobdates" format="%b %Y">${
                element.toYear
              }${cleanMonth(element.toMonth)}</span>
            </span>
            <div class="single-column">
              <span class="padded-line pb5">
                <span class="job-title">${element.position}</span>
              </span>
              <span class="padded-line txtItalics pb5">
                <span class="companyname">${
                  element.company
                }</span><span>, </span>
                <span class="job-location jobcity">${element?.city ?? []}</span>
                <span></span>
                <span class="job-location jobstate"></span>
              </span>
              <span class="padded-line">
                <span class="jobline">
                  <ul>`;

        var roles = "";
        (element?.roles ?? []).forEach((role) => {
          roles += `<li>${role}</li>`;
        });
        result += `${roles}</ul>
                </span>
              </span>
            </div>
          </div>
          <br/>`;
      });
    }
    return result;
  }

  function renderEducation() {
    var result = "";
    if (education && education.length > 0) {
      result += `
      <div class="heading">
        <div class="section-title">Education</div>
      </div>
    `;
      education.forEach((element) => {
        result += `
        <div class="paragraph first-paragraph">
          <div class="single-column">
            <span class="padded-line mb5">
              <span class="degree"></span>
              <span class="program-line">${element.degree}</span>
            </span>
            <span class="padded-line txtItalics mb5">
              <span class="companyname companyname_educ" dependency="SCHO">${
                element.university
              }</span>
              <span>, </span>
              <span class="companyname companyname_educ" dependency="SCHO">${
                element?.city ?? []
              }</span>
              <span> - </span>
              <span class="job-location jobcity">${element.fromYear} - ${
          element.toYear
        }</span>
            </span>
            <span class="padded-line">
              <span class="field"></span>
            </span>
          </div>
        </div>
        <br/>
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
      .genie-ak1 ol,
      .genie-ak1 ul {
        list-style: none;
      }
      .genie-ak1 table {
        border-collapse: collapse;
        border-spacing: 0;
        font-size: inherit;
        color: inherit;
        width: 100%;
      }

      .genie-ak1 ul,
      .genie-ak1 li {
        margin: 0;
        padding: 0;
        list-style-type: disc;
      }
      .genie-ak1 ul li {
        margin: 0 0 0 16px;
        padding: 0;
      }

      .genie-ak1 span.padded-line {
        display: block;
      }
      .genie-ak1 span.job-title,
      .genie-ak1 span.degree,
      .genie-ak1 span.program-line {
        font-weight: bold;
      }
      .genie-ak1 .mb5 {
        margin-bottom: 5px;
      }
      .genie-ak1 span.dates_wrapper {
        display: block;
        float: left;
        text-align: left;
        padding-right: 10px;
      }
      .genie-ak1 .txtItalics {
        font-style: italic;
      }
      .genie-ak1 .txtBold {
        font-weight: bold;
      }

      .genie-ak1 {
        box-sizing: border-box;
        word-wrap: break-word;
      }
      .genie-ak1 .name {
        color: #002e58;
        font-size: 15px;
        line-height: 17px;
        font-weight: bold;
        padding: 0;
        text-align: left;
      }
      .genie-ak1 .paragraph {
        position: relative;
        clear: both;
      }
      .genie-ak1 .heading {
        clear: both;
        font-weight: bold;
      }
      .genie-ak1 .section-title {
        color: #002e58;
      }
      .genie-ak1 .address {
        text-align: left;
        font-size: 0.917em;
        line-height: 1.25em;
        margin-top: 0;
        white-space: nowrap;
        position: relative;
        z-index: 2;
      }
      .genie-ak1 .address .txtBold {
        margin-right: 3px;
      }
      .genie-ak1 .addressLeft,
      .genie-ak1 .addressRight {
        width: 49%;
        padding: 0 1% 0 0;
        white-space: normal;
        display: inline-block;
        vertical-align: top;
      }
      .genie-ak1 .addressRight {
        padding: 0 0 0 1%;
      }
      .genie-ak1 .table_wrapper {
        width: 100%;
        margin-top: 0;
      }
      .genie-ak1 table.twocol td {
        width: 50%;
      }
      .genie-ak1 table.skills {
        width: 100%;
      }
      .genie-ak1 table.skills th,
      .genie-ak1 table.skills td {
        width: 20%;
        text-align: center;
      }
      .genie-ak1 table.skills th {
        text-decoration: underline;
      }
      .genie-ak1 table.skills .skill-name,
      .genie-ak1 table.skills .skill-rating {
        text-align: left;
        width: 35%;
      }
      .genie-ak1 table.skills .skill-rating {
        width: 20%;
      }
      .genie-ak1 table.skills .skill-years,
      .genie-ak1 table.skills .skill-last {
        width: 19%;
      }
      .genie-ak1 table.skills .pad1 {
        width: 5%;
      }
      .genie-ak1 table.skills .pad2,
      .genie-ak1 table.skills .pad3 {
        width: 1%;
      }
      .genie-ak1 .resumeTitle {
        color: #002e58;
        font-weight: 400;
        text-align: left;
        padding-bottom: 7px;
      }
      .genie-ak1 td.twocol_2 {
        border-left: 1px solid #fefdfd;
      }

      .genie-ak1 .rating-wrapper {
        white-space: nowrap;
      }
      .genie-ak1 .rating-text,
      .genie-ak1 .rating-svg {
        width: 68%;
        padding: 0 1% 0 0;
        display: inline-block;
        white-space: normal;
        vertical-align: top;
      }
      .genie-ak1 .rating-svg {
        width: 30%;
        text-align: right;
        padding: 0;
      }
      .genie-ak1 .outer-square {
        height: 7px;
        background: #d5d6d6;
      }
      .genie-ak1 .inner-square {
        background: #002e58;
        height: 7px;
      }

      .genie-ak1,
      .genie-ak1 table {
        line-height: 19px;
      }
      .genie-ak1.pagesize {         width: 792px;
      }
      .genie-ak1.fontsize {
        font-size: 11px;
      }
      .genie-ak1.font-face {
        font-family: "Times New Roman", Times, serif;
      }
      .genie-ak1.vmargins {
        padding-top: 25px;
        padding-bottom: 25px;
      }
      .genie-ak1.hmargins {
        padding-left: 37px;
        padding-right: 37px;
      }
      .genie-ak1 .section {
        padding-top: 18px;
      }
      .genie-ak1 .address {
        font-size: 11px;
        line-height: 27px;
        padding-top: 16px;
      }
      .genie-ak1 .heading {
        padding-bottom: 13px;
      }
      .genie-ak1 .job-title,
      .genie-ak1 span.degree,
      .genie-ak1 span.program-line {
        font-size: 14px;
      }
      .genie-ak1 .paragraph {
        padding-top: 18px;
      }
      .genie-ak1 .first-section,
      .genie-ak1 .first-paragraph,
      .genie-ak1 .SECTION_CNTC {
        padding-top: 0;
      }
      .genie-ak1 .single-column,
      .genie-ak1 .main-column {
        margin-left: 100px;
      }
      .genie-ak1 span.dates_wrapper {
        width: 90px;
        font-size: 11px;
        line-height: 20px;
      }
      .genie-ak1 .section-title,
      .genie-ak1 .resumeTitle {
        font-size: 18px;
        line-height: 23px;
      }
      .genie-ak1 .name {
        font-size: 36px;
        line-height: 52px;
      }
      .genie-ak1 table.skills td {
        padding-top: 9px;
      }
      .genie-ak1 .noPind {
        margin-left: 0;
      }
      .genie-ak1 .name,
      .genie-ak1 .section-title,
      .genie-ak1 .resumeTitle {
        color: #000000;
      }
      .genie-ak1 .inner-square {
        background: #000000;
      }

      .genie-ak1 .rating-svg {
        padding-top: 6px;
      }
      .genie-ak1
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
      <div class="genie-ak1 fontsize font-face vmargins hmargins pagesize">
        <div class="top-section">
          <div class="left-box">
            <div class="section notdraggable first-section">
              <div class="paragraph first-paragraph">
                <div class="name">
                  <span class="field"></span><span> </span
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
                      <span class="txtBold"> Contact </span
                      ><span class="field"></span
                      ><span class="spaced field">${personDetail.city}</span
                      ><span>, </span><span class="spaced field">${
                        personDetail.country
                      }
                     </span >
                    </div>
                    <div>
                     <span class="field">${personDetail.phone}, ${
    personDetail.email
  }</span>
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
            <div class="section">
              
              
                    
                          ${renderSkills()}
                        
                  <br/>
                 
                          ${renderHobbies()}
                     
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
            </div>
            <div class="section">
            ${renderReferences() ?? []}
           </div>

          </div>
        </div>
      </div>
    </section>
  </body>
</html>`;
}
