import { AppTitles } from "./AppTitles";

export class AppContent {
  static letsGetStarted = AppTitles.letsGetStarted();
  static fullNameSubtitle = AppTitles.fullNameSubtitle();
  static personalInfoSubtitle = AppTitles.personalInfoSubtitle();
  static educationTitle = AppTitles.educationTitle();
  static educationSubtitle = AppTitles.educationSubtitle();
  static skillsTitle = AppTitles.skillsTitle();
  static skillsSubtitle = AppTitles.skillsSubtitle();
  static workExperienceTitle = AppTitles.workExperienceTitle();
  static workExperienceSubtitle = AppTitles.workExperienceSubtitle();
  static summaryTitle = AppTitles.summaryTitle();
  static summarySubtitle = AppTitles.summarySubtitle();
  static certificatesTitle = AppTitles.certificatesTitle();
  static certificatesSubtitle = AppTitles.certificatesSubtitle();
  static awardsTitle = AppTitles.awardsTitle();
  static awardsSubtitle = AppTitles.awardsSubtitle();
  static referenceSubtitle = AppTitles.referenceSubtitle();
  static hobbiesTitle = AppTitles.hobbiesTitle();
  static hobbiesSubtitle = AppTitles.hobbiesSubtitle();

  static random = () => {
    console.log("rotated titles");
    AppContent.letsGetStarted = AppTitles.letsGetStarted();
    AppContent.fullNameSubtitle = AppTitles.fullNameSubtitle();
    AppContent.personalInfoSubtitle = AppTitles.personalInfoSubtitle();
    AppContent.educationTitle = AppTitles.educationTitle();
    AppContent.educationSubtitle = AppTitles.educationSubtitle();
    AppContent.skillsTitle = AppTitles.skillsTitle();
    AppContent.skillsSubtitle = AppTitles.skillsSubtitle();
    AppContent.workExperienceTitle = AppTitles.workExperienceTitle();
    AppContent.workExperienceSubtitle = AppTitles.workExperienceSubtitle();
    AppContent.summaryTitle = AppTitles.summaryTitle();
    AppContent.summarySubtitle = AppTitles.summarySubtitle();
    AppContent.certificatesTitle = AppTitles.certificatesTitle();
    AppContent.certificatesSubtitle = AppTitles.certificatesSubtitle();
    AppContent.awardsTitle = AppTitles.awardsTitle();
    AppContent.awardsSubtitle = AppTitles.awardsSubtitle();
    AppContent.referenceSubtitle = AppTitles.referenceSubtitle();
    AppContent.hobbiesTitle = AppTitles.hobbiesTitle();
    AppContent.hobbiesSubtitle = AppTitles.hobbiesSubtitle();
  };
}
