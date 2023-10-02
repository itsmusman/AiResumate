export function template8(resume) {
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
      <div class="section__title">Certificates</div>
      <div class="section__list-item">
        <ul>
          ${certificates
            .map(
              (element) => `
            
              <p>${element.certificate}</p>
              <span></span>
              <p>${element.institute}</p>
              <p class="dates">${element.Year}${cleanMonth(
                element.fromMonth
              )}</p>
            
          `
            )
            .join("")}
        </ul>
        </div>  `;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
      <div class="section__title">Awards</div>
      <div class="section__list-item">
        <ul>
          ${awards
            .map(
              (element) => `
            
              <p>${element.awards}</p>
              <span></span>
              <p>${element.institute}</p>
              <p class="dates">${element.Year}</p>
            
          `
            )
            .join("")}
        </ul>
      </div>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `
      <div class="section__title">References</div>
      <div class="section__list-item">
        <ul>
          ${references
            .map(
              (element) => `
            
              <p>${element.reference}</p>
              <span></span>
           
              <p>${element.institute}</p>
              
            
          `
            )
            .join("")}
        </ul>
      </div>`;
    }
    return referencesHtml;
  }

  function renderSkills() {
    var result = "";
    skills.forEach((element) => {
      result = result + ` <p>${element.name}<p>`;
    });
    return result;
  }

  function renderHobbies() {
    var result = "";
    hobbies.forEach((element) => {
      result = result + `<p>${element.name}<p>`;
    });
    return result;
  }
  function renderExperience() {
    var result = "";
    experience.forEach((element) => {
      result =
        result +
        `<div class="name">${element.company} , ${element?.city ?? []}</div>
      <div class="addr">${element.position}</div>
    
      <div class="duration">${element.fromYear}${cleanMonth(
          element.fromMonth
        )}  -  ${element.toYear}${cleanMonth(element.toMonth)}</div><div>`;

      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li>${role}</li>`;
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
        `<div class="name">${element.university}</div>
        <div class="addr">${element.degree}</div>
        <div class="addr">${element?.city ?? []}</div>
        <div class="duration">${element.fromYear}${cleanMonth(
          element.fromMonth
        )}  -  ${element.toYear}${cleanMonth(element.toMonth)}</div>`;
    });
    return result;
  }
  return `<html>
  <head>
    <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
<style>

@page {
  margin: 0px;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;  
  }
  body {
    min-height: 100%;  
    background: #eee;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: #222;
    font-size: 14px;
    line-height: 26px;
    padding-bottom: 50px;
  }
  .container {
    max-width: 700px;   
    background: #fff;
    margin: 0px auto 0px; 
    box-shadow: 1px 1px 2px #DAD7D7;
    border-radius: 3px;  
    padding: 40px;
    margin-top: 50px;
  }
  .full-name {
    font-size: 40px;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  .first-name {
    font-weight: 700;
  }
  .last-name {
    font-weight: 300;
  }
  .contact-info {
    margin-bottom: 20px;
  }
  .email ,
  .phone {
    color: #999;
    font-weight: 300;
  }
  .separator {
    height: 10px;
    display: inline-block;
    border-left: 2px solid #999;
    margin: 0px 10px;
  }
  .position {
    font-weight: bold;
    display: inline-block;
    margin-right: 10px;
    text-decoration: underline;
  } 
  .section {
    margin-bottom: 40px;  
  }
  .section:last-of-type {
    margin-bottom: 0px;  
  }
  .section__title {
    letter-spacing: 2px;
    color: #54AFE4;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  .section__list-item {
    margin-bottom: 40px;
  }
  .section__list-item:last-of-type {
    margin-bottom: 0;
  }
  .left ,
  .right {
    vertical-align: top;
    display: inline-block;
  }
  .left {
    width: 50%;    
  }
  .right {
    /* text-align: right; */
    width: 39%;    
  }
  .name {
    font-weight: bold;
  }
  .skills__item {
    margin-bottom: 10px;  
  }
  input {
    display: none;
  }
  label {
    display: inline-block;  
    width: 20px;
    height: 20px;
    background: #C3DEF3;
    border-radius: 20px;
    margin-right: 3px;
  }
  input:checked + label {
    background: #79A9CE;
  }
	</style>
</head>
<body>

<div class="container">
  <div class="header">
    <div class="full-name">
      <span class="first-name">${personDetail.firstName}</span> 
      <span class="last-name">${personDetail.lastName}</span>
    </div>
    <div class="contact-info">
      <span class="email">Email: </span>
      <span class="email-val">${personDetail.email}</span>
      <span class="separator"></span>
      <span class="phone">Phone: </span>
      <span class="phone-val">${personDetail.phone}</span>
      <span class="email">Address: </span>
      <span class="email-val">${personDetail.city},${
    personDetail.country
  }</span>
      <span class="separator"></span>
      <span class="phone">Website: </span>
      <span class="phone-val">${personDetail.website}</span>
    </div>
    
    <div class="about">
      <span class="position">${jobPosition}</span>
      <span class="desc">
      ${userSummary}
      </span>
    </div>
  </div>

    <div class="section">
      <div class="section__title">Experience</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
          <ul>
          ${renderExperience()}
          </ul>   
          </div>
       </div>
    </div>
    <div class="section">
      <div class="section__title">Education</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
          <ul>
          ${renderEducation()}
          </ul>
          </div>
        </div>

      </div>
      
  </div>
    
     <div class="section">

       <div class="section__title">Skills</div>
       <div class="skills">
         <div class="skills__item">
           <div class="left">
          
           
          <ul>
           ${renderSkills()}
           </ul>
            
           </div>
       <div>
       </div>
     <div class="section">
       <div class="section__title">
       Interests
       </div>
         <div class="section__list">
         <div class="section__list-item">
            <ul>
            ${renderHobbies()}
            </ul>
          </div>
         </div>
     </div>
     ${renderCertificate() ?? []}
     ${renderAwards() ?? []}
     ${renderReferences() ?? []}


   </div>
  </div>
</div>
  </body>
</html>`;
}
