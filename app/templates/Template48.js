export function template48(resume) {
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
        <section class="section experiences-section">
                 
        <div class="education-container container-block">
         <h3 class="container-block-title">Certificate</h3>
            ${certificates
              .map(
                (element) =>
                  `<div class="item">
          <h4 class="degree">${element.certificate} (${element.institute}) - ${element.Year}</h4>
          </div>`
              )
              .join("")}
        
         </div>
         </section>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
        <section class="section experiences-section">
                 
        <div class="education-container container-block">
         <h3 class="container-block-title">Awards</h3>
            ${awards
              .map(
                (element) =>
                  `<div class="item">
          <h4 class="degree">${element.awards} (${element.institute})  - ${element.Year}</h4>
      
       
          </div>`
              )
              .join("")}
        
         </div>
         </section>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `
        <section class="section experiences-section">
                 
        <div class="education-container container-block">
         <h3 class="container-block-title">Reference</h3>
            ${references
              .map(
                (element) =>
                  `<div class="item">
          <h4 class="degree"> ${element.reference}</h4>
          <h5 class="meta">${element.institute}</h5>
        
         
          </div>`
              )
              .join("")}
        
         </div>
         </section>`;
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
      result += `<div class="upper-row">
<h4 class="job-title">${element.position}</h4>
<div class="time">${element.fromYear}${cleanMonth(element.fromMonth)} - ${
        element.toMonth
      } / ${element.toYear}</div>
</div>

<div class="company">${element.company}</div>
<div class="company">${element?.city ?? []}</div>
</div>
<div class="details">`;

      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<p>${role}</p>`;
      });
      result += `${roles}

</div>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `<div class="item">
<h4 class="degree">${element.degree}</h4>
<h5 class="meta">${element.university}</h5>
<h6 class="meta">${element.city ?? []}</h6>
<div class="time">${element.fromYear}${cleanMonth(element.fromMonth)} - ${
          element.toMonth
        } ,
${element.toYear}</div>
</div>`;
    });

    return result;
  }

  return ` 
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=us-ascii">
    <title>Sharad Shinde | Resume</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Resume of Web Developer and Designer - Sharad Shinde.">
    <link rel="shortcut icon" href="favicon.ico">
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,500,400italic,300italic,300,500italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
    <link id="theme-style" rel="stylesheet" href="css/styles.css"><!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]> <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script> <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> <![endif]-->
  
    <style>

    @page {
      margin: 0px;
    }

      /*   
       * Template Name: Orbit - Responsive Resume/CV Template for Developers
       * Version: 1.0
       * Author: Xiaoying Riley
       * Twitter: @3rdwave_themes
       * License: Creative Commons Attribution 3.0 License
       * Website: http://themes.3rdwavemedia.com/
      */
      
      
      /* styles-2.css */
      
      
      /* ======= Base ======= */
      
      body {
          font-family: 'Roboto', sans-serif;
          color: #545E6C;
          background: #f5f5f5;
          font-size: 14px;
          padding: 30px;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
      }
      
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
          font-weight: 700;
      }
      
      a {
          color: #35776d;
          -webkit-transition: all 0.4s ease-in-out;
          -moz-transition: all 0.4s ease-in-out;
          -ms-transition: all 0.4s ease-in-out;
          -o-transition: all 0.4s ease-in-out;
      }
      
      a:hover {
          text-decoration: underline;
          color: #1d423c;
      }
      
      a:focus {
          text-decoration: none;
      }
      
      p {
          line-height: 1.5;
      }
      
      .wrapper {
          background: #4CAC9D;
          max-width: 960px;
          margin: 0 auto;
          position: relative;
          -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      }
      
      .sidebar-wrapper {
          background: #4CAC9D;
          position: absolute;
          right: 0;
          width: 240px;
          height: 100%;
          min-height: 800px;
          color: #fff;
      }
      
      .sidebar-wrapper a {
          color: #fff;
      }
      
      .sidebar-wrapper .profile-container {
          padding: 30px;
          background: rgba(0, 0, 0, 0.2);
          text-align: center;
          color: #fff;
      }
      
      .sidebar-wrapper .name {
          font-size: 32px;
          font-weight: 900;
          margin-top: 0;
          margin-bottom: 10px;
      }
      
      .sidebar-wrapper .tagline {
          color: rgba(255, 255, 255, 0.6);
          font-size: 16px;
          font-weight: 400;
          margin-top: 0;
          margin-bottom: 0;
      }
      
      .sidebar-wrapper .profile {
          margin-bottom: 15px;
      }
      
      .sidebar-wrapper .contact-list .fa {
          margin-right: 5px;
          font-size: 18px;
          vertical-align: middle;
      }
      
      .sidebar-wrapper .contact-list li {
          margin-bottom: 15px;
      }
      
      .sidebar-wrapper .contact-list li:last-child {
          margin-bottom: 0;
      }
      
      .sidebar-wrapper .contact-list .email .fa {
          font-size: 14px;
      }
      
      .sidebar-wrapper .container-block {
          padding: 30px;
      }
      
      .sidebar-wrapper .container-block-title {
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 700;
          margin-top: 0;
          margin-bottom: 15px;
      }
      
      .sidebar-wrapper .degree {
          font-size: 14px;
          margin-top: 0;
          margin-bottom: 5px;
      }
      
      .sidebar-wrapper .education-container .item {
          margin-bottom: 15px;
      }
      
      .sidebar-wrapper .education-container .item:last-child {
          margin-bottom: 0;
      }
      
      .sidebar-wrapper .education-container .meta {
          color: rgba(255, 255, 255, 0.6);
          font-weight: 500;
          margin-bottom: 0px;
          margin-top: 0;
      }
      
      .sidebar-wrapper .education-container .time {
          color: rgba(255, 255, 255, 0.6);
          font-weight: 500;
          margin-bottom: 0px;
      }
      
      .sidebar-wrapper .languages-container .lang-desc {
          color: rgba(255, 255, 255, 0.6);
      }
      
      .sidebar-wrapper .languages-list {
          margin-bottom: 0;
      }
      
      .sidebar-wrapper .languages-list li {
          margin-bottom: 10px;
      }
      
      .sidebar-wrapper .languages-list li:last-child {
          margin-bottom: 0;
      }
      
      .sidebar-wrapper .interests-list {
          margin-bottom: 0;
      }
      
      .sidebar-wrapper .interests-list li {
          margin-bottom: 10px;
      }
      
      .sidebar-wrapper .interests-list li:last-child {
          margin-bottom: 0;
      }
      
      .main-wrapper {
          background: #fff;
          padding: 60px;
          padding-right: 300px;
      }
      
      .main-wrapper .section-title {
          text-transform: uppercase;
          font-size: 20px;
          font-weight: 500;
          color: #35776d;
          position: relative;
          margin-top: 0;
          margin-bottom: 20px;
      }
      
      .main-wrapper .section-title .fa {
          width: 30px;
          height: 30px;
          margin-right: 8px;
          display: inline-block;
          color: #fff;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          -ms-border-radius: 50%;
          -o-border-radius: 50%;
          border-radius: 50%;
          -moz-background-clip: padding;
          -webkit-background-clip: padding-box;
          background-clip: padding-box;
          background: #35776d;
          text-align: center;
          padding-top: 8px;
          font-size: 16px;
          position: relative;
          top: -2px;
      }
      
      .main-wrapper .section {
          margin-bottom: 60px;
      }
      
      .main-wrapper .experiences-section .item {
          margin-bottom: 30px;
      }
      
      .main-wrapper .upper-row {
          position: relative;
          overflow: hidden;
          margin-bottom: 2px;
      }
      
      .main-wrapper .job-title {
          color: #3F4650;
          font-size: 16px;
          margin-top: 0;
          margin-bottom: 0;
          font-weight: 500;
      }
      
      .main-wrapper .time {
          position: absolute;
          right: 0;
          top: 0;
          color: #97AAC3;
      }
      
      .main-wrapper .company {
          margin-bottom: 10px;
          color: #97AAC3;
      }
      
      .main-wrapper .project-title {
          font-size: 16px;
          font-weight: 400;
          margin-top: 0;
          margin-bottom: 5px;
      }
      
      .main-wrapper .projects-section .intro {
          margin-bottom: 30px;
      }
      
      .main-wrapper .projects-section .item {
          margin-bottom: 15px;
      }
      
      .skillset .item {
          margin-bottom: 15px;
          overflow: hidden;
      }
      
      .skillset .level-title {
          font-size: 14px;
          margin-top: 0;
          margin-bottom: 12px;
      }
      
      .skillset .level-bar {
          height: 12px;
          background: #f5f5f5;
      }
      
      .skillset .level-bar-inner {
          height: 12px;
          background: #7ec6bb;
      }
      
      .footer {
          padding: 30px;
          padding-top: 60px;
      }
      
      .footer .copyright {
          line-height: 1.6;
          color: #545E6C;
          font-size: 13px;
      }
      
      .footer .fa-heart {
          color: #fb866a;
      }
      
      
      /* Extra small devices (phones, less than 768px) */
      
      @media (max-width: 767px) {
          .sidebar-wrapper {
              position: static;
              width: inherit;
          }
          .main-wrapper {
              padding: 30px;
          }
          .main-wrapper .time {
              position: static;
              display: block;
              margin-top: 5px;
          }
          .main-wrapper .upper-row {
              margin-bottom: 0;
          }
      }
      
      
      /* Small devices (tablets, 768px and up) */
      
      
      /* Medium devices (desktops, 992px and up) */
      
      @media (min-width: 992px) {
          .skillset .level-title {
              display: inline-block;
              float: left;
              width: 30%;
              margin-bottom: 0;
          }
          .skillset .level-bar {
              display: inline-block;
              width: 70%;
              float: left;
              position: relative;
              top: 1px;
          }
      }
      
      
      
      
      
      
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="sidebar-wrapper">
        <div class="profile-container">
          <h1 class="name">${personDetail.firstName} ${
    personDetail.lastName
  }</h1>
          <h3 class="tagline">${jobPosition}</h3>
        </div><!--//profile-container-->
        <div class="contact-container container-block">
          <ul class="list-unstyled contact-list">
            <li class="email">${personDetail.email}</li>
            <li class="phone">${personDetail.phone}</li>
            <li class="website">${personDetail.website}</li>
            <li class="website">${personDetail.city} , ${
    personDetail.country
  }</li>
          </ul>
        </div>

        <section class="section experiences-section">
      <div class="education-container container-block">
        <h4 class="container-block-title">Career Profile</h4>${userSummary}
      </div>
    </section>
        <section class="section experiences-section">
          <div class="education-container container-block">
            <h2 class="container-block-title">Education</h2>${renderEducation()}
          </div>
        </section>
        <section class="section experiences-section">
        <div class="education-container container-block">
          <h2 class="container-block-title">Education</h2>${renderExperience()}
        </div>
      </section>
     
      </div><!--//sidebar-wrapper-->
      <div class="main-wrapper">
      
        <section class="skills-section section">
          <h2 class="section-title">Skills & Proficiency</h2>
          <div class="skillset">
            <div class="item">
              <h3 class="level-title">${renderSkills()}</h3>
              <div class="level-bar">
                <div class="level-bar-inner" data-level="85%"></div>
              </div>
            </div>
            <h2 class="section-title">Hobbies</h2>
            <div class="skillset">
              <div class="item">
                <h3 class="level-title">${renderHobbies()}</h3>
                <div class="level-bar">
                  <div class="level-bar-inner" data-level="85%"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          ${renderCertificate()} ${renderAwards()} ${renderReferences()}
        </section>
      </div>
    </div>
  </body>
  </html>
    `;
}
