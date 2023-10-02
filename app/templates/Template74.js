export function template74(resume) {
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
  class="section education SECTION_EDUC noparagraph multi-para has-title"
  data-section-cd="EDUC"
  >
  <div class="doc-item">
    <div class="heading">
      <div class="sectiontitle" id="SECTIONNAME_EDUC">
        Certificate<span
          title=" Certificate "
          class="rename-section text-rename"
        ></span>
      </div>
    </div>
              ${certificates
                .map(
                  (element) =>
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
                         <span id="FIELD_GRYR" format="%m.%Y">${element.fromMonth}</span>
                         <span id="FIELD_GRYR" format="%m.%Y"> - </span>
                         <span id="FIELD_GRYR" format="%m.%Y">${element.Year}</span>
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
                         <span class="programline" id="FIELD_STUY"
                           >${element.certificate}</span
                         ><span dependency="STUY+SCHO">, </span
                         ><span class="companyname" id="FIELD_SCHO"
                           >${element.institute}</span
                         ><span dependency="DGRE|STUY|SCHO"
                           ></span>
                         <span id="FIELD_GRHN"></span>
                       </div>
                     </div>
             
                     <div class="field jobline" id="FIELD_FRFM"></div>
                   </div>
                 </div>
               </div>
             </div>
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
          class="section education SECTION_EDUC noparagraph multi-para has-title"
          data-section-cd="EDUC"
          >
          <div class="doc-item">
            <div class="heading">
              <div class="sectiontitle" id="SECTIONNAME_EDUC">
                Awards<span
                  title=" Awards "
                  class="rename-section text-rename"
                ></span>
              </div>
            </div>
                      ${awards
                        .map(
                          (element) =>
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
                                 
                                 <span id="FIELD_GRYR" format="%m.%Y">${element.Year}</span>
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
                                 <span class="programline" id="FIELD_STUY"
                                   >${element.awards}</span
                                 ><span dependency="STUY+SCHO">, </span
                                 ><span class="companyname" id="FIELD_SCHO"
                                   >${element.institute}</span
                                 ><span dependency="DGRE|STUY|SCHO"
                                   ></span>
                                 <span id="FIELD_GRHN"></span>
                               </div>
                             </div>
                     
                             <div class="field jobline" id="FIELD_FRFM"></div>
                           </div>
                         </div>
                       </div>
                     </div>
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
          class="section education SECTION_EDUC noparagraph multi-para has-title"
          data-section-cd="EDUC"
          >
          <div class="doc-item">
            <div class="heading">
              <div class="sectiontitle" id="SECTIONNAME_EDUC">
                Reference<span
                  title=" Reference "
                  class="rename-section text-rename"
                ></span>
              </div>
            </div>
                      ${references
                        .map(
                          (element) =>
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
                                 
                     
                                 <span id="FIELD_GRIP"></span>
                               </div>
                               <div>
                                 <span class="programline" id="FIELD_STUY"
                                   >${element.reference}</span
                                 ><span dependency="STUY+SCHO">, </span
                                 ><span class="companyname" id="FIELD_SCHO"
                                   >${element.institute}</span
                                 ><span dependency="DGRE|STUY|SCHO"
                                   ></span>
                                 <span id="FIELD_GRHN"></span>
                               </div>
                             </div>
                     
                             <div class="field jobline" id="FIELD_FRFM"></div>
                           </div>
                         </div>
                       </div>
                     </div>
                     </div>`
                        )
                        .join("")}
                        </div>
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
              margin: 0 0 0 0px;
              padding-left: 10px;
            }
            .genie ul li:before {
              content: "";
              font-size: 10px;
              position: absolute;
              left: 0;
              top: 0;
            }
            /*END content disc style for LI*/
    
            /*Helping classes*/
            .genie .txt-bold {
              font-weight: bold;
            }
            .genie .txt-itl {
              font-style: italic;
            }
            .genie .disp-block {
              display: block;
            }
            .genie .flt-right {
              float: right;
            }
    
            /*Document*/
            .genie {
              color: #504b48;
              line-height: 13px;
              word-wrap: break-word;
              min-height: 792px;
              position: relative;
            }
            .genie .name {
              color:  #2D806F;
              font-weight: bold;
              text-transform: capitalize;
              padding-bottom: 5px;
              position: relative;
            }
            .genie .address {
              color: #2a2a2a;
              display: table;
              table-layout: fixed;
              width: 100%;
            }
            .genie .resumeTitle {
              font-weight: bold;
              text-transform: capitalize;
              letter-spacing: 1px;
              padding-bottom: 7px;
            }
    
            /* common left-right container */
            .genie .name,
            .genie .address {
              display: table;
              table-layout: fixed;
              width: 100%;
            }
            .genie .section .heading {
              text-align: right;
              position: relative;
              float: left;
              padding-right: 20px;
              box-sizing: border-box;
              z-index: 1;
            }
            .genie .section > .heading {
              width: 141px;
            } /*Only for API*/
            .genie .parentContainer .education .firstparagraph:before {
              content: "";
              position: absolute;
              left: -2px;
              background:  #2D806F;
              border-radius: 50%;
              top: 19px;
              height: 6px;
              width: 6px;
              font-size: 21px;
              z-index: 1;
            }
            .genie .section .heading:before {
              content: "";
              position: absolute;
              right: -5px;
              top: 29px;
              background:  #2D806F;
              height: 8px;
              width: 8px;
              border-radius: 50%;
              z-index: 2;
            }
            .genie .name:before {
              content: "";
              position: absolute;
              left: -33px;
              top: 13px;
              background-color:  #2D806F;
              height: 8px;
              width: 8px;
              border-radius: 50%;
              z-index: 2;
            }
            .genie .parentContainer .paragraph {
              position: relative;
              min-height: 14px;
            } /*Margin-Left: 139px only for API*/
            .genie .parentContainer .paragraph:not(.firstparagraph):before,
            .genie .parentContainer .experience .firstparagraph:before {
              content: "";
              position: absolute;
              left: -2px;
              background:  #2D806F;
              border-radius: 50%;
              top: 19px;
              height: 6px;
              width: 6px;
              font-size: 21px;
              z-index: 1;
            }
            .genie .parentContainer .section:after {
              content: "";
              display: table;
              clear: both;
            }
            .genie
              .parentContainer
              .section:not(.lang-sec):not(.skli-sec)
              .section:last-child
              .paragraph:last-child {
              padding-bottom: 56px;
            }
            .genie .sectiontitle {
              color:  #2D806F;
              text-transform: capitalize;
              font-weight: bold;
            }
            .genie .experience .heading,
            .genie .education .heading {
              float: none;
              padding-bottom: 10px;
            }
            .genie .experience .firstparagraph {
              padding: 0;
            }
            .genie .paragraph .datewrapper {
              color: #6e6e6e;
              text-align: right;
              float: left;
            }
            .genie .experience .paragraph,
            .genie .education .paragraph {
              clear: both;
            }
            .genie .firstparagraph .sectiontitle {
              visibility: hidden;
            }
            .genie .firstparagraph ~ .paragraph .sectiontitle {
              display: none;
            }
            .genie .left-box {
              vertical-align: top;
              width: 174px;
            }
            .genie .left-box,
            .genie .right-box {
              box-sizing: border-box;
              position: relative;
              padding: 0px 25px;
              display: table-cell;
            }
            .genie .left-box .paragraph,
            .genie .right-box .paragraph {
              border: none;
            }
            .genie .left-box .firstparagraph,
            .genie .right-box .firstparagraph {
              padding-top: 30px;
            }
            .genie .left-box .firstparagraph {
              border: none;
            }
            .genie .singlecolumn .skill {
              display: table;
              width: 100%;
              table-layout: fixed;
            }
            .genie .singlecolumn .skill .paddedline1 {
              display: table-cell;
              width: 50%;
            }
            .genie .skill .paddedline:last-child {
              padding-left: 10px;
            }
            .genie .fielditem:empty {
              display: none;
            }
            /*Right box*/
            .genie .right-box > .section .firstparagraph {
              padding-top: 65px;
            }
            .genie .right-box .section:not(:first-child) .paragraph {
              padding-top: 5px;
            }
            .genie .right-box {
              padding-left: 0px;
              display: table-cell;
              vertical-align: top;
              width: calc(100% - 160px);
            }
    
            /*parentContainer*/
            .genie .parentContainer {
              padding: 0 35px 35px;
            }
            /*.genie .topsection:before,.genie .parentContainer:before{content:'';position:absolute;left:173px;top:0;height:100%;border-left:2px solid #dadada}*/
            .genie .jobline > ul {
              padding: 5px 0 0 0px;
            }
            .genie .parentContainer .experience .firstparagraph:before {
              top: 4px;
            }
            .genie .firstparagraph .datewrapper {
              top: 0;
            }
            .genie .jobtitle,
            .genie .multi-para-color {
              color: #2a2a2a;
            }
    
            /* PICT */
            .genie .PICTPic,
            .genie .PICTPic .field {
              width: 110px;
              text-align: right;
              height: 123px;
            }
            .genie .topsection .left-box {
              padding: 0px 28px 0px 35px;
              width: 177px;
            }
            .genie .PICTPic img {
              box-sizing: border-box;
              width: 100px;
              height: 123px;
              max-width: 100%;
              max-height: 100%;
            }
    
            /* SVG Icon Style */
            .genie .iconRow {
              clear: both;
              margin-bottom: 5px;
              display: table;
              table-layout: fixed;
              width: 100%;
            }
            .genie .iconRow:last-child {
              padding-bottom: 0;
            }
            .genie .iconSvg {
              width: 11px;
              height: 15px;
              display: table-cell;
              vertical-align: middle;
              text-align: center;
            }
            .genie .iconSvg svg {
              vertical-align: middle;
              overflow: visible;
            }
            .genie .icoTxt {
              display: table-cell;
              padding-left: 7px;
              vertical-align: middle;
            }
            .genie .social .field a {
              color: #0000ee;
              text-decoration: underline;
            }
            .genie .social .field a:hover {
              text-decoration: underline;
            }
    
            .genie .paragraph-fieldgroup .icoTxt {
              padding-left: 10px;
            }
            .genie .paragraph-fieldgroup .iconRow {
              margin-bottom: 13px;
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
    
            /*Infographic Bar*/
            .genie .lang-sec.infobarsec,
            .genie .skli-sec.infobarsec {
              font-size: 0;
            }
            .genie .lang-sec.infobarsec .field *,
            .genie .skli-sec.infobarsec .field *,
            .genie .lang-sec.infobarsec .nativeLangPara .field {
              display: inline;
            }
            .genie .lang-sec.infobarsec .para_odd,
            .genie .skli-sec.infobarsec .para_odd {
              margin-right: 15px;
            }
            .genie .lang-sec.infobarsec .paragraph,
            .genie .skli-sec.infobarsec .paragraph {
              display: inline-block;
              vertical-align: top;
              margin-top: 0;
              margin-left: 0;
              padding: 0;
              padding-top: 0;
              padding-bottom: 5px;
              border: none;
            }
            .genie .lang-sec.infobarsec .singlecolumn,
            .genie .skli-sec.infobarsec .singlecolumn {
              margin-left: 0;
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
            .genie .lang-sec.infobarsec .paragraph.nativeLangPara {
              width: 100%;
            }
            .genie .lang-sec.infobarsec .inner-rating,
            .genie .skli-sec.infobarsec .inner-rating {
              background-color: #000;
              height: 4px;
              width: 60%;
            }
            .genie .lang-sec.infobarsec > .paragraph:nth-last-child(1),
            .genie .lang-sec.infobarsec > .paragraph:nth-last-child(2),
            .genie .skli-sec.infobarsec > .paragraph:nth-last-child(1),
            .genie .skli-sec.infobarsec > .paragraph:nth-last-child(2) {
              padding-bottom: 0;
            }
            .genie .lang-sec.infobarsec .paragraph .singlecolumn,
            .genie .skli-sec.infobarsec .paragraph .singlecolumn {
              border: none;
              padding: 0;
            }
            .genie .lang-sec.infobarsec .paragraph:before,
            .genie .skli-sec.infobarsec .paragraph:before {
              display: none;
            }
    
            /*Infographic Tiles*/
            .genie .lang-sec.infotilesec,
            .genie .skli-sec {
              font-size: 0;
            }
            .genie .lang-sec.infotilesec .paragraph,
            .genie .parentContainer .skli-sec .paragraph {
              display: inline-block;
              vertical-align: top;
              padding-bottom: 5px !important;
              margin-top: 0;
              margin-left: 0;
              border: none;
              padding-left: 0;
              padding-top: 0;
            }
            .genie .lang-sec.infotilesec .paragraph:nth-last-child(1),
            .genie .lang-sec.infotilesec .paragraph:nth-last-child(2),
            .genie .skli-sec .paragraph:nth-last-child(1),
            .genie .skli-sec .paragraph:nth-last-child(2) {
              padding-bottom: 0;
            }
            .genie .lang-sec.infotilesec .nativeLangPara .field,
            .genie .lang-sec.infotilesec .field *,
            .genie .lang-sec.infotilesec .field *,
            .genie .skli-sec .field * {
              display: inline;
            }
            .genie .lang-sec.infotilesec .singlecolumn,
            .genie .skli-sec .singlecolumn {
              margin-left: 0;
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
            .genie .lang-sec.infotilesec .paragraph .singlecolumn,
            .genie .skli-sec .paragraph .singlecolumn {
              border: none;
            }
            .genie .lang-sec.infotilesec .paragraph:before,
            .genie .skli-sec .paragraph:before {
              display: none;
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
    
            /*Rectangular Rating Blocks*/
            .genie .sliced-rect .sliced-rect-tile.ratvfill {
              background-color: #576d7b;
            }
            .genie .hide-bar .paragraph .rating-bar,
            .genie .hide-only-bar .rating-bar,
            .genie .hide-bar .paragraph .sliced-rect,
            .genie .hide-colon .paragraph .colon,
            .genie .hide-bar .field-ratt {
              display: none;
            }
    
            /* MFR address order code */
            .genie .zipsuffix {
              display: table-cell;
            }
            .genie .zipprefix,
            .genie.MFR .zipsuffix,
            .genie.MES .zipsuffix {
              display: none;
            }
            .genie.MFR .zipprefix,
            .genie.MES .zipprefix {
              display: table-cell;
            }
    
            /* PPDT */
            .genie .section.disclaim .paragraph,
            .genie .section.sign .paragraph {
              padding: 0 35px 0 35px;
              border: none;
            }
            .genie .signContainerParent {
              padding-bottom: 20px;
            }
            .genie .section.disclaim,
            .genie .section.sign {
              background: white;
            }
            .genie .disclaim .field.singlecolumn,
            .genie .paragraph .signPic > .field_sign {
              margin-left: 0;
            }
            .genie .disclaim .field.singlecolumn,
            .genie .disclaim .field.singlecolumn li,
            .genie .disclaim .field.singlecolumn p,
            .genie .disclaim .field.singlecolumn span {
              font-size: 9px;
              color: #8a8a8a;
            }
            .genie .disclaim .heading:before {
              display: none;
            }
            .genie .section {
              position: relative;
            }
            .genie .paragraph .field_sign {
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
            .genie .signPic img {
              max-width: 100%;
            }
    
            /*Social Icons*/
            .genie .svg-circlebdr,
            .genie .svg-inricon {
              fill: #6e6e6e;
            }
            .genie .svg-circlebdr {
              stroke: #6e6e6e;
            }
            /* GRYR */
            .genie .displayNoneThisField {
              display: none;
            } /* Keep this class always at bottom */
    
            /*For Extra Space Before Colon*/
            .genie .beforecolonspace {
              display: none !important;
            }
            .genie.MFR .beforecolonspace {
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
            .genie .multi-para-hilt .paragraph {
              margin-bottom: 15px;
              margin-top: 0;
              width: 49%;
              float: left;
            }
            .genie .multi-para-hilt .paragraph:last-child,
            .genie .multi-para-hilt .paragraph:nth-last-child(2):nth-child(2n) {
              margin-bottom: 0;
            }
            .genie .multi-para-hilt .paragraph:nth-child(2n + 1) {
              margin-left: 2%;
            }
            .genie .multi-para-hilt .paragraph:nth-child(2n) {
              clear: left;
            }
            .genie .multi-para-hilt .paragraph:nth-child(2n) {
              padding-right: 2%;
            }
            .genie .parentContainer .multi-para-hilt .paragraph {
              margin-left: 0;
              padding-left: 0;
              padding-top: 0 !important;
            }
            .genie .multi-para-hilt .maincolumn {
              margin-left: 0;
            }
            .genie .multi-section-hilt .multi-para-opt,
            .genie
              .section:not(.multi-para-hilt):not(.multi-section-hilt)
              .multi-para-opt,
            .genie .multi-para-hilt .twocol.skill {
              display: none;
            }
            .genie .parentContainer .multi-para-hilt .paragraph:before {
              display: none;
            }
            .genie .multi-para-hilt .heading {
              position: absolute;
            }
            /* Style for Signature */
            .genie .disclaim .singlecolumn,
            .genie .disclaim .singlecolumn li,
            .genie .disclaim .singlecolumn p,
            .genie .disclaim .singlecolumn span {
              font-size: 9px;
              color: #8a8a8a;
            }
            .genie .field_sign {
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
            .genie .signPic img {
              max-width: 100%;
            }
    
            /*HILT multi para - For PDF*/
            .genie.for-pdf .multi-para-hilt .hilt-row .paragraph:first-child {
              padding-right: 2%;
            }
            .genie.for-pdf .multi-para-hilt .hilt-row .paragraph:last-child {
              padding-right: 0;
            }
            .genie,
            .genie table {
              line-height: 14px;
            }
            .genie.pagesize {
              width: "100%";
            }
            .resume-document .genie.pagesize.LPL,
            .resume-document .genie.pagesize.LIT {
              width: 750px;
            }
            .genie.fontsize,
            .genie .lang-sec .paragraph *,
            .genie .skli-sec .paragraph * {
              font-size: 10px;
            }
            .genie.fontface {
              font-family: Century Gothic;
            }
            .genie .section {
              padding-top: 25px;
            }
            .genie .singlecolumn,
            .genie .maincolumn {
              margin-left: 0px;
            }
            .genie .name {
              font-size: 25px;
              line-height: 32px;
            }
            .genie .resumeTitle {
              font-size: 14px;
            }
            .genie .sectiontitle {
              font-size: 12px;
              line-height: 14px;
            }
            .genie .jobtitle {
              font-size: 12px;
            }
            .genie
              .parentContainer
              .section:not(.lang-sec):not(.skli-sec)
              .firstparagraph
              ~ .paragraph {
              padding-top: 15px;
            }
            .genie .section .heading:before {
              top: 4px;
            }
            .genie .parentContainer .paragraph:not(.firstparagraph):before {
              top: 19px;
            }
            .genie .paragraph .datewrapper {
              top: 15px;
              margin-left: -168px;
              width: 118px;
            }
            .genie .parentContainer .firstparagraph:before {
              top: 0;
            }
            .genie .parentContainer .experience .firstparagraph:before,
            .genie .parentContainer .education .firstparagraph:before {
              top: 5px;
            }
            .genie .firstparagraph .sectiontitle {
              padding-bottom: 5px;
            }
            .genie .iconSvg svg,
            .genie .iconSvg {
              width: 11px;
              height: 15px;
            }
            .genie .paragraph-fieldgroup .iconSvg svg,
            .genie .paragraph-fieldgroup .iconSvg {
              width: 15px;
            }
            .genie .section .heading {
              width: 140px;
            }
            .genie .parentContainer .section:before {
              left: 140px;
            }
            .genie .parentContainer .paragraph {
              margin-left: 140px;
            }
            .genie:before {
              content: "";
              position: absolute;
              top: 1px;
              right: 0px;
              left: 173px;
              border-right: 2px solid #dadada;
              width: 2px;
              height: calc(100% - 48px);
            }
            .genie .skli-sec .singlecolumn .field:last-child {
              min-height: 14px;
            }
            .genie .right-box .paragraph,
            .genie .parentContainer .paragraph {
              padding-left: 28px;
            }
            .genie .disclaim,
            .genie .sign {
              padding-top: 50px;
            }
            .genie .sign + .disclaim,
            .genie .disclaim + .sign {
              padding-top: 25px;
            }
    
            /*SDCL*/
            .genie .name,
            .genie .sectiontitle,
            .genie .parentContainer .experience .firstparagraph:before,
            .genie .parentContainer .education .firstparagraph:before {
              color:  #2D806F;
            }
            .genie .name:before,
            .genie .section .heading:before,
            .genie .parentContainer .experience .paragraph:before,
            .genie .parentContainer .education .paragraph:before {
              background:  #2D806F;
            }
            .genie .name:before {
              top: 13px;
            }
    
            /*Infographic Bar*/
            .genie .lang-sec.infobarsec .paragraph,
            .genie .skli-sec.infobarsec .paragraph {
              width: 168px;
            }
            .genie .lang-sec.infobarsec .inner-rating,
            .genie .skli-sec.infobarsec .inner-rating {
              background-color:  #2D806F;
            }
            .genie .lang-sec.infobarsec .paragraph,
            .genie .skli-sec.infobarsec .paragraph {
              width: 168px;
            }
            .genie .lang-sec.infobarsec .sortable-item,
            .genie .skli-sec.infobarsec .sortable-item {
              display: inline-block;
              vertical-align: top;
            }
            .genie .lang-sec.infobarsec .heading,
            .genie .skli-sec.infobarsec .heading {
              margin-left: -166px;
            }
            .genie .lang-sec.infobarsec,
            .genie .skli-sec.infobarsec {
              padding-left: 166px;
              padding-top: 25px;
            }
    
            /*Infographic Tiles*/
            .genie .lang-sec.infotilesec,
            .genie .skli-sec,
            .genie .multi-para-hilt {
              padding-left: 166px;
              padding-top: 25px;
            }
            .genie .lang-sec.infotilesec .heading,
            .genie .skli-sec .heading,
            .genie .multi-para-hilt .heading {
              margin-left: -166px;
            }
            .genie .lang-sec.infotilesec .paragraph,
            .genie .skli-sec .paragraph {
              width: 168px;
            }
            .genie .lang-sec.infotilesec .nativeLangPara {
              width: 358px !important;
              max-width: 358px;
            }
    
            /*Rectangular Rating Blocks*/
            .genie .paragraph .sliced-rect .sliced-rect-tile.ratvfill {
              background-color:  #2D806F;
            }
    
            /*Finalize Fixes*/
            .genie .lang-sec.infobarsec .sortable-item .para_odd,
            .genie .lang-sec.infobarsec .sortable-item .para_even {
              max-width: 168px;
            }
            .genie
              .lang-sec.infobarsec
              .sortableInner
              .sortable-item:not(:first-child)
              .paragraph {
              width: 168px;
              vertical-align: top;
            }
            .genie .lang-sec.infobarsec .sortable-item .nativeLangPara {
              width: 358px;
              max-width: 358px;
            }
            .genie .lang-sec .sortable-item,
            .genie .skli-sec .sortable-item {
              display: inline-block;
              vertical-align: top;
            }
    
            /* fixes for builder and componentization */
            /*Spacing b/w paragraph*/
    
            .genie
              .parentContainer
              .sortableInner
              .sortable-item:first-child
              .paragraph {
              padding-top: 0;
            }
            .genie
              .parentContainer
              .education
              .sortableInner
              .sortable-item:first-child
              .paragraph {
              padding-top: 25px;
            }
            .genie .right-box .sortable-item .SECTION_NAME {
              margin-top: 65px;
            }
    
            .genie
              .parentContainer
              .section-container:last-child
              .section
              .sortable-item.paragraph-container:last-child
              .paragraph,
            .genie.MPR
              .parentContainer
              .sortable-item:last-child
              .section
              .paragraph:last-child {
              padding-bottom: 56px;
            }
            .page-finalize .genie .lang-sec.infobarsec:before {
              z-index: 9;
            }
            .modal-preview-resume
              .genie
              .experience
              .sortableInner
              > .paragraph
              .datewrapper {
              left: -140px;
              top: 15px;
            }
            .modal-preview-resume
              .genie
              .parentContainer
              > div
              > .sortable-item:last-child
              .heading
              + div
              > div:not(.sortableInner)
              > .firstparagraph,
            .modal-preview-resume
              .genie
              .parentContainer
              > div
              > .sortable-item:last-child
              .sortableInner
              .paragraph:last-child {
              padding-bottom: 56px;
            }
    
            /*Infographics: Builder team Fix for finalise page*/
            .page-finalize .genie .lang-sec.infobarsec .singlecolumn {
              border: 0;
            }
            .genie .sortable-item i.far.fa-check {
              font-family: "Font Awesome 5 Pro";
            }
            .page-finalize .genie .lang-sec.infobarsec {
              border-left: none;
              margin-left: 0px;
            }
            .page-finalize
              .genie
              .lang-sec.infobarsec
              .sortable-item
              + .sortable-item
              .paragraph {
              max-width: 168px;
            }
            .resume-preview .genie .lang-sec .sortable-item .paragraph,
            .resume-preview .genie .info-sec .sortable-item .paragraph,
            .page-tips .genie .lang-sec .sortable-item .paragraph,
            .page-tips .genie .info-sec .sortable-item .paragraph {
              width: 170px;
            }
            .page-finalize
              .genie
              .lang-sec.infobarsec
              .heading
              + div
              > div:not(.sortableInner)
              .firstparagraph
              .singlecolumn {
              border-left: 1px solid #979797;
            }
            .page-finalize .genie .section {
              min-height: 24px;
            }
            .page-finalize .genie .lang-sec.infobarsec .sortable-item .paragraph {
              padding-bottom: 5px;
              padding-top: 0px !important;
            }
    
            .genie .skli-sec.SECTION_SKLI .paragraph * {
              color: #504b48;
            }
            .genie .topsection .left-box {
              padding: 0 28px 0 35px;
              width: 177px;
            }
            .genie .PICTPic,
            .genie .PICTPic .field {
              width: 110px;
              height: 123px;
            }
            .genie .left-box .firstparagraph,
            .genie .right-box .firstparagraph {
              padding-top: 30px;
            }
            .genie .parentContainer {
              padding: 0 35px 35px;
            }
    
            /* LIT */
            .resume-preview .genie.LIT .topsection .left-box {
              padding-left: 25px;
            }
    
            @-moz-document url-prefix() {
              .genie .topsection .left-box {
                width: auto !important;
              }
              .genie.MPR .topsection .left-box,
              .genie.MFR .topsection .left-box {
                padding-right: 32px !important;
              }
              .page-final .genie.LPL .topsection .left-box {
                padding-right: 36px;
              }
              .page-final .genie.LIT .topsection .left-box {
                padding-right: 36px;
              }
              .resume-preview .genie.LIT .topsection .left-box {
                padding-left: 28px;
              }
              .genie.LPL .topsection .left-box::before,
              .genie.LIT .topsection .left-box::before {
                right: -1px !important;
              }
            }
            @media all and (-ms-high-contrast: none) {
              *::-ms-backdrop,
              .genie .iconSvg {
                margin-top: 0px;
              } /* IE11 */
              .resume-preview .genie .topsection .left-box::before {
                height: 120%;
              }
              .page-final .MFR.genie:before,
              .page-final .MPR.genie:before {
                left: 173px;
              }
            }
    
            /*LPL Builder Fixes */
            .genie.LPL .parentContainer .education .firstparagraph:before,
            .genie.MFR .parentContainer .education .firstparagraph:before,
            .genie.LIT .parentContainer .education .firstparagraph:before {
              top: 5px;
            }
            .page-final .genie.LPL .topsection .left-box,
            .page-final .genie.LIT .topsection .left-box {
              width: 170px;
            }
            .genie.LPL .education .heading,
            .genie.LIT .education .heading {
              float: none;
              padding-bottom: 10px;
            }
            .genie.LPL .parentContainer .lang-sec.infobarsec .paragraph,
            .genie.LIT .parentContainer .lang-sec.infobarsec .paragraph {
              padding-left: 0;
            }
            .genie.LPL .sortable-item .paragraph .datewrapper,
            .genie.LIT .sortable-item .paragraph .datewrapper {
              width: 130px;
            }
            .genie
              .parentContainer
              .sortableInner
              .sortable-item:not(:first-child)
              .paragraph {
              padding-top: 15px;
            }
            .genie
              .parentContainer
              .sortableInner
              .sortable-item:not(:first-child)
              .paragraph:before {
              top: 19px;
            }
            .genie.LPL
              .parentContainer
              .education
              .sortableInner
              .sortable-item:first-child
              .paragraph,
            .genie.LIT
              .parentContainer
              .education
              .sortableInner
              .sortable-item:first-child
              .paragraph {
              padding-top: 0px;
            }
            .genie.LPL .PARAGRAPH_EDUC:not(.firstparagraph):before,
            .genie.MFR .PARAGRAPH_EDUC:not(.firstparagraph):before,
            .genie.LIT .PARAGRAPH_EDUC:not(.firstparagraph):before {
              top: 9px;
            }
            .genie.LPL .PARAGRAPH_EXPR:not(.firstparagraph):before,
            .genie.LIT .PARAGRAPH_EXPR:not(.firstparagraph):before {
              top: 15px;
            }
            .page-final .genie.LPL .parentContainer .data-LNGG .paragraph,
            .page-final .genie.LIT .parentContainer .data-LNGG .paragraph {
              margin-left: 0;
              padding-top: 0px !important;
            }
            .page-finalize .genie.LPL .lang-sec.infobarsec .sortable-item .para_odd,
            .genie.LPL .lang-sec.infobarsec .sortable-item .para_even,
            .page-finalize .genie.LIT .lang-sec.infobarsec .sortable-item .para_odd,
            .genie.LIT .lang-sec.infobarsec .sortable-item .para_even {
              width: 196px !important;
              max-width: 196px;
            }
    
            .page-final .genie.LPL .topsection .left-box,
            .page-final .genie.LIT .topsection .left-box {
              width: 210px;
            }
            .page-final .genie.LPL .parentContainer .section:before,
            .page-final .genie.LIT .parentContainer .section:before {
              left: 173px;
            }
            .page-final .genie.LPL .section .heading,
            .page-final .genie.LIT .section .heading {
              width: 173px;
            }
            .page-final .genie.LPL .parentContainer .paragraph,
            .page-final .genie.LIT .parentContainer .paragraph {
              margin-left: 173px;
            }
            .page-finalize
              .genie.MLF6
              .sortableInner
              .sortable-item.paragraph-container:nth-child(3)
              .paragraph {
              display: block;
            }
            .genie.MLF6 .SECTION_SKLI .sortableInner .sortable-item {
              display: inline-block;
            }
            .resume-preview .genie.LPL .topsection .left-box {
              padding-left: 26px;
            }
            /* Builder fixes */
            .genie .lang-sec .title-edit,
            .genie .skli-sec .title-edit {
              margin-left: -166px;
            }
            .resume-preview .genie .topsection .left-box:before {
              right: 0;
            }
    
            .page-final .genie.LIT .topsection .left-box:before,
            .page-final .genie.LPL .topsection .left-box:before {
              right: -2px;
            }
            .resume-preview .genie.LIT .topsection .left-box:before {
              right: -0.5px !important;
            }
            .resume-preview .genie.LPL .topsection .left-box:before {
              right: 0;
            }
            .page-final .genie.LPL .name:before,
            .page-final .genie.LIT .name:before {
              left: -30px;
            }
            .resume-preview .genie.LPL .name:before,
            .resume-preview .genie.LIT .name:before {
              left: -35px;
            }
            .genie
              .skli-sec
              .sortableInner
              > .sortable-item:nth-last-child(1)
              .paragraph
              .singlecolumn
              .field:last-child,
            .genie
              .skli-sec
              .sortableInner
              > .sortable-item:nth-last-child(2)
              .paragraph
              .singlecolumn
              .field:last-child {
              min-height: 0px;
            }
    
            /*MFR Specific*/
            .genie.MFR
              .parentContainer
              .lang-sec.infobarsec
              .paragraph:not(.firstparagraph):before {
              background: none;
            }
            .genie.MFR
              .parentContainer
              .education
              .sortableInner
              .sortable-item:first-child
              .paragraph {
              padding-top: 0px;
            }
            @-moz-document url-prefix() {
              .genie.MFR .parentContainer .section::before {
                left: 140.5px;
              }
              .firefox .page-final .genie.MLF6 .topsection .left-box {
                border: none;
              }
              .resume-preview .genie.LPL .topsection .left-box {
                padding-left: 28px;
              }
            }
    
            /*Hover issue*/
            .genie.MFR .name-contact.active .doc-overlay.section-overlay:before,
            .genie.MPR .name-contact.active .doc-overlay.section-overlay:before {
              left: 77px;
            }
            .genie.MFR .name-contact.active .SECTION_NAME .doc-overlay:before,
            .genie.MFR .active .doc-overlay.section-overlay:before {
              content: "";
              position: absolute;
              width: 2px;
              height: 100%;
              background: #dadada;
              left: 219px;
            }
            .genie.MPR .name-contact.active .SECTION_NAME .doc-overlay:before,
            .genie.MPR .active .doc-overlay.section-overlay:before {
              content: "";
              position: absolute;
              width: 2px;
              height: 100%;
              background: #dadada;
              left: 219px;
            }
            .genie.MFR .data-PICT.active .doc-overlay.section-overlay:before,
            .genie.MPR .data-PICT.active .doc-overlay.section-overlay:before {
              display: none;
            }
    
            /*Builder fixes for horizontal line*/
            .resume-preview .genie.LPL:before,
            .resume-preview .genie.LIT:before {
              left: 174px;
            }
            .modal-preview .genie:before,
            .render-preview .genie:before,
            .page-final .MUK.genie:before {
              left: 175px;
            }
            .genie.MPR:before,
            .genie.MFR:before {
              box-sizing: content-box;
            }
            .genie .sortable-item.data-SGTR {
              background: #fff;
            }
    
            @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
              .genie.MPR:before,
              .genie.MFR:before {
                left: 175px;
              }
              .modal-preview-resume .genie.MPR .section .heading::before,
              .modal-preview-resume .genie.MFR .section .heading::before {
                right: -3px;
              }
              .modal-preview-resume .genie.MPR .name::before,
              .modal-preview-resume .genie.MFR .name::before {
                left: -35px;
              }
              .modal-preview-resume
                .genie.MPR
                .parentContainer
                .education
                .firstparagraph::before,
              .modal-preview-resume
                .genie.MFR
                .parentContainer
                .education
                .firstparagraph::before,
              .modal-preview-resume
                .genie.MPR
                .parentContainer
                .experience
                .firstparagraph::before,
              .modal-preview-resume
                .genie.MFR
                .parentContainer
                .experience
                .firstparagraph::before {
                left: -4px;
              }
            }
    
            .page-final
              .genie.LPL
              .parentContainer
              .sortable-drag-item
              .lang-sec
              .paragraph,
            .page-final
              .genie.LIT
              .parentContainer
              .sortable-drag-item
              .lang-sec
              .paragraph {
              margin-left: 0;
            } /* To fix drag issue on builder */
    
            /*Fixes for builder for skill*/
            .genie
              .skli-sec
              .sortable-item
              .paragraph:last-child
              .singlecolumn
              .field:last-child {
              min-height: 14px;
            }
            .genie
              .skli-sec
              .sortable-item:nth-last-child(1)
              .paragraph
              .singlecolumn
              .field:last-child,
            .genie
              .skli-sec
              .sortable-item:nth-last-child(2)
              .paragraph
              .singlecolumn
              .field:last-child {
              min-height: 0;
            }
            .genie
              .lang-sec
              .sortableInner
              > .sortable-item:nth-last-child(1)
              .paragraph,
            .genie
              .lang-sec
              .sortableInner
              > .sortable-item:nth-last-child(2)
              .paragraph,
            .genie
              .skli-sec
              .sortableInner
              > .sortable-item:nth-last-child(1)
              .paragraph,
            .genie
              .skli-sec
              .sortableInner
              > .sortable-item:nth-last-child(2)
              .paragraph {
              padding-bottom: 0 !important;
            }
    
            /*LPT Builder Fixes */
            @-moz-document url-prefix() {
              .genie.MLF6.LPT .topsection .left-box {
                width: 177px !important;
              }
            }
            .resume-preview .genie.MLF6.LPT .name:before {
              left: -33px;
            }
            .genie.MLF6.LPT:before {
              left: 175px;
            }
            .genie.MLF6.LPT .name:before {
              left: -41px;
            }
      </style>
      <title></title>
    </head>
    <body>
      <section class="page-wrap">
        <div class="document doc-root fontsize fontface vmargins hmargins pagesize genie" docskinwidth="571">
          <div id="CONTAINER_PARENT_0" class="topsection">
            <div id="CONTAINER_0" class="left-box"></div>
            <div id="CONTAINER_1" class="right-box">
              <div data-react-beautiful-dnd-draggable="240" class="sortable-item section-container SortableItem-sibling name-contact">
                <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                <div id="SECTION_NAME9a304921-ae93-4753-95a9-f45bda3f00f5" class="section notdraggable SECTION_NAME firstsection" data-section-cd="NAME">
                  <div class="doc-item">
                    <div class="">
                      <div class="">
                        <div id="PARAGRAPH_NAME_43670be1-6ffd-fc02-1730-adb1b38a82b1" class="paragraph PARAGRAPH_NAME firstparagraph placeholder-text">
                          <div>
                            <div class="name" dependency="FNAM|LNAM">
                              <span class="field" id="FIELD_FNAM">${
                                personDetail.firstName
                              }</span> <span class="field" id="FIELD_LNAM">${
    personDetail.lastName
  }</span>
                            </div>
                            <div class="resumeTitle" dependency="DCTL">
                              <span id="FIELD_DCTL" class="placeholder-text">${jobPosition}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="SECTION_CNTC2f838e9f-8d2a-4bc1-b1cd-998c15e31266" class="section SECTION_CNTC notdraggable" data-section-cd="CNTC">
                  <div class="doc-item">
                    <div class="">
                      <div class="">
                        <div id="PARAGRAPH_CNTC_379be96f-a033-c17d-b4e4-d348b79faafc" class="paragraph PARAGRAPH_CNTC firstparagraph placeholder-text">
                          <div class="clearfix doc-item">
                            <div class="address">
                              <div class="iconRow" dependency="ADDR|STRT|CITY|STAT|ZIPC">
                                <div class="iconSvg">
                                  <svg width="11" height="11" viewbox="0 0 11 11">
                                  <path fill="#6e6e6e" d="M5.505.88a4.63 4.63 0 0 1 4.625 4.625 4.63 4.63 0 0 1-4.625 4.625A4.63 4.63 0 0 1 .88 5.505 4.63 4.63 0 0 1 5.505.88zm0-.75A5.38 5.38 0 0 0 .13 5.505a5.38 5.38 0 0 0 5.375 5.375 5.38 5.38 0 0 0 5.375-5.375A5.38 5.38 0 0 0 5.505.13z"></path>
                                  <path fill="#6e6e6e" d="M7.535 3.436L5.19 8.165a.135.135 0 0 1-.256-.044l-.246-2.027-2.146-.36a.135.135 0 0 1-.034-.257l4.848-2.225a.136.136 0 0 1 .178.184z"></path></svg>
                                </div>
                                <div class="icoTxt zipsuffix">
                                  <span class="field" id="FIELD_STRT"></span> <span class="field" id="FIELD_CITY">${
                                    personDetail.city
                                  }</span><span dependency="CITY+STAT">,</span> <span class="field" id="FIELD_STAT">${
    personDetail.country
  }</span> <span class="field" id="FIELD_ADDR"></span>
                                </div>
                              </div>
                              <div class="iconRow" dependency="HPHN|CPHN">
                                <div class="iconSvg">
                                  <svg width="11" height="11" viewbox="0 0 11 11">
                                  <path fill="#6e6e6e" d="M5.49.802a4.688 4.688 0 1 1-.001 9.376 4.688 4.688 0 0 1 0-9.376zm0-.762a5.45 5.45 0 1 0 0 10.9 5.45 5.45 0 0 0 0-10.9z"></path>
                                  <path fill="#6e6e6e" d="M8.168 7.818l-.406.406c-.072.072-.284.117-.291.117A4.79 4.79 0 0 1 2.64 3.5s.046-.207.118-.279l.406-.405a.678.678 0 0 1 .634-.15l.085.028c.2.067.408.287.463.49l.205.75a.735.735 0 0 1-.168.641l-.271.271a2.878 2.878 0 0 0 2.024 2.025l.27-.271a.735.735 0 0 1 .643-.169l.749.205a.803.803 0 0 1 .49.463l.028.087c.066.199 0 .484-.149.632z"></path></svg>
                                </div>
                                <div class="icoTxt">
                                  <span class="field" id="FIELD_HPHN">${
                                    personDetail.phone
                                  }</span> <span class="field" id="FIELD_CPHN"></span>
                                </div>
                              </div>
                              <div class="iconRow" dependency="EMAI">
                                <div class="iconSvg">
                                  <svg width="11" height="11" viewbox="0 0 11 11">
                                  <path fill="#6e6e6e" d="M4.25 10.025A4.697 4.697 0 0 1 .972 6.747a4.566 4.566 0 0 1-.17-1.25A4.697 4.697 0 0 1 4.249.972a4.62 4.62 0 0 1 1.249-.17 4.55 4.55 0 0 1 1.823.37c.577.25 1.075.585 1.496 1.007.424.425.76.923 1.007 1.496a4.55 4.55 0 0 1 .37 1.824 4.697 4.697 0 0 1-3.447 4.526c-.402.113-.817.17-1.25.17-.431 0-.846-.056-1.247-.169zm2.703.732a5.456 5.456 0 0 0 3.255-2.503 5.458 5.458 0 0 0 .747-2.756c0-.748-.144-1.458-.432-2.126A5.542 5.542 0 0 0 9.356 1.64 5.494 5.494 0 0 0 7.623.473 5.312 5.312 0 0 0 5.498.04c-.499 0-.984.067-1.455.198-.46.13-.896.313-1.302.55a5.372 5.372 0 0 0-1.104.852A5.457 5.457 0 0 0 .04 5.497a5.455 5.455 0 0 0 2.701 4.71 5.458 5.458 0 0 0 2.757.748c.502 0 .986-.066 1.455-.198z"></path>
                                  <path fill="#6e6e6e" d="M8.337 3.41H2.672a.22.22 0 0 0-.142.046.152.152 0 0 0-.06.127v.537c0 .027.012.04.036.04l2.975 1.442.024.01c.016 0 .028-.004.036-.01l2.88-1.442a.11.11 0 0 1 .037-.01.11.11 0 0 0 .036-.01c.032 0 .048-.013.048-.04v-.517a.148.148 0 0 0-.06-.127.24.24 0 0 0-.145-.046z"></path>
                                  <path fill="#6e6e6e" d="M4.273 5.568c.009-.007.012-.017.012-.03 0-.02-.008-.03-.023-.03l-1.709-.833a.091.091 0 0 0-.06 0c-.016 0-.023.01-.023.03v2.183c0 .02.012.033.036.04h.024c.016 0 .023-.003.023-.01z"></path>
                                  <path fill="#6e6e6e" d="M6.35 5.738c-.009-.02-.029-.023-.06-.01l-.657.323a.277.277 0 0 1-.25 0l-.575-.273c-.023-.014-.043-.014-.06 0L2.562 7.503c-.009.007-.012.02-.012.04 0 .007.008.017.023.03.048.013.08.02.096.02h5.605a.076.076 0 0 0 .048-.02c0-.027-.003-.043-.012-.052z"></path>
                                  <path fill="#6e6e6e" d="M8.501 4.64h-.048l-1.626.823c-.016 0-.023.01-.023.03-.008.006-.003.016.012.03l1.626 1.493c.016.013.028.02.036.02h.023c.024-.02.037-.033.037-.04V4.68c-.002-.013-.013-.027-.037-.04z"></path></svg>
                                </div>
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
                <div class="doc-overlay section-overlay" style="left: -2px; right: -2px"></div>
              </div>
            </div>
          </div>
          <div id="CONTAINER_PARENT_1" class="parentContainer">
            <div id="CONTAINER_2">
              <div data-react-beautiful-dnd-draggable="241" class="sortable-item section-container SortableItem-sibling data-SUMM">
                <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                <div id="SECTION_SUMM4800037c-cd8f-4921-be95-3c3932c1a2a7" class="section summary SECTION_SUMM noparagraph has-title" data-section-cd="SUMM">
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
              <div data-react-beautiful-dnd-draggable="241" class="sortable-item section-container SortableItem-sibling data-HILT">
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
                              <table class="twocol skill">
                                <tbody>
                                  <tr>
                                    <td class="field twocol_1 paddedline" id="FIELD_SKC1">
                                      <ul>
                                        ${renderSkills()}
                                      </ul>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
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
                              <table class="twocol skill">
                                <tbody>
                                  <tr>
                                    <td class="field twocol_1 paddedline" id="FIELD_SKC1">
                                      <ul>
                                        ${renderHobbies()}
                                      </ul>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div class="multi-para-opt">
                                <div id="FIELD_PTTL" class="txt-bold txt-itl multi-para-color"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-react-beautiful-dnd-draggable="241" class="sortable-item section-container SortableItem-sibling data-EXPR">
                <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                <div id="SECTION_EXPR323074c2-b189-4f8d-8af7-fc51cdc40434" class="section experience SECTION_EXPR noparagraph multi-para has-title" data-section-cd="EXPR">
                  <div class="doc-item">
                    <div class="heading">
                      <div class="sectiontitle" id="SECTIONNAME_EXPR">
                        Work History
                      </div>
                    </div>${renderExperience()}
                  </div>
                </div>
              </div>
              <div data-react-beautiful-dnd-draggable="241" class="sortable-item section-container SortableItem-sibling data-EDUC">
                <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
                <div id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac" class="section education SECTION_EDUC noparagraph multi-para has-title" data-section-cd="EDUC">
                  <div class="doc-item">
                    <div class="heading">
                      <div class="sectiontitle" id="SECTIONNAME_EDUC">
                        Education
                      </div>
                    </div>${renderEducation()}
                  </div>
                </div>${renderCertificate()} ${renderAwards()} ${renderReferences()}
              </div>
            </div>
          </div>
          <div id="CONTAINER_PARENT_2" class="signContainerParent">
            <div id="CONTAINER_3" class="signContainer"></div>
          </div>
        </div>
      </section>
    </body>
    </html>
    `;
}
