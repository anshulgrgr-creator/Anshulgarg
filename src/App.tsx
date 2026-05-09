/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import ReserveAndFooter from './components/ReserveAndFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1C15] font-serif text-[#E5DACE] selection:bg-[#D4AF37] selection:text-[#0B1C15] overflow-x-hidden border-[8px] md:border-x-[16px] md:border-t-[16px] border-[#162A21] flex flex-col relative">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <ReserveAndFooter />
    </div>
  );
}
