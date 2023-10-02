export function template70(resume) {
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
            <div class="doc-item">
            <div class="heading">
              <div class="sectiontitle" id="SECTIONNAME_EDUC">
                Certificate<span
                  title=" Education "
                  class="rename-section text-rename"
                ></span>
              </div>
            </div>
                ${certificates
                  .map(
                    (element) =>
                      `<div class="single-column">
               <span class="padded-line"
                 ><span class="degree"></span><span class="program-line">${
                   element.certificate
                 }</span></span
               ><span> </span><span class="padded-line txtItalics"
                 ><span
                   class="companyname companyname_educ"
                   dependency="SCHO"
                   >${element.institute}</span
                 ><span> </span>
                 <span class="job-location jobcity">${element.Year}${cleanMonth(
                        element.fromMonth
                      )}</span
                 ><span> </span
                 ><span class="job-location jobstate"></span></span
               ><span class="padded-line"><span class="field"></span></span>
               </div>`
                  )
                  .join("")}
                  </div>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
            <div class="doc-item">
            <div class="heading">
              <div class="sectiontitle" id="SECTIONNAME_EDUC">
                Awards<span
                  title=" Education "
                  class="rename-section text-rename"
                ></span>
              </div>
            </div>
                ${awards
                  .map(
                    (element) =>
                      `<div class="single-column">
               <span class="padded-line"
                 ><span class="degree"></span><span class="program-line">${element.awards}</span></span
               ><span> </span><span class="padded-line txtItalics"
                 ><span
                   class="companyname companyname_educ"
                   dependency="SCHO"
                   >${element.institute}</span
                 ><span> </span>
                 <span class="job-location jobcity">${element.Year}</span
                 ><span> </span
                 ><span class="job-location jobstate"></span></span
               ><span class="padded-line"><span class="field"></span></span>
               </div>`
                  )
                  .join("")}
                  </div>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `
            <div class="doc-item">
            <div class="heading">
              <div class="sectiontitle" id="SECTIONNAME_EDUC">
                Reference<span
                  title=" Education "
                  class="rename-section text-rename"
                ></span>
              </div>
            </div>
                ${references
                  .map(
                    (element) =>
                      `<div class="single-column">
               <span class="padded-line"
                 ><span class="degree"></span><span class="program-line">${element.reference}</span></span
               ><span> </span><span class="padded-line txtItalics"
                 ><span
                   class="companyname companyname_educ"
                   dependency="SCHO"
                   >${element.institute}</span
                 ><span> </span>
                
               </div>`
                  )
                  .join("")}
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
      result += `
    <div class="clearfix doc-item">
      <div class="singlecolumn">
        <span class="paddedline" dependency="JSTD|EDDT">
          <span id="FIELD_JSTD" format="%B %Y"
            >${element.fromYear}${cleanMonth(element.fromMonth)}</span
          ><span dependency="JSTD+EDDT"> - </span
          ><span id="FIELD_EDDT" format="%B %Y"
            >${element.toYear}${cleanMonth(element.toMonth)}</span
          >
        </span>
        <span class="txt-bold" id="FIELD_COMP"
          >${element.company}</span
        >
        <span class="txt-bold" dependency="COMP+JTIT">
          - </span
        ><span class="semi-bold" id="FIELD_JTIT"
          >${element.position}</span
        ><span dependency="JTIT"
          ><span dependency="JCIT|JSTA|JCNT|JLOC"
            >,
          </span></span
        >
        <span id="FIELD_JCIT">${element?.city ?? []}</span
        ><span dependency="JCIT">
        <span id="FIELD_JSTA"></span
        ><span id="FIELD_JCNT">Country</span
        ><span class="joblocation" id="FIELD_JLOC"></span
        ><span id="FIELD_JCTR"></span>
        <span class="jobline" id="FIELD_JDES"
          ><ul>`;

      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li>${role}</li>`;
      });
      result += `${roles}  
          </ul></span
        >
      </div>
    </div>
    `;
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
            <span
              class="paddedline degree-gap"
              dependency="DGRE|STUY|GRPA|GRHN"
            >
              <span id="FIELD_DGRE">Degree / Diploma </span
              ><span dependency="DGRE+STUY"
                ><span class="beforecolonspace"> </span
                ><span>: </span>
              </span>
              <span id="FIELD_STUY">${element.degree}</span
              ><span dependency="DGRE|STUY"></span
              ><span id="FIELD_GRHN"></span>
            </span>
            <span
              class="paddedline"
              dependency="SCHO|SCIT|SSTA|GRYR|GRST|GRED|GRIP"
            >
              <span class="txt-bold" id="FIELD_SCHO"
                >${element.university}</span
              ><span dependency="SCHO"
                >
                </span></span
              ><span id="FIELD_SCIT">${element?.city ?? []}</span
              ><span id="FIELD_SCNT"></span
              ><span dependency="GRYR|GRST|GRED|GRIP"
                ><span dependency="SCIT|SSTA|SCNT"
                  >,
                </span></span
              ><span
                class="xslt_static_change displayNoneThisField"
                >Expected in </span
              ><span id="FIELD_GRYR" format="%B %Y">${element.fromYear}</span
              >
              <span id="FIELD_GRYR" format="%B %Y"> - </span
              >
              <span id="FIELD_GRYR" format="%B %Y">${element.toYear}</span
              ><span
                class="jobdates"
                id="FIELD_GRST"
                format="%B %Y"
              ></span
              ><span
                class="jobdates"
                id="FIELD_GRED"
                format="%B %Y"
              ></span
              ><span id="FIELD_GRIP"></span>
            </span>
            <span class="field" id="FIELD_FRFM"></span>
          </div>
        </div>
      </div>
    </div>
    </div>`;
    });
    return result;
  }

  return `<!DOCTYPE html>
      <html>
      <head>
      
        <style>
    
    
        @page {
          margin: 0px;
        }
              body {
                margin: auto;
              }
              @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600;1,700");
              @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700");
      
              body {
                text-align: left;
                font-feature-settings: "liga" 0;
                -moz-font-feature-settings: "liga" off;
              }
              .genie table {
                border-collapse: collapse;
                border-spacing: 0;
                font-size: inherit;
                color: inherit;
                width: 100%;
              }
      
              /* START content disc style for LI */
              .genie ul,
              .genie li {
                list-style: none;
                margin: 0;
                padding: 0;
              }
              .genie ul li {
                position: relative;
                margin: 0px;
                padding-left: 9px;
                padding-bottom: 5px;
              }
              .genie ul li:last-child {
                padding-bottom: 0px;
              }
              .genie ul li:before {
                content: "";
                font-size: 12px;
                position: absolute;
                left: 0;
                top: 0;
              }
              /* END content disc style for LI */
      
              .genie .paddedline {
                display: block;
              }
              .genie .jobline ul,
              .genie .degree-gap,
              .genie .education ul {
                margin-top: 5px;
              }
              .genie .txt-bold {
                font-weight: bold;
              }
              .genie .semi-bold {
                font-weight: 600;
              }
              .genie .flt-right {
                float: right;
              }
      
              .genie {
                color: #000;
                font-variant-ligatures: none;
                word-wrap: break-word;
                font-weight: 400;
              }
              .genie .name {
                font-weight: bold;
                color: #000;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-family: "Montserrat";
                font-weight: 500;
                position: relative;
                max-width: 382px;
              }
              .genie .resume-title {
                position: relative;
                font-size: 12px;
                line-height: 15px;
                letter-spacing: 0.5px;
                font-weight: 400;
                padding-top: 10px;
                text-transform: capitalize;
                max-width: 382px;
                font-family: "Source Sans Pro";
              }
              .genie .resume-title span {
                display: block;
                text-transform: lowercase;
              }
              .genie .resume-title span:first-letter {
                text-transform: capitalize;
              }
              .genie .parent-container .section.pict-sec {
                border: none;
                margin-bottom: 0px;
                text-align: center;
              }
              .genie .left-box .section.pict-sec {
                position: absolute;
                padding-top: 0px;
                top: 50px;
              }
              .genie .left-box .section.section-cntc {
                padding-top: 135px;
              }
              .genie .pict-sec img {
                min-height: 103px;
                min-width: 103px;
                max-height: 103px;
                max-width: 103px;
                border-radius: 50%;
                z-index: 1;
                border: 1px solid #fff;
              }
              .genie .social-link .field a {
                color: #fff;
                text-decoration: underline;
              }
              .genie .social-link .field a:hover {
                text-decoration: underline;
              }
              .genie .avai-icon svg {
                border-radius: 50%;
              }
      
              /* Heading */
              .genie .heading {
                font-weight: 400;
                font-size: 12px;
                text-transform: uppercase;
                color: #000;
                letter-spacing: 1px;
                font-weight: bold;
                font-family: "Montserrat";
                margin-bottom: 10px;
              }
              .genie .parent-container {
                display: table;
                margin-left: 30px;
                margin-right: 30px;
                min-height: 792px;
                table-layout: fixed;
                width: calc(100% - 60px);
              }
      
              /* Common style for left and right box */
              .genie .left-box,
              .genie .right-box {
                box-sizing: content-box;
                padding: 25px 20px 30px 20px;
                display: table-cell;
                position: relative;
                vertical-align: top;
              }
              .genie .right-box {
                padding: 0px 0 30px 20px;
              }
              .genie .parent-container .right-box > .section:first-child {
                padding: 0;
                border: 0;
                margin-left: -220px;
                margin-right: -30px;
                margin-bottom: 0;
                padding: 50px 30px 30px 220px;
              }
              .genie .parent-container .right-box > .section:first-child:before,
              .genie
                .parent-container
                .right-box
                > .sortable-item:first-child
                .section:before {
                width: 100%;
                content: "";
                height: 100%;
                background: #0000ff;
                opacity: 0.4;
                position: absolute;
                left: 0px;
                top: 0px;
              }
              .genie .parent-container .right-box > .section:first-child + .section {
                padding-top: 30px !important;
              }
              .genie .parent-container .right-box > .section:first-child + .section {
                border-top: none !important;
              }
              .genie .right-box > .section:first-child .heading,
              .genie .left-box > .section:first-child .heading {
                margin-bottom: 10px !important;
              }
              .genie .parent-container .left-box {
                background: #404040;
                color: #fff;
                z-index: 1;
                padding-top: 50px;
              }
              .genie .parent-container .left-box .heading {
                color: #fff;
              }
              .genie .parent-container .section {
                border-top: 1px solid #000;
              }
              .genie .parent-container .section:first-child {
                border-top: none;
              }
              .genie .right-box ul {
                padding-left: 10px;
              }
              .genie .sectiontitle {
                display: table;
                table-layout: fixed;
                width: 100%;
                word-wrap: break-word;
              }
              .genie .section {
                position: relative;
              }
              .genie .parent-container .left-box .section {
                border-color: #fff;
                padding-right: 20px;
                box-sizing: content-box;
                width: inherit;
              }
              .genie .parent-container .left-box .section-cntc {
                border-top: none !important;
                margin-bottom: 0;
              }
      
              .genie .right-box .section-hilt .paddedline {
                margin-bottom: 5px;
                display: table-cell;
                width: 50%;
              }
              .genie .left-box .section-hilt .singlecolumn.disp-table {
                display: block;
              } /*Fix for PDF*/
      
              /*SVG Icon Style*/
              .genie .section-cntc .icon-row {
                clear: both;
                padding-bottom: 15px;
              }
              .genie .icon-row .icon-svg {
                width: 14px;
                height: 14px;
                margin: auto;
                margin-bottom: 3px;
              }
              /*.genie .icon-row .icon-svg svg{border-radius:50%}*/
              .genie .icon-row .ico-txt,
              .genie .icon-row .zipprefix,
              .genie .icon-row .zipsuffix {
                text-align: center;
              }
      
              /*Signature*/
              .genie .disclaim.section .singlecolumn,
              .genie .signPic > .field_sign,
              .genie .disclaim .paragraph,
              .genie .sign .paragraph {
                margin-left: 0px;
              }
              .genie .disclaim .singlecolumn,
              .genie .disclaim .singlecolumn li,
              .genie .disclaim .singlecolumn p,
              .genie .disclaim .singlecolumn span {
                font-size: 9px;
                color: #8a8a8a;
              }
              .genie .sign .field_sign {
                font-size: 7px;
                color: #8a8a8a;
              }
              .genie .txtleft + .field_sign {
                text-align: left;
              }
              .genie .txtcenter + .field_sign {
                text-align: center;
              }
              .genie .txtright + .field_sign {
                text-align: right;
              }
              .genie .signPic span:first-child {
                padding-right: 6px;
              }
              .genie .signPic img {
                max-width: 100%;
              }
              .genie .parent-container .sign.section {
                margin-bottom: 0;
                border-top: none;
                padding-top: 20px;
              }
              .genie .parent-container .disclaim.section {
                margin-bottom: 0;
              }
      
              /*New logic for infographic*/
              .genie .lang-sec .singlecolumn,
              .genie .skli-sec .singlecolumn {
                display: none;
              }
              .genie .lang-sec.infobarsec .infobarpara,
              .genie .lang-sec.infotilesec .infotilepara,
              .genie .skli-sec.infobarsec .infobarpara,
              .genie .skli-sec.infotilesec .infotilepara {
                display: block;
              }
      
              /*Infographic*/
              .genie .lang-sec.infobarsec,
              .genie .skli-sec.infobarsec {
                font-size: 0;
              }
              .genie .lang-sec.infobarsec .field *,
              .genie .skli-sec.infobarsec .field *,
              .genie .lang-sec.infobarsec .nativeLangPara .field {
                display: inline;
              }
              .genie .lang-sec.infobarsec .paragraph,
              .genie .skli-sec.infobarsec .paragraph {
                display: inline-block;
                vertical-align: top;
                padding-bottom: 5px;
                margin-top: 0;
              }
              .genie .lang-sec.infobarsec .singlecolumn,
              .genie .skli-sec.infobarsec .singlecolumn {
                margin-left: 0 !important;
                padding-left: 0;
                position: relative;
              }
              .genie .right-box .lang-sec.infobarsec .para_odd,
              .genie .right-box .skli-sec.infobarsec .para_odd {
                margin-right: 15px;
              }
              .genie .right-box .lang-sec.infobarsec > .paragraph:nth-last-child(1),
              .genie .right-box .lang-sec.infobarsec > .paragraph:nth-last-child(2),
              .genie .right-box .skli-sec.infobarsec > .paragraph:nth-last-child(1),
              .genie .right-box .skli-sec.infobarsec > .paragraph:nth-last-child(2) {
                padding-bottom: 0 !important;
              }
              .genie .lang-sec.infobarsec .nativeLangPara {
                width: 100% !important;
              }
              .genie .right-box .lang-sec.infobarsec .inner-rating,
              .genie .right-box .skli-sec.infobarsec .inner-rating {
                position: relative;
              }
              .genie .lang-sec.infobarsec .rating-bar,
              .genie .skli-sec.infobarsec .rating-bar {
                background: #d5d6d6;
                width: 100%;
                clear: both;
                margin-top: 3px;
                position: relative;
                page-break-inside: avoid;
              }
              .genie .lang-sec.infobarsec .inner-rating,
              .genie .skli-sec.infobarsec .inner-rating {
                background-color: #c6d6e3;
                height: 4px;
                position: relative;
                width: 60%;
              }
              .genie .left-box .lang-sec.infobarsec .paragraph,
              .genie .left-box .skli-sec.infobarsec .paragraph {
                display: block;
                margin-right: 0 !important;
                width: 100% !important;
                max-width: 100% !important;
              }
      
              .genie .skli-sec .paragraph:last-child .singlecolumn .field:last-child {
                min-height: 0;
              }
              .genie
                .skli-sec
                .paragraph:nth-last-child(1)
                .singlecolumn
                .field:last-child,
              .genie
                .skli-sec
                .paragraph:nth-last-child(2)
                .singlecolumn
                .field:last-child {
                min-height: 0;
              }
      
              /*Infographic Skills*/
              .genie .lang-sec.infotilesec,
              .genie .skli-sec {
                font-size: 0px;
              }
              .genie .lang-sec.infotilesec .paragraph,
              .genie .skli-sec .paragraph {
                display: inline-block;
                vertical-align: top;
                padding-bottom: 5px;
                margin-top: 0;
              }
              .genie .lang-sec.infotilesec > .paragraph:nth-last-child(1),
              .genie .right-box .lang-sec.infotilesec > .paragraph:nth-last-child(2),
              .genie .skli-sec > .paragraph:nth-last-child(1),
              .genie .right-box .skli-sec > .paragraph:nth-last-child(2) {
                padding-bottom: 0 !important;
              }
              .genie .lang-sec.infotilesec .field *,
              .genie .lang-sec.infotilesec .nativeLangPara .field,
              .genie .skli-sec .field * {
                display: inline;
              }
              .genie .lang-sec.infotilesec .singlecolumn,
              .genie .skli-sec .singlecolumn {
                margin-left: 0 !important;
                padding-left: 0;
                position: relative;
              }
              .genie .lang-sec.infotilesec .sliced-rect,
              .genie .skli-sec .sliced-rect {
                height: 6px;
                width: 100%;
                line-height: 0px;
                margin-top: 3px;
                clear: both;
              }
              .genie .right-box .lang-sec.infotilesec .paragraph.para_odd,
              .genie .right-box .skli-sec .paragraph.para_odd {
                margin-right: 15px;
              }
              .genie .left-box .lang-sec.infotilesec .paragraph,
              .genie .left-box .skli-sec .paragraph {
                display: block;
                width: 100%;
                max-width: 100% !important;
                margin-top: 0;
              }
              .genie .lang-sec.infotilesec .sliced-rect .sliced-rect-tile,
              .genie .skli-sec .sliced-rect .sliced-rect-tile {
                height: 100%;
                background-color: #d5d6d6;
                float: left;
                margin-right: 3px;
              }
              .genie .lang-sec.infotilesec .sliced-rect .sliced-rect-tile:last-child,
              .genie .skli-sec .sliced-rect .sliced-rect-tile:last-child {
                margin-right: 0;
              }
      
              /*Rectangular Rating Blocks*/
              .genie .sliced-rect .sliced-rect-tile.ratvfill {
                background-color: ;
              }
              .genie .hide-bar .rating-bar,
              .genie .hide-bar .sliced-rect,
              .genie .hide-colon .colon,
              .genie .hide-only-bar .rating-bar,
              .genie.MPR .hide-bar .field-ratt {
                display: none !important;
              }
      
              /*address order code*/
              .genie .zipsuffix {
                display: block;
              }
              .genie .zipprefix,
              .genie.MFR .zipsuffix,
              .genie.MES .zipsuffix {
                display: none;
                margin: 0pt;
                padding: 0pt;
              }
              .genie.MFR .zipprefix,
              .genie.MES .zipprefix {
                display: block;
              }
      
              /* Builder fixes */
              .genie .right-box > .sortable-item:first-child,
              .genie .left-box > .sortable-item:first-child .section {
                border: none !important;
              }
              .genie .right-box > .sortable-item:first-child .section {
                min-height: 87px;
                padding: 0;
                border: 0;
                margin-left: -220px;
                padding: 50px 30px 30px 219px;
                margin-right: -30px;
                margin-bottom: 0;
              }
              .genie
                .parent-container
                .right-box
                > .sortable-item:first-child
                + .sortable-item
                .section {
                padding-top: 30px !important;
                border: none;
              }
              .genie .sortable-item:first-child .section {
                padding-top: 0px;
              }
              .genie .parent-container .left-box .sortable-item.active,
              .genie .parent-container .left-box > .sortable-item.active .heading {
                color: #000;
              }
              .genie
                .parent-container
                .left-box
                .sortable-item.active
                .dni-icon
                .globeicon {
                fill: #fff;
              }
              .genie .left-box .data-CNTC + .sortable-item:not(.data-ALNK) .section {
                margin-top: 0;
              }
              .genie .parent-container .left-box .sortable-item .section {
                width: 130px;
                z-index: 1;
              }
      
              .genie .svgClass {
                transform: translate(0px, 1px) scale(0.9);
              }
              .genie .st0 {
                fill: #404040;
              }
              .genie .st1,
              .genie .social .svg-circlebg {
                fill: #ffffff;
              }
      
              .genie .displayNoneThisField {
                display: none;
              } /* Keep this class always at bottom */
      
              /*HILT multi para/section*/
              .genie .multi-para-hilt:after {
                content: "";
                display: block;
                clear: both;
                visibility: hidden;
                line-height: 0;
                height: 0;
              } /*Clearfix*/
              .genie .right-box .multi-para-hilt .paragraph {
                margin-bottom: 10px;
                margin-top: 0 !important;
                width: 48%;
                float: left;
                margin-left: 0;
                padding-top: 0;
                padding-left: 0 !important;
              }
              .genie .right-box .multi-para-hilt .paragraph:last-child,
              .genie
                .right-box
                .multi-para-hilt
                .paragraph:nth-last-child(2):nth-child(2n) {
                margin-bottom: 0;
              }
              .genie .right-box .multi-para-hilt .paragraph:nth-child(2n + 1) {
                margin-left: 2%;
              }
              .genie .multi-para-hilt .paragraph:nth-child(2n) {
                clear: left;
              }
              .genie .right-box .multi-para-hilt .singlecolumn {
                margin: 0;
              }
              .genie .multi-section-hilt .multi-para-opt,
              .genie
                .section:not(.multi-para-hilt):not(.multi-section-hilt)
                .multi-para-opt,
              .genie .multi-para-hilt .twocol.skill {
                display: none;
              }
              .genie .multi-para-hilt ul {
                padding-top: 5px;
              }
      
              /*For Extra Space Before Colon*/
              .genie .beforecolonspace {
                display: none !important;
              }
              .genie.show-colon-space .beforecolonspace {
                display: inline !important;
              }
              .genie,
              .genie table {
                line-height: 13px;
              }
              .genie.pagesize {
                width: "100%";
              }
              .genie.fontsize,
              .genie .lang-sec.infobarsec .paragraph *,
              .genie .lang-sec.infotilesec .paragraph *,
              .genie .skli-sec .paragraph * {
                font-size: 10px;
              }
              .genie.fontface {
                font-family: Source Sans Pro;
              }
              .genie .section {
                padding-top: 20px;
                margin-bottom: 20px;
              }
              .genie .firstparagraph {
                margin-top: 0 !important;
              }
              .genie .paragraph {
                margin-top: 10px;
              }
              .genie .right-box .singlecolumn,
              .genie .right-box .maincolumn {
                margin-left: 0px;
              }
              .genie table.skills td {
                padding-top: 7px;
              }
              .genie .name {
                font-size: 24px;
                line-height: 26px;
              }
              .genie .address,
              .genie .adnl-lnks {
                font-size: 10px;
                line-height: 13px;
              }
              .genie .address2 {
                font-size: 10px;
                line-height: 13px;
              }
              .genie .sectiontitle {
                font-size: 12px;
                line-height: 15px;
              }
              .genie .left-box,
              .genie .left-box .firstparagraph {
                width: 130px;
              }
              .genie .parent-container .right-box > .section:first-child:before,
              .genie
                .parent-container
                .right-box
                > .sortable-item:first-child
                .section:before,
              .genie .left-box .inner-rating,
              .genie .inner-rating {
                background: #0000ff;
              }
              .genie .icon-row {
                line-height: 13px;
              }
              .genie .resume-title {
                font-size: 12px;
                line-height: 15px;
              }
              .genie .parent-container .section {
                border-top: 1px solid #000;
              }
      
              /*Infographic Bar*/
              .genie .lang-sec.infobarsec .inner-rating,
              .genie .skli-sec.infobarsec .inner-rating {
                background-color: #0000ff;
              }
              .genie .right-box .lang-sec.infobarsec,
              .genie .right-box .skli-sec.infobarsec {
                padding-left: 0px;
              }
              .genie .right-box .lang-sec.infobarsec .heading,
              .genie .right-box .skli-sec.infobarsec .heading {
                margin-left: -0px;
              }
              .genie .lang-sec.infobarsec .paragraph,
              .genie .skli-sec.infobarsec .paragraph {
                width: 162px;
                max-width: 162px;
              }
              .genie .lang-sec.infobarsec .nativeLangPara {
                width: 344px;
                max-width: 344px;
              }
              .genie .left-box .lang-sec.infobarsec .paragraph,
              .genie .left-box .skli-sec .infobarsec .paragraph {
                padding-bottom: 5px;
              }
      
              .genie .skli-sec .singlecolumn .field:last-child {
                min-height: 13px;
              }
      
              /*Infographic Tile*/
              .genie .right-box .lang-sec.infotilesec,
              .genie .right-box .skli-sec,
              .genie .right-box .multi-para-hilt {
                padding-left: 0px;
              }
              .genie .right-box .lang-sec.infotilesec .heading,
              .genie .right-box .skli-sec .heading,
              .genie .right-box .multi-para-hilt .heading {
                margin-left: -0px;
              }
              .genie .lang-sec.infotilesec .paragraph,
              .genie .right-box .skli-sec .paragraph {
                width: 162px;
              }
              .genie .left-box .lang-sec.infotilesec .paragraph,
              .genie .left-box .skli-sec .paragraph {
                padding-bottom: 5px;
              }
              .genie .lang-sec.infotilesec .nativeLangPara {
                width: 344px;
                max-width: 344px;
              }
      
              .genie .right-box .sortable-item .lang-sec,
              .genie .right-box .sortable-item .skli-sec {
                margin-left: 0;
                padding-left: 0px;
              }
              .page-finalize .genie .lang-sec .para_odd,
              .page-finalize .genie .lang-sec .para_even {
                max-width: 162px;
              }
              .genie .left-box .data-CNTC + .sortable-item:not(.data-ALNK) {
                margin-top: 5px;
              }
              .genie .parent-container .left-box .sortable-item .section,
              .genie .left-box .data-CNTC + .sortable-item:not(.data-ALNK) .section {
                border-top: 1px solid #fff;
              }
      
              /*Builder fixes*/
              .genie .right-box .sortable-item .lang-sec:before,
              .genie .right-box .sortable-item .skli-sec:before {
                display: none;
              }
              .genie .sortable-item.active .buidblack {
                fill: #000;
              }
              .genie .sortable-item.active .buidwhite {
                fill: #fff;
              }
              .genie .left-box .skli-sec .sortableInner .sortable-item .paragraph,
              .genie
                .left-box
                .lang-sec
                .sortableInner
                .sortable-item
                + .sortable-item
                .paragraph {
                max-width: 100%;
                vertical-align: top;
              }
              .page-finalize .genie .right-box .lang-sec .para_odd {
                margin-right: 15px;
              }
              .page-finalize .genie .right-box .data-LNGG .paragraph-container {
                display: inline-block;
              }
              .page-finalize
                .genie
                .right-box.dropable-container
                .lang-sec
                .sortableInner
                .sortable-item {
                display: inline-block;
              }
              .page-finalize .genie .left-box,
              .page-finalize .genie .right-box {
                position: static;
              }
              .page-finalize .genie .parent-container .left-box:before {
                content: "";
                background: #404040;
                position: absolute;
                left: 31px;
                top: 1px;
                width: 170px;
                height: calc(100% - 40px);
                z-index: 1;
              }
              .page-finalize .genie .left-box .section.pict-sec {
                top: 0px;
              }
              .genie .disp-table {
                display: table;
                table-layout: fixed;
                width: 100%;
              }
      
              /*Fixes for builder for skill*/
              .genie
                .skli-sec
                .sortable-item
                .paragraph:last-child
                .singlecolumn
                .field:last-child {
                min-height: 13px;
              }
              .genie
                .right-box
                .skli-sec
                .sortable-item:nth-last-child(1)
                .paragraph
                .singlecolumn
                .field:last-child,
              .genie
                .right-box
                .skli-sec
                .sortable-item:nth-last-child(2)
                .paragraph
                .singlecolumn
                .field:last-child {
                min-height: 0;
              }
      
              /*LUK builder fixes*/
              .genie.LUK .parent-container .left-box {
                z-index: 9;
              }
              .genie.LUK .data-PICT {
                position: static;
              }
              .genie.LUK .right-box > .sortable-item:first-child .section {
                margin-left: -250px;
                padding-left: 249px;
              }
              .genie.LUK .sortable-item.active .buidblack,
              .genie .sortable-item.active .social .svg-inricon path {
                fill: #fff;
              }
              .genie.LUK .sortable-item.active .buidwhite,
              .genie .sortable-item.active .social .svg-circlebg {
                fill: #000;
              }
              .genie.LUK .parent-container .left-box .sortable-item.active,
              .genie.LUK .parent-container .left-box > .sortable-item.active .heading {
                color: #fff;
              }
              .genie.LUK .left-box .sortable-item.active .st0 {
                fill: transparent !important;
              }
              .genie .sortable-item.active .social-link .field a {
                color: #000;
              }
      
              /*Rectangular Rating Blocks*/
              .genie .paragraph .sliced-rect .sliced-rect-tile.ratvfill {
                background-color: #0000ff;
              }
      
              @-moz-document url-prefix() {
                .genie .parent-container {
                  height: 762px;
                }
              }
        </style>
        <title></title>
      </head>
      <body>
        <section class="page-wrap">
          <div id="document" class="document doc-root fontsize fontface vmargins hmargins pagesize genie EJS8 docskinwidth=">
            <div id="CONTAINER_PARENT_0" class="parent-container">
              <div id="CONTAINER_0" class="left-box">
                <div data-react-beautiful-dnd-draggable="221" class="sortable-item section-container SortableItem-sibling data-CNTC">
                  <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                  <div id="SECTION_CNTC2f838e9f-8d2a-4bc1-b1cd-998c15e31266" class="section section-cntc notdraggable SECTION_CNTC" data-section-cd="CNTC">
                    <div class="doc-item">
                      <div class="">
                        <div class="">
                          <div id="PARAGRAPH_CNTC_379be96f-a033-c17d-b4e4-d348b79faafc" class="paragraph PARAGRAPH_CNTC firstparagraph placeholder-text">
                            <div class="clearfix doc-item">
                              <div class="address">
                                <div class="icon-row" dependency="EMAI">
                                  <div class="icon-svg">
                                    <svg viewbox="0 0 15 15">
                                    <rect class="st0 buidwhite" width="15" height="15"></rect>
                                    <path fill="#fff" class="buidblack" d="M7,14L7,14c-3.9,0-7-3.1-7-7v0c0-3.8,3.1-7,7-7h0c3.8,0,7,3.1,7,7v0C14,10.9,10.9,14,7,14z"></path>
                                    <path fill="#404040" class="buidwhite" d="M6.9,5.7c0.8,0,1.4,0.6,1.4,1.4S7.6,8.5,6.9,8.5S5.5,7.9,5.5,7.1S6.1,5.7,6.9,5.7L6.9,5.7 M10.1,9.4 c1,0,1.9-0.9,1.9-1.9C12,3.9,9.5,2,7,2C4.3,2,2,4.3,2,7s2.3,5,5,5c1.1,0,2.1-0.4,3.1-1c0.5-0.4-0.1-1.1-0.5-0.8 c-0.8,0.5-1.6,0.9-2.5,0.9C4.9,11.1,3,9.3,3,7s1.9-4.1,4.1-4.1c2.1,0,4.1,1.5,4.1,4.6c0,0.5-0.5,0.9-1,0.9C9.8,8.4,9.4,8,9.4,7.5 V5.2c0-0.2-0.3-0.5-0.5-0.5C8.6,4.7,8.4,5,8.4,5.2l0,0l0,0C8,5,7.5,4.7,7,4.7c-1.3,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3 c0.6,0,1.3-0.3,1.7-0.8C9,9.1,9.5,9.4,10.1,9.4"></path></svg>
                                  </div>
                                  <div class="ico-txt">
                                    <span class="field" id="FIELD_EMAI">${
                                      personDetail.email
                                    }</span>
                                  </div>
                                </div>
                                <div class="icon-row" dependency="HPHN|CPHN">
                                  <div class="icon-svg">
                                    <svg width="14px" height="14px" viewbox="0 0 14 14">
                                    <path fill="#fff" class="buidblack" d="M6.729 0c3.71 0 6.781 3.018 6.781 6.729 0 3.71-3.07 6.781-6.781 6.781C3.019 13.51 0 10.439 0 6.729A6.736 6.736 0 0 1 6.729 0zm3.535 8.418a.556.556 0 0 0-.555-.555c-.434 0-.858-.068-1.26-.2a.54.54 0 0 0-.549.116l-.798.602c-.915-.488-1.5-1.074-1.983-1.982l.586-.78a.56.56 0 0 0 .138-.565 4.027 4.027 0 0 1-.202-1.262.555.555 0 0 0-.555-.555H3.792a.556.556 0 0 0-.555.555 6.48 6.48 0 0 0 6.472 6.471c.305 0 .555-.249.555-.555z"></path></svg>
                                  </div>
                                  <div class="ico-txt">
                                    <span class="field" id="FIELD_HPHN">${
                                      personDetail.phone
                                    }</span> <span class="field" id="FIELD_CPHN"></span>
                                  </div>
                                </div>
                                <div class="icon-row" dependency="ADDR|STRT|CITY|STAT|ZIPC">
                                  <div class="icon-svg">
                                    <svg viewbox="0 -1 15 15">
                                    <path fill="#fff" class="buidblack" d="M7,14L7,14c-3.9,0-7-3.1-7-7v0c0-3.8,3.1-7,7-7h0c3.8,0,7,3.1,7,7v0C14,10.9,10.9,14,7,14z"></path>
                                    <path fill="#404040" class="buidwhite" d="M8.5,6c0,0.8-0.7,1.5-1.5,1.5S5.5,6.8,5.5,6c0-0.8,0.7-1.5,1.5-1.5S8.5,5.2,8.5,6 M10.4,6 c0-1.9-1.5-3.4-3.4-3.4C5.1,2.6,3.6,4.2,3.6,6c0,1.7,2.7,4.8,3,5.2c0.2,0.2,0.5,0.2,0.7,0c0,0,0,0,0,0C7.7,10.8,10.4,7.8,10.4,6"></path></svg>
                                  </div>
                                  <div class="zipsuffix">
                                    <span class="field" id="FIELD_STRT"></span> <span class="field" id="FIELD_CITY">${
                                      personDetail.city
                                    }</span><span dependency="CITY+STAT">,</span> <span class="field" id="FIELD_STAT">${
    personDetail.country
  }</span> <span class="field" id="FIELD_ADDR"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-react-beautiful-dnd-draggable="221" class="sortable-item section-container SortableItem-sibling data-EDUC">
                  <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                  <div id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac" class="section education SECTION_EDUC noparagraph multi-para has-title" data-section-cd="EDUC">
                    <div class="doc-item">
                      <div class="heading">
                        <div class="sectiontitle" id="SECTIONNAME_EDUC">
                          Education
                        </div>
                      </div>${renderEducation()}
                    </div>${renderCertificate()} ${renderAwards()} ${renderReferences()}
                  </div>
                </div>
              </div>
              <div id="CONTAINER_1" class="right-box">
                <div data-react-beautiful-dnd-draggable="221" class="sortable-item section-container SortableItem-sibling data-NAME">
                  <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                  <div id="SECTION_NAME9a304921-ae93-4753-95a9-f45bda3f00f5" class="section notdraggable SECTION_NAME firstsection" data-section-cd="NAME">
                    <div class="doc-item">
                      <div class="">
                        <div class="">
                          <div id="PARAGRAPH_NAME_43670be1-6ffd-fc02-1730-adb1b38a82b1" class="paragraph PARAGRAPH_NAME firstparagraph placeholder-text">
                            <div>
                              <div class="name">
                                <span class="field" id="FIELD_FNAM">${
                                  personDetail.firstName
                                }</span> <span class="field" id="FIELD_LNAM">${
    personDetail.lastName
  }</span>
                              </div>
                              <div class="resume-title" dependency="DCTL">
                                <span id="FIELD_DCTL" class="placeholder-text">${jobPosition}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-react-beautiful-dnd-draggable="221" class="sortable-item section-container SortableItem-sibling data-SUMM">
                  <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                  <div id="SECTION_SUMM4800037c-cd8f-4921-be95-3c3932c1a2a7" class="section SECTION_SUMM noparagraph has-title" data-section-cd="SUMM">
                    <div class="doc-item">
                      <div class="heading">
                        <div class="sectiontitle" id="SECTIONNAME_SUMM">
                          Professional Summary
                        </div>
                      </div>
                      <div class="">
                        <div class="">
                          <div id="PARAGRAPH_SUMM_0" class="paragraph PARAGRAPH_SUMM firstparagraph placeholder-text">
                            <div class="clearfix doc-item">
                              <div class="field singlecolumn" id="FIELD_FRFM">
                                ${userSummary}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-react-beautiful-dnd-draggable="221" class="sortable-item section-container SortableItem-sibling data-HILT">
                  <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                  <div id="SECTION_HILTa5cb1850-6271-45e8-86ba-3d92fbc82062" class="section-hilt section SECTION_HILT noparagraph has-title" data-section-cd="HILT">
                    <div class="doc-item">
                      <div class="heading">
                        <div class="sectiontitle" id="SECTIONNAME_HILT">
                          Skills
                        </div>
                      </div>
                      <div class="">
                        <div class="">
                          <div id="PARAGRAPH_HILT_0" class="paragraph PARAGRAPH_HILT firstparagraph placeholder-text">
                            <div class="clearfix doc-item">
                              <div class="singlecolumn maincolumn">
                                <div class="disp-table twocol skill">
                                  <span class="paddedline" id="FIELD_SKC1"></span>
                                  <ul>
                                    ${renderSkills()}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="doc-item">
                        <div class="heading">
                          <div class="sectiontitle" id="SECTIONNAME_HILT">
                            Hobbies
                          </div>
                        </div>
                        <div class="">
                          <div class="">
                            <div id="PARAGRAPH_HILT_0" class="paragraph PARAGRAPH_HILT firstparagraph placeholder-text">
                              <div class="clearfix doc-item">
                                <div class="singlecolumn maincolumn">
                                  <div class="disp-table twocol skill">
                                    <span class="paddedline" id="FIELD_SKC1"></span>
                                    <ul>
                                      ${renderHobbies()}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-react-beautiful-dnd-draggable="221" class="sortable-item section-container SortableItem-sibling data-EXPR">
                    <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                    <div id="SECTION_EXPR323074c2-b189-4f8d-8af7-fc51cdc40434" class="section SECTION_EXPR noparagraph multi-para has-title" data-section-cd="EXPR">
                      <div class="doc-item">
                        <div class="heading">
                          <div class="sectiontitle" id="SECTIONNAME_EXPR">
                            Work History
                          </div>
                        </div>
                        <div class="">
                          <div class="sortableInner">
                            <div id="PARAGRAPH_EXPR_0" class="paragraph PARAGRAPH_EXPR firstparagraph placeholder-text">
                              ${renderExperience()}
                            </div>
                            <div id="PARAGRAPH_EXPR_-2" class="paragraph PARAGRAPH_EXPR placeholder-text">
                              <div class="clearfix doc-item">
                                <div class="singlecolumn">
                                  <span class="txt-bold" id="FIELD_COMP"></span> <span class="semi-bold" id="FIELD_JTIT"></span> <span id="FIELD_JCIT"></span> <span id="FIELD_JSTA"></span><span id="FIELD_JCNT"></span><span class="joblocation" id="FIELD_JLOC"></span><span id="FIELD_JCTR"></span> <span class="jobline" id="FIELD_JDES"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
      </html>
      `;
}
