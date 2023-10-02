export function template27(resume) {
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

    if (experience.length > 0) {
      result += `<div class="heading">
                    <div class="section-title">Work History</div>
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
                  </div>
                  <br/>`;
    });

    return result;
  }

  function renderEducation() {
    var result = "";

    if (education.length > 0) {
      result += `<div class="heading">
                    <div class="section-title">Education</div>
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
      .genie-ak8 ol,
      .genie-ak8 ul {
        list-style: none;
      }
      .genie-ak8 table {
        border-collapse: collapse;
        border-spacing: 0;
        font-size: inherit;
        color: inherit;
        width: 100%;
      }

      .genie-ak8 ul,
      .genie-ak8 li {
        margin: 0;
        padding: 0;
        list-style-type: disc;
      }
      .genie-ak8 ul li {
        margin: 0 0 0 16px;
        padding: 0;
      }

      .genie-ak8 span.padded-line {
        display: block;
      }
      .genie-ak8 span.job-title,
      .genie-ak8 span.degree,
      .genie-ak8 span.program-line {
        font-weight: bold;
      }
      .genie-ak8 .mb5 {
        margin-bottom: 5px;
      }
      .genie-ak8 .txtItalics {
        font-style: italic;
      }
      .genie-ak8 .txtBold {
        font-weight: bold;
      }

      .genie-ak8 {
        box-sizing: border-box;
        word-wrap: break-word;
      }
      .genie-ak8 .name {
        color: #252932;
        font-size: 15px;
        line-height: 17px;
        font-weight: bold;
        font-style: italic;
        padding: 0;
        text-align: left;
        letter-spacing: -2px;
      }
      .genie-ak8 .paragraph {
        position: relative;
        clear: both;
      }
      .genie-ak8 .heading {
        clear: both;
        font-weight: bold;
        font-style: italic;
      }
      .genie-ak8 .section-title {
        color: #252932;
        border-bottom: 1px solid #ccc;
        letter-spacing: -0.5px;
      }
      .genie-ak8 .address {
        text-align: left;
        font-size: 0.917em;
        line-height: 1.25em;
        margin-top: 0;
        white-space: nowrap;
        position: relative;
        z-index: 2;
      }
      .genie-ak8 .address .txtBold {
        margin-right: 3px;
      }
      .genie-ak8 .addressLeft,
      .genie-ak8 .addressRight {
        width: 49%;
        padding: 0 1% 0 0;
        white-space: normal;
        display: inline-block;
        vertical-align: top;
      }
      .genie-ak8 .addressRight {
        padding: 0 0 0 1%;
      }
      .genie-ak8 .table_wrapper {
        width: 100%;
        margin-top: 0;
      }
      .genie-ak8 table.twocol td {
        width: 50%;
      }
      .genie-ak8 table.skills {
        width: 100%;
      }
      .genie-ak8 table.skills th,
      .genie-ak8 table.skills td {
        width: 20%;
        text-align: center;
      }
      .genie-ak8 table.skills th {
        text-decoration: underline;
      }
      .genie-ak8 table.skills .skill-name,
      .genie-ak8 table.skills .skill-rating {
        text-align: left;
        width: 35%;
      }
      .genie-ak8 table.skills .skill-rating {
        width: 20%;
      }
      .genie-ak8 table.skills .skill-years,
      .genie-ak8 table.skills .skill-last {
        width: 19%;
      }
      .genie-ak8 table.skills .pad1 {
        width: 5%;
      }
      .genie-ak8 table.skills .pad2,
      .genie-ak8 table.skills .pad3 {
        width: 1%;
      }
      .genie-ak8 span.dates_wrapper {
        font-weight: bold;
        display: block;
        float: left;
        text-align: left;
        padding-right: 10px;
      }
      .genie-ak8 .resumeTitle {
        text-align: left;
        color: #252932;
        font-weight: 700;
        padding-bottom: 5px;
      }
      .genie-ak8 td.twocol_2 {
        border-left: 1px solid #fefdfd;
      }

      .genie-ak8 .sortableInner span.dates_wrapper {
        box-sizing: initial;
      }
      .genie-ak8 .rating-wrapper .default-fill {
        fill: #252932;
      }

      .genie-ak8 .rating-wrapper {
        white-space: nowrap;
      }
      .genie-ak8 .rating-text,
      .genie-ak8 .rating-svg {
        width: 68%;
        padding: 0 1% 0 0;
        display: inline-block;
        white-space: normal;
        vertical-align: top;
      }
      .genie-ak8 .rating-svg {
        width: 30%;
        text-align: right;
        padding: 0;
      }
      .genie-ak8 .rating-svg .noLnht {
        line-height: 0;
      }
      .genie-ak8 svg {
        height: 13px;
      }

      .genie-ak8,
      .genie-ak8 table {
        line-height: 16px;
      }
      .genie-ak8.pagesize {         width: 792px;
      }
      .genie-ak8.fontsize {
        font-size: 11px;
      }
      .genie-ak8.font-face {
        font-family: Georgia, serif;
      }
      .genie-ak8.vmargins {
        padding-top: 24px;
        padding-bottom: 24px;
      }
      .genie-ak8.hmargins {
        padding-left: 24px;
        padding-right: 24px;
      }
      .genie-ak8 .section {
        padding-top: 20px;
      }
      .genie-ak8 .address {
        font-size: 11px;
        line-height: 21px;
        padding-top: 10px;
      }
      .genie-ak8 .heading {
        padding-bottom: 10px;
      }
      .genie-ak8 .job-title,
      .genie-ak8 span.degree,
      .genie-ak8 span.program-line {
        font-size: 14px;
      }
      .genie-ak8 .paragraph {
        padding-top: 10px;
      }
      .genie-ak8 .rtngSec .paragraph {
        padding-top: 5px;
      }
      .genie-ak8 .first-section,
      .genie-ak8 .first-paragraph,
      .genie-ak8 .SECTION_CNTC {
        padding-top: 0 !important;
      }
      .genie-ak8 .single-column,
      .genie-ak8 .main-column {
        margin-left: 120px;
      }
      .genie-ak8 span.dates_wrapper {
        width: 110px;
        font-size: 11px;
        line-height: 17px;
      }
      .genie-ak8 .section-title,
      .genie-ak8 .resumeTitle {
        font-size: 16px;
        line-height: 21px;
      }
      .genie-ak8 .name {
        font-size: 36px;
        line-height: 46px;
      }
      .genie-ak8 table.skills td {
        padding-top: 5px;
      }
      .genie-ak8 .noPind {
        margin-left: 0;
      }
      .genie-ak8 .name,
      .genie-ak8 .section-title,
      .genie-ak8 .resumeTitle {
        color: #252932;
      }
      .genie-ak8 .rating-svg {
        padding-top: 2px;
      }

      .genie-ak8
        .sortableInner
        .SortableItem.active
        > .wrapper-bg
        + div[data-section] {
        position: relative;
        z-index: 8;
      }
      .genie-ak8 .SortableItem .ratingValue,
      .genie-ak8.active .ratingValue {
        margin-top: 0;
      }
      .genie-ak8 .rating-wrapper .default-fill {
        fill: #252932;
      }
    </style>
  </head>
  <body>
    <section class="page-wrap">
      <div class="genie-ak8 fontsize font-face vmargins hmargins pagesize">
        <div class="top-section">
          <div class="left-box">
            <div class="section notdraggable first-section">
              <div class="paragraph first-paragraph">
                <div class="name">
                  <span class="field"></span><span class="field">${
                    personDetail.firstName
                  }${" "}${personDetail.lastName}</span>
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
                      ><span>,</span><span class="spaced field">${
                        personDetail.country
                      }</span>
                    </div>
                    <div>
                      <span class="txtBold">Phone </span
                      ><span class="field" dependency="HPHN"
                        >${personDetail.phone}</span
                      ><span class="field"></span>
                    </div>
                    <div>
                      <span class="txtBold">E-mail </span
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
              <div class="heading">
                <div class="section-title">Skills</div>
              </div>
              <div class="paragraph first-paragraph">
                <div class="single-column main-column">
                  <div class="rating-wrapper">
                    <div class="rating-text">
                      <span class="field"
                        ><ul>
                          ${renderSkills()}
                        </ul></span
                      >
                    </div>
                  </div>
                </div>
                <div class="heading">
                <div class="section-title">Hobbies</div>
              </div>
              <div class="paragraph first-paragraph">
                <div class="single-column main-column">
                  <div class="rating-wrapper">
                    <div class="rating-text">
                      <span class="field"
                        ><ul>
                         ${renderHobbies()}
                        </ul></span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section">
              
              ${renderExperience()}
              
            </div>
            <div class="section">
              
              ${renderEducation() ?? []}
            </div>
            ${renderCertificate() ?? []}
            
            ${renderAwards() ?? []}
            ${renderReferences() ?? []}
          </div>
        </div>
      </div>
    </section>
  </body>
</html>`;
}
