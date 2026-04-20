import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function FloatingNav() {
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.5 }
    );
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Services Megamenu Popup */}
      <div 
        className={`fixed bottom-[90px] left-1/2 -translate-x-1/2 w-full max-w-4xl z-[90] transition-all duration-300 pointer-events-none ${
          showServicesMenu ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 translate-y-4 invisible'
        }`}
        onMouseEnter={() => setShowServicesMenu(true)}
        onMouseLeave={() => setShowServicesMenu(false)}
      >
        <div className="bg-[#f0eff5] rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/50 overflow-hidden flex flex-col md:flex-row mx-4">
          {/* Left Column (Links) */}
          <div className="flex-1 p-8 md:p-10 bg-white grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 content-start">
             <div>
               <Link to="/services" className="group block" onClick={() => setShowServicesMenu(false)}>
                 <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">UI UX</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">Creating user-friendly digital experiences.</p>
               </Link>
             </div>
             <div>
               <Link to="/services" className="group block" onClick={() => setShowServicesMenu(false)}>
                 <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Logo & Branding</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">Creating memorable identities for brands.</p>
               </Link>
             </div>
             <div>
               <Link to="/services" className="group block" onClick={() => setShowServicesMenu(false)}>
                 <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Web Design</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">Building visually appealing & functional websites.</p>
               </Link>
             </div>
             <div>
               <Link to="/services" className="group block" onClick={() => setShowServicesMenu(false)}>
                 <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Webflow Design</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">Developing responsive websites effortlessly.</p>
               </Link>
             </div>
             <div>
               <Link to="/services" className="group block" onClick={() => setShowServicesMenu(false)}>
                 <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Framer Design</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">Interactive web designs are made simple.</p>
               </Link>
             </div>
             <div>
               <Link to="/services" className="group block" onClick={() => setShowServicesMenu(false)}>
                 <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">SaaS Design</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">Intuitive interfaces that boost user engagement.</p>
               </Link>
             </div>
          </div>

          {/* Right Column (Image Preview) */}
          <div className="w-[40%] bg-[#d3d3d3] relative hidden md:flex items-center justify-center p-6 border-l border-gray-200 overflow-hidden">
             <img src="https://picsum.photos/seed/laptopmock/500/500" alt="Service Preview" className="w-[120%] max-w-none transform translate-x-4 translate-y-4 drop-shadow-2xl" referrerPolicy="no-referrer" />
             <div className="absolute bottom-4 right-4 bg-[#e8e8e8] hover:bg-white transition-colors w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shadow-sm">
                <VolumeX className="w-5 h-5 text-gray-600" />
             </div>
          </div>
        </div>
        
        {/* Pointer Triangle */}
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white mx-auto mt-[-1px] filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] relative z-10 hidden md:block left-[-60px]" />
      </div>

      {/* More Megamenu Popup */}
      <div 
        className={`fixed bottom-[90px] left-1/2 -translate-x-1/2 w-full max-w-3xl z-[90] transition-all duration-300 pointer-events-none ${
          showMoreMenu ? 'opacity-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 translate-y-4 invisible'
        }`}
        onMouseEnter={() => setShowMoreMenu(true)}
        onMouseLeave={() => setShowMoreMenu(false)}
      >
        <div className="bg-[#fcfcfc] rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/50 overflow-hidden flex flex-col md:flex-row mx-4 p-4 gap-4">
          
          {/* Left Column (Video/Phone Preview) */}
          <div className="w-[45%] bg-[#120a21] relative hidden md:flex flex-col justify-between items-center p-6 rounded-[24px] overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/20 to-transparent pointer-events-none" />
             <div className="mt-8 border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-sm px-4 py-2 rounded-full relative z-10 w-fit">
                The design looks okay
             </div>
             <div className="relative z-10 w-full px-4 mb-4 mt-16">
                <div className="rounded-2xl overflow-hidden border border-white/10 mb-4 aspect-[4/3] bg-black">
                   <img src="https://picsum.photos/seed/videocall/400/300" alt="Video Call" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
                </div>
                <div className="flex justify-between items-center w-full">
                   <p className="text-white text-sm font-semibold">Maybe the design looks okay</p>
                   <div className="bg-white/20 hover:bg-white/30 transition-colors w-8 h-8 rounded-full flex items-center justify-center cursor-pointer backdrop-blur-md">
                      <VolumeX className="w-4 h-4 text-white" />
                   </div>
                </div>
             </div>
          </div>

          {/* Right Column (Links) */}
          <div className="flex-1 p-6 md:p-8 flex flex-col gap-6">
             <Link to="/" className="group block" onClick={() => setShowMoreMenu(false)}>
               <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Home</h4>
               <p className="text-gray-500 text-xs">Home is where the monk lives</p>
             </Link>
             <Link to="/about" className="group block" onClick={() => setShowMoreMenu(false)}>
               <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">About us</h4>
               <p className="text-gray-500 text-xs">The journey of BrandoFriar</p>
             </Link>
             <Link to="/team" className="group block" onClick={() => setShowMoreMenu(false)}>
               <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Meet the team</h4>
               <p className="text-gray-500 text-xs">An overview of the Monk family</p>
             </Link>
             <Link to="/blog" className="group block" onClick={() => setShowMoreMenu(false)}>
               <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Blogs</h4>
               <p className="text-gray-500 text-xs">A collection of informative blogs</p>
             </Link>
             <Link to="/career" className="group block" onClick={() => setShowMoreMenu(false)}>
               <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Career</h4>
               <p className="text-gray-500 text-xs">Work with top global brands, grow your skills</p>
             </Link>
             <Link to="/contact" className="group block" onClick={() => setShowMoreMenu(false)}>
               <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors text-sm mb-1">Contact us</h4>
               <p className="text-gray-500 text-xs">Start your dream design journey from here</p>
             </Link>
          </div>
        </div>
        
        {/* Pointer Triangle relative to 'More' link */}
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white mx-auto mt-[-1px] filter drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)] relative z-10 hidden md:block left-[320px]" />
      </div>

      <div ref={navRef} className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 bg-[#0a0a0a]/95 backdrop-blur-xl text-white px-2 py-2 pr-2 md:pr-6 rounded-full flex items-center gap-1 sm:gap-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 z-[100] whitespace-nowrap overflow-x-visible">
        <Link 
          to="/projects" 
          className={`text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-300 ${isActive('/projects') ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
        >
          Projects
        </Link>
        
        <div 
           className="relative"
           onMouseEnter={() => setShowServicesMenu(true)}
           onMouseLeave={() => setShowServicesMenu(false)}
        >
          <Link 
            to="/services" 
            className={`text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-300 flex items-center gap-1 ${isActive('/services') || showServicesMenu ? 'bg-white/10 text-brand-primary' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
          >
            Services
          </Link>
        </div>
        
        <Link 
          to="/contact" 
          className="bg-brand-primary text-white rounded-full px-5 py-3 font-bold text-xs sm:text-sm flex items-center gap-2 hover:scale-105 hover:bg-brand-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(122,60,245,0.3)] hover:shadow-[0_0_30px_rgba(122,60,245,0.5)] shrink-0"
        >
           <MessageSquare className="w-4 h-4 text-white" />
           Start a Project
        </Link>
        
        <Link 
          to="/career" 
          className={`hidden md:block text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-300 ${isActive('/career') ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
        >
          Career
        </Link>
        
        <div
           className="relative"
           onMouseEnter={() => setShowMoreMenu(true)}
           onMouseLeave={() => setShowMoreMenu(false)}
        >
          <Link 
            to="#" 
            className={`hidden sm:block text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-300 ${showMoreMenu ? 'bg-white/10 text-brand-primary' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
            onClick={(e) => e.preventDefault()}
          >
            More
          </Link>
        </div>
      </div>
    </>
  );
}
