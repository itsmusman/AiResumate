export function template39(resume) {
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
      certificateHtml = `<div class="grid">
      <div class="col-1-6">
        <div class="content">
          <h1>Certificate</h1>
        </div>
      </div>
    <div class="col-5-6 margin-align-14px">
        <div class="content">
          <div class="job">
          ${certificates
            .map(
              (element) =>
                `<div class="content">
             <h2 >${element.certificate} (${element.institute}) - ${
                  element.fromYear
                }${cleanMonth(element.fromMonth)} </h2>

           </div>`
            )
            .join("")}
         </div>
         </div>
         </div>
</div>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `<div class="grid">
      <div class="col-1-6">
        <div class="content">
          <h1>Awards</h1>
        </div>
      </div>
      <div class="col-5-6 margin-align-14px">
        <div class="content">
          <div class="job">
          ${awards
            .map(
              (element) =>
                `<div class="content">
<h2 > ${element.institute} (${element.awards}) - ${element.Year} </h2>

</div>`
            )
            .join("")}
         </div></div>
         </div>
         </div>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `<div class="grid">
      <div class="col-1-6">
        <div class="content">
          <h1>Reference</h1>
        </div>
      </div>
      <div class="col-5-6 margin-align-14px">
        <div class="content">
          <div class="job">
          ${references
            .map(
              (element) =>
                `<div class="content">
<h2 > ${element.institute} </h2>
<h3>${element.reference}</h3>
<p></p>
</div>`
            )
            .join("")}
         </div></div>
         </div>
         </div>`;
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
      result += ` <div class="job">
<h2 >${element.company} , ${element?.city ?? []}</h2>
<h3>${element.position}</h3>

<h4>${element.fromYear}${cleanMonth(element.fromMonth)}-${
        element.toYear
      }${cleanMonth(element.toMonth)}</h4>`;
      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `${role}</br>`;
      });
      result += `<p>${roles}</p>

</div>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `<div class="content">
<h2 >${element.university}</h2>
<h3>${element.degree}</h3>
<h3>${element.city ?? []}</h3>
<p><strong>${element.fromYear} - ${element.toYear}</strong></p>
</div>`;
    });

    return result;
  }

  return ` 
  <!DOCTYPE html>
  <html>
  <head>
    <title>Your Name | Job Title | E-mail Address</title>
    <meta http-equiv="content-type" content="text/html; charset=us-ascii">
    <meta name="keywords" content="">
    <meta name="description" content=""><!-- Declares CSS pixels -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="resume.css" media="all">
    <link rel="shortcut icon" href="img/favicon.ico">
    <style>

    @page {
      margin: 0px;
    }


      /*--========================== Google Fonts ==================================--*/
      @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 200;
          src: local('Raleway ExtraLight'), local('Raleway-ExtraLight'), url(http://themes.googleusercontent.com/static/fonts/raleway/v6/8KhZd3VQBtXTAznvKjw-k73hpw3pgy2gAi-Ip7WPMi0.woff) format('woff');
      }
      @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 300;
          src: local('Raleway Light'), local('Raleway-Light'), url(http://themes.googleusercontent.com/static/fonts/raleway/v6/-_Ctzj9b56b8RgXW8FArib3hpw3pgy2gAi-Ip7WPMi0.woff) format('woff');
      }
      @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 400;
          src: local('Raleway'), url(http://themes.googleusercontent.com/static/fonts/raleway/v6/cIFypx4yrWPDz3zOxk7hIQLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
      }
      @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 500;
          src: local('Raleway Medium'), local('Raleway-Medium'), url(http://themes.googleusercontent.com/static/fonts/raleway/v6/CcKI4k9un7TZVWzRVT-T873hpw3pgy2gAi-Ip7WPMi0.woff) format('woff');
      }
      @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 600;
          src: local('Raleway SemiBold'), local('Raleway-SemiBold'), url(http://themes.googleusercontent.com/static/fonts/raleway/v6/xkvoNo9fC8O2RDydKj12b73hpw3pgy2gAi-Ip7WPMi0.woff) format('woff');
      }
      @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 700;
          src: local('Raleway Bold'), local('Raleway-Bold'), url(http://themes.googleusercontent.com/static/fonts/raleway/v6/JbtMzqLaYbbbCL9X6EvaI73hpw3pgy2gAi-Ip7WPMi0.woff) format('woff');
      }
      /*--===========================    body stylin'    ==============================--*/
      body {
          font-family: Raleway;
          color: #444;
          line-height: 1.375;
          background-image: url(img/textured_paper.png);
      }
      /* ================== Typography ================*/
      h1, h2, h3, h4 {
          color: #333;
          line-height: 1.375;
      }
      h1 {
          font-size: 30px;
          font-weight: 200;
      }
      h2 {
          font-size: 20px;
          font-weight: 500;
      }
      h3 {
          font-size: 18px;
          font-weight: 300;
      }
      p {
          font-size: 100%;
          padding-right: 3em;
      }
      a {
          color: #1abc9c;
          text-decoration: underline;
      }
      a:hover {
          color: #2ff3cc;
          text-decoration: none;
          -webkit-transition: 0.25s;
          -moz-transition: 0.25s;
          -o-transition: 0.25s;
          transition: 0.25s;
      }
      .no-header {
          padding-top: 5px;
      }
      strong { font-weight: bold }
      #hd h1 {
          font-size: 48px;
          text-transform: uppercase;
          letter-spacing: 3px;
      }
      #hd h2 {
          text-transform: uppercase;
          letter-spacing: 2px;
      }
      .contact-info h2, .contact-info h3 {
          line-height: 1.375em;
          margin-top: 5px;
          margin-bottom: 5px;
      }
      .first h2 { font-style: italic }
      
      /*--========================== Customized Grid ==================================--*/
      *, *:after, *:before {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
      }
      body { margin: 0px }
      [class*='col-'] {
          float: left;
          padding-right: 20px;
      }
      [class*='col-']:last-of-type { padding-right: 0px }
      .grid {
          width: 100%;
          max-width: 1140px;
          min-width: 755px;
          margin: 0 auto;
          overflow: hidden;
      }
      .grid:after {
          content: "";
          display: table;
          clear: both;
      }
      .grid-pad { padding: 30px 10px 0px 30px }
          .grid-pad > [class*='col-']:last-of-type { padding-right: 20px }
      .push-right { float: right }
      /* Content Columns */
      .col-1-1 { width: 100% }
      .col-2-3, .col-8-12 { width: 66.66% }
      .col-1-2, .col-6-12 { width: 50% }
      .col-1-3, .col-4-12 { width: 33.33% }
      .col-1-4, .col-3-12 { width: 25% }
      .col-1-5 { width: 20% }
      .col-4-5 { width: 80% }
      .col-1-6, .col-2-12 { width: 25% }
      .col-5-6 { width: 75% }
      .col-1-7 { width: 14.28% }
      .col-1-8 { width: 12.5% }
      .col-1-9 { width: 11.1% }
      .col-1-10 { width: 10% }
      .col-1-11 { width: 9.09% }
      .col-1-12 { width: 8.33% }
      /* Layout Columns */
      .col-11-12 { width: 91.66% }
      .col-10-12 { width: 83.333% }
      .col-9-12 { width: 75% }
      .col-5-12 { width: 41.66% }
      .col-7-12 { width: 58.33% }
      .contact-info {
          margin-top: 7px;
          text-align: right;
      }
      .visible-mobile { display: none }
      .margin-align-14px { margin-top: 14px }
      /*==================  footer ==================*/
      #footer {
          padding: 1em 0 5em 0;
          font-size: 92%;
          text-align: center;
      }
          #footer p {
              margin-bottom: 0;
              text-align: center;
          }
      /* ===================== list  ===================== */
      li { border-bottom: 1px solid #ccc }
      .last { border-bottom: 0 }
      ul {
          margin-left: 0px;
          padding-left: 0px;
      }
          ul li {
              list-style: none;
              list-style-type: none;
              margin-left: 0px;
              padding-left: 0px;
              margin-top: 10px;
              padding-bottom: 2px;
          }
      .btn {
          text-decoration: none;
          display: inline-block;
          padding: 4px 12px;
          padding-bottom: 12px;
          padding-top: 13px;
          margin-bottom: 0;
          font-size: 14px;
          line-height: 20px;
          color: #333333;
          text-align: center;
          vertical-align: middle;
          cursor: pointer;
          background-color: #f5f5f5;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
          -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      }
      .btn:hover {
          color: #333333;
          background-color: #d9d9d9;
          -webkit-transition: 0.25s;
          -moz-transition: 0.25s;
          -o-transition: 0.25s;
          transition: 0.25s;
      }
      .hr {
          border-bottom-color: #DDD;
          border-bottom-style: solid;
          border-bottom-width: 1px;
          width: 100%;
          height: 1px;
      }
      .last { border: none }
      
      .skills-list ul { margin: 0 }
      .skills-list li {
             margin: 3px 0;
             padding: 3px 0;
      }
      .skills-list li span {
          font-size: 152%;
          display: block;
          margin-bottom: -2px;
          padding: 0;
      }
      .talent {
          width: 90%;
          float: left;
      }
      .talent h2 { margin-bottom: 6px }
      .grid { background-color: white }
      
      /* ================== responsive code ================= */
      
      /* tablet */
      @media (max-width: 940px) and (min-width: 769px) { 
          h1 {
              font-size: 24px;
              font-weight: 200;
          }
          .margin-align-14px { margin-top: 7px }
      }
      /* mobile */
      @media handheld, only screen and (max-width: 767px) { 
          .btn {
              margin-top: 20px;
              margin-bottom: 20px;
          }
          .contact-info { text-align: center }
          .grid {
              width: 100%;
              min-width: 0;
              margin-left: 0px;
              margin-right: 0px;
              padding-left: 0px;
              padding-right: 0px;
          }
          [class*='col-'] {
              width: auto;
              float: none;
              margin-left: 0px;
              margin-right: 0px;
              margin-top: 10px;
              margin-bottom: 10px;
              padding-left: 20px;
              padding-right: 20px;
          }
          .visible-mobile { display: block }
          .paddedhr { padding-top: 10px }
          .margin-align-14px { margin-top: 0px }
          h1 {
              font-size: 30px;
              font-weight: 200;
          }
          .col-1-3 { padding-left: 0px !important }
          .no-header {
           padding-top: 0px;
          }
        
      }
      
          
    </style>
  </head>
  <body>
    <!--=============================================================================================-->
    <!--               Hi person looking at my code, this is a simple responsive resum�              -->
    <!--=============================================================================================-->
    <div class="body">
      <!--body-->
      <div class="grid grid-pad">
        <div class="col-2-3">
          <div class="content">
            <h1>${personDetail.firstName} ${personDetail.lastName}</h1>
            <h2>${jobPosition}</h2>
            <p>${userSummary}</p>
            <div class="hr visible-mobile"></div>
          </div>
        </div>
        <div class="col-1-3">
          <div class="content">
            <div class="contact-info">
              <h3><a href="">${personDetail.email}</a></h3>
              <h3>${personDetail.phone}</h3>
              <h3><a href="">${personDetail.website}</a></h3>
              <h3>${personDetail.city} , ${personDetail.country}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-pad">
        <div class="col-1-1">
          <div class="hr"></div>
        </div>
        <div class="grid">
          <div class="col-1-6">
            <div class="content">
              <h1>Skills</h1>
            </div>
          </div>
          <div class="col-5-6">
            <div class="content">
              <div class="col-1-3">
                <ul class="talent">
                  ${renderSkills()}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-1-6">
            <div class="content">
              <h1>Hobbies</h1>
            </div>
          </div>
          <div class="col-5-6">
            <div class="content">
              <div class="col-1-3">
                <ul class="talent">
                  ${renderHobbies()}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-1-6">
            <div class="content">
              <h1>Experience</h1>
            </div>
          </div>
          <div class="col-5-6 margin-align-14px">
            <div class="content">
              <div class="job">
                ${renderExperience()}
              </div>
            </div>
          </div>
        </div>
        <div class="grid">
          <div class="col-1-6">
            <div class="content">
              <h1>Education</h1>
            </div>
          </div>
          <div class="col-5-6 margin-align-14px">
            <div class="content">
              <div class="job">
                ${renderEducation()}
              </div>
            </div>
          </div>
        </div>${renderCertificate()} ${renderAwards()} ${renderReferences()}
      </div>
      <div class="grid grid-pad">
        <div class="col-1-1">
          <div class="content">
            <div class="hr"></div>
          </div>
        </div>
      </div>
    </div>
  </body>
  </html>
    `;
}
