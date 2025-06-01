import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO",
      company: "TechStart Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      quote: "Danny's strategic insights transformed our business completely. We went from struggling to get leads to having a consistent pipeline of qualified prospects. Revenue increased 120% in just 8 months.",
      results: "120% revenue increase"
    },
    {
      name: "Michael Chen",
      title: "Founder", 
      company: "GrowthLab Marketing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      quote: "The sales funnel optimization was a game-changer. Our conversion rate doubled, and we finally have systems that work without constant babysitting. Best investment we've made.",
      results: "200% conversion increase"
    },
    {
      name: "Emma Rodriguez",
      title: "Owner",
      company: "Artisan Bakery Co.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      quote: "I was overwhelmed trying to manage everything myself. Danny helped me build a team and create processes that let me focus on what I love while the business runs smoothly.",
      results: "3x team productivity"
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
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-yellow-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 text-yellow-600 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600">
            Real results from real businesses that took action
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
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
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border-slate-200 hover:bg-slate-50"
            >
              <ChevronRight className="w-5 h-5" />
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