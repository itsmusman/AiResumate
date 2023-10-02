export function template40(resume) {
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
        <section class="education">
        <div class="section__heading">
          <h1>Certificate</h1>
         
        </div>
            ${certificates
              .map(
                (element) =>
                  ` <div class="section__item">
           <div>
             <h4 class="education__institution section__subheading">${
               element.institute
             }</h4>
             <h5 class="section__subsubheading">${element.certificate}</h5>
           </div>
          <div>  
             <h5 class="section__date-range">${element.Year}${cleanMonth(
                    element.fromMonth
                  )}</h5>
         </div>
        </div>`
              )
              .join("")}
              </section>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
        <section class="education">
        <div class="section__heading">
          <h1>Awards</h1>
         
        </div>
            ${awards
              .map(
                (element) =>
                  ` <div class="section__item">
           <div>
             <h4 class="education__institution section__subheading">${element.institute}</h4>
             <h5 class="section__subsubheading">${element.awards}</h5>
           </div>
           <div>
             
             <h5 class="section__date-range">${element.Year}</h5>
           </div>
           </div>`
              )
              .join("")}
              </section>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `
        <section class="education">
        <div class="section__heading">
          <h1>Reference</h1>
         
        </div>
            ${references
              .map(
                (element) =>
                  ` <div class="section__item">
           <div>
             <h4 class="education__institution section__subheading">${element.institute}</h4>
             <h5 class="section__subsubheading">${element.reference}</h5>
           </div>
           <div>
             
           </div>
           </div>`
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
      result += `<div class="section__item">
<div>
    <h4 class="education__institution section__subheading">${
      element.company
    }</h4>
    <h4 class="section__location">${element?.city ?? []}</h4>
</div>
<div>
    <h5 class="section__subsubheading">${element.position}</h5>
    <h5 class="section__date-range">${element.fromYear}${cleanMonth(
        element.fromMonth
      )} - ${element.toYear}${cleanMonth(element.toMonth)}</h5>
</div>
<ul>`;
      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li>${role}</li>`;
      });
      result += `${roles}
</ul>
</div>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        ` <div class="section__item">
<div>
  <h4 class="education__institution section__subheading">${
    element.university
  }</h4>
  <h4 class="section__location">${element.city ?? []}</h4>
</div>
<div>
  <h5 class="section__subsubheading">${element.degree}</h5>
  <h5 class="section__date-range">${element.fromYear}${cleanMonth(
          element.fromMonth
        )} - ${element.toYear}${cleanMonth(element.toMonth)}</h5>
</div>
</div>`;
    });

    return result;
  }

  return ` 
  <!DOCTYPE html>
  <html>
  <head>
    <title>Resume of First Last</title>
    <meta charset="UTF-8">
    <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <style>

    @page {
      margin: 0px;
    }

    @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,300i,400,400i,500,500i,700,700i");
    @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i");
  
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline; }
  
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block; }
  
    body {
    line-height: 1; }
  
    blockquote, q {
    quotes: none; }
  
    blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none; }
  
    table {
    border-collapse: collapse;
    border-spacing: 0; }
  
    :root {
    background-color: #EFEFEF;
    font-family: 'Roboto', sans-serif;
    font-weight: 400; }
  
    body {
    display: flex;
    height: 100vh;
    width: 100vw; }
  
    #document {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
    margin: auto;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.3); }
  
    .page {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 10in;
    width: 7.1in;
    align-items: stretch;
    justify-content: stretch; }
  
    .page-break {
    display: none; }
  
    .about-me {
    text-align: center; }
    .about-me .about-me__name {
      font-weight: 100;
      font-size: 3em; }
      .about-me .about-me__name .about-me__last-name {
        font-weight: 700; }
    .about-me h6 {
      font-size: 0.8em;
      line-height: 1.4em; }
    .about-me .about-me__position {
      margin-top: 0.5em;
      color: #DD3D2A;
      font-family: 'Source Sans Pro';
      font-variant: small-caps;
      font-size: 0.9333rem; }
    .about-me .about-me__address {
      font-weight: 500;
      font-style: italic;
      color: #999999; }
    .about-me .about-me__social > h6 {
      display: inline; }
      .about-me .about-me__social > h6 a {
        text-decoration: none;
        color: black; }
        .about-me .about-me__social > h6 a > svg {
          margin-right: 0.4em; }
      .about-me .about-me__social > h6:not(:last-child)::after {
        content: '|';
        margin-left: 0.75em;
        margin-right: 0.5em; }
  
    section {
    width: 100%;
    margin-top: 1rem;
    font-family: 'Source Sans Pro'; }
    section .section__heading {
      color: #DD3D2A;
      font-weight: 700;
      font-size: 1.4rem;
      margin-bottom: 0.7em;
      display: flex;
      flex-direction: row; }
      section .section__heading span.section__heading-underline {
        flex-grow: 1;
        border-bottom: 2px solid #999999;
        margin-bottom: 4px;
        margin-left: 0.3em; }
    section .section__item {
      margin-bottom: 0.5rem; }
      section .section__item > div {
        width: 100%; }
        section .section__item > div:not(:first-child) {
          margin-top: 0.3rem; }
        section .section__item > div > * {
          display: inline; }
        section .section__item > div > *:last-child {
          float: right; }
        section .section__item > div .section__subheading {
          font-weight: 600; }
        section .section__item > div .section__location {
          color: #DD3D2A;
          font-size: 0.9rem;
          font-style: italic; }
        section .section__item > div .section__subsubheading {
          font-size: 0.9rem;
          font-weight: 500;
          font-variant: small-caps;
          color: #5D5D5D; }
        section .section__item > div .section__date-range {
          font-size: 0.9rem;
          font-weight: 500;
          font-style: italic; }
    section ul {
      margin-left: 1.1rem;
      margin-top: 0.5rem;
      font-size: 0.9rem;
      line-height: 1.1em; }
      section ul li {
        font-size: 0.9rem; }
      section ul li:not(:last-child) {
        margin-bottom: 0.2rem; }
    section ul, section table {
      font-size: 0.9rem;
      color: #333333; }
  
    .skills table tr td:first-child {
    width: 11em;
    text-align: right;
    font-weight: bold;
    font-size: 1rem;
    padding-right: 0.8em; }
  
    .skills table tr {
    line-height: 1.3em; }
  
    .skills .skills__list span:not(:last-child)::after {
    content: ', '; }
    .userSummary{
    text-align: center;
    font-weight: bold;
    margin-bottom: 5px;
    margin-top: 10px;
    }
    footer {
    margin-top: auto;
    position: relative;
    top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.75em;
    font-variant: small-caps; }
  
    @media print {
    body {
      overflow: visible; }
    :root #document {
      float: none;
      display: block;
      width: unset;
      height: unset;
      padding: 0;
      box-shadow: none; }
    .page-break {
      display: block;
      page-break-before: always;
      flex: 1; }
    @page {
      size: letter portrait;
      margin: 0.5in 0.7in; } }
  
    </style>
  </head>
  <body>
    <div id="document">
      <div class="page">
        <header class="about-me">
          <h1 class="about-me__name">${
            personDetail.firstName
          }<span> </span><span class="about-me__last-name">${
    personDetail.lastName
  }</span></h1>
          <h6 class="about-me__position">${jobPosition}</h6>
         
          <h6><span class="about-me__social"><a href="">${
            personDetail.phone
          }   | ${personDetail.email} | ${personDetail.city} , ${
    personDetail.country
  } </a></span></h6>
          
          <p class="userSummary">${userSummary}</p>
        </header>
        <section class="experience">
          <div class="section__heading">
            <h1>Experience</h1>
          </div>${renderExperience()}
        </section>
        <section class="education">
          <div class="section__heading">
            <h1>Education</h1>
          </div>${renderEducation()}
        </section>
        <section class="education">
          ${renderCertificate()}
        </section>
        <section class="education">
          ${renderAwards()}
        </section>
        <section class="skills">
         ${renderReferences()}
          
        </section>
        <section class="skills">
          <div class="section__heading">
            <h1>Skills</h1>
          </div>
          <table>
            <tr>
              <td class="skills__heading"></td>
              <td class="skills__list"><span>${renderSkills()}</span></td>
            </tr>
          </table>
        </section>
        <section class="skills">
          <div class="section__heading">
            <h1>Hobbies</h1>
          </div>
          <table>
            <tr>
              <td class="skills__heading"></td>
              <td class="skills__list"><span>${renderHobbies()}</span></td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  </body>
  </html>
`;
}
