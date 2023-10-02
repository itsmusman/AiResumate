export function template25(resume) {
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
      <div class="section">
<div class="heading">
  <div class="headingIcon"></div>
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
          </div> `;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
      <div class="section">
<div class="heading">
  <div class="headingIcon"></div>
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
      <div class="section">
<div class="heading">
  <div class="headingIcon"></div>
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
    if (experience.length > 0) {
      result += `<div class="heading">
        <div class="headingIcon"></div>
        <div class="section-title">Work History</div>
      </div>`;
      experience.forEach((element) => {
        result += ` <div class="paragraph first-paragraph">
          <span class="dates_wrapper"
            ><span class="jobdates" format="%b %Y">${
              element.fromYear
            }${cleanMonth(element.fromMonth)}</span
            ><span> - </span
            ><span class="jobdates" format="%b %Y">${
              element.toYear
            }${cleanMonth(element.toMonth)}</span></span
          >
          <div class="single-column">
            <span class="padded-line pb5"
              ><span class="job-title">${element.position}</span
              ></span
            ><span class="padded-line txtItalics pb5"
              ><span class="companyname">${element.company}</span><span>, </span
              ><span class="job-location jobcity">${
                element?.city ?? []
              }</span></span
            ><span class="padded-line"
              ><span class="jobline"
                ><ul>`;

        var roles = "";
        (element?.roles ?? []).forEach((role) => {
          roles += `<li>${role}</li>`;
        });
        result += `${roles}</ul></span>
            </span> 
            </div>
            </div><br/>`;
      });
    }
    return result;
  }

  function renderEducation() {
    var result = "";
    if (education.length > 0) {
      result += `<div class="heading">
                    <div class="headingIcon"></div>
                    <div class="section-title">Education</div>
                  </div>`;
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
              <span>, </span>
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
          </div><br/>`;
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
      .genie-ak6 ol,
      .genie-ak6 ul {
        list-style: none;
      }
      .genie-ak6 table {
        border-collapse: collapse;
        border-spacing: 0;
        font-size: inherit;
        color: inherit;
        width: 100%;
      }

      .genie-ak6 ul,
      .genie-ak6 li {
        margin: 0;
        padding: 0;
        list-style-type: disc;
      }
      .genie-ak6 ul li {
        margin: 0 0 0 16px;
        padding: 0;
      }

      .genie-ak6 .txtBold {
        font-weight: bold;
      }
      .genie-ak6 .padded-line {
        display: block;
      }
      .genie-ak6 .pt5 {
        padding-top: 5px;
      }
      .genie-ak6 .pb5 {
        padding-bottom: 5px;
      }
      .genie-ak6 .word-break {
        word-wrap: break-word;
      }
      .genie-ak6 .disp-n {
        display: none;
      } 
      .genie-ak6 table.skills,
      .genie-ak6 .table_wrapper {
        width: 100%;
        margin-top: 0;
        word-wrap: break-word;
      }
      .genie-ak6 table.skills th,
      table.skills td {
        width: 20%;
        text-align: center;
      }
      .genie-ak6 table.skills .skill-name,
      .genie-ak6 table.skills .skill-rating {
        text-align: left;
        width: 35%;
      }
      .genie-ak6 table.skills .skill-rating {
        width: 20%;
      }
      .genie-ak6 table.skills .skill-years,
      .genie-ak6 table.skills .skill-last {
        width: 19%;
      }
      .genie-ak6 table.skills .pad1 {
        width: 5%;
      }
      .genie-ak6 .skills .pad2,
      .genie-ak6 table.skills .pad3 {
        width: 1%;
      }

      .genie-ak6 {
        box-sizing: border-box;
        padding: 20px 20px 20px 0;
        border-left: 85px solid transparent !important;
        color: #343434;
        font-variant-ligatures: none;
        line-height: 16px;
        min-height: 1024px;
      }
      .genie-ak6 .name {
        color: #373d48;
        font-weight: 700;
        overflow: hidden;
        text-align: left;
        display: table-cell;
        min-height: 86px;
        padding-bottom: 10px;
      }
      .genie-ak6 .address .single-column {
        margin-left: 0 !important;
      }
      .genie-ak6 .degreeGap {
        margin-bottom: 4px;
      }
      .genie-ak6 .locationGap {
        margin-top: 4px;
      }
      .genie-ak6 .heading {
        font-weight: 700;
        margin-bottom: 10px;
        position: relative;
      }
      .genie-ak6 .section-title {
        color: #373d48;
        line-height: 21px;
        word-wrap: break-word;
      }
      .genie-ak6 .first-paragraph {
        padding-top: 0 !important;
      }
      .genie-ak6 .parentContainer {
        border-collapse: collapse;
        display: table;
        min-height: inherit;
        table-layout: fixed;
        width: 100%;
      }

      .genie-ak6 .monogram {
        position: absolute;
        left: -103px;
        top: 0;
        bottom: 0;
      }
      .genie-ak6 .monogram svg text {
        font-size: 28px;
        font-style: italic;
        font-weight: 400;
        text-transform: lowercase;
      }

      .genie-ak6 .left-box,
      .genie-ak6 .right-box {
        box-sizing: initial;
        display: table-cell;
        padding-left: 15px;
        vertical-align: top;
      }
      .genie-ak6 .left-box .first-section {
        margin: 0;
        padding: 0;
        min-height: 101px;
      }
      .genie-ak6 .left-box .padded-line.date-content {
        position: absolute;
        margin-left: 0;
        width: 65px;
        left: -97px;
      }
      .genie-ak6 .paragraph,
      .genie-ak6 .left-box .single-column {
        position: relative;
      }
      .genie-ak6 .left-box .paragraph {
        margin-left: 0;
      }
      .genie-ak6 .section:empty {
        display: none;
      }
      .genie-ak6 .left-box .section {
        border-left: 1px solid #d7d7d7;
        margin-left: 12px;
        padding-left: 25px;
        position: relative;
      }
      .genie-ak6 .left-box {
        padding-left: 0;
        padding-right: 15px;
      }
      .genie-ak6 .left-box > .section:first-child {
        border: 0;
      }

      .genie-ak6 .first-section + .section:before {
        border: 1px solid #fff;
        content: "";
        left: -1px;
        position: absolute;
        top: 0;
      }
      .genie-ak6 .left-box .single-column:before {
        background: #373d48;
        border: 0;
        border-radius: 100%;
        content: "";
        display: block;
        height: 8px;
        left: -29px;
        position: absolute;
        width: 8px;
        z-index: 2;
      }
      .genie-ak6 .right-box .section-title {
        padding-left: 35px;
      }
      .genie-ak6 .headingIcon svg circle,
      .genie-ak6 .monogram svg circle {
        fill: #373d48;
      }

      .genie-ak6 .headingIcon svg {
        width: 30px;
        height: 30px;
      }
      .genie-ak6 .headingIcon {
        z-index: 4;
      }
      .genie-ak6 .left-box .headingIcon {
        left: -40px;
        position: absolute;
      }
      .genie-ak6 .right-box .headingIcon {
        left: 0;
        position: absolute;
      }
      .genie-ak6 .headingIcon svg path {
        fill: #fff;
      }
      .genie-ak6 .ratingWrapper {
        text-align: right;
      }
      .genie-ak6 .ratingWrapper .noLnht {
        line-height: 0;
      }
      .genie-ak6 .ratingWrapper svg {
        height: 13px;
      }

      #displayResume div .genie-ak6 {
        min-height: 1024px;
      }
      .genie-ak6 > div {
        min-height: inherit;
      }
      .genie-ak6 > div:not(.top-section),
      .genie-ak6 > div:not(.parentContainer) {
        min-height: auto;
      }
      .genie-ak6 .right-box > .sortable-item:first-child .section {
        padding-top: 10px !important;
      }
      .genie-ak6
        .SortableInner
        > .sortable-item:last-of-type
        .single-column
        > .pb5 {
        margin-bottom: 0;
      }
      .genie-ak6 .left-box > .sortable-item:first-child .section,
      .genie-ak6 .right-box > .sortable-item:first-child .section {
        padding-top: 0;
      }
      .genie-ak6 .left-box .sortable-item:first-child > .section {
        border: 0;
      }
      .genie-ak6
        .left-box
        .sortable-item:first-child
        + .sortable-item
        > .section {
        padding-top: 0 !important;
      }
      .genie-ak6 .ratingWrapper .default-fill {
        fill: #373d48;
      }
      .genie-ak6 .sortable-item .ratingWrapper span {
        top: 0;
        line-height: inherit;
      }
      .finalize-resume-preview.GJS6 > .genie-ak6 {
        border: 1px solid #e3e7e9 !important;
      }
      .finalize-resume-preview.GJS6 > .genie-ak6 .left-box {
        padding-left: 85px;
      }

      .genie-ak6 .resumeTitle {
        font-weight: normal;
      }

      .genie-ak6,
      .genie-ak6 table {
        line-height: 18px;
      }
      .genie-ak6.font-face {
        font-family: "Century Gothic", Helvetica, sans-serif;
      }
      .genie-ak6.fontsize {
        font-size: 11px;
      }
      .genie-ak6.pagesize {         width: 792px;
      }
      .genie-ak6 .section {
        padding-top: 15px;
      }
      .genie-ak6 .left-box .section:after {
        padding-bottom: 10px;
      }
      .genie-ak6 .paragraph {
        padding-bottom: 15px;
      }
      .genie-ak6 .rtngSec .paragraph {
        padding-bottom: 5px;
      }
      .genie-ak6 .single-column,
      .genie-ak6 .main-column {
        word-wrap: break-word;
      }
      .genie-ak6 left-box .single-column,
      .genie-ak6 left-box .main-column {
        margin-left: 0px;
      }
      .genie-ak6 table.skills td {
        padding-top: 2.5px;
      }
      .genie-ak6 .job-title,
      .genie-ak6 .degree,
      .genie-ak6 .program-line {
        font-size: 14px;
      }
      .genie-ak6 .name {
        color: #373d48;
        font-size: 36px;
        line-height: 42.5px;
      }
      .genie-ak6 .monogram svg circle {
        fill: #373d48;
      }
      .genie-ak6 .section-title,
      .genie-ak6 .resumeTitle {
        font-size: 18px;
        line-height: 23px;
      }
      .genie-ak6 .section-title {
        color: #373d48;
      }
      .genie-ak6 .right-box {
        width: 155px;
      }
      .genie-ak6 .first-section + .section:before {
        height: -3.5px;
      }
      .genie-ak6 .left-box .heading ~ .paragraph .date-content:before {
        background: #373d48;
      }
      .genie-ak6 .left-box .single-column:before {
        background: #373d48;
        top: 5.5px;
      }
      .genie-ak6 .left-box .padded-line.date-content {
        line-height: 19px;
      }
      .genie-ak6 .left-box .section.notdraggable + .section {
        padding-top: 0px;
      }

      .genie-ak6 .headingIcon svg circle {
        fill: #373d48;
      }
      .genie-ak6 .headingIcon {
        top: -3.5px;
      }

      .genie-ak6
        .sortableInner
        .sortable-item.active
        > .wrapper-bg
        + div[data-section] {
        position: relative;
        z-index: 8;
      }
      .parent-drag.active.genie-ak6,
      ._single-parent-drag.active.genie-ak6 {
        border: 0 !important;
      }
      .genie-ak6 .ratingWrapper .default-fill {
        fill: #373d48;
      }

      .genie-ak6.active .wrapper-bg {
        left: -62px !important;
        right: -62px !important;
      }
      .genie-ak6.active .acrs-bdr {
        left: -60px !important;
      }
      .genie-ak6.active .acr-edit,
      .genie-ak6.active .acr-delete {
        left: -59px !important;
      }
      .genie-ak6.active .acr-move {
        right: -59px !important;
      }
    </style>
  </head>
  <body>
    <section class="page-wrap">
      <div class="genie-ak6 fontsize font-face vmargins hmargins pagesize">
        <div class="parentContainer">
          <div class="left-box last-box">
            <div class="section notdraggable first-section">
              <div class="paragraph first-paragraph">
                <div class="monogram show-monogram"></div>
                <div class="name">
                  <div class="flname txtBold word-break">
                    <span class="field"></span><span class="field">${
                      personDetail.firstName
                    }${" "}${personDetail.lastName}</span>
                    <div class="resumeTitle">${jobPosition}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section summary notdraggable">
              <div class="heading">
                <div class="headingIcon"></div>
                <div class="section-title">Professional Summary</div>
              </div>
              <div class="paragraph first-paragraph">
                <div class="field single-column noPind">
                  <p>
                   ${userSummary}
                  </p>
                </div>
              </div>
            </div>
            <div class="section">
              
              ${renderExperience()}
              
            </div>
            <div class="section">
             
              ${renderEducation()}
            </div>

            ${renderCertificate() ?? []}
            ${renderAwards() ?? []}
            ${renderReferences() ?? []}
            
          </div>
          <div class="right-box last-box">
            <div class="section SECTION_CNTC notdraggable">
              <div class="heading">
                <div class="headingIcon"></div>
                <div class="section-title">Contact</div>
              </div>
              <div class="paragraph PARAGRAPH_CNTC first-paragraph">
                <div class="address">
                  <div class="single-column">
                    <div>
                      <div class="txtBold">Address</div>
                      <div class="field"></div>
                      <span></span><span class="field">${
                        personDetail.city
                      }</span
                      ><span>, </span><span class="field">${
                        personDetail.country
                      }</span>
                    </div>
                    <div class="txtBold pt5">Phone</div>
                    <div>
                      <span class="field">${personDetail.phone}</span>
                    </div>
                    <div class="txtBold pt5">E-mail</div>
                    <div class="word-break">
                      <span class="field">${personDetail.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section rtngSec">
             
                     ${renderSkills()}
                   
                      ${renderHobbies()}
                  
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>`;
}
