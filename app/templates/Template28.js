export function template28(resume) {
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
      <div class="section education">
<div class="heading">
  <span class="headingIcon"></span
  ><span class="section-title">Certificate</span>
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
      <div class="section education">
<div class="heading">
  <span class="headingIcon"></span
  ><span class="section-title">Awards</span>
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
      <div class="section education">
<div class="heading">
  <span class="headingIcon"></span
  ><span class="section-title">Reference</span>
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
        <div class="section skills">
          <div class="heading">
            <div class="section-title">Skills</div>
          </div>
          <div class="paragraph first-paragraph">
            <span class="program-line">${skills
              .map((element) => element.name)
              .join(", ")}</span>
          </div>
        </div>
      `;
    }
    return skillsHtml;
  }

  function renderHobbies() {
    let hobbyHtml = "";
    if (hobbies && hobbies.length > 0) {
      hobbyHtml = `
        <div class="section skills">
          <div class="heading">
            <div class="section-title">Hobbies</div>
          </div>
          <div class="paragraph first-paragraph">
            <span class="program-line">${hobbies
              .map((element) => element.name)
              .join(", ")}</span>
          </div>
        </div>
      `;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";

    if (experience.length > 0) {
      result += `<div class="heading">
                    <span class="headingIcon"></span>
                    <span class="section-title">Work History</span>
                  </div>`;
    }

    experience.forEach((element) => {
      result += `<div class="paragraph first-paragraph">
                    <span class="dates_wrapper">
                      <span class="jobdates" format="%b %Y">${
                        element.fromYear
                      }${cleanMonth(element.fromMonth)}</span
                      ><span> - </span
                      ><span class="jobdates" format="%b %Y">${
                        element.toYear
                      }${cleanMonth(element.toMonth)}</span>
                    </span>
                    <div class="single-column">
                      <span class="padded-line pb5">
                        <span class="job-title">${element.position}</span>
                      </span>
                      <span class="padded-line txtItalics pb5">
                        <span class="companyname">${element.company}</span>
                        <span>, </span
                        ><span class="job-location jobcity">${
                          element?.city ?? []
                        }</span>
                        <span></span
                        ><span class="job-location jobstate"></span>
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
                  </div>`;
    });

    return result;
  }

  function renderEducation() {
    var result = "";

    if (education.length > 0) {
      result += `<div class="heading">
                    <span class="headingIcon"></span>
                    <span class="section-title">Education</span>
                  </div>`;
    }

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
          </div>`;
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
      .genie-ak9 ol,
      .genie-ak9 ul {
        list-style: none;
      }
      .genie-ak9 table {
        border-collapse: collapse;
        border-spacing: 0;
        font-size: inherit;
        color: inherit;
        width: 100%;
      }

      .genie-ak9 ul,
      .genie-ak9 li {
        margin: 0;
        padding: 0;
        list-style-type: disc;
      }
      .genie-ak9 ul li {
        margin: 0 0 0 16px;
        padding: 0;
      }

      .genie-ak9 {
        color: #343434;
        line-height: 16px;
        font-variant-ligatures: none;
        min-height: 1024px;
        box-sizing: border-box;
      }
      .genie-ak9 .name {
        color: #002e58;
        font-weight: bold;
        padding: 0px;
        text-align: left;
        position: relative;
        word-wrap: break-word;
      }
      .genie-ak9 .address .single-column {
        margin-left: 0 !important;
      }
      .genie-ak9 table.skills,
      .genie-ak9 .table_wrapper {
        width: 100%;
        margin-top: 0;
        word-wrap: break-word;
      }
      .genie-ak9 table.skills th,
      .genie-ak9 table.skills td {
        width: 20%;
        text-align: center;
      }
      .genie-ak9 table.skills .skill-name,
      .genie-ak9 table.skills .skill-rating {
        text-align: left;
        width: 35%;
      }
      .genie-ak9 table.skills .skill-rating {
        width: 20%;
      }
      .genie-ak9 table.skills .skill-years,
      .genie-ak9 table.skills .skill-last {
        width: 19%;
      }
      .genie-ak9 table.skills .pad1 {
        width: 5%;
      }
      .genie-ak9 .skills .pad2,
      .genie-ak9 table.skills .pad3 {
        width: 1%;
      }
      .genie-ak9 .txtBold {
        font-weight: bold;
      }
      .genie-ak9 .txtItl {
        font-style: italic;
      }
      .genie-ak9 .padded-line {
        display: block;
      }
      .genie-ak9 .txtRight {
        text-align: right;
      }
      .genie-ak9 .mt5 {
        margin-top: 5px;
      }
      .genie-ak9 .word-break {
        word-wrap: break-word;
      }
      .genie-ak9 .resumeTitle {
        color: #002e58;
        font-weight: 500;
        padding-top: 10pt !important;
      }
      .genie-ak9 .summary {
        padding-top: 10px !important;
      }

      .genie-ak9 .heading {
        border-bottom: 1px solid #d5d6d6;
        padding: 0 0 4px;
        letter-spacing: 0;
        font-weight: bold;
        line-height: 14px;
        margin-bottom: 10px;
      }
      .genie-ak9 .section-title {
        color: #002e58;
        word-wrap: break-word;
        padding-left: 5px;
      }
      .genie-ak9 .first-paragraph {
        margin-top: 0 !important;
      }

      .genie-ak9 .first-section {
        padding-top: 0 !important;
      }
      .genie-ak9 .section:empty {
        display: none;
      }
      .genie-ak9 .education .job-location {
        font-style: italic;
      }
      .genie-ak9 .degreeGap {
        margin-bottom: 4px;
      }
      .genie-ak9 .locationGap {
        margin-top: 4px;
      }

      .genie-ak9 .parentContainer {
        display: table;
        width: 100%;
        min-height: inherit;
        table-layout: fixed;
        border-collapse: collapse;
      }
      .genie-ak9 .right-box,
      .genie-ak9 .left-box {
        padding-top: 20px;
        padding-right: 15px;
      }
      .genie-ak9 .right-box {
        box-sizing: initial;
        display: table-cell;
        letter-spacing: 0.2px;
        padding-left: 15px;
        padding-right: 0;
      }
      .genie-ak9 .left-box .section:first-child,
      .genie-ak9 .right-box .section:first-child {
        padding-top: 0px !important;
      }
      .genie-ak9 .left-box .padded-line.date-content {
        position: absolute;
        font-weight: 600;
        margin-left: 0;
        width: 65px;
      }
      .genie-ak9 .paragraph .single-column {
        position: relative;
      }
      .genie-ak9 .summary .single-column {
        margin-left: 0;
      }
      .genie-ak9 .left-box {
        display: table-cell;
        letter-spacing: 0.2px;
      }

      .genie-ak9 .headingIcon {
        position: relative;
        top: 9px;
      }
      .genie-ak9 .headingIcon svg {
        height: 30px;
        width: 30px;
      }
      .genie-ak9 .headingIcon svg rect {
        fill: #002e58;
      }
      .genie-ak9 .headingIcon svg path {
        fill: #fff;
      }

      .genie-ak9 .ratingBar {
        background: #d5d6d6;
      }
      .genie-ak9 .innerRating {
        height: 7px;
        background: #002e58;
      }

      #displayResume .genie-ak9 {
        min-height: 1024px;
      }
      .genie-ak9 .SortableList {
        margin-bottom: 0 !important;
      }
      .genie-ak9 .SortableList,
      .genie-ak9 > div {
        min-height: inherit;
      }
      .genie-ak9 .SortableList .heading {
        padding-bottom: 2px;
      }
      .genie-ak9.GJS9 div.headingIcon {
        position: static;
        display: inline-block;
      }
      .genie-ak9.GJS9 div.section-title {
        display: inline;
        vertical-align: middle;
      }
      .genie-ak9 > div:not(.top-section),
      .genie-ak9 > div:not(.parentContainer) {
        min-height: auto;
      }

      .genie-ak9 .left-box .hide-dates {
        visibility: hidden;
        position: static !important;
        display: block;
        float: left;
      }
      .genie-ak9 .right-box .hide-dates {
        display: none;
      }
      .genie-ak9 .paragraph.dates-para:after {
        content: "";
        display: table;
        clear: both;
      }

      .genie-ak9,
      .genie-ak9 table {
        line-height: 18px;
      }
      .genie-ak9.pagesize {         width: 792px;
      }
      .genie-ak9.font-face {
        font-family: "Century Gothic", Helvetica, sans-serif;
      }
      .genie-ak9.fontsize {
        font-size: 11px;
      }
      .genie-ak9.vmargins {
        padding-top: 25px;
        padding-bottom: 25px;
      }
      .genie-ak9.hmargins {
        padding-left: 25px;
        padding-right: 25px;
      }
      .genie-ak9 .section {
        padding-top: 20px;
      }
      .genie-ak9 .right-box .section:after {
        padding-bottom: 10px;
      }
      .genie-ak9 .paragraph {
        margin-top: 10px;
      }
      .genie-ak9 .rtngSec .paragraph {
        margin-top: 5px;
        page-break-inside: avoid;
      }
      .genie-ak9 .single-column,
      .genie-ak9 .main-column {
        word-wrap: break-word;
      }
      .genie-ak9 .left-box .single-column,
      .genie-ak9 .left-box .main-column {
        margin-left: 0px;
      }
      .genie-ak9 table.skills td {
        padding-top: 5px;
      }
      .genie-ak9 .job-title,
      .genie-ak9 .degree,
      .genie-ak9 .program-line {
        font-size: 14px;
      }
      .genie-ak9 .name {
        color: #003d74;
        font-size: 36px;
        line-height: 39.5px;
      }
      .genie-ak9 .heading {
        line-height: 22px;
      }
      .genie-ak9 .section-title,
      .genie-ak9 .resumeTitle {
        font-size: 18px;
        color: #003d74;
      }
      .genie-ak9 .right-box {
        width: 144px;
      }
      .genie-ak9 .left-box .paragraph .single-column {
        margin-left: 91px;
      }
      .genie-ak9 .left-box .padded-line.date-content {
        left: -91px;
      }
      .genie-ak9 .headingIcon svg rect {
        fill: #003d74;
      }

      .genie-ak9 .innerRating {
        background-color: #003d74;
      }
      .genie-ak9 .left-box > .SortableItem-sibling,
      .genie-ak9 .right-box > .SortableItem-sibling {
        padding-top: 20px;
      }
      .genie-ak9 .left-box > .SortableItem-sibling:first-child,
      .genie-ak9 .right-box > .SortableItem-sibling:first-child {
        padding-top: 0 !important;
      }
      .genie-ak9
        .sortableInner
        .SortableItem.active
        > .wrapper-bg
        + div[data-section] {
        position: relative;
        z-index: 8;
      }

      .genie-ak9.active .wrapper-bg {
        left: -62px !important;
        right: -62px !important;
      }
      .genie-ak9.active .acrs-bdr {
        left: -60px !important;
      }
      .genie-ak9.active .acr-edit,
      .genie-ak9.active .acr-delete {
        left: -59px !important;
      }
      .genie-ak9.active .acr-move {
        right: -59px !important;
      }
    </style>
  </head>
  <body>
    <section class="page-wrap">
      <div class="genie-ak9 fontsize font-face vmargins hmargins pagesize">
        <div class="top-section">
          <div class="last-box">
            <div class="section notdraggable first-section">
              <div class="paragraph first-paragraph">
                <div class="name word-break">
                  <span class="field"></span><span class="field word-break">${
                    personDetail.firstName
                  }${" "}${personDetail.lastName}</span>
                </div>
                <div class="resumeTitle">${jobPosition}</div>
              </div>
            </div>
            <div class="section summary notdraggable">
              <div class="paragraph first-paragraph">
                <div class="field single-column">
                  <p>
                   ${userSummary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="parentContainer">
          <div class="left-box last-box">
            <div class="section experience">
              
             
              ${renderExperience()}
            </div>
            <div class="section education">
              
              ${renderEducation()}
            </div>
            ${renderCertificate() ?? []}
            ${renderAwards() ?? []}
            ${renderReferences() ?? []}
          </div>
          <div class="right-box last-box">
            <div class="section SECTION_CNTC notdraggable">
              <div class="heading">
                <span class="headingIcon"></span
                ><span class="section-title">Contact</span>
              </div>
              <div class="paragraph PARAGRAPH_CNTC first-paragraph">
                <div class="address">
                  <div class="single-column">
                    <div>
                      <div class="txtBold">Address</div>
                      <div class="field"></div>
                       <span class="field">${personDetail.city}</span
                      ><span>, </span><span class="field">${
                        personDetail.country
                      }</span>
                    </div>
                    <div class="txtBold mt5">Phone</div>
                    <div>
                      <span class="field">${personDetail.phone}</span>
                    </div>
                    <div class="txtBold mt5">E-mail</div>
                    <div class="word-break">
                      <span class="field">${personDetail.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section rtngSec">

              ${renderSkills()}
           <br/>
               ${renderHobbies()}
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>`;
}
