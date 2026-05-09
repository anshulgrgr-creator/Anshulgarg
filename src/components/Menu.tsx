import { motion } from 'motion/react';

const MENU_CATEGORIES = [
  {
    title: 'Small Plates & Chaat',
    items: [
      { name: 'Palak Patta Chaat', description: 'Crispy spinach leaves, sweetened yogurt, tamarind & mint chutney', price: '₹425' },
      { name: 'Truffle Mushroom Galouti', description: 'Melt-in-mouth smoked mushroom kebabs on mini parathas', price: '₹550' },
      { name: 'Gunpowder Prawns', description: 'Curry leaf tempered prawns coated in spicy podi masala', price: '₹795' },
      { name: 'Classic Chicken Tikka', description: 'Charcoal-smoked chicken chunks marinated in robust tandoori spices', price: '₹595' },
    ]
  },
  {
    title: 'From the Tandoor & Curries',
    items: [
      { name: 'Signature Butter Chicken', description: 'Our slow-cooked overnight tomatoes, fenugreek, and cream sauce', price: '₹850' },
      { name: 'Nalli Nihari', description: 'Slow-cooked lamb shank stew rich with aromatic whole spices', price: '₹995' },
      { name: 'Paneer Lababdar', description: 'Cottage cheese in a rich, creamy onion and tomato gravy', price: '₹625' },
      { name: 'Dal Makhani', description: 'Black lentils simmered for 24 hours on a charcoal tandoor', price: '₹495' },
    ]
  },
  {
    title: 'Breads & Rice',
    items: [
      { name: 'Chur Chur Naan', description: 'Crushed flaky bread stuffed with paneer and spices', price: '₹195' },
      { name: 'Garlic & Chive Naan', description: 'Classic refined flour bread with fresh garlic confit', price: '₹145' },
      { name: 'Awadhi Dum Biryani - Lamb', description: 'Fragrant basmati rice layered with spice-marinated lamb', price: '₹895' },
      { name: 'Saffron Pulao', description: 'Long grain rice infused with fine Kashmiri saffron', price: '₹325' },
    ]
  },
  {
    title: 'Sweet Endings',
    items: [
      { name: 'Rose Petal Rasmalai', description: 'Soft cheese dumplings steeped in rose and cardamom milk', price: '₹375' },
      { name: 'Baked Moong Dal Halwa', description: 'Traditional winter dessert baked with a crunchy almond crust', price: '₹395' },
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-[#0B1C15] text-[#E5DACE] relative border-t border-[#E5DACE]/10">
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-widest opacity-60 font-sans mb-4 block"
          >
            Culinary Offerings
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6 text-[#D4AF37]"
          >
            The Menu
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-px bg-[#E5DACE]/10 w-24 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-24">
          {MENU_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <h3 className="font-serif italic text-3xl md:text-4xl text-[#E5DACE] mb-10 border-b border-[#E5DACE]/10 pb-4">
                {category.title}
              </h3>
              <div className="space-y-10">
                {category.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex justify-between items-baseline mb-3">
                      <h4 className="font-sans font-bold text-xs tracking-[0.2em] uppercase group-hover:text-[#D4AF37] transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex-1 mx-4 border-b border-dashed border-[#E5DACE]/20 relative top-[-6px]" />
                      <span className="font-sans text-[#D4AF37] text-xs tracking-widest">{item.price}</span>
                    </div>
                    <p className="text-[#E5DACE]/60 text-sm font-light w-[85%] leading-relaxed font-serif">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <a 
            href="#" 
            className="inline-block px-10 py-5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B1C15] transition-colors font-sans font-black text-[10px] uppercase tracking-[0.2em]"
          >
            Download Full Menu (PDF)
          </a>
        </div>
      </div>
      
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
