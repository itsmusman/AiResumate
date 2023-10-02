export function template50(resume) {
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
      certificateHtml = `<section class="education">
        <h6>Certificate</h6>
            ${certificates
              .map(
                (element) =>
                  `<ol>
        <li>
            <div>
                <p class="sanserif">${element.certificate}</p>
                <time>${element.Year}${cleanMonth(element.fromMonth)} </time>
            </div>
            <div>
                <span>${element.institute}</span>
               
            </div>
        </li>       
        </ol>`
              )
              .join("")}
        
         </section>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `<section class="education">
        <h6>Awards</h6>
            ${awards
              .map(
                (element) =>
                  `<ol>
        <li>
            <div>
                <p class="sanserif">${element.awards}</p>
                <time>${element.Year} </time>
            </div>
            <div>
                <span>${element.institute}</span>
               
            </div>
        </li>       
        </ol>`
              )
              .join("")}
        
         </section>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `<section class="education">
        <h6>Reference</h6>
            ${references
              .map(
                (element) =>
                  `<ol>
        <li>
            <div>
                <p class="sanserif">${element.reference}</p>
              
            </div>
            <div>
                <span>${element.institute}</span>
               
            </div>
        </li>       
        </ol>`
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
      result += `<ol>
<li>
    <header>
        <p class="sanserif">${element.position}</p>
        <time>${element.fromYear}${cleanMonth(element.fromMonth)} – ${
        element.toMonth
      } / ${element.toYear}</time>
    </header>
    <span>${element.company}</span>
    <span>${element?.city ?? []}</span>
    <ul>`;
      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li>${role}</li>`;
      });
      result += `${roles}
        
    </ul>
</li>
</ol>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    education.forEach((element) => {
      result =
        result +
        `<ol>
<li>
    <div>
        <p class="sanserif">${element.degree}</p>
        <time>${element.fromYear}${cleanMonth(element.fromMonth)}– ${
          element.toMonth
        }  '${element.toYear}</time>
    </div>
    <div>
        <span>${element.university}</span>
        <span>${element.city ?? []}</span>
    </div>
</li>       
</ol>`;
    });

    return result;
  }

  return ` <!DOCTYPE html>
  <html lang="en" moznomarginboxes="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1">
    <meta http-equiv="Content-Type" content="text/html; charset=us-ascii">
    <meta name="google" content="notranslate"><!-- Metadata (autofilled by "Save to HTML") -->
    <meta name="author" content="Joe Smith">
    <meta name="subject" content="A really good software engineer you should hire">
    <meta name="keywords" content="coding, developing, hacking">
    <meta name="date" content="2009-04-01">
    <meta name="generator" content="html-resume-template"><!-- Google Fonts, Normalize, and Font Awesome -->
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Cardo|Montserrat:300,400,500&amp;subset=latin-ext" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" integrity="sha256-oSrCnRYXvHG31SBifqP2PM1uje7SJUyX0nTwO2RJV54=" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"><!-- Custom Styles -->
    <link rel="stylesheet" type="text/css" href="./paper.css">
    <link rel="stylesheet" type="text/css" href="./styles.css">
    <link rel="stylesheet" type="text/css" href="./typography.css">
    <link rel="stylesheet" type="text/css" media="screen" href="./screen.css">
    <link rel="stylesheet" type="text/css" media="print" href="./print.css">
    <script async defer src="https://buttons.github.io/buttons.js"></script>
    <title>HTML Resume Template</title>
    <style>

    @page {
      margin: 0px;
    }


      @charset "UTF-8";
      
      * {
          min-height: 0;
          min-width: 0;
          box-sizing: border-box;
          transform-origin: 0px 0px 0px;
      }
      
      p:blank, li:blank, div:blank, section:blank {
          display: none;
      }
      
      p:empty, li:empty, div:empty, section:empty {
          display: none;
      }
      
      p:-moz-only-whitespace, li:-moz-only-whitespace, div:-moz-only-whitespace, section:-moz-only-whitespace {
          display: none;
      }
      
      /* Page Variables */
      
      :root {
          --main-width: 74%;
          --header-height: 1.2in;
          --sidebar-width: calc(100% - var(--main-width));
      }
      
      body {
          font-size: 0.95em;
          margin: 0 auto;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-tap-highlight-color: transparent;
          text-rendering: optimizeLegibility;
          text-decoration-skip: ink;
          hyphens: auto;
      }
      
      #save > section:first-of-type {
          display: flex;
          flex-direction: row;
      }
      
      .summary {
          font-size: 105%;
      }
      
      /* Misc */
      
      img {
          max-width: 100%;
      }
      
      p {
          margin-top: 0;
          margin-bottom: 0;
      }
      
      abbr[title] {
          text-decoration: none;
          border: none;
      }
      
      ul {
          margin: 0;
          padding: 0;
      }
      
      li {
          list-style-type: none;
          padding: 0;
          margin: 0;
      }
      
      li + li {
          margin-top: 0.4em;
      }
      
      .fa, .fab {
          text-align: center;
          min-width: 1em;
      }
      
      li .fa, li .fab {
          margin-right: 0.3em;
      }
      
      /* Page layout */
      
      #save > section:first-of-type > aside {
          flex-basis: var(--sidebar-width);
          padding: 0.1618in 0 0.1618in 0.1618in;
          display: flex;
          flex-direction: column;
      }
      
      #save > section:first-of-type > aside > section + section {
          margin-top: 2em;
      }
      
      #save > section:first-of-type > aside > section:last-child {
          margin-top: auto;
      } 
      
      #save > section:first-of-type > section {
          flex-basis: var(--main-width);
          display: flex;
          flex-direction: column;
      }
      
      #save > section:first-of-type > section > header {
          flex-basis: var(--header-height);
          flex-grow: 0;
          padding: 0.1618in;
      }
      
      #save > section:first-of-type > section > section {
          flex-grow: 1;
          padding: 0.1618in;
          padding-top: 0;
          display: flex;
          flex-direction: column;
      }
      
      #save > section:first-of-type > section > section > section + section {
          margin-top: 1em;
      }
      
      #save > section:first-of-type > section > section > section:last-child {
          margin-top: auto;
      }
      
      .references address {
          font-style: normal;
          font-weight: 300;
      }
      
      .references address:first-line {
          font-weight: 400;
      }
      
      .references address + address,
      .references address + p {
          padding-top: 0.5em;
      }
      
      /* Skills */
      
      .skills {
          font-size: 92%;
      }
      
      .skills > ul:after {
          content: '';
          display: table;
          clear: both;
      }
      
      .skills > ul > li {
          display: block;
          float: left;
          margin: 6px 6px 0 0;
      }
      
      .skills > ul > li > span {
          background-color: #f5f5f5;
          border: 1px solid rgba(45, 45, 45, 0.1618);
          border-radius: 3px;
          color: #333;
          padding: 4px 8px;
          display: inline-block;
      }
      
      /* Experience & Education */
      
      .education ol,
      .experience ol {
          margin: 0;
          padding: 0;
      }
      
      .experience ol {
          flex-wrap: wrap;
          display: flex;
          flex-direction: row;
      }
      
      .experience ol > li {
          margin: 0;
          padding: 0;
          flex-basis: 100%;
          font-weight: 300;
      }
      
      .education ol > li {
          font-weight: 300;
      }
      
      .experience ol > li + li {
          margin-top: 1em;
      }
      
      .education ol > li div,
      .experience ol > li header {
          display: flex;
          flex-direction: row;
      }
      
      .experience ol > li > span,
      .education ol > li p,
      .experience ol > li header p {
          font-weight: 400;
      }
      
      .experience ol > li header p {
          font-size: 110%;
      }
      
      .education ol > li div > *:last-child,
      .experience ol > li header > *:last-child {
          margin-left: auto;
      }
      
      .experience ol > li ul {
          padding-top: 0.5em;
      }
      
      .experience ol > li ul li {
          list-style-type: circle;
          margin-left: 1.618em;
      }
    </style>
  </head>
  <body class="letter">
    <section id="save">
      <section class="sheet">
        <aside>
          <section class="contact">
           
            <ul>
              <li>
              <i class="fa fa-map-marker-alt" title="Location"> </i>
              
              <p>${personDetail.city} , ${personDetail.country}</p>
              </li>
              <li>
              <i class="fa fa-phone" title="Cell phone"> </i>  <p><a href="tel:4153234000">${
                personDetail.phone
              }</a></p>
              </li>
              <li>
              <i class="fa fa-envelope" title="Email"> </i>        <p><a href="mailto:joe@joesmith.site">${
                personDetail.email
              }</a></p>
              </li>
              <li>
              <i class="fa fa-globe-americas" title="Website"></i>   <p><a href="">${
                personDetail.website
              }</a></p>
              </li>
            </ul>
          </section>
          <section class="skills">
            <h6>Skills</h6>
            <ul>
              ${renderSkills()}
            </ul>
          </section>
          <section class="skills">
            <h6>Hobbies</h6>
            <ul>
              ${renderHobbies()}
            </ul>
          </section>
          <section class="references"></section>
        </aside>
        <section>
          <header class="name" aria-label="Joe Smith">
            <a href="https://joesmith.site"><svg width="257px" height="35px" viewbox="0 0 257 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="Montserrat-Regular, Montserrat" font-size="48" font-weight="normal">
              <g id="Letter" transform="translate(-54.000000, -140.000000)" fill="#484848">
                <text id="JOE-SMITH">
                  <tspan x="54.728" y="174">
                    ${personDetail.firstName} ${personDetail.lastName}
                  </tspan>
                </text>
              </g>
            </g></svg></a>
            <h6>${jobPosition}</h6>
            <hr>
          </header>
          <section>
            <section class="summary">
              <h6>Summary</h6>
              <p>${userSummary}.</p>
            </section>
            <section class="experience">
              <h6>Experience</h6>${renderExperience()}
            </section>
            <section class="education">
              <h6>Education</h6>${renderEducation()}
            </section>${renderCertificate()} ${renderAwards()} ${renderReferences()}
          </section>
        </section>
      </section>
    </section>
  </body>
  </html>`;
}
