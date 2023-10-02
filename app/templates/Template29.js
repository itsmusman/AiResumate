export function template29(resume) {
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
          <div class="">
            <div class="">
            ${certificates
              .map(
                (element) =>
                  `<div class="single-column">
           <span class="padded-line"
             ><span class="degree"></span><span class="companyname">${
               element.certificate
             }</span></span
           ><span> </span><span class="padded-line txtItalics"
             ><span
               class="companyname"
              
               >${element.institute}</span
             ><span> - </span>
             <span class="companyname">${element.Year}${cleanMonth(
                    element.fromMonth
                  )}</span
             ><span> </span
             ><span class="job-location jobstate"></span></span
           ><span class="padded-line"><span class="field"></span></span>
           </div>`
              )
              .join("")}
              </div>
              </div>
            </div>
            </div> `;
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
          <div class="">
            <div class="">
            ${awards
              .map(
                (element) =>
                  `<div class="single-column">
           <span class="padded-line"
             ><span class="degree"></span><span class="companyname">${element.awards}</span></span
           ><span> </span><span class="padded-line txtItalics"
             ><span
               class="companyname"
           
               >${element.institute}</span
             ><span> - </span>
             <span class="companyname">${element.Year}</span
             ><span> </span
             ><span class="job-location jobstate"></span></span
           ><span class="padded-line"><span class="field"></span></span>
           </div>`
              )
              .join("")}
              </div>
              </div>
            </div>
            </div> `;
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
          <div class="">
            <div class="">
            ${references
              .map(
                (element) =>
                  `<div class="single-column">
           <span class="padded-line"
             ><span class="degree">
             </span>
             <span class="companyname">${element.reference} - (${element.institute})</span>
             </span
           >
             
           </div>`
              )
              .join("")}
              </div>
              </div>
            </div>
            </div> `;
    }
    return referencesHtml;
  }

  function renderSkills() {
    let skillsHtml = "";
    if (skills && skills.length > 0) {
      skillsHtml = `
       
      <div class="heading">
       <div class="sectiontitle" id="SECTIONNAME_SUMM">
        Skills<span
          title=" Professional Summary "
          class="rename-section text-rename"
        ></span>
        </div>
      </div>
      <div class="">
      <div
        id="PARAGRAPH_SUMM_0"
        class="paragraph PARAGRAPH_SUMM firstparagraph placeholder-text"
      >
        <div class="clearfix doc-item">
          <div class="singlecolumn" id="FIELD_FRFM">
          
          ${skills.map((element) => `<span>${element.name}</span>`).join(", ")}
          </div>
        </div>
      </div>
    </div>
      `;
    }
    return skillsHtml;
  }

  function renderHobbies() {
    let hobbyHtml = "";
    if (hobbies && hobbies.length > 0) {
      hobbyHtml = `
      <div class="heading">
       <div class="sectiontitle" id="SECTIONNAME_SUMM">
        Hobbies<span
          title="Hobbies "
          class="rename-section text-rename"
        ></span>
        </div>
      </div>
      <div class="">
      <div
        id="PARAGRAPH_SUMM_0"
        class="paragraph PARAGRAPH_SUMM firstparagraph placeholder-text"
      >
        <div class="clearfix doc-item">
          <div class="singlecolumn" id="FIELD_FRFM">
          
          ${hobbies.map((element) => `<span>${element.name}</span>`).join(", ")}
          </div>
        </div>
      </div>
    </div>
      `;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";

    if (experience.length > 0) {
      result += `
      <div
      id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac"
      class="section SECTION_EDUC noparagraph multi-para has-title"
      data-section-cd="EDUC"
     >
      
      <div class="heading">
                    <div class="sectiontitle" id="SECTIONNAME_EXPR">
                      Work History<span title=" Work History " class="rename-section text-rename"></span>
                    </div>
                  </div>`;
    }

    experience.forEach((element) => {
      result += `<div id="PARAGRAPH_EXPR_0" class="paragraph PARAGRAPH_EXPR firstparagraph placeholder-text">
                    <div class="clearfix doc-item">
                      <div class="singlecolumn">
                        <span class="dispBlk" dependency="JTIT|JSTD|EDDT">
                          <span class="txt-bold txtCaps" id="FIELD_JTIT">${
                            element.position
                          }</span>
                          <span>  </span>
                          <span dependency="JSTD|EDDT">
                            <span class="companyname">${
                              element.fromYear
                            }${cleanMonth(element.fromMonth)}</span>
                            <span class="companyname">${
                              element.toYear
                            }${cleanMonth(element.toMonth)}</span>
                          </span>
                        </span>
                        <span class="dispBlk" dependency="COMP|JCIT|JSTA|JCNT|JLOC">
                          <span class="txt-bold" id="FIELD_COMP">${
                            element.company
                          }</span>
                          <span dependency="COMP">
                            <span dependency="JCIT|JSTA|JCNT|JLOC">,</span>
                          </span>
                          <span class="companyname">${
                            element?.city ?? []
                          }</span>
                          <span id="FIELD_JSTA"></span>
                          <span id="FIELD_JLOC"></span>
                        </span>
                        <span id="FIELD_JDES">
                          <ul>`;

      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<li class="companyname">${role}</li>`;
      });

      result += `${roles}</ul></span>
                      </div>
                    </div>
                  </div>
                  </div>
                  <br/>`;
    });

    return result;
  }

  function renderEducation() {
    var result = "";

    if (education.length > 0) {
      result += `
      
      <div
                  id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac"
                  class="section SECTION_EDUC noparagraph multi-para has-title"
                  data-section-cd="EDUC"
                 >
      <div class="heading">
                    <div class="sectiontitle" id="SECTIONNAME_EDUC">
                      Education<span title=" Education " class="rename-section text-rename"></span>
                    </div>
                  </div>`;
    }

    education.forEach((element) => {
      result += `<div id="PARAGRAPH_EDUC_0" class="paragraph PARAGRAPH_EDUC firstparagraph placeholder-text">
                    <div class="clearfix doc-item">
                      <div class="singlecolumn">
                        <span class="dispBlk" dependency="SCHO|SCIT|SSTA|SCNT">
                          <span class="txt-bold companyname">${
                            element.university
                          }</span>
                          <span dependency="SCHO"></span>
                          <span dependency="SCIT+SSTA|SCNT">, </span>
                          <span id="FIELD_SSTA" class="companyname">${
                            element.city ?? []
                          }</span>
                          <span id="FIELD_SCNT"></span>
                        </span>
                        <span class="dispBlk" dependency="DGRE|STUY|GRYR|GRST|GRED|GRIP">
                          <span class="txt-bold companyname" id="FIELD_DGRE">${
                            element.degree
                          }</span>
                          <span dependency="DGRE">
                            <span dependency="STUY">, </span>
                          </span>
                          <span id="FIELD_STUY"></span>
                          <span id="FIELD_GRHN"></span>
                          <span dependency="DGRE|STUY|GRHN"></span>
                          <span class="xslt_static_change displayNoneThisField">Expected in </span>
                          <span class="companyname">${
                            element?.fromYear ?? []
                          }</span> <span> - </span>
                          <span class="companyname">${
                            element?.toYear ?? []
                          }</span>
                        </span>
                        <span id="FIELD_FRFM"></span>
                      </div>
                    </div>
                  </div>
                  </div>

                  <br/>`;
    });

    return result;
  }

  return `<html>
    <head>
      <style>

      @page {
        margin: 0px;
      }

        body {
          margin: auto;
        }
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600");
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700");
  
        body {
          background: #fff;
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
          margin: 0;
        }
        .genie ul li:before {
          content: "";
          font-size: 0.6em;
          position: absolute;
          left: -7px;
          top: 0;
        }
  
        /*Address*/
        .genie .address ul {
          margin: 0;
        }
        .genie .address li {
          display: inline-block;
          padding: 0 15px;
          margin: 0;
        }
        .genie .address li:before {
          left: -4px;
        }
        .genie .address li:first-child:before {
          content: "";
        }
        .genie ul li:first-child {
          margin-top: 0px;
        }
        /*END content disc style for LI*/
  
        /*Helping Classes*/
        .genie .txt-bold {
          font-weight: bold;
          font-size: 12px;
          
        }
        .genie .txtCaps {
          text-transform: uppercase;
        }
        .genie .dispBlk {
          display: block;
        }
        .genie .dispInBlk {
          display: inline-block;
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
  
        /*Document*/
        .genie {
          color: #020303;
          word-wrap: break-word;
          min-height: 792px;
        }
        .genie .topSection {
          border-bottom: 1px solid #186622;
          position: relative;
        }
        .genie .topSection:before {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          position: absolute;
          background: #186622;
          opacity: 0.2;
        }
        .genie .parentContainer {
          display: table;
          table-layout: fixed;
          width: 100%;
        }
        .genie .nameSec {
          border-top: none !important;
        }
        .genie .name {
          font-family: "Montserrat";
          letter-spacing: 2px;
          color: #000;
          text-transform: uppercase;
          padding-top: 25px;
        }
        .genie .resumeTitle {
          margin-top: 5px;
          letter-spacing: 0.5px;
          color: #000;
        }
  
        .genie .cntcSec {
          position: relative;
          color: #000;
          text-align: center;
          padding: 12px 0;
        }
        .genie .parentContainer .nameSec + .section {
          margin-top: 35px !important;
        }
        .genie .parentContainer .section {
          border-top: 1px solid #186622;
          padding-top: 8px;
          clear: both;
          position: relative;
        }
        .genie .section:not(.nameSec):not(.cntcSec):before {
          content: "";
          height: 5px;
          width: 110px;
          position: absolute;
          left: 0;
          top: -6px;
          background: #186622;
          opacity: 0.2;
        }
        .genie .parentContainer .section:after {
          display: table;
          content: "";
          clear: both;
        }
        .genie .parentContainer .nameSec {
          padding-top: 0 !important;
          margin-top: 0 !important;
        }
        .genie .heading {
          float: left;
          left: 0;
          position: relative;
        }
        .genie .sectiontitle {
          font-family: "Montserrat";
          font-weight: bold;
          text-transform: uppercase;
          color: #000;
          padding-right: 5px;
        }
        .genie .firstparagraph {
          margin-top: 0 !important;
        }
        .genie .exprSec ul {
          margin-top: 5px;
        }
        .genie .accomplishment,
        .genie .skill {
          display: table;
          width: 100%;
          table-layout: fixed;
        }
        .genie .accomplishment .paddedline {
          display: table-cell;
          width: 30%;
          padding-right: 22px;
        }
        .genie .skill .paddedline {
          display: table-cell;
          width: 30%;
          padding-right: 19px;
        }
        .genie .skill .paddedline:last-child,
        .genie .accomplishment .paddedline:last-child {
          padding-right: 0;
        }
        .genie .sprtr {
          padding: 0px 10px;
          color: #186622;
          font-weight: bold;
        }
        .genie .sprtr + .sprtr {
          display: none;
        }
        .genie .social-lnk:last-child .sprtr {
          display: none;
        }
        .genie .social-lnk a {
          color: #0000ee;
          text-decoration: underline;
        }
        .genie .social-lnk a:hover {
          text-decoration: underline;
        }
  
        /*PPDT*/
        .genie .parentContainer .section.disclaim {
          border: none;
          margin: 0;
        }
        .genie .parentContainer .section.disclaim::before {
          display: none;
        }
        .genie .parentContainer .section.disclaim .singlecolumn {
          margin-left: 0;
        }
        .genie .parentContainer .disclaim .field.singlecolumn,
        .genie .parentContainer .disclaim .field.singlecolumn li,
        .genie .parentContainer .disclaim .field.singlecolumn p,
        .genie .parentContainer .disclaim .field.singlecolumn span {
          font-size: 9px;
          color: #8a8a8a;
        }
  
        /*MES and MFR address order code*/
        .genie .zipprefix,
        .genie.MES .zipsuffix,
        .genie.MFR .zipsuffix {
          display: none !important;
        }
        .genie .zipsuffix,
        .genie.MES .zipprefix,
        .genie.MFR .zipprefix {
          display: inline-block !important;
        }
  
        /*Builder fixes*/
        .genie
          .parentContainer
          .sortable-item:first-child
          + .sortable-item
          .section {
          margin-top: 35px;
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
        .genie .skli-sec.infobarsec .field *,
        .genie .skli-sec.infobarsec .nativeLangPara .field {
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
        .genie .skli-sec.infobarsec .singlecolumn {
          margin-left: 0 !important;
          padding-left: 0;
          position: relative;
        }
        .genie .lang-sec.infobarsec .para_odd,
        .genie .skli-sec .para_odd {
          margin-right: 15px;
        }
        .genie .lang-sec.infobarsec .paragraph.nativeLangPara {
          width: 100%;
          max-width: 100%;
        }
        .genie .lang-sec.infobarsec .inner-rating,
        .genie .skli-sec.infobarsec .inner-rating {
          position: relative;
        }
        .genie .lang-sec.infobarsec .rating-bar,
        .genie .skli-sec.infobarsec .rating-bar {
          background: #d5d6d6;
          width: 100%;
          clear: both;
          margin-top: 3px;
          overflow: hidden;
        }
        .genie .lang-sec.infobarsec .inner-rating,
        .genie .skli-sec.infobarsec .inner-rating {
          background-color: #0c6ba1;
          height: 4px;
          width: 60%;
        }
        .genie .lang-sec.infobarsec > .paragraph:nth-last-child(1),
        .genie .lang-sec.infobarsec > .paragraph:nth-last-child(2),
        .genie .skli-sec.infobarsec > .paragraph:nth-last-child(1),
        .genie .skli-sec.infobarsec > .paragraph:nth-last-child(2) {
          padding-bottom: 0 !important;
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
          padding-bottom: 5px !important;
          margin-top: 0;
        }
        .genie .lang-sec.infotilesec > .paragraph:nth-last-child(1),
        .genie .lang-sec.infotilesec > .paragraph:nth-last-child(2),
        .genie .skli-sec > .paragraph:nth-last-child(1),
        .genie .skli-sec > .paragraph:nth-last-child(2) {
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
        .genie .lang-sec.infotilesec .paragraph.para_odd,
        .genie .skli-sec .paragraph.para_odd {
          margin-right: 15px;
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
        .genie .lang-sec.infotilesec .paragraph.nativeLangPara {
          width: 100% !important;
          max-width: 100% !important;
        }
  
        /*Rectangular Rating Blocks*/
        .genie .sliced-rect .sliced-rect-tile.ratvfill {
          background-color: #404041;
        }
        .genie .hide-bar .rating-bar,
        .genie .hide-only-bar .rating-bar,
        .genie .hide-bar .sliced-rect,
        .genie .hide-colon .colon {
          display: none !important;
        }
        .genie .hide-bar .field-ratt {
          display: none;
        }
  
        /*CSS for Sortable Fields POC*/
        .genie .fieldgroup-0 .dispInBlk:last-child .sprtr {
          display: none;
        }
  
        /*HILT multi para/section*/
        .genie .multi-para-hilt {
          position: relative;
          font-size: 0;
        }
        .genie .multi-para-hilt:after {
          content: "";
          display: block;
          clear: both;
          visibility: hidden;
          line-height: 0;
          height: 0;
        } /*Clearfix*/
        .genie .multi-para-hilt .paragraph {
          margin-top: 0;
          width: 31%;
          display: inline-block;
          vertical-align: top;
        }
        .genie .multi-para-hilt .paragraph:nth-child(n + 5) {
          margin-top: 15px;
        }
        .genie .multi-para-hilt .paragraph:nth-child(3n),
        .genie .multi-para-hilt .paragraph:nth-child(3n + 1) {
          margin-left: 2%;
        }
        .genie .multi-para-hilt .singlecolumn {
          width: 100% !important;
          margin-left: 0 !important;
        }
        .genie .multi-section-hilt .multi-para-opt,
        .genie
          .section:not(.multi-para-hilt):not(.multi-section-hilt)
          .multi-para-opt,
        .genie .multi-para-hilt .skill {
          display: none;
        }
  
        /*HILT multi para - For PDF*/
        .genie.for-pdf .multi-para-hilt {
          display: block;
        }
        .genie.for-pdf .multi-para-hilt .pdfparawrapper:after {
          content: "";
          clear: both;
          display: table;
        }
        .genie.for-pdf .multi-para-hilt .pdfparawrapper .paragraph:first-child {
          float: left;
          margin-left: 0;
        }
        .genie.for-pdf .multi-para-hilt .pdfparawrapper .paragraph:nth-child(2) {
          float: left;
          margin-left: 2%;
        }
        .genie.for-pdf .multi-para-hilt .pdfparawrapper .paragraph:nth-child(3) {
          float: right;
          margin-left: 2%;
        }
        .genie.for-pdf .multi-para-hilt .pdfparawrapper .paragraph {
          margin-bottom: 15px;
          margin-top: 0;
        }
        .genie.for-pdf .multi-para-hilt .pdfparawrapper .paragraph:nth-child(2n) {
          clear: none;
        }
        .genie.for-pdf .multi-para-hilt .pdfparawrapper:last-child .paragraph {
          margin-bottom: 0;
        }
        .genie {
          line-height: 14px;
        }
        .genie.pagesize {
          width: "100%";
        }
        .genie.fontsize,
        .genie .lang-sec.infobarsec .paragraph *,
        .genie .lang-sec.infotilesec .paragraph *,
        .genie .skli-sec .paragraph *,
        .genie .multi-para-hilt .paragraph * {
          font-size: 10px;
        }
        .genie.fontface {
          font-family: Open Sans;
        }
        .genie.vmargins {
          padding-bottom: 30px;
        }
        .genie.hmargins {
          padding-left: 30px;
          padding-right: 30px;
        }
        .genie .paragraph {
          margin-top: 15px;
        }
        .genie .topSection {
          border-color: #0c6ba1;
          margin-left: -30px;
          margin-right: -30px;
        }
        .genie .address {
          font-size: 10px;
          line-height: 12px;
        }
        .genie .cntcSec {
          margin-left: 30px;
          margin-right: 30px;
        }
        .genie .address span {
          max-width: 485px;
          font-size:15px
        }
        .genie .topSection:before {
          background: #0c6ba1;
        }
        .genie .cntcSec {
          padding-top: 30px;
        }
        .genie .sprtr {
          color: #0c6ba1;
        }
        .genie .parentContainer .section {
          margin-top: 35px;
          border-width: 1px;
          border-color: #0c6ba1;
        }
        .genie .name {
          font-size: 24px;
          line-height: 30px;
        }
        .genie .resumeTitle {
          font-size: 20px;
          line-height: 15px;
        }
        .genie .name,
        .genie .resumeTitle {
          margin-left: 115px;
        }
        .genie .sectiontitle {
          font-size: 10px;
          line-height: 11px;
        }
        .genie .section:not(.nameSec):not(.cntcSec):before {
          top: -6px;
          background: #0c6ba1;
          width: 115px;
        }
        .genie .parentContainer .singlecolumn,
        .genie .parentContainer .maincolumn {
          margin-left: 115px;
        }
        .genie .heading {
          width: 115px;
        }
        .companyname{
          font-size: 12px;
        }
  
      
      </style>
    </head>
    <body>
      <section class="page-wrap">
        <div
          class="document doc-root fontsize fontface vmargins hmargins pagesize genie EJS3 
          docskinwidth="535"
        >
          <div id="CONTAINER_PARENT_0" class="topSection">
            <div id="CONTAINER_0">
              <div
                data-react-beautiful-dnd-draggable="237"
                class="sortable-item section-container SortableItem-sibling data-CNTC"
              >
                <div
                  class="document-tool sec-tool"
                  id="editIcons"
                  style="right: -2px"
                ></div>
                <div
                  id="SECTION_CNTC2f838e9f-8d2a-4bc1-b1cd-998c15e31266"
                  class="section cntcSec notdraggable SECTION_CNTC"
                  data-section-cd="CNTC"
                >
                  <div class="doc-item">
                    <div class="">
                      <div class="">
                        <div
                          id="PARAGRAPH_CNTC_379be96f-a033-c17d-b4e4-d348b79faafc"
                          class="paragraph PARAGRAPH_CNTC firstparagraph placeholder-text"
                        >
                          <div class="clearfix doc-item">
                            <span class="address">
                              <span
                                class="zipsuffix"
                                dependency="STRT|CITY|STAT|ZIPC"
                              >
                                <span id="FIELD_STRT"></span
                                ><span id="FIELD_CITY">${
                                  personDetail.city
                                }</span
                                ><span dependency="CITY+STAT">, </span
                                ><span class="spaced" id="FIELD_STAT"
                                  >${personDetail.country}</span
                                >
                                <span id="FIELD_ZIPC"></span>
                              </span>
  
                              <span id="FIELD_ADDR"></span>
                              <span class="dispInBlk">
                                <span dependency="HPHN"
                                  ><span
                                    class="sprtr"
                                    dependency="ADDR|STRT|CITY|STAT|ZIPC"
                                    >|</span
                                  ></span
                                >
                                <span id="FIELD_HPHN">${
                                  personDetail.phone
                                }</span>
                              </span>
                              <span class="dispInBlk">
                                <span id="FIELD_CPHN"></span>
                              </span>
                              <span class="dispInBlk">
                                <span dependency="EMAI"
                                  ><span
                                    class="sprtr"
                                    dependency="ADDR|STRT|CITY|STAT|ZIPC|HPHN|CPHN"
                                    >|</span
                                  ></span
                                >
                                <span id="FIELD_EMAI">${
                                  personDetail.email
                                }</span>
                              </span>
                            </span>
                            <span
                              dependency="ADDR|STRT|CITY|STAT|ZIPC|HPHN|CPHN|EMAI"
                            ></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="CONTAINER_PARENT_1" class="parentContainer">
            <div id="CONTAINER_1">
              <div
                data-react-beautiful-dnd-draggable="238"
                class="sortable-item section-container SortableItem-sibling data-NAME"
              >
                <div
                  class="document-tool sec-tool"
                  id="editIcons"
                  style="right: -2px"
                ></div>
                <div
                  id="SECTION_NAME9a304921-ae93-4753-95a9-f45bda3f00f5"
                  class="section notdraggable nameSec SECTION_NAME firstsection"
                  data-section-cd="NAME"
                >
                  <div class="doc-item">
                    <div class="">
                      <div class="">
                        <div
                          id="PARAGRAPH_NAME_43670be1-6ffd-fc02-1730-adb1b38a82b1"
                          class="paragraph PARAGRAPH_NAME firstparagraph placeholder-text"
                        >
                          <div>
                            <div class="name">
                              <span id="FIELD_FNAM">${
                                personDetail.firstName
                              }</span>
                              <span id="FIELD_LNAM">${
                                personDetail.lastName
                              }</span>
                            </div>
                            <div class="resumeTitle" dependency="DCTL">
                              <span id="FIELD_DCTL" class="placeholder-text"
                                >${jobPosition}</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-react-beautiful-dnd-draggable="238"
                class="sortable-item section-container SortableItem-sibling data-SUMM"
               >
                <div
                  class="document-tool sec-tool"
                  id="editIcons"
                  style="right: -2px"
                ></div>
                <div
                  id="SECTION_SUMM4800037c-cd8f-4921-be95-3c3932c1a2a7"
                  class="section SECTION_SUMM noparagraph has-title"
                  data-section-cd="SUMM"
                  >
                  <div class="doc-item">
                    <div class="heading">
                      <div class="sectiontitle" id="SECTIONNAME_SUMM">
                        Professional Summary<span
                          title=" Professional Summary "
                          class="rename-section text-rename"
                        ></span>
                      </div>
                    </div>
                    <div class="">
                      <div class="">
                        <div
                          id="PARAGRAPH_SUMM_0"
                          class="paragraph PARAGRAPH_SUMM firstparagraph placeholder-text"
                        >
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
              

              <div
                data-react-beautiful-dnd-draggable="238"
                class="sortable-item section-container SortableItem-sibling data-SUMM"
               >
                <div
                  class="document-tool sec-tool"
                  id="editIcons"
                  style="right: -2px"
                ></div>
                <div
                  id="SECTION_SUMM4800037c-cd8f-4921-be95-3c3932c1a2a7"
                  class="section SECTION_SUMM noparagraph has-title"
                  data-section-cd="SUMM"
                  >
                  <div class="doc-item">
                    
                    <div class="">
                      ${renderSkills()}
                    </div>
                  </div>
                </div>
              </div>

              <div
              data-react-beautiful-dnd-draggable="238"
              class="sortable-item section-container SortableItem-sibling data-SUMM"
             >
              <div
                class="document-tool sec-tool"
                id="editIcons"
                style="right: -2px"
              ></div>
              <div
                id="SECTION_SUMM4800037c-cd8f-4921-be95-3c3932c1a2a7"
                class="section SECTION_SUMM noparagraph has-title"
                data-section-cd="SUMM"
                >
                <div class="doc-item">
                  
                  <div class="">
                    ${renderHobbies()}
                  </div>
                </div>
              </div>
            </div>
             
              <div
                data-react-beautiful-dnd-draggable="238"
                class="sortable-item section-container SortableItem-sibling data-EXPR"
              >
                <div
                  class="document-tool sec-tool"
                  id="editIcons"
                  style="right: -2px"
                ></div>
                
                  <div class="doc-item">
                    
                    <div class="">
                      <div class="sortableInner">
                        ${renderExperience()}
                        
                        <div
                          id="PARAGRAPH_EXPR_-2"
                          class="paragraph PARAGRAPH_EXPR placeholder-text"
                        >
                          <div class="clearfix doc-item">
                            <div class="singlecolumn">
                              <span id="FIELD_JDES"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
             
              </div>
              <div
                data-react-beautiful-dnd-draggable="238"
                class="sortable-item section-container SortableItem-sibling data-EDUC"
                     >
                <div
                  class="document-tool sec-tool"
                  id="editIcons"
                  style="right: -2px"
                ></div>
                
                  <div class="doc-item">
                    
                    <div class="">
                      <div class="">
                        ${renderEducation()}
                      </div>
                    </div>
                  </div>
                  
                

               
                
                ${renderCertificate() ?? []}
                ${renderAwards() ?? []}
                ${renderReferences() ?? []}

              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  </html>
  `;
}
