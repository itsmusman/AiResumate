export function template64(resume) {
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
      `<div class="heading">
    <div class="headingIcon"></div>
    <div class="section-title">Education</div>
    </div>
    <div class="paragraph first-paragraph">
    <span class="dates_wrapper"
      ><span class="jobdates" format="%b %Y"></span
      ><span class="jobdates" format="%b %Y"></span
    ></span>
     ${renderEducation()}
    </div>`;

      certificateHtml = `
          <div class="heading">
    <div class="headingIcon"></div>
    <div class="section-title">Certificate</div>
    </div>
    <div class="paragraph first-paragraph">
    <span class="dates_wrapper"
      ><span class="jobdates" format="%b %Y"></span
      ><span class="jobdates" format="%b %Y"></span
    ></span>
              ${certificates
                .map(
                  (element) => `
                
                  <span class="program-line">${element.certificate}</span>
                  <span></span>
                  <p>${element.institute}</p>
                  <p class="dates">${element.Year}${cleanMonth(
                    element.fromMonth
                  )}</p>
                
              `
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
    <div class="headingIcon"></div>
    <div class="section-title">Awards</div>
    </div>
    <div class="paragraph first-paragraph">
    <span class="dates_wrapper"
      ><span class="jobdates" format="%b %Y"></span
      ><span class="jobdates" format="%b %Y"></span
    ></span>
              ${awards
                .map(
                  (element) => `
                
                  <span class="program-line">${element.awards}</span>
                  <span></span>
                  <p>${element.institute}</p>
                  <p class="dates">${element.Year}</p>
                
              `
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
    <div class="headingIcon"></div>
    <div class="section-title">Reference</div>
    </div>
    <div class="paragraph first-paragraph">
    <span class="dates_wrapper"
      ><span class="jobdates" format="%b %Y"></span
      ><span class="jobdates" format="%b %Y"></span
    ></span>
              ${references
                .map(
                  (element) => `
                
                  <span class="program-line">${element.reference}</span>
                  <span></span>
                  <p>${element.institute}</p>
                 
                
              `
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
    experience.forEach((element) => {
      result += ` <div class="paragraph first-paragraph">
         <span class="dates_wrapper"
           ><span class="jobdates" format="%b %Y">${
             element.fromYear
           }${cleanMonth(element.fromMonth)}</span
           ><span> - </span
           ><span class="jobdates" format="%b %Y">${element.toYear}${cleanMonth(
        element.toMonth
      )}</span></span
         >
         <div class="single-column">
           <span class="padded-line pb5"
             ><span class="job-title">${element.position}</span
             ></span
           ><span class="padded-line txtItalics pb5"
             ><span class="companyname">${element.company}</span><span>,</span
             ><span class="job-location jobcity">${element?.city ?? []}</span
             ><span></span
             ><span class="job-location jobstate"></span></span
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
           </div> `;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `<div class="single-column">
    <span class="padded-line"
      ><span class="degree"></span><span class="program-line">${
        element.degree
      }</span>
      </span>
      <span class="padded-line txtItalics"><span
        class="companyname companyname_educ"
        dependency="SCHO">${element.university}</span
      ><span> </span><span
      class="companyname companyname_educ"
      dependency="SCHO"
      >${element?.city ?? []}</span
    ><span> - </span
    ><span class="job-location jobcity">${element.fromYear}${cleanMonth(
          element.fromMonth
        )} - ${element.toYear}${cleanMonth(element.toMonth)}</span
      ><span> </span
      ><span class="job-location jobstate"></span></span
    ><span class="padded-line"><span class="field"></span></span>
    </div>`;
    });
    return result;
  }

  return `<!DOCTYPE html>
      <html>
      <head>
      
        <style>
    
        @page {
          margin: 0px;
        }
    
            body {
              margin: auto;
            }
            .genie-mjs5 ol,
            .genie-mjs5 ul {
              list-style: none;
            }
            .genie-mjs5 table {
              border-collapse: collapse;
              border-spacing: 0;
              font-size: inherit;
              color: inherit;
              width: 100%;
            }
            .genie-mjs5 ul,
            .genie-mjs5 li {
              margin: 0;
              padding: 0;
              list-style-type: disc;
            }
            .genie-mjs5 ul li {
              margin: 0 0 0 16px;
              padding: 0;
            }
      
            .genie-mjs5 span.padded-line {
              display: block;
            }
            .genie-mjs5 span.job-title,
            .genie-mjs5 span.degree,
            .genie-mjs5 span.program-line {
              font-weight: bold;
            }
            .genie-mjs5 .pb5 {
              padding-bottom: 5px;
            }
            .genie-mjs5 span.dates_wrapper {
              font-weight: bold;
              display: block;
              float: left;
              text-align: left;
              padding-right: 10px;
              box-sizing: border-box;
            }
            .genie-mjs5 .txtItalics {
              font-style: italic;
            }
            .genie-mjs5 .txtBold {
              font-weight: bold;
            }
      
            .genie-mjs5 {
              box-sizing: border-box;
              word-wrap: break-word;
            }
            .genie-mjs5 .nameSec {
              padding-top: 24px !important;
            }
            .genie-mjs5 .name {
              color: #fff;
              font-size: 15px;
              line-height: 17px;
              font-weight: bold;
              padding: 0;
              text-align: left;
              position: relative;
              z-index: 2;
            }
            .genie-mjs5 .name .fName {
              font-weight: normal;
            }
            .genie-mjs5 .paragraph {
              position: relative;
              clear: both;
            }
            .genie-mjs5 .heading {
              clear: both;
              color:  #A81A2B;
              font-weight: bold;
            }
            .genie-mjs5 .address {
              color: #fff;
              text-align: left;
              font-size: 0.917em;
              line-height: 1.25em;
              margin-top: 0;
              white-space: nowrap;
              position: relative;
              z-index: 2;
            }
            .genie-mjs5 .address .txtBold {
              margin-right: 3px;
            }
            .genie-mjs5 .addressLeft,
            .genie-mjs5 .addressRight {
              width: 49%;
              padding: 0 1% 0 0;
              white-space: normal;
              display: inline-block;
              vertical-align: top;
            }
            .genie-mjs5 .addressRight {
              padding: 0 0 0 1%;
            }
            .genie-mjs5 .table_wrapper {
              width: 100%;
              margin-top: 0;
            }
            .genie-mjs5 table.twocol td {
              width: 50%;
            }
            .genie-mjs5 table.skills {
              width: 100%;
            }
            .genie-mjs5 table.skills th,
            .genie-mjs5 table.skills td {
              width: 20%;
              text-align: center;
            }
            .genie-mjs5 table.skills th {
              text-decoration: underline;
            }
            .genie-mjs5 table.skills .skill-name,
            .genie-mjs5 table.skills .skill-rating {
              text-align: left;
              width: 35%;
            }
            .genie-mjs5 table.skills .skill-rating {
              width: 20%;
            }
            .genie-mjs5 table.skills .skill-years,
            .genie-mjs5 table.skills .skill-last {
              width: 19%;
            }
            .genie-mjs5 table.skills .pad1 {
              width: 5%;
            }
            .genie-mjs5 table.skills .pad2,
            .genie-mjs5 table.skills .pad3 {
              width: 1%;
            }
            .genie-mjs5 .resumeTitle {
              text-align: left;
              color: #fff !important;
              z-index: 2;
              position: relative;
              font-weight: 400;
            }
            .genie-mjs5 td.twocol_2 {
              border-left: 1px solid #fefdfd;
            }
      
            .genie-mjs5 .nameSec,
            .genie-mjs5 .SECTION_CNTC {
              position: relative;
            }
            .genie-mjs5 .nameSec:before,
            .genie-mjs5 .SECTION_CNTC:before {
              background:  #A81A2B;
              content: "";
              display: block;
              position: absolute;
              z-index: 1;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
            }
      
            .genie-mjs5 .section {
              border-left: 1px solid #d7d7d7;
              padding-left: 25px;
              margin-left: 12px;
              position: relative;
            }
            .genie-mjs5 .summary {
              border: none;
              margin-left: 0;
              padding-left: 0;
            }
            .genie-mjs5 .first-section,
            .genie-mjs5 .SECTION_CNTC {
              border: none;
            }
            .genie-mjs5 .first-section {
              padding-bottom: 0;
            }
            .genie-mjs5 .heading,
            .genie-mjs5 .single-column {
              position: relative;
            }
            .genie-mjs5 .single-column:before {
              display: block;
              position: absolute;
              top: 0;
              left: -30px;
              content: "";
              height: 9px;
              width: 9px;
              border: 0;
              background:  #A81A2B;
              z-index: 2;
              transform: rotate(45deg);
            }
            .genie-mjs5 .summary .single-column:before {
              display: none;
            }
            .genie-mjs5 .section.notdraggable + .section:not(.notdraggable):before {
              border: 3px solid #fff;
              content: "";
              position: absolute;
              top: 0;
              left: -2px;
            }
            .genie-mjs5 .paragraph + tr.paragraph:before {
              display: none;
            }
            .genie-mjs5 .notdraggable {
              border: 0;
            }
      
            .genie-mjs5 .headingIcon {
              left: -45px;
              top: -7px;
              position: absolute;
            }
            .genie-mjs5 .headingIcon svg {
              height: 40px;
              width: 40px;
              position: relative;
            }
      
            .genie-mjs5 .headingIcon svg rect {
              transform: rotate(45deg);
              fill:  #A81A2B;
            }
            .genie-mjs5 .headingIcon svg path {
              fill: #fff;
            }
            .genie-mjs5 .ratingRect {
              float: right;
              text-align: right;
            }
            .genie-mjs5 .ratingRect .noLnht {
              line-height: 0;
            }
            .genie-mjs5 .ratingRect svg rect {
              transform: rotate(45deg);
            }
            .genie-mjs5 .ratingfield p {
              display: inline;
            }
      
            .genie-mjs5 .sortable-item .nameSec,
            .genie-mjs5 .sortable-item .SECTION_CNTC {
              padding-bottom: 0;
            }
            .genie-mjs5 .sortable-item .summary {
              margin-left: 0;
              padding-left: 0;
            }
            .genie-mjs5 .ratingRect .default-fill {
              fill:  #A81A2B;
            }
            .genie-mjs5 .sortable-item .rating-wrapper span {
              top: 0;
            }
            .genie-mjs5 .sortableInner .ratingfield {
              vertical-align: top;
            }
            .genie-mjs5 .sortableInner .sortable-item .single-column {
              line-height: normal;
            }
            .genie-mjs5,
            .genie-mjs5 table {
              line-height: 16px;
            }
            .genie-mjs5.pagesize {         width: 792px;
            }
            .genie-mjs5.fontsize {
              font-size: 11px;
            }
            .genie-mjs5.font-face {
              font-family: "Century Gothic", Helvetica, sans-serif;
            }
            .genie-mjs5.vmargins {
              padding-bottom: 24px;
            }
            .genie-mjs5.hmargins {
              padding-left: 24px;
              padding-right: 24px;
            }
            .genie-mjs5 .section {
              padding-top: 20px;
            }
            .genie-mjs5 .heading {
              padding-bottom: 10px;
              color: #A81A2B;
            }
            .genie-mjs5 .job-title,
            .genie-mjs5 span.degree,
            .genie-mjs5 span.program-line {
              font-size: 14px;
            }
            .genie-mjs5 .paragraph {
              padding-top: 10px;
            }
            .genie-mjs5 .SECTION_CNTC,
            .genie-mjs5 .first-paragraph {
              padding-top: 0 !important;
            }
            .genie-mjs5 .first-paragraph .single-column.main-column,
            .genie-mjs5 .single-column.paragraphindent {
              margin-left: 0;
            }
            .genie-mjs5 .single-column,
            .genie-mjs5 .main-column {
              margin-left: 70px;
            }
            .genie-mjs5 span.dates_wrapper {
              width: 70px;
              font-size: 11px;
              line-height: 17px;
            }
            .genie-mjs5 .section-title,
            .genie-mjs5 .resumeTitle {
              font-size: 16px;
              line-height: 21px;
            }
            .genie-mjs5 .name {
              font-size: 36px;
              line-height: 46px;
            }
            .genie-mjs5 .address {
              font-size: 11px;
              line-height: 21px;
              padding-top: 10px;
              padding-bottom: 15px;
            }
            .genie-mjs5 table.skills td {
              padding-top: 5px;
            }
            .genie-mjs5 .noPind {
              margin-left: 0;
            }
            .genie-mjs5 .nameSec:before,
            .genie-mjs5 .SECTION_CNTC:before {
              background:  #A81A2B;
            }
      
            .genie-mjs5 .nameSec,
            .genie-mjs5 .SECTION_CNTC {
              margin-left: -24px !important;
              margin-right: -24px !important;
              padding-left: 24px;
              padding-right: 24px;
            }
      
            .genie-mjs5 .section.notdraggable + .section:not(.notdraggable):before {
              height: 30px;
            }
            .genie-mjs5 .single-column:before {
              background:  #A81A2B;
              top: 4px;
            }
            .genie-mjs5 .paragraph .dates_wrapper + .single-column:before {
              left: -100px;
            }
      
            .genie-mjs5 .headingIcon svg rect {
              fill: #373d48;
            }
            .genie-mjs5 .headingIcon {
              top: -8px;
            }
            
        </style>
        <title></title>
      </head>
      <body>
        <section class="page-wrap">
          <div class="genie-mjs5 fontsize font-face vmargins hmargins pagesize">
            <div class="top-section">
              <div class="left-box">
                <div class="section nameSec notdraggable first-section">
                  <div class="paragraph first-paragraph">
                    <div class="name">
                      <span class="field">${personDetail.firstName}${" "} ${
    personDetail.lastName
  }</span>
                    </div>
                    <div class="resumeTitle"></div>
                  </div>
                </div>
                <div class="section SECTION_CNTC notdraggable">
                  <div class="paragraph PARAGRAPH_CNTC first-paragraph">
                    <div class="address">
                      <div class="addressLeft">
                        <div>
                          <span class="txtBold">Address</span> <span>,</span><span class="spaced field">${
                            personDetail.city
                          }</span><span>,</span><span class="spaced field">${
    personDetail.country
  }</span>
                        </div>
                        <div>
                          <span class="txtBold">Phone</span> <span class="field" dependency="HPHN">${
                            personDetail.phone
                          }</span>
                        </div>
                        <div>
                          <span class="txtBold">E-mail</span> <span class="field">${
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
                <div class="section summary notdraggable">
                  <div class="paragraph first-paragraph">
                    <div class="field single-column noPind">
                      <p>${userSummary}</p>
                    </div>
                  </div>
                </div>
                <div class="section">
                  <div class="heading">
                    <div class="headingIcon"></div>
                    <div class="section-title">
                      Skills
                    </div>
                  </div>
                  <div class="paragraph first-paragraph">
                    <div class="single-column main-column noPind">
                      <ul>
                        ${renderSkills()}
                      </ul>
                    </div>
                    <div class="headingIcon"></div>
                    <div class="section-title">
                      Hobbies
                    </div>
                  </div>
                  <div class="paragraph first-paragraph">
                    <div class="single-column main-column noPind">
                      <ul>
                        ${renderHobbies()}
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="section">
                  <div class="heading">
                    <div class="headingIcon"></div>
                    <div class="section-title">
                      Work History
                    </div>
                  </div>${renderExperience()}
                </div>
                <div class="section">
                  <div class="heading">
                    <div class="headingIcon"></div>
                    <div class="section-title">
                      Education
                    </div>
                  </div>
                  <div class="paragraph first-paragraph">
                    ${renderEducation()}
                  </div>
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
