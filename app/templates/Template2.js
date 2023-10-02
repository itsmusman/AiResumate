import style from "./styles/Template11";

export function template2(resume) {
  // console.log("template11", resume);
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
      <div class="heading">
      <div class="section-title">Certification</div>
    </div>
    <div class="paragraph dates-para first-paragraph">
          ${certificates
            .map(
              (element) => `
            
              <p>${element.certificate} (${element.institute}) - ${
                element.Year
              }${cleanMonth(element.fromMonth)}</p>
            
          `
            )
            .join("")}
          <span class="field"></span>
    </div> `;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
      <div class="heading">
      <div class="section-title">Awards</div>
    </div>
    <div class="paragraph dates-para first-paragraph">
          ${awards
            .map(
              (element) => `
            
              <p>${element.awards} (${element.institute}) - ${element.Year} </p>
            
          `
            )
            .join("")}
          <span class="field"></span>
    </div> `;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `
      <div class="heading">
      <div class="section-title">Reference</div>
    </div>
    <div class="paragraph dates-para first-paragraph">
          ${references
            .map(
              (element) => `
            
              <p class="txtBold">${element.reference} </p>
              <span>  </span>
              <p>${element.institute}</p>
          `
            )
            .join("")}
          <span class="field"></span>
    </div> `;
    }
    return referencesHtml;
  }

  function renderSkills() {
    let skillsHtml = "";
    if (skills && skills.length > 0) {
      skillsHtml = `
        <div class="heading">
          <div class="section-title">Skills</div>
        </div>
        <div class="paragraph">
          <ul>
            ${skills.map((element) => `<li>${element.name}</li>`).join("")}
          </ul>
        </div>`;
    }
    return skillsHtml;
  }

  function renderHobbies() {
    let hobbyHtml = "";
    if (hobbies && hobbies.length > 0) {
      hobbyHtml = `
        <div class="heading">
          <div class="section-title">Hobbies</div>
        </div>
        <div class="paragraph">
          <ul>
            ${hobbies.map((element) => `<li>${element.name}</li>`).join("")}
          </ul>
        </div>`;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";
    if (experience.length > 0) {
      result += `<div class="heading">
                  <div class="section-title">Work History</div>
                </div>`;
      experience.forEach((element) => {
        result += `<div class="paragraph dates-para first-paragraph">
          <div class="single-column">
            <div class="padded-line date-content">
              <span class="jobdates" format="%Y-%m">${
                element.fromYear
              }${cleanMonth(element.fromMonth)}</span>
              <span dependency="JSTD+EDDT"></span>
              <span class="jobdates" format="%Y-%m">${
                element.toYear
              }${cleanMonth(element.toMonth)}</span>
              <br />
            </div>
            <span class="padded-line">
              <span class="job-title txtBold">${element.position}</span>
            </span>
            <span class="padded-line locationGap txtItl">
              <span class="companyname">${element.company}</span><span>, </span>
              <span class="jobcity">${element?.city ?? []}</span><span> </span>
              <span class="jobstate"></span>
            </span>
            <span class="jobline">
              <ul>`;
        var roles = "";
        (element?.roles ?? []).forEach((role) => {
          roles += `<li>${role}</li>`;
        });
        result += `${roles}</ul>
            </span>
          </div>
        </div>
        <br/>
        `;
      });
    }
    return result;
  }

  function renderEducation() {
    var result = "";
    if (education.length > 0) {
      result += `<div class="heading">
                  <div class="section-title">Education</div>
                </div>`;
      education.forEach((element) => {
        result += `<div class="paragraph">
            <span class="job-title txtBold">${element.degree}</span>
            <p>${element.university}, ${element?.city ?? []}</p>
            <p>${element.fromYear} - ${element.toYear}</p>
          </div>`;
      });
    }
    return result;
  }

  return `<html>
  <head>
   <style>
      ${style}
    </style>
  </head>
  <body>
  <section class="page-wrap">
  <div class="genie-mjs1 fontsize font-face vmargins pagesize">
    <div class="parentContainer">
      <div class="left-box last-box GAKpdf-box">
        <div class="section notdraggable first-section">
          <div class="paragraph first-paragraph">
            <div class="name word-break">
              <span class="field">${personDetail.firstName}</span>
              <span> </span>
              <span class="field word-break">${personDetail.lastName}</span>
            </div>
            <div class="resumeTitle">${jobPosition}</div>
          </div>
        </div>
        <div class="section SECTION_CNTC notdraggable">
          <div class="heading">
            <div class="section-title">Contact</div>
          </div>
          <div class="paragraph PARAGRAPH_CNTC first-paragraph">
            <div class="address">
              <div class="single-column">
                <div>
                  <div class="txtBold">Address</div>
                  <div class="field"></div>
                  <span class="field">${personDetail.city}</span>
                  <span>, </span>
                  <span class="field">${personDetail.country}</span>
                </div>
                <div class="txtBold mt5">Phone</div>
                <div>
                  <span class="field">${personDetail.phone}</span>
                </div>
                <div class="txtBold mt5">E-mail</div>
                <div class="word-break">
                  <span class="field">${personDetail.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section">

          <div class="paragraph first-paragraph">
           
                  ${renderSkills()}
                
          </div>
          <Br/>
          <div class="paragraph first-paragraph">
            
                  ${renderHobbies()}
                
          </div>
        </div>
      </div>
      <div class="right-box last-box">
        <div class="section summary notdraggable">
          <div class="paragraph first-paragraph">
            <div class="field single-column">
              <p class="summary">${userSummary}</p>
            </div>
          </div>
        </div>
        <div class="section experience">
         
          ${renderExperience()}
        </div>
        <div class="section education">
          
          <div class="paragraph dates-para first-paragraph">
            ${renderEducation()}
          </div>
        </div>
        <div class="section education">
          ${renderCertificate() || ""}
        </div>
        <div class="section education">
          ${renderAwards() || ""}
        </div>
        <div class="section education">
          ${renderReferences() || ""}
        </div>
      </div>
    </div>
  </div>
</section>
  </body>
</html>`;
}
