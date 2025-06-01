import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language, t } = useLanguage();

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO",
      company: "TechStart Solutions",
      image: "https://i.pravatar.cc/250?img=40",
      rating: 5,
      quote: t('testimonials.sarah.quote'),
      results: t('testimonials.sarah.results')
    },
    {
      name: "Michael Chen",
      title: "Founder", 
      company: "GrowthLab Marketing",
      image: "https://i.pravatar.cc/250?img=52",
      rating: 5,
      quote: t('testimonials.michael.quote'),
      results: t('testimonials.michael.results')
    },
    {
      name: "Emma Rodriguez",
      title: "Owner",
      company: "Artisan Bakery Co.",
      image: "https://i.pravatar.cc/250?img=38",
      rating: 5,
      quote: t('testimonials.emma.quote'),
      results: t('testimonials.emma.results')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" dir={language === 'he' ? 'rtl' : 'ltr'}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-yellow-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 text-yellow-600 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">{t('testimonials.tag')}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('testimonials.headline')}
          </h2>
          <p className="text-xl text-slate-600">
            {t('testimonials.subheadline')}
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: language === 'he' ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: language === 'he' ? 50 : -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-100"
            >
              {/* Quote icon */}
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                <Quote className="w-8 h-8 text-emerald-600" />
              </div>

              {/* Star rating */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial?.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-slate-700 text-center mb-8 leading-relaxed font-medium">
                "{currentTestimonial?.quote}"
              </blockquote>

              {/* Results badge */}
              <div className="text-center mb-8">
                <span className="inline-block bg-emerald-500/10 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 {currentTestimonial?.results}
                </span>
              </div>

              {/* Author info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={currentTestimonial?.image}
                  alt={currentTestimonial?.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-slate-200"
                />
                <div className="text-center">
                  <h4 className="font-bold text-slate-900 text-lg">{currentTestimonial?.name}</h4>
                  <p className="text-slate-600">{currentTestimonial?.title}, {currentTestimonial?.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border-slate-200 hover:bg-slate-50"
            >
              {language === 'he' ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-slate-200 hover:bg-slate-50"
            >
              {language === 'he' ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-emerald-500' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}