export function template60(resume) {
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
                    <ul>
                    
                   
                    </ul>
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
                    <ul>
                    
                   
                    </ul>
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
                    <ul>
                    
                   
                    </ul>
                    </li>`
                  )
                  .join("")}
               </ul>`;
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
      result += `<li style="text-align:left;">
    <h4>${element.company} || ${element.position} || ${
        element?.city ?? []
      } || ${element.fromYear}${cleanMonth(element.fromMonth)}- ${
        element.toMonth
      } / ${element.toYear} </h4>
    <ul>
        <li style="text-align:justify;margin-right:15px;">`;
      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<p>${role}</p>`;
      });
      result += `${roles}
         
        </li>
    </ul>
    </li>`;
    });

    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `<li style="text-align:left;">
          <h4>${element.degree} ||${element.university} || ${
          element.fromYear
        } - ${element.toYear}  </h4>
          <ul>
          
                  <p>${element?.city ?? []} </p>
         
          </ul>
          </li>`;
    });

    return result;
  }

  return ` 
        <! DOCTYPE html>
        <html>
        
        <head>
            <title>
                Arsalan Sabir Resume
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
            <meta charset=utf-8 />
        
            <style>
    
            @page {
              margin: 0px;
            }
    
                body {
                    text-align: center;
                    font-family: arial;
                    
                  
                }
                
                #main {
                    background-color: #2D806F;
                    width: 1000px;
                    height: 1090px;
                    border: solid 1px black;
                    
                }
                
                #inner {
                    width: 95%;
                    background-color: white;
                    color: #2D806F;
                    float: right;
                    
                }
                
                h1 {
                    float: left;
                    padding: 30px;
                   margin:30px;
                   
                }
                
                #side {
                    writing-mode: vertical-lr;
                    color: white;
                    display: inline;
                    font-family: arial;
                }
                
                section {
                    width: 95%;
                    color: white;
                    background-color: white;
                    margin-left: 05%;
                    float: left;
                }
                
                span {
                    float: left;
                    background-color: #2D806F;
                    width: 200px;
                    height: 30px;
                    margin-top: -40px;
                    margin-left: -2%;
                    padding-top: 12px;
                }
                
                #heading {
                    font-size: 15px;
                    background-color: #2D806F;
                    font-weight: bold;
                    height: 05px;
                    margin-top: 50px;
                }
                
                #para {
                    color: black;
                    width: 90%;
                    text-justify: inter-word;
                    text-align: justify;
                }
                
                #add {
                    background-color: white;
                    width: 95%;
                    float: right;
                    font-size: 80%;
                    margin-top: -50px;
                    text-align: left;
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
            </style>
        </head>
        
        <body>
            <center>
                <div id="main">
                    
        
                    <header id="inner">
                        <h1 style="font-size:36px;">${personDetail.firstName} ${
    personDetail.lastName
  }
                       <br/></h1>
    
                    </header>
                    
                   <div style="color:white; width:96%;float:right;"><address>${
                     personDetail.city
                   }  , ${personDetail.country}</address>phone: ${
    personDetail.phone
  } || email: ${personDetail.email}</div>
                    <section id="sec">
                        <article>
                            <p id="heading"><span>OBJECTIVE</span></p>
                        </article>
                        <p id="para">${userSummary}. </p>
                        <article>
                            <p id="heading"><span>EDUCATION</span></p>
                        </article>
                        <ul style="inline-style-type:bullet;color:black;font-size:90%;">
                           ${renderEducation()}
                        </ul>
                        ${renderCertificate()}
                        ${renderAwards()}
                        ${renderReferences()}
                        <article>
                            <p id="heading"><span>WORK EXPERIENCE</span></p>
                        </article>
                        <ul style="inline-style-type:bullet;color:black;font-size:90%;">
                            ${renderExperience()}
                            
                        </ul>
                        <article>
                            <p id="heading"><span>SKILLS</span></p>
                        </article>
                        <ul style="inline-style-type:bullet;color:black;font-size:90%;">
                           ${renderSkills()}
                        </ul>
                        <article>
                            <p id="heading"><span>HOBBIES</span></p>
                        </article>
                        <ul style="inline-style-type:bullet;color:black;font-size:90%;">
                            ${renderHobbies()}
                        </ul>
                    </section>
        
        
        
                </div>
            </center>
        </body>
        
        </html>`;
}
