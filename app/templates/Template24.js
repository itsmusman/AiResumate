export function template24(resume) {
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
  <span class="headingIcon"></span
  ><span class="section-title">Certification</span>
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
                   class="companyname"
                   dependency="SCHO"
                   >${element.institute}</span
                 ><span> - </span>
                 <span class="companyname">${element.Year}</span
                 ><span></span
                 ><span class="job-location jobstate"></span></span
               ><span class="padded-line"><span class="field"></span></span>
               </div>`
                  )
                  .join("")}
                </div>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `
      <div class="section">
      <div class="heading">
        <span class="headingIcon"></span
        ><span class="section-title">Reference</span>
      </div>
                ${certificates
                  .map(
                    (element) =>
                      `<div class="single-column">
               <span class="padded-line"
                 ><span class="degree"></span><span class="program-line">${element.certificate}</span></span
               ><span class="padded-line txtItalics"
                 ><span
                   class="companyname"
                   >${element.institute}</span
                 ><span> </span>
                 
               </div>`
                  )
                  .join("")}
                </div>`;
    }
    return referencesHtml;
  }

  function renderSkills() {
    let skillsHtml = "";
    if (skills && skills.length > 0) {
      const hobbyNames = skills.map((element) => element.name);
      const hobbiesString = hobbyNames.join(", ");
      skillsHtml = `
      <div class="section">
      <div class="heading">
        <span class="headingIcon"></span
        ><span class="section-title">Skills</span>
      </div>
      <div class="single-column">
      <span class="padded-line"
        ></span
      ><span class="padded-line txtItalics"
        ><span
          class="companyname"
          >${hobbiesString}</span
        ><span> </span>
        
      </div>
      `;
    }
    return skillsHtml;
  }

  function renderHobbies() {
    let hobbyHtml = "";
    if (hobbies && hobbies.length > 0) {
      const hobbyNames = hobbies.map((element) => element.name);
      const hobbiesString = hobbyNames.join(", ");
      hobbyHtml = `
      <div class="section">
      <div class="heading">
        <span class="headingIcon"></span
        ><span class="section-title">Hobbies</span>
      </div>
      <div class="single-column">
      <span class="padded-line"
        ></span
      ><span class="padded-line txtItalics"
        ><span
          class="companyname"
          >${hobbiesString}</span
        ><span> </span>
        
      </div>
      `;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";
    if (experience.length > 0) {
      result += `
        <div class="section">
          <div class="heading">
            <span class="section-title">Work History</span>
          </div>`;

      experience.forEach((element) => {
        result += `<div class="paragraph first-paragraph">
            <span class="dates_wrapper">
              <span class="companyname">${element.fromYear} ${cleanMonth(
          element.fromMonth
        )}</span>
              <span> </span>
              <span class="companyname">${element.toYear} ${cleanMonth(
          element.toMonth
        )}</span>
            </span>
            <div class="single-column">
              <span class="padded-line pb5">
                <span class="job-title">${element.position}</span>
              </span>
              <span class="padded-line txtItalics pb5">
                <span class="companyname">${
                  element.company
                }</span><span>, </span>
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
          </div><br/> `;
      });

      result += `</div>`;
    }
    return result;
  }

  function renderEducation() {
    var result = "";
    if (education.length > 0) {
      result += `
        <div class="section">
          <div class="heading">
            <span class="section-title">Education</span>
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
              <span> </span>
              <span class="companyname companyname_educ" dependency="SCHO">${
                element?.city ?? []
              }</span>
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

      result += `</div>`;
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
        .genie-ak5 ol,
        .genie-ak5 ul {
          list-style: none;
        }
        .genie-ak5 table {
          border-collapse: collapse;
          border-spacing: 0;
          font-size: inherit;
          color: inherit;
          width: 100%;
        }
  
        .genie-ak5 ul,
        .genie-ak5 li {
          margin: 0;
          padding: 0;
          list-style-type: disc;
        }
        .genie-ak5 ul li {
          margin: 0 0 0 16px;
          padding: 0;
        }
  
        .genie-ak5 {
          box-sizing: border-box;
          word-wrap: break-word;
        }
        .genie-ak5 .name {
          color: #002e58;
          font-size: 15px;
          line-height: 17px;
          font-weight: bold;
          padding: 0;
          text-align: left;
        }
        .genie-ak5 .paragraph {
          position: relative;
          clear: both;
        }
        .genie-ak5 .heading {
          clear: both;
          font-weight: bold;
        }
        .genie-ak5 .section-title {
          color: #002e58;
          padding-left: 5px;
        }
        .genie-ak5 .address {
          position: relative;
          text-align: left;
          font-size: 0.917em;
          line-height: 1.25em;
          margin-top: 0;
          display: table;
          width: 100%;
          table-layout: fixed;
        }
        .genie-ak5 .table_wrapper {
          width: 100%;
          margin-top: 0;
        }
        .genie-ak5 table.twocol td {
          width: 50%;
        }
        .genie-ak5 table.skills {
          width: 100%;
        }
        .genie-ak5 table.skills th,
        .genie-ak5 table.skills td {
          width: 20%;
          text-align: center;
        }
        .genie-ak5 table.skills th {
          text-decoration: underline;
        }
        .genie-ak5 table.skills .skill-name,
        .genie-ak5 table.skills .skill-rating {
          text-align: left;
          width: 35%;
        }
        .genie-ak5 table.skills .skill-rating {
          width: 20%;
        }
        .genie-ak5 table.skills .skill-years,
        .genie-ak5 table.skills .skill-last {
          width: 19%;
        }
        .genie-ak5 table.skills .pad1 {
          width: 5%;
        }
        .genie-ak5 table.skills .pad2,
        .genie-ak5 table.skills .pad3 {
          width: 1%;
        }
        .genie-ak5 span.padded-line {
          display: block;
        }
        .genie-ak5 .txtRight {
          text-align: right;
          clear: both;
        }
        .genie-ak5 span.job-title,
        .genie-ak5 span.degree,
        .genie-ak5 span.program-line {
          font-weight: bold;
        }
        .genie-ak5 .mb5 {
          margin-bottom: 5px;
        }
        .genie-ak5 .address .txtBold {
          margin-right: 3px;
        }
        .genie-ak5 span.dates_wrapper {
          display: block;
          float: left;
          text-align: left;
          padding-right: 10px;
        }
        .genie-ak5 .txtBold {
          font-weight: bold;
        }
        .genie-ak5 .resumeTitle {
          text-align: left;
          color: #002e58;
          font-weight: 400;
        }
        .genie-ak5 td.twocol_2 {
          border-left: 1px solid #fefdfd;
        }
        .genie-ak5 .addressleft,
        .genie-ak5 .addressright {
          display: table-cell;
          width: 40%;
        }
  
        .genie-ak5 .headingIcon {
          position: relative;
          top: 10px;
        }
        .genie-ak5 .headingIcon svg {
          height: 30px;
          width: 30px;
        }
        .genie-ak5 .headingIcon svg rect {
          fill: #002e58;
        }
        .genie-ak5 .headingIcon svg path {
          fill: #fff;
        }
        .genie-ak5 .ratingfield p {
          display: inline;
        }
  
        .genie-ak5 .ratingBar {
          background: #d5d6d6;
          width: 150px;
          float: right;
          margin: 2px 0;
        }
        .genie-ak5 .innerRating {
          background-color: #002e58;
          height: 7px;
          width: 60%;
        }
        .genie-ak5 .rtngSec .txtRight {
          position: relative;
          top: -5px;
        }
  
        .genie-ak5,
        .genie-ak5 table {
          line-height: 16px;
        }
        .genie-ak5.pagesize {         width: 792px;
        }
        .genie-ak5.fontsize {
          font-size: 11px;
        }
        .genie-ak5.font-face {
          font-family: "Century Gothic", Helvetica, sans-serif;
        }
        .genie-ak5.vmargins {
          padding-top: 24px;
          padding-bottom: 24px;
        }
        .genie-ak5.hmargins {
          padding-left: 24px;
          padding-right: 24px;
        }
        .genie-ak5 .section {
          padding-top: 20px;
        }
        .genie-ak5 .address {
          font-size: 11px;
          line-height: 21px;
          padding-top: 10px;
        }
        .genie-ak5 .heading {
          padding-bottom: 15px;
        }
        .genie-ak5 .job-title,
        .genie-ak5 span.degree,
        .genie-ak5 span.program-line {
          font-size: 14px;
        }
        .genie-ak5 .paragraph {
          padding-top: 15px;
        }
        .genie-ak5 .rtngSec .paragraph {
          padding-top: 7px;
        }
        .genie-ak5 .first-section,
        .genie-ak5 .first-paragraph,
        .genie-ak5 .SECTION_CNTC {
          padding-top: 0 !important;
        }
        .genie-ak5 .single-column,
        .genie-ak5 .main-column {
          margin-left: 70px;
        }
        .genie-ak5 span.dates_wrapper {
          width: 60px;
          font-size: 11px;
          line-height: 17px;
        }
        .genie-ak5 .section-title,
        .genie-ak5 .resumeTitle {
          font-size: 18px;
          line-height: 21px;
          color: #002e58;
        }
        .genie-ak5 .name {
          font-size: 36px;
          line-height: 46px;
          color: #002e58;
        }
        .genie-ak5 table.skills td {
          padding-top: 7px;
        }
        .genie-ak5 .noPind {
          margin-left: 0;
        }
  
        .genie-ak5 .headingIcon svg rect {
          fill: #002e58;
        }
  
        .genie-ak5 .ratingBar {
          margin: 2px 0;
        }
        .genie-ak5 .innerRating {
          background-color: #002e58;
        }
  
        .genie-ak5 .sortable-item .single-column.main-column > span:first-child,
        .genie-ak5.active .single-column.main-column > span:first-child {
          display: inline-block;
          line-height: normal;
        }
        .genie-ak5
          .sortableInner
          .sortable-item.active
          > .wrapper-bg
          + div[data-section] {
          position: relative;
          z-index: 8;
        }
        .genie-ak5.active .headingIcon,
        .genie-ak5.GJS5 div.headingIcon {
          position: static;
          display: inline-block;
        } 
        
        .genie-ak5.active .section-title,
        .genie-ak5.GJS5 div.section-title {
          display: inline;
          vertical-align: middle;
        }
        
        .genie-ak5.active .wrapper-bg {
          left: -62px !important;
          right: -62px !important;
        }
        .genie-ak5.active .acrs-bdr {
          left: -60px !important;
        }
        .genie-ak5.active .acr-edit,
        .genie-ak5.active .acr-delete {
          left: -59px !important;
        }
        .genie-ak5.active .acr-move {
          right: -59px !important;
        }
        .companyname{
          font-size: 14px;
        }
    </style>
    <title></title>
  </head>
  <body>
    <section class="page-wrap">
      <div class="genie-ak5 fontsize font-face vmargins hmargins pagesize">
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
                    <div>
                      <span class="txtBold">Address</span><span class="spaced field">${
                        personDetail.city
                      }</span><span>, </span><span class="spaced field">${
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
               
                </div>
              </div>
            </div>
          </div>
      
        </div>
        <div class="parentContainer">
          <div>
            <div class="section notdraggable">
              <div class="paragraph first-paragraph">
              
                  <p class="companyname">${userSummary}</p>
          
              </div>
            </div>
            <div>

                    ${renderSkills()}
                    ${renderHobbies()}
   
            </div>
            <div class="section">
             ${renderExperience()}
            </div>
            ${renderEducation()}
            </div>
            <div> ${renderCertificate() ?? []}</div>
            <div>           ${renderAwards() ?? []}</div>
            <div>   ${renderReferences() ?? []}</div>
        
   
           
          </div>
        </div>
      </div>
    </section>
  </body>
  </html>`;
}
