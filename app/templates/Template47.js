export function template47(resume) {
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
        <span name="Certifications" class="left">
            ${certificates
              .map(
                (element) =>
                  `<div detail="${element.institute}">
                ${element.Year}${cleanMonth(element.fromMonth)}
                </div>
                <span>
                ${element.certificate}
                </span>`
              )
              .join("")}
        
         </span>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
        <span name="Awards" class="left">
        ${awards
          .map(
            (element) =>
              `<div detail="${element.institute}">
            ${element.Year}
            </div>
            <span>
            ${element.awards}
            </span>`
          )
          .join("")}
    
     </span>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `
        <span name="Reference" class="left">
            ${references
              .map(
                (element) =>
                  `<div detail="${element.institute}">
               
                </div>
                <span>
                ${element.reference}
                </span>`
              )
              .join("")}
        
         </span>`;
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
      result += `<div detail="${element?.city ?? []}" date=" ${
        element.fromMonth
      } / ${element.fromYear} &nbsp;&ndash;&nbsp; ${element.toYear}${cleanMonth(
        element.toMonth
      )}">
${element.company}
</div>
<span>
${element.position}
</span><ul>`;

      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li>${role}</li>`;
      });
      result += `${roles}             
 </ul>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `<div detail="${element.university} ,  ${element.city ?? []}">
${element.fromYear}${cleanMonth(element.fromMonth)} - ${
          element.toYear
        }${cleanMonth(element.toMonth)}
</div>
<span>
${element.degree}
</span>`;
    });

    return result;
  }

  return ` 
  <!DOCTYPE html>
  <html>
  <head>
    <link rel="stylesheet" type="text/css" href="cv.css">
    <style>

    @page {
      margin: 0px;
    }

      body > div > div {
          font-family: LibertineCaps;
          font-size: 11px;
          letter-spacing: 2px;
          width: 40%;
      }
      
      body > div > div:nth-child(1) {
          width: 100%;
          font-size: 32px;
          letter-spacing: 6px;
          text-align: center;
          line-height: 50%;
      }
      
      body > div > div:nth-child(2) {
          float: left;
      }
      
      body > div > div:nth-child(3) {
          float: right;
          text-align: right;
      }
      
      body > div {
          margin-bottom: 40px;
      }
      
      body > div.include-summary > div:nth-child(2),
      body > div.include-summary > div:nth-child(3) {
          margin-top: 10px;
          font-size: 12px;
      }
      
      body > div.include-summary > div:nth-child(4) {
          font-family: Libertine;
          font-size: 16px;
          letter-spacing: 0px;
          line-height: 125%;
          width: 100%;
          left: 0px;
          margin-top: 20px;
          text-align: center;
          position: absolute;
      }
      
      body > div.include-summary {
          margin-bottom: 75px;
      }
      
      
      
      
      
      
      
      
      
      body > span:before {
          display: block;
          width: 100%;
          padding-bottom: 2px;
          border-bottom: 1px black solid;
          font-family: LibertineBold;
          font-weight: bold;
          content: attr(name);
      }
      
      body > span {
          display: block;
          width: 100%;
          margin-bottom: 20px;
          clear: both;
      }
      
      .left {
          float: left;
          width: 60%;
          margin-bottom: 30px;
      }
      
      .right {
          float: right;
          width: 37.5%;
          clear: none;
          margin-bottom: 30px;
      }
      
      
      
      
      
      div[date]:before {
          float: right;
          font-weight: normal;
          font-style: normal;
          text-align: right;
          content: attr(date);
      }
      
      div[date] {
          float: left;
          width: calc(100% - 34px);
      }
      
      div[date] + * {
          clear: both;
      }
      
      div[detail]:after {
          font-family: LibertineItalic;
          font-style: normal;
          font-weight: normal;
          margin-left: 20px;
          content: attr(detail);
      }
      
      
      
      
      
      body > span > div {
          font-weight: bold;
          margin-left: 20px;
          margin-top: 5px;
      }
      body > span.long > div {
          margin-bottom: 15px;
      }
      
      body > span span {
          display: block;
          margin-left: 30px;
      }
      body > span.long span {
          margin-top: 15px;
      }
      body > span.long strong + span {
          margin-top: 0;
      }
      
      body > span > span {
          margin-left: 40px;
          margin-bottom: 15px;
      }
      
      body > span > *:last-child {
          margin-bottom: 0;
      }
      
      
      
      
      .compact > div:before {
          float: left;
          width: 20%;
          margin-left: 20px;
          text-align: left;
          font-family: LibertineBold;
          font-weight: bold;
          content: attr(name);
      }
      
      .compact > div {
          float: right;
          width: 100%;
          font-family: Libertine;
          font-weight: normal;
          transform: translateX(10px);
      }
      
      .compact > div:last-child {
          margin-bottom: 20px;
      }
      
      
      
      
      .semicompact > span {
          margin-bottom: 5px;
      }
      
      .left.semicompact, .right.semicompact {
          margin-bottom: 10px;
      }
      
      
      
      
      
      ul {
          margin: 0px;
      }
      
      
      
      
      
      
      
      
      
      
      
      
      
      slash:before, point:before, gap:before, dash:before{
          margin: 0px 5px;
      }
      
      slash:before {
          content: '/';
      }
      
      point:before {
          content: '';
      }
      
      gap:before {
          content: '';
      }
      
      dash:before {
          content: '';
      }
      
      
      
      b, b > *, strong, strong > *, th, th > * {
          font-family: LibertineBold;
          font-weight: normal;
      }
      
      tr {
          height: 25px;
      }
      
      strong {
          margin-right: 15px;
      }
      
      br + strong {
          margin-top: 5px;
          display: inline-block;
      }
      
      
      i {
          font-family: LibertineItalic;
          font-style: normal;
      }
      
      
      a {
          text-decoration: none;
          color: #000099;
      }
      
      
      table {
          width: 96%;
          margin-left: 20px;
          border: 0;
      }
      
      th, td {
          text-align: left;
      }
      
      
      body > span:last-child {
          padding-bottom: 50px;
      }
      
      
      * {
          font-family: Libertine;
          font-size: 14px;
          
          -ms-word-break: break-all;
          word-break: break-all;
          word-break: break-word;
          word-break: hyphenate;
          -webkit-hyphens: auto;
          -moz-hyphens: auto;
          hyphens: auto;
      }
      
      @font-face {
          font-family: 'Libertine';
          src: url('cvfonts/LinLibertine_R.woff');
      }
      
      @font-face {
          font-family: 'LibertineBold';
          src: url('cvfonts/LinLibertine_RB.woff');
      }
      
      @font-face {
          font-family: 'LibertineItalic';
          src: url('cvfonts/LinLibertine_RI.woff');
      }
      
      @font-face {
          font-family: 'LibertineCaps';
          src: url('cvfonts/LinLibertine_aS.woff');
      }
      
      
    </style>
    <title></title>
  </head>
  <body>
    <div>
      <div>
        ${personDetail.firstName} ${personDetail.lastName}
      </div>
      <div>
        ${personDetail.email}<br/>
        ${personDetail.phone}
      </div>
      <div>
        ${personDetail.city}<br/>
        ${personDetail.country}
      </div>
    </div>
    <div>
      <h3>${jobPosition}</h3>
      <p>${userSummary}</p>
    </div><span name="Education">${renderEducation()}</span>
     <span name="Skills" class="left"></span>
    <div>
      <span name="Skills" class="left">${renderSkills()}</span>
    </div>
    <div>
    <span name="Hobbies" class="left">${renderHobbies()}</span>
  </div>
    
    
    <div>
    <span name="Employment History" class="left">${renderExperience()}
    </span>
    </div>
    ${renderCertificate()} ${renderAwards()} ${renderReferences()}
  </body>
  </html>
    `;
}
