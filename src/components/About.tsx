import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#091510] border-t border-[#E5DACE]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <span className="text-[10px] uppercase tracking-widest opacity-60 font-sans mb-4 block">Our Story</span>
            <h2 className="font-black text-6xl md:text-7xl uppercase tracking-tighter leading-[0.85] mb-8 text-[#E5DACE]">
              A Secret Garden <br /> <span className="italic font-serif tracking-normal lowercase text-[#D4AF37] text-5xl md:text-6xl mt-2 inline-block">in the City</span>
            </h2>
            
            <p className="text-lg leading-relaxed opacity-90 mb-6 font-light">
              Nestled away from the corporate buzz of Gurgaon, Curry Garden was born out of a desire to create a sanctuary where time slows down. Inspired by traditional courtyards and lush botanical spaces, our restaurant pairs striking aesthetics with the profound depth of authentic Indian cuisine.
            </p>
            
            <p className="text-lg leading-relaxed opacity-90 mb-8 font-light">
              We source our spices directly from the historic markets of Old Delhi and regions renowned for their unique harvests. Every dish is a tribute to heritage recipes, slow-cooked to perfection, ensuring that each bite is as magical as the fairy lights that drape our garden walls.
            </p>

            <img 
              src="https://images.unsplash.com/photo-1596683720379-b71565551c14?q=80&w=200&auto=format&fit=crop" 
              alt="Signature" 
              className="h-16 opacity-40 mix-blend-screen sepia hue-rotate-15"
            />
          </motion.div>

          {/* Image Collage */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" 
              alt="Restaurant Interior"
              className="absolute top-0 right-0 w-4/5 h-[80%] object-cover rounded-t-full rounded-bl-full shadow-2xl grayscale contrast-125 sepia-[.3]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 w-2/3 h-1/2 border-[#162A21] border-8 shadow-xl overflow-hidden rounded-tr-[80px]">
              <img 
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600&auto=format&fit=crop" 
                alt="Delicious Curry"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700 grayscale contrast-125 sepia-[.3]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute top-1/2 -left-12 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </motion.div>

        </div>
      </div>
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
