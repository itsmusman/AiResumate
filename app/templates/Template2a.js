export function template2(resume) {
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
        <div class="title">
             <p class="bold">Certificate</p>
           </div>
        <ul>
            ${certificates
              .map(
                (element) =>
                  `<li>
          <div class="date"> ${element.fromYear}${cleanMonth(
                    element.fromMonth
                  )}</div> 
          <div class="info">
               <p class="semi-bold"> ${element.certificate}  ( ${
                    element.institute
                  } )</p> 
           
          </div>
      </li>`
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
      awardsHtml = `<div class="resume_item resume_education">
        <div class="title">
             <p class="bold">Awards</p>
           </div>
        <ul>
            ${awards
              .map(
                (element) =>
                  `<li>
          <div class="date"> ${element.Year}</div> 
          <div class="info">
               <p class="semi-bold"> ${element.awards}  ( ${element.institute} )</p> 
           
          </div>
      </li>`
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
      referencesHtml = `<div class="resume_item resume_education">
        <div class="title">
             <p class="bold">Reference</p>
           </div>
        <ul>
            ${references
              .map(
                (element) =>
                  `<li>
          <div class="date"> </div> 
          <div class="info">
               <p class="semi-bold"> ${element.reference}  ( ${element.institute} )</p> 
           
          </div>
      </li>`
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
      result += `<div class="">
<div class="sortableInner">
  <div
    id="PARAGRAPH_EXPR_0"
    class="paragraph PARAGRAPH_EXPR firstparagraph placeholder-text"
  >
    <div class="clearfix doc-item">
      <div class="singlecolumn">
        <div
          class="disp-block datewrapper"
          dependency="JSTD|EDDT"
        >
          <span
            class="jobdates"
            id="FIELD_JSTD"
            format="%m.%Y"
            >${element.fromYear}${cleanMonth(element.fromMonth)}</span
          ><span dependency="JSTD+EDDT"> - </span>
          <span
            class="jobdates"
            id="FIELD_EDDT"
            format="%m.%Y"
            >${element.toYear}${cleanMonth(element.toMonth)}</span
          >
        </div>
        <div>
          <span class="jobtitle txt-itl disp-block">
            <span class="txt-bold" id="FIELD_JTIT"
              >${element.position}</span
            >
          </span>
          <span
            class="disp-block locationGap"
            dependency="COMP|JSTA|JCIT|JCNT|JCTR|JLOC"
          >
            <span class="companyname" id="FIELD_COMP"
              >${element.company}</span
            ><span dependency="COMP"
              ></span
            ><span class="jobcity" id="FIELD_JCIT"
              >${element?.city ?? []}</span
            ><span dependency="JCIT+JSTA|JCNT">, </span
            ><span class="jobstate" id="FIELD_JSTA"></span
            ><span
              class="joblocation"
              id="FIELD_JLOC"
            ></span
            ><span id="FIELD_JCTR"></span>
          </span>
          <span class="jobline" id="FIELD_JDES"
            ><ul>`;
      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li>${role}</li>`;
      });
      result += `${roles}
              
            </ul></span>
        </div>
      </div>
    </div>
  </div>
  <div
    id="PARAGRAPH_EXPR_-2"
    class="paragraph PARAGRAPH_EXPR placeholder-text">
    <div class="clearfix doc-item">
      <div class="singlecolumn">
        <div>
          <span class="jobtitle txt-itl disp-block">
            <span class="txt-bold" id="FIELD_JTIT"></span>
          </span>

          <span class="jobline" id="FIELD_JDES"></span>
        </div>
      </div>
    </div>
  </div>
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
        `<div class="">
<div class="">
  <div
    id="PARAGRAPH_EDUC_0"
    class="paragraph PARAGRAPH_EDUC firstparagraph placeholder-text"
  >
    <div class="clearfix doc-item">
      <div class="singlecolumn">
        <div>
          <div class="datewrapper">
            <span
              class="xslt_static_change displayNoneThisField"
              >Expected in
            </span>
            <span id="FIELD_GRYR" format="%m.%Y">${element.fromYear}</span>
            <span id="FIELD_GRYR" format="%m.%Y"> - </span>
            <span id="FIELD_GRYR" format="%m.%Y">${element.toYear}</span>
            <span
              class="jobdates"
              id="FIELD_GRST"
              format="%m.%Y"
            ></span
            ><span
              class="jobdates"
              id="FIELD_GRED"
              format="%m.%Y"
            ></span>

            <span id="FIELD_GRIP"></span>
          </div>
          <div>
            <span class="degree" id="FIELD_DGRE"
              >Degree / Diploma</span
            ><span dependency="DGRE"
              ><span dependency="STUY|SCHO">, </span></span
            ><span class="programline" id="FIELD_STUY"
              >${element.degree}</span
            ><span dependency="STUY+SCHO">, </span
            ><span class="companyname" id="FIELD_SCHO"
              >${element.university}</span
            ><span dependency="DGRE|STUY|SCHO"
              ><span dependency="SCIT|SSTA|SCNT|GRHN">
                - </span
              ></span
            >
            <span
              class="joblocation jobcity"
              id="FIELD_SCIT"
              >${element.city ?? []}</span
            ><span
              class="joblocation jobcountry"
              id="FIELD_SCNT"
            ></span
            ><span id="FIELD_GRHN"></span>
          </div>
        </div>

        <div class="field jobline" id="FIELD_FRFM"></div>
      </div>
    </div>
  </div>
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
      <meta name="generator" content="pandoc">
      <title>Resume :: Jack Senechal</title>
      <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
      <![endif]-->
      <style type="text/css">
        @font-face { font-family: Sawasdee; src: url(Sawasdee.ttf); }
        body { width: 73%; margin: auto; }
        body, p { font-family: Sawasdee; font-size: 12pt; color: #000; }
        h1 { font-size: 40pt; font-weight: normal; text-transform: uppercase; margin: 1.3em 0 0; }
        h2 { font-size: 12pt; text-transform: uppercase; font-weight: normal;
          margin-top: 3em; margin-bottom: .4em; border-bottom: 1px solid black; }
        p { margin: 0.7em 0 0 0; }
        ul { margin: 0em; list-style: none; padding-left: 4.5em; }
        li { padding-left: 1em; text-indent: -1em; }
        li:before { content: "-"; padding-right: 0.5em; }
        a { text-decoration: none; border-bottom: 1px dashed #bbb; color: #000; }
        a:hover, #foot a:hover { color: #444; border-bottom: 1px dashed #444; }
        code { font-size: 10pt; background-color: #f4f4f4; padding: 2px; box-shadow: 1px 1px 2px #ddd; }
        #downloads { position: absolute; top: 1em; right: 1em; color: #777; font-style: italic; font-size: 10pt; }
        #online_resume { display: none; }
        #clear_foot { height: 3em; }
        hr { display: none; }
      
        @media print {
          body { width: 92%; margin: auto; }
          h1 { font-size: 16pt; }
          h2 { font-size: 12pt; margin-top: 2em; }
          body, p, li { font-size: 10pt; }
          code {font-size: 8pt; background-color: #eee; padding: 2px;}
          hr { display: block; page-break-after: always; padding: 0; margin: 0; border: 0; }
          #downloads { display: none; }
          #online_resume { display: block; text-align: center; color: #777; font-style: italic; font-size: 10pt; }
        }
      </style>
    </head>
    <body>
    
    <h1 id="jack-senechal">Jack Senechal</h1>
    <p>Located in San Francisco, CA<br />
    Phone: 415-779-2701<br />
    Email: <a href="" class="email">ihash@email.com</a><br />
    GitHub: <a href="https://github.com/jacksenechal">github.com/jacksenechal</a></p>
    <h2 id="introduction">Introduction</h2>
    <p><em>Software engineer with strong people and management skills, seeking a lead developer or engineering manager role.</em></p>
    <p>As an engineer I care deeply about quality and precision, not only at the code level but throughout the product. I balance attention to detail with a drive to ship, because a product is only as good as its usefulness to actual people. I enjoy creating lucid user experiences and designing robust software architectures.</p>
    <p>As a team leader I bring empathy, solidity, and clarity of communication. I enjoy optimizing processes and refining infrastructure so teams are faced with minimal repetitive load and can focus on high-flying creativity.</p>
    <p>I seek a vibrant environment of innovation, a strong team practicing Agile methodologies, and a culture of excellence. It is more than a day job, it is a platform to make a meaningful contribution at a global scale.</p>
    <h2 id="industry-experience">Industry Experience</h2>
    <p>Lead Developer, Co-founder, <a href="http://www.pegg.us/">Pegg</a> - 2014 - current</p>
    <ul>
    <li>Development: Design, architecture, and implementation of cross-platform mobile game targeted at iOS and Android via PhoneGap.</li>
    <li>Team Processes: Implementing and honing development workflow with agile methods such as pair programming, testing, and continuous integration. Developing launch strategy, setting up processes and workflows to enable rapid response to issues.</li>
    <li>Business Strategy: product design, monetization strategy, marketing strategy, as well as contributing to the company’s mission, vision, and governance models.</li>
    <li>Technology: Famo.us/Flux front-end, Parse/Node backend, Firebase for realtime notifications and chat, Webpack and Gulp build environment, Karma/Chai testing, and continuous deployment to AWS/Cloudfront via CircleCI.</li>
    </ul>
    
    <p>Development Lead, <a href="http://jbanetwork.com">JBA Network</a> - Asheville, NC 2003 - 2006</p>
    <ul>
    <li>Project manager and lead programmer for mynewsletterbuilder.com. Architected and implemented the initial release, and later oversaw the development team for the project.</li>
    
    </ul>
    <h2 id="education">Education</h2>
    <p>BA in Mathematics, minor in Computer Science from the <a href="http://unca.edu">University of North Carolina at Asheville</a> (May, 2003)</p>
    <h2 id="volunteer">Skills</h2>
    <ul>
    <li>Javascript</li>
    
    </ul>
    <h2 id="open-source-projects">Hobbies</h2>
    <ul>
    <li>Cricket.</li>
    </ul>
    
    <div id="clear_foot"></div>
    
    </body>
    </html>
    `;
}
