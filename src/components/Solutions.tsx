import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, BarChart3, Target, Lightbulb, DollarSign } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useLanguage } from '@/contexts/LanguageContext';

export default function Solutions() {
  const { language, t } = useLanguage();

  const solutions = [
    {
      icon: Target,
      title: t('solutions.marketing.title'),
      description: t('solutions.marketing.description'),
      details: t('solutions.marketing.details'),
      benefits: [
        t('solutions.marketing.benefits.market_analysis'),
        t('solutions.marketing.benefits.competitor_research'),
        t('solutions.marketing.benefits.customer_personas'),
        t('solutions.marketing.benefits.content_strategy')
      ]
    },
    {
      icon: TrendingUp,
      title: t('solutions.sales_funnel.title'),
      description: t('solutions.sales_funnel.description'),
      details: t('solutions.sales_funnel.details'),
      benefits: [
        t('solutions.sales_funnel.benefits.conversion_tracking'),
        t('solutions.sales_funnel.benefits.process_automation'),
        t('solutions.sales_funnel.benefits.lead_nurturing'),
        t('solutions.sales_funnel.benefits.sales_scripts')
      ]
    },
    {
      icon: BarChart3,
      title: t('solutions.revenue_growth.title'),
      description: t('solutions.revenue_growth.description'),
      details: t('solutions.revenue_growth.details'),
      benefits: [
        t('solutions.revenue_growth.benefits.financial_audit'),
        t('solutions.revenue_growth.benefits.pricing_strategy'),
        t('solutions.revenue_growth.benefits.cost_optimization'),
        t('solutions.revenue_growth.benefits.growth_forecasting')
      ]
    },
    {
      icon: Users,
      title: t('solutions.team_operations.title'),
      description: t('solutions.team_operations.description'),
      details: t('solutions.team_operations.details'),
      benefits: [
        t('solutions.team_operations.benefits.sops_creation'),
        t('solutions.team_operations.benefits.hiring_strategy'),
        t('solutions.team_operations.benefits.team_training'),
        t('solutions.team_operations.benefits.workflow_automation')
      ]
    },
    {
      icon: Lightbulb,
      title: t('solutions.digital_transformation.title'),
      description: t('solutions.digital_transformation.description'),
      details: t('solutions.digital_transformation.details'),
      benefits: [
        t('solutions.digital_transformation.benefits.tech_stack_audit'),
        t('solutions.digital_transformation.benefits.automation_tools'),
        t('solutions.digital_transformation.benefits.crm_setup'),
        t('solutions.digital_transformation.benefits.digital_presence')
      ]
    },
    {
      icon: DollarSign,
      title: t('solutions.cash_flow.title'),
      description: t('solutions.cash_flow.description'),
      details: t('solutions.cash_flow.details'),
      benefits: [
        t('solutions.cash_flow.benefits.cash_flow_forecasting'),
        t('solutions.cash_flow.benefits.expense_optimization'),
        t('solutions.cash_flow.benefits.financial_planning'),
        t('solutions.cash_flow.benefits.investment_strategy')
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50" dir={language === 'he' ? 'rtl' : 'ltr'}>
      <div className="max-w-screen-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full mb-4">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">{t('solutions.tag')}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('solutions.headline')}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('solutions.subheadline')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 h-full cursor-pointer hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 group-hover:-translate-y-2">
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors duration-300">
                      <solution.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                      {solution.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {solution.description}
                    </p>

                    <div className="text-sm text-emerald-600 font-medium">
                      {t('solutions.hover_details')}
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-6" dir={language === 'he' ? 'rtl' : 'ltr'}>
                  <h4 className="font-bold text-slate-900 mb-3">{solution.title}</h4>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {solution.details}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-700">{t('solutions.whats_included')}</p>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                          <CheckCircle className="w-3 h-3 text-emerald-500" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {t('solutions.not_sure.headline')}
            </h3>
            <p className="text-slate-600 mb-6">
              {t('solutions.not_sure.subheadline')}
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}