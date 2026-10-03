import fs from 'fs';
import { hi, mr, gu, pa } from './lang_data/hi_mr_gu_pa.js';
import { ta, te, kn, ml } from './lang_data/ta_te_kn_ml.js';
import { bn, as, or, mai } from './lang_data/bn_as_or_mai.js';
import { ur, ks, sd } from './lang_data/ur_ks_sd.js';
import { sa, ne, kok, doi, brx } from './lang_data/sa_ne_kok_doi_brx.js';
import { sat, mni } from './lang_data/sat_mni.js';

export const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'mr', label: 'मराठी' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'ur', label: 'اردو', dir: 'rtl' },
  { code: 'gu', label: 'ગુજરાતી' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'മലയാളം' },
  { code: 'or', label: 'ଓଡ଼ିଆ' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ' },
  { code: 'as', label: 'অসমীয়া' },
  { code: 'mai', label: 'मैथिली' },
  { code: 'sat', label: 'ᱥᱟᱱᱛᱟᱲᱤ' },
  { code: 'ks', label: 'کٲشُر', dir: 'rtl' },
  { code: 'ne', label: 'नेपाली' },
  { code: 'sd', label: 'سنڌي', dir: 'rtl' },
  { code: 'kok', label: 'कोंकणी' },
  { code: 'doi', label: 'डोगरी' },
  { code: 'mni', label: 'ꯃꯤꯇꯩꯂꯣꯟ' },
  { code: 'brx', label: 'बड़ो' },
  { code: 'sa', label: 'संस्कृतम्' }
];

export const en = {
  // Navigation
  navHome: 'HOME',
  navSelfDeclaration: 'SELF-DECLARATION',
  navCandidate: 'CANDIDATE',
  navAssessor: 'ASSESSOR',
  govtInitiative: 'Government of India Initiative',
  ministryName: 'Ministry of Skill Development & Entrepreneurship',
  rplAiAssessment: 'RPL AI Assessment',

  // Landing Hero & Badges
  heroTitle: 'Get your skills certified',
  heroSub: 'For workers who learned on the job. No formal education required.',
  portfolioHeroH1_1: 'Assess skills.',
  portfolioHeroH1_2: 'Certify',
  portfolioHeroH1_3: ' experience.',
  portfolioHeroH1_4: 'Scale RPL.',
  startAssessment: 'Start Assessment',
  assessorLogin: 'Assessor Login',
  makeItClear: '01 — MAKE IT CLEAR',
  buildShapeShip: 'BUILD / SHAPE / SHIP',

  // Ticker
  tickerAiAssisted: 'AI-ASSISTED RPL',
  tickerNsqf: 'NSQF ALIGNED',
  tickerHumanLoop: 'HUMAN-IN-THE-LOOP',
  tickerRegional: '22 INDIAN LANGUAGES',
  tickerOffline: 'OFFLINE-FIRST SYNC',
  tickerMinistry: 'MINISTRY OF SKILL DEVELOPMENT',

  // Work Section (Portfolio)
  ourWork: 'OUR WORK',
  work1Title: 'Guided Experience Mapping',
  work1Desc: 'Conversational UI for workers to declare skills in any language.',
  work2Title: 'Video & Image Assessment',
  work2Desc: 'Visual evidence collection for hands-on, non-text evaluation.',
  work3Title: 'Standardised Scoring',
  work3Desc: 'Consistent rubric mapping to NSQF standards for human assessors.',
  work4Title: 'Low-Connectivity Ready',
  work4Desc: 'Stores data locally on device until internet is restored.',
  tagSelfDecl: 'Self Declaration',
  tagAiAssist: 'AI Assisted',
  tagPractical: 'Practical Aids',
  tagMedia: 'Media Capture',
  tagAssessor: 'Assessor Support',
  tagNsqf: 'NSQF Standards',
  tagOffline: 'Offline First',
  tagSync: 'Auto Sync',

  // Government Features
  feat1Title: 'Speak your experience',
  feat1Desc: 'Use voice input in your own regional language',
  feat2Title: 'Show your work',
  feat2Desc: 'Upload photos, videos, and work proofs easily',
  feat3Title: 'Matched to NSQF',
  feat3Desc: 'AI maps your practical skills to national standards',
  feat4Title: 'Human assessor decides',
  feat4Desc: 'AI suggests scores, certified expert makes final call',
  howItWorks: 'How it works',
  howItWorksSub: 'Three simple steps. No complicated forms or exams.',
  step1Title: 'Tell us about yourself',
  step1Desc: 'Pick your trade. Speak about your daily experience in any language. Answer simple guided questions.',
  step2Title: 'Show your work',
  step2Desc: 'Take photos of items you made or repaired. Record a short video. Upload any previous trade letters.',
  step3Title: 'Get assessed',
  step3Desc: 'AI prepares skill matches. A certified assessor reviews your evidence and issues national recognition.',

  // CTA Banner
  ctaBannerTitlePortfolio: 'Certify the skills India already has.',
  ctaBannerTitleGovt: "India's workforce has the skills. Let's certify them.",
  ctaBannerSub: 'Designed for informal workers — even without internet or schooling.',
  beginSelfDeclaration: 'Begin Self-Declaration',

  // Candidate Dashboard
  welcomeCandidate: 'Welcome, Ramesh 👋',
  candidateId: 'Candidate ID: RPL-2024-8842',
  allSynced: 'All synced',
  newDeclaration: 'New Declaration',
  newDeclarationSub: 'Start a new skill mapping',
  uploadEvidence: 'Upload Evidence',
  uploadEvidenceSub: 'Add photos or videos',
  viewCertificate: 'View Certificate',
  viewCertificateSub: 'Download your NSQF certificate',
  yourApplications: 'Your Applications',
  underReview: 'Under Review',
  needMoreInfo: 'Need more information',
  certified: 'Certified',
  nsqfLevel: 'NSQF Level',
  submittedAgo: 'Submitted 2 days ago',
  assessorReviewing: 'Assessor is reviewing your evidence…',
  needClearerVideo: 'Assessor needs a clearer video of wiring safety check.',
  details: 'Details',
  uploadNow: 'Upload Now',
  downloadPdf: 'Download PDF',
  worksWithoutInternet: 'Works without internet',
  worksWithoutInternetSub: "View your applications and start new ones even offline. Everything syncs when you're back online.",

  // Assessor Dashboard
  pendingReview: 'Pending Review',
  searchCandidate: 'Search candidate…',
  aiDisclaimer: 'AI supports scoring. You, the human assessor, make the final certification decision.',
  photos: 'Photos',
  video: 'Video',
  aiSuggestion: 'AI Suggestion',
  competent: 'Competent',
  needsReview: 'Needs Review',
  lowMatch: 'Low Match',
  yes: 'Yes',
  partial: 'Partial',
  no: 'No',
  saveDraft: 'Save Draft',
  notYetCompetent: 'Not Yet Competent',
  requestEvidence: 'Request Additional Evidence',
  recommendCert: 'Recommend Certification',

  // Self-Declaration Form
  selfDeclaration: 'Self-Declaration',
  selfDeclarationSub: 'Tell us about your skills — in your own words.',
  offlineReady: 'Offline Ready',
  step: 'Step',
  of: 'of',
  yourTrade: 'Your Trade',
  experience: 'Experience',
  evidence: 'Evidence',
  result: 'Result',
  whatWork: 'What work do you do?',
  tapPicture: 'Tap the picture that matches your work.',
  tellAboutWork: 'Tell us about your work',
  pressAndSpeak: 'Press and speak',
  speakAnyLang: 'Speak in any language',
  listening: '🔴 Listening… speak now',
  howManyYears: 'How many years have you been doing this work?',
  whatTools: 'What tools do you use?',
  whatKindWork: 'What kind of work do you usually do?',
  whereWork: 'Where do you work?',
  showYourWork: 'Show your work',
  evidenceSub: 'Photos and videos help the assessor see your skills.',
  takePhoto: 'Take Photo',
  takePhotoSub: 'of your work',
  recordVideo: 'Record Video',
  recordVideoSub: 'a short clip',
  uploadPaper: 'Upload Paper',
  uploadPaperSub: 'certificate or letter',
  dragFiles: 'Or drag files here',
  fileTypes: 'JPG, PNG, MP4, PDF — up to 50 MB',
  offlineUpload: 'You can do this without internet.',
  offlineUploadSub: "Files save on your phone and upload when you're back online.",
  suggestedMatch: 'Suggested Match',
  match: 'Match',
  humanReview: 'A human assessor will review and decide.',
  humanReviewSub: 'This is only a suggestion from the computer. A certified assessor will review your profile, watch your videos, and make the final decision.',
  back: 'Back',
  next: 'Next',
  submit: 'Submit',
  orTypeBelow: 'Press the button and speak. Or type below.',

  // Trades
  electrician: 'Electrician',
  plumber: 'Plumber',
  welder: 'Welder',
  carpenter: 'Carpenter',
  mason: 'Mason',
  tailor: 'Tailor',
  cook: 'Cook',
  driver: 'Driver',
  other: 'Other',

  // Self-Decl Questions
  performBasicWork: 'Perform basic trade work',
  readDrawings: 'Read simple drawings or specifications',
  followSafety: 'Follow workshop safety rules',

  // Footer
  footerDesc: 'AI-Assisted Skill Assessment Tool for Recognition of Prior Learning under the Smart India Hackathon.',
  sponsoredBy: 'Sponsored by',
  msdeFullName: 'Ministry of Skill Development & Entrepreneurship (MSDE)',
  ncvetFullName: 'National Council for Vocational Education & Training (NCVET)',
  project: 'Project',
  problemId: 'Problem ID: SIH26242',
  themeSmartEdu: 'Theme: Smart Education',
  categorySoftware: 'Category: Software',
  footerCopyright: "© 2026 RPL AI Assessment Tool — Built for India's skilled workforce"
};

const allLangsMap = {
  en,
  hi,
  bn,
  te,
  mr,
  ta,
  ur,
  gu,
  kn,
  ml,
  or,
  pa,
  as,
  mai,
  sat,
  ks,
  ne,
  sd,
  kok,
  doi,
  mni,
  brx,
  sa
};

// Check completeness
const enKeys = Object.keys(en);
console.log(`Verifying ${LANGS.length} languages against ${enKeys.length} English keys...`);

let issues = 0;
for (const l of LANGS) {
  const dict = allLangsMap[l.code];
  if (!dict) {
    console.error(`Missing language map for ${l.code}`);
    issues++;
    continue;
  }
  const missing = enKeys.filter(k => dict[k] === undefined || dict[k] === null || dict[k] === '');
  if (missing.length > 0) {
    console.warn(`[${l.code}] ${l.label} has ${missing.length} missing keys:`, missing.slice(0, 5));
    // Fallback to en for safety
    for (const mk of missing) {
      dict[mk] = en[mk];
    }
  }
}

console.log(`Validation complete. Writing to src/i18n/translations.js...`);

const outputContent = `// Autogenerated comprehensive 22 Indian Languages + English translations for SIH26242 RPL Tool
export const LANGS = ${JSON.stringify(LANGS, null, 2)};

export const TRANSLATIONS = ${JSON.stringify(allLangsMap, null, 2)};

export function t(langOrKey, maybeKey) {
  if (maybeKey !== undefined) {
    const lang = langOrKey;
    const key = maybeKey;
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) return TRANSLATIONS[lang][key];
    if (TRANSLATIONS['en'] && TRANSLATIONS['en'][key]) return TRANSLATIONS['en'][key];
    return key;
  }
  const key = langOrKey;
  if (TRANSLATIONS['en'] && TRANSLATIONS['en'][key]) return TRANSLATIONS['en'][key];
  return key;
}
`;

fs.writeFileSync('src/i18n/translations.js', outputContent, 'utf-8');
console.log('SUCCESS: Generated src/i18n/translations.js successfully!');
