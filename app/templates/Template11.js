export function template11(resume) {
  // console.log("template11", resume);
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
    <div class="paragraph dates-para first-paragraph">
          ${certificates
            .map(
              (element) => `
            
              <p>${element.certificate} (${element.institute}) - ${
                element.Year
              }${cleanMonth(element.fromMonth)}</p>
            
          `
            )
            .join("")}
          <span class="field"></span>
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
    <div class="paragraph dates-para first-paragraph">
          ${awards
            .map(
              (element) => `
            
              <p>${element.awards} (${element.institute}) - ${element.Year} </p>
            
          `
            )
            .join("")}
          <span class="field"></span>
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
    <div class="paragraph dates-para first-paragraph">
          ${references
            .map(
              (element) => `
            
              <p class="txtBold">${element.reference} </p>
              <span>  </span>
              <p>${element.institute}</p>
          `
            )
            .join("")}
          <span class="field"></span>
    </div> `;
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
        <div class="paragraph">
          <ul>
            ${skills.map((element) => `<li>${element.name}</li>`).join("")}
          </ul>
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
        <div class="paragraph">
          <ul>
            ${hobbies.map((element) => `<li>${element.name}</li>`).join("")}
          </ul>
        </div>`;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";
    if (experience.length > 0) {
      result += `<div class="heading">
                  <div class="section-title">Work History</div>
                </div>`;
      experience.forEach((element) => {
        result += `<div class="paragraph dates-para first-paragraph">
          <div class="single-column">
            <div class="padded-line date-content">
              <span class="jobdates" format="%Y-%m">${
                element.fromYear
              }${cleanMonth(element.fromMonth)}</span>
              <span dependency="JSTD+EDDT"></span>
              <span class="jobdates" format="%Y-%m">${
                element.toYear
              }${cleanMonth(element.toMonth)}</span>
              <br />
            </div>
            <span class="padded-line">
              <span class="job-title txtBold">${element.position}</span>
            </span>
            <span class="padded-line locationGap txtItl">
              <span class="companyname">${element.company}</span><span>, </span>
              <span class="jobcity">${element?.city ?? []}</span><span> </span>
              <span class="jobstate"></span>
            </span>
            <span class="jobline">
              <ul>`;
        var roles = "";
        (element?.roles ?? []).forEach((role) => {
          roles += `<li>${role}</li>`;
        });
        result += `${roles}</ul>
            </span>
          </div>
        </div>
        <br/>
        `;
      });
    }
    return result;
  }

  function renderEducation() {
    var result = "";
    if (education.length > 0) {
      result += `<div class="heading">
                  <div class="section-title">Education</div>
                </div>`;
      education.forEach((element) => {
        result += `<div class="paragraph">
            <span class="job-title txtBold">${element.degree}</span>
            <p>${element.university}, ${element?.city ?? []}</p>
            <p>${element.fromYear} - ${element.toYear}</p>
          </div>`;
      });
    }
    return result;
  }
  return `<html>
  <head>

  <style>
  body {
    margin: auto;
  }
  @page {
    margin: 0px;
  }
  .genie-mjs1 ol,
  .genie-mjs1 ul {
    list-style: none;
  }
  .genie-mjs1 table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: inherit;
    color: inherit;
    width: 100%;
  }
  
  .genie-mjs1 ul,
  .genie-mjs1 li {
    margin: 0;
    padding: 0;
    list-style-type: disc;
  }
  .genie-mjs1 ul li {
    margin: 0 0 0 16px;
    padding: 0;
  }
  
  .genie-mjs1 .txtBold {
    font-weight: 700;
  }
  .genie-mjs1 .padded-line {
    display: block;
  }
  .genie-mjs1 .mt5 {
    margin-top: 5px;
  }
  .genie-mjs1 .txtRight {
    text-align: right;
  }
  
  .genie-mjs1 table.skills,
  .genie-mjs1 .table_wrapper {
    margin-top: 0;
    width: 100%;
    word-break: break-all;
  }
  .genie-mjs1 table.skills th,
  .genie-mjs1 table.skills td {
    text-align: center;
    width: 20%;
  }
  .genie-mjs1 table.skills .skill-name,
  .genie-mjs1 table.skills .skill-rating {
    text-align: left;
    width: 35%;
  }
  .genie-mjs1 table.skills .skill-rating {
    width: 20%;
  }
  .genie-mjs1 table.skills .skill-years,
  .genie-mjs1 table.skills .skill-last {
    width: 19%;
  }
  .genie-mjs1 table.skills .pad1 {
    width: 5%;
  }
  .genie-mjs1 table.skills .pad2,
  .genie-mjs1 table.skills .pad3 {
    width: 1%;
  }
  .genie-mjs1 {
    color: #343434;
    font-variant-ligatures: none;
    line-height: 16px;
    min-height: 1024px;
    box-sizing: border-box;
  }
  .genie-mjs1 .name {
    font-weight: 700;
    padding: 0;
    position: relative;
    text-align: left;
    word-wrap: break-word;
  }
  .genie-mjs1 .address .single-column {
    margin-left: 0 !important;
  }
  .genie-mjs1 .heading {
    font-weight: 700;
    line-height: 15px;
    margin-bottom: 10px;
  }
  .genie-mjs1 .section-title {
    word-break: break-word;
  }
  .genie-mjs1 .degreeGap {
    margin-bottom: 4px;
  }
  .genie-mjs1 .locationGap {
    margin-top: 4px;
  }
  .genie-mjs1 .first-section {
    padding-top: 0 !important;
  }
  .genie-mjs1 .section:empty {
    display: none;
  }
   
  .genie-mjs1 .left-box {
    display: table-cell;
    padding: 15px;
    box-sizing: initial;
    background: #A81A2B !important;
    width: 154px;
  }
  .genie-mjs1 .left-box .section {
    position: relative;
    color: #fff;
  }
  .genie-mjs1 .left-box .heading {
    line-height: 1.5;
    margin-left: -15px;
    margin-right: -15px;
    padding: 0 15px;
    position: relative;
  }
  .genie-mjs1 .left-box .heading:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    filter: brightness(0.8);
  }
  .genie-mjs1 .left-box .section-title {
    padding: 3px 0;
    text-align: left;
    position: relative;
  }
  .genie-mjs1 .left-box .SECTION_CNTC {
    padding-top: 20px !important;
  }
  .genie-mjs1 .parentContainer {
    border-collapse: collapse;
    display: table;
    min-height: inherit;
    table-layout: fixed;
    width: 100%;
  }
  
  .genie-mjs1 .right-box {
    display: table-cell;
    letter-spacing: 0.2px;
    padding: 15px;
    vertical-align: top;
  }
  .genie-mjs1 .right-box .section:first-child {
    padding-top: 0;
  }
  .genie-mjs1 .right-box .heading {
    border-bottom: 1px solid #d5d6d6;
    border-top: 1px solid #d5d6d6;
    letter-spacing: 0;
    padding: 5px 0;
  }
  .genie-mjs1 .right-box .section-title {
    color: #A81A2B;
  }
  .genie-mjs1 .right-box .padded-line.date-content {
    position: absolute;
    margin-left: 0;
    width: 65px;
  }
  .genie-mjs1 .paragraph .single-column {
    position: relative;
  }
  .genie-mjs1 .right-box .summary .paragraph .single-column {
    margin-left: 0;
  }
  .genie-mjs1 .education .job-location,
  .genie-mjs1 .txtItl {
    font-style: italic;
  }
  
  .genie-mjs1 > div {
    min-height: inherit;
  }
  #displayResume .genie-mjs1 {
    min-height: 1024px;
  }
  .genie-mjs1 .left-box .active * {
    color: #343434;
  }
  
  .genie-mjs1 .parentContainer {
    height: 1px;
  }
  .genie-mjs1 .word-break {
    word-wrap: break-word;
  }
  
  .genie-mjs1 .left-box .outer-square,
  .genie-mjs1 right-box .outer-square,
  .genie-mjs1 .left-box .inner-square,
  .genie-mjs1 .right-box .inner-square {
    height: 7px;
    position: relative;
  }
  .genie-mjs1 .left-box .inner-square {
    background: #fff;
  }
  
  .genie-mjs1 .right-box .outer-square {
    background: #d6d6d6;
  }
  .genie-mjs1 .right-box .inner-square {
    filter: brightness(0.8);
  }
  
  .genie-mjs1 .right-box .hide-dates {
    visibility: hidden;
    position: static !important;
    display: block;
    float: left;
  }
  .genie-mjs1 .left-box .hide-dates {
    display: none;
  }
  .genie-mjs1 .paragraph.dates-para:after {
    content: "";
    display: table;
    clear: both;
  }
  
  .genie-mjs1,
  .genie-mjs1 table {
    line-height: 18px;
  }
  .genie-mjs1.pagesize {
    width: 792px;
  }
  .genie-mjs1.font-face {
    font-family: "Century Gothic", Helvetica, sans-serif;
  }
  .genie-mjs1.fontsize {
    font-size: 11px;
  }
  .genie-mjs1 .section {
    padding-top: 20px;
  }
  .genie-mjs1 .first-paragraph {
    margin-top: 0 !important;
  }
  .genie-mjs1 .paragraph {
    margin-top: 10px;
  }
  .genie-mjs1 .single-column,
  .genie-mjs1 .main-column {
    word-wrap: break-word;
  }
  .genie-mjs1 .right-box .single-column,
  .genie-mjs1 .right-box .main-column {
    margin-left: 0px;
  }
  .genie-mjs1 table.skills td {
    padding-top: 5px;
  }
  .genie-mjs1 .job-title,
  .genie-mjs1 .degree,
  .genie-mjs1 .program-line {
    font-size: 14px;
  }
  .genie-mjs1 .name {
    font-size: 28px;
    line-height: 34.5px;
  }
  .genie-mjs1 .heading {
    line-height: 22px;
  }
  .genie-mjs1 .section-title {
    font-size: 16px;
  }
  .genie-mjs1 .resumeTitle {
    font-size: 14px;
    padding-top: 3px;
  } 
  .genie-mjs1 .left-box .section {
    padding-top: 20px;
  }
  .genie-mjs1 .left-box .heading {
    line-height: 22px;
  }
  .genie-mjs1 .left-box .heading:before {
    background: #A81A2B;
  }
  .genie-mjs1 .left-box .outer-square:before {
    content: "";
    position: absolute;
    height: 7px;
    width: 100%;
    filter: brightness(0.8);
  }
  
  .genie-mjs1 .right-box .paragraph .single-column {
    margin-left: 91px;
  }
  .genie-mjs1 .right-box .padded-line.date-content {
    left: -91px;
  }
  .genie-mjs1 .right-box .section-title {
    color: #A81A2B;
  }
  .genie-mjs1 .right-box .inner-square {
    background: #A81A2B;
  }
  
  .genie-mjs1 .right-box .sortable-item {
    padding-top: 20px;
  }
  .genie-mjs1 .left-box > .sortable-item.active > .wrapper .heading:before {
    background: none;
  }
  .genie-mjs1 .left-box .sortable-item.active .outer-square:before {
    background: #d6d6d6;
  }
  
  .genie-mjs1._single-parent-drag > .wrapper-bg + div {
    position: relative;
    z-index: 8;
  }
  .genie-mjs1._single-parent-drag .outer-square:before {
    background: #d6d6d6;
    content: "";
    position: absolute;
    height: 7px;
    width: 100%;
    filter: brightness(0.8);
  }
  .genie-mjs1._single-parent-drag .wrapper-bg + div .paragraph {
    margin-top: 0;
  }
  .genie-mjs1 .outer-square,
  .genie-mjs1 .inner-square {
    height: 7px;
    position: relative;
  }
  .genie-mjs1 .parent-drag.active .wrapper,
  .genie-mjs1 .sortable-item .section-title {
    position: relative;
  }
  </style>
  </head>
  <body>
  <section class="page-wrap">
  <div class="genie-mjs1 fontsize font-face vmargins pagesize">
    <div class="parentContainer">
      <div class="left-box last-box GAKpdf-box">
        <div class="section notdraggable first-section">
          <div class="paragraph first-paragraph">
            <div class="name word-break">
              <span class="field">${personDetail.firstName}</span>
              <span> </span>
              <span class="field word-break">${personDetail.lastName}</span>
            </div>
            <div class="resumeTitle">${jobPosition}</div>
          </div>
        </div>
        <div class="section SECTION_CNTC notdraggable">
          <div class="heading">
            <div class="section-title">Contact</div>
          </div>
          <div class="paragraph PARAGRAPH_CNTC first-paragraph">
            <div class="address">
              <div class="single-column">
                <div>
                  <div class="txtBold">Address</div>
                  <div class="field"></div>
                  <span class="field">${personDetail.city}</span>
                  <span>, </span>
                  <span class="field">${personDetail.country}</span>
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
        <div class="section">

          <div class="paragraph first-paragraph">
           
                  ${renderSkills()}
                
          </div>
          <Br/>
          <div class="paragraph first-paragraph">
            
                  ${renderHobbies()}
                
          </div>
        </div>
      </div>
      <div class="right-box last-box">
        <div class="section summary notdraggable">
          <div class="paragraph first-paragraph">
            <div class="field single-column">
              <p class="summary">${userSummary}</p>
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
          ${renderCertificate() || ""}
        </div>
        <div class="section education">
          ${renderAwards() || ""}
        </div>
        <div class="section education">
          ${renderReferences() || ""}
        </div>
      </div>
    </div>
  </div>
</section>
  </body>
</html>`;
}
