export function template68(resume) {
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
        <div class="sectiontitle" id="SECTIONNAME_EDUC">
         Certificate<span
        title=" Education "
        class="rename-section text-rename" ></span>
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
              .join("")}`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
        <div class="heading">
        <div class="sectiontitle" id="SECTIONNAME_EDUC">
         Awards<span
        title=" Education "
        class="rename-section text-rename" ></span>
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
              .join("")}`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `
        <div class="heading">
        <div class="sectiontitle" id="SECTIONNAME_EDUC">
         Reference<span
        title=" Education "
        class="rename-section text-rename" ></span>
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
              .join("")}`;
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
          <span class="paddedline exp-txtsize">
            <span id="FIELD_JSTD" format="%B %Y"
              >${element.fromYear}${cleanMonth(element.fromMonth)}</span
            ><span dependency="JSTD+EDDT"> - </span
            ><span id="FIELD_EDDT" format="%B %Y"
              >${element.toYear}${cleanMonth(element.toMonth)}</span
            >
            <br dependency="JSTD|EDDT" />
            <span class="txt-bold" id="FIELD_JTIT"
              >${element.position}</span
            ><span dependency="JTIT"
              ><span dependency="COMP|JCIT|JSTA|JCNT|JLOC"
                >,
              </span></span
            >
            <span class="txt-bold txt-itlc" id="FIELD_COMP"
              >${element.company}</span
            ><span dependency="COMP"
              ></span
            >
            <span id="FIELD_JCIT">${element?.city ?? []}</span
            ><span dependency="JCIT+JSTA|JCNT">, </span>
            <span id="FIELD_JSTA"></span>
            <span class="joblocation" id="FIELD_JLOC"></span>
          </span>
          <span class="jobline" id="FIELD_JDES"
            ><ul>`;

      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li>${role}</li>`;
      });
      result += `${roles}
            </ul></span >
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
        `
  <div class="">
    <div class="">
      <div
        id="PARAGRAPH_EDUC_0"
        class="paragraph PARAGRAPH_EDUC firstparagraph placeholder-text"
      >
        <div class="clearfix doc-item">
          <div class="singlecolumn">
            <span
              class="paddedline"
              dependency="SCHO|SCIT|SSTA|GRYR|GRIP|GRST|GRED|SCNT"
            >
              <span
                class="xslt_static_change displayNoneThisField"
                >Expected in </span
              ><span id="FIELD_GRYR" format="%B %Y"> ${element.fromYear}</span>
              <span id="FIELD_GRYR" format="%B %Y"> - </span>
              <span id="FIELD_GRYR" format="%B %Y"> ${element.toYear}</span>
              <span id="FIELD_GRST" format="%m/%Y"></span
              ><span id="FIELD_GRED" format="%m/%Y"></span>
              <span id="FIELD_GRIP"></span>
              <span
                class="paddedline"
                dependency="DGRE|STUY|GRHN|GRPA"
              >
                <span id="FIELD_DGRE">Degree</span
                ><span dependency="DGRE+STUY">: </span>
                <span id="FIELD_STUY"
                  >${element.degree}</span
                >
                <span id="FIELD_GRHN"></span>
                <span class="field" id="FIELD_GRPA"></span>
              </span>
              <span
                class="paddedline"
                dependency="SCHO|SCIT|SSTA|SCNT"
              >
                <span class="txt-bold" id="FIELD_SCHO"
                  >${element.university}</span
                ><span dependency="SCHO"
                  ><span dependency="SSTA|SCIT|SCNT"
                    >,
                  </span></span
                >
                <span class="joblocation" id="FIELD_SCIT"
                  >${element?.city ?? []}</span
                >
                <span class="joblocation" id="FIELD_SSTA"
                  ></span
                ><span
                  class="joblocation"
                  id="FIELD_SCNT"
                ></span>
              </span>
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
            @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700");
            @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700");
    
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
              margin: 0;
              padding: 0;
            }
            .genie ul li {
              position: relative;
              margin: 0px;
              padding-left: 10px;
              padding-bottom: 3px;
            }
            .genie ul li:last-child {
              padding-bottom: 0px;
            }
            .genie .section ul li:before {
              content: "";
              height: 5px;
              width: 5px;
              background: #000;
              border-radius: 50%;
              position: absolute;
              left: 0;
              top: 3px;
              transform: scale(0.5);
            }
            /*END content disc style for LI*/
    
            /*Helper Classes*/
            .genie .paddedline {
              display: block;
            }
            .genie .jobline ul {
              margin-top: 5px;
            }
            .genie .txt-bold {
              font-weight: bold;
            }
            .genie .flt-right {
              float: right;
            }
            .genie .txt-itlc {
              font-style: italic;
            }
            .genie .brk-all {
              word-break: break-all;
            }
    
            /*Common styling*/
            .genie {
              color: #000;
              font-variant-ligatures: none;
              word-wrap: break-word;
              position: relative;
              min-height: 767px;
              padding-bottom: 25px;
            }
            .genie:before,
            .genie:after {
              content: "";
              box-sizing: content-box;
              height: calc(100% - 50px);
              position: absolute;
              top: 0;
            }
            .genie:before {
              border: 25px solid #2D806F;
              width: calc(100% - 50px);
              left: 0;
            }
            .genie:after {
              width: calc(100% - 245px);
              border: 25px solid #000;
              border-left: 0;
              opacity: 0.3;
              right: 0;
              border-left: 0;
            }
    
            .genie .heading {
              margin-bottom: 10px;
            }
            .genie .sectiontitle {
              font-family: "Montserrat";
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .genie .sectiontitle,
            .genie .icon-row span[id*="EMAI"] {
              display: table;
              table-layout: fixed;
              width: 100%;
            }
            .genie .firstparagraph {
              margin-top: 0 !important;
            }
            .genie .section {
              position: relative;
            }
    
            /*Container*/
            .genie .top-section,
            .genie .parent-container {
              margin: 0 25px;
              padding-left: 25px;
              padding-right: 25px;
              position: relative;
              z-index: 1;
            }
            .genie .left-box,
            .genie .right-box {
              box-sizing: content-box;
              padding: 0px;
              display: table-cell;
              position: relative;
              vertical-align: top;
            }
            .genie .right-box > .section:first-child .heading,
            .genie .left-box > .section:first-child .heading {
              margin-bottom: 10px !important;
            }
    
            /*top-section*/
            .genie .top-section {
              padding-top: 50px;
              padding-bottom: 20px;
            }
            .genie .top-section .section {
              padding-top: 0 !important;
              padding-bottom: 0px;
            }
            .genie .top-section .right-box {
              padding-top: 5px;
            }
            .genie .prfl-pic,
            .genie .prfl-pic .field {
              height: 90px;
              width: 90px;
            }
            .genie .prfl-pic img {
              min-height: 90px;
              min-width: 90px;
              max-height: 90px;
              max-width: 90px;
              z-index: 1;
            }
            .genie .name {
              font-family: "Montserrat";
              font-weight: 700;
              letter-spacing: 2px;
              text-transform: uppercase;
              position: relative;
              padding-bottom: 14px;
              max-width: 321px;
            }
            .genie .name:before {
              content: "";
              border-bottom: 4px solid #2D806F;
              position: absolute;
              left: 0;
              bottom: 0;
              width: 41px;
            }
            .genie .resume-title {
              font-family: "Montserrat";
              font-weight: 400;
              letter-spacing: 1px;
              text-transform: uppercase;
              position: relative;
              padding-top: 10px;
              max-width: 321px;
            }
    
            /*parent-container*/
            .genie .parent-container {
              padding-bottom: 50px;
            }
            .genie .parent-container .left-box .section {
              padding-right: 20px;
            }
            .genie .parent-container .right-box {
              border-left: 1px solid #000;
              vertical-align: top;
            }
            .genie .parent-container .right-box .section {
              padding-left: 20px;
            }
            .genie .parent-container .right-box .section:first-child {
              padding-top: 0;
            }
    
            /* Address and ALNK */
            .genie .cntc-sec {
              padding-top: 25px !important;
              padding-bottom: 25px;
            }
            .genie .cntc-sec > * {
              position: relative;
            }
            .genie .address {
              padding-top: 5px;
              max-width: 150px;
            }
    
            .genie .cntc-sec:before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0.12;
              background: #2D806F;
              height: 100%;
              width: 100%;
            }
            .genie .cntc-sec {
              margin-left: -25px;
              padding-left: 25px;
            }
    
            /*SVG Icon Style*/
            .genie .cntc-sec .icon-row {
              clear: both;
              display: block;
              padding: 5px 0 0;
            }
            .genie .address:first-child,
            .genie .icon-row:first-child {
              padding: 0;
            }
            .genie .icon-row .iconSvg {
              width: 10px;
              height: 10px;
              float: left;
              margin-top: 1px;
            }
            .genie .icon-row path {
              fill: #000;
            }
            .genie .summ-sec .singlecolumn {
              margin-left: 0 !important;
            }
            .genie .social a {
              color: #0000ee;
              text-decoration: underline;
            }
            .genie .social a:hover {
              text-decoration: underline;
            }
    
            .genie .right-box .skill {
              display: table;
              width: 100%;
              table-layout: fixed;
            }
            .genie .right-box .skill .paddedline {
              display: table-cell;
              width: 50%;
            }
            .genie .right-box .skill .paddedline:last-child {
              padding-left: 10px;
            }
    
            /*New logic for infographic*/
            .genie .lang-sec .singlecolumn,
            .genie .skli-sec .singlecolumn {
              display: none;
            }
            .genie .lang-sec.infobarsec .infobarpara,
            .genie .skli-sec.infobarsec .infobarpara,
            .genie .lang-sec.infotilesec .infotilepara,
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
            .genie .lang-sec.infobarsec > .paragraph:nth-last-child(1),
            .genie .right-box .lang-sec.infobarsec > .paragraph:nth-last-child(2),
            .genie .right-box .skli-sec.infobarsec > .paragraph:nth-last-child(1),
            .genie .right-box .skli-sec.infobarsec > .paragraph:nth-last-child(2) {
              padding-bottom: 0 !important;
            }
            .genie .lang-sec.infobarsec .nativeLangPara {
              width: 100% !important;
            }
            .genie .right-box .lang-sec.infobarsec .inner-rating,
            .genie .skli-sec.infobarsec .inner-rating {
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
              background-color: #2D806F;
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
    
            /*Infographic Tiles*/
            .genie .lang-sec.infotilesec .paragraph,
            .genie .skli-sec .paragraph {
              font-size: 0;
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
            .genie .skli-sec .field *,
            .genie .lang-sec.infotilesec .nativeLangPara .field {
              display: inline;
            }
            .genie .lang-sec.infotilesec .singlecolumn,
            .genie .skli-sec .singlecolumn {
              margin-left: 0 !important;
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
    
            /*HILT multi para*/
            .genie .multi-para-opt li {
              padding-bottom: 0;
              margin-top: 3px;
            }
            .genie .multi-section-hilt .multi-para-opt,
            .genie
              .section:not(.multi-para-hilt):not(.multi-section-hilt)
              .multi-para-opt,
            .genie .multi-para-hilt .skill {
              display: none;
            }
            .genie .multi-para-hilt:after {
              content: "";
              display: block;
              clear: both;
              visibility: hidden;
              line-height: 0;
              height: 0;
            } /*Clearfix*/
            .genie .right-box .multi-para-hilt .paragraph {
              display: block;
              float: left;
              clear: none;
              margin-top: 0px;
              margin-right: 2%;
            }
            .genie .right-box .multi-para-hilt .paragraph:nth-child(2n + 1) {
              margin-right: 0;
              float: left;
            }
            .genie .right-box .multi-para-hilt .paragraph:nth-child(2n) {
              clear: left;
            }
            .genie .right-box .multi-para-hilt .paragraph:last-child,
            .genie
              .right-box
              .multi-para-hilt
              .paragraph:nth-last-child(2):nth-child(2n) {
              margin-bottom: 0;
            }
            .genie .right-box .multi-para-hilt .singlecolumn {
              margin-left: 0 !important;
              padding-left: 0;
            }
            .genie .right-box .multi-para-hilt .paragraph {
              margin-top: 0;
            }
            .genie .right-box .multi-para-hilt .paragraph:nth-child(n + 4) {
              margin-top: 15px;
            }
            .genie .right-box .multi-para-hilt .paragraph {
              width: 49%;
              max-width: 49%;
            }
    
            /*Rectangular Rating Blocks*/
            .genie .sliced-rect .sliced-rect-tile.ratvfill {
              background-color: #2D806F;
            }
            .genie .hide-bar .rating-bar,
            .genie .hide-bar .sliced-rect,
            .genie .hide-only-bar .rating-bar,
            .genie .hide-colon .colon,
            .genie.MPR .hide-bar .field-ratt {
              display: none !important;
            }
    
            .genie .right-box .lang-sec.infotilesec .paragraph.firstparagraph,
            .genie
              .right-box
              .lang-sec.infotilesec
              .paragraph.firstparagraph
              + .paragraph,
            .genie .right-box .skli-sec .paragraph.firstparagraph,
            .genie .right-box .skli-sec .paragraph.firstparagraph + .paragraph {
              margin-top: 0 !important;
            }
            .genie .left-box .lang-sec.infobarsec .paragraph {
              max-width: 100% !important;
            }
            .genie .left-box .lang-sec.infobarsec .paragraph {
              margin-top: 0;
            }
    
            /*Address order code*/
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
    
            /*Disclaimer*/
            .genie .parent-container .disclaim {
              padding-top: 50px !important;
            }
            .genie .disclaim .singlecolumn {
              font-size: 9px !important;
              color: #8a8a8a !important;
            }
    
            /*ALNK word-wrap links*/
            .genie .alnk-sec .field {
              word-break: break-all;
            }
    
            .genie .displayNoneThisField {
              display: none;
            } /* Keep this class always at bottom */
    
            /*HILT multi para - For PDF*/
            .genie.for-pdf .right-box .multi-para-hilt {
              clear: both;
            }
            .genie.for-pdf .right-box .multi-para-hilt .pdfparawrapper {
              display: block;
              width: 100%;
            }
            .genie.for-pdf .right-box .multi-para-hilt .pdfparawrapper .paragraph {
              clear: none;
            }
            .genie.for-pdf .right-box .multi-para-hilt .pdfparawrapper:after {
              content: "&#160;";
              clear: both;
              display: table;
              height: 1px;
              line-height: 1px;
            }
            .genie.for-pdf
              .right-box
              .multi-para-hilt
              .pdfparawrapper
              .paragraph:first-child {
              float: left;
              margin-left: 0;
            }
            .genie.for-pdf
              .right-box
              .multi-para-hilt
              .pdfparawrapper
              .paragraph:nth-child(2) {
              float: right;
              margin-left: 2%;
              margin-right: 0 !important;
            }
            .genie.for-pdf .right-box .multi-para-hilt .pdfparawrapper .paragraph {
              margin-bottom: 10px;
            }
            .genie.for-pdf
              .multi-para-hilt
              .pdfparawrapper:last-child
              .paragraph:last-child,
            .genie.for-pdf
              .right-box
              .multi-para-hilt
              .pdfparawrapper:last-child
              .paragraph {
              margin-bottom: 0;
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
            .genie .left-box {
              width: 170px;
              max-width: 170px;
            }
            .genie .section ul li:before {
              top: 4px;
            }
            .genie .cntc-sec:before {
              background: #2D806F;
            }
            .genie .section {
              padding-top: 30px;
            }
            .genie .paragraph {
              margin-top: 20px;
            }
            .genie .right-box .singlecolumn,
            .genie .right-box .maincolumn {
              margin-left: 0px;
            }
            .genie table.skills td {
              padding-top: 7px;
            }
            .genie .name {
              font-size: 22px;
              line-height: 26px;
            }
            .genie .address2 {
              font-size: 10px;
            }
            .genie .heading {
              font-size: 12px;
              line-height: 15px;
            }
            .genie .parent-container .right-box {
              border-width: 1px;
            }
            .genie .exp-txtsize {
              font-size: 12px;
            }
            .genie .name:before,
            .genie:before {
              border-color: #2D806F;
            }
    
            /*Infographic*/
            .genie .right-box .lang-sec.infobarsec .paragraph,
            .genie .right-box .skli-sec.infobarsec .paragraph {
              width: 141px;
            }
            .genie .parent-container .right-box .lang-sec.infobarsec,
            .genie .parent-container .right-box .skli-sec.infobarsec {
              padding-left: 20px;
            }
            .genie .parent-container .right-box .lang-sec.infobarsec .heading,
            .genie parent-container .right-box .skli-sec.infobarsec .heading {
              margin-left: -0px;
            }
            .genie .lang-sec.infobarsec .inner-rating,
            .genie .skli-sec.infobarsec .inner-rating {
              background-color: #2D806F;
            }
            .genie .left-box .lang-sec.infobarsec .paragraph,
            .genie .left-box .skli-sec.infobarsec .paragraph {
              padding-bottom: 5px;
            }
            .genie .lang-sec.infobarsec .nativeLangPara,
            .genie .skli-sec.infobarsec .nativeLangPar {
              width: 303px;
              max-width: 303px;
            }
    
            /*Infographic Skills*/
            .genie .parent-container .right-box .lang-sec.infotilesec,
            .genie .parent-container .right-box .skli-sec {
              padding-left: 20px;
            }
            .genie .parent-container .right-box .lang-sec.infotilesec .heading,
            .genie .parent-container .right-box .skli-sec .heading {
              margin-left: -0px;
            }
            .genie .parent-container .right-box .lang-sec.infotilesec .paragraph,
            .genie .parent-container .right-box .skli-sec .paragraph {
              width: 141px;
            }
            .genie .left-box .lang-sec.infotilesec .paragraph,
            .genie .left-box .skli-sec .paragraph {
              padding-bottom: 5px;
            }
            .genie .right-box .lang-sec.infotilesec .nativeLangPara {
              width: 303px !important;
              max-width: 303px;
            }
    
            /*HILT multi para*/
            .genie .right-box .multi-para-hilt {
              margin-left: 0px;
            }
            .genie .right-box .multi-para-hilt .heading {
              margin-left: -0px;
            }
    
            /*Fixes for builer*/
            .genie .parent-container .right-box .sortable-item:first-child .section {
              padding-top: 0 !important;
            }
            .genie .left-box > .sortable-item:first-child.active .cntc-sec {
              padding-bottom: 10px;
            }
            .genie .left-box > .sortable-item:first-child.active .cntc-sec:before {
              height: calc(100% - 25px);
            }
            .genie .left-box .skli-sec .sortableInner .sortable-item .paragraph,
            .genie
              .left-box
              .lang-sec
              .sortableInner
              .sortable-item
              + .sortable-item
              .paragraph,
            .genie .left-box .lang-sec .sortableInner .sortable-item .paragraph {
              max-width: 100%;
              display: block;
              margin-right: 0;
            }
            .genie .lang-sec .sortable-item .para_odd {
              margin-right: 15px;
            }
            .genie.sortable-drag-item {
              padding: 0;
            }
    
            /* Dynamic Fixes for builer*/
            .page-finalize .genie .lang-sec .para_odd,
            .page-finalize .genie .lang-sec .para_even {
              max-width: 141px;
            }
            .genie
              .parent-container
              .lang-sec
              .sortable-item
              + .sortable-item
              .paragraph {
              max-width: 141px;
            }
    
            /*.page-finalize .genie .right-box .data-LNGG .paragraph-container,.page-finalize .genie .dropable-container .lang-sec .sortableInner .sortable-item{display:inline-block}*/
            .page-finalize .genie .right-box .paragraph-container:first-child {
              padding-left: 0 !important;
            }
            .page-finalize .genie .parent-container {
              display: table;
              table-layout: fixed;
              width: calc(100% - 50px);
            }
            .page-finalize .genie.sortable-drag-item:before {
              display: none;
            }
            .page-finalize .genie.sortable-drag-item ul li:before {
              content: "";
              height: 5px;
              width: 5px;
              background: #000;
              border-radius: 50%;
              position: absolute;
              left: 0;
              top: 4px;
              transform: scale(0.5);
            }
            .page-finalize
              .genie
              .right-box.dropable-container
              .lang-sec
              .sortableInner
              .sortable-item {
              display: inline-block;
            }
            .page-finalize .genie .right-box .lang-sec .sortable-item {
              display: inline;
            }
            .page-final .genie .left-box .section.SECTION_EDUC {
              padding-bottom: 0;
            }
            .genie .lang-sec .sortable-item .rating-bar,
            .genie .lang-sec .sortable-item .field {
              max-width: 141px;
            }
            .genie .right-box .sortable-item .lang-sec .paragraph.para_odd,
            .genie .right-box .sortable-item .skli-sec .paragraph.para_odd {
              margin-right: 15px;
            }
            .genie .SECTION_SKLI .sortableInner .sortable-item {
              display: inline-block;
            }
            .genie .SECTION_SKLI .sortableInner .sortable-item .para_odd {
              margin-right: 15px;
            }
    
            /*Rectangular Rating Blocks*/
            .genie .paragraph .sliced-rect .sliced-rect-tile.ratvfill {
              background-color: #2D806F;
            }
      </style>
      <title></title>
    </head>
    <body>
      <section class="page-wrap">
        <div id="document" class="document doc-root fontsize fontface vmargins hmargins pagesize genie EJS7 docskinwidth=">
          <div id="CONTAINER_PARENT_0" class="top-section">
            <div id="CONTAINER_0" class="left-box"></div>
            <div id="CONTAINER_1" class="right-box">
              <div data-react-beautiful-dnd-draggable="226" class="sortable-item section-container SortableItem-sibling data-NAME">
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
            </div>
          </div>
          <div id="CONTAINER_PARENT_1" class="parent-container">
            <div id="CONTAINER_2" class="left-box">
              <div data-react-beautiful-dnd-draggable="227" class="sortable-item section-container SortableItem-sibling data-CNTC">
                <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                <div id="SECTION_CNTC2f838e9f-8d2a-4bc1-b1cd-998c15e31266" class="section cntc-sec notdraggable SECTION_CNTC has-title" data-section-cd="CNTC">
                  <div class="doc-item">
                    <div class="heading">
                      <div class="sectiontitle" id="SECTIONNAME_CNTC">
                        Contact
                      </div>
                    </div>
                    <div class="">
                      <div class="">
                        <div id="PARAGRAPH_CNTC_379be96f-a033-c17d-b4e4-d348b79faafc" class="paragraph PARAGRAPH_CNTC firstparagraph placeholder-text">
                          <div class="clearfix doc-item">
                            <div class="address">
                              <div class="icon-row" dependency="ADDR|STRT|CITY|STAT|ZIPC">
                                <div class="zipsuffix">
                                  <span class="field" id="FIELD_STRT"></span> <span class="field" id="FIELD_CITY">${
                                    personDetail.city
                                  }</span><span dependency="CITY+STAT">,</span> <span class="field" id="FIELD_STAT">${
    personDetail.country
  }</span>
                                </div><span class="field" id="FIELD_ADDR"></span>
                              </div>
                              <div class="icon-row" dependency="HPHN|CPHN">
                                <div class="icoTxt">
                                  <span class="xslt_static_change txt-bold">Mobile</span><span class="txt-bold">:</span> <span class="field" id="FIELD_HPHN">${
                                    personDetail.phone
                                  }</span> <span class="field" id="FIELD_CPHN"></span>
                                </div>
                              </div>
                              <div class="icon-row" dependency="EMAI">
                                <div class="icoTxt">
                                  <span class="field" id="FIELD_EMAI">${
                                    personDetail.email
                                  }</span>
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
              <div data-react-beautiful-dnd-draggable="227" class="sortable-item section-container SortableItem-sibling data-EDUC">
                <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                <div id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac" class="section education SECTION_EDUC noparagraph multi-para has-title" data-section-cd="EDUC">
                  <div class="doc-item">
                    <div class="heading">
                      <div class="sectiontitle" id="SECTIONNAME_EDUC">
                        Education
                      </div>
                    </div>${renderEducation()} ${renderCertificate() ?? []} ${
    renderAwards() ?? []
  } ${renderReferences() ?? []}
                  </div>
                </div>
              </div>
            </div>
            <div id="CONTAINER_3" class="right-box">
              <div data-react-beautiful-dnd-draggable="227" class="sortable-item section-container SortableItem-sibling data-SUMM">
                <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                <div id="SECTION_SUMM4800037c-cd8f-4921-be95-3c3932c1a2a7" class="section summ-sec SECTION_SUMM noparagraph has-title" data-section-cd="SUMM">
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
              <div data-react-beautiful-dnd-draggable="227" class="sortable-item section-container SortableItem-sibling data-HILT">
                <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                <div id="SECTION_HILTa5cb1850-6271-45e8-86ba-3d92fbc82062" class="section SECTION_HILT noparagraph has-title" data-section-cd="HILT">
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
                              <div class="skill">
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
                              <div class="skill">
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
              <div data-react-beautiful-dnd-draggable="227" class="sortable-item section-container SortableItem-sibling data-EXPR">
                <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                <div id="SECTION_EXPR323074c2-b189-4f8d-8af7-fc51cdc40434" class="section SECTION_EXPR noparagraph multi-para has-title" data-section-cd="EXPR">
                  <div class="doc-item">
                    <div class="heading">
                      <div class="sectiontitle" id="SECTIONNAME_EXPR">
                        Work History
                      </div>
                    </div>${renderExperience()}
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
