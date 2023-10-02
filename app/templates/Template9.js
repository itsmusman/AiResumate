export function template9(resume) {
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
      <div class="experience-wrapper">
       <h3 class="experience-title">Certificates</h3>
        <ul>
          ${certificates
            .map(
              (element) => `
              <p>${element.certificate}  (${element.institute}) - ${
                element.Year
              }${cleanMonth(element.fromMonth)}</p>`
            )
            .join("")}
        </ul>
        </div>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
      <div class="experience-wrapper">
      <h3 class="experience-title">Awards</h3>
        <ul>
          ${awards
            .map(
              (element) => `
            
              <p>${element.awards}  (${element.institute}) - ${element.Year} </p>
            
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
      <div  class="experience-wrapper">
      <h3 class="experience-title">References</h3>
        <ul>
          ${references
            .map(
              (element) => `
            
              <p>${element.reference} (${element.institute})</p>
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
      result += `<div class="company-wrapper clearfix">
<div class="experience-title">${element.company} , ${element?.city ?? []}</div> 
<div class="time">${element.fromYear}${cleanMonth(element.fromMonth)} - ${
        element.toYear
      }${cleanMonth(element.toMonth)}}</div> 
</div>

<div class="job-wrapper clearfix">
<div class="experience-title">${element.position}</div> 
<div class="company-description">`;

      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<p>${role}</p>`;
      });
      result += `${roles} 
</div> 
</div>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `<div class="company-wrapper clearfix">
      <div class="experience-title">${element.university}</div> 
      <div class="experience-title">${element?.city ?? []}</div> 
      <div class="time">${element.fromYear}${cleanMonth(element.fromMonth)} - ${
          element.toMonth
        } / ${element.toYear}</div> 
    </div>
    
    <div class="job-wrapper clearfix">
      <div class="experience-title">${element.degree}</div> 
      <div class="company-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>  
      </div>
    </div>`;
    });
    return result;
  }

  return `<!DOCTYPE html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
 
<style>
 @import url(https://fonts.googleapis.com/css?family=Varela+Round);
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);

@page {
  margin: 0px;
}

*, *::after, *::before {
  box-sizing:border-box;
}

html,body {
  height: 100%;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-size:16px;
  line-height:1.5em;
}
a {
  color:#66cc99; 
  text-decoration:none;
}
.clearfix::after,
 .clearfix::before {
  content: " ";
	display: table;
}
.clearfix::after{clear:both;}
.bold {color:#4a4e51; font-weight:400;}

.resume-wrapper {
  position:relative;
  text-align:center;
}

.container {
  min-height:200px;
} 

.profile {
  background:#fff;
  color:#9099a0;
}

.name-wrapper {
    float:left;
    width:60%;
  }
  h1 {
    font-size:2.5em;
    text-align:left;
    font-family: 'Varela Round', sans-serif;
    color:#4a4e51;
    text-transform:uppercase;
    line-height:1em;
  }
  li {
    margin-bottom:px;
    list-style-type:none;
  }
  .picture-resume-wrapper {
    width:0%;
    display:block;
    float:left;
  }
  .picture-resume {
    width:220px;
    height:220px;
    background-size:cover;
    border-radius:50%;
    margin-right:0px;
    display:table;
    position:relative;
    vertical-align:middle;
    background:#3d3e42;
   
  }
  .contact-info {
    margin-top:0px;
    font-weight:300;
  }
  .list-titles {
    float:left;
    text-align:left;
    font-weight:600;
    width:20%;
    color:#4a4e51;
    margin: 0;
    padding: 0;
  }
  .list-content{
    float:left;
    margin: 0;
    padding: 0;
    width:30%;
    text-align:left;
    font-weight:300;
  }
  .contact-presentation {
    text-align:left;
    font-weight:300;
    margin-top:0px;
    margin-bottom:0px;
  }
  svg {
    width:100%;
    position:absolute;
    top:0;
    left:0;
    display:none;
  }

  .st0, .st1 {
    fill:#66cc99;
  }


.experience {
  background:#3d3e42;

  color:#9099a0;
  font-weight:300;
 
}
.others {
  
  background:#3d3e42;
  color:#9099a0;
  font-weight:300;
}
  h3.experience-title {
    color:#66cc99;
    text-align:left;
    text-transform:uppercase;
    font-size:1.2em;
    margin-bottom:20px;
    font-weight:400;
  }
  .company-wrapper {
    width:30%;
    float:left;
    text-align:left;
    padding-right:5%;
    margin-bottom:0px;
  }
  .job-wrapper {
    width:70%;
    float:left;
    text-align:left;
    margin-bottom:20px;
  }
  .experience-title {
      color:white;
      margin-bottom:15px;;
    } 
.section-padding {
 padding:0px 0px 40px 40px;
 }

.section-wrapper {
 
}
  h3.section-title {
    color:#66cc99;
    text-align:left;
    text-transform:uppercase;
    font-size:1.2em;
    margin-bottom:20px;
    font-weight:400;
  }
  .skill-percentage {
    margin-bottom:10px;
    position:relative;
  }
  
	</style>
</head>
<body>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <div class="resume-wrapper">
    <section class="profile section-padding">
      <div class="container">
        
        <div class="name-wrapper">
          <h1>${personDetail.firstName}${" "}${
    personDetail.lastName
  }</h1><!-- YOUR NAME AND LAST NAME  -->
        </div>
        <div class="clearfix"></div>
        <div class="contact-info clearfix">
          <ul class="list-titles">
            <li>Phone</li>
            <li>Mail</li>
            <li>Web</li>
            <li>Home</li>
          </ul>
          <ul class="list-content ">
            <li>${personDetail.phone}</li> <!-- YOUR PHONE NUMBER  -->
            <li>${personDetail.email}</li> <!-- YOUR EMAIL -->
            <li><a href="#">${
              personDetail.website
            }</a></li> <!-- YOUR WEBSITE  -->
            <li>${personDetail.city},${
    personDetail.country
  }</li> <!-- YOUR STATE AND COUNTRY  -->
          </ul>
        </div>
        <div class="contact-presentation"> <!-- YOUR PRESENTATION RESUME  -->
          <p><span class="bold">${jobPosition}</span> ${userSummary}</p>
        </div>
       
       
        
      </div>
    </section>
    
    <section class="experience section-padding">
      <div class="container">

        <h3 class="experience-title">Education</h3>
        
        <div class="experience-wrapper">
          ${renderEducation()}
        </div><!--Experience Detail-->

        <h3 class="experience-title">Experience</h3>
        
        <div class="experience-wrapper">
          
        ${renderExperience() ?? []}
          
          
        </div><!--Skill Detail-->
        
        <div class="section-wrapper clearfix">
          <h3 class="section-title">Skills</h3>  <!-- YOUR SET OF SKILLS  -->
  
            ${renderSkills() ?? []}

          
        </div>
        
        <div class="section-wrapper clearfix">
          <h3 class="section-title">Hobbies</h3>  <!-- DESCRIPTION OF YOUR HOBBIES -->

            ${renderHobbies()}

        </div>

        <div class="experience-wrapper">
        ${renderCertificate() ?? []}
        </div>

       
        
        <div class="experience-wrapper">
          
        ${renderAwards() ?? []}
          
        </div>
         
        <div class="experience-wrapper">
          
        ${renderReferences() ?? []}
          
        </div>


    
      </div>
    </section>
    
   
  </div>
  </body>
</html>`;
}
