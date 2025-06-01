import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, BarChart3, Target, Lightbulb, DollarSign } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Solutions() {
  const solutions = [
    {
      icon: Target,
      title: "Strategic Marketing Plan",
      description: "Custom roadmap to reach your ideal customers",
      details: "We'll analyze your market, competitors, and create a step-by-step marketing strategy that actually converts prospects into paying customers.",
      benefits: ["Market analysis", "Competitor research", "Customer personas", "Content strategy"]
    },
    {
      icon: TrendingUp,
      title: "Sales Funnel Optimization",
      description: "Turn more visitors into paying customers",
      details: "Identify bottlenecks in your sales process and implement proven systems that guide prospects smoothly from awareness to purchase.",
      benefits: ["Conversion tracking", "Process automation", "Lead nurturing", "Sales scripts"]
    },
    {
      icon: BarChart3,
      title: "Revenue Growth Analysis",
      description: "Find hidden profit opportunities in your business",
      details: "Deep dive into your numbers to uncover revenue leaks, pricing optimization opportunities, and new income streams you might be missing.",
      benefits: ["Financial audit", "Pricing strategy", "Cost optimization", "Growth forecasting"]
    },
    {
      icon: Users,
      title: "Team & Operations Scaling",
      description: "Build systems that work without you",
      details: "Create processes and hire the right people so your business can grow while giving you more freedom and less stress.",
      benefits: ["SOPs creation", "Hiring strategy", "Team training", "Workflow automation"]
    },
    {
      icon: Lightbulb,
      title: "Digital Transformation",
      description: "Modernize your business for competitive advantage",
      details: "Implement technology solutions that streamline operations, improve customer experience, and position you ahead of competitors.",
      benefits: ["Tech stack audit", "Automation tools", "CRM setup", "Digital presence"]
    },
    {
      icon: DollarSign,
      title: "Cash Flow Management",
      description: "Ensure healthy finances and sustainable growth",
      details: "Optimize your cash flow, reduce unnecessary expenses, and create financial systems that support long-term business stability.",
      benefits: ["Cash flow forecasting", "Expense optimization", "Financial planning", "Investment strategy"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-600 px-4 py-2 rounded-full mb-4">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Our Solutions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            We Help You With:
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive business consulting services designed to unlock your company's full potential.
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
                      Hover for details →
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-6">
                  <h4 className="font-bold text-slate-900 mb-3">{solution.title}</h4>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {solution.details}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-700">What's included:</p>
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
              Not sure which solution fits your needs?
            </h3>
            <p className="text-slate-600 mb-6">
              That's exactly what we'll figure out together on our free strategy call.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}