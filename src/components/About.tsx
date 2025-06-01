import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { language, t } = useLanguage();

  const stats = [
    {
      icon: Users,
      number: "300+",
      label: t('about.stats.businesses_helped')
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: t('about.stats.revenue_increase')
    },
    {
      icon: Clock,
      number: "12+",
      label: t('about.stats.years_experience')
    },
    {
      icon: Award,
      number: "98%",
      label: t('about.stats.client_satisfaction')
    }
  ];

  return (
    <section className="py-20 bg-white" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: language === 'he' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                alt={t('about.image_alt')}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
                      <stat.icon className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="text-lg font-bold text-slate-900">{stat.number}</div>
                    <div className="text-xs text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: language === 'he' ? -50 : 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">{t('about.tag')}</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {t('about.name')}
            </h2>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t('about.expertises.strategic_growth.title')}</h4>
                  <p className="text-slate-600">{t('about.expertises.strategic_growth.description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t('about.expertises.proven_track_record.title')}</h4>
                  <p className="text-slate-600">{t('about.expertises.proven_track_record.description')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{t('about.expertises.industry_recognition.title')}</h4>
                  <p className="text-slate-600">{t('about.expertises.industry_recognition.description')}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                <span className="font-semibold text-slate-900">{t('about.commitment.title')}</span>
              </div>
              <p className="text-slate-600 italic">
                {t('about.commitment.quote')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}