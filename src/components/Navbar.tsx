import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Waves, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext'; // Updated import path
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      dir={language === 'he' ? 'rtl' : 'ltr'}
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={scrollToTop}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <Waves className={`w-8 h-8 transition-colors duration-300 ${isScrolled ? 'text-emerald-600' : 'text-emerald-500 group-hover:text-emerald-400'}`} />
            <span className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-slate-800 group-hover:text-slate-600'}`}>
              {t('navbar.logo')}
            </span>
          </div>

          {/* Language Switcher */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleLanguage}
                  className={`rounded-full w-10 h-10 transition-colors duration-300 ${
                    isScrolled ? 'text-slate-700 hover:bg-slate-200' : 'text-slate-600 hover:bg-slate-100/50'
                  }`}
                >
                  <Globe className="w-5 h-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-slate-800 text-white border-slate-700">
                <p>{t('navbar.langTooltip')}: {language === 'en' ? t('navbar.langSwitch.he') : t('navbar.langSwitch.en')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </motion.nav>
  );
}
