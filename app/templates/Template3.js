export function template3(resume) {
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
      certificateHtml = `<div class="content-section">
        <div class="section-header">
          <span>Certificate&nbsp;</span>
        </div>
        <div class="section-content">
            ${certificates
              .map(
                (element) =>
                  `<div class="content-entry">
              <div class="entry-header">
              <br/>
                  <span class="entry-where">${element.institute}</span>
                  <span class="entry-when">${element.Year}${cleanMonth(
                    element.fromMonth
                  )}</span>
                  <span class="entry-what">
                  ${element.certificate}
                  </span>
              </div>
                <span class="entry-description"></span>
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
      awardsHtml = `<div class="content-section">
        <div class="section-header">
          <span>Awards&nbsp;</span>
        </div>
        <div class="section-content">
            ${awards
              .map(
                (element) =>
                  `<div class="content-entry">
              <div class="entry-header">
              <br/>
                  <span class="entry-where">${element.institute}</span>
                  <span class="entry-when">${element.Year}</span>
                  <span class="entry-what">
                  ${element.awards}
                  </span>
              </div>
                <span class="entry-description"></span>
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
      referencesHtml = `<div class="content-section">
        <div class="section-header">
          <span>Reference&nbsp;</span>
        </div>
        <div class="section-content">
            ${references
              .map(
                (element) =>
                  `<div class="content-entry">
              <div class="entry-header">
              <br/>
                  <span class="entry-where">${element.institute}</span>
                  <span class="entry-when"></span>
                  <span class="entry-what">
                  ${element.reference}
                  </span>
              </div>
                <span class="entry-description"></span>
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
      skillsHtml = `<div class="content-section">
        <div class="section-header">
          <span>Skills&nbsp;</span>
          <br/>
        </div>
        <div class="section-content">
            <div class="content-entry">
              <div class="entry-header">
                <span class="entry-description">${skillNames.join(", ")}</span>
              </div>
            </div>
        </div>
      </div>
      <br/>
     
      `;
    }
    return skillsHtml;
  }

  function renderHobbies() {
    let hobbyHtml = "";
    if (hobbies && hobbies.length > 0) {
      const hobbyNames = hobbies.map((element) => element.name);
      hobbyHtml = `<div class="content-section">
        <div class="section-header">
          <span>Hobbies&nbsp;</span>
          <br/>
        </div>
        
        <div class="section-content">
            <div class="content-entry">
              <div class="entry-header">
                <span class="entry-description">${hobbyNames.join(", ")}</span>
              </div>
            </div>
        </div>
      </div>
      <br/>`;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";
    if (experience.length > 0) {
      result += `<div class="section-header">
                    <span>Experience&nbsp;</span>
                  </div>
                  <div class="section-content">`;

      experience.forEach((element) => {
        result += `<div class="content-entry">
          <div class="entry-header">
            <br/>
            <span class="entry-where">${element.company}, ${
          element.city ?? []
        }</span>
            <span class="entry-when">${element.fromYear}${cleanMonth(
          element.fromMonth
        )} - ${element.toYear}${cleanMonth(element.toMonth)}</span>
            <span class="entry-what">${element.position}</span>
          </div>
          <br/>
          <div>
          <br/>
            `;
        var roles = "";
        (element?.roles ?? []).forEach((role) => {
          roles += `<li>${role}</li>`;
        });
        result += `${roles}
        </div>
      </div>
      <br/>
      `;
      });

      result += `</div>`;
    }
    return result;
  }

  function renderEducation() {
    var result = "";
    if (education.length > 0) {
      result += `<div class="section-header">
                  <span>Education&nbsp;</span>
                </div>
                <div class="section-content">`;

      education.forEach((element) => {
        result += `<div class="content-entry">
        <div class="entry-header">
          <br/>
          <span class="entry-where">${element.university}</span>
          <span class="entry-when">${element.fromYear} - ${
          element.toYear
        }</span>
          <span class="entry-what">${element.degree}</span>
        </div>
        <span class="entry-description">${element.city ?? []}</span>
      </div>`;
      });

      result += `</div>`;
    }
    return result;
  }
  return `
    <!DOCTYPE HTML>
    <html lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <!-- Fonts and icons -->
        <style type="text/css">
        
        @page {
          margin: 0px;
        }

          /* Fonts */
          @font-face {
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 300;
            src: local('Source Sans Pro Light'), local('SourceSansPro-Light');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
          }
          @font-face {
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 400;
            src: local('Source Sans Pro'), local('SourceSansPro-Regular');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
          }
          @font-face {
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 600;
            src: local('Source Sans Pro Semibold'), local('SourceSansPro-Semibold');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
          }
          @font-face {
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 700;
            src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
          }
          @font-face {
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 900;
            src: local('Source Sans Pro Black'), local('SourceSansPro-Black');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
          }
          /* Icons by FontAwesome 4 (fontawesome.io) */
          .icon-repository {
            background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwOS4xMzIsMTE0LjU3M2MtMTkuNjA4LTMzLjU5Ni00Ni4yMDUtNjAuMTk0LTc5Ljc5OC03OS44QzI5NS43MzYsMTUuMTY2LDI1OS4wNTcsNS4zNjUsMjE5LjI3MSw1LjM2NSAgIGMtMzkuNzgxLDAtNzYuNDcyLDkuODA0LTExMC4wNjMsMjkuNDA4Yy0zMy41OTYsMTkuNjA1LTYwLjE5Miw0Ni4yMDQtNzkuOCw3OS44QzkuODAzLDE0OC4xNjgsMCwxODQuODU0LDAsMjI0LjYzICAgYzAsNDcuNzgsMTMuOTQsOTAuNzQ1LDQxLjgyNywxMjguOTA2YzI3Ljg4NCwzOC4xNjQsNjMuOTA2LDY0LjU3MiwxMDguMDYzLDc5LjIyN2M1LjE0LDAuOTU0LDguOTQ1LDAuMjgzLDExLjQxOS0xLjk5NiAgIGMyLjQ3NS0yLjI4MiwzLjcxMS01LjE0LDMuNzExLTguNTYyYzAtMC41NzEtMC4wNDktNS43MDgtMC4xNDQtMTUuNDE3Yy0wLjA5OC05LjcwOS0wLjE0NC0xOC4xNzktMC4xNDQtMjUuNDA2bC02LjU2NywxLjEzNiAgIGMtNC4xODcsMC43NjctOS40NjksMS4wOTItMTUuODQ2LDFjLTYuMzc0LTAuMDg5LTEyLjk5MS0wLjc1Ny0xOS44NDItMS45OTljLTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OSAgIGMtNS44OTgtNC40NzMtMTAuMDg1LTEwLjMyOC0xMi41Ni0xNy41NTZsLTIuODU1LTYuNTdjLTEuOTAzLTQuMzc0LTQuODk5LTkuMjMzLTguOTkyLTE0LjU1OSAgIGMtNC4wOTMtNS4zMzEtOC4yMzItOC45NDUtMTIuNDE5LTEwLjg0OGwtMS45OTktMS40MzFjLTEuMzMyLTAuOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5Yy0xLjE0Mi0xLjMzMS0xLjk5Ny0yLjY2My0yLjU2OC0zLjk5NyAgIGMtMC41NzItMS4zMzUtMC4wOTgtMi40MywxLjQyNy0zLjI4OWMxLjUyNS0wLjg1OSw0LjI4MS0xLjI3Niw4LjI4LTEuMjc2bDUuNzA4LDAuODUzYzMuODA3LDAuNzYzLDguNTE2LDMuMDQyLDE0LjEzMyw2Ljg1MSAgIGM1LjYxNCwzLjgwNiwxMC4yMjksOC43NTQsMTMuODQ2LDE0Ljg0MmM0LjM4LDcuODA2LDkuNjU3LDEzLjc1NCwxNS44NDYsMTcuODQ3YzYuMTg0LDQuMDkzLDEyLjQxOSw2LjEzNiwxOC42OTksNi4xMzYgICBjNi4yOCwwLDExLjcwNC0wLjQ3NiwxNi4yNzQtMS40MjNjNC41NjUtMC45NTIsOC44NDgtMi4zODMsMTIuODQ3LTQuMjg1YzEuNzEzLTEyLjc1OCw2LjM3Ny0yMi41NTksMTMuOTg4LTI5LjQxICAgYy0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTRjLTguNjU4LTIuMjg2LTE3LjYwNS01Ljk5Ni0yNi44MzUtMTEuMTRjLTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNiAgIGMtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OWMtMy45MDEtMTIuMzc0LTUuODUyLTI2LjY0OC01Ljg1Mi00Mi44MjZjMC0yMy4wMzUsNy41Mi00Mi42MzcsMjIuNTU3LTU4LjgxNyAgIGMtNy4wNDQtMTcuMzE4LTYuMzc5LTM2LjczMiwxLjk5Ny01OC4yNGM1LjUyLTEuNzE1LDEzLjcwNi0wLjQyOCwyNC41NTQsMy44NTNjMTAuODUsNC4yODMsMTguNzk0LDcuOTUyLDIzLjg0LDEwLjk5NCAgIGM1LjA0NiwzLjA0MSw5LjA4OSw1LjYxOCwxMi4xMzUsNy43MDhjMTcuNzA1LTQuOTQ3LDM1Ljk3Ni03LjQyMSw1NC44MTgtNy40MjFzMzcuMTE3LDIuNDc0LDU0LjgyMyw3LjQyMWwxMC44NDktNi44NDkgICBjNy40MTktNC41NywxNi4xOC04Ljc1OCwyNi4yNjItMTIuNTY1YzEwLjA4OC0zLjgwNSwxNy44MDItNC44NTMsMjMuMTM0LTMuMTM4YzguNTYyLDIxLjUwOSw5LjMyNSw0MC45MjIsMi4yNzksNTguMjQgICBjMTUuMDM2LDE2LjE4LDIyLjU1OSwzNS43ODcsMjIuNTU5LDU4LjgxN2MwLDE2LjE3OC0xLjk1OCwzMC40OTctNS44NTMsNDIuOTY2Yy0zLjksMTIuNDcxLTguOTQxLDIyLjQ1Ny0xNS4xMjUsMjkuOTc5ICAgYy02LjE5MSw3LjUyMS0xMy45MDEsMTMuODUtMjMuMTMxLDE4Ljk4NmMtOS4yMzIsNS4xNC0xOC4xODIsOC44NS0yNi44NCwxMS4xMzZjLTguNjYyLDIuMjg2LTE4LjQxNSw0LjAwNC0yOS4yNjMsNS4xNDYgICBjOS44OTQsOC41NjIsMTQuODQyLDIyLjA3NywxNC44NDIsNDAuNTM5djYwLjIzN2MwLDMuNDIyLDEuMTksNi4yNzksMy41NzIsOC41NjJjMi4zNzksMi4yNzksNi4xMzYsMi45NSwxMS4yNzYsMS45OTUgICBjNDQuMTYzLTE0LjY1Myw4MC4xODUtNDEuMDYyLDEwOC4wNjgtNzkuMjI2YzI3Ljg4LTM4LjE2MSw0MS44MjUtODEuMTI2LDQxLjgyNS0xMjguOTA2ICAgQzQzOC41MzYsMTg0Ljg1MSw0MjguNzI4LDE0OC4xNjgsNDA5LjEzMiwxMTQuNTczeiIgZmlsbD0iIzNlM2UzZSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)
          }
          .icon-job {
            background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQzOC41MzYgNDM4LjUzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzNiA0MzguNTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQxNC40MSwyNC4xMjNDMzk4LjMzMyw4LjA0MiwzNzguOTYzLDAsMzU2LjMxNSwwSDgyLjIyOEM1OS41OCwwLDQwLjIxLDguMDQyLDI0LjEyNiwyNC4xMjMgICBDOC4wNDUsNDAuMjA3LDAuMDAzLDU5LjU3NiwwLjAwMyw4Mi4yMjV2Mjc0LjA4NGMwLDIyLjY0Nyw4LjA0Miw0Mi4wMTgsMjQuMTIzLDU4LjEwMmMxNi4wODQsMTYuMDg0LDM1LjQ1NCwyNC4xMjYsNTguMTAyLDI0LjEyNiAgIGgyNzQuMDg0YzIyLjY0OCwwLDQyLjAxOC04LjA0Miw1OC4wOTUtMjQuMTI2YzE2LjA4NC0xNi4wODQsMjQuMTI2LTM1LjQ1NCwyNC4xMjYtNTguMTAyVjgyLjIyNSAgIEM0MzguNTMyLDU5LjU3Niw0MzAuNDksNDAuMjA0LDQxNC40MSwyNC4xMjN6IE0xMzMuNjE4LDM2Ny4xNTdINjcuNjY2VjE2OS4wMTZoNjUuOTUyVjM2Ny4xNTd6IE0xMjcuNjI2LDEzMi4zMzIgICBjLTYuODUxLDYuNTY3LTE1Ljg5Myw5Ljg1MS0yNy4xMjQsOS44NTFoLTAuMjg4Yy0xMC44NDgsMC0xOS42NDgtMy4yODQtMjYuNDA3LTkuODUxYy02Ljc2LTYuNTY3LTEwLjEzOC0xNC43MDMtMTAuMTM4LTI0LjQxICAgYzAtOS44OTcsMy40NzYtMTguMDgzLDEwLjQyMS0yNC41NTZjNi45NS02LjQ3MSwxNS45NDItOS43MDgsMjYuOTgtOS43MDhjMTEuMDM5LDAsMTkuODksMy4yMzcsMjYuNTUzLDkuNzA4ICAgYzYuNjYxLDYuNDczLDEwLjA4OCwxNC42NTksMTAuMjc3LDI0LjU1NkMxMzcuODk5LDExNy42MjUsMTM0LjQ3NywxMjUuNzYxLDEyNy42MjYsMTMyLjMzMnogTTM3MC44NzMsMzY3LjE1N2gtNjUuOTUydi0xMDUuOTIgICBjMC0yOS44NzktMTEuMDM2LTQ0LjgyMy0zMy4xMTYtNDQuODIzYy04LjM3NCwwLTE1LjQyLDIuMzMxLTIxLjEyOCw2Ljk5NWMtNS43MTUsNC42NjEtOS45OTYsMTAuMzI0LTEyLjg0NywxNi45OTEgICBjLTEuMzM1LDMuNDIyLTEuOTk5LDguNzUtMS45OTksMTUuOTgxdjExMC43NzVoLTY1Ljk1MmMwLjU3MS0xMTkuNTI5LDAuNTcxLTE4NS41NzksMC0xOTguMTQyaDY1Ljk1MnYyNy45NzQgICBjMTMuODY3LTIxLjY4MSwzMy41NTgtMzIuNTQ0LDU5LjEwMS0zMi41NDRjMjIuODQsMCw0MS4yMSw3LjUyLDU1LjEwNCwyMi41NTRjMTMuODk1LDE1LjAzNywyMC44NDEsMzcuMjE0LDIwLjg0MSw2Ni41MTl2MTEzLjY0ICAgSDM3MC44NzN6IiBmaWxsPSIjM2UzZTNlIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==)
          }
          .icon-webpage {
            background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQwMi4wNDEgNDAyLjA0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDIuMDQxIDQwMi4wNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik01NC44MTYsMjkyLjM4MmMtMTUuMjI5LDAtMjguMTY5LDUuMzMxLTM4LjgzMSwxNS45ODhDNS4zMywzMTkuMDI2LDAsMzMxLjk2OSwwLDM0Ny4xOTcgICAgYzAsMTUuMjMyLDUuMzI1LDI4LjE3MiwxNS45ODUsMzguODI4YzEwLjY2MiwxMC42NTcsMjMuNjA2LDE1Ljk4OCwzOC44MzEsMTUuOTg4YzE1LjIyNywwLDI4LjE2OC01LjMzMSwzOC44MjgtMTUuOTg4ICAgIGMxMC42NTYtMTAuNjU2LDE1Ljk4Ni0yMy41OTYsMTUuOTg2LTM4LjgyOGMwLTE1LjIyOS01LjMzLTI4LjE3MS0xNS45ODYtMzguODI3QzgyLjk4NywyOTcuNzEzLDcwLjA0NiwyOTIuMzgyLDU0LjgxNiwyOTIuMzgyeiIgZmlsbD0iIzNlM2UzZSIvPgoJCTxwYXRoIGQ9Ik0xODEuMDEsMjIxLjAwMmMtMjEuNTEtMjEuNjk4LTQ2LjE1OC0zOC45Ny03My45NDgtNTEuODE2Yy0yNy43OS0xMi44NS01Ni45MTQtMjAuNTExLTg3LjM2Ni0yMi45ODVoLTEuNDI1ICAgIGMtNC45NDksMC05LjA0MiwxLjYxOS0xMi4yNzUsNC44NTRDMS45OTcsMTU0LjQ3NywwLDE1OC45NTMsMCwxNjQuNDcydjM4LjU0M2MwLDQuNzU3LDEuNTY5LDguODUsNC43MDgsMTIuMjc5ICAgIGMzLjE0LDMuNDI5LDcuMDg5LDUuMzMyLDExLjg0OCw1LjcwOGM0My41ODYsNC4xODksODAuODQ1LDIxLjc1MiwxMTEuNzczLDUyLjY3OGMzMC45MywzMC45MjYsNDguNDksNjguMTg3LDUyLjY3NywxMTEuNzcxICAgIGMwLjM4Miw0Ljc2NCwyLjI4NCw4LjcxMiw1LjcxMiwxMS44NDdjMy40MjcsMy4xNDgsNy41MTcsNC43MiwxMi4yNzUsNC43MmgzOC41NDVjNS41MTcsMCw5Ljk4OS0xLjk5NSwxMy40MTUtNS45OTYgICAgYzMuNjIxLTMuODEyLDUuMjM2LTguMzgxLDQuODYzLTEzLjcwOWMtMi40NzgtMzAuNDQ3LTEwLjE0LTU5LjU3My0yMi45ODctODcuMzYxQzIxOS45ODMsMjY3LjE2LDIwMi43MDgsMjQyLjUxNCwxODEuMDEsMjIxLjAwMnogICAgIiBmaWxsPSIjM2UzZTNlIi8+CgkJPHBhdGggZD0iTTM2Ny43MjgsMjM5LjcwMWMtMjAuMzY1LTQ1LjU4NS00OC4zNDUtODYuMDc4LTgzLjkzNi0xMjEuNDgyYy0zNS40MDUtMzUuNTk0LTc1Ljg5Ni02My41NzItMTIxLjQ4NS04My45MzkgICAgQzExNi43MjMsMTMuOTE3LDY4Ljk5NiwyLjQ5NCwxOS4xMjYsMC4wMmgtMC44NTVjLTQuOTQ5LDAtOS4xMzYsMS43MTMtMTIuNTYzLDUuMTRDMS45MDMsOC41ODMsMCwxMi45NjQsMCwxOC4yOTR2NDAuODI1ICAgIGMwLDQuNzYsMS42NjcsOC44OTcsNC45OTYsMTIuNDE5YzMuMzMsMy41MjMsNy4zNzMsNS4zNzYsMTIuMTMyLDUuNTdjNDAuOTI0LDIuNDc4LDc5Ljc5OSwxMi4xODgsMTE2LjYzLDI5LjEyNyAgICBjMzYuODMsMTYuOTQsNjguODA2LDM4Ljk3Miw5NS45Myw2Ni4wOWMyNy4xMTgsMjcuMTIzLDQ5LjE0OSw1OS4xMDEsNjYuMDg5LDk1LjkzMWMxNi45NCwzNi44MzYsMjYuNTU3LDc1LjcwNSwyOC44MzksMTE2LjYyNyAgICBjMC4xOTUsNC43NjQsMi4wNDYsOC44MDksNS41NjQsMTIuMTM5YzMuNTI0LDMuMzI5LDcuNzYyLDQuOTk5LDEyLjcxLDQuOTk5aDQwLjgyM2M1LjMzMSwwLDkuNzAxLTEuOTAyLDEzLjEzNC01LjcxNSAgICBjMy44MDktMy44MDYsNS41MTctOC4yNzQsNS4xNDQtMTMuNDE1QzM5OS41MiwzMzMuMDE3LDM4OC4wOTMsMjg1LjI5MSwzNjcuNzI4LDIzOS43MDF6IiBmaWxsPSIjM2UzZTNlIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==)
          }
          .icon-address {
            background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQ2MC4yOTggNDYwLjI5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDYwLjI5OCA0NjAuMjk3OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTIzMC4xNDksMTIwLjkzOUw2NS45ODYsMjU2LjI3NGMwLDAuMTkxLTAuMDQ4LDAuNDcyLTAuMTQ0LDAuODU1Yy0wLjA5NCwwLjM4LTAuMTQ0LDAuNjU2LTAuMTQ0LDAuODUydjEzNy4wNDEgICAgYzAsNC45NDgsMS44MDksOS4yMzYsNS40MjYsMTIuODQ3YzMuNjE2LDMuNjEzLDcuODk4LDUuNDMxLDEyLjg0Nyw1LjQzMWgxMDkuNjNWMzAzLjY2NGg3My4wOTd2MTA5LjY0aDEwOS42MjkgICAgYzQuOTQ4LDAsOS4yMzYtMS44MTQsMTIuODQ3LTUuNDM1YzMuNjE3LTMuNjA3LDUuNDMyLTcuODk4LDUuNDMyLTEyLjg0N1YyNTcuOTgxYzAtMC43Ni0wLjEwNC0xLjMzNC0wLjI4OC0xLjcwN0wyMzAuMTQ5LDEyMC45MzkgICAgeiIgZmlsbD0iIzNlM2UzZSIvPgoJCTxwYXRoIGQ9Ik00NTcuMTIyLDIyNS40MzhMMzk0LjYsMTczLjQ3NlY1Ni45ODljMC0yLjY2My0wLjg1Ni00Ljg1My0yLjU3NC02LjU2N2MtMS43MDQtMS43MTItMy44OTQtMi41NjgtNi41NjMtMi41NjhoLTU0LjgxNiAgICBjLTIuNjY2LDAtNC44NTUsMC44NTYtNi41NywyLjU2OGMtMS43MTEsMS43MTQtMi41NjYsMy45MDUtMi41NjYsNi41Njd2NTUuNjczbC02OS42NjItNTguMjQ1ICAgIGMtNi4wODQtNC45NDktMTMuMzE4LTcuNDIzLTIxLjY5NC03LjQyM2MtOC4zNzUsMC0xNS42MDgsMi40NzQtMjEuNjk4LDcuNDIzTDMuMTcyLDIyNS40MzhjLTEuOTAzLDEuNTItMi45NDYsMy41NjYtMy4xNCw2LjEzNiAgICBjLTAuMTkzLDIuNTY4LDAuNDcyLDQuODExLDEuOTk3LDYuNzEzbDE3LjcwMSwyMS4xMjhjMS41MjUsMS43MTIsMy41MjEsMi43NTksNS45OTYsMy4xNDJjMi4yODUsMC4xOTIsNC41Ny0wLjQ3Niw2Ljg1NS0xLjk5OCAgICBMMjMwLjE0OSw5NS44MTdsMTk3LjU3LDE2NC43NDFjMS41MjYsMS4zMjgsMy41MjEsMS45OTEsNS45OTYsMS45OTFoMC44NThjMi40NzEtMC4zNzYsNC40NjMtMS40Myw1Ljk5Ni0zLjEzOGwxNy43MDMtMjEuMTI1ICAgIGMxLjUyMi0xLjkwNiwyLjE4OS00LjE0NSwxLjk5MS02LjcxNkM0NjAuMDY4LDIyOS4wMDcsNDU5LjAyMSwyMjYuOTYxLDQ1Ny4xMjIsMjI1LjQzOHoiIGZpbGw9IiMzZTNlM2UiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)
          }
          .icon-email {
            background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDUxMS42MjYgNTExLjYyNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjYyNiA1MTEuNjI2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5LjEwNiwxNzguNzI5YzYuNDcyLDQuNTY3LDI1Ljk4MSwxOC4xMzEsNTguNTI4LDQwLjY4NWMzMi41NDgsMjIuNTU0LDU3LjQ4MiwzOS45Miw3NC44MDMsNTIuMDk5ICAgIGMxLjkwMywxLjMzNSw1Ljk0Niw0LjIzNywxMi4xMzEsOC43MWM2LjE4Niw0LjQ3NiwxMS4zMjYsOC4wOTMsMTUuNDE2LDEwLjg1MmM0LjA5MywyLjc1OCw5LjA0MSw1Ljg1MiwxNC44NDksOS4yNzcgICAgYzUuODA2LDMuNDIyLDExLjI3OSw1Ljk5NiwxNi40MTgsNy43YzUuMTQsMS43MTgsOS44OTgsMi41NjksMTQuMjc1LDIuNTY5aDAuMjg3aDAuMjg4YzQuMzc3LDAsOS4xMzctMC44NTIsMTQuMjc3LTIuNTY5ICAgIGM1LjEzNy0xLjcwNCwxMC42MTUtNC4yODEsMTYuNDE2LTcuN2M1LjgwNC0zLjQyOSwxMC43NTItNi41MiwxNC44NDUtOS4yNzdjNC4wOTMtMi43NTksOS4yMjktNi4zNzYsMTUuNDE3LTEwLjg1MiAgICBjNi4xODQtNC40NzcsMTAuMjMyLTcuMzc1LDEyLjEzNS04LjcxYzE3LjUwOC0xMi4xNzksNjIuMDUxLTQzLjExLDEzMy42MTUtOTIuNzljMTMuODk0LTkuNzAzLDI1LjUwMi0yMS40MTEsMzQuODI3LTM1LjExNiAgICBjOS4zMzItMTMuNjk5LDEzLjk5My0yOC4wNywxMy45OTMtNDMuMTA1YzAtMTIuNTY0LTQuNTIzLTIzLjMxOS0xMy41NjUtMzIuMjY0Yy05LjA0MS04Ljk0Ny0xOS43NDktMTMuNDE4LTMyLjExNy0xMy40MThINDUuNjc5ICAgIGMtMTQuNjU1LDAtMjUuOTMzLDQuOTQ4LTMzLjgzMiwxNC44NDRDMy45NDksNzkuNTYyLDAsOTEuOTM0LDAsMTA2Ljc3OWMwLDExLjk5MSw1LjIzNiwyNC45ODUsMTUuNzAzLDM4Ljk3NCAgICBDMjYuMTY5LDE1OS43NDMsMzcuMzA3LDE3MC43MzYsNDkuMTA2LDE3OC43Mjl6IiBmaWxsPSIjM2UzZTNlIi8+CgkJPHBhdGggZD0iTTQ4My4wNzIsMjA5LjI3NWMtNjIuNDI0LDQyLjI1MS0xMDkuODI0LDc1LjA4Ny0xNDIuMTc3LDk4LjUwMWMtMTAuODQ5LDcuOTkxLTE5LjY1LDE0LjIyOS0yNi40MDksMTguNjk5ICAgIGMtNi43NTksNC40NzMtMTUuNzQ4LDkuMDQxLTI2Ljk4LDEzLjcwMmMtMTEuMjI4LDQuNjY4LTIxLjY5Miw2Ljk5NS0zMS40MDEsNi45OTVoLTAuMjkxaC0wLjI4NyAgICBjLTkuNzA3LDAtMjAuMTc3LTIuMzI3LTMxLjQwNS02Ljk5NWMtMTEuMjI4LTQuNjYxLTIwLjIyMy05LjIyOS0yNi45OC0xMy43MDJjLTYuNzU1LTQuNDctMTUuNTU5LTEwLjcwOC0yNi40MDctMTguNjk5ICAgIGMtMjUuNjk3LTE4Ljg0Mi03Mi45OTUtNTEuNjgtMTQxLjg5Ni05OC41MDFDMTcuOTg3LDIwMi4wNDcsOC4zNzUsMTkzLjc2MiwwLDE4NC40Mzd2MjI2LjY4NWMwLDEyLjU3LDQuNDcxLDIzLjMxOSwxMy40MTgsMzIuMjY1ICAgIGM4Ljk0NSw4Ljk0OSwxOS43MDEsMTMuNDIyLDMyLjI2NCwxMy40MjJoNDIwLjI2NmMxMi41NiwwLDIzLjMxNS00LjQ3MywzMi4yNjEtMTMuNDIyYzguOTQ5LTguOTQ5LDEzLjQxOC0xOS42OTQsMTMuNDE4LTMyLjI2NSAgICBWMTg0LjQzN0M1MDMuNDQxLDE5My41NjksNDkzLjkyNywyMDEuODU0LDQ4My4wNzIsMjA5LjI3NXoiIGZpbGw9IiMzZTNlM2UiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K)
          }
          .icon-phone {
            background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQwMS45OTggNDAxLjk5OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDAxLjk5OCA0MDEuOTk4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQwMS4xMjksMzExLjQ3NWMtMS4xMzctMy40MjYtOC4zNzEtOC40NzMtMjEuNjk3LTE1LjEyOWMtMy42MS0yLjA5OC04Ljc1NC00Ljk0OS0xNS40MS04LjU2NiAgIGMtNi42NjItMy42MTctMTIuNzA5LTYuOTUtMTguMTMtOS45OTZjLTUuNDMyLTMuMDQ1LTEwLjUyMS01Ljk5NS0xNS4yNzYtOC44NDZjLTAuNzYtMC41NzEtMy4xMzktMi4yMzQtNy4xMzYtNSAgIGMtNC4wMDEtMi43NTgtNy4zNzUtNC44MDUtMTAuMTQtNi4xNGMtMi43NTktMS4zMjctNS40NzMtMS45OTUtOC4xMzgtMS45OTVjLTMuODA2LDAtOC41NiwyLjcxNC0xNC4yNjgsOC4xMzUgICBjLTUuNzA4LDUuNDI4LTEwLjk0NCwxMS4zMjQtMTUuNywxNy43MDZjLTQuNzU3LDYuMzc5LTkuODAyLDEyLjI3NS0xNS4xMjYsMTcuN2MtNS4zMzIsNS40MjctOS43MTMsOC4xMzgtMTMuMTM1LDguMTM4ICAgYy0xLjcxOCwwLTMuODYtMC40NzktNi40MjctMS40MjRjLTIuNTY2LTAuOTUxLTQuNTE4LTEuNzY2LTUuODU4LTIuNDIzYy0xLjMyOC0wLjY3MS0zLjYwNy0xLjk5OS02Ljg0NS00LjAwNCAgIGMtMy4yNDQtMS45OTktNS4wNDgtMy4wOTQtNS40MjgtMy4yODVjLTI2LjA3NS0xNC40NjktNDguNDM4LTMxLjAyOS02Ny4wOTMtNDkuNjc2Yy0xOC42NDktMTguNjU4LTM1LjIxMS00MS4wMTktNDkuNjc2LTY3LjA5NyAgIGMtMC4xOS0wLjM4MS0xLjI4Ny0yLjE5LTMuMjg0LTUuNDI0Yy0yLTMuMjM3LTMuMzMzLTUuNTE4LTMuOTk5LTYuODU0Yy0wLjY2Ni0xLjMzMS0xLjQ3NS0zLjI4My0yLjQyNS01Ljg1MiAgIHMtMS40MjctNC43MDktMS40MjctNi40MjRjMC0zLjQyNCwyLjcxMy03LjgwNCw4LjEzOC0xMy4xMzRjNS40MjQtNS4zMjcsMTEuMzI2LTEwLjM3MywxNy43LTE1LjEyOCAgIGM2LjM3OS00Ljc1NSwxMi4yNzUtOS45OTEsMTcuNzAxLTE1LjY5OWM1LjQyNC01LjcxMSw4LjEzNi0xMC40NjcsOC4xMzYtMTQuMjczYzAtMi42NjMtMC42NjYtNS4zNzgtMS45OTctOC4xMzcgICBjLTEuMzMyLTIuNzY1LTMuMzc4LTYuMTM5LTYuMTM5LTEwLjEzOGMtMi43NjItMy45OTctNC40MjctNi4zNzQtNC45OTktNy4xMzljLTIuODUyLTQuNzU1LTUuNzk5LTkuODQ2LTguODQ4LTE1LjI3MSAgIGMtMy4wNDktNS40MjQtNi4zNzctMTEuNDctOS45OTUtMTguMTMxYy0zLjYxNS02LjY1OC02LjQ2OC0xMS43OTktOC41NjQtMTUuNDE1Qzk4Ljk4Niw5LjIzMyw5My45NDMsMS45OTcsOTAuNTE2LDAuODU5ICAgQzg5LjE4MywwLjI4OCw4Ny4xODMsMCw4NC41MjEsMGMtNS4xNDIsMC0xMS44NSwwLjk1LTIwLjEyOSwyLjg1NmMtOC4yODIsMS45MDMtMTQuNzk5LDMuODk5LTE5LjU1OCw1Ljk5NiAgIGMtOS41MTcsMy45OTUtMTkuNjA0LDE1LjYwNS0zMC4yNjQsMzQuODI2QzQuODYzLDYxLjU2NiwwLjAxLDc5LjI3MSwwLjAxLDk2Ljc4YzAsNS4xMzUsMC4zMzMsMTAuMTMxLDAuOTk5LDE0Ljk4OSAgIGMwLjY2Niw0Ljg1MywxLjg1NiwxMC4zMjYsMy41NzEsMTYuNDE4YzEuNzEyLDYuMDksMy4wOTMsMTAuNjE0LDQuMTM3LDEzLjU2YzEuMDQ1LDIuOTQ4LDIuOTk2LDguMjI5LDUuODUyLDE1Ljg0NSAgIGMyLjg1Miw3LjYxNCw0LjU2NywxMi4yNzUsNS4xMzgsMTMuOTg4YzYuNjYxLDE4LjY1NCwxNC41NiwzNS4zMDcsMjMuNjk1LDQ5Ljk2NGMxNS4wMywyNC4zNjIsMzUuNTQxLDQ5LjUzOSw2MS41MjEsNzUuNTIxICAgYzI1Ljk4MSwyNS45OCw1MS4xNTMsNDYuNDksNzUuNTE3LDYxLjUyNmMxNC42NTUsOS4xMzQsMzEuMzE0LDE3LjAzMiw0OS45NjUsMjMuNjk4YzEuNzE0LDAuNTY4LDYuMzc1LDIuMjc5LDEzLjk4Niw1LjE0MSAgIGM3LjYxNCwyLjg1NCwxMi44OTcsNC44MDUsMTUuODQ1LDUuODUyYzIuOTQ5LDEuMDQ4LDcuNDc0LDIuNDMsMTMuNTU5LDQuMTQ1YzYuMDk4LDEuNzE1LDExLjU2NiwyLjkwNSwxNi40MTksMy41NzYgICBjNC44NTYsMC42NTcsOS44NTMsMC45OTYsMTQuOTg5LDAuOTk2YzE3LjUwOCwwLDM1LjIxNC00Ljg1Niw1My4xMDUtMTQuNTYyYzE5LjIxOS0xMC42NTYsMzAuODI2LTIwLjc0NSwzNC44MjMtMzAuMjY5ICAgYzIuMTAyLTQuNzU0LDQuMDkzLTExLjI3Myw1Ljk5Ni0xOS41NTVjMS45MDktOC4yNzgsMi44NTctMTQuOTg1LDIuODU3LTIwLjEyNkM0MDEuOTksMzE0LjgxNCw0MDEuNzAzLDMxMi44MTksNDAxLjEyOSwzMTEuNDc1eiIgZmlsbD0iIzNlM2UzZSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)
          }
        </style>
        <!--
          Stylesheet
            Letter size: 8.5 by 11 inches
            A4 size: 210 by 297 millimiters
        -->
        <style type="text/css">
          html {
            background-color: #525659;
            padding: 50px;
          }
          body {
            background-color: white;
            width: 8.5in;
            height: 11in;
            margin-left: auto;
            margin-right: auto;
            margin-top: 0;
            margin-bottom: 0;
            font-family:  'Source Sans Pro', sans-serif;
            color: #3E3E3E;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.8);
          }
          @media print {
            html {
              background-color: white;
              padding: 0;
            }
            body {
              box-shadow: none;
            }
          }
          h1,
          h2,
          h3 {
            margin: 0;
          }
          a {
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .resume {
            padding-top: 45px;
            padding-bottom: 45px;
            padding-left: 60px;
            padding-right: 60px;
          }
          .resume-header {
            width: 100%;
          }
          .header-presentation {
            width: 45%;
            float: left;
          }
          .presentation-name {
            font-size: 22pt;
            font-weight: 600;
            color: #3E3E3E;
          }
          .presentation-label {
            font-size: 16pt;
            font-style: italic;
            font-weight: 400;
            color: #3E3E3E;
          }
          .header-contact {
            float: right;
            text-align: right;
            width: 55%;
            padding-top: 5px;
            font-size: 9pt;
          }
          .header-contact span {
            display: inline-block;
            vertical-align: middle;
            padding-top: 5px;
            margin-left: 5px;
            color: #3E3E3E;
          }
          .header-contact a {
            color: #3E3E3E;
          }
          .icon {
            display: inline-block;
            vertical-align: middle;
            width: 9pt;
            height: 9pt;
            margin-right: 1pt;
            margin-left: 1.5pt;
            background-size: contain;
          }
          .resume-content {
            margin-top: 11px;
            float: left;
            clear: both;
          }
          .content-introduction {
            margin-bottom: 10px;
          }
          .content-section {
            width: 100%;
          }
          .section-header {
            width: 100%;
            letter-spacing: +1.5px;
            margin-bottom: -3px;
            margin-top: -3px;
            float: left;
            clear: none;
            font-size: 13pt;
            font-weight: 900;
            text-transform: uppercase;
          }
          .section-header span {
            background-color: white;
          }
          .section-header span:after {
            content: "";
            display: block;
            height: 13pt;
            border-top: 3px solid #3E3E3E;
            margin-top: -9pt;
            margin-bottom: -7pt;
            z-index: -1;
          }
          .section-content {
            float: left;
            width: 100%;
            margin-top: 3px;
            margin-bottom: 5px;
          }
          .entry-header,
          .content-introduction {
            font-size: 11pt;
          }
          .entry-when,
          .entry-location {
            font-size: 10.75pt;
          }
          .entry-detail,
          .entry-description {
            font-size: 10pt;
          }
          .content-entry {
            width: 100%;
            clear: left;
            float: left;
            margin-bottom: 3px;
          }
          .entry-header {
            width: 100%;
            clear: both;
          }
          .entry-what {
            color: #252525;
            font-weight: 600;
            float: left;
          }
          .entry-what a {
            color: #252525;
          }
          .entry-when,
          .entry-location {
            float: right;
            clear: right;
          }
          .entry-location {
            font-style: italic;
          }
          .entry-where {
            color: #252525;
            float: left;
            clear: both;
            display: block;
            font-weight: 600;
          }
          .entry-when ~ .entry-what {
            font-size: 10.5pt;
            font-weight: 400;
            clear: left;
          }
          .entry-description {
            clear: both;
            float: left;
          }
          .entry-detail {
            clear: both;
            float: left;
          }
        </style>
        <!-- Page title -->
        <title>Name Lastname - Resume</title>
      </head>
      <body>
        <div class="resume">
          <!-- Resume header -->
          <header class="resume-header">
            <div class="header-presentation">
              <h1 class="presentation-name">${personDetail.firstName} ${
    personDetail.lastName
  }</h1>
              <h3 >${jobPosition}</h3>
            </div>
            <!-- Contact information -->
            <div class="header-contact">
                <span><i class="icon icon-webpage"></i> <a href="">${
                  personDetail.website
                }</a></span>
                <span><i class="icon icon-address"> </i>${personDetail.city}, ${
    personDetail.country
  }</span>
                <span><i class="icon icon-email"></i> <a href="">${
                  personDetail.email
                }</a></span>
                <span><i class="icon icon-phone"></i> ${
                  personDetail.phone
                }</span>
            </div>
          </header>
          <!-- Resume content -->
          <div class="resume-content">
              <!-- Summary paragraph -->
              <div class="content-introduction">
              ${userSummary}
              </div>
            <!-- Sections -->
              <div class="content-section">
               
                    ${renderEducation()}
                    
                
              </div>
              <br/>
              ${renderCertificate()}
              <br/>
              ${renderAwards()}
              <br/>
              ${renderReferences()}
              <br/>
              <div class="content-section">

            
                    ${renderExperience()}
                    
                
                <br/>
              </div>
          
              <div class="content-section">
                     ${renderSkills()}
                     <br/>
                    ${renderHobbies()}
              </div>
              
          </div>
        </div>
      </body>
    </html>
     `;
}
