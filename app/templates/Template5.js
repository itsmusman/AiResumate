export function template5(resume) {
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
          <div class="edu">
           <h3 class="title">CERTIFICATION</h3>
              ${certificates
                .map(
                  (element) =>
                    `<div class="awards_item">
                <p class="item_preTitle">${element.fromYear}${cleanMonth(
                      element.fromMonth
                    )}</p>
                <h4 class="item_title">${element.institute}</h4>
                <p class=" description">
                ${element.certificate}
                </p>
                </div>
              
              </div>`
                )
                .join("")}
           </div>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
          <div class="edu">
           <h3 class="title">AWARDS</h3>
             ${awards
               .map(
                 (element) =>
                   `<div class="awards_item">
               <p class="item_preTitle">${element.Year}</p>
               <h4 class="item_title">${element.institute}</h4>
               <p class=" description">
               ${element.awards}
               </p>
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
          <div class="edu">
          <h3 class="title">REFERENCE</h3>
             ${references
               .map(
                 (element) =>
                   `<div class="awards_item">
               
               <h4 class="item_title">${element.institute}</h4>
               <p class=" description">
               ${element.reference}
               </p>`
               )
               .join("")}
          </div>`;
    }
    return referencesHtml;
  }

  function renderSkills() {
    var result = "";
    skills.forEach((element) => {
      result = result + `<li>${element.name}</li>`;
    });
    return result;
  }

  function renderHobbies() {
    var result = "";
    hobbies.forEach((element) => {
      result = result + `<li>${element.name}</li>`;
    });
    return result;
  }

  function renderExperience() {
    var result = "";
    experience.forEach((element) => {
      result += `<div class="exp_item">
  <p class="item_preTitle">${element.fromYear}${cleanMonth(
        element.fromMonth
      )} - ${element.toYear}${cleanMonth(element.toMonth)}</p>
  <h4 class="item_title">${element.company} , ${element?.city ?? []}</h4>
 
  <p class="item_subtitle">${element.position}</p>`;

      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<p class=" description">${role}</p>`;
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
        ` <div class="edu_item">
  <p class="item_preTitle">
  ${element.fromYear}-${element.toYear}</p>
  <h4 class="item_title">${element.degree}</h4>
  <p class="item_subtitle">
  ${element.university}
  </p>
  <p class="item_subtitle">
  ${element.city ?? []}
  </p>
  </div>`;
    });

    return result;
  }

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Resume</title>
      <script src="https://unpkg.com/feather-icons"></script>
      <link rel="stylesheet" href="style.css">
      <style>
  
      @page {
        margin: 0px;
      }
  
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap');
  
        @page {
          margin: 0px;
        }
        
        * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        :root {
            --primary-color: #FFFFFF ;
            --text-color: #FFFFFF;
        }
        html {
            font-size: 10px;
        }
        body {
            font-family: Inter, sans-serif;
            background-color: black;
            color: white;
        }
        
        /* common styles */
        img {
            width: 100%;
        }
        a {
            text-decoration: none;
            color: white;
        }
        .description {
            margin-top: 1rem;
            font-size: 1.5rem;
            font-weight: 400;
            color: var(--text-color);
        }
        .title {
            color: var(--primary-color);
            font-weight: 700;
            font-size: 2rem;
            text-transform: uppercase;
        }
        .item_preTitle {
            font-size: 1.4rem;
            color: var(--text-color);
            font-weight: 300;
        }
        .item_title {
            font-size: 1.6rem;
            color: white;
            font-weight: 500;
            margin: 0.8rem 0;
        }
        .item_subtitle {
            font-size: 1.4rem;
            color: var(--text-color);
            font-weight: 400;
        }
        
        /* layouts */
        .container {
            max-width: 1000px;
            width: 90%;
            margin: 0 auto;
            display: grid;
            padding: 5rem;
            background:  #2590D6;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }
        @media only screen and (max-width: 768px) {
            .container {
                width: 100%;
                grid-template-columns: 1fr;
                padding: 3rem;
                gap: 7rem;
            }
        }
        .profile {
            grid-column: 1 / -1;
            margin-bottom: 2rem;
        }
        .group-1,
        .group-2 {
            display: flex;
            flex-direction: column;
            gap: 5rem;
        }
        .group-3 {
            max-width: 700px;
            width: 100%;
            margin: 0 auto;
            grid-column: 1/-1;
            display: flex;
            flex-direction: row;
            gap: 5rem;
        }
        .group-3 > div {
            flex: 1;
        }
        @media only screen and (max-width: 768px) {
            .profile {
                margin-bottom: 0;
            }
            .group-3 {
                flex-direction: column;
            }
        }
        
        /* profile */
        .profile_container {
            display: flex;
            gap: 2rem;
        }
        .profile_profileImg {
            max-width: 250px;
        }
        .profile_name_firstName {
            color: white;
            font-weight: 200;
            font-size: clamp(2rem, 8vw, 4rem);
            text-transform: uppercase;
            display: block;
            margin-bottom: -0.8rem;
        }
        .profile_name_lastName {
            color: var(--primary-color);
            font-weight: 700;
            font-size: clamp(2.5rem, 15vw, 7rem);
            text-transform: uppercase;
            display: block;
        }
        .profile_title {
            font-size: 1.5rem;
            font-weight: 400;
            text-transform: uppercase;
        }
        .downloadBtn {
            display: block;
            text-decoration: underline;
            font-size: 1.6rem;
            margin-top: 1rem;
        }
        .downloadBtn:hover {
            color: var(--primary-color);
        }
        @media only screen and (max-width: 768px) {
            .profile_container {
                flex-direction: column;
            }
        }
        
        /* Expertise */
        .skills_list {
            margin-top: 1rem;
            margin-left: 2rem;
            line-height: 2;
        }
        
        /* Ref  */
        .ref_item {
            margin-top: 2rem;
        }
        .ref_name {
            font-size: 1.6rem;
            font-weight: 700;
        }
        
        /* eduction */
        .edu_item {
            margin-top: 2rem;
        }
        
        /* certification */
        .certification_item {
            margin-top: 2rem;
        }
        /* exp */
        .exp_item {
            margin-top: 2rem;
        }
        
        /* awards */
        .awards_item {
            margin-top: 2rem;
        }
        /* Interests */
        .interest_items {
            margin-top: 2rem;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 2rem;
        }
        .interest_item {
            font-size: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            color: var(--text-color);
        }
        .interest_item svg {
            width: 2rem;
        }
        
        /* socials */
        .social_items {
            margin-top: 2rem;
        }
        .social_item {
            margin-top: 1.5rem;
            font-size: 1.5rem;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            justify-content: flex-start;
            color: var(--text-color);
        }
        .social_item:hover {
            color: var(--primary-color);
        }
        .social_item svg {
            width: 2rem;
        }
        
        hr {
            grid-column: 1/-1;
            width: 80%;
            margin: 0 auto;
            margin-top: 5rem;
            margin-bottom: 1rem;
            border: none;
            border-top: 2px solid rgba(128, 128, 128, 0.229);
        }
        @media only screen and (max-width: 768px) {
            hr {
                margin: 0 auto;
            }
        }
        
      </style>
    </head>
    <body>
      <div class="container">
        <div class="profile">
          <div class="profile_container">
            <div>
              <h1 class="profile_name"><span class="profile_name_firstName">${
                personDetail.firstName
              }</span> <span class="profile_name_lastName">${
    personDetail.lastName
  }</span></h1>
              <p class="profile_title">${jobPosition}</p>
              <p class="description profile_description">${userSummary}</p>
            </div>
          </div>
        </div>
        <div class="group-1">
          <div class="skills">
            <h3 class="title">Expertise</h3>
            <ul class="skills_list description">
              ${renderSkills()}
            </ul>
          </div>
          <div class="skills">
         
            <ul >
            ${renderReferences() ?? []}
            </ul>
          </div>
          <div class="skills">
         
          <ul >
          ${renderAwards() ?? []}
          </ul>
        </div>
          <div class="edu">
            <h3 class="title">Education</h3>${renderEducation()}
          </div>
        
  
          <div class="group-3">
            <div class="contact">
              <h3 class="title">Contact</h3>
              <div class="contact_info">
                <p class="description">${personDetail.city}, 
                                     ${personDetail.country}</p>
                <p class="description">${personDetail.phone}</p>
                <p class="description">${personDetail.email}</p>
              </div>
            </div>
          </div>
  
          
  
          <div class="group-3">
            <div class="contact">
              <h3 class="title">Hobbies</h3>
              <div class="contact_info">
              <span>${renderHobbies()}</span>
              </div>
            </div>
          </div>
          
          
        </div>
  
        <div class="group-2">
          <div class="exp">
            <h3 class="title">Experience</h3>${renderExperience()}
          </div>
          
         
          <hr>
          ${renderCertificate()}
         </div>
      </div>
    </body>
    </html>`;
}
