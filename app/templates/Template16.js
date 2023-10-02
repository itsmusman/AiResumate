export function template16(resume) {
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
  <div class="section-title">Certification</div>
</div>
          ${certificates
            .map(
              (element) => `
            
              <span class="program-line">${element.certificate} (${
                element.institute
              }) - ${element.Year} ${cleanMonth(element.fromMonth)}</span>
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
      <div class="section education">
<div class="heading">
  <div class="section-title">Awards</div>
</div>
          ${awards
            .map(
              (element) => `
            
              <span class="program-line">${element.awards} (${element.institute})  - ${element.Year}</span>
              
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
      <div class="section education">
<div class="heading">
  <div class="section-title">References</div>
</div>
          ${references
            .map(
              (element) => `
            
              <span class="program-line">${element.reference}</span>
              <p>${element.institute}</p>
             
            
          `
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
          <p>${skills.map((element) => element.name).join(", ")}</p>
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
          <p>${hobbies.map((element) => element.name).join(", ")}</p>
        </div>
      `;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";
    if (experience.length > 0) {
      result += `
      <div class="heading">
        <div class="headingIcon"></div>
        <div class="section-title">Work Experience</div>
      </div>`;

      experience.forEach((element) => {
        result += `
        <div class="paragraph first-paragraph">
          <div class="single-column">
            <div class="padded-line date-content">
              <span class="jobdates">${element.toYear}${cleanMonth(
          element.toMonth
        )}</span>
              <span dependency="JSTD+EDDT">  </span>
              <span class="jobdates">
                <span class="jobdates">${element.fromYear}${cleanMonth(
          element.fromMonth
        )}</span>
              </span>
              <br />
            </div>
            <span class="padded-line">
              <span class="job-title txtBold">${element.position}</span>
            </span>
            <span class="padded-line locationGap txtItl">
              <span class="companyname">${element.company}</span>
              <span>, </span>
              <span class="companyname">${element?.city ?? []}</span>
              <span> </span>
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
        </div> <br/>`;
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
    }

    education.forEach((element) => {
      result += `<div class="paragraph first-paragraph">
        <div class="single-column">
          <div class="padded-line date-content">
            <span class="jobdates" format="%Y-%m"></span>
            <span class="jobdates" format="%Y-%m"></span>
          </div>
          <span class="padded-line degreeGap txtBold">
            <span class="degree"></span><span class="program-line">${
              element.degree
            }</span>
          </span>
          <div class="padded-line txtItl">
            <span class="companyname">${element.university}</span>
            <span>, </span>
            <span class="companyname">${element?.city ?? []}</span>
            <span> - </span>
            <span class="companyname">${element.toYear} - ${
        element.fromYear
      }</span>
            <span> </span>
            <span class="job-location jobstate"></span>
          </div>
          <span class="field"></span>
        </div>
      </div>
      <br/>`;
    });

    return result;
  }

  return `<!DOCTYPE html>
  <html>
  <head>
  
    <style>
        body {
          margin: auto;
        }
        .genie-mjs6 table {
          font-size: inherit;
          color: inherit;
        }
        .genie-mjs6 a img {
          border: none;
        }
  
        .genie-mjs6 ul,
        .genie-mjs6 li {
          margin: 0;
          padding: 0;
          list-style-type: disc;
        }
        .genie-mjs6 ul li {
          margin: 0 0 0 16px;
          padding: 0;
        }
  
        .genie-mjs6 table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        .genie-mjs6 table.skills,
        .genie-mjs6 .table_wrapper {
          margin-top: 0;
          width: 100%;
          word-wrap: break-word;
        }
        .genie-mjs6 table.skills th,
        .genie-mjs6 table.skills td {
          text-align: center;
          width: 20%;
        }
        .genie-mjs6 table.skills .skill-name,
        .genie-mjs6 table.skills .skill-rating {
          text-align: left;
          width: 35%;
        }
        .genie-mjs6 table.skills .skill-rating {
          width: 20%;
        }
        .genie-mjs6 table.skills .skill-years,
        .genie-mjs6 table.skills .skill-last {
          width: 19%;
        }
        .genie-mjs6 table.skills .pad1 {
          width: 5%;
        }
        .genie-mjs6 table.skills .pad2,
        .genie-mjs6 table.skills .pad3 {
          width: 1%;
        }
  
        .genie-mjs6 {
          color: #343434;
          font-variant-ligatures: none;
          line-height: 16px;
          min-height: 1024px;
          box-sizing: border-box;
        }
        .genie-mjs6 .name {
          font-weight: 700;
          padding: 0;
          position: relative;
          text-align: left;
          word-wrap: break-word;
        }
        .genie-mjs6 .address .single-column {
          margin-left: 0 !important;
        }
        .genie-mjs6 .heading {
          font-weight: 700;
          line-height: 15px;
          margin-bottom: 10px;
        }
        .genie-mjs6 .section-title {
          word-wrap: break-word;
        }
        .genie-mjs6 .degreeGap {
          margin-bottom: 4px;
        }
        .genie-mjs6 .locationGap {
          margin-top: 4px;
        }
        .genie-mjs6 .first-section {
          padding-top: 0 !important;
        }
        .genie-mjs6 .section:empty {
          display: none;
        }
        .genie-mjs6 .education .job-location {
          font-style: italic;
        }
  
        .genie-mjs6 .right-box {
          background: #003d73;
          box-sizing: initial;
          display: table-cell;
          padding: 15px;
          box-sizing: content-box;
        }
        .genie-mjs6 .right-box .section {
          position: relative;
          color: #fff;
        }
        .genie-mjs6 .right-box .heading {
          line-height: 1.5;
          margin-left: -15px;
          margin-right: -15px;
          padding: 0 15px;
          position: relative;
        }
        .genie-mjs6 .right-box .heading:before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          background: #003d73;
          height: 100%;
          width: 100%;
          filter: brightness(0.8);
        }
        .genie-mjs6 .right-box .section-title {
          padding: 3px 0;
          text-align: left;
          position: relative;
        }
        .genie-mjs6 .right-box .SECTION_CNTC {
          padding-top: 20px !important;
        }
        .genie-mjs6 .parentContainer {
          border-collapse: collapse;
          display: table;
          min-height: inherit;
          table-layout: fixed;
          width: 100%;
        }
  
        .genie-mjs6 .left-box {
          display: table-cell;
          letter-spacing: 0.2px;
          padding: 15px;
          vertical-align: top;
        }
        .genie-mjs6 .left-box .section:first-child {
          padding-top: 0;
        }
        .genie-mjs6 .left-box .heading {
          border-bottom: 1px solid #d5d6d6;
          border-top: 1px solid #d5d6d6;
          letter-spacing: 0;
          padding: 5px 0;
        }
        .genie-mjs6 .left-box .section-title {
          color: #002e58;
        }
        .genie-mjs6 .left-box .padded-line.date-content {
          position: absolute;
          margin-left: 0;
          width: 65px;
        }
        .genie-mjs6 .paragraph .single-column {
          position: relative;
        }
        .genie-mjs6 .left-box .summary .single-column {
          margin-left: 0 !important;
        }
  
        .genie-mjs6 .txtBold {
          font-weight: bold;
        }
        .genie-mjs6 .txtItl {
          font-style: italic;
        }
        .genie-mjs6 .padded-line {
          display: block;
        }
        .genie-mjs6 .mt5 {
          margin-top: 5px;
        }
        .genie-mjs6 .txtRight {
          text-align: right;
        }
        .genie-mjs6 .word-break {
          word-wrap: break-word;
        }
  
        .genie-mjs6 .right-box .outer-square,
        .genie-mjs6 .right-box .inner-square,
        .genie-mjs6 .left-box .outer-square,
        .genie-mjs6 .left-box .inner-square {
          height: 7px;
          position: relative;
        }
        .genie-mjs6 .right-box .inner-square {
          background: #fff;
        }
        .genie-mjs6 .left-box .outer-square {
          background: #d6d6d6;
        }
        .genie-mjs6 .left-box .inner-square {
          background: #003d73;
        }
        .genie-mjs6 > div {
          min-height: inherit;
        }
  
        #displayResume .genie-mjs6 {
          min-height: 1024px;
        }
        .genie-mjs6 .right-box .outer-square:before,
        .genie-mjs6 .right-box .sortable-item.active .inner-square {
          background: #003d73;
        }
        .genie-mjs6 .right-box .sortable-item.active .single-column,
        .genie-mjs6 .right-box .sortable-item.active .main-column {
          z-index: 10;
        }
        .genie-mjs6 .right-box .active * {
          color: #343434;
        }
  
        .genie-mjs6,
        .genie-mjs6 table {
          line-height: 18px;
        }
        .genie-mjs6.pagesize {         width: 792px;
        }
        .genie-mjs6.font-face {
          font-family: "Century Gothic", Helvetica, sans-serif;
        }
        .genie-mjs6.fontsize {
          font-size: 11px;
        }
        .genie-mjs6 .section {
          padding-top: 20px;
        }
        .genie-mjs6 .right-box .section {
          padding-top: 20px;
        }
        .genie-mjs6 .first-paragraph {
          margin-top: 0 !important;
        }
        .genie-mjs6 .paragraph {
          margin-top: 10px;
        }
        .genie-mjs6 .single-column,
        .genie-mjs6 .main-column {
          word-wrap: break-word;
        }
        .genie-mjs6 .left-box .single-column,
        .genie-mjs6 .left-box .main-column {
          margin-left: 0px;
        }
        .genie-mjs6 table.skills td {
          padding-top: 5px;
        }
        .genie-mjs6 .jobdates {
          font-size: 11px;
        }
        .genie-mjs6 .job-title,
        .genie-mjs6 .degree,
        .genie-mjs6 .program-line {
          font-size: 14px;
        }
        .genie-mjs6 .name {
          font-size: 28px;
          line-height: 31.5px;
        }
        .genie-mjs6 .heading {
          line-height: 22px;
        }
        .genie-mjs6 .right-box .heading {
          line-height: 22px;
        }
        .genie-mjs6 .right-box .heading:before {
          background: #003d73;
        }
        .genie-mjs6 .section-title {
          font-size: 16px;
        }
        .genie-mjs6 .resumeTitle {
          font-size: 18px;
          padding-top: 3px;
        }
        .genie-mjs6 .right-box {
          background: #003d73;
          width: 154px;
        }
        .genie-mjs6 .left-box .paragraph .single-column {
          margin-left: 91px;
        }
        .genie-mjs6 .left-box .padded-line.date-content {
          left: -91px;
        }
        .genie-mjs6 .right-box .outer-square:before {
          background: #003d73;
          content: "";
          position: absolute;
          height: 7px;
          width: 100%;
          filter: brightness(0.8);
        }
        .genie-mjs6 .left-box .inner-square {
          background: #003d73;
          filter: brightness(0.8);
        }
        .genie-mjs6 .left-box .section-title {
          color: #003d73;
        }
  
        .genie-mjs6 .left-box .sortable-item {
          padding-top: 20px;
        }
        .genie-mjs6
          .right-box
          > .sortable-item.active
          > .wrapper
          .heading:before {
          background: none;
        }
        .genie-mjs6 .right-box .sortable-item.active .outer-square:before {
          background: #d6d6d6;
        }
        .genie-mjs6 .right-box .sortable-item.active .inner-square,
        .genie-mjs6 .right-box .heading:before {
          background: #003d73;
        }
  
        .genie-mjs6._single-parent-drag > .wrapper-bg + div {
          position: relative;
          z-index: 8;
        }
        .genie-mjs6._single-parent-drag .outer-square:before {
          background: #d6d6d6;
          content: "";
          position: absolute;
          height: 7px;
          width: 100%;
          filter: brightness(0.8);
        }
        .genie-mjs6._single-parent-drag .inner-square {
          background: #003d73;
        }
        .genie-mjs6._single-parent-drag .wrapper-bg + div .paragraph {
          margin-top: 0;
        }
        .genie-mjs6 .outer-square,
        .genie-mjs6 .inner-square {
          height: 7px;
          position: relative;
        }
        .genie-mjs6 .wrapper {
          position: static;
        }
        .genie-mjs6 .parent-drag.active .wrapper,
        .genie-mjs6 .sortable-item .section-title {
          position: relative;
        }
        .GAK6.genie-mjs6 .right-box .SortableItem-sibling{background:#003D73}
  
        .genie-mjs6.active .wrapper-bg {
          left: -62px !important;
          right: -62px !important;
        }
        .genie-mjs6.active .acrs-bdr {
          left: -60px !important;
        }
        .genie-mjs6.active .acr-edit,
        .genie-mjs6.active .acr-delete {
          left: -59px !important;
        }
        .genie-mjs6.active .acr-move {
          right: -59px !important;
        }
        .companyname{
          font-size:14px
        }
  
    </style>
    <title></title>
  </head>
  <body>
    <section class="page-wrap">
      <div class="genie-mjs6 fontsize font-face vmargins pagesize">
        <div class="parentContainer">
          <div class="left-box last-box">
            <div class="section summary notdraggable">
              <div class="paragraph first-paragraph">
                <div class="field single-column">
                  <p>${userSummary ?? []}</p>
                </div>
              </div>
            </div>
            <div class="section experience">
             
            ${renderExperience()}
            </div>
            <div class="section education">
              
              ${renderEducation()}
            </div>
            <div>
            ${renderCertificate() ?? []}
            ${renderAwards() ?? []}
             ${renderReferences() ?? []}
            </div>
            
          </div>
          <div class="right-box last-box GAKpdf-box">
            <div class="section notdraggable first-section">
              <div class="paragraph first-paragraph">
                <div class="name word-break">
                   <span class="field word-break">${
                     personDetail.firstName ?? []
                   }${" "}${personDetail.lastName ?? []}</span>
                </div>
                <div class="resumeTitle">${jobPosition}</div>
              </div>
            </div>
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
                      <div class="field"></div><span class="field">${
                        personDetail.city ?? []
                      }</span><span>,</span> <span class="field">${
    personDetail.country ?? []
  }</span>
                    </div>
                    <div class="txtBold mt5">
                      Phone
                    </div>
                    <div>
                      <span class="field">${personDetail.phone ?? []}</span>
                    </div>
                    <div class="txtBold mt5">
                      E-mail
                    </div>
                    <div class="word-break">
                      <span class="field">${personDetail.email ?? []}</span>
                    </div>
                    <div class="txtBold mt5">
                      Website
                    </div>
                    <div class="word-break">
                      <span class="field">${personDetail.website ?? []}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="section">
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
