export function template53(resume) {
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
      certificateHtml = `<div class="resume_item resume_education">
        <div class="resume_title">Certificate</div>
        <div class="resume_info">
            ${certificates
              .map(
                (element) =>
                  `<div class="resume_data">
       <div class="year">${element.Year}${cleanMonth(element.fromMonth)}</div>
       <div class="content">
           <p><b>${element.institute}</b></p>
           <p>${element.certificate}</p>
         
       </div>
       </div>`
              )
              .join("")}
        
         </div>
         </div>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `<div class="resume_item resume_education">
        <div class="resume_title">Awards</div>
        <div class="resume_info">
            ${awards
              .map(
                (element) =>
                  `<div class="resume_data">
       <div class="year">${element.Year}</div>
       <div class="content">
           <p><b>${element.institute}</b></p>
           <p>${element.awards}</p>
         
       </div>
       </div>`
              )
              .join("")}
        
         </div>
         </div>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `<div class="resume_item resume_education">
        <div class="resume_title">Reference</div>
        <div class="resume_info">
            ${references
              .map(
                (element) =>
                  `<div class="resume_data">
       <div class="year"></div>
       <div class="content">
           <p><b>${element.institute}</b></p>
           <p>${element.reference}</p>
         
       </div>
       </div>`
              )
              .join("")}
        
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
      result += `<div class="resume_data">
        <div class="year">${element.fromYear}${cleanMonth(
        element.fromMonth
      )} / ${element.toYear}${cleanMonth(element.toMonth)}</div>
        <div class="content">
            <p><b>${element.position}</b></p>
            <p>${element.company}</p>
            <p>${element?.city ?? []}</p>`;
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
        `<div class="resume_data">
<div class="year">${element.fromYear} - ${element.toYear}</div>
<div class="content">
    <p><b>${element.university}</b></p>
    <p>${element.degree}</p>
    <p>${element.city ?? []}</p>
</div>
</div>`;
    });

    return result;
  }

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Responsive Resume UI Design in HTML and CSS</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
    <style>

    @page {
      margin: 0px;
    }

      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
      
      *{
          margin: 0;
          padding: 0;
          list-style: none;
          box-sizing: border-box;
          font-family: 'Roboto', sans-serif;
      }
      
      body{
          background: #c4c4c4;
          font-size: 14px;
          line-height: 20px;
      }
      
      .resume_wrapper{
          display: flex;
          width: 800px;
          margin: 50px auto;
          background: #fff;
          padding: 10px;
      }
      
      .resume_wrapper .resume_left{
          width: 35%;
          background: #26252d;
      }
      
      .resume_wrapper .resume_left .resume_image{
          width: 100%;
      }
      
      .resume_wrapper .resume_left .resume_image img{
          width: 100%;
          display: block;
      }
      
      .resume_wrapper .resume_title{
          color: #fff;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 10px;
          letter-spacing: 4px;
      }
      
      .resume_wrapper .resume_left .resume_info{
          color: #84838b;
      }
      
      .resume_wrapper .resume_left .resume_bottom{
          padding: 20px 30px;
      }
      
      .resume_wrapper .resume_item{
          padding: 20px 0;
          border-bottom: 1px solid #0175b2;
      }
      
      .resume_wrapper  .resume_item:last-child{
          border-bottom: 0;
      }
      
      .resume_wrapper .resume_left .resume_namerole{
          display: none;
      }
      
      .resume_wrapper .resume_namerole .name{
          font-size: 20px;
          color: #fff;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 5px;
          letter-spacing: 4px;
      }
      
      .resume_wrapper .resume_left .resume_namerole .role{
          color: #84838b;
      }
      
      .resume_wrapper .resume_left .resume_contact .resume_info:last-child{
           margin-top: 10px;
      }
      
      .resume_wrapper .resume_left .resume_contact .resume_subtitle{
          color: #fff;
          margin-bottom: 2px;
      }
      
      .resume_wrapper .resume_left .resume_skills .skills_list{
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
      }
      
      .resume_wrapper .resume_left .resume_skills .skills_list .skills_bar p{
          position: relative;
          width: 125px;
          height: 20px;
          background: #fff;
      }
      
      .resume_wrapper .resume_left .resume_skills .skills_list .skills_bar p span{        
          position: absolute;
          top: 0;
          left: 0;
          background: #0175b2;
          width: 100%;
          height: 100%;
      }
      
      .resume_wrapper .resume_right{
          width: 65%;
          padding: 20px 40px;
          color: #26252d;
      }
      
      .resume_wrapper .resume_right .resume_namerole .name{
          color: #26252d;
          font-size: 32px;
      }
      
      .resume_wrapper .resume_right .resume_namerole .role{
          font-size: 14px;
          text-transform: uppercase;
      }
      
      .resume_wrapper .resume_right .resume_item .resume_title{
          color: #26252d;
      }
      
      .resume_wrapper .resume_right .resume_data{
          display: flex;
      }
      
      .resume_wrapper .resume_right .resume_data .year{
          padding-right: 35px;
          width: 115px;
          position: relative;
      }
      
      .resume_wrapper .resume_right .resume_data .content{
          padding-left: 35px;
          margin-bottom: 20px;
          width: calc(100% - 115px);
      }
      
      .resume_wrapper .resume_right .resume_data .year:before{
          content: "";
          position: absolute;
          top: 5px;
          right: 0;
          width: 10px;
          height: 10px;
          background: #fff;
          border: 1px solid #26252d;
          border-radius: 50%;
      }
      
      .resume_wrapper .resume_right .resume_data .year:after{
          content: "";
          position: absolute;
          top: 17px;
          right: 4px;
          width: 3px;
          height: 90%;
          background: #0175b2;
      }
      
      .resume_wrapper .resume_right .resume_data:last-child .year:after{
          display: none;
      }
      
      .resume_wrapper .resume_right .resmue_interests .resume_info{
          display: flex;
          justify-content: space-between;
          text-align: center;
      }
      
      .resume_wrapper .resume_right .resmue_interests .interests .int_icon{
          font-size: 38px;
          color: #0175b2;
          margin-bottom: 10px;
      }
      
      
      @media screen and (max-width: 800px){
          .resume_wrapper .resume_right .resume_namerole{
              display: none;
          }
          .resume_wrapper .resume_left .resume_namerole{
              display: block;
          }
          .resume_wrapper{
              width: 95%;
              margin: 10px auto;
              flex-direction: column;
          }
          .resume_wrapper .resume_left,
          .resume_wrapper .resume_right{
              width: 100%;
          }
      }
      
      @media screen and (max-width: 424px){
          .resume_wrapper .resume_right{
              padding: 20px 30px;
          }
          .resume_wrapper .resume_right .resume_data{
              flex-direction: column;
          }
          .resume_wrapper .resume_right .resume_data .year{
              padding: 0;
              margin-bottom: 5px;
              width: 100%;
              color: #0175b2;
          }
          .resume_wrapper .resume_right .resume_data .year:before,
          .resume_wrapper .resume_right .resume_data .year:after{
              display: none;
          }
          .resume_wrapper .resume_right .resume_data .content{
              width: 100%;
              padding: 0;
          }
          .resume_wrapper .resume_right .resmue_interests .interests .int_icon{
              font-size: 24px;
          }
      }
    </style>
  </head>
  <body>
    <div class="resume_wrapper">
      <div class="resume_left">
        <div class="resume_bottom">
          <div class="resume_item resume_namerole">
            <div class="name">
              ${personDetail.firstName} ${personDetail.lastName}
            </div>
            <div class="role">
              ${jobPosition}
            </div>
          </div>
          <div class="resume_item resume_profile">
            <div class="resume_title">
              Profile
            </div>
            <div class="resume_info">
              ${userSummary}.
            </div>
          </div>
          <div class="resume_item resume_address">
            <div class="resume_title">
              Address
            </div>
            <div class="resume_info">
              ${personDetail.city} , ${personDetail.country}
            </div>
          </div>
          <div class="resume_item resume_contact">
            <div class="resume_title">
              Contact
            </div>
            <div class="resume_info">
              <div class="resume_subtitle">
                Phone
              </div>
              <div class="resume_subinfo">
                ${personDetail.phone}
              </div>
            </div>
            <div class="resume_info">
              <div class="resume_subtitle">
                Email
              </div>
              <div class="resume_subinfo">
                ${personDetail.email}
              </div>
            </div>
          </div>
          <div class="resume_item resume_skills">
            <div class="resume_title">
              Skills
            </div>
            <div class="resume_info">
              <div class="skills_list">
                <div class="skills_left">
                  ${renderSkills()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="resume_right">
        <div class="resume_item resume_namerole">
          <div class="name">
            ${personDetail.firstName} ${personDetail.lastName}
          </div>
          <div class="role">
            ${jobPosition}
          </div>
        </div>
        <div class="resume_item resume_education">
          <div class="resume_title">
            Education
          </div>
          <div class="resume_info">
            ${renderEducation()}
          </div>
        </div>${renderCertificate()} ${renderAwards()} ${renderReferences()}
        <div class="resume_item resume_experience">
          <div class="resume_title">
            Experience
          </div>
          <div class="resume_info">
            ${renderExperience()}
          </div>
        </div>
        <div class="resume_item resmue_interests">
          <div class="resume_title">
            Interests
          </div>
          <div class="resume_info">
            <div class="interests">
              <div class="int_icon"></div>
              <div class="int_data">
                ${renderHobbies()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  </html>`;
}
