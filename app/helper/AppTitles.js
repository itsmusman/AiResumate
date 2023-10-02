export class AppTitles {
  static letsGetStarted = () => {
    const startingPhrases = [
      "Let's begin",
      "Let's kick off",
      "Let's dive in",
      "Let's commence",
      "Let's initiate",
      "Let's get the ball rolling",
      "Let's start off",
      "Let's embark on",
      "Let's set things in motion",
      "Let's get started",
    ];
    const randomIndex = Math.floor(Math.random() * startingPhrases.length);
    return startingPhrases[randomIndex];
  };

  static fullNameSubtitle = () => {
    const sentenceOptions = [
      "Kindly enter your full name, and let's begin creating your resume.",
      "Please provide your complete name to start building your resume.",
      "We're excited to help you create your resume! Please enter your full name.",
      "Let's start building your resume together! Please provide your full name.",
      "Enter your full name and let's get started on your professional resume.",
      "Please enter your full name, and let's start creating your resume.",
      "Kindly provide your full name to begin building your resume.",
      "To get started, please enter your full name in the field below.",
      "Please enter your full name to initiate the resume creation process.",
      "Let's begin creating your resume! Please enter your full name.",
    ];
    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static personalInfoSubtitle = () => {
    const sentenceOptions = [
      "Kindly fill in your basic information in the provided fields.",
      "Please enter your basic details in the designated fields.",
      "We kindly request you to provide your essential information in the respective fields.",
      "To get started, please provide your basic information in the given fields.",
      "Please complete the required fields with your basic information.",
      "Please provide your basic information by filling in the following fields.",
      "Kindly enter your basic information into the following fields.",
      "Please provide your basic details in the required fields.",
      "We kindly request you to fill in the necessary information below.",
      "To get started, please enter your basic information in the provided fields.",
      "Let's begin by filling out the required fields with your basic information.",
    ];
    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static educationTitle = () => {
    const sentenceOptions = [
      "Educational Background",
      "Academic Qualifications",
      "Scholarly Achievements",
      "Academic Credentials",
      "Educational History",
      "Academic Profile",
      "Academic Experience",
      "Educational Accomplishments",
      "Academic Training",
      "Educational Summary",
    ];
    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static educationSubtitle = () => {
    const sentenceOptions = [
      "Enter your educational background, including degrees and certifications.",
      "Provide details on your academic qualifications, such as your major and minor fields of study.",
      "List any notable scholarly achievements, such as publications or awards.",
      "Include information on any relevant academic credentials or licenses you hold.",
      "Provide a brief overview of your educational history, including any significant achievements.",
      "Summarize your academic profile, including your research interests and academic goals.",
      "Detail your academic experience, such as teaching or research positions you've held.",
      "Highlight any notable educational accomplishments, such as projects or presentations.",
      "List any relevant academic training you've received, such as workshops or conferences.",
      "Provide a concise summary of your educational background and qualifications.",
    ];
    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static skillsTitle = () => {
    const sentenceOptions = [
      "Technical Skills",
      "Soft Skills",
      "Industry-Specific Skills",
      "Creative Skills",
      "Organizational Skills",
    ];
    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static skillsSubtitle = () => {
    const sentenceOptions = [
      "Select your desired skills from the list of options below",
      "Please choose the skills that best match your experience and qualifications",
      "Indicate your proficiency levels for the following skills",
      "Check the skills that apply to your work experience",
      "Please select your strongest skills from the following list",
      "Choose the skills that you would like to showcase in your resume",
      "Select your desired skills from the options below",
      "Choose the skills that best match your experience and qualifications",
      "Indicate your proficiency level for each skill selected",
      "Please select at least 3 skills from the following list",
      "Use the checkboxes to select the skills you possess",
      "Which of the following skills are you proficient in?",
    ];
    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static workExperienceTitle = () => {
    const sentenceOptions = [
      "Professional Experience",
      "Employment History",
      "Career Background",
      "Job Experience",
      "Work History",
      "Job Accomplishments",
      "Workplace Expertise",
      "Industry Experience",
      "Professional Background",
    ];
    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static workExperienceSubtitle = () => {
    const sentenceOptions = [
      "Enter your relevant professional experience and accomplishments.",
      "Provide details on your employment history and job duties.",
      "Detail your career background and notable achievements.",
      "List any relevant job experience and responsibilities.",
      "Summarize your work history and significant accomplishments.",
      "Describe your workplace expertise and industry experience.",
      "Highlight your career achievements and notable projects.",
      "Provide an overview of your professional background and accomplishments.",
    ];
    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static summaryTitle = () => {
    const sentenceOptions = [
      "Professional Summary",
      "Career Summary",
      "Personal Statement",
      "Objective",
      "About Me",
      "Summary of Qualifications",
      "Profile Summary",
      "Skills Summary",
      "Introduction",
      "Career Overview",
    ];
    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static summarySubtitle = () => {
    const sentenceOptions = [
      "Provide a brief overview of your professional background and key qualifications.",
      "Summarize your career experience and notable achievements.",
      "Introduce yourself and provide a brief overview of your personal and professional background.",
      "Describe your career objectives and goals.",
      "Provide a summary of your key qualifications and skills.",
      "Provide an overview of your professional profile and accomplishments.",
      "Summarize your top skills and areas of expertise.",
      "Introduce yourself and your career aspirations.",
      "Highlight your career achievements and objectives.",
      "Provide a brief summary of your professional experience and background.",
    ];
    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static certificatesTitle = () => {
    const sentenceOptions = [
      "Certifications",
      "Licenses",
      "Professional Development",
      "Training",
      "Certificate",
      "Credentials",
      "Certification and Licenses",
      "Certifications and Training",
      "Certification and Education",
      "Certifications and Credentials",
    ];
    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static certificatesSubtitle = () => {
    const sentenceOptions = [
      "List any relevant certifications, licenses or professional development courses you have completed.",
      "Provide details about any training programs you have completed that are relevant to your profession.",
      "List your educational background and any degrees or diplomas you have earned.",
      "Include any relevant credentials, such as professional affiliations or memberships.",
      "Highlight any specialized certifications or licenses that you hold.",
      "List your certifications and licenses, as well as any relevant training or education.",
      "Provide a comprehensive list of all of your certifications and licenses, as well as any relevant training or education.",
      "Include details about any specialized certification programs or training you have completed.",
      "List any relevant education, certifications or credentials you have earned.",
      "Provide a detailed list of your education, certifications, and credentials.",
    ];
    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static awardsTitle = () => {
    const sentenceOptions = [
      "Recognitions",
      "Honors",
      "Achievements",
      "Distinctions",
      "Accolades",
      "Prizes",
      "Accomplishments",
    ];
    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static awardsSubtitle = () => {
    const sentenceOptions = [
      "Recognition for exceptional work",
      "Achievement in a specific project or task",
      "Leadership or team contribution",
      "Innovation or creative problem-solving",
      "Community service or volunteer work",
      "Academic or research excellence",
      "Industry or professional association recognition",
      "Customer service or sales performance",
      "Special commendation or citation",
      "Outstanding performance or contribution to the company",
    ];

    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static referenceSubtitle = () => {
    const sentenceOptions = [
      "List of professional contacts who can vouch for your work experience and skills.",
      "List of personal contacts who can vouch for your character and personal qualities.",
      "List of individuals who can attest to your moral and ethical values.",
      "List of academic contacts who can vouch for your academic achievements and skills.",
      "List of past employers who can vouch for your work experience and skills.",
    ];

    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static hobbiesTitle = () => {
    const sentenceOptions = [
      "Interests",
      "Extracurricular Activities",
      "Personal Pursuits",
      "Hobbies",
      "Leisure Activities",
    ];

    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };

  static hobbiesSubtitle = () => {
    const sentenceOptions = [
      "Select your interests from the list of given options",
      "Select your hobbies from the following options",
      "Please list any hobbies that showcase your skills or personality",
      "List some of your favorite leisure activities or hobbies",
      "Share some hobbies that demonstrate your ability to work in a team",
      "Provide some hobbies that highlight your leadership or creativity",
    ];

    const randomIndex = Math.floor(Math.random() * sentenceOptions.length);
    return sentenceOptions[randomIndex];
  };
}
