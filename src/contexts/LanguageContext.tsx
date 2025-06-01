import { createContext, useState, useContext, useMemo } from 'react';

import enTranslations from '../locales/en/en.json';
import heTranslations from '../locales/heb/he.json';

const LanguageContext = createContext<{
  language: string;
  setLanguage: (lang: string) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: () => '',
});

// Allow for nested objects in translations
const translations: Record<string, any> = {
  en: enTranslations,
  he: heTranslations,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string>('en'); // Default language
  
  const t = (key: string): string => {
    const langTranslations = translations[language] || translations['en']; // Fallback to English
    
    if (langTranslations && langTranslations[key]) {
      return langTranslations[key];
    }
    return key; // Return key if translation is not found
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'he' : 'en'));
  };
  
  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage,
    t,
  }), [language, setLanguage, toggleLanguage, t]);
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}