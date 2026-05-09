import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function ReserveAndFooter() {
  return (
    <>
      <section id="reservations" className="py-24 bg-[#0B1C15] relative overflow-hidden border-t border-[#E5DACE]/10">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[#162A21] rounded-r-full blur-3xl opacity-50 -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <span className="text-[10px] tracking-widest opacity-60 font-sans uppercase mb-4 block">Reservations</span>
            <h2 className="font-black text-5xl md:text-6xl uppercase tracking-tighter text-[#E5DACE] mb-6">
              Book Your Table
            </h2>
            <p className="text-[#E5DACE]/80 mb-8 font-light leading-relaxed">
              Join us for an unforgettable dining experience. Whether it's a romantic dinner under the fairy lights or a joyous family gathering, we look forward to hosting you.
            </p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#E5DACE]/60 mb-2 uppercase">Date</label>
                  <input type="date" className="p-4 bg-[#091510] border border-[#E5DACE]/20 text-[#E5DACE] focus:outline-none focus:border-[#D4AF37] font-sans" />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#E5DACE]/60 mb-2 uppercase">Time</label>
                  <input type="time" className="p-4 bg-[#091510] border border-[#E5DACE]/20 text-[#E5DACE] focus:outline-none focus:border-[#D4AF37] font-sans" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#E5DACE]/60 mb-2 uppercase">Guests</label>
                  <select className="p-4 bg-[#091510] border border-[#E5DACE]/20 text-[#E5DACE] focus:outline-none focus:border-[#D4AF37] font-sans">
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#E5DACE]/60 mb-2 uppercase">Name</label>
                  <input type="text" placeholder="John Doe" className="p-4 bg-[#091510] border border-[#E5DACE]/20 text-[#E5DACE] placeholder:text-[#E5DACE]/30 focus:outline-none focus:border-[#D4AF37] font-sans" />
                </div>
              </div>
              <button className="w-full bg-[#D4AF37] text-[#0B1C15] font-sans font-black tracking-[0.2em] text-xs uppercase py-5 mt-2 hover:bg-white transition-colors">
                Confirm Reservation
              </button>
            </form>
          </motion.div>

          {/* Contact Details Image Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#162A21] to-[#0B1C15] border border-[#D4AF37]/30 rounded-t-full overflow-hidden shadow-2xl flex flex-col justify-end">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              <div className="relative z-10 p-12 text-[#E5DACE]">
                <div className="text-center mb-8">
                  <div className="text-4xl text-[#D4AF37] mb-2">✿</div>
                  <h3 className="font-sans text-[10px] tracking-[0.3em] uppercase">Al Fresco Dining</h3>
                </div>
                
                <div className="space-y-6 bg-[#091510]/80 p-8 border border-[#E5DACE]/10 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                    <p className="text-xs tracking-wider leading-relaxed text-[#E5DACE]/80 font-sans">
                      DLF Cyber Hub, Tower B<br />
                      Phase 2, Gurugram<br />
                      Haryana 122002
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="text-[#D4AF37] flex-shrink-0" size={20} />
                    <p className="text-xs tracking-wider text-[#E5DACE]/80 font-sans">+91 98765 43210</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Clock className="text-[#D4AF37] flex-shrink-0" size={20} />
                    <p className="text-xs tracking-wider text-[#E5DACE]/80 font-sans">Everyday: 19:00 — 23:30</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#091510] py-16 border-t border-[#E5DACE]/10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest opacity-50 font-sans">Location</span>
            <span className="text-xs font-sans tracking-wider text-[#E5DACE]/80">Galleria Market, DLF Phase IV, Gurgaon</span>
          </div>

          <div className="flex flex-col items-center gap-6">
            <span className="font-black text-2xl uppercase tracking-widest text-[#E5DACE]">
              Curry <span className="font-light italic lowercase tracking-normal text-[#D4AF37]">Garden</span>
            </span>
            <div className="flex gap-6">
              <a href="#" className="text-[#E5DACE]/50 hover:text-[#D4AF37] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-[#E5DACE]/50 hover:text-[#D4AF37] transition-all">
                <Facebook size={18} />
              </a>
               <a href="#" className="text-[#E5DACE]/50 hover:text-[#D4AF37] transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:items-end">
            <span className="text-[10px] uppercase tracking-widest opacity-50 font-sans">Awards</span>
            <span className="text-xs italic text-[#E5DACE]/80 font-serif">Michelin Select 2023 • Times Food Award</span>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 text-center flex flex-col items-center">
          <p className="text-[10px] uppercase tracking-[0.5em] opacity-30 font-sans">Est. 2012 — Heritage Excellence</p>
        </div>
      </footer>
    </>
  );
}
