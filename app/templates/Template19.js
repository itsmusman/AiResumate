export function template19(resume) {
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
      <div class="section-title">Certification</div>
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
          `;
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
          `;
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
          `;
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
      <div class="section-title">Work Experience</div>
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
        `;
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
        result += `<div class="single-column">
          <span class="padded-line">
            <span class="degree"></span>
            <span class="program-line">${element.degree}</span>
          </span>
          <span class="padded-line txtItalics">
            <span class="companyname companyname_educ" dependency="SCHO">${
              element.university
            }</span>
            <span> ${element?.city ?? []}</span>
            <span> - </span>
            <span class="statesWrapper"> - </span>
            <span class="job-location jobcity">${element.fromYear}${cleanMonth(
          element.fromMonth
        )} - ${element.toYear}${cleanMonth(element.toMonth)}</span>
            <span class="job-location jobstate"></span>
          </span>
          <span class="padded-line"><span class="field"></span></span>
        </div>`;
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
      .genie-mjs9 ol,
      .genie-mjs9 ul {
        list-style: none;
      }
      .genie-mjs9 table {
        border-collapse: collapse;
        border-spacing: 0;
        font-size: inherit;
        color: inherit;
        width: 100%;
      }
      .genie-mjs9 ul,
      .genie-mjs9 li {
        margin: 0;
        padding: 0;
        list-style-type: disc;
      }
      .genie-mjs9 ul li {
        margin: 0 0 0 16px;
        padding: 0;
      }
      .genie-mjs9 .txtBold {
        font-weight: bold;
      }
      .genie-mjs9 .padded-line {
        display: block;
      }
      .genie-mjs9 .word-break {
        word-wrap: break-word;
      }
      .genie-mjs9 table.skills,
      .genie-mjs9 .table_wrapper {
        width: 100%;
        margin-top: 0;
        word-wrap: break-word;
      }
      .genie-mjs9 table.skills th,
      .genie-mjs9 table.skills td {
        width: 20%;
        text-align: center;
      }
      .genie-mjs9 table.skills .skill-name,
      .genie-mjs9 table.skills .skill-rating {
        text-align: left;
        width: 35%;
      }
      .genie-mjs9 table.skills .skill-rating {
        width: 20%;
      }
      .genie-mjs9 table.skills .skill-years,
      .genie-mjs9 table.skills .skill-last {
        width: 19%;
      }
      .genie-mjs9 table.skills .pad1 {
        width: 5%;
      }
      .genie-mjs9 .skills .pad2,
      .genie-mjs9 table.skills .pad3 {
        width: 1%;
      }

      .genie-mjs9 {
        box-sizing: border-box;
        color: #343434;
        font-variant-ligatures: none;
        line-height: 16px;
        min-height: 1024px;
      }
      .genie-mjs9 .name {
        display: table;
        width: 100%;
        color: #002e58;
        font-weight: 700;
        overflow: hidden;
        padding: 0;
        text-align: left;
        word-wrap: break-word;
      }
      .genie-mjs9 .flname {
        font-weight: 400;
        vertical-align: top;
      }
      .genie-mjs9 .address .single-column {
        margin-left: 0 !important;
      }
      .genie-mjs9 .heading {
        font-weight: 700;
        line-height: 15px;
        margin-bottom: 10px;
        padding-left: 15px;
        position: relative;
      }
      .genie-mjs9 .heading:before {
        background: #002e58;
        border-radius: 50%;
        content: "";
        height: 5px;
        left: 1px;
        position: absolute;
        top: 8px;
        width: 5px;
      }
      .genie-mjs9 .section-title {
        color: #002e58;
        word-wrap: break-word;
      }
      .genie-mjs9 .degreeGap {
        margin-bottom: 4px;
      }
      .genie-mjs9 .locationGap {
        margin-top: 4px;
      }
      .genie-mjs9 .first-paragraph {
        margin-top: 0 !important;
      }
      .genie-mjs9 .section:empty {
        display: none;
      }
      .genie-mjs9 .right-box {
        position: relative;
      }
      .genie-mjs9 .monogram,
      .genie-mjs9 .flname {
        display: table-cell;
      }
      .genie-mjs9 .monogram {
        width: 92px;
        min-height: 92px;
        vertical-align: top;
      }
      .genie-mjs9 .flname {
        padding-left: 20px;
      }
      .genie-mjs9 .monogram svg text {
        font-size: 28px;
        font-style: italic;
        font-weight: 400;
        text-transform: lowercase;
      }

      .genie-mjs9 .parentContainer {
        border-collapse: collapse;
        display: table;
        min-height: inherit;
        table-layout: fixed;
        width: 100%;
      }
      .genie-mjs9 .left-box,
      .genie-mjs9 .right-box {
        padding-left: 15px;
        vertical-align: top;
        display: table-cell;
      }
      .genie-mjs9 .left-box {
        box-sizing: initial;
        letter-spacing: 0.2px;
        padding-left: 0;
        padding-right: 15px;
      }
      .genie-mjs9 .right-box .section:first-child,
      .genie-mjs9 .left-box .section:first-child,
      .genie-mjs9 .summary {
        padding-top: 0;
      }
      .genie-mjs9 .right-box .padded-line.date-content {
        position: absolute;
        margin-left: 0;
        width: 65px;
      }
      .genie-mjs9 .paragraph {
        position: relative;
      }
      .genie-mjs9 .right-box .experience .paragraph,
      .genie-mjs9 .right-box .summary .paragraph {
        margin-left: 0;
      }
      .genie-mjs9 .summary .single-column {
        margin-left: 0 !important;
      }
      .genie-mjs9 > div:not(.top-section),
      .genie-mjs9 > div:not(.parentContainer) {
        min-height: auto;
      }
      .genie-mjs9 .resumeTitle {
        color: #002e58;
        font-weight: 500;
      }
      #displayResume .genie-mjs9 {
        min-height: 1024px;
      }
      .genie-mjs9 > div {
        min-height: inherit;
      }
      .genie-mjs9 .left-box .sortable-item .notdraggable,
      .genie-mjs9 .right-box .sortable-item .notdraggable {
        padding-top: 0px;
      }
      .genie-mjs9 .right-box .sortable-item .summary {
        padding-top: 20px;
      }
      .genie-mjs9 .sortable-item .name {
        padding-bottom: 0;
      }
      .genie-mjs9 .ratingWrapper .default-fill {
        fill: #002e58;
      }
      .genie-mjs9 .sortable-item .ratingWrapper span {
        top: 0;
      }
      .genie-mjs9 .iconRow {
        clear: both;
        padding-bottom: 7px;
        word-wrap: break-word;
      }
      .genie-mjs9 .iconRow .iconSvg {
        width: 20px;
        height: 20px;
        float: left;
        margin-right: 5px;
      }
      .genie-mjs9 .iconRow .iconSvg svg:first-child {
        width: 20px;
        height: 20px;
      }
      .genie-mjs9 .iconRow svg circle {
        fill: #002e58;
      }
      .genie-mjs9 .iconRow svg path {
        fill: #fff;
      }
      .genie-mjs9 .iconRow .icoTxt {
        margin-left: 25px;
      }
      .genie-mjs9 .ratingWrapper {
        text-align: right;
      }
      .genie-mjs9 .ratingWrapper .noLnht {
        line-height: 0;
      }
      .genie-mjs9 .ratingWrapper svg {
        height: 13px;
      }
      .genie-mjs9 .right-box .hide-dates {
        visibility: hidden;
        position: static !important;
        display: block;
        float: left;
      }
      .genie-mjs9 .left-box .hide-dates {
        display: none;
      }
      .genie-mjs9 .paragraph.dates-para:after {
        content: "";
        display: table;
        clear: both;
      }
      .genie-mjs9,
      .genie-mjs9 table {
        line-height: 18px;
      }
      .genie-mjs9.pagesize {         width: 792px;
      }
      .genie-mjs9.font-face {
        font-family: "Century Gothic", Helvetica, sans-serif;
      }
      .genie-mjs9.fontsize {
        font-size: 11px;
      }
      .genie-mjs9.vmargins {
        padding-top: 22px;
        padding-bottom: 22px;
      }
      .genie-mjs9.hmargins {
        padding-left: 22px;
        padding-right: 22px;
      }
      .genie-mjs9 .section {
        padding-top: 20px;
      }
      .genie-mjs9 .left-box .section:after {
        padding-bottom: 10px;
      }
      .genie-mjs9 .paragraph {
        margin-top: 10px;
      }
      .genie-mjs9 .single-column,
      .genie-mjs9 .main-column {
        word-break: break-word;
      }
      .genie-mjs9 .right-box .single-column,
      .genie-mjs9 .right-box .main-column {
        margin-left: 0px;
      }
      .genie-mjs9 table.skills td {
        padding-top: 5px;
      }
      .genie-mjs9 .job-title,
      .genie-mjs9 .degree,
      .genie-mjs9 .program-line {
        font-size: 14px;
      }
      .genie-mjs9 .name {
        color: #002e58;
        font-size: 36px;
        line-height: 43px;
      }
      .genie-mjs9 .monogram svg circle,
      .genie-mjs9 .iconRow svg circle {
        fill: #002e58;
      }
      .genie-mjs9 .heading {
        line-height: 22px;
      }
      .genie-mjs9 .section-title,
      .genie-mjs9 .resumeTitle,
      .genie-mjs9 .heading:before {
        font-size: 16px;
        color: #002e58;
      }
      .genie-mjs9 .resumeTitle {
        line-height: 22px;
      }
      .genie-mjs9 .heading:before {
        background: #002e58;
        top: 9px;
      }
      .genie-mjs9 .left-box {
        width: 165px;
      }
      .genie-mjs9 .right-box .paragraph .single-column {
        margin-left: 91px;
      }
      .genie-mjs9 .iconRow .iconSvg {
        padding-top: -2px;
      }

      .genie-mjs9 .left-box .sortable-item .section,
      .genie-mjs9 .right-box .sortable-item .section {
        padding-top: 20px;
      }
      .genie-mjs9 .ratingWrapper .default-fill {
        fill: #002e58;
      }
      .genie-mjs9.active .wrapper-bg {
        left: -62px !important;
        right: -62px !important;
      }
      .genie-mjs9.active .acrs-bdr {
        left: -60px !important;
      }
      .genie-mjs9.active .acr-edit,
      .genie-mjs9.active .acr-delete {
        left: -59px !important;
      }
      .genie-mjs9.active .acr-move {
        right: -59px !important;
      }
    </style>
  </head>
  <body>
    <section class="page-wrap">
      <div class="genie-mjs9 fontsize font-face vmargins hmargins pagesize">
        <div class="parentContainer">
          <div class="left-box last-box">
            <div class="section SECTION_CNTC notdraggable">
              <div class="heading">
                <div class="section-title">Contact</div>
              </div>
              <div class="paragraph PARAGRAPH_CNTC first-paragraph">
                <div class="address">
                  <div class="single-column">
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
                </div>
              </div>
            </div>
            <div class="section">
             
                     ${renderSkills()}
                   <br/>
                      ${renderHobbies()}
                   
              
            </div>
            
          </div>
          <div class="right-box last-box">
            <div class="section nameSec notdraggable first-section">
              <div class="paragraph first-paragraph">
                <div class="name word-break">
                  <div class="monogram show-monogram"></div>
                  <div class="flname">
                   <span class="field word-break txtBold">${
                     personDetail.firstName
                   }${" "}${personDetail.lastName}</span>
                    <div class="resumeTitle">${jobPosition}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section summary notdraggable">
              <div class="paragraph first-paragraph">
                <div class="field single-column">
                ${userSummary}
                </div>
              </div>
            </div>
            <div class="section experience">
             
              ${renderExperience()}
              
            </div>
            <div class="section education">
              
              ${renderEducation()}
            </div>
            <div class="section education">
              ${renderCertificate() ?? []}
              ${renderAwards() ?? []}
          
            </div>
            <div >
             
            ${renderReferences() ?? []}
            </div>

          </div>
        </div>
      </div>
    </section>
  </body>
</html>`;
}
