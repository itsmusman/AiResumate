export function template35(resume) {
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
    return month == 0 ? "" : +month.toString().padStart(2, "0");
  }

  function renderCertificate() {
    let certificateHtml = "";
    if (certificates && certificates.length > 0) {
      certificateHtml = `<div data-react-beautiful-dnd-draggable="231" class="sortable-item section-container SortableItem-sibling data-EXPR">
      <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
      <div id="SECTION_EXPR323074c2-b189-4f8d-8af7-fc51cdc40434" class="section expr-sec SECTION_EXPR noparagraph multi-para has-title" data-section-cd="EXPR">
        <div class="doc-item">
          <div class="heading">
            <div class="sectiontitle" id="SECTIONNAME_EXPR">
             Certificate
            </div>
             
            ${certificates
              .map(
                (element) =>
                  ` <div class="">
        <div class="sortableInner">
        <div
          id="PARAGRAPH_EXPR_0"
          class="paragraph PARAGRAPH_EXPR firstparagraph placeholder-text"
        >
          <div class="clearfix doc-item">
            <div class="singlecolumn">
              <span class="dispBlk" dependency="JTIT|JSTD|EDDT">
                <span class="txt-bold txt-caps" id="FIELD_JTIT"
                  >${element.certificate}</span
          >
          <br/>
          <span dependency="JSTD|EDDT">
            <span id="FIELD_JSTD" format="%m/%Y"
              >${cleanMonth(element.fromMonth)} - ${element.Year}</span
            >
          </span>
        </span>
        <span
         
        >
          <span
            
            >${element.institute}</span
          >
        
        </span>`
              )
              .join("")}
          
              </div> 
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              `;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `<div data-react-beautiful-dnd-draggable="231" class="sortable-item section-container SortableItem-sibling data-EXPR">
      <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
      <div id="SECTION_EXPR323074c2-b189-4f8d-8af7-fc51cdc40434" class="section expr-sec SECTION_EXPR noparagraph multi-para has-title" data-section-cd="EXPR">
        <div class="doc-item">
          <div class="heading">
            <div class="sectiontitle" id="SECTIONNAME_EXPR">
              Awards
            </div>
             
            ${awards
              .map(
                (element) =>
                  ` <div class="">
        <div class="sortableInner">
        <div
          id="PARAGRAPH_EXPR_0"
          class="paragraph PARAGRAPH_EXPR firstparagraph placeholder-text"
        >
          <div class="clearfix doc-item">
            <div class="singlecolumn">
              <span class="dispBlk" dependency="JTIT|JSTD|EDDT">
                <span class="txt-bold txt-caps" id="FIELD_JTIT"
                  >${element.awards}</span
          >
          <br/>
          <span dependency="JSTD|EDDT">
            <span id="FIELD_JSTD" format="%m/%Y"
              >${element.Year}</span
            >
          </span>
        </span>
        <span >
          <span
           
            
            >${element.institute}</span
          >
        
        </span>`
              )
              .join("")}
          
              </div> 
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              `;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `<div data-react-beautiful-dnd-draggable="231" class="sortable-item section-container SortableItem-sibling data-EXPR">
       <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
       <div id="SECTION_EXPR323074c2-b189-4f8d-8af7-fc51cdc40434" class="section expr-sec SECTION_EXPR noparagraph multi-para has-title" data-section-cd="EXPR">
        <div class="doc-item">
          <div class="heading">
            <div class="sectiontitle" id="SECTIONNAME_EXPR">
              Reference
            </div>
             
            ${references
              .map(
                (element) =>
                  ` <div class="">
                <div class="sortableInner">
                <div
                  id="PARAGRAPH_EXPR_0"
                  class="paragraph PARAGRAPH_EXPR firstparagraph placeholder-text"
                 >
                  <div class="clearfix doc-item">
                    <div class="singlecolumn">

                  <span class="dispBlk" dependency="COMP|JCIT|JSTA|JCNT|JLOC">
                    <span class="txt-bold txtCapitalize" id="FIELD_COMP">${
                      element.reference
                    }</span>
                    <span dependency="COMP">
                      <span dependency="JCIT|JSTA|JCNT|JLOC">, </span>
                    </span>
                    <span id="FIELD_JCIT">${element?.institute ?? ""}</span>
               
                  </span> `
              )
              .join("")}
          
                    </div> 
                  </div>
               </div>
            </div>
        </div>
      </div>
     </div>
   </div>
         </div>     `;
    }
    return referencesHtml;
  }

  function renderSkills() {
    let skillsHtml = "";
    if (skills && skills.length > 0) {
      skillsHtml = `
      
          <div class="heading">
            <div class="sectiontitle" id="SECTIONNAME_SKILLS">
              Skills
            </div>
          </div>
          <div class="clearfix doc-item">
          <div class="singlecolumn">
            ${skills
              .map((element) => `<span >${element.name}</span>`)
              .join(", ")}
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
            <div class="sectiontitle" id="SECTIONNAME_SKILLS">
             Hobbies
            </div>
          </div>
          <div class="clearfix doc-item">
          <div class="singlecolumn">
            ${hobbies
              .map((element) => `<span >${element.name}</span>`)
              .join(", ")}
          </div>
        </div>
        
      `;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    let experienceHtml = "";
    if (experience && experience.length > 0) {
      experienceHtml = `
      <div data-react-beautiful-dnd-draggable="231" class="sortable-item section-container SortableItem-sibling data-EDUC">
              <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
              <div id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac" class="section SECTION_EDUC noparagraph multi-para has-title" data-section-cd="EDUC">
      <div class="heading">
        <div class="sectiontitle" id="SECTIONNAME_EXPR">
          Work History
        </div>
      </div>
      ${experience
        .map((element) => {
          return ` 
            <div class="">
              <div class="sortableInner">
                <div id="PARAGRAPH_EXPR_0" class="paragraph PARAGRAPH_EXPR firstparagraph placeholder-text">
                  <div class="clearfix doc-item">
                    <div class="singlecolumn">
                      <span class="dispBlk" dependency="JTIT|JSTD|EDDT">
                        <span class="txt-bold txt-caps" id="FIELD_JTIT">${
                          element.position
                        }</span>
                        <span dependency="JTIT+JSTD|EDDT">, </span>
                        <span dependency="JSTD|EDDT">
                          <span id="FIELD_JSTD" format="%m/%Y">${
                            element.fromYear
                          }${cleanMonth(element.fromMonth)}</span>
                          <span dependency="JSTD+EDDT"> - </span>
                          <span id="FIELD_EDDT" format="%m/%Y">${
                            element.toYear
                          }${cleanMonth(element.toMonth)}</span>
                        </span>
                      </span>
                      <span class="dispBlk" dependency="COMP|JCIT|JSTA|JCNT|JLOC">
                        <span class="txt-bold txtCapitalize" id="FIELD_COMP">${
                          element.company
                        }</span>
                        <span dependency="COMP">
                          <span dependency="JCIT|JSTA|JCNT|JLOC">, </span>
                        </span>
                        <span id="FIELD_JCIT">${element?.city ?? ""}</span>
                        <span id="FIELD_JSTA"></span>
                        <span id="FIELD_JLOC"></span>
                      </span>
                      <span id="FIELD_JDES">
                        <ul>
                          ${element.roles
                            .map((role) => `<li>${role}</li>`)
                            .join("")}
                        </ul>
                      </span>
                    </div>
                  </div>
                </div>
                <div id="PARAGRAPH_EXPR_-2" class="paragraph PARAGRAPH_EXPR placeholder-text">
                  <div class="clearfix doc-item">
                    <div class="singlecolumn">
                      <span id="FIELD_JDES"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div/>
            <div/>
            <br/>
          `;
        })
        .join("")}
    `;
    }
    return experienceHtml;
  }

  function renderEducation() {
    let educationHtml = "";
    if (education && education.length > 0) {
      educationHtml = `
        <div class="sortable-item section-container data-EDUC">
          <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
          <div class="section SECTION_EDUC noparagraph multi-para has-title" data-section-cd="EDUC">
            <div class="heading">
              <div class="sectiontitle" id="SECTIONNAME_EDUC">
                Education
              </div>
            </div>
            ${education
              .map((element) => {
                return `
                  <div class="paragraph PARAGRAPH_EDUC firstparagraph placeholder-text">
                    <div class="clearfix doc-item">
                      <div class="singlecolumn">
                        <span class="dispBlk" dependency="DGRE|STUY|GRHN">
                          <span class="txt-bold txtCapitalize" id="FIELD_DGRE">${
                            element.degree
                          }</span>
                          <span dependency="DGRE+STUY">, </span>
                          <span id="FIELD_STUY">${element.university}</span>
                          <span id="FIELD_GRHN"></span>
                        </span>
                        <span class="dispBlk" dependency="SCHO|SCIT|SSTA|SCNT|GRYR|GRST|GRED|GRIP">
                          <span class="txt-bold txtCapitalize" id="FIELD_SCHO"></span>
                          <span dependency="SCHO">
                            <span dependency="SCIT|SSTA|SCNT|GRYR|GRST|GRED|GRIP"></span>
                          </span>
                          <span id="FIELD_SCIT">${element?.city ?? ""}</span>
                          <span dependency="SCIT"></span>
                          <span dependency="SSTA">, </span>
                          <span id="FIELD_SCNT"></span>
                          <span class="xslt_static_change displayNoneThisField">Expected in </span>
                          <span id="FIELD_GRYR" format="%m/%Y">${
                            element.fromYear
                          }</span>
                          <span id="FIELD_GRYR" format="%m/%Y"> - </span>
                          <span id="FIELD_GRYR" format="%m/%Y">${
                            element.toYear
                          }</span>
                          <span id="FIELD_GRST" format="%m/%Y"></span>
                          <span id="FIELD_GRED" format="%m/%Y"></span>
                          <span id="FIELD_GRIP"></span>
                        </span>
                        <span class="field" id="FIELD_FRFM"></span>
                      </div>
                    </div>
                  </div>
                `;
              })
              .join("")}
          </div>
        </div>
        <br/>
        `;
    }
    return educationHtml;
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
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700");
          @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700");
          @import url("https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed:wght@500");
  
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
            margin: 0;
            padding: 0;
          }
          .genie ul li {
            position: relative;
            margin: 0px;
            padding-left: 9px;
            padding-bottom: 4px;
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
          .genie ul {
            margin-top: 5px;
          }
  
          /*Helping Classes*/
          .genie .txt-bold {
            font-weight: bold;
          }
          .genie .txt-caps {
            text-transform: uppercase;
          }
          .genie .txtCapitalize {
            text-transform: capitalize;
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
            color: #494949;
            word-wrap: break-word;
            position: relative;
            font-weight: 400;
            min-height: 792px;
          }
          .genie:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background: #1c6b60;
            width: 25px;
            height: 100%;
          }
          .genie .section {
            margin-left: 25px;
            margin-right: 30px;
          }
  
          .genie .name-sec {
            border-top: none !important;
            padding-bottom: 20px;
          }
          .genie .name {
            font-family: "Montserrat";
            letter-spacing: 2px;
            color: #1c6b60;
            text-transform: uppercase;
          }
          .genie .name .last-name {
            color: #494949;
          }
          .genie .name,
          .genie .resume-title {
            margin-left: 120px;
          }
          .genie .resume-title {
            margin-top: 5px;
            letter-spacing: 0.5px;
            color: #000;
            font-family: "Saira Semi Condensed";
            font-weight: 500;
          }
          .genie .resume-title span {
            display: block;
            text-transform: lowercase;
          }
          .genie .resume-title span:first-letter {
            text-transform: capitalize;
          }
          .genie .cntc-sec {
            background: #494949;
            margin-right: 0px !important;
            color: #fff;
            margin-left: 0px;
            font-weight: 600;
          }
          .genie .cntc-sec {
            position: relative;
          }
          .genie .address {
            display: table;
            table-layout: fixed;
            width: 100%;
            background: #494949;
          }
          .genie .address:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            background: #1c6b60;
            width: 145px;
            height: 100%;
          }
          .genie .phone-box,
          .genie .text-field {
            display: table-cell;
            vertical-align: top;
            padding: 10px 0;
          }
          .genie .phone-box {
            background: #1c6b60;
            max-width: 115px;
            width: 115px;
            display: inline-block;
            box-sizing: content-box;
            position: relative;
            padding-left: 30px;
            float: left;
          }
          .genie .social-box {
            padding-top: 0;
          }
          .genie .parent-container {
            display: table;
            table-layout: fixed;
            width: 100%;
          }
          .genie .parent-container .section:first-child {
            margin-top: 20px !important;
            border-top: none;
            padding-top: 0;
          }
          .genie .parent-container .name-sec + .section {
            margin-top: 35px !important;
          }
          .genie .parent-container .section {
            border-top: 1px solid #494949;
            padding-top: 10px;
            clear: both;
            position: relative;
          }
          .genie .parent-container .section:first-child:before {
            display: none;
          }
          .genie .section:not(.name-sec):not(.cntc-sec):before {
            content: "";
            border: 1px solid #1c6b60;
            width: 119px;
            position: absolute;
            left: 0;
            top: -1px;
            background: #1c6b60;
          }
          .genie .parent-container .section:after {
            display: table;
            content: "";
            clear: both;
          }
          .genie .parent-container .name-sec {
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
            color: #1c6b60;
            padding-left: 5px;
          }
          .genie .sectiontitle:first-letter {
            text-transform: capitalize;
          }
          .genie .firstparagraph {
            margin-top: 0 !important;
          }
          .genie .accomplishment,
          .genie .skill {
            display: table;
            width: 100%;
            table-layout: fixed;
          }
          .genie .accomplishment .paddedline {
            display: table-cell;
            width: 50%;
            padding-right: 15px;
          }
          .genie .skill .paddedline {
            display: table-cell;
            width: 50%;
            padding-right: 15px;
          }
          .genie .skill .paddedline:last-child,
          .genie .accomplishment .paddedline:last-child {
            padding-right: 0;
          }
          .genie .sprtr {
            font-weight: bold;
            padding: 0 5px;
          }
          .genie .sprtr + .sprtr {
            display: none;
          }
          .genie .right-details {
            margin-left: 145px;
            padding-bottom: 10px;
          }
          .genie .address .right-details > span:nth-child(2n) {
            padding: 10px 0 0;
            width: 188px;
            padding-left: 20px;
            display: inline-block;
            box-sizing: content-box;
            padding-top: 10px;
            max-width: 188px;
          }
          .genie .address .right-details > span:nth-child(2n + 1) {
            padding: 10px 0 0;
            padding-left: 15px;
            width: 224px;
            display: inline-block;
            box-sizing: content-box;
            max-width: 224px;
          }
  
          .genie .social .field a {
            color: #fff;
            text-decoration: underline;
          }
          .genie .social .field a:hover {
            text-decoration: underline;
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
            .parent-container
            .sortable-item:first-child
            + .sortable-item
            .section {
            margin-top: 30px;
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
          .genie .lang-sec.infobarsec .para_odd,
          .genie .skli-sec.infobarsec .para_odd {
            margin-right: 15px;
          }
          .genie .lang-sec.infobarsec .nativeLangPara,
          .genie .skli-sec.infobarsec .nativeLangPara {
            width: 100% !important;
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
          }
          .genie .lang-sec.infobarsec .inner-rating,
          .genie .skli-sec.infobarsec .inner-rating {
            background-color: #1c6b60;
            height: 4px;
            width: 60%;
          }
          .genie .lang-sec.infobarsec .paragraph:before,
          .genie .skli-sec.infobarsec .paragraph:before {
            display: none;
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
            margin-top: 3px;
            line-height: 0px;
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
  
          /*Rectangular Rating Blocks*/
          .genie .sliced-rect .sliced-rect-tile.ratvfill {
            background-color: #1c6b60;
          }
          .genie .hide-bar .rating-bar,
          .genie .hide-only-bar .rating-bar,
          .genie .hide-bar .sliced-rect,
          .genie .hide-colon .colon {
            display: none !important;
          }
  
          /*MPR*/
          .genie .hide-bar .field-ratt {
            display: none;
          }
  
          /*HILT multi para/section*/
          .genie .multi-para-hilt {
            position: relative;
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
          .genie .multi-para-hilt .paragraph:nth-child(n + 5) {
            margin-top: 15px;
          }
  
          @-moz-document url-prefix() {
            .genie .dispInBlk {
              padding-right: 10px;
              word-break: break-all;
            }
          }
  
          /*PDF - Saira Semi Condensed Font Issue Fix*/
          .genie.for-pdf .resume-title {
            font-family: "Saira SemiCondensed";
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
            margin-bottom: 10px;
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
          .genie .skli-sec.infobarsec .paragraph *,
          .genie .skli-sec .paragraph * {
            font-size: 10px;
          }
          .genie.fontface {
            font-family: Source Sans Pro;
          }
          .genie.vmargins {
            padding-bottom: 25px;
            padding-top: 25px;
          }
          .genie .paragraph {
            margin-top: 10px;
          }
          .genie .name {
            font-size: 20px;
            line-height: 22px;
            color: #1c6b60;
          }
          .genie .resume-title {
            font-size: 12px;
            line-height: 15px;
          }
          .genie .heading {
            width: 120px;
          }
          .genie .sectiontitle {
            font-size: 12px;
            line-height: 14px;
            color: #1c6b60;
          }
          .genie .address {
            font-size: 10px;
            line-height: 12px;
          }
          .genie:before,
          .genie .address:before,
          .genie .phone-box {
            background-color: #1c6b60;
          }
          .genie .expr-sec .paragraph {
            margin-top: 15px;
          }
          .genie .parent-container .section {
            margin-top: 30px;
          }
          .genie .section:not(.name-sec):not(.cntc-sec):before {
            border-color: #1c6b60;
            border-width: 1px;
            background: #1c6b60;
          }
          .genie .parent-container .singlecolumn,
          .genie .parent-container .maincolumn {
            margin-left: 135px;
          }
  
          /*Builder fixes*/
          .genie .sortableInner .singlecolumn,
          .genie .sortableInner .maincolumn {
            margin-left: 0;
          }
          .genie .sortableInner {
            margin-left: 135px;
            display: table;
          }
  
          /*Infographic*/
          .genie .lang-sec.infobarsec {
            padding-left: 135px;
          }
          .genie .lang-sec.infobarsec .heading {
            margin-left: -135px;
          }
          .genie .lang-sec.infobarsec .paragraph {
            width: 191px;
          }
          .genie .lang-sec.infobarsec .inner-rating,
          .genie .skli-sec.infobarsec .inner-rating {
            background-color: #1c6b60;
          }
          .genie .lang-sec.infobarsec .nativeLangPara {
            width: 408px;
            max-width: 408px;
          }
          .genie .skli-sec .singlecolumn .field:last-child {
            min-height: 13px;
          }
  
          /*Infographic Skills*/
          .genie .lang-sec.infotilesec,
          .genie .skli-sec {
            padding-left: 135px;
          }
          .genie .lang-sec.infotilesec .heading,
          .genie .skli-sec .heading {
            margin-left: -135px;
          }
          .genie .lang-sec.infotilesec .paragraph,
          .genie .skli-sec .paragraph {
            width: 191px;
          }
          .genie .lang-sec.infotilesec .nativeLangPara {
            width: 408px;
            max-width: 408px;
          }
  
          /*Rectangular Rating Blocks*/
          .genie .paragraph .sliced-rect .sliced-rect-tile.ratvfill {
            background-color: #1c6b60;
          }
  
          /*HILT multi para*/
          .genie .multi-para-hilt {
            padding-left: 135px;
          }
          .genie .section.multi-para-hilt .heading {
            margin-left: -135px;
          }
  
          /*Finalize Issue*/
          .genie .data-LNGG .paragraph-container,
          .genie .data-SKLI .paragraph-container {
            display: inline-block;
          }
          .genie .lang-sec.infobarsec .sortableInner,
          .genie .skli-sec .sortableInner {
            margin-left: 0;
          }
          .genie .dropable-container .lang-sec .sortableInner .sortable-item,
          .genie .dropable-container .skli-sec .sortableInner .sortable-item {
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
  
          /*MPR finalize Issues*/
          .page-finalize
            .genie
            .parent-container
            .sortable-item:first-child
            .section:before,
          .genie.LUK .parent-container .sortable-item:first-child .section:before {
            display: none;
          }
          .page-finalize
            .genie
            .parent-container
            .sortable-item:first-child
            .section,
          .genie.LUK .parent-container .sortable-item:first-child .section {
            margin-top: 20px !important;
            border-top: none;
            padding-top: 0;
          }
          @-moz-document url-prefix() {
            .genie .phone-box .dispInBlk {
              word-break: break-all;
            }
          }
  
          /*Fixes for resumecheck*/
          .genie .section.has-review-suggestion-for-rcv3:after {
            content: attr(data-before);
            position: absolute;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            line-height: 1;
            color: #cf4343;
            font-family: "Font Awesome 5 Pro", "Source Sans Pro", sans-serif;
            font-weight: 700;
            font-size: 11px;
            top: 10px;
            right: -12px;
            z-index: 999;
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
            line-height: 14px;
            padding: 1px 5px;
            text-align: center;
          }
          .genie .section.has-review-suggestion-for-rcv3:before {
            display: none !important;
          }
          .genie .lang-sec .title-edit,
          .genie .skli-sec .title-edit {
            margin-left: -135px;
          }
          .jobTitle{
            font-size: 18px;
          }


    </style>
    <title></title>
  </head>
  <body>
    <section class="page-wrap">
      <div id="document" class="document doc-root fontsize fontface vmargins hmargins pagesize genie MNS5 docskinwidth=">
        <div id="CONTAINER_PARENT_0" class="topSection">
          <div id="CONTAINER_0">
            <div data-react-beautiful-dnd-draggable="230" class="sortable-item section-container SortableItem-sibling name-contact">
              <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
              <div id="SECTION_NAME9a304921-ae93-4753-95a9-f45bda3f00f5" class="section notdraggable name-sec SECTION_NAME firstsection" data-section-cd="NAME">
                <div class="doc-item">
                  <div class="">
                    <div class="">
                      <div id="PARAGRAPH_NAME_43670be1-6ffd-fc02-1730-adb1b38a82b1" class="paragraph PARAGRAPH_NAME firstparagraph placeholder-text">
                        <div>
                          <div class="name txt-bold">
                            <span class="field" id="FIELD_FNAM">${
                              personDetail.firstName
                            }</span> <span class="field last-name" id="FIELD_LNAM">${
    personDetail.lastName
  }</span>
                          </div>
                          <div class="resume-title" dependency="DCTL">
                            <span id="FIELD_DCTL" class="jobTitle">${jobPosition}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="SECTION_CNTC2f838e9f-8d2a-4bc1-b1cd-998c15e31266" class="section cntc-sec notdraggable SECTION_CNTC" data-section-cd="CNTC">
                <div class="doc-item">
                  <div class="">
                    <div class="">
                      <div id="PARAGRAPH_CNTC_379be96f-a033-c17d-b4e4-d348b79faafc" class="paragraph PARAGRAPH_CNTC firstparagraph placeholder-text">
                        <div class="clearfix doc-item">
                          <div class="address">
                            <span class="phone-box"><span dependency="HPHN|CPHN"><span class="field" id="FIELD_HPHN">${
                              personDetail.phone
                            }</span> <span class="field" id="FIELD_CPHN"></span></span></span>
                            <div class="right-details">
                              <span class="text-field" dependency="ADDR|STRT|CITY|STAT|ZIPC"><span class="zipsuffix" dependency="ADDR|STRT|CITY|STAT|ZIPC"><span class="field" id="FIELD_STRT"></span><span class="field" id="FIELD_CITY">${
                                personDetail.city
                              }</span><span dependency="CITY+STAT">, </span> <span class="spaced field" id="FIELD_STAT">${
    personDetail.country
  }</span> <span class="field" id="FIELD_ADDR"></span></span></span> <span class="text-field" dependency="EMAI"><span><span class="field" id="FIELD_EMAI">${
    personDetail.email
  }</span></span></span>
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
        <div id="CONTAINER_PARENT_1" class="parent-container">
          <div id="CONTAINER_1">
            <div data-react-beautiful-dnd-draggable="231" class="sortable-item section-container SortableItem-sibling data-SUMM">
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
            <div data-react-beautiful-dnd-draggable="231" class="sortable-item section-container SortableItem-sibling data-HILT">
              <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
              <div id="SECTION_HILTa5cb1850-6271-45e8-86ba-3d92fbc82062" class="section SECTION_HILT noparagraph has-title" data-section-cd="HILT">
                <div class="doc-item">
                 
                  <div class="">
                                ${renderSkills()}
                                <br/>
                                ${renderHobbies()}
                              
                  </div> 
                </div>
              </div>
            </div>

          
                <div class="doc-item">
                  
                  ${renderExperience()}
                </div>
             
            
                <div class="doc-item">
                  ${renderEducation()}
                </div>
          

            <div class="doc-item">
            ${renderCertificate()}
            </div>
            <div class="doc-item">
            ${renderAwards()}
            </div>
            <div class="doc-item">
            ${renderReferences()}
            </div>

          </div>
        </div>
      </div>
    </section>
  </body>
  </html>
  `;
}
