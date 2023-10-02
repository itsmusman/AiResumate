export function template17(resume) {
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
      certificateHtml += `
        <div class="heading">
          <span class="headingIcon"></span>
          <span class="section-title">Certificate</span>
        </div>`;

      certificateHtml += certificates
        .map(
          (element) =>
            `<div class="paragraph first-paragraph">
              <div class="single-column">
                <span class="padded-line">
                  <span class="degree"></span>
                  <span class="program-line">${element.certificate}</span>
                </span>
                <span class="padded-line txtItalics">
                  <span class="companyname companyname_educ" dependency="SCHO">${
                    element.institute
                  }</span>
                  <span> - </span>
                  <span class="job-location jobcity">${
                    element.Year
                  }${cleanMonth(element.fromMonth)}</span>
                  <span> </span>
                  <span class="job-location jobstate"></span>
                </span>
                <span class="padded-line"><span class="field"></span></span>
              </div>
            </div>`
        )
        .join("");
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml += `
        <div class="heading">
          <span class="headingIcon"></span>
          <span class="section-title">Awards</span>
        </div>`;

      awardsHtml += awards
        .map(
          (element) =>
            `<div class="paragraph first-paragraph">
              <div class="single-column">
                <span class="padded-line">
                  <span class="degree"></span>
                  <span class="program-line">${element.awards}</span>
                </span>
                <span class="padded-line txtItalics">
                  <span class="companyname companyname_educ" dependency="SCHO">${element.institute}</span>
                  <span> - </span>
                  <span class="job-location jobcity">${element.Year}</span>
                  <span> </span>
                  <span class="job-location jobstate"></span>
                </span>
                <span class="padded-line"><span class="field"></span></span>
              </div>
            </div>`
        )
        .join("");
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml += `
        <div class="heading">
          <span class="headingIcon"></span>
          <span class="section-title">Reference</span>
        </div>`;

      referencesHtml += references
        .map(
          (element) =>
            `<div class="paragraph first-paragraph">
              <div class="single-column">
                <span class="padded-line">
                  <span class="degree"></span>
                  <span class="program-line">${element.reference}</span>
                </span>
                <span class="padded-line txtItalics">
                  <span class="companyname companyname_educ" dependency="SCHO">${element.institute}</span>
                  <span> </span>
                </span>
              </div>
            </div>`
        )
        .join("");
    }
    return referencesHtml;
  }

  function renderSkills() {
    let skillsHtml = "";
    if (skills && skills.length > 0) {
      skillsHtml = `
        <div class="heading">
         
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
    if (experience.length > 0) {
      result += `<div class="heading">
      <div class="headingIcon"></div>
      <div class="section-title">Work Experience</div>
    </div>`;
    }

    experience.forEach((element) => {
      result += `<div class="paragraph first-paragraph">
      <span class="dates_wrapper">
        <span class="jobdates" format="%Y-%m">${element.fromYear}${cleanMonth(
        element.fromMonth
      )}</span>
        <span> - </span>
        <span class="jobdates" format="%Y-%m">${element.toYear}${cleanMonth(
        element.toMonth
      )}</span>
      </span>
      <div class="single-column">
        <span class="padded-line mb5">
          <span class="job-title">${element.position}</span>
        </span>
        <span class="padded-line txtItalics mb5">
          <span class="companyname">${element.company}</span><span>, </span>
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
      result += `${roles}</ul></span>
        </span>
      </div>
    </div>
    <br/>`;
    });

    return result;
  }

  function renderEducation() {
    var result = "";
    if (education.length > 0) {
      result += `<div class="heading">
      <div class="headingIcon"></div>
      <div class="section-title">Education</div>
    </div>`;
    }

    education.forEach((element) => {
      result += `<div class="single-column">
        <span class="padded-line">
          <span class="degree"></span><span class="program-line">${
            element.degree
          }</span>
        </span>
        <span class="padded-line txtItalics">
          <span class="companyname companyname_educ" dependency="SCHO">${
            element.university
          }</span><span>, </span>
          <span class="companyname companyname_educ" dependency="SCHO">${
            element?.city ?? []
          }</span>
          <span> - </span>
          <span class="job-location jobcity">${element.fromYear} - ${
        element.toYear
      }</span>
          <span> </span>
          <span class="job-location jobstate"></span>
        </span>
        <span class="padded-line">
          <span class="field"></span>
        </span>
      </div>
      <br/>`;
    });

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
      .genie-mjs7 ol,
      .genie-mjs7 ul {
        list-style: none;
      }
      .genie-mjs7 table {
        border-collapse: collapse;
        border-spacing: 0;
        font-size: inherit;
        color: inherit;
        width: 100%;
      }
      .genie-mjs7 ul,
      .genie-mjs7 li {
        margin: 0;
        padding: 0;
        list-style-type: disc;
      }
      .genie-mjs7 ul li {
        margin: 0 0 0 16px;
        padding: 0;
      }

      .genie-mjs7 {
        box-sizing: border-box;
      }
      .genie-mjs7 .name {
        color: #252932;
        font-size: 15px;
        line-height: 17px;
        font-weight: bold;
        padding: 0;
        text-align: left;
      }
      .genie-mjs7 .paragraph {
        position: relative;
        clear: both;
      }
      .genie-mjs7 .heading {
        clear: both;
        font-weight: bold;
        color: #252932;
        border-bottom: 1px solid #ccc;
      }
      .genie-mjs7 .section-title {
        color: #252932;
        word-wrap: break-word;
        vertical-align: middle;
        display: inline;
      }
      .genie-mjs7 .address {
        position: relative;
        text-align: left;
        font-size: 0.917em;
        line-height: 1.25em;
        margin-top: 0;
      }
      .genie-mjs7 .table_wrapper {
        width: 100%;
        margin-top: 0;
      }
      .genie-mjs7 table.twocol td {
        width: 50%;
      }
      .genie-mjs7 table.skills {
        width: 100%;
      }
      .genie-mjs7 table.skills th,
      .genie-mjs7 table.skills td {
        width: 20%;
        text-align: center;
      }
      .genie-mjs7 table.skills th {
        text-decoration: underline;
      }
      .genie-mjs7 table.skills .skill-name,
      .genie-mjs7 table.skills .skill-rating {
        text-align: left;
        width: 35%;
      }
      .genie-mjs7 table.skills .skill-rating {
        width: 20%;
      }
      .genie-mjs7 table.skills .skill-years,
      .genie-mjs7 table.skills .skill-last {
        width: 19%;
      }
      .genie-mjs7 table.skills .pad1 {
        width: 5%;
      }
      .genie-mjs7 table.skills .pad2,
      .genie-mjs7 table.skills .pad3 {
        width: 1%;
      }
      .genie-mjs7 .mb5 {
        margin-bottom: 5px;
      }
      .genie-mjs7 .resumeTitle {
        text-align: left;
        color: #252932;
        font-weight: 500;
      }
      .genie-mjs7 td.twocol_2 {
        border-left: 1px solid #fefdfd;
      }
      .genie-mjs7 .addressright,
      .genie-mjs7 .addressleft {
        display: table-cell;
        width: 40%;
      }

      .genie-mjs7 span.padded-line {
        display: block;
      }
      .genie-mjs7 .txtRight {
        text-align: right;
        clear: both;
      }
      .genie-mjs7 span.job-title,
      .genie-mjs7 span.degree,
      .genie-mjs7 span.program-line {
        font-weight: bold;
      }
      .genie-mjs7 span.dates_wrapper {
        font-weight: bold;
        display: block;
        float: left;
        text-align: left;
        padding-right: 10px;
      }
      .genie-mjs7 .txtItalics {
        font-style: italic;
      }

      .genie-mjs7 .iconRow {
        clear: both;
        padding-bottom: 7px;
        word-wrap: break-word;
      }
      .genie-mjs7 .iconRow .iconSvg {
        width: 20px;
        height: 20px;
        float: left;
        margin-right: 5px;
      }
      .genie-mjs7 .iconRow .icoTxt {
        margin-left: 25px;
      }

      .genie-mjs7 .headingIcon {
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
      }
      .genie-mjs7 .headingIcon svg {
        height: 30px;
        width: 30px;
        display: block;
      }

      .genie-mjs7 .iconRow svg rect,
      .genie-mjs7 .headingIcon svg rect {
        fill: #252932;
      }
      .genie-mjs7 .iconRow svg path,
      .genie-mjs7 .headingIcon svg path {
        fill: #fff;
      }

      .genie-mjs7 .ratingWrapper {
        float: right;
        text-align: right;
        height: 10px;
        padding: 3px 0;
      }
      .genie-mjs7 .rtngSec .txtRight {
        position: relative;
        top: -3px;
      }
      .genie-mjs7 .ratingWrapper svg {
        height: 13px;
      }
      .genie-mjs7 .ratingWrapper .default-fill {
        fill: #252932;
      }

      .genie-mjs7,
      .genie-mjs7 table {
        line-height: 16px;
      }
      .genie-mjs7.pagesize {         width: 792px;
      }
      .genie-mjs7.fontsize {
        font-size: 11px;
      }
      .genie-mjs7.font-face {
        font-family: "Century Gothic", Helvetica, sans-serif;
      }
      .genie-mjs7.vmargins {
        padding-top: 24px;
        padding-bottom: 24px;
      }
      .genie-mjs7.hmargins {
        padding-left: 24px;
        padding-right: 24px;
      }
      .genie-mjs7 .section {
        padding-top: 20px;
      }
      .genie-mjs7 .address {
        font-size: 11px;
        line-height: 21px;
        padding-top: 15px;
      }
      .genie-mjs7 .heading {
        margin-bottom: 10px;
      }
      .genie-mjs7 .job-title,
      .genie-mjs7 span.degree,
      .genie-mjs7 span.program-line {
        font-size: 14px;
      }
      .genie-mjs7 .paragraph {
        padding-top: 10px;
      }
      .genie-mjs7 .rtngSec .paragraph {
        padding-top: 5px;
      }
      .genie-mjs7 .first-section,
      .genie-mjs7 .first-paragraph,
      .genie-mjs7 .SECTION_CNTC {
        padding-top: 0 !important;
      }
      .genie-mjs7 .single-column,
      .genie-mjs7 .main-column {
        margin-left: 120px;
      }
      .genie-mjs7 .section-title,
      .genie-mjs7 .resumeTitle {
        font-size: 18px;
        line-height: 21px;
      }
      .genie-mjs7 .name {
        font-size: 36px;
        line-height: 46px;
      }
      .genie-mjs7 table.skills td {
        padding-top: 5px;
      }
      .genie-mjs7 .noPind {
        margin-left: 0;
      }
      .genie-mjs7 .name,
      .genie-mjs7 .section-title,
      .genie-mjs7 .resumeTitle {
        color: #252932;
      }
      .genie-mjs7 span.dates_wrapper {
        width: 110px;
        font-size: 11px;
        line-height: 17px;
      }

      .genie-mjs7 .iconRow svg rect,
      .genie-mjs7 .headingIcon svg rect {
        fill: #252932;
      }
      .genie-mjs7 .ratingfield p {
        display: inline;
      }

      .genie-mjs7 .sortable-item .section-title,
      body.GAK7 .parent-drag.active.genie-mjs7 .section-title {
        display: inline;
      }
      .genie-mjs7 .sortableInner .sortable-item.active .wrapper-bg + div,
      body.GAK7
        .genie-mjs7
        ._single-parent-drag.active.genie-mjs7
        .wrapper-bg
        + div {
        position: relative;
        z-index: 11;
      }
      .genie-mjs7 .sortable-item .single-column span:first-child,
      body.GAK7
        ._single-parent-drag.active.genie-mjs7
        .single-column
        span:first-child {
        display: inline-block;
      }
      .genie-mjs7 .ratingWrapper .default-fill {
        fill: #252932;
      }
    </style>
  </head>
  <body>
    <section class="page-wrap">
      <div class="genie-mjs7 fontsize font-face vmargins hmargins pagesize">
        <div class="top-section">
          <div class="left-box">
            <div class="section notdraggable first-section">
              <div class="paragraph first-paragraph">
                <div class="name">
                  <span class="field">${personDetail.firstName}${" "}${
    personDetail.lastName
  }</span>
                </div>
                <div class="resumeTitle">${jobPosition}</div>
              </div>
            </div>
            <div class="section SECTION_CNTC notdraggable">
              <div class="paragraph PARAGRAPH_CNTC first-paragraph">
                <div class="address">
                  <div class="addressleft">
                    <div class="iconRow">
                      <div class="iconSvg"></div>
                      <div class="icoTxt">
                        
                        <span class="field">${personDetail.city}</span
                        ><span>, </span><span class="field">${
                          personDetail.country
                        }</span>
                      </div>
                    </div>
                    <div class="iconRow">
                      <div class="iconSvg"></div>
                      <div class="icoTxt">
                        <span class="field">${personDetail.phone}</span
                        ><span class="field"></span>
                      </div>
                    </div>
                    <div class="iconRow">
                      <div class="iconSvg"></div>
                      <div class="icoTxt">
                        <span class="field">${personDetail.email}</span>
                      </div>
                    </div>
                  </div>
                  <div class="addressright"></div>
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
