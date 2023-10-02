export function template54(resume) {
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
      certificateHtml = `<div class="full_info">
      <div class="full_info_item experience">
        <div class="title">Certificate</div>

        <div class="info_wrap">
          <ul>
          ${certificates
            .map(
              (element) =>
                `<li>
            <div class="sub_title">
            ${element.Year}${cleanMonth(element.fromMonth)}
            </div>
            
            <div class="info_item">
                <div class="info_title">
                ${element.certificate} (${element.institute})
                </div>
                <div class="data">
              
                </div>
            </div>
            </li>`
            )
            .join("")}
         </ul>
         </div>
       </div>
       </div>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `<div class="full_info">
      <div class="full_info_item experience">
        <div class="title">Awards</div>

        <div class="info_wrap">
          <ul>
          ${awards
            .map(
              (element) =>
                `<li>
            <div class="sub_title">
             ${element.Year}
            </div>
            
            <div class="info_item">
                <div class="info_title">
                ${element.awards} (${element.institute})
                </div>
                <div class="data">
              
                </div>
            </div>
            </li>`
            )
            .join("")}
         </ul>
         </div>
       </div>
       </div>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `<div class="full_info">
      <div class="full_info_item experience">
        <div class="title">Reference</div>

        <div class="info_wrap">
          <ul>
          ${references
            .map(
              (element) =>
                `<li>
            <div class="sub_title">
            
            </div>
            
            <div class="info_item">
                <div class="info_title">
                ${element.reference} (${element.institute})
                </div>
                <div class="data">
              
                </div>
            </div>
            </li>`
            )
            .join("")}
         </ul>
         </div>
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
      result += `<ul>
    <li>
    <div class="sub_title">
    ${element.fromYear}${cleanMonth(element.fromMonth)} - ${
        element.toMonth
      } / ${element.toYear}
    </div>
    
    <div class="info_item">
        <div class="info_title">
        ${element.company}
        </div>
        <div>
        <p><b>${element.position}</b></p>
        <p>  ${element?.city ?? []} </p>
        </div>
       
        <div class="data">`;
      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<p>${role}</p>`;
      });
      result += `${roles}
           
        </div>
    </div>
</li>
</ul>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `
<div class="sub_title">
${element.fromYear} - ${element.toYear}
</div>

<div class="info_item">
    <div class="info_title">
    ${element.degree} (${element.university})
    </div>
    <div class="data">
    ${element.city ?? []}
    </div>
</div>
`;
    });

    return result;
  }

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
    <link rel="stylesheet" href="styles.css">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  
    <style>

    @page {
      margin: 0px;
    }
          @import url("https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Trade+Winds&display=swap");
      
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
            text-decoration: none;
            font-family: "Montserrat";
          }
      
          body {
            background: #e7f1ff;
            font-size: 14px;
            color: #a0acb5;
            letter-spacing: 1px;
          }
      
          .wrapper {
            width: 100%;
            height: 100%;
          }
      
          .wrapper .resume {
            margin: 5px auto;
            padding: 15px;
            border-radius: 3px;
          }
      
          .resume .profile_info {
            text-align: center;
          }
      
          .resume .profile_info .profile_img {
            width: 100px;
            margin: 0 auto 5px;
          }
      
          .resume .profile_info .profile_img img {
            width: 100%;
            display: block;
          }
      
          .resume .profile_info .profile_data .name {
            font-size: 20px;
            margin-bottom: 5px;
            font-family: "Trade Winds";
          }
      
          .resume .profile_info .profile_data span {
            display: inline-block;
            color: #697c8e;
          }
      
          .resume .view_more_btn a {
            display: block;
            background: #5558c9;
            color: #fff;
            padding: 10px 15px;
            width: 125px;
            margin: 10px auto;
            border-radius: 3px;
          }
      
          .resume .view_more_btn a:hover {
            background: #7377ff;
          }
      
          .resume .title {
            font-size: 16px;
            font-weight: 700;
            color: #5558c9;
            margin-bottom: 15px;
          }
      
          .skills ul {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            justify-content: space-between;
          }
      
          .skills ul li {
            padding: 0 5px 10px;
            width: 20%;
          }
      
          .skills ul li .skill_item {
            background: #fffff5;
            width: 100%;
            height: 100%;
            border-radius: 3px;
            text-align: center;
            padding: 15px 10px;
          }
      
          .full_info_wrap .tabs ul {
            display: flex;
            width: 100%;
            height: 36px;
            border: 1px solid #dfe4e6;
            border-radius: 3px;
          }
      
          .full_info_wrap .tabs ul li {
            padding: 10px 15px;
            width: 33.34%;
            height: 34px;
            text-align: center;
            border-right: 1px solid #dfe4e6;
            background: #f2f4f5;
            color: #a0acb5;
            font-weight: 600;
            cursor: pointer;
          }
      
          .full_info_wrap .tabs ul li:last-child {
            border-right: 0;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
          }
      
          .full_info_wrap .tabs ul li.active,
          .full_info_wrap .tabs ul li:hover {
            background: #fff;
            color: #5558c9;
          }
      
          .full_info {
            padding-top: 25px;
            /* height: 295px; */
            overflow: auto;
          }
      
          .info_wrap {
            padding-left: 5px;
          }
      
          .info_wrap ul li {
            margin-bottom: 10px;
          }
      
          .info_wrap ul li:last-child {
            margin-bottom: 0;
          }
      
          .info_wrap .sub_title {
            font-size: 16px;
            font-weight: 600;
            color: #7377ff;
          }
      
          .info_wrap .info_item {
            padding-top: 10px;
            padding-left: 15px;
          }
      
          .info_wrap .info_item .info_title {
            font-weight: 600;
            margin-bottom: 5px;
          }
      
          .info_wrap .info_item .data {
            font-size: 12px;
          }
      
          .contact .info_wrap ul li span {
            display: inline-block;
          }
      
          .contact .info_wrap ul li span.info_q {
            width: 150px;
          }
      
          .contact .info_wrap ul li span.info_a {
            font-weight: 600;
          }
    </style>
    <title></title>
  </head>
  <body>
    <div class="wrapper">
      <div class="resume">
        <div class="profile_info">
          <div class="profile_data">
            <p class="name">${personDetail.firstName} ${
    personDetail.lastName
  }</p><span>${personDetail.city}, ${personDetail.country}</span>
          </div>
        </div>
        <div class="skills">
          <div class="title">
            Skills
          </div>
          <ul>
            ${renderSkills()}
          </ul>
        </div>
        <div class="skills">
          <div class="title">
            Hobbies
          </div>
          <ul>
            ${renderHobbies()}
          </ul>
        </div>
        <div class="full_info">
          <div class="full_info_item experience">
            <div class="title">
              WORK EXPERIENCE
            </div>
            <div class="info_wrap">
              ${renderExperience()}
            </div>
          </div>
        </div>
        <div class="full_info">
          <div class="full_info_item experience">
            <div class="title">
              EDUCATION
            </div>
            <div class="info_wrap">
              <span>${renderEducation()}</span>
            </div>
          </div>
        </div>${renderCertificate()} ${renderAwards()} ${renderReferences()}
        <div class="full_info">
          <div class="full_info_item contact">
            <div class="title">
              CONTACT
            </div>
            <div class="info_wrap">
              <ul>
                <li><span class="info_q">Email</span> <span class="info_a">${
                  personDetail.email
                }</span></li>
                <li><span class="info_q">Website</span> <span class="info_a">${
                  personDetail.website
                }</span></li>
                <li><span class="info_q">Phone</span> <span class="info_a">${
                  personDetail.phone
                }</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  </html>
    `;
}
