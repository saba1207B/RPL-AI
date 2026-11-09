/*
Copyright (c) 2026 Sabareesh M (saba1207B). All Rights Reserved.

This source code is proprietary and confidential.

Unauthorized copying, redistribution, modification, or use — including
any use for artificial intelligence / machine learning training —
is strictly prohibited.

See the LICENSE and COPYRIGHT files in the repository root for full terms.
*/

import fs from 'fs';

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

console.log('Language list configured with 23 languages.');
