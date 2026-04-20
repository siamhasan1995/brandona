import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-brand-bg/80 backdrop-blur-md border-b border-white/5">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-brand-primary flex items-center justify-center font-bold text-white">
          B
        </div>
        <span className="font-bold text-xl tracking-tight">BrandoFriar</span>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
        <Link to="/services" className="hover:text-white transition-colors">Services</Link>
        <Link to="/projects" className="hover:text-white transition-colors">Work</Link>
        <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
      </div>
      <div className="flex justify-end gap-3 items-center">
         <button className="text-white hover:text-brand-primary/90 px-4 py-2 rounded-lg font-medium text-sm transition-all hidden sm:block">
            Login
         </button>
         <Link to="/contact" className="bg-brand-primary hover:bg-brand-primary/90 text-white px-5 py-2 rounded-lg font-medium text-sm transition-all glow-btn">
            Book a Call
         </Link>
      </div>
    </nav>
  );
}
