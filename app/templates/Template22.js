export function template22(resume) {
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
             class="companyname"
        
             >${element.institute}</span
            ><span> - </span>
           <span class="companyname">${element.Year}${cleanMonth(
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
             class="companyname"
             
             >${element.institute}</span
           ><span> - </span>
           <span class="companyname">${element.Year}</span
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
             class="companyname"
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
      result += `
        <div class="heading">
          <div class="section-title">
            Work History
          </div>
        </div>`;

      experience.forEach((element) => {
        result += ` <div class="paragraph first-paragraph">
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
              <span class="job-title txtBold">${element.position}</span>
            </span>
            <span class="padded-line txtItalics pb5">
              <span class="companyname">${element.company}</span><span>, </span
              ><span class="companyname">${element?.city ?? []}</span
              ><span></span
              ><span class="job-location jobstate"></span>
            </span>
            <span class="padded-line">
              <span class="jobline">
                <ul>`;

        var roles = "";
        (element?.roles ?? []).forEach((role) => {
          roles += `<li class="companyname">${role}</li>`;
        });
        result += `${roles}</ul></span>
            </span> 
          </div>
        </div><br/> `;
      });
    }
    return result;
  }

  function renderEducation() {
    var result = "";
    if (education.length > 0) {
      result += `
        <div class="heading">
          <div class="section-title">
            Education
          </div>
        </div>`;

      education.forEach((element) => {
        result += `<div class="single-column">
            <span class="padded-line">
              <span class="degree"></span>
              <span class="program-line">${element.degree}</span>
            </span>
            <span class="padded-line txtItalics">
              <span class="companyname">${element.university}</span>
              <span>, </span>
              <span class="companyname">${element?.city ?? []}</span>
              <span> - </span>
              <span class="companyname">${element.fromYear} - ${
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
        .genie-ak3 ol,
        .genie-ak3 ul {
          list-style: none;
        }
        .genie-ak3 table {
          border-collapse: collapse;
          border-spacing: 0;
          font-size: inherit;
          color: inherit;
          width: 100%;
        }
  
        .genie-ak3 ul,
        .genie-ak3 li {
          margin: 0;
          padding: 0;
          list-style-type: disc;
        }
        .genie-ak3 ul li {
          margin: 0 0 0 16px;
          padding: 0;
        }
  
        .genie-ak3 table.skills,
        .genie-ak3 .table_wrapper {
          width: 100%;
          margin-top: 0;
          word-wrap: break-word;
        }
        .genie-ak3 table.skills th,
        table.skills td {
          width: 20%;
          text-align: center;
        }
        .genie-ak3 table.skills .skill-name,
        .genie-ak3 table.skills .skill-rating {
          text-align: left;
          width: 35%;
        }
        .genie-ak3 table.skills .skill-rating {
          width: 20%;
        }
        .genie-ak3 table.skills .skill-years,
        .genie-ak3 table.skills .skill-last {
          width: 19%;
        }
        .genie-ak3 table.skills .pad1 {
          width: 5%;
        }
        .genie-ak3 .skills .pad2,
        .genie-ak3 table.skills .pad3 {
          width: 1%;
        }
  
        .genie-ak3 {
          box-sizing: border-box;
          color: #343434;
          font-variant-ligatures: none;
          line-height: 16px;
          min-height: 1024px;
          padding: 20px;
          word-wrap: break-word;
        }
        .genie-ak3 .name {
          color: #003d73;
          font-weight: 700;
          padding: 0;
          position: relative;
          text-align: left;
          word-wrap: break-word;
        }
        .genie-ak3 .address .single-column {
          margin-left: 0 !important;
        }
        .genie-ak3 .heading {
          border-bottom: 1px solid #d5d6d6;
          font-weight: 700;
          letter-spacing: 0;
          line-height: 15px;
          margin-bottom: 10px;
          padding: 0 0 3px;
        }
        .genie-ak3 .section-title {
          color: #003d73;
          word-wrap: break-word;
        }
        .genie-ak3 .first-section,
        .genie-ak3 .SECTION_CNTC {
          padding-top: 0 !important;
        }
        .genie-ak3 .education .job-location {
          font-style: italic;
        }
        .genie-ak3 .resumeTitle {
          color: #003d73;
          padding: 7px 0 15px;
          font-style: italic;
        }
  
        .genie-ak3 .left-box {
          display: table-cell;
          padding: 0;
          position: relative;
        }
        .genie-ak3 .left-box .section {
          position: relative;
        }
        .genie-ak3 .left-box .section-title {
          text-align: left;
        }
        .genie-ak3 .right-box {
          display: table-cell;
          letter-spacing: 0.2px;
          padding: 0 0 0 18px;
          vertical-align: top;
        }
        .genie-ak3 .right-box .section {
          border-left: 1px solid #d5d6d6;
          padding-left: 23px;
          position: relative;
        }
        .genie-ak3 .right-box .section:first-child {
          padding-top: 0;
        }
        .genie-ak3 .parentContainer {
          border-collapse: collapse;
          display: table;
          min-height: inherit;
          table-layout: fixed;
          width: 100%;
        }
        .genie-ak3 .parentContainer .left-box,
        .genie-ak3 .parentContainer .right-box {
          padding-bottom: 20px;
          padding-top: 20px;
        }
        .genie-ak3 .parentContainer .left-box {
          padding-right: 10px;
        }
  
        .genie-ak3 .top-section .right-box .section {
          border: 0;
          padding-left: 0;
        }
        .genie-ak3 .parentContainer .right-box .section:first-child:before {
          background: #fff;
          content: "";
          height: 21px;
          left: -3px;
          position: absolute;
          top: 0;
          width: 5px;
          z-index: 1;
        }
        .genie-ak3 .right-box .section .icon-heading,
        .genie-ak3 .right-box .section:first-child .icon-heading {
          height: 25px;
          left: -8px;
          position: absolute;
          top: 3px;
          width: 25px;
          z-index: 10;
        }
        .genie-ak3 .icon1{opacity:.75}
        .genie-ak3 .right-box .section .icon-heading {
          top: 14px;
        }
        .genie-ak3 .right-box .padded-line.date-content {
          position: absolute;
          font-weight: 700;
          margin-left: 0;
          width: 65px;
        }
        .genie-ak3 .paragraph .single-column {
          position: relative;
        }
        .genie-ak3 .section:empty,
        .genie-ak3 .parentContainer .left-box svg {
          display: none;
        }
        .genie-ak3 .top-section .left-box,
        .genie-ak3 .top-section .right-box {
          width: 50%;
          float: left;
          box-sizing: border-box;
        }
        .genie-ak3 .right-box .education .paragraph,
        .genie-ak3 .right-box .experience .paragraph,
        .genie-ak3 .right-box .summary .paragraph {
          margin-left: 0;
        }
        .genie-ak3 .right-box .summary .single-column {
          margin-left: 0 !important;
        }
  
        .genie-ak3 .left-box .section {
          position: relative;
        }
  
        .genie-ak3 .parentContainer svg.rating {
          display: inline-block;
          height: 11px;
          box-sizing: content-box;
        }
        .genie-ak3 .rating-wrapper {
          position: relative;
          white-space: nowrap;
        }
        .genie-ak3 .rating-text {
          word-wrap: break-word;
        }
        .genie-ak3 .rating-text,
        .genie-ak3 .rating-svg {
          width: 50%;
          display: inline-block;
          word-wrap: break-word;
          white-space: normal;
          vertical-align: top;
        }
        .genie-ak3 .rating-svg {
          text-align: right;
          line-height: normal;
        }
        .genie-ak3 .rating-text:last-child {
          width: 100%;
        }
  
        .genie-ak3 .txtBold {
          font-weight: bold;
        }
        .genie-ak3 .txtItl {
          font-style: italic;
        }
        .genie-ak3 .padded-line {
          display: block;
        }
        .genie-ak3 .pt5 {
          padding-top: 5px;
        }
        .genie-ak3 .ptb3 {
          padding: 3px 0;
        }
        .genie-ak3 .word-break {
          word-wrap: break-word;
        }
  
        #displayResume .genie-ak3 {
          min-height: 1024px;
        }
        .genie-ak3 > div {
          min-height: inherit;
        }
  
        .genie-ak3
          .parentContainer
          .right-box
          > .sortable-item
          .section
          .icon-heading {
          top: 3px;
        }
        .genie-ak3
          .parentContainer
          .right-box
          > .sortable-item:first-child
          .section
          .icon-heading {
          top: 3px;
        }
        .genie-ak3
          .parentContainer
          .left-box
          > .sortable-item:first-child
          .section,
        .genie-ak3
          .parentContainer
          .right-box
          > .sortable-item:first-child
          .section {
          padding-top: 0;
        }
        .genie-ak3
          .parentContainer
          .right-box
          > .sortable-item
          .section:first-child:before {
          background: none;
        }
        .genie-ak3
          .parentContainer
          .right-box
          > .sortable-item:first-child
          .section:before {
          height: 20px;
          top: -3px;
          background: #fff;
        }
        .genie-ak3 > div:not(.top-section),
        .genie-ak3 > div:not(.parentContainer) {
          min-height: auto;
        }
        .genie-ak3 .rating .default-fill {
          fill: #003d73;
        }
        .genie-ak3 .sortable-item .rating-wrapper {
          display: block;
        }
        .genie-ak3 .sortable-item .rating-wrapper > div{display:flex;position:relative;white-space:nowrap}
  
        .genie-ak3,
        .genie-ak3 table {
          line-height: 18px;
        }
        .genie-ak3.pagesize {         width: 792px;
        }
        .genie-ak3.font-face {
          font-family: "Century Gothic", Helvetica, sans-serif;
        }
        .genie-ak3.fontsize {
          font-size: 11px;
        }
        .genie-ak3 .section {
          padding-top: 20px;
        }
        .genie-ak3 .first-paragraph {
          margin-top: 0 !important;
        }
        .genie-ak3 .paragraph {
          margin-top: 20px;
        }
        .genie-ak3 .single-column,
        .genie-ak3 .main-column {
          word-wrap: break-word;
        }
        .genie-ak3 .right-box .single-column,
        .genie-ak3 .right-box .main-column {
          margin-left: 0px;
        }
        .genie-ak3 table.skills td {
          padding-top: 10px;
        }
        .genie-ak3 .job-title,
        .genie-ak3 .degree,
        .genie-ak3 .program-line {
          font-size: 15px;
          font-weight: bold;
          b
        }
        .genie-ak3 .name {
          color: #003d73;
          font-size: 36px;
          line-height: 39.5px;
        }
        .genie-ak3 .heading {
          line-height: 22px;
        }
        .genie-ak3 .left-box .heading {
          line-height: 22px;
        }
        .genie-ak3 .section-title {
          font-size: 16px;
          color: #003d73;
        }
        .genie-ak3 .right-box .section .icon1,
        .genie-ak3 .right-box .section .icon2 {
          fill: #003d73;
        }
        .genie-ak3 .left-box {
          width: 153px;
        }
        .genie-ak3 .right-box .paragraph .single-column {
          margin-left: 91px;
        }
        .genie-ak3 .right-box .padded-line.date-content {
          left: -91px;
        }
        .genie-ak3 .rating-wrapper * {
          font-size: 11px;
        }
        .genie-ak3 .resumeTitle {
          color: #003d73;
          font-size: 18px;
        }
        .genie-ak3 .rating-wrapper {
          margin-top: 10px;
        }
  
        .genie-ak3 .parentContainer .left-box > .sortable-item .section,
        .genie-ak3 .parentContainer .right-box > .sortable-item .section {
          padding-top: 20px;
        }
        .genie-ak3
          .parentContainer
          .right-box
          > .sortable-item:first-child
          .section:before {
          background: #fff;
          content: "";
          height: 10px;
          left: -3px;
          position: absolute;
          top: 0;
          width: 5px;
          z-index: 1;
        }
        .genie-ak3 .parentContainer .left-box .sortable-item .section:before {
          right: 39.5px;
        }
        .genie-ak3 .parentContainer svg.rating {
          padding-top: 5.5px;
        }
        .genie-ak3.active svg.rating {
          height: 11px;
        }
        .genie-ak3 .rating .default-fill {
          fill: #003d73;
        }
        .genie-ak3 .right-box .doc-item .icon-heading {
          left: -32px;
        }.companyname{
          font-size: 14px;
        }


    </style>
    <title></title>
  </head>
  <body>
    <section class="page-wrap">
      <div class="genie-ak3 fontsize font-face vmargins hmargins pagesize">
        <div class="top-section">
          <div class="left-box last-box">
            <div class="section notdraggable first-section">
              <div class="paragraph first-paragraph">
                <div class="name word-break">
                 <span class="field word-break">${
                   personDetail.firstName
                 }${" "}${personDetail.lastName}</span>
                </div>
                <div class="resumeTitle">${jobPosition}</div>
              </div>
            </div>
          </div>
          <div class="right-box last-box">
            <div class="section summary notdraggable">
              <div class="paragraph first-paragraph">
                <div class="field single-column">
                  <p class"companyname">${userSummary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="parentContainer">
          <div class="left-box last-box">
            <div class="section SECTION_CNTC notdraggable">
              <div class="heading">
                <div class="section-title">
                  Contact
                </div>
              </div>
              <div class="paragraph PARAGRAPH_CNTC first-paragraph">
                <div class="address">
                  <div class="single-column">
                    <div>
                      <div class="txtBold">
                        Address
                      </div>
                      <div class="field"></div> <span class="field">${
                        personDetail.city
                      }</span><span>,</span> <span class="field">${
    personDetail.country
  }</span>
                    </div>
                    <div class="txtBold pt5">
                      Phone
                    </div>
                    <div>
                      <span class="field">${personDetail.phone}</span>
                    </div>
                    <div class="txtBold pt5">
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
                  <br/>
                    ${renderHobbies()}
                
            </div>
          </div>
          <div class="right-box last-box">
            <div class="section experience">
              
              ${renderExperience()}
            </div>
            <div class="section education">
             
              ${renderEducation()}
            </div>
            <div class="section education">
              ${renderCertificate()}
            </div>
            <div class="section education">
                ${renderAwards()}
            </div>
            <div class="section education">
              ${renderReferences()}
            </div>
           
          </div>
        </div>
      </div>
    </section>
  </body>
  </html>`;
}
