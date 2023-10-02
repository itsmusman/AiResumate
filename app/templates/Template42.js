export function template42(resume) {
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
        <section class="grid">
        <h2 data-i18n="education.title" class="grid-left">Certificate</h2>
            ${certificates
              .map(
                (element) =>
                  `<article>
              <h3 data-i18n="education.$0.title">${
                element.certificate
              }</span></h3>
              <span  data-i18n="education.$0.date" class="font-small">${
                element.institute
              }</span>

              <ul>
                <p data-i18n="education.$0.$1">${element.Year}${cleanMonth(
                    element.fromMonth
                  )}</p>
              </ul>
              </article>`
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
        <section class="grid">
        <h2 data-i18n="education.title" class="grid-left">Awards</h2>
            ${awards
              .map(
                (element) =>
                  `<article>
              <h3 data-i18n="education.$0.title">${element.awards}</span></h3>
              <span  data-i18n="education.$0.date" class="font-small">${element.institute}</span>

              <ul>
                <p data-i18n="education.$0.$1">${element.Year}</p>
              </ul>
              </article>`
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
        <section class="grid">
        <h2 data-i18n="education.title" class="grid-left">Reference</h2>
            ${references
              .map(
                (element) =>
                  `<article>
              <h3 data-i18n="education.$0.title">${element.reference}</span></h3>
              <span  data-i18n="education.$0.date" class="font-small">${element.institute}</span>

              </article>`
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
      result += ` <article>
<h3 data-i18n="experience.$0.title">${element.position} / <span>${
        element.company
      }</span></h3>
<span data-i18n="experience.$0.date" class="font-small">${
        element.fromMonth
      } / ${element.fromYear} - ${element.toYear}${cleanMonth(
        element.toMonth
      )}  ${element?.city ?? []} </span>
<ul>`;
      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li>${role}</li>`;
      });
      result += `${roles}

</ul>
</article>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `<article>
<h3 data-i18n="education.$0.title">${element.degree}</span></h3>
<span  data-i18n="education.$0.date" class="font-small">${
          element.university
        }</span><span> ,</span>
<span  data-i18n="education.$0.date" class="font-small">${
          element.city ?? []
        }</span>
<ul>
  <p data-i18n="education.$0.$1">${element.fromYear}${cleanMonth(
          element.fromMonth
        )} - ${element.toYear}${cleanMonth(element.toMonth)}</p>
</ul>
</article>`;
    });

    return result;
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="author" content="Andreas Remdt">
        <meta name="description" content="View the résumé of Andreas Remdt, Software Engineer and Hobby Photographer.">
    
        <title>Résumé of Andreas Remdt, Software Engineer</title>
    
        <link rel="stylesheet" href="/css/styles.css">
        <link rel="stylesheet" media="screen" href="/css/screen.css">
        <link rel="stylesheet" media="print" href="/css/print.css">
      </head>
      <style>

      @page {
        margin: 0px;
      }

    @font-face {
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Roboto'), local('Roboto-Regular'), url('/fonts/roboto-regular.woff2') format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: Roboto;
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local('Roboto Bold'), local('Roboto-Bold'), url('/fonts/roboto-bold.woff2') format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    
    @font-face {
      font-family: Poppins;
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Poppins Regular'), local('Poppins-Regular'), url('/fonts/poppins-regular.woff2') format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    
    :root {
      --medium-gray: hsl(232, 13%, 45%);
      --dark-gray: hsl(209, 51%, 11%);
      --light-gray: hsl(0, 0%, 67%);
      --light-yellow: hsl(45, 67%, 96%);
      --dark-yellow: hsl(39, 93%, 61%);
    
      --font-body: Poppins, -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', sans-serif;
      --font-headings: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }
    
    body {
      margin: unset;
      color: var(--dark-gray);
      font: 400 16px/1.6 var(--font-body);
    }
    
    h1, h2, h3, h4 {
      margin: unset;
      font-family: var(--font-headings);
    }
    
    h1 {
      font-size: 50px;
      line-height: 1.2;
    }
    
    h2, h1 {
      width: max-content;
    }
    
    h2::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 40%;
      height: 2px;
      background-color: var(--dark-yellow);
    }
    
    h2, h3 {
      position: relative;
      font-size: 18px;
    }
    
    h3 > span {
      font-weight: 400;
    }
    
    button {
      all: unset;
    }
    
    figure {
      margin: unset;
      position: relative;
      width: max-content;
      z-index: 1;
    }
    
    figure::after {
      content: "";
      position: absolute;
      width: 70%;
      height: 100%;
      right: -20px;
      top: 20px;
      border-radius: .5rem;
      border: 2px solid var(--dark-yellow);
      z-index: -1;
    }
    
    table {
      justify-self: start;
      border-collapse: collapse;
    }
    
    td {
      padding: unset;
      vertical-align: top;
    }
    
    td:first-child {
      padding-right: 20px;
      white-space: nowrap;
    }
    
    input[type="radio"] {
      margin: 0 5px 0;
    }
    
    fieldset {
      margin: unset;
      padding: 10px 20px;
      border-radius: 3px;
      border: 1px solid var(--light-gray);
    }
    
    legend {
      padding: 0 5px;
    }
    
    label {
      display: inline-flex;
      align-items: center;
      color: var(--medium-gray);
    }
    
    a[href] {
      color: var(--dark-gray);
      text-decoration: none;
      position: relative;
      transition: background-color .15s linear;
    }
    
    a[href]::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--dark-yellow);
    }
    
    a[href]:hover,
    a[href]:focus {
      background-color: var(--dark-yellow);
    }
    
    img {
      max-width: 100%;
      height: auto;
      vertical-align: middle;
      border-radius: .5rem;
    }
    
    ul {
      list-style-type: circle;
    }
    
    p, ul, ol, td {
      color: var(--medium-gray);
    }
    
    svg {
      margin-right: 3px;
      vertical-align: middle;
      pointer-events: none;
    }
    
    li svg {
      color: var(--dark-gray);
    }
    
    main {
      max-width: 950px;
      margin: auto;
      padding: 0 40px;
      box-sizing: border-box;
    }
    
    header {
      background-color: var(--light-yellow);
    }
    
    .mt-0 {
      margin-top: unset;
    }
    
    .mb-0 {
      margin-bottom: unset;
    }
    
    .mb-2 {
      margin-bottom: 15px;
    }
    
    .mt-2 {
      margin-top: 15px;
    }
    
    .l-reset {
      padding-left: unset;
      list-style-type: none;
    }
    
    .l-inline li {
      display: inline-block;
      margin-right: 10px;
    }
    
    .lead {
      margin: unset;
      font-size: 20px;
    }
    
    .font-small {
      font-size: 14px;
      color: var(--dark-gray);
    }
    
    .grid {
      display: grid;
      grid-template-columns: 200px auto;
      margin-bottom: 35px;
    }
    
    .grid-left {
      grid-row: 1 / 5;
      align-self: start;
    }
    
    @media screen and (max-width: 800px) {
      .grid {
        display: block;
      }
    }
    
    @media (max-width: 800px) {
      body {
        font-size: 14px;
      }
    
      main {
        padding: 0 20px;
      }
    
      .grid {
        margin-bottom: 40px;
      }
      .JobTitle {
       
        font-size: 25px;
      }
    }
      </style>
      <body>
        <main>
          <nav>
            <button type="button" data-action="toggle-menu" data-target="#downloads" aria-label="Download résumé" title="Download résumé">
              <svg width="20" height="20">
                <use href="/icons/symbol-defs.svg#icon-download"></use>
              </svg>
            </button>
            <button type="button" data-action="toggle-print" aria-label="Print résumé" title="Print résumé">
              <svg width="20" height="20">
                <use href="/icons/symbol-defs.svg#icon-print"></use>
              </svg>
            </button>
            <button type="button" data-action="toggle-menu" data-target="#settings" aria-label="Change language" title="Change language">
              <svg width="20" height="20">
                <use href="/icons/symbol-defs.svg#icon-language"></use>
              </svg>
            </button>
    
            <div class="menu" hidden role="menu" id="downloads">
              <h4>Choose a version:</h4>
              <ul class="l-reset">
                <!-- <li>
                  <svg width="20" height="20">
                    <use href="/icons/symbol-defs.svg#icon-download"></use>
                  </svg>
                  <a href="/files/compact-en.pdf" download="Résumé Andreas Remdt Compact (EN)">Compact (EN)</a>
                </li>
                <li>
                  <svg width="20" height="20">
                    <use href="/icons/symbol-defs.svg#icon-download"></use>
                  </svg>
                  <a href="/files/compact-de.pdf" download="Résumé Andreas Remdt Compact (DE)">Compact (DE)</a>
                </li> -->
                <li>
                  <svg width="20" height="20">
                    <use href="/icons/symbol-defs.svg#icon-download"></use>
                  </svg>
                  <a href="/files/extended-en.pdf" download="Résumé Andreas Remdt Extended (EN)">Extended (EN)</a>
                </li>
                <li>
                  <svg width="20" height="20">
                    <use href="/icons/symbol-defs.svg#icon-download"></use>
                  </svg>
                  <a href="/files/extended-de.pdf" download="Résumé Andreas Remdt Extended (DE)">Extended (DE)</a>
                </li>
              </ul>
            </div>
    
            <div class="menu" hidden role="menu" id="settings">
              <form data-action="form">
                <fieldset>
                  <legend>Language</legend>
    
                  <label>
                    <input type="radio" name="lang" value="de"> German
                  </label>
                  <label>
                    <input type="radio" name="lang" value="en"> English
                  </label>
                </fieldset>
              </form>
            </div>
          </nav>
    
          <div class="page">
          
          <header class="grid">
 
          <h1>${personDetail.firstName} ${personDetail.lastName}</h1>
          </br> <span> </span>
          <p class="JobTitle">${jobPosition}</p>
         
          <ul class="l-reset">
          
           <li>
            <svg width="16" height="16">
              <use href="/icons/symbol-defs.svg#icon-phone"></use>
            </svg>
            <a href="tel:004915203676119">${personDetail.city}</a>
          </li>
            <li>
            <svg width="16" height="16">
              <use href="/icons/symbol-defs.svg#icon-phone"></use>
            </svg>
            <a href="tel:004915203676119">${personDetail.country}</a>
          </li>
          <li>
            <li>
              <svg width="16" height="16">
                <use href="/icons/symbol-defs.svg#icon-phone"></use>
              </svg>
              <a href="tel:004915203676119">${personDetail.phone}</a>
            </li>
            <li>
              <svg width="16" height="16">
                <use href="/icons/symbol-defs.svg#icon-mail"></use>
              </svg>
              <a href="mailto:me@andreasremdt.com">${personDetail.email}</a>
            </li>
            <li>
              <svg width="16" height="16">
                <use href="/icons/symbol-defs.svg#icon-url"></use>
              </svg>
              <a href="" target="_blank" rel="noopener nofollow">${
                personDetail.website
              }</a>
            </li>
          </ul>
        </header>

            
    
            <section class="grid">
              <h2 data-i18n="general.title" class="grid-left">Summary</h2>
              <table>
                <tbody>
                  <tr>
                    <td data-i18n="general.birthplace">${userSummary}</td>       
                  </tr>
                 
                </tbody>
              </table>
            </section>
    
            <section class="grid">
              <h2 data-i18n="experience.title" class="grid-left">Experience</h2>
    
             ${renderExperience()}
            </section>
          </div>
    
          <div class="page">
    
            <section class="grid">
              <h2 data-i18n="education.title" class="grid-left">Education</h2>
              ${renderEducation()}
            </section>
            ${renderCertificate()}
            ${renderAwards()}
            ${renderReferences()}
    
            <section class="grid">
              <h2 data-i18n="skills.title" class="grid-left">Skills</h2>
    
              <article>
                <ul class="mt-0">
                 ${renderSkills()}
                 
                </ul>
              </article>
            </section>
          </div>
    
          <div class="page">
 
              <section class="grid">
              <h2 data-i18n="skills.title" class="grid-left">Hobbies</h2>
    
              <article>
                <ul class="mt-0">
                  ${renderHobbies()}
                  
                </ul>
              </article>
            
            </section>
    
           
            </div>
        </main>
    
        <script src="/js/main.js" type="module"></script>
      </body>
    </html> `;
}
