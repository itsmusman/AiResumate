export function template51(resume) {
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
      certificateHtml = `<section>
        <h2>Certificate</h2>
            ${certificates
              .map(
                (element) =>
                  ` <article>
                <h3>${element.certificate}</h3>
                <h4>${element.institute} - ${element.fromMonth} / ${element.Year}</h4>
                </article>`
              )
              .join("")}
        
         </section>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `<section>
        <h2>Awards</h2>
            ${awards
              .map(
                (element) =>
                  ` <article>
                <h3>${element.awards}</h3>
                <h4>${element.institute} - ${element.Year}</h4>
                </article>`
              )
              .join("")}
        
         </section>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `<section>
        <h2>Reference</h2>
            ${references
              .map(
                (element) =>
                  ` <article>
                <h3>${element.reference}</h3>
                <h4>${element.institute} </h4>
                </article>`
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
      result += ` <article>
<h3>${element.position}</h3>
<h4>${element.company} / ${element?.city ?? []} / ${
        element.fromYear
      }${cleanMonth(element.fromMonth)} - ${element.toYear}${cleanMonth(
        element.toMonth
      )}</h4>

<ul>`;
      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li>${role}</li>`;
      });
      result += `${roles}
    
</ul>
</article>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        ` <ul>
<li>
${element.degree} <br/>
 ${element.university} ,${element.city ?? []}  ${element.fromYear}-${
          element.toYear
        }
</li>
<li>
    <span>Degree</span>
    <span>University</span>
    <span>Years</span>
    <span>City</span>
</li>
</ul>`;
    });

    return result;
  }

  return ` 
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Cesar Flores | Curriculum Vitae</title>
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <style>

    @page {
      margin: 0px;
    }

      /*  --------- LAYOUT ---------  */
      
      .main-container {
          display: flex;
          width: 1200px;
          justify-content: center;
      
      }
      
      
      
      /*  --------- GENERAL ---------  */
      
      ul {
          list-style-type: none;
      }
      
      .clear {
          clear: both;
      }
      
      h1, h2 {
          text-transform: uppercase;
      }
      
      /*  --------- ASIDE ---------  */
      aside {
          background-color: #647087;
          flex-basis: 25%;
      }
      
      aside * {
          color: white;
      }
      
      aside h2 {
          text-transform: uppercase;
          letter-spacing: 5px;
      }
      
      aside section h2:first-child {
          border-bottom: 2px solid white;
      }
      
      #profile-pic img{
          border-radius: 50%;
          width: 150px;
          height: auto;
      }
      
      /*  --------- MAIN ---------  */
      
      main {
          flex-basis: 60%;
          width: 60%;
          padding:20px
      }
      
      main section h2 {
          letter-spacing: 5px;
      }
      
      .hero {
          background-color: #F7DDC3;
          box-shadow: 2px 2px 40px 1px #647087 inset;
          padding: 15% 0;
          text-align: center;
      }
      
      .hero h2 {
          color: white;
          border-top: 2px solid white;
          text-transform: none;
          letter-spacing: 10px;
      }
      
      .hero h1 {
          letter-spacing: 10px;
      }
      
      /*
      .about-me {
          background-color: #EDC0AF;
      }
      
      .about-me h2 {
          background-color: white;
      }*/
      
      .about-me p {
          line-height: 2em;
          background-color: #F7DDC3;
          padding: 5px;
      }
      
      article h3, 
      article h4 {
          font-weight: bold;
      }
      
      article ul {
          list-style-type: square;
      }
      
      /*  --------- REFERENCES ---------  */
      
      .references {
          display: flex;
          flex-wrap: wrap;
          background-color: #F7DDC3;
      }
      
      .references article {
          width: 50%;
          text-align: center;
      }
      
      /*  DL  */
      
      dl {
          display: flex;
          flex-wrap: wrap;
      }
      
      dt, dd {
          line-height: 1.5em;
          border-top: 1px solid white;
      }
      
      
      /*
      dt {
          clear: left;
          width: 30%;
          float: left;
          font-weight: bolder;
      }
      
      dd {
          clear: right;
          width: 50%;
          float: left;
          margin: 0;
      }
      */
      
      dt:last-of-type,
      dd:last-of-type {
          border-bottom: 1px solid white;
      }
      
      dt, 
      dd {
          margin: 0;
          flex-basis: 40%;
      }
      
      dt {
          font-weight: bolder;
      }
      
      
      /*  ICONS */
      
      .fb::before {
          content: "\f02d";
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
      }
      
      .tw::before {
          content: "\f081";
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
      }
      
      .in::before {
          content: "\f16d";
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
      }
      
      .gh::before {
          content: "\f09b";
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
      }
      
      .yt::before {
          content: "\f431";
          font-family: "Font Awesome 5 Free";
          font-weight: 900;
      }
      
      .social-item::before {
          padding-right: 15px;
      }
      
      
      /*  METER  */
      
      meter {
          display: block;
          width: 80%;
      }
      
      meter::-webkit-meter-optimum-value {
          background: none;
          background-color: red; 
      }
      
      meter::-moz-meter-optimum-value {
          background: none;
          background-color: red; 
      }
      
      
      
      
    </style>
  </head>
  <body>
    <div class="main-container">
      <aside>
        <figure id="profile-pic"></figure>
        <section>
          <h2>Contact</h2>
          <dl>
            <dt>${personDetail.phone}</dt>
            <dd></dd>
            <dt>${personDetail.email}</dt>
            <dd></dd>
            <dt>${personDetail.website}</dt>
            <dd></dd>
            <dt>${personDetail.city},${personDetail.country}</dt>
          </dl>
          <div class="clear"></div>
        </section>
        <section>
          <h2>Education</h2>${renderEducation()}
        </section>
        <section>
          <h2>Personal Skills</h2>
          <ul>
            <li>${renderSkills()}</li>
          </ul>
        </section>
        <section>
          <h2>Hobbies</h2>
          <ul>
            <li>${renderHobbies()}</li>
          </ul>
        </section>
      </aside>
      <main>
        <section class="hero">
          <h1>${personDetail.firstName} ${personDetail.lastName}</h1>
          <h2>${jobPosition}</h2>
        </section>
        <section class="about-me">
          <h2>About me</h2>
          <p>${userSummary}</p>
        </section>
        <section>
          <h2>Experience</h2>${renderExperience()}
        </section>${renderCertificate()} ${renderAwards()} ${renderReferences()}
      </main>
    </div>
  </body>
  </html>`;
}
