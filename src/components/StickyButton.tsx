import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StickyButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isHidden) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Mobile sticky bottom bar */}
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 px-6 py-4 shadow-lg"
            dir={language === 'he' ? 'rtl' : 'ltr'}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-900">{t('sticky.button.mobile.title')}</p>
                <p className="text-sm text-slate-600">{t('sticky.button.mobile.subtitle')}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => setIsHidden(true)}
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8"
                >
                  <X className="w-4 h-4" />
                </Button>
                <Button
                  onClick={scrollToForm}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('sticky.button.mobile.cta')}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Desktop floating button */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed bottom-8 right-8 z-50 hidden md:block"
          >
            <div className="relative group">
              <Button
                onClick={scrollToForm}
                className="w-16 h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-110"
              >
                <Calendar className="w-6 h-6" />
              </Button>
              
              {/* Tooltip */}
              <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap">
                  Book Your Free Call
                  <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900" />
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setIsHidden(true)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-slate-600 hover:bg-slate-700 text-white rounded-full flex items-center justify-center text-xs transition-colors duration-200"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}