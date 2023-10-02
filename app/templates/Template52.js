export function template52(resume) {
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
      certificateHtml = `<section class="references section" id="references">
        <h2 class="section-title">Certificate</h2>
        <div class="references_container bd-grid">
            ${certificates
              .map(
                (element) =>
                  `<div class="references_content bd-grid">
        <span class="references_subtitle">${element.certificate} (${
                    element.institute
                  }) - ${element.Year}${cleanMonth(element.fromMonth)}</span>

    </div>`
              )
              .join("")}
        
         </div>
         </section>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `<section class="references section" id="references">
        <h2 class="section-title">Awards</h2>
        <div class="references_container bd-grid">
            ${awards
              .map(
                (element) =>
                  `<div class="references_content bd-grid">
        <span class="references_subtitle">${element.awards} (${element.institute})  - ${element.Year}</span>
       
    </div>`
              )
              .join("")}
        
         </div>
         </section>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `<section class="references section" id="references">
        <h2 class="section-title">References</h2>
        <div class="references_container bd-grid">
            ${references
              .map(
                (element) =>
                  `<div class="references_content bd-grid">
        <span class="references_subtitle">${element.institute}</span>
        <h3 class="references_title">${element.reference}</h3>
       
    </div>`
              )
              .join("")}
        
         </div>
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
      result += `<div class="experience_data bd-grid">
<h3 class="experience_title">${element.company}</h3>
<span class="experience_company">${element.fromYear}${cleanMonth(
        element.fromMonth
      )}- ${element.toYear}${cleanMonth(element.toMonth)}| <a href="">${
        element.position
      }</a> | ${element?.city ?? []} </span>`;
      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<p class="experience_description">${role}</p>`;
      });
      result += `${roles}
</div>
<br/>
`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `<div class="education_data bd-grid">
<h3 class="education_title">${element.degree}</h3>
<span class="education_studies">${element.university}, ${
          element.city ?? []
        }</span>
<span class="education_year">${element.fromYear} - ${element.toYear}</span>
</div><br/>`;
    });

    return result;
  }

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- BOX ICONS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"><!-- CSS -->
    <link rel="stylesheet" href="assets/css/styles.css"><!-- Favicon -->
    <link rel="icon" href="assets/img/muhammad.jpg" type="image/jpg">
    <title>Muhammad Essa</title>
    <style>

    @page {
      margin: 0px;
    }

      /* GOOGLE FONTS */
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
      
      /* VARIABLES CSS */
      :root {
        --header-height: 3rem;
      
        /* Colors */
        --title-color: #0b0a0a;
        --text-color: #403a3a;
        --text-color-light: #707070;
        --container-color: #fafafa;
        --container-color-alt: #f0efef;
        --body-color: #fcfcfc;
      
        /* Font and typography */
        --body-font: 'Poppins', sans-serif;
        --h1-font-size: 1.5rem;
        --h2-font-size: 1.25rem;
        --h3-font-size: 1rem;
        --normal-font-size: 0.938rem;
        --small-font-size: 0.875rem;
        --smaller-font-size: 0.813rem;
      
        /* Font weight */
        --font-medium: 500;
        --font-semi-bold: 600;
      
        /* Margins */
        --mb-1: 0.5rem;
        --mb-2: 1rem;
        --mb-3: 1.5rem;
      
        /* z index */
        --z-tooltip: 10;
        --z-fixed: 100;
      }
      
      /* BASE */
      *,
      ::before,
      ::after {
        box-sizing: border-box;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      /* Variables Dark theme */
      body.dark-theme{
        --title-color: #F2F2F2;
        --text-color: #BFBFBF;
        --container-color: #212121;
        --container-color-alt: #181616;
        --body-color: #2B2B2B;
      }
      
      
      /* Button Dark/Light */
      .change-theme{
        position: absolute;
        right: 0;
        top: 2.2rem;
        display: flex;
        color: var(--text-color);
        font-size: 1.2rem;
        cursor: pointer;
      }
      
      .change-theme:hover{
        color: var(--text-color);
      }
      /* Font size variables to scale cv */
      body.scale-cv{
        --h1-font-size: .938rem;
        --h2-font-size: .938rem;
        --h3-font-size: .875rem;
        --normal-font-size: 0.813rem;
        --small-font-size: 0.75rem;
        --smaller-font-size: 0.688rem;
      }
      /* Generate PDF button */
      .generate-pdf{
        display: none;
        position: absolute;
        top: 2.2rem;
        left: 0;
        font-size: 1.2rem;
        color: var(--text-color);
        cursor: pointer;
      }
      
      .generate-pdf:hover{
        color: var(--title-color);
      }
      /* Classes modified to reduce size and print on A4 sheet */
      .scale-cv .change-theme,
      .scale-cv .generate-pdf{
        display: none;
      }
      
      .scale-cv .bd-container{
        max-width: 700px;
      }
      
      .scale-cv .section{
        padding: 1.5rem 0 .80rem;
      }
      
      .scale-cv .section-title{
        margin-bottom: .75rem;
      }
      
      .scale-cv .resume_left,
      .scale-cv .resume_right{
        padding: 0 1rem;
      }
      
      .scale-cv .home_img{
        width: 85px;
        height: 85px;
      }
      
      .scale-cv .home_container{
        gap: 1rem;
      }
      
      .scale-cv .home_data{
        gap: .10rem;
      }
      
      .scale-cv .profile_description {
        font-size: 12px;
      }
      
      .scale-cv .home_address,
      .scale-cv .social_container{
        gap: .55rem;
      }
      
      .scale-cv .home_icon,
      .scale-cv .social_icon,
      .scale-cv .interests_icon{
        font-size: 1rem;
      }
      
      .scale-cv .education_container,
      .scale-cv .experience_container,
      .scale-cv .certificate_container{
        gap: 0;
      }
      
      .scale-cv .education_time,
      .scale-cv .experience_time{
        padding-right: 1rem;
      }
      
      .scale-cv .education_rounder,
      .scale-cv .experience_rounder{
        width: 11px;
        height: 11px;
        margin-top: .2rem;
      }
      
      .scale-cv .education_line{
        width: 1px;
        height: 70px;
        transform: translate(5px, 0);
      }
      
      .scale-cv .education_title,
      .scale-cv .education_studies{
        font-size: 12px;
      }
      
      .scale-cv .experience_line{
        width: 1px;
        height: 130px;
        transform: translate(5px, 0);
      }
      
      .scale-cv .education_data,
      .scale-cv .experience_data{
        gap: .20rem;
        font-size: 12px;
      }
      
      
      .scale-cv .skills_name{
        margin-bottom: var(--mb-1);
        font-size: 13px;
      }
      
      .scale-cv .interests_container{
        column-gap: 1.5rem;
        font-size: 10px;
      }
      
      body {
        margin: 0 0 var(--header-height) 0;
        padding: 0;
        font-family: var(--body-font);
        font-size: var(--normal-font-size);
        background-color: var(--body-color);
        color: var(--text-color);
      }
      
      h1,
      h2,
      h3,
      ul,
      p {
        margin: 0;
      }
      
      h1,
      h2,
      h3 {
        color: var(--title-color);
        font-weight: var(--font-medium);
      }
      
      ul {
        padding: 0;
        list-style: none;
      }
      
      a {
        text-decoration: none;
      }
      
      img {
        max-width: 100%;
        height: auto;
      }
      
      /* CLASS CSS */
      .section {
        padding: 1.5rem 0;
      }
      
      .section-title {
        font-size: var(--h2-font-size);
        color: var(--title-color);
        font-weight: var(--font-semi-bold);
        text-transform: uppercase;
        letter-spacing: 0.35rem;
        text-align: center;
        margin-bottom: var(--mb-3);
      }
      
      /* LAYOUT */
      .bd-container {
        max-width: 968px;
        width: calc(100% - 3rem);
        margin-left: var(--mb-3);
        margin-right: var(--mb-3);
      }
      
      .bd-grid {
        display: grid;
        gap: 1.5rem;
      }
      
      .l-header {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: var(--z-fixed);
        background-color: var(--body-color);
        box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);
        transition: 0.3s;
      }
      
      /* NAV */
      .nav {
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      @media screen and (max-width: 968px) {
        .nav_menu {
          position: fixed;
          bottom: -100%;
          left: 0;
          width: 100%;
          padding: 2rem 1.5rem;
          background-color: var(--body-color);
          box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
          border-radius: 1rem 1rem 0 0;
          z-index: var(--z-fixed);
          transition: 0.3s;
        }
      
      .nav_logo, .nav_toggle {
        color: var(--title-color);
        font-weight: var(--font-medium);
      }
      
      .nav_toggle{
        font-size: 1.2rem;
        cursor: pointer;
      }
      
      .nav_item {
        text-align: center;
      }
      
      .nav_list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }
      
      .nav_link{
        display: flex;
        flex-direction: column;
        font-size: var(--smaller-font-size);
        color: var(--text-color-light);
        font-weight: var(--font-medium);
      }
      
      .nav_link:hover{
        color: var(--title-color);
      }
      
      .nav_icon {
        font-size: 1.2rem;
        margin-bottom: var(--mb-1);
      }
      
      /* Show menu */
      .show-menu{
        bottom: var(--header-height);
      }
      
      /* Active menu link */
      .active-link{
        color: var(--title-color);
      }
      }
      /* HOME */
      .home{
        position: relative;
      }
      .home_container{
        gap: 3rem;
      }
      
      .home_data{
        gap: .5rem;
        text-align: center;
      }
      
      .home_img{
        width: 120px;
        height: 120px;
        margin: auto;
        border-radius: 50%;
        justify-content: center;
        margin-bottom: var(--mb-1);
      }
      
      .home_title {
        font-size: var(--h1-font-size);
      }
      
      .home_profession{
        font-size: var(--normal-font-size);
        margin-bottom: var(--mb-1);
      }
      
      .home_address{
        gap: 1rem;
      }
      
      .home_information{
        display: flex;
        align-items: center;
        font-size: var(--smaller-font-size);
      }
      
      .home_icon {
        font-size: 1.2rem;
        margin-right: 25rem;
      }
      
      .home_button-movil{
        display: inline-block;
        border: 2px solid var(--text-color);
        color: var(--title-color);
        padding: 1rem 2rem;
        border-radius: 25rem;
        transition: .3s;
        font-weight: var(--font-medium);
        margin-top: var(--mb-3);
      }
      
      .home_button-movil:hover{
        background-color: var(--text-color);
        color: var(--container-color);
      }
      
      /* SOCIAL */
      .social_container{
        grid-template-columns: max-content;
        gap: 1rem;
      }
      
      .social_link{
        display: inline-flex;
        align-items: center;
        font-size: var(--small-font-size);
        color: var(--text-color);
      }
      
      .social_link:hover{
        color: var(--title-color);
      }
      
      .social_icon{
        font-size: 1.2rem;
        margin-right: .25rem;
      }
      /* PROFILE */
      .profile_description{
        text-align: center;
      }
      /* EDUCATION AND EXPERIENCE */
      .education_content,
      .experience_content{
        display: flex;
      }
      
      .education_time,
      .experience_time{
        padding-right: 1rem;
      }
      
      .education_rounder,
      .experience_rounder{
        position: relative;
        display: block;
        width: 16px;
        height: 16px;
        background-color: var(--text-color-light);
        border-radius: 50%;
        margin-top: .25rem;
      }
      
      .education_line,
      .experience_line{
        display: block;
        width: 2px;
        height: 110%;
        background-color: var(--text-color-light);
        transform: translate(7px, 0);
      }
      
      .education_data,
      .experience_data{
        gap: .5rem;
      }
      
      .education_title,
      .experience_title{
        font-size: var(--h3-font-size);
      }
      
      .education_studies,
      .experience_company{
        font-size: var(--small-font-size);
        color: var(--title-color);
      }
      
      .education_year{
        font-size: var(--smaller-font-size);
      }
      /* SKILLS AND LANGUAGES */
      .skills_content,
      .languages_content{
        grid-template-columns: repeat(2, 1fr);
      }
      
      .languages_content{
        gap: 0;
      }
      
      .skills_name,
      .languages_name{
        display: flex;
        align-items: center;
        margin-bottom: var(--mb-3);
      }
      
      .skills_circle,
      .languages_circle{
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: var(--text-color);
        border-radius: 50%;
        margin-right: .75rem;
      }
      /* CERTIFICATES */
      .certificate_title{
        font-size: var(--h3-font-size);
        margin-bottom: var(--mb-1);
      }
      /* REFERENCES */
      .references_content{
        gap: .25rem;
      }
      
      .references_subtitle{
        color: var(--text-color-light);
      }
      
      .references_subtitle,
      .references_contact{
        font-size: var(--smaller-font-size);
      }
      /* INTERESTS */
      .interests_container{
        grid-template-columns: repeat(3, 1fr);
        margin-top: var(--mb-2);
      }
      
      .interests_content{
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .interests_icon{
        font-size: 1.5rem;
        color: var(--text-color-light);
        margin-bottom: .25rem;
      }
      /* Scroll top */
      .scrolltop{
        position: fixed;
        right: 1rem;
        bottom: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .3rem;
        background-color: var(--container-color-alt);
        border-radius: .4rem;
        z-index: var(--z-tooltip);
        transition: .4s;
        /* visibility: hidden; */
      }
      
      .scrolltop_icon{
        font-size: 1.2rem;
        color: var(--text-color);
      }
      
      .show-scroll{
        visibility: visible;
        bottom: 5rem;
      }
      /*========== MEDIA QUERIES ==========*/
      /* For small devices, menu two columns */
      @media screen and (max-width: 320px){
        .nav_list{
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem .5rem;
        }
      }
      
      
      /* Classes modified for large screen size */
      @media screen and (min-width: 968px){
        body{
          margin: 3rem 0;
        }
      
        .bd-container{
          margin: auto;
          margin-right: auto;
        }
      
        .l-header,
        .scrolltop{
          display: none;
        }
      
        .resume{
          display: grid;
          grid-template-columns: .5fr 1fr;
          background-color: var(--container-color);
          box-shadow: 0 0 8px rgba(13, 12, 12, .15);
        }
      
        .resume__left{
          background-color: var(--container-color-alt);
        }
      
        .resume__left,
        .resume__right{
          padding: 0 1.5rem;
        }
      
        .generate-pdf{
          display: inline-block;
        }
      
        .section-title,
        .profile_description{
          text-align: initial;
          gap: 0;
        }
      
        .home__container{
          gap: 1.5rem;
        }
      
        .home_button-movil{
          display: none;
        }
      
        .references_container{
          grid-template-columns: repeat(2, 1fr);
        }
      
        .languages_content{
          grid-template-columns: repeat(3, max-content);
          column-gap: 3.5rem;
        }
      
        .interests_container{
          grid-template-columns: repeat(4, max-content);
          column-gap: 3.5rem;
        }
      }
    </style>
  </head>
  <body>
    <!-- HEADER -->
    <header class="l-header" id="header">
      <nav class="nav bd-container"></nav>
    </header>
    <main class="l-main bd-container">
      <!-- All elements within this div, is generated in PDF -->
      <div class="resume" id="area-cv">
        <div class="resume__left">
          <!-- HOME -->
          <section class="home" id="home">
            <div class="home_containter section bd-grid">
              <div class="home_data bd-grid">
                <h1 class="home_title">${personDetail.firstName} <b>${
    personDetail.lastName
  }</b></h1>
                <h3 class="home_profession">${jobPosition}</h3>
              </div>
              <div class="home_address bd-grid">
                <span class="home_information"><i class="bx bx-map">&nbsp;</i> ${
                  personDetail.city
                }, ${
    personDetail.country
  }</span> <span class="home_information"><i class="bx bx-envelope">&nbsp;</i> ${
    personDetail.email
  }</span> <span class="home_information"><i class="bx bx-phone">&nbsp;</i> ${
    personDetail.phone
  }</span> <span class="home_information"> ${personDetail.website}</span>
              </div>
            </div><!-- PROFILE -->
            <section class="profile section" id="profile">
              <h2 class="section-title">Profile</h2>
              <p class="profile_description">${userSummary}.</p>
            </section><!-- EDUCATION -->
            <section class="education section" id="education">
              <h2 class="section-title">Education</h2>
              <div class="education_container bd-grid">
                <div class="education_content">
                  <div class="education_time"></div>${renderEducation()}
                </div>
              </div>
            </section><!-- SKILLS  & HOBBIES -->
            <section>
              <div style="width: 100%; display: table;">
                <div style="display: table-row; height: 100px;">
                  <div style="width: 50%; display: table-cell;">
                    <h2 class="section-title">Skills</h2>
                    <ul class="skills_data">
                      ${renderSkills()}
                    </ul>
                  </div>
                  <div style="display: table-cell;">
                    <h2 class="section-title">Hobbies</h2><span class="interests_name">${renderHobbies()}</span>
                  </div>
                </div>
              </div>
            </section>${renderCertificate()}
            <div class="resume__right">
              <!-- EXPERIENCE -->
              <section class="experience section" id="experience">
                <h2 class="section-title">Experience</h2>
                <div class="experience_container bd-grid">
                  <div class="experience_content">
                    <div class="experience_time">
                    ${renderExperience()}
                    </div>
                  </div>
                </div>
              </section><!-- References -->
              ${renderReferences()} ${renderAwards()}
            </div>
          </section>
        </div>
      </div>
    </main>
  </body>
  </html> `;
}
