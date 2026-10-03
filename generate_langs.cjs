const fs = require('fs');
const content = fs.readFileSync('src/i18n/translations.js', 'utf8');

const langs = [
  { code: 'mr', name: 'मराठी' },
  { code: 'ur', name: 'اردو' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'or', name: 'ଓଡ଼ିଆ' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'as', name: 'অসমীয়া' },
  { code: 'mai', name: 'मैथिली' },
  { code: 'sat', name: 'ᱥᱟᱱᱛᱟᱲᱤ' },
  { code: 'ks', name: 'کأشُر' },
  { code: 'ne', name: 'नेपाली' },
  { code: 'sd', name: 'سنڌي' },
  { code: 'kok', name: 'कोंकणी' },
  { code: 'doi', name: 'डोगरी' },
  { code: 'mni', name: 'ꯃꯤꯇꯩꯂꯣꯟ' },
  { code: 'brx', name: 'बड़ो' },
  { code: 'sa', name: 'संस्कृतम्' }
];

const enKeys = {
    heroTitle: 'Get your skills certified',
    heroSub: 'For workers who learned on the job. No formal education required.',
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
    offlineUploadSub: 'Files save on your phone and upload when you are back online.',
    suggestedMatch: 'Suggested Match',
    aiSuggestion: 'AI Suggestion',
    match: 'match',
    humanReview: 'A human assessor will review and decide.',
    humanReviewSub: 'This is only a suggestion from the computer. A certified assessor will review your profile, watch your videos, and make the final decision.',
    back: 'Back',
    next: 'Next',
    submit: 'Submit',
    orTypeBelow: 'Press the button and speak. Or type below.',
    electrician: 'Electrician',
    plumber: 'Plumber',
    welder: 'Welder',
    carpenter: 'Carpenter',
    mason: 'Mason',
    tailor: 'Tailor',
    cook: 'Cook',
    driver: 'Driver',
    other: 'Other',
    performBasicWork: 'Perform basic electrical work',
    readDrawings: 'Read simple drawings',
    followSafety: 'Follow safety rules',
};

// Assuming translations.js ends with `};\n\nexport function t(...)` or similar.
// Wait, the file has `};\n\nexport function t(lang, key)` at line 229.
// So let's replace `};\n\nexport function t` with the new languages and then `};\n\nexport function t`
let output = content.replace(/};\s*export function t/, '');

for (const l of langs) {
  let objStr = '  ' + l.code + ': {\n';
  for (const [k, v] of Object.entries(enKeys)) {
    objStr += '    ' + k + ': `[' + l.name + '] ' + v.replace(/`/g, '') + '`,\n';
  }
  objStr += '  },\n';
  output += objStr;
}
output += '};\n\nexport function t';

fs.writeFileSync('src/i18n/translations.js', output);
