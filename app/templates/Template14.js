export function template14(resume) {
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
      certificateHtml = `<article>
        <p id="heading"><span>CERTIFICATE</span></p>
    </article>
    <ul style="inline-style-type:bullet;color:black;font-size:90%;">
            ${certificates
              .map(
                (element) =>
                  `<li style="text-align:left;">
                <h4>  ${element.certificate} || ${element.institute} || ${
                    element.Year
                  }${cleanMonth(element.fromMonth)}  </h4>
               
                </li>`
              )
              .join("")}
           </ul>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `<article>
        <p id="heading"><span>AWARDS</span></p>
    </article>
    <ul style="inline-style-type:bullet;color:black;font-size:90%;">
            ${awards
              .map(
                (element) =>
                  `<li style="text-align:left;">
                <h4>  ${element.awards} || ${element.institute} ||  ${element.Year}  </h4>
                </li>`
              )
              .join("")}
           </ul>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `<article>
        <p id="heading"><span>REFERENCE</span></p>
    </article>
    <ul style="inline-style-type:bullet;color:black;font-size:90%;">
            ${references
              .map(
                (element) =>
                  `<li style="text-align:left;">
                  <h4>  ${element.reference} || ${element.institute} </h4>
                  </li>`
              )
              .join("")}
           </ul>`;
    }
    return referencesHtml;
  }

  function renderSkills() {
    let skillsHtml = "";
    if (skills && skills.length > 0) {
      skillsHtml = `
      <article>
        <p id="heading"><span>Skills</span></p>
      </article>
      <ul style="list-style-type: none; color: black; font-size: 90%; text-align: left;">
        ${skills.map((element) => `${element.name}`).join(", ")}
      </ul>
      `;
    }
    return skillsHtml;
  }
  function renderHobbies() {
    let hobbyHtml = "";
    if (hobbies && hobbies.length > 0) {
      hobbyHtml = `
      <article>
      <p id="heading"><span>Hobbies</span></p>
      </article>
      
      <ul style="list-style-type: none; color: black; font-size: 90%; text-align: left;">
      ${hobbies.map((element) => `${element.name}`).join(", ")}
    </ul>
       `;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";
    if (experience.length > 0) {
      result += `
        <article>
          <p id="heading"><span>WORK EXPERIENCE</span></p>
        </article>`;

      experience.forEach((element) => {
        result += `
          <ul style="list-style-type: disc; color: black; font-size: 90%;">
            <li style="text-align:left;">
              <div class="job-details">
                <h4>${element.company} || ${element.position} || ${
          element.fromYear
        } - ${element.fromMonth} / ${element.toYear}${cleanMonth(
          element.toMonth
        )} || ${element?.city ?? []}</h4>
              </div>
            </li>
          </ul>
          <ul style="list-style-type: disc; color: black; font-size: 90%;">`;

        var roles = "";
        (element?.roles ?? []).forEach((role) => {
          roles += ` <li style="text-align:left;">${role}</li>`;
        });

        result += `${roles}
          </ul>`;
      });
    }

    return result;
  }

  function renderExperience() {
    var result = "";
    if (experience.length > 0) {
      result += `
        <article>
          <p id="heading"><span>WORK EXPERIENCE</span></p>
        </article>`;

      experience.forEach((element) => {
        result += `
          <ul style="list-style-type: disc; color: black; font-size: 90%;">
            <li style="text-align: left;">
              <div class="job-details">
                <h4>${element.company} || ${element.position} || ${
          element.fromYear
        } - ${element.fromMonth} / ${element.toYear}${cleanMonth(
          element.toMonth
        )} || ${element?.city ?? ""}</h4>
              </div>
            </li>
          </ul>
          <ul style="list-style-type: disc; color: black; font-size: 90%; text-align: left; margin-left: 2em; padding-left: 0;">`;

        element.roles.forEach((role) => {
          result += `<li>${role}</li>`;
        });

        result += `</ul>`;
      });
    }

    return result;
  }

  function renderEducation() {
    var result = "";
    if (education.length > 0) {
      result += `<article>
        <p id="heading"><span>EDUCATION</span></p>
      </article>`;

      education.forEach((element) => {
        result += `
        <ul style="inline-style-type: bullet; color: black; font-size: 90%;">
        <li style="text-align:left;">
          <h4>${element.degree} || ${element.university} || ${
          element.fromYear
        } - ${element.toYear}   || ${element?.city ?? []} </h4>
        </li>
       </ul> 
        `;
      });
    }

    return result;
  }

  return ` 
  <!DOCTYPE html>
<html>
<head>
  <title>Arsalan Sabir Resume</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="utf-8">
  <style>
    @page {
      margin: 0px;
    }

    body {
      text-align: center;
      font-family: arial;
    }

    #main {
      background-color: #005FA3;
      width: 1200px;
      height: 1300px;
      border: solid 1px black;
    }

    #inner {
      width: 95%;
      background-color: white;
      color: #3C8BCA;
      float: right;
    }

    h1 {
      font-size: 36px;
      margin-bottom: 10px; 
    }

    #para {
      font-size: 24px; 
      font-weight: bold; 
    }
    
    #sum {
      font-size: 10px; 
      font-weight: bold; 
    }

    #side {
      writing-mode: vertical-lr;
      color: white;
      display: inline;
      font-family: arial;
    }

    section {
      width: 100%;
      color: white;
      background-color: white;
      margin-left: 05%;
      float: left;
    }

    span {
      float: left;
      background-color: #3C8BCA;
      width: 200px;
      height: 30px;
      margin-top: -40px;
      margin-left: -2%;
      padding-top: 12px;
    }

    #heading {
      font-size: 15px;
      background-color: #3C8BCA;
      font-weight: bold;
      height: 05px;
      margin-top: 50px;
      clear: both;
    }

    #para {
      color: black;
      width: 90%;
      text-justify: inter-word;
      text-align: justify;
      font-size: 22px;
      clear: both;
    }

    #add {
      background-color: white;
      width: 95%;
      float: right;
      font-size: 80%;
      margin-top: -50px;
      text-align: left;
      clear: both;
    }

    address {
      padding: 1%;
      margin-left: 3%;
      display: inline;
      font-size: 17px;
    }

    nav {
      display:inline;
    }

    img{
      float:right;
      margin-right:5%;
    }

    .title {
      font-size: 26px;
    }
  </style>
</head>
<body>
  <center>
    <div id="main">
      <header id="inner">
        <h1 style="font-size: 36px;">${personDetail.firstName} ${
    personDetail.lastName
  }</h1>
        <div >
          <p class="title">${jobPosition}</p>
        </div>
      </header>
      <div style="color:white; width:96%;float:right;">
        <address>
          Address: ${personDetail.city}, ${personDetail.country} || Phone: ${
    personDetail.phone
  } || Email: ${personDetail.email}
        </address>
      </div>
      <section id="sec">
      
      <article>
      <p id="heading"><span>PROFESSIONAL SUMMARY</span></p>
      </article>

      <ul style="inline-style-type: bullet; color: black; font-size: 90%;">
          <p style="text-align:left;">${userSummary}.</p>
        </ul>
        <br/>
     
        ${renderExperience()}
  
        ${renderAwards()} 
        ${renderCertificate()} 
       
       
          ${renderEducation()}
        
       
        
        ${renderSkills()}
        
        ${renderHobbies()}
        ${renderReferences()}


      
    
      </section>
    </div>
  </center>
</body>
</html>`;
}
