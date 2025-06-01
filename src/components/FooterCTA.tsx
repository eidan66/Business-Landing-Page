import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lead, LeadSource } from '@/entities/Lead';
import { Calendar, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FooterCTA() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { language, t } = useLanguage();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await Lead.create({
        ...formData,
        source: LeadSource.FOOTER
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Main Footer CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden" dir={language === 'he' ? 'rtl' : 'ltr'}>
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-500 rounded-full opacity-10 blur-3xl" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - CTA Content */}
            <motion.div
              initial={{ opacity: 0, x: language === 'he' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {t('footer.cta.headline')}
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                {t('footer.cta.subheadline')}
              </p>

              {/* Benefits list */}
              <div className="space-y-4 mb-8">
                {[
                  t('footer.cta.benefits.clarity'),
                  t('footer.cta.benefits.plan'),
                  t('footer.cta.benefits.obligation')
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="w-4 h-4" />
                  <span>{t('footer.cta.phone')}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="w-4 h-4" />
                  <span>{t('footer.cta.email')}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Clock className="w-4 h-4" />
                  <span>{t('footer.cta.response')}</span>
                </div>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, x: language === 'he' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="bg-white rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('footer.cta.submitted.title')}</h3>
                  <p className="text-slate-600 mb-6">
                    {t('footer.cta.submitted.message')}
                  </p>
                  <p className="text-sm text-slate-500">
                    {t('footer.cta.submitted.emailCta')}
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-8">
                  <div className="text-center mb-6">
                    <Calendar className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('footer.cta.form.title')}</h3>
                    <p className="text-slate-600">{t('footer.cta.form.subtitle')}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="footer_name" className="text-slate-700 font-medium">{t('footer.cta.form.nameLabel')}</Label>
                      <Input
                        id="footer_name"
                        value={formData.full_name}
                        onChange={(e) => handleInputChange('full_name', e.target.value)}
                        placeholder={t('footer.cta.form.namePlaceholder')}
                        required
                        className="mt-1 h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="footer_email" className="text-slate-700 font-medium">{t('footer.cta.form.emailLabel')}</Label>
                      <Input
                        id="footer_email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder={t('footer.cta.form.emailPlaceholder')}
                        required
                        className="mt-1 h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="footer_phone" className="text-slate-700 font-medium">{t('footer.cta.form.phoneLabel')}</Label>
                      <Input
                        id="footer_phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder={t('footer.cta.form.phonePlaceholder')}
                        className="mt-1 h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.full_name || !formData.email}
                      className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{t('footer.cta.form.submitting')}</span>
                        </div>
                      ) : (
                        t('footer.cta.form.button')
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-slate-500 text-center mt-4">
                    {t('footer.cta.form.privacy')}
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-12" dir={language === 'he' ? 'rtl' : 'ltr'}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Company info */}
            <div>
              <h3 className="text-white font-bold text-xl mb-4">{t('footer.company.name')}</h3>
              <p className="text-slate-400 mb-4">
                {t('footer.company.description')}
              </p>
              <div className="flex items-center space-x-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>{t('footer.company.location')}</span>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.services.title')}</h4>
              <ul className="space-y-2 text-slate-400">
                {[
                  t('footer.services.items.strategic'),
                  t('footer.services.items.sales'),
                  t('footer.services.items.marketing'),
                  t('footer.services.items.operations'),
                  t('footer.services.items.financial')
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t('footer.contact.title')}</h4>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{t('footer.cta.phone')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{t('footer.cta.email')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              {t('footer.copyright').split('idanlevian.com').map((part, index, array) => (
                <>
                  {part}
                  {index < array.length - 1 && (
                    <a 
                      href="https://idanlevian.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      idanlevian.com
                    </a>
                  )}
                </>
              ))}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}