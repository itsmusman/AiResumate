export function template45(resume) {
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
        <section id="education" class="education">
        <div class="content-wrap">
          <h3>Certificate</h3>
            ${certificates
              .map(
                (element) =>
                  `<div >
              <p >${element.certificate} (${element.institute}) - ${
                    element.Year
                  }${cleanMonth(element.fromMonth)} </p>
             
              </p>
           </div>
            
        </div>`
              )
              .join("")}
       
         </section>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
        <section id="education" class="education">
        <div class="content-wrap">
          <h3>Awards</h3>
            ${awards
              .map(
                (element) =>
                  `<div >
              <p >${element.awards} (${element.institute})  - ${element.Year}</p>
            
              </div>
            
            </div>`
              )
              .join("")}
        
         </section>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `
        <section id="education" class="education">
        <div class="content-wrap">
          <h3>Reference</h3>
            ${references
              .map(
                (element) =>
                  `<div >
              
              <h4>${element.institute}.</h4>
              <p >
              ${element.reference}
              </p>
              </div>
            
            </div>`
              )
              .join("")}
    
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
      result += `<div class="col-narrow">
<div>
<h3>${element.company}</h3>
<p class="uppercase">${element.position}</p>
<p class="uppercase">${element?.city ?? []}</p>
<p>${element.fromYear}${cleanMonth(element.fromMonth)} - ${
        element.toYear
      }${cleanMonth(element.toMonth)}</p>
</div>
<ul>`;
      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li>${role}</li>`;
      });
      result += `${roles}
</ul>
</p>

</div>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        ` <h3>${element.university}</h3>
<p>${element.city ?? []}</p>
<p>${element.degree}</p>
<p>${element.fromYear}${cleanMonth(element.fromMonth)}-${
          element.toYear
        }${cleanMonth(element.toMonth)}</p>`;
    });

    return result;
  }

  return ` 
  <!DOCTYPE html>
<!-- Via Linkedin learning course -->
<html lang="en">
<head>
  <!-- Go to http://fontawesome.io/get-started/ to generate your own embed code! -->

  <script src="https://use.fontawesome.com/6e47fdd73a.js"></script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Priyanga Vanangamudi | Resume</title>
  <link href="https://fonts.googleapis.com/css?family=KoHo|Cormorant:400,700" rel="stylesheet">
  <link rel="stylesheet" href="css/resume-style.css">
  <style>

  @page {
    margin: 0px;
  }


      /* Global styles
      -------------------------*/
      /* apply a natural box layout model to all elements, but allowing components to change */
      html {
        box-sizing: border-box;
      }
      *, *:before, *:after {
        box-sizing: inherit;
      }
      body {
        font-family: 'KoHo', sans-serif;
        margin: 0;
      }
      h1, h2 {
        font-family: 'Cormorant', serif;
        font-weight: 400;
      }
      h1 {
        font-size: 60px;
      }
      h2 {
        font-size: 40px;
        margin-top: 0;
      }
      h3 {
        margin: 0;
      }
      a {
        color: #22a79c;
      }
      a:hover {
        text-decoration: none;
      }
      .content-wrap {
        max-width: 950px;
        margin: 0 auto;
        padding: 50px 50px;
        overflow: hidden;
      }
      .hide {
         display: none;
      }
      .uppercase {
        text-transform: uppercase;
      }
      
      /* Download button */
      .btn {
        text-decoration: none;
        background: #22a79c;
        color: white;
        padding: 10px;
        display: inline-block;
      }
      
      
      /* Header and Footer
      -------------------------*/
      header, footer {
        background: #014b5f;
        color: #dddddd;
      }
      /* header */
      header {
        padding-top: 50px;
        position: relative;
      }
      header h1, header h2 {
        color: #EDF2F4;
        margin: 0;
      }
      .profile-img {
        border-radius: 50%;
      }
      
      .content-wrap img {
        width: 200px;
        height: 200px;
      }
      
      .download {
        position: absolute;
        bottom: 0;
        right: 0;
      }
      
      /* footer */
      footer {
        text-align: center;
      }
      .contact-info a {
        padding: 10px;
        display: inline-block;
      }
      
      
      /* Navigation
      -------------------------*/
      nav {
        text-align: center;
        background: white;
        position: fixed;
        top: 0;
        width: 100%;
        /*z-index: 100;*/
      }
      nav a {
        display: inline-block;
        padding: 15px 20px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
      }
      
      
      /* Work Experience
      -------------------------*/
      .work {
        background: #ffffff;
      }
      h3 ~ p {
        margin: 0;
      }
      .job-description {
        margin-bottom: 25px;
      }
      .job-description p:first-of-type {
        margin-top: 0;
      }
      
      /* Area of Expertise
      -------------------------*/
      .expertise {
        background: #ffffff;
      }
      h3 ~ p {
        margin: 0;
      }
      .job-description {
        margin-bottom: 25px;
      }
      .job-description p:first-of-type {
        margin-top: 0;
      }
      
      .exptertise .content-wrap{
        padding: 0;
      }
      
      
      /* Education
      -------------------------*/
      .education {
        background: linear-gradient(rgba(168, 245, 241, 0.8), rgba(118, 160, 160, 0.5)),
                    url(../images/haskell_campus_building.jpg) no-repeat fixed;
        background-size: cover;
      }
      p + h3 {
        margin-top: 30px;
      }
      
      
      
      /* Media Queries
      -------------------------*/
      @media (min-width: 900px) {
        .col-narrow {
          width: 30%;
          float: left;
        }
        .col-wide {
          width: 70%;
          float: left;
          padding-left: 20px;
        }
      }
      @media (max-width: 899px){
        header {
          text-align: center;
        }
        .profile-img {
          width: 200px;
        }
      }.flex-parent-element {
        display: flex;
        width: 50%;
      }
      
      .flex-child-element {
        flex: 1;
        
        margin: 10px;
      }
      
      .flex-child-element:first-child {
        margin-right: 20px;
      }
      
  </style>
</head>
<body>
  <!-- // Intro -->
  <header id="about">
    <div class="content-wrap">
      <div class="col-wide">
        <h1>${personDetail.firstName} ${personDetail.lastName}</h1>
        <h4>${jobPosition}</h4>
        <p>${userSummary}.</p>
      </div>
    </div>
  </header>
  <main>
    <section id="education" class="education">
      <div class="content-wrap">
        <h3>Experience</h3><!-- School 1 details. -->
        ${renderExperience()}
      </div>
    </section>
    <section id="education" class="education">
      <div class="content-wrap">
        <div>
          <h3>Expertise</h3>
          <p>${renderSkills()}</p>
        </div>
        <div>
          <br>
          <br>
          <h3>Hobbies</h3>
          <p>${renderHobbies()}</p>
        </div>
      </div>
    </section><!-- // Education -->
    <section id="education" class="education">
      <div class="content-wrap">
        <h3>Education</h3><!-- School 1 details. -->
        ${renderEducation()}
      </div>
    </section>${renderCertificate()} ${renderAwards()} ${renderReferences()}
  </main><!-- // Footer & contact info -->
  <footer id="contact">
    <div class="content-wrap">
      <h3>Let's Keep in Touch!</h3>
      <div class="contact-info">
        <a href="">${personDetail.email}</a> <a href="">${
    personDetail.phone
  }</a> <a href="">${personDetail.website}</a>
      </div>
    </div>
  </footer>
</body>
</html>
    `;
}
