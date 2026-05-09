import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2000&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-[#0B1C15]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C15] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#D4AF37] italic text-xl md:text-2xl tracking-wide mb-6 font-serif"
        >
          An Oasis in Gurgaon
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#E5DACE] text-[60px] md:text-[100px] lg:text-[130px] font-black uppercase tracking-tighter mb-8 leading-[0.85] max-w-4xl"
        >
          A Botanical <br />
          <span className="italic font-light opacity-90 text-[50px] md:text-[80px] lg:text-[100px] tracking-normal capitalize">Symphony of Spice</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[#E5DACE] text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light opacity-90"
        >
          Experience the authentic flavors of India set within a charming, garden-inspired retreat at Cyber Hub.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a 
            href="#reservations" 
            className="bg-[#D4AF37] text-[#0B1C15] px-10 py-5 font-sans font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors"
          >
            Reserve Your Experience
          </a>
          <a 
            href="#menu" 
            className="text-[#D4AF37] hover:text-white px-10 py-5 font-sans font-black text-xs uppercase tracking-[0.2em] transition-colors"
          >
            View Our Menu
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#D4AF37]"
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} className="opacity-70 hover:opacity-100 transition-opacity" />
        </a>
      </motion.div>
    </section>
  );
}
