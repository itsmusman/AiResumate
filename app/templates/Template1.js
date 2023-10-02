export function template1(resume) {
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
        <div class="headingIcon"></div>
        <div class="section-title">Certification</div>
      </div>
      <div class="paragraph first-paragraph">
        <span class="dates_wrapper">
          ${certificates
            .map(
              (element) => `
            <span class="jobdates">${element.Year}${cleanMonth(
                element.fromMonth
              )}</span>
          `
            )
            .join("")}
        </span>
        <div class="single-column">
          ${certificates
            .map(
              (element) => `

              <span class="padded-line">
                <span class="job-title">${element.certificate}</span>
              </span>
              <span class="padded-line txtItalics">
                <span class="companyname">${element.institute}</span>               
              </span>
          `
            )
            .join("")}
              </span>
      </div>
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
    <div class="single-column">
      <span class="padded-line">
          ${awards
            .map(
              (element) => `
         
            <span class="padded-line">
              <span class="job-title">${element.awards}</span>
            </span>
            <span class="padded-line txtItalics">
              <span class="companyname">${element.institute} - ${element.Year}</span>               
            </span>`
            )
            .join("")}
            </span>
      </div>
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
    <div class="single-column">
      <span class="padded-line">
          ${references
            .map(
              (element) => `
          <span class="job-title">${element.reference}</span>
          <span>  </span>
          
              <p>${element.institute}</p>`
            )
            .join("")}
          </span>
      </div>
    </div>`;
    }
    return referencesHtml;
  }

  function renderSkills() {
    let skillsHtml = "";
    if (skills && skills.length > 0) {
      skillsHtml = `
        <div class="heading">
          
          <div class="section-title">Skills</div>
        </div>
        <div class="paragraph first-paragraph">
          <div class="single-column">
            <span class="companyname">
              ${skills.map((element) => element.name).join(", ")}
            </span>
          </div>
        </div>`;
    }
    return skillsHtml;
  }
  function renderHobbies() {
    let hobbyHtml = "";
    if (hobbies && hobbies.length > 0) {
      hobbyHtml = `
        <div class="heading">
        
          <div class="section-title">Hobbies</div>
        </div>
        <div class="paragraph first-paragraph">
          <div class="single-column">
            <span class="companyname">
              ${hobbies.map((element) => element.name).join(", ")}
            </span>
          </div>
        </div>`;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";
    if (experience.length > 0) {
      result += `<div class="heading">
                    <div class="headingIcon"></div>
                    <div class="section-title">
                      Work History
                    </div>
                  </div>`;
      experience.forEach((element) => {
        result += `<div class="paragraph first-paragraph">
          <span class="dates_wrapper">
            <span class="jobdates" format="%Y-%m">${
              element.fromYear
            }${cleanMonth(element.fromMonth)}</span>
            <span> - </span>
            <span class="jobdates" format="%Y-%m">${element.toYear}${cleanMonth(
          element.toMonth
        )}</span>
          </span>
          <div class="single-column">
            <span class="padded-line">
              <span class="job-title">${element.position}</span>
            </span>
            <span class="padded-line txtItalics">
              <span class="companyname">${element.company}</span><span>, </span>
              <span class="companyname">${element?.city ?? []}</span>
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
        </div>`;
      });
    }
    return result;
  }
  function renderEducation() {
    var result = "";
    if (education.length > 0) {
      result += `<div class="heading">
                    <div class="headingIcon"></div>
                    <div class="section-title">
                      Education
                    </div>
                  </div>`;
      education.forEach((element) => {
        result += `<div class="paragraph first-paragraph">
          <span class="dates_wrapper">
            <span class="jobdates" format="%Y-%m">${element.fromYear}</span>
            <span> - </span>
            <span class="jobdates" format="%Y-%m">${element.toYear}</span>
          </span>
          <div class="single-column">
            <span class="padded-line">
              <span class="job-title">${element.degree}</span>
            </span>
            <span class="padded-line txtItalics">
              <span class="companyname">${element.university}</span>
              <span>, </span>
              <span class="companyname">${element?.city ?? "[Location]"}</span>
            </span>
          </div>
        </div>`;
      });
    }
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
        .genie-mjs2 ol,
        .genie-mjs2 ul {
          list-style: none;
        }
        .genie-mjs2 table {
          border-collapse: collapse;
          border-spacing: 0;
          font-size: inherit;
          color: inherit;
          width: 100%;
        }
        .genie-mjs2 .word-break {
          word-wrap: break-word;
        }
  
        .genie-mjs2 ul,
        .genie-mjs2 li {
          margin: 0;
          padding: 0;
          list-style-type: disc;
        }
        .genie-mjs2 ul li {
          margin: 0 0 0 16px;
          padding: 0;
        }
  
        .genie-mjs2 {
          border-left: 120px solid  #A81A2B !important;
          table-layout: fixed;
          word-wrap: break-word;
          box-sizing: border-box;
          padding: 25px;
          min-height: 1024px;
        }
        .genie-mjs2.hmargins {
          padding-left: 12px !important;
          padding-right: 24px !important;
        }
        .genie-mjs2 .name {
          color:  #A81A2B;
          font-size: 15px;
          line-height: 17px;
          font-weight: bold;
          padding: 0;
          text-align: left;
        }
        .genie-mjs2 .paragraph {
          position: relative;
          clear: both;
          min-height: 10px;
        }
        .genie-mjs2 .heading {
          clear: both;
          color:  #A81A2B;
          font-weight: bold;
        }
        .genie-mjs2 .address {
          position: relative;
          text-align: left;
          font-size: 0.917em;
          line-height: 1.25em;
          margin-top: 0;
          position: inherit;
          z-index: 2;
          display: table;
          table-layout: fixed;
          width: 100%;
          word-wrap: break-word;
        }
        .genie-mjs2 .table_wrapper {
          width: 100%;
          margin-top: 0;
        }
        .genie-mjs2 table.twocol td {
          width: 50%;
        }
        .genie-mjs2 table.skills {
          width: 100%;
        }
        .genie-mjs2 table.skills th,
        .genie-mjs2 table.skills td {
          width: 20%;
          text-align: center;
        }
        .genie-mjs2 table.skills th {
          text-decoration: underline;
        }
        .genie-mjs2 table.skills .skill-name,
        .genie-mjs2 table.skills .skill-rating {
          text-align: left;
          width: 35%;
        }
        .genie-mjs2 table.skills .skill-rating {
          width: 20%;
        }
        .genie-mjs2 table.skills .skill-years,
        .genie-mjs2 table.skills .skill-last {
          width: 19%;
        }
        .genie-mjs2 table.skills .pad1 {
          width: 5%;
        }
        .genie-mjs2 table.skills .pad2,
        .genie-mjs2 table.skills .pad3 {
          width: 1%;
        }
        .genie-mjs2 span.padded-line {
          margin-top: 5px;
          display: block;
        }
        .genie-mjs2 span.job-title,
        .genie-mjs2 span.degree,
        .genie-mjs2 span.program-line {
          font-weight: bold;
        }
        .genie-mjs2 .paragraph .dates_wrapper {
          font-weight: bold;
          display: block;
          text-align: right;
          color: #fff;
          position: absolute;
          left: -160px;
          float: none;
          margin-left: 0 !important;
          width: 100px !important;
        }
        .genie-mjs2 .single-column {
          position: relative;
        }
        .genie-mjs2 .txtItalics {
          font-style: italic;
        }
        .genie-mjs2 .txtBold {
          font-weight: bold;
        }
        .genie-mjs2 .resumeTitle {
          text-align: left;
          color:  #A81A2B;
          font-weight: 400;
        }
        .genie-mjs2 td.twocol_2 {
          border-left: 1px solid #fefdfd;
        }
        .genie-mjs2 .addressLeft,
        .genie-mjs2 .addressRight {
          display: table-cell;
          width: 40%;
        }
        .genie-mjs2 .ratingfield p {
          display: inline;
        }
  
        .genie-mjs2 .section {
          border-left: 1px solid #ccc;
          padding-left: 25px;
          margin-left: 12px;
          position: relative;
        }
        .genie-mjs2 .notdraggable {
          border: none;
          margin-left: 0;
          padding-left: 0;
        }
        .genie-mjs2 .heading,
        .genie-mjs2 .paragraph {
          position: relative;
        }
        .genie-mjs2 .single-column:before {
          display: block;
          position: absolute;
          top: 0;
          left: -30px;
          content: "";
          height: 8px;
          width: 8px;
          border: 0;
          background:  #A81A2B;
          z-index: 2;
          border-radius: 100%;
        }
        .genie-mjs2 .summary .single-column:before {
          display: none;
        }
        .genie-mjs2 .notdraggable + .section:not(.notdraggable):before {
          border: 1px solid #fff;
          content: "";
          position: absolute;
          top: 0;
          left: -2px;
          width: 3px;
          background: #fff;
        }
        .genie-mjs2 .paragraph + tr.paragraph:before {
          display: none;
        }
        .genie-mjs2 .headingIcon svg circle {
          fill:  #A81A2B;
        }
  
        .genie-mjs2 .headingIcon {
          z-index: 4;
          left: -40px;
          position: absolute;
        }
        .genie-mjs2 .headingIcon svg {
          width: 30px;
          height: 30px;
        }
        .genie-mjs2 .headingIcon svg path {
          fill: #fff;
        }
        .genie-mjs2 .iconRow {
          clear: both;
          padding-bottom: 7px;
          word-wrap: break-word;
        }
        .genie-mjs2 .iconRow:last-child {
          padding-bottom: 0;
        }
        .genie-mjs2 .iconRow .iconSvg {
          width: 20px;
          height: 20px;
          float: left;
          margin-right: 5px;
        }
        .genie-mjs2 .iconRow svg circle {
          fill:  #A81A2B;
        }
        .genie-mjs2 .iconRow svg path {
          fill: #fff;
        }
        .genie-mjs2 .iconRow .icoTxt {
          margin-left: 25px;
        }
        .genie-mjs2 .ratingWrapper {
          width: 150px;
          float: right;
          text-align: right;
        }
        .genie-mjs2 .ratingWrapper .noLnht {
          line-height: 0;
        }
        .genie-mjs2 .ratingWrapper svg {
          height: 13px;
          margin-top: 2px;
        }
        .genie-mjs2 .ratingWrapper svg .default-fill {
          fill:  #A81A2B;
        }
        .genie-mjs2 .sortable-item .ratingWrapper span {
          top: 0;
        }
  
        .genie-mjs2,
        .genie-mjs2 table {
          line-height: 16px;
        }
        .genie-mjs2 {
          border-left-color:  #A81A2B !important;
        }
        .genie-mjs2.pagesize {         width: 792px;
        }
        .genie-mjs2.fontsize {
          font-size: 11px;
        }
        .genie-mjs2.font-face {
          font-family: "Century Gothic", Helvetica, sans-serif;
        }
        .genie-mjs2 .name {
          color:  #A81A2B;
          font-size: 36px;
          line-height: 46px;
        }
        .genie-mjs2 .address {
          font-size: 14px;
          line-height: 21px;
          padding-top: 15px;
        }
        .genie-mjs2 .section {
          padding-top: 15px;
        }
        .genie-mjs2 .first-section,
        .genie-mjs2 .SECTION_CNTC {
          padding-top: 0;
        }
        .genie-mjs2 .heading {
          padding-bottom: 10px;
        }
        .genie-mjs2 .job-title,
        .genie-mjs2 span.degree,
        .genie-mjs2 span.program-line {
          font-size: 14px;
        }
        .genie-mjs2 .paragraph {
          padding-top: 5px;
        }
        .genie-mjs2 .first-paragraph {
          padding-top: 0 !important;
        }
        .genie-mjs2 .single-column,
        .genie-mjs2 .main-column {
          margin-left: 0px;
        }
        .genie-mjs2 span.dates_wrapper {
          line-height: 17px;
        }
        .genie-mjs2 .section-title,
        .genie-mjs2 .resumeTitle {
          color:  #A81A2B;
          font-size: 20px;
          line-height: 21px;
        }
        .genie-mjs2 table.skills td {
          padding-top: 2px;
        }
        .genie-mjs2 .noPind {
          margin-left: 0;
        }
  
        .genie-mjs2 .notdraggable + .section:not(.notdraggable):before {
          height: 25px;
        }
        .genie-mjs2 .single-column:before {
          background:  #A81A2B;
          top: 4px;
          margin-left: -0px;
        }
  
        .genie-mjs2 .headingIcon svg circle {
          fill:  #A81A2B;
        }
        .genie-mjs2 .headingIcon {
          top: -5px;
        }
        .genie-mjs2 .iconRow svg circle {
          fill:  #A81A2B;
        }
        .genie-mjs2 .iconRow .iconSvg {
          padding-top: -3px;
        }
  
        .genie-mjs2 .sortable-item .section {
          padding-top: 0;
          padding-bottom: 15px;
        }
        .genie-mjs2 .sortable-item .nameSec,
        .genie-mjs2 .sortable-item .SECTION_CNTC {
          padding-bottom: 0;
        }
  
        .parent-drag.active.genie-mjs2,
        ._single-parent-drag.active.genie-mjs2 {
          border: 0 !important;
        }
        .genie-mjs2 .ratingWrapper svg .default-fill {
          fill:  #A81A2B;
        }
        .genie-mjs2 .SortanleInner .single-column .ratingfield {
          word-break: break-word;
        }
  
        .genie-mjs2.active,
        .genie-mjs2.active._single-parent-drag {
          padding-left: 1px !important;
          padding-right: 0 !important;
        }
        .genie-mjs2.active .section {
          margin-left: 12px;
          padding-top: 0;
        }
        .summary{
          font-size:14px;
        }
        .companyname{
          font-size:13px;
        }
    </style>
    <title></title>
  </head>
  <body>
    <section class="page-wrap">
      <div class="genie-mjs2 fontsize font-face vmargins hmargins pagesize">
        <div class="top-section">
          <div class="left-box">
            <div class="section nameSec notdraggable first-section">
              <div class="paragraph first-paragraph">
                <div class="name word-break">
                  <span class="field fName">${
                    personDetail.firstName
                  }</span> <span class="field">${personDetail.lastName}</span>
                </div>
                <div class="resumeTitle">${jobPosition}</div>
              </div>
            </div>
            <div class="section SECTION_CNTC notdraggable">
              <div class="paragraph first-paragraph">
                <div class="address">
                  <div class="addressLeft">
                    <div class="iconRow">
                      <div class="iconSvg"></div>
                      <div class="icoTxt">
                      <span class="field">${
                        personDetail.city
                      }</span><span>,</span>
                       <span class="field">${personDetail.country}</span>
                      </div>
                    </div>
                    <div class="iconRow">
                      <div class="iconSvg"></div>
                      <div class="icoTxt">
                        <span class="field">${personDetail.phone}</span>
                      </div>
                    </div>
                    <div class="iconRow">
                      <div class="iconSvg"></div>
                      <div class="icoTxt">
                        <span class="field">${personDetail.email}</span>
                      </div>
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
            <div class="section notdraggable summary">
              <div class="paragraph first-paragraph">
                <div class="field single-column noPind">
                  <p class="summary">${userSummary}</p>
                </div>
              </div>
            </div>
            <div class="section">
              
                    ${renderSkills()}
                 
            </div>
            <div class="section">
              
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
    </section>
  </body>
  </html>`;
}
