export function template31(resume) {
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
        <div
  id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac"
  class="section SECTION_EDUC noparagraph multi-para has-title"
  data-section-cd="EDUC"
>
  <div class="doc-item">
    <div class="heading">
      <div class="sectiontitle" id="SECTIONNAME_EDUC">
        Certification<span
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
             ><span class="degree"></span><span class="sectiontitle">${
               element.certificate
             }</span></span
           ><span>, </span><span class="padded-line txtItalics"
             ><span
               class="companyname companyname_educ"
               dependency="SCHO"
               >${element.institute}</span
             ><span>, </span>
             <span class="job-location jobcity">${element.Year}${cleanMonth(
                    element.fromMonth
                  )}</span
             ><span> </span
             ><span class="job-location jobstate"></span></span
           ><span class="padded-line"><span class="field"></span></span>
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
      awardsHtml = `
        <div
  id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac"
  class="section SECTION_EDUC noparagraph multi-para has-title"
  data-section-cd="EDUC"
>
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
             ><span class="degree"></span><span class="sectiontitle">${element.awards}</span></span
           ><span>, </span><span class="padded-line txtItalics"
             ><span
               class="companyname companyname_educ"
               dependency="SCHO"
               >${element.institute}</span
             ><span>, </span>
             <span class="job-location jobcity">${element.Year}</span
             ><span> </span
             ><span class="job-location jobstate"></span></span
           ><span class="padded-line"><span class="field"></span></span>
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
      referencesHtml = `
         <div
  id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac"
  class="section SECTION_EDUC noparagraph multi-para has-title"
  data-section-cd="EDUC"
>
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
             ><span class="degree"></span><span class="sectiontitle">${element.reference}</span></span
           ><span>, </span><span class="padded-line txtItalics"
             ><span
               class="companyname companyname_educ"
               dependency="SCHO"
               >${element.institute}</span
             ><span> </span>
            
           </div>`
              )
              .join("")}
              </div>
              </div>`;
    }
    return referencesHtml;
  }

  function renderSkills() {
    let skillsHtml = "";
    if (skills && skills.length > 0) {
      const skillNames = skills.map((element) => element.name);
      skillsHtml = `
        <div class="section skills">
          <div class="heading">
            <div class="section-title">Skills</div>
          </div>
          <p class="skill-list">${skillNames.join(", ")}</p>
        </div>
      `;
    }
    return skillsHtml;
  }

  function renderHobbies() {
    let hobbyHtml = "";
    if (hobbies && hobbies.length > 0) {
      const hobbyNames = hobbies.map((element) => element.name);
      hobbyHtml = `
        <div class="section skills">
          <div class="heading">
            <div class="section-title">Hobbies</div>
          </div>
          <p class="skill-list">${hobbyNames.join(", ")}</p>
        </div>
      `;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";
    if (experience.length > 0) {
      result += `
      <div class="heading">
        <div class="sectiontitle" id="SECTIONNAME_EXPR">
          Work History
        </div>
      </div>
    `;

      experience.forEach((element) => {
        result += `<div class="clearfix doc-item">
      <div class="singlecolumn">
        <span class="paddedline" dependency="COMP|JTIT">
          <span class="txt-bold" id="FIELD_COMP">${element.company}</span
          ><span dependency="COMP+JTIT"> - </span>
          <span class="txt-bold" id="FIELD_JTIT">${element.position}</span>
        </span>
        <span class="paddedline txtItl" dependency="JCIT|JSTA|JCNT|JLOC|JCTR">
          <span id="FIELD_JCIT">${element?.city ?? []}</span>
          <span id="FIELD_JSTA"></span>
          <span dependency="JCIT|JSTA|JCNT"></span>
          <span id="FIELD_JCTR"></span>
          <span id="FIELD_JLOC"></span>
        </span>
        <span class="paddedline txtItl" dependency="JSTD|EDDT">
          <span id="FIELD_JSTD" format="%m/%Y">${element.fromYear}${cleanMonth(
          element.fromMonth
        )}</span>
          <span dependency="JSTD+EDDT"> - </span>
          <span id="FIELD_EDDT" format="%m/%Y">${element.toYear}${cleanMonth(
          element.toMonth
        )}</span>
        </span>
        <span><ul>`;

        var roles = "";
        (element?.roles ?? []).forEach((role) => {
          roles += `<li>${role}</li>`;
        });
        result += `${roles}
        </ul></span>
      </div>
    </div><br/>`;
      });
    }
    return result;
  }

  function renderEducation() {
    var result = "";
    if (education.length > 0) {
      result += `
      <div class="heading">
        <div class="sectiontitle" id="SECTIONNAME_EDUC">
          Education
        </div>
      </div>
    `;

      education.forEach((element) => {
        result += `<div class="">
      <div class="">
        <div
          id="PARAGRAPH_EDUC_0"
          class="paragraph PARAGRAPH_EDUC firstparagraph placeholder-text"
        >
          <div class="clearfix doc-item">
            <div class="singlecolumn">
              <span class="paddedline txtItl" dependency="GRYR|GRST|GRED|GRIP">
                <span class="xslt_static_change displayNoneThisField">Expected in </span>
                <span id="FIELD_GRYR" format="%m/%Y">${element.fromYear}</span>
                <span id="FIELD_GRYR" format="%m/%Y"> - </span>
                <span id="FIELD_GRYR" format="%m/%Y">${element.toYear}</span>
                <span class="jobdates" id="FIELD_GRST" format="%m/%Y"></span>
                <span class="jobdates" id="FIELD_GRED" format="%m/%Y"></span>
                <span id="FIELD_GRIP"></span>
              </span>
              <span class="paddedline" dependency="SCHO">
                <span class="companyname" id="FIELD_SCHO">${
                  element.university
                }</span>
              </span>
              <span class="paddedline" dependency="SCIT|SSTA|SCNT">
                <span id="FIELD_SCIT">${element?.city ?? []}</span>
                <span id="FIELD_SCNT"></span>
              </span>
              <span class="paddedline degreeDetails" dependency="DGRE|STUY|GRPA|GRHN">
                <span class="txt-bold" id="FIELD_DGRE"></span>
                <span dependency="DGRE+STUY|GRHN"><span class="beforecolonspace"> </span></span>
                <span class="companyname">${element.degree}</span>
                <span dependency="STUY"></span>
                <span id="FIELD_GRHN"></span>
                <span id="FIELD_GRPA"></span>
              </span>
              <span id="FIELD_FRFM"></span>
            </div>
          </div>
        </div>
      </div>
    </div><br/>`;
      });
    }
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
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400");
          @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400");
  
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
  
          /*START content disc style for LI*/
          .genie ul,
          .genie li {
            list-style: none;
            margin: 0 0 0 8px;
            padding: 0;
          }
          .genie ul li {
            position: relative;
            margin: 0 0 0 3px;
          }
          .genie ul li:before {
            content: "";
            font-size: 0.7em;
            position: absolute;
            left: -11px;
            top: 0;
          }
          /*END content disc style for LI*/
  
          /*Helping Class*/
          .genie .paddedline {
            display: block;
          }
          .genie .txt-bold {
            font-weight: bold;
          }
          .genie .txtItl {
            font-style: italic;
          }
          .genie .displayNoneThisField {
            display: none;
          }
          .genie .flt-right {
            float: right;
          }
          .genie .brk-all {
            word-break: break-all;
          }
  
          .genie {
            color: #2a2a2a;
            line-height: 16px;
            font-variant-ligatures: none;
            word-wrap: break-word;
            min-height: 792px;
          }
          .genie .parentContainer {
            display: table;
            width: 100%;
            table-layout: fixed;
          }
          .genie .heading {
            padding-bottom: 10px;
            font-weight: bold;
          }
          .genie .left-box {
            padding: 0 15px 0 30px;
            display: table-cell;
          }
          .genie .right-box {
            padding: 0 30px 0px 15px;
            display: table-cell;
            vertical-align: top;
            box-sizing: content-box;
          }
          .genie .left-box .section,
          .genie .right-box .section {
            border-top: 1px solid #2c806f;
          }
          .genie .left-box .section:first-child,
          .genie .right-box .section:first-child {
            border-top: none !important;
          }
          .genie .firstparagraph {
            margin-top: 0 !important;
          }
          .genie .cntcSec {
            background: #fff;
            padding-bottom: 10px !important;
            border-top: none !important;
            border-bottom: 11px solid #2c806f;
            padding-top: 0px;
          }
          .genie .name {
            font-size: 24px;
            line-height: 30px;
            font-weight: bold;
          }
          .genie .name,
          .genie .sectiontitle,
          .genie .resumeTitle {
            font-family: "Montserrat", sans-serif;
          }
          .genie .right-box .singlecolumn {
            margin-left: 0 !important;
          }
          .genie .sectiontitle {
            font-weight: bold;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .genie .jobline ul {
            margin-top: 12px;
          }
          .genie .resumeTitle {
            font-weight: 400;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            padding-top: 15px;
          }
          .genie .nameSec .name,
          .genie .resumeTitle {
            position: relative;
            padding-left: 15px;
          }
          .genie .nameSec .name:before,
          .genie .resumeTitle:before {
            content: "";
            position: absolute;
            width: 30px;
            background: #2c806f;
            top: 0px;
            height: 100%;
            left: -30px;
          }
          .genie .nameSec + .section,
          .genie .cntcSec + .section {
            border-top: none !important;
          }
          .genie .cntcSec + .section,
          .genie .nameSec + .section {
            padding-top: 30px !important;
          }
          .genie .degreeDetails {
            margin-top: 6px;
          }
          .genie .cntcSec {
            border-bottom: 11px solid #2c806f;
            padding-bottom: 10px;
          }
          .genie .left-box .skill {
            display: table;
            width: 100%;
            table-layout: fixed;
          }
          .genie .left-box .skill .paddedline {
            display: table-cell;
            width: 30%;
            padding-right: 22px;
          }
          .genie .left-box .skill .paddedline:last-child {
            padding-right: 0;
          }
          .genie .left-box .section:first-child {
            margin-bottom: 0px;
            padding-top: 0 !important;
          }
          .genie .right-box .section:first-child {
            margin-bottom: 0px;
            padding-top: 0;
          }
          .genie .social .field a {
            color: #0000ee;
            text-decoration: underline;
          }
          .genie .social .field a:hover {
            text-decoration: underline;
          }
  
          /*MFR address order code*/
          .genie .zipprefix,
          .genie.MFR .zipsuffix {
            display: none !important;
          }
          .genie .zipsuffix,
          .genie.MFR .zipprefix {
            display: block !important;
          }
  
          /*For Extra Space Before Colon*/
          .genie .beforecolonspace {
            display: none !important;
          }
          .genie.show-colon-space .beforecolonspace {
            display: inline !important;
          }
  
          /*HILT multi para/section*/
          .genie .multi-para-hilt:after {
            content: "";
            display: block;
            clear: both;
            visibility: hidden;
            line-height: 0;
            height: 0;
          } /*Clearfix*/
          .genie .left-box .multi-para-hilt .paragraph {
            margin-bottom: 20px;
            margin-top: 0;
            width: 49%;
            float: left;
          }
          .genie .right-box .multi-para-hilt .paragraph {
            margin: 0 0 20px;
          }
          .genie .right-box .multi-para-hilt .paragraph:last-child {
            margin-bottom: 0;
          }
          .genie .left-box .multi-para-hilt .paragraph:last-child,
          .genie
            .left-box
            .multi-para-hilt
            .paragraph:nth-last-child(2):nth-child(2n):nth-child(2n) {
            margin-bottom: 0;
          }
          .genie .left-box .multi-para-hilt .paragraph:nth-child(2n + 1) {
            margin-left: 2%;
          }
          .genie .left-box .multi-para-hilt .paragraph:nth-child(2n) {
            clear: left;
          }
          .genie .left-box .multi-para-hilt .singlecolumn {
            margin: 0;
          }
          .genie .multi-section-hilt .multi-para-opt,
          .genie
            .section:not(.multi-para-hilt):not(.multi-section-hilt)
            .multi-para-opt,
          .genie .multi-para-hilt .skill {
            display: none;
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
          .genie .lang-sec.infobarsec .nativeLangPara .field,
          .genie .skli-sec.infobarsec .field * {
            display: inline;
          }
          .genie .lang-sec.infobarsec .paragraph,
          .genie .skli-sec .paragraph {
            display: inline-block;
            vertical-align: top;
            padding-bottom: 5px;
            margin-top: 0;
          }
          .genie .lang-sec.infobarsec .singlecolumn,
          .genie .skli-sec .singlecolumn {
            margin-left: 0 !important;
            padding-left: 0;
            position: relative;
          }
          .genie .left-box .lang-sec.infobarsec .para_odd,
          .genie .left-box .skli-sec.infobarsec .para_odd {
            margin-right: 15px;
          }
          .genie .lang-sec.infobarsec > .paragraph:nth-last-child(1),
          .genie .left-box .lang-sec.infobarsec > .paragraph:nth-last-child(2),
          .genie .skli-sec.infobarsec > .paragraph:nth-last-child(1),
          .genie .left-box .skli-sec.infobarsec > .paragraph:nth-last-child(2) {
            padding-bottom: 0 !important;
          }
          .genie .lang-sec.infobarsec .nativeLangPara {
            width: 100% !important;
          }
          .genie .left-box .lang-sec.infobarsec .inner-rating,
          .genie .left-box .skli-sec .infobarsec .inner-rating {
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
            background-color: #2c806f;
            height: 4px;
            position: relative;
            width: 60%;
          }
          .genie .right-box .lang-sec.infobarsec .paragraph,
          .genie .right-box .skli-sec.infobarsec .paragraph {
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
  
          /*Infographic Tiles*/
          .genie .lang-sec.infotilesec,
          .genie .skli-sec {
            font-size: 0;
          }
          .genie .lang-sec.infotilesec .paragraph,
          .genie .skli-sec .paragraph {
            display: inline-block;
            vertical-align: top;
            padding-bottom: 5px;
            margin-top: 0;
          }
          .genie .lang-sec.infotilesec > .paragraph:nth-last-child(1),
          .genie .left-box .lang-sec.infotilesec > .paragraph:nth-last-child(2) {
            padding-bottom: 0 !important;
          }
          .genie .lang-sec.infotilesec .field *,
          .genie .skli-sec > .paragraph:nth-last-child(1),
          .genie .left-box .skli-sec > .paragraph:nth-last-child(2) {
            padding-bottom: 0 !important;
          }
          .genie .lang-sec.infotilesec .field *,
          .genie .skli-sec .field *,
          .genie .lang-sec.infotilesec .nativeLangPara .field {
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
            line-height: 0;
            margin-top: 3px;
            clear: both;
          }
          .genie .left-box .lang-sec.infotilesec .paragraph.para_odd,
          .genie .left-box .skli-sec .paragraph.para_odd {
            margin-right: 15px;
          }
          .genie .right-box .lang-sec.infotilesec .paragraph,
          .genie .right-box .skli-sec .paragraph {
            width: 100% !important;
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
            background-color: #2c806f;
          }
          .genie .hide-bar .rating-bar,
          .genie .hide-colon .colon,
          .genie .hide-only-bar .rating-bar {
            display: none !important;
          }
  
          /*Infographic left box*/
          .genie .right-box .rating-bar:before {
            content: "";
            position: absolute;
            height: 3px;
            width: 100%;
            left: 0;
            top: 0;
            background: #d5d6d6;
          }
          .genie .right-box .lang-sec .paragraph,
          .genie .right-box .skli-sec .paragraph {
            display: block;
            margin-right: 0 !important;
          }
  
          /*MFR - Temp Code to change WEB1 Label*/
          .genie .address .web1-mfr-lbl,
          .genie.MFR .address .web1-lbl {
            display: none;
          }
          .genie.MFR .address .web1-mfr-lbl {
            display: inline;
          }
          .genie,
          .genie table {
            line-height: 14px;
          }
          .genie.pagesize {
            width: "100%";
          }
          .genie.fontsize,
          .genie .lang-sec.infobarsec .paragraph *,
          .genie .lang-sec.infotilesec .paragraph *,
          .genie .skli-sec .paragraph *,
          .genie .skli-sec.infobarsec .paragraph * {
            font-size: 13px;
          }
          .genie.fontface {
            font-family: Open Sans;
          }
          .genie.vmargins {
            padding-top: 40px;
            padding-bottom: 40px;
          }
          .genie .left-box {
            padding-left: 30px;
          }
          .genie .nameSec .name:before,
          .genie .resumeTitle:before {
            background: #2c806f;
            width: 30px;
            left: -30px;
          }
          .genie .section {
            padding-top: 20px;
            margin-bottom: 20px;
          }
          .genie .sectiontitle {
            font-size: 12px;
            line-height: 15px;
          }
          .genie .paragraph {
            margin-top: 20px;
          }
          .genie .singlecolumn,
          .genie .left-box .mrg-left {
            margin-left: 0px;
          }
          .genie .name {
            font-size: 24px;
            line-height: 30px;
          }
          .genie .resumeTitle {
            font-size: 12px;
            line-height: 15px;
          }
          .genie .right-box {
            padding-right: 30px;
            width: 175px;
          }
          .genie .left-box .section,
          .genie .right-box .section {
            border-top: 1px solid #2c806f;
          }
          .genie .cntcSec {
            border-color: #2c806f;
          }
          .genie .right-box .multi-para-hilt .paragraph {
            margin-bottom: 20px;
          }
  
          /* Builder fixes */
          .genie .left-box .sortable-item:first-child .section {
            margin-bottom: 0px;
            padding-bottom: 0px;
            padding-top: 0 !important;
            border-top: none;
          }
          .genie .left-box .sortable-item:first-child + .sortable-item .section,
          .genie .right-box .sortable-item:first-child + .sortable-item .section {
            border-top: none;
            padding-top: 30px !important;
          }
          .genie .sortable-item.data-ALNK .section {
            margin-bottom: 20px !important;
          }
          .genie
            .sortable-item.data-CNTC
            + .sortable-item:not(.data-ALNK)
            .section {
            padding-top: 30px;
            border-top: 0;
          }
          .genie .data-CNTC .section {
            margin-top: 0;
            padding-bottom: 10px !important;
            padding-top: 0;
            margin-bottom: 0;
          }
          .genie .data-CNTC.active + .sortable-item:not(.data-ALNK) .section {
            margin-top: 0px;
          }
  
          /*Infographic Bar*/
          .genie .lang-sec.infobarsec .inner-rating,
          .genie .skli-sec.infobarsec .inner-rating {
            background-color: #2c806f;
          }
          .genie .left-box .lang-sec.infobarsec,
          .genie .left-box .multi-para-hilt {
            padding-left: 0px;
          }
          .genie .left-box .lang-sec.infobarsec .heading,
          .genie .left-box .multi-para-hilt .heading {
            margin-left: -0px;
          }
          .genie .lang-sec.infobarsec .paragraph {
            width: 340px;
            max-width: 155px;
          }
          .genie .lang-sec.infobarsec .nativeLangPara {
            width: 340px;
            max-width: 340px;
          }
  
          .genie .skli-sec .singlecolumn .field:last-child {
            min-height: 13px;
          }
  
          /*Infographic Tile*/
          .genie .left-box .lang-sec.infotilesec,
          .genie .left-box .skli-sec {
            padding-left: 0px;
          }
          .genie .left-box .lang-sec.infotilesec .heading,
          .genie .left-box .skli-sec .heading {
            margin-left: -0px;
          }
          .genie .left-box .lang-sec.infotilesec .paragraph,
          .genie .left-box .skli-sec .paragraph {
            width: 155px;
          }
          .genie .right-box .lang-sec.infotilesec .paragraph,
          .genie .right-box .skli-sec .paragraph {
            padding-bottom: 5px;
          }
          .genie .left-box .lang-sec.infotilesec .paragraph.nativeLangPara {
            width: 340px;
            max-width: 340px;
          }
  
          /*Builder Infographic*/
          .genie .lang-sec .sortable-item .para_odd,
          .genie .lang-sec .sortable-item .para_even,
          .genie
            .right-box
            .lang-sec
            .sortable-item
            .firstparagraph:not(.para_odd):not(.para_even) {
            padding-bottom: 5px;
          }
          .genie .left-box .lang-sec .sortable-item:nth-last-child(1) .paragraph,
          .genie .left-box .lang-sec .sortable-item:nth-last-child(2) .paragraph {
            padding-bottom: 0;
          }
          .genie .left-box .lang-sec .sortable-item .para_odd,
          .genie .left-box .lang-sec .sortable-item .para_even {
            max-width: 155px;
          }
          .genie .right-box .lang-sec .sortable-item {
            display: block !important;
          }
          .page-finalize .genie .data-LNGG .paragraph-container {
            display: inline;
          }
          .genie .right-box .lang-sec .sortable-item .paragraph {
            margin-right: 0 !important;
          }
          .genie .right-box .lang-sec .sortable-item .paragraph {
            padding-bottom: 5px;
          }
  
          .genie .data-SKLI .paragraph-container {
            display: inline-block;
          }
          .genie .skli-sec .sortableInner {
            margin-left: 0;
          }
          .genie .dropable-container .skli-sec .sortableInner .sortable-item {
            display: inline-block;
          }
          .genie .lang-sec .sortableInner .sortable-item,
          .genie .skli-sec .sortableInner .sortable-item {
            display: inline-block;
          }
          /*Fixes for builder for skill*/
          .genie
            .skli-sec
            .sortable-item
            .paragraph:last-child
            .singlecolumn
            .field:last-child {
            min-height: 13px;
            font-size:18px;
          }
          .genie
            .left-box
            .lang-sec
            .sortableInner
            > .sortable-item:nth-last-child(1)
            .paragraph,
          .genie
            .left-box
            .lang-sec
            .sortableInner
            > .sortable-item:nth-last-child(2)
            .paragraph,
          .genie
            .left-box
            .skli-sec
            .sortableInner
            > .sortable-item:nth-last-child(1)
            .paragraph,
          .genie
            .left-box
            .skli-sec
            .sortableInner
            > .sortable-item:nth-last-child(2)
            .paragraph {
            padding-bottom: 0 !important;
          }
          .genie .right-box .skli-sec .sortableInner .sortable-item {
            width: 100%;
          }
          .page-final .genie .left-box .data-LNGG.active .text-rename {
            left: -0px !important;
          }
  
          /*Rectangular Rating Blocks*/
          .genie .paragraph .sliced-rect .sliced-rect-tile.ratvfill {
            background-color: #2c806f;
          }
          .jobTitle{
            font-size: 18px;
          }



    </style>
    <title></title>
  </head>
  <body>
    <section class="page-wrap">
      <div class="document doc-root fontsize fontface vmargins hmargins pagesize genie EJS4 docskinwidth=">
        <div id="CONTAINER_PARENT_0" class="parentContainer">
          <div id="CONTAINER_0" class="left-box lastBox">
            <div data-react-beautiful-dnd-draggable="232" class="sortable-item section-container SortableItem-sibling data-NAME">
              <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
              <div id="SECTION_NAME9a304921-ae93-4753-95a9-f45bda3f00f5" class="section notdraggable nameSec SECTION_NAME firstsection" data-section-cd="NAME">
                <div class="doc-item">
                  <div class="">
                    <div class="">
                      <div id="PARAGRAPH_NAME_43670be1-6ffd-fc02-1730-adb1b38a82b1" class="paragraph PARAGRAPH_NAME firstparagraph placeholder-text">
                        <div>
                          <div class="name">
                            <span id="FIELD_FNAM">${
                              personDetail.firstName
                            }</span> <span id="FIELD_LNAM">${
    personDetail.lastName
  }</span>
                          </div>
                          <div class="resumeTitle" dependency="DCTL">
                            <span id="FIELD_DCTL" class="jobTitle">${jobPosition}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-react-beautiful-dnd-draggable="232" class="sortable-item section-container SortableItem-sibling data-SUMM">
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
                          <div class="singlecolumn" id="FIELD_FRFM">
                            ${userSummary}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-react-beautiful-dnd-draggable="232" class="sortable-item section-container SortableItem-sibling data-EXPR">
              <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
              <div id="SECTION_EXPR323074c2-b189-4f8d-8af7-fc51cdc40434" class="section SECTION_EXPR noparagraph multi-para has-title" data-section-cd="EXPR">
                <div class="doc-item">
                  
                  <div class="">
                    <div class="sortableInner">
                      <div id="PARAGRAPH_EXPR_0" class="paragraph PARAGRAPH_EXPR firstparagraph placeholder-text">
                        ${renderExperience()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div id="CONTAINER_1" class="right-box lastBox">
            <div data-react-beautiful-dnd-draggable="232" class="sortable-item section-container SortableItem-sibling data-CNTC">
              <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
              <div id="SECTION_CNTC2f838e9f-8d2a-4bc1-b1cd-998c15e31266" class="section cntcSec notdraggable SECTION_CNTC" data-section-cd="CNTC">
                <div class="doc-item">
                  <div class="">
                    <div class="">
                      <div id="PARAGRAPH_CNTC_379be96f-a033-c17d-b4e4-d348b79faafc" class="paragraph PARAGRAPH_CNTC firstparagraph placeholder-text">
                        <div class="clearfix doc-item">
                          <div class="address">
                            <div class="addressInner zipsuffix" dependency="ADDR|STRT|CITY|STAT|ZIPC">
                              <span id="FIELD_STRT"></span> <span id="FIELD_CITY">${
                                personDetail.city
                              }</span> <span id="FIELD_STAT">${
    personDetail.country
  }</span> <span id="FIELD_ADDR"></span>
                            </div>
                            <div dependency="HPHN">
                              <span id="FIELD_HPHN">${personDetail.phone}</span>
                            </div>
                            <div dependency="EMAI">
                              <span id="FIELD_EMAI">${personDetail.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-react-beautiful-dnd-draggable="232" class="sortable-item section-container SortableItem-sibling data-HILT">
              <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
              <div id="SECTION_HILTa5cb1850-6271-45e8-86ba-3d92fbc82062" class="section SECTION_HILT noparagraph has-title" data-section-cd="HILT">
               
              <div >

                 ${renderSkills()}
                            
                </div>
        
                <div >
                  
                ${renderHobbies()}
                            
                </div>
              </div>
            </div>
            <div data-react-beautiful-dnd-draggable="232" class="sortable-item section-container SortableItem-sibling data-EDUC">
              <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
              <div id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac" class="section SECTION_EDUC noparagraph multi-para has-title" data-section-cd="EDUC">
                <div class="doc-item">
                  ${renderEducation()}
                </div>
              </div>${renderCertificate() ?? []} ${renderAwards() ?? []} ${
    renderReferences() ?? []
  }
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
  </html>
  `;
}
