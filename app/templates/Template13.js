export function template13(resume) {
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
      
       <span class="section-title">Certification</span>
     </div>
   <div class="paragraph dates-para first-paragraph">
     <div class="padded-line date-content">
       <span class="jobdates" format="%Y-%m"></span
       ><span class="jobdates" format="%Y-%m"></span>
     </div>
          ${certificates
            .map(
              (element) => `
         
              <p>${element.certificate} (${element.institute})
              
              ${element.Year}${cleanMonth(element.fromMonth)} </p>
          
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
      
       <span class="section-title">Awards</span>
      </div>
   <div class="paragraph dates-para first-paragraph">
     <div class="padded-line date-content">
       <span class="jobdates" format="%Y-%m"></span
       ><span class="jobdates" format="%Y-%m"></span>
     </div>
          ${awards
            .map(
              (element) => `
         
              <p>${element.awards} (${element.institute})  - ${element.Year}</p>
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
     
     <span class="section-title">Reference</span>
    </div>
   <div class="paragraph dates-para first-paragraph">
     <div class="padded-line date-content">
       <span class="jobdates" format="%Y-%m"></span
       ><span class="jobdates" format="%Y-%m"></span>
     </div>
          ${references
            .map(
              (element) => `
         
              <span>${element.reference}</span>
              <span>${element.institute}</span>
          
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
          <span class="section-title">Skills</span>
        </div>
        <div class="paragraph">
          ${skills.map((element) => element.name).join(", ")}
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
        <div class="paragraph">
          ${hobbies.map((element) => element.name).join(", ")}
        </div>`;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";
    if (experience.length > 0) {
      result += `
        <div class="heading">
          <div class="section-title">Work History</div>
        </div>`;

      experience.forEach((element) => {
        result += `
          <div class="paragraph dates-para first-paragraph">
            <div class="padded-line date-content">
              <span>${element.fromYear}</span>
              <span>${cleanMonth(element.fromMonth)}</span>
              <span>${element.toYear}</span>
              <span>${cleanMonth(element.toMonth)}</span>
            </div>
            <div class="single-column">
              <span class="padded-line">
                <span class="job-title txtBold">${element.position}</span>
              </span>
              <span class="padded-line locationGap txtItl">
                <span class="companyname">${element.company}</span>
                <span>, </span>
                <span class="jobcity">${element?.city ?? []}</span>
                <span></span>
                <span class="jobstate"></span>
              </span>
              <span class="jobline">
                <ul>`;

        var roles = "";
        (element?.roles ?? []).forEach((role) => {
          roles += `<li>${role}</li>`;
        });
        result += `${roles}</ul></span>
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
      <div class="section-title">Education</div>
    </div>`;

      education.forEach((element) => {
        result += `
        <div class="paragraph dates-para first-paragraph">
          <div class="single-column">
            <span class="padded-line">
              <span class="job-title txtBold">${element.degree}</span>
            </span>
            <span class="padded-line locationGap txtItl">
              <span class="companyname">${element.university}</span>
              <span>, </span>
              <span class="jobcity">${element?.city ?? []}</span>
              <span></span>
              <span class="jobstate"></span>
            </span>
            <p class="dates">${element.fromYear} - ${element.toYear}</p>
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
        .genie-mjs3 ol,
        .genie-mjs3 ul {
          list-style: none;
        }
        .genie-mjs3 table {
          border-collapse: collapse;
          border-spacing: 0;
          font-size: inherit;
          color: inherit;
          width: 100%;
        }
        .genie-mjs3 .txtBold {
          font-weight: 700;
        }
        .genie-mjs3 .padded-line {
          display: block;
        }
        .genie-mjs3 .mt5 {
          margin-top: 5px;
        }
        .genie-mjs3 .word-break {
          word-wrap: break-word;
        }
        .genie-mjs3 ul,
        .genie-mjs3 li {
          margin: 0;
          padding: 0;
          list-style-type: disc;
        }
        .genie-mjs3 ul li {
          margin: 0 0 0 16px;
          padding: 0;
        }
        .genie-mjs3 table.skills,
        .genie-mjs3 .table_wrapper {
          margin-top: 0;
          width: 100%;
          word-wrap: break-word;
        }
        .genie-mjs3 table.skills th,
        table.skills td {
          text-align: center;
          width: 20%;
        }
        .genie-mjs3 table.skills .skill-name,
        .genie-mjs3 table.skills .skill-rating {
          text-align: left;
          width: 35%;
        }
        .genie-mjs3 table.skills .skill-rating {
          width: 20%;
        }
        .genie-mjs3 table.skills .skill-years,
        .genie-mjs3 table.skills .skill-last {
          width: 19%;
        }
        .genie-mjs3 table.skills .pad1 {
          width: 5%;
        }
        .genie-mjs3 .skills .pad2,
        .genie-mjs3 table.skills .pad3 {
          width: 1%;
        }
        .genie-mjs3 {
          box-sizing: border-box;
          color: #343434;
          font-variant-ligatures: none;
          line-height: 16px;
          min-height: 1024px;
          word-wrap: break-word;
        }
        .genie-mjs3 .name {
          color: #252932;
          font-weight: 700;
          padding: 0;
          position: relative;
          text-align: left;
          word-wrap: break-word;
        }
        .genie-mjs3 .address .single-column {
          margin-left: 0 !important;
        }
        .genie-mjs3 .heading {
          border-bottom: 1px solid #d5d6d6;
          font-weight: 700;
          letter-spacing: 0;
          line-height: 15px;
          margin-bottom: 10px;
          padding-bottom: 2px;
        }
        .genie-mjs3 .section-title {
          color: #252932;
          word-wrap: break-word;
          display: inline-block;
          vertical-align: middle;
        }
        .genie-mjs3 .degreeGap {
          margin-bottom: 4px;
        }
        .genie-mjs3 .locationGap {
          margin-top: 4px;
        }
        .genie-mjs3 .first-paragraph {
          margin-top: 0 !important;
        }
        .genie-mjs3 .section:empty {
          display: none;
        }
        .genie-mjs3 .parentContainer {
          border-collapse: collapse;
          display: table;
          min-height: inherit;
          table-layout: fixed;
          width: 100%;
        }
        .genie-mjs3 .left-box,
        .genie-mjs3 .right-box {
          padding-left: 15px;
          padding-top: 20px;
        }
        .genie-mjs3 .left-box,
        .genie-mjs3 .right-box {
          padding-left: 15px;
          padding-top: 20px;
        }
        .genie-mjs3 .left-box {
          display: table-cell;
          letter-spacing: 0.2px;
          padding-left: 0;
          padding-right: 15px;
          vertical-align: top;
          box-sizing: initial;
        }
        .genie-mjs3 .right-box .padded-line.date-content {
          position: absolute;
          font-weight: 700;
          margin-left: 0;
          width: 65px;
        }
        .genie-mjs3 .paragraph {
          position: relative;
        }
        .genie-mjs3 .right-box {
          display: table-cell;
          letter-spacing: 0.2px;
          vertical-align: top;
        }
        .genie-mjs3 .first-section {
          padding-top: 0 !important;
        }
        .genie-mjs3 .right-box .section:first-child,
        .genie-mjs3 .left-box .section:first-child {
          padding-top: 0px !important;
        }
        .genie-mjs3 .education .job-location,
        .genie-mjs3 .txtItl {
          font-style: italic;
        }
        .genie-mjs3 .summary .single-column {
          margin-left: 0;
        }
        .genie-mjs3 .summary.section {
          padding-top: 15px;
        }
        .genie-mjs3 .resumetitle {
          color: #252932;
          padding-top: 10pt;
        }
        .genie-mjs3 .ratingWrapper svg {
          height: 10px;
          stroke: #252932;
        }
        .genie-mjs3 .headingIcon svg circle,
        .genie-mjs3 .ratingWrapper svg .default-fill {
          fill: #252932;
        }
        .genie-mjs3 .ratingRow {
          position: relative;
          white-space: nowrap;
        }
        .genie-mjs3 .ratingRow .ratingText,
        .genie-mjs3 .ratingRow .ratingWrapper {
          width: 50%;
          display: inline-block;
          word-wrap: break-word;
          white-space: normal;
          vertical-align: top;
        }
        .genie-mjs3 .ratingRow .ratingText + .ratingWrapper {
          text-align: right;
          line-height: normal;
          margin-top: 4px;
        }
        .genie-mjs3 .headingIcon {
          display: inline-block;
          vertical-align: middle;
          margin-right: 3px;
        }
        .genie-mjs3 .headingIcon svg {
          height: 30px;
          width: 30px;
          display: block;
        }
        .genie-mjs3 .headingIcon svg path {
          fill: #fff;
        }
        .genie-mjs3 .right-box .hide-dates {
          visibility: hidden;
          position: static !important;
          display: block;
          float: left;
        }
        .genie-mjs3 .left-box .hide-dates {
          display: none;
        }
        .genie-mjs3 .paragraph.dates-para:after {
          content: "";
          display: table;
          clear: both;
        }
        .genie-mjs3 .ratingRow .ratingText:last-child {
          width: 100%;
        }
        .genie-mjs3,
        .genie-mjs3 table {
          line-height: 18px;
        }
        .genie-mjs3.pagesize {         width: 792px;
        }
        .genie-mjs3.font-face {
          font-family: "Century Gothic", Helvetica, sans-serif;
        }
        .genie-mjs3.fontsize {
          font-size: 11px;
        }
        .genie-mjs3.vmargins {
          padding-top: 25px;
          padding-bottom: 25px;
        }
        .genie-mjs3.hmargins {
          padding-left: 22px;
          padding-right: 22px;
        }
        .genie-mjs3 .section {
          padding-top: 20px;
        }
        .genie-mjs3 .left-box .section:after {
          padding-bottom: 10px;
        }
        .genie-mjs3 .paragraph {
          margin-top: 10px;
        }
        .genie-mjs3 .single-column,
        .genie-mjs3 .main-column {
          word-wrap: break-word;
        }
        .genie-mjs3 .right-box .single-column,
        .genie-mjs3 .right-box .main-column {
          margin-left: 0px;
        }
        .genie-mjs3 table.skills td {
          padding-top: 5px;
        }
        .genie-mjs3 .jobdates {
          font-size: 11px;
        }
        .genie-mjs3 .job-title,
        .genie-mjs3 .degree,
        .genie-mjs3 .program-line {
          font-size: 14px;
        }
        .genie-mjs3 .name {
          color: #252932;
          font-size: 36px;
          line-height: 39.5px;
        }
        .genie-mjs3 .heading {
          line-height: 23px;
        }
        .genie-mjs3 .section-title,
        .genie-mjs3 .resumeTitle {
          font-size: 20px;
          color: #252932;
        }
        .genie-mjs3 .left-box {
          width: 156px;
        }
        .genie-mjs3 .right-box .paragraph .single-column {
          margin-left: 91px;
        }
        #displayResume .genie-mjs3 {
          min-height: 1024px;
        }
        .genie-mjs3 > div {
          min-height: inherit;
        }
        .genie-mjs3 .left-box .sortable-item:first-child > .wrapper > .section,
        .genie-mjs3 .right-box .sortable-item:first-child > .wrapper > .section {
          padding-top: 0 !important;
        }
        .genie-mjs3 > div:not(.top-section),
        .genie-mjs3 > div:not(.parentContainer) {
          min-height: auto;
        }
        .genie-mjs3 .parentContainer .left-box > .sortable-item,
        .genie-mjs3 .parentContainer .right-box > .sortable-item {
          padding-top: 20px;
        }
        .genie-mjs3 .parentContainer .left-box > .sortable-item:first-child,
        .genie-mjs3 .parentContainer .right-box > .sortable-item:first-child {
          padding-top: 0;
        }
        .genie-mjs3 .parentContainer .sortable-item.active .heading.section-title {
          display: inline;
        }
        .GAK3.genie-mjs3 .sortable-item.active .section-title {
          display: inline;
        }
        .genie-mjs3 .ratingWrapper svg {
          stroke: #252932;
        }
        .genie-mjs3 .headingIcon svg circle,
        .genie-mjs3 .ratingWrapper svg .default-fill {
          fill: #252932;
        }
        .summary{
          font-size:16px
        }
    </style>
    <title></title>
  </head>
  <body>
    <section class="page-wrap">
      <div class="genie-mjs3 fontsize font-face vmargins hmargins pagesize">
        <div class="top-section">
          <div class="last-box">
            <div class="section notdraggable first-section">
              <div class="paragraph first-paragraph">
                <div class="name word-break">
                  <span class="field word-break">${
                    personDetail.firstName
                  } ${" "}${personDetail.lastName}</span>
                </div>
                <div class="resumeTitle">${jobPosition}</div>
              </div>
            </div>
            <div class="section summary notdraggable">
              <div class="paragraph first-paragraph">
                <div class="field single-column">
                  <p class="summary">${userSummary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="parentContainer">
          <div class="left-box last-box">
            <div class="section SECTION_CNTC notdraggable">
              <div class="heading">
                <span class="section-title">Contact</span>
              </div>
              <div class="paragraph PARAGRAPH_CNTC first-paragraph">
                <div class="address">
                  <div class="single-column">
                    <div>
                      <div class="txtBold">
                        Address
                      </div>
                      <div class="field"></div><span class="field">${
                        personDetail.city
                      }</span><span>,</span> <span class="field">${
    personDetail.country
  }</span>
                    </div>
                    <div class="txtBold mt5">
                      Phone
                    </div>
                    <div>
                      <span class="field">${personDetail.phone}</span>
                    </div>
                    <div class="txtBold mt5">
                      E-mail
                    </div>
                    <div class="word-break">
                      <span class="field">${personDetail.email}</span>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                <div class="section">
                  
                  
                          ${renderSkills()}
                       
                </div>

                <div class="section">
                 
                      ${renderHobbies()}
                    
              
                </div>
             <br/>
              <div >
              ${renderCertificate()}
              </div>
              <div >
              ${renderAwards()}
              </div>
              <div >
              ${renderReferences()}
              </div>
              

            </div>

                  <div class="right-box last-box">
                    <div class="section experience">
                      ${renderExperience()}
                   
                    </div>
     
        
                   <div class="section education">
                  ${renderEducation()}
                
                   </div>

                 </div>
        
      </div>
      
    </section>
  </body>
  </html>`;
}
