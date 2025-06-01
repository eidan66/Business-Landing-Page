import { motion } from 'framer-motion';
import { TrendingDown, DollarSign, Target, AlertCircle } from 'lucide-react';

export default function PainPoints() {
  const painPoints = [
    {
      icon: TrendingDown,
      title: "Not getting enough leads?",
      description: "Your marketing isn't converting prospects into customers"
    },
    {
      icon: DollarSign,
      title: "Sales feel stuck?",
      description: "Revenue has plateaued and growth seems impossible"
    },
    {
      icon: Target,
      title: "Unclear marketing direction?",
      description: "You're throwing money at ads with no clear strategy"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full opacity-10 blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-400 rounded-full opacity-10 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full mb-4">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Common Business Challenges</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Struggling with any of these?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            You're not alone. These are the most common roadblocks holding businesses back from their potential.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full hover:border-red-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500/30 transition-colors duration-300">
                  <point.icon className="w-8 h-8 text-red-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors duration-300">
                  {point.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-300 text-lg mb-4">
            Sound familiar? Let's change that.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}