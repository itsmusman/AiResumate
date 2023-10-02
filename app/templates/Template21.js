export function template21(resume) {
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
           }</span>, </span
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
      <div class="heading">
      <div class="section-title">Reference</div>
      </div>
          ${references
            .map(
              (element) =>
                `
<div class="paragraph rating-wrapper first-paragraph">
<div class="rating-text">
  <span class="padded-line">
  <span class="program-line">${element.reference}</span>
  <span
  class="companyname companyname_educ"
  dependency="SCHO"
  >${element.institute}</span>
  </span>
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
          <div class="section-title">Skills</div>
        </div>
        <div class="paragraph first-paragraph">
          <span class="padded-line">${skills
            .map((element) => element.name)
            .join(", ")}</span>
        </div>
      `;
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
          <span class="padded-line">${hobbies
            .map((element) => element.name)
            .join(", ")}</span>
        </div>
      `;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";
    if (experience && experience.length > 0) {
      result += `
        <div class="heading">
          <div class="section-title">Work History</div>
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
                <span class="companyname">${element.company}</span>
                <span>,</span>
                <span class="job-location jobcity">${element?.city ?? []}</span>
                <span></span>
                <span class="job-location jobstate"></span>
              </span>
              <span class="padded-line">
                <span class="jobline">
                  <ul>
                    ${element?.roles
                      ?.map((role) => `<li>${role}</li>`)
                      .join("")}
                  </ul>
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
        result += `
        <div class="paragraph first-paragraph">
          <div class="single-column">
            <span class="padded-line degreeGap txtBold">
              <span class="degree"></span>
              <span class="program-line">${element.degree}</span>
            </span>
            <div class="padded-line txtItl">
              <span class="companyname">${element.university}</span>
              <span>, </span>
              <span class="companyname">${element?.city ?? []}</span>
              <span> - </span>
              <span class="job-location jobcity">${element.fromYear} - ${
          element.toYear
        }</span>
              <span> </span>
              <span class="job-location jobstate"></span>
            </div>
            <span class="field"></span>
          </div>
        </div>
        <br/>
      `;
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

      .genie-ak2 ol,
      .genie-ak2 ul {
        list-style: none;
      }
      .genie-ak2 table {
        border-collapse: collapse;
        border-spacing: 0;
        font-size: inherit;
        color: inherit;
        width: 100%;
      }
      .genie-ak2 ul,
      .genie-ak2 li {
        margin: 0;
        padding: 0;
        list-style-type: disc;
      }
      .genie-ak2 ul li {
        margin: 0 0 0 16px;
        padding: 0;
      }
      .genie-ak2 table.skills,
      .genie-ak2 .table_wrapper {
        width: 100%;
        margin-top: 0;
        word-wrap: break-word;
      }
      .genie-ak2 table.skills th,
      table.skills td {
        width: 20%;
        text-align: center;
      }
      .genie-ak2 table.skills .skill-name,
      .genie-ak2 table.skills .skill-rating {
        text-align: left;
        width: 35%;
      }
      .genie-ak2 table.skills .skill-rating {
        width: 20%;
      }
      .genie-ak2 table.skills .skill-years,
      .genie-ak2 table.skills .skill-last {
        width: 19%;
      }
      .genie-ak2 table.skills .pad1 {
        width: 5%;
      }
      .genie-ak2 .skills .pad2,
      .genie-ak2 table.skills .pad3 {
        width: 1%;
      }
      .genie-ak2 {
        box-sizing: border-box;
        color: #343434;
        font-variant-ligatures: none;
        line-height: 16px;
        min-height: 1024px;
        position: relative;
        word-wrap: break-word;
      }
      .genie-ak2 .topbg {
        background: #003d73;
        box-sizing: border-box;
        color: #fff;
        font-size: 14px;
        margin-left: 0;
        margin-top: -22px;
        padding: 30px 0 20px 22px;
        position: relative;
        text-align: left;
        vertical-align: bottom;
        width: 100%;
      }
      .genie-ak2 .topbgborder {
        bottom: -10px;
        height: 14px;
        left: 23px;
        position: absolute;
        width: 26px;
      }
      .genie-ak2 .name {
        color: #003d73;
        font-weight: 700;
        padding: 60px 20px 0px;
        text-align: left;
        word-wrap: break-word;
      }
      .genie-ak2 .address .single-column {
        margin-left: 0 !important;
      }
      .genie-ak2 .heading {
        border-bottom: 1px solid #d5d6d6;
        font-weight: 700;
        letter-spacing: 0;
        line-height: 15px;
        margin-bottom: 10px;
        padding: 0 0 3px;
      }
      .genie-ak2 .section-title {
        color: #003d73;
        word-wrap: break-word;
      }
      .genie-ak2 .degreeGap {
        margin-bottom: 4px;
      }
      .genie-ak2 .locationGap {
        margin-top: 4px;
      }
      .genie-ak2 .first-section,
      .genie-ak2 .SECTION_CNTC {
        padding-top: 0 !important;
      }
      .genie-ak2 .education .job-location {
        font-style: italic;
      }
      .genie-ak2 .resumeTitle {
        color: #003d73;
        padding: 7px 20px 15px;
        font-style: italic;
      }
      .genie-ak2 .left-box {
        box-sizing: initial;
        display: table-cell;
        padding: 20px 10px 20px 15px;
        position: relative;
      }
      .genie-ak2 .left-box .section-title {
        text-align: left;
      }
      .genie-ak2 .left-box .section {
        position: relative;
      }
      .genie-ak2 .right-box {
        display: table-cell;
        letter-spacing: 0.2px;
        padding: 20px 20px 20px 18px;
        vertical-align: top;
      }
      .genie-ak2 .right-box .section {
        border-left: 1px solid #d5d6d6;
        padding-left: 23px;
        position: relative;
      }
      .genie-ak2 .right-box .section:first-child {
        padding-top: 0;
      }
      .genie-ak2 .parentContainer {
        border-collapse: collapse;
        display: table;
        min-height: inherit;
        table-layout: fixed;
        width: 100%;
      }
      .genie-ak2 .top-section .left-box:before {
        background: #003d73;
        box-sizing: border-box;
        color: #fff;
        content: "Resume";
        font-family: "Century Gothic";
        left: 0;
        padding: 30px 24px 15px;
        position: absolute;
        top: 0;
        width: 98%;
      }
      .genie-ak2 .top-section .left-box:after {
        color: #003d73;
        content: "";
        font-family: "Century Gothic";
        font-size: 24px;
        height: 20px;
        left: 20px;
        position: absolute;
        top: 51px;
        width: 20px;
      }
      .genie-ak2 .top-section .right-box:before {
        background: #003d73;
        bottom: 0;
        box-sizing: border-box;
        color: #fff;
        content: "";
        font-family: "Century Gothic";
        padding: 30px 24px 31px;
        position: absolute;
        right: 0;
        width: 50%;
      }
      .genie-ak2 .top-section .right-box:after {
        bottom: 49px;
        color: #003d73;
        content: "";
        font-family: "Century Gothic";
        font-size: 24px;
        height: 20px;
        position: absolute;
        right: 20px;
        width: 20px;
      }
      .genie-ak2 .top-section .left-box {
        float: left;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        width: 50%;
      }
      .genie-ak2 .top-section .right-box {
        padding-bottom: 0;
        padding-left: 0;
        padding-top: 76px;
        width: 50%;
      }
      .genie-ak2 .top-section .right-box .section {
        border: 0;
        padding-left: 0;
      }
      .genie-ak2 .parentContainer .right-box .section:first-child:before {
        background: #fff;
        content: "";
        height: 10px;
        left: -3px;
        position: absolute;
        top: 0;
        width: 5px;
        z-index: 1;
      }
      .genie-ak2 .right-box .section .icon-heading,
      .genie-ak2 .right-box .section:first-child .icon-heading {
        height: 25px;
        left: -8px;
        position: absolute;
        top: 3px;
        width: 25px;
        z-index: 10;
      }
      .genie-ak2 .right-box .section .icon-heading {
        top: 8px;
      }
      .genie-ak2 .right-box .padded-line.date-content {
        position: absolute;
        font-weight: 700;
        margin-left: 0;
        width: 65px;
      }
      .genie-ak2 .paragraph .single-column {
        position: relative;
      }
      .genie-ak2 .section:empty,
      .genie-ak2 .parentContainer .left-box svg {
        display: none;
      }
      .genie-ak2 .right-box .education .paragraph,
      .genie-ak2 .right-box .experience .paragraph,
      .genie-ak2 .right-box .summary .paragraph {
        margin-left: 0;
      }
      .genie-ak2 .right-box .summary .single-column {
        margin-left: 0 !important;
      }
      .genie-ak2 .parentContainer svg.rating {
        display: inline-block;
        height: 11px;
        box-sizing: content-box;
      }
      .genie-ak2 .rating-wrapper {
        position: relative;
        white-space: nowrap;
      }
      .genie-ak2 .rating-text {
        word-wrap: break-word;
      }
      .genie-ak2 .rating-text,
      .genie-ak2 .rating-svg {
        width: 50%;
        display: inline-block;
        word-wrap: break-word;
        white-space: normal;
        vertical-align: top;
      }
      .genie-ak2 .rating-svg {
        text-align: right;
        line-height: normal;
      }
      .genie-ak2 .rating-text:last-child {
        width: 100%;
      }
      .genie-ak2 .txtBold {
        font-weight: bold;
      }
      .genie-ak2 .txtItl {
        font-style: italic;
      }
      .genie-ak2 .padded-line {
        display: block;
      }
      .genie-ak2 .pt5 {
        padding-top: 5px;
      }
      .genie-ak2 .word-break {
        word-wrap: break-word;
      }
      #displayResume .genie-ak2 {
        min-height: 1024px;
      }
      .genie-ak2 .parentContainer .left-box:after,
      .genie-ak2 .parentContainer .right-box:after {
        content: " ";
        display: block;
        height: 80px;
        width: 100%;
      }
      .genie-ak2
        .parentContainer
        .right-box
        > .sortable-item
        .section
        .icon-heading {
        top: 3px;
      }
      .genie-ak2
        .parentContainer
        .right-box
        > .sortable-item:first-child
        .section
        .icon-heading {
        top: 3px;
      }
      .genie-ak2
        .parentContainer
        .left-box
        > .sortable-item:first-child
        .section,
      .genie-ak2
        .parentContainer
        .right-box
        > .sortable-item:first-child
        .section {
        padding-top: 0;
      }
      .genie-ak2
        .parentContainer
        .right-box
        > .sortable-item
        .section:first-child:before {
        background: none;
      }
      .genie-ak2
        .parentContainer
        .right-box
        > .sortable-item:first-child
        .section:before {
        height: 20px;
        top: -3px;
        background: #fff;
      }
      .genie-ak2 > div:not(.top-section),
      .genie-ak2 > div:not(.parentContainer) {
        min-height: auto;
      }
      .genie-ak2 .rating .default-fill {
        fill: #003d73;
      }
      .genie-ak2 .sortable-item .rating-wrapper {
        display: block;
      }
      .genie-ak2,
      .genie-ak2 table {
        line-height: 18px;
      }
      .genie-ak2.pagesize {         width: 792px;
      }
      .genie-ak2.font-face {
        font-family: "Century Gothic", Helvetica, sans-serif;
      }
      .genie-ak2.fontsize {
        font-size: 11px;
      }
      .genie-ak2 .section {
        padding-top: 20px;
      }
      .genie-ak2 .first-paragraph {
        margin-top: 0 !important;
      }
      .genie-ak2 .paragraph {
        margin-top: 20px;
      }
      .genie-ak2 .single-column,
      .genie-ak2 .main-column {
        word-wrap: break-word;
      }
      .genie-ak2 .right-box .single-column,
      .genie-ak2 .right-box .main-column {
        margin-left: 0px;
      }
      .genie-ak2 table.skills td {
        padding-top: 10px;
      }
      .genie-ak2 .job-title,
      .genie-ak2 .degree,
      .genie-ak2 .program-line {
        font-size: 14px;
      }
      .genie-ak2 .name {
        color: #003d73;
        font-size: 36px;
        line-height: 39.5px;
      }
      .genie-ak2 .heading {
        line-height: 22px;
      }
      .genie-ak2 .left-box .heading {
        line-height: 22px;
      }
      .genie-ak2 .section-title {
        font-size: 16px;
        color: #003d73;
      }
      .genie-ak2 .right-box .section .icon1,
      .genie-ak2 .right-box .section .icon2 {
        fill: #003d73;
      }
      .genie-ak2 .topbg {
        background-color: #003d73;
      }
      .genie-ak2 .topbgborder svg polyline {
        fill: #003d73;
      }
      .genie-ak2 .left-box {
        width: 153px;
      }
      .genie-ak2 .right-box .paragraph .single-column {
        margin-left: 91px;
      }
      .genie-ak2 .right-box .padded-line.date-content {
        left: -91px;
      }
      .genie-ak2 .top-section .left-box:before,
      .genie-ak2 .top-section .right-box:before {
        background-color: #003d73;
      }
      .genie-ak2 .top-section .left-box:after,
      .genie-ak2 .top-section .right-box:after {
        color: #003d73;
      }
      .genie-ak2 .rating-wrapper {
        margin-top: 10px;
      }
      .genie-ak2 .rating-wrapper * {
        font-size: 11px;
      }
      .genie-ak2 .resumeTitle {
        color: #003d73;
        font-size: 18px;
      }
      .genie-ak2 .parentContainer svg.rating {
        padding-top: 5.5px;
      }
      .genie-ak2 .parentContainer .left-box > .sortable-item .section,
      .genie-ak2 .parentContainer .right-box > .sortable-item .section {
        padding-top: 20px;
      }
      .genie-ak2
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
      .genie-ak2.active svg.rating {
        height: 11px;
      }
      .genie-ak2 .top-section .left-box > .sortable-item {
        background: none;
      }
      .genie-ak2 .rating .default-fill {
        fill: #003d73;
      }
      .genie-ak2 .right-box .doc-item .icon-heading {
        left: -32px;
      }
      .genie-ak2.active .wrapper-bg {
        left: -62px !important;
        right: -62px !important;
      }
      .genie-ak2.active .acrs-bdr {
        left: -60px !important;
      }
      .genie-ak2.active .acr-edit,
      .genie-ak2.active .acr-delete {
        left: -59px !important;
      }
      .genie-ak2.active .acr-move {
        right: -59px !important;
      }
    </style>
  </head>
  <body>
    <section class="page-wrap">
      <div class="genie-ak2 fontsize font-face vmargins pagesize">
        <div class="top-section">
          <div class="left-box last-box">
            <div class="section notdraggable first-section">
              <div class="paragraph first-paragraph">
                <div class="topbg" style="display: none">
                  <span class="topbgborder"> </span>
                </div>
                <div class="name word-break">
                  <span class="field"></span
                  ><span class="field word-break">${
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
                      <span class="field">${personDetail.city}</span
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
            <div class="section">
                   
                 ${renderSkills()}

                 ${renderHobbies()}

                ${renderReferences()}

            </div>
          </div>
          <div class="right-box last-box">
            <div class="section experience">
             
              ${renderExperience()}
             
            </div>

            <div class="section experience">
             
              ${renderEducation()}
             
            </div>

            <div class="section experience">
            <div class="single-column">
          
            ${renderCertificate()}
            
            ${renderAwards()}
            
            
           
            </div>
            </div>


           

          </div>

        </div>
      </div>
    </section>
  </body>
</html>`;
}
