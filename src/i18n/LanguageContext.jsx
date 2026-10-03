import { createContext, useContext, useState, useEffect } from 'react';
import { LANGS, t as translate } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const stored = localStorage.getItem('rpl_lang');
    if (stored) {
      setLang(stored);
      applyLangSettings(stored);
    }
  }, []);

  const applyLangSettings = (l) => {
    const current = LANGS.find((item) => item.code === l);
    if (document && document.documentElement) {
      document.documentElement.lang = l;
      document.documentElement.dir = current && current.dir === 'rtl' ? 'rtl' : 'ltr';
    }
  };

  const changeLang = (l) => {
    setLang(l);
    localStorage.setItem('rpl_lang', l);
    applyLangSettings(l);
  };

  const t = (keyOrLang, maybeKey) => {
    if (maybeKey !== undefined) {
      return translate(keyOrLang, maybeKey);
    }
    return translate(lang, keyOrLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t, LANGS }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

