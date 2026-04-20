import { ArrowRight } from 'lucide-react';

const cases = [
  {
    id: 1,
    tag: 'Travel',
    color: 'bg-[#C2C9FF]', 
    title: 'Easy Booking For Dream Trips',
    desc: 'Triply is a hassle-free & effective tour solution for travelers. It\'s an all-inclusive booking and planning website that helps people make their dream trips easier.',
    metrics: [{ label: 'Pages in Projects', value: '40+' }, { label: 'Retention Growth', value: '36%' }],
    client: { name: 'Shubho Al-Farooque', role: 'Triply CEO', avatar: '11' },
    image: 'https://picsum.photos/seed/travel/600/500'
  },
  {
    id: 2,
    tag: 'Restaurant',
    color: 'bg-[#FFB7B2]', 
    title: 'Transform Your Dining',
    desc: 'At Plate, we bring you a handpicked selection of premium restaurants that offer not just meals, but memorable dining experiences, you\'ll cherish.',
    metrics: [{ label: 'Location', value: 'France' }, { label: 'Project Duration', value: '5 Months' }],
    client: { name: 'Neil Saidi', role: 'Plate CEO', avatar: '12' },
    image: 'https://picsum.photos/seed/restaurant/600/500'
  },
  {
    id: 3,
    tag: 'SaaS',
    color: 'bg-[#FFE699]', 
    title: 'Reducing Carbon Footprints',
    desc: 'Yenex is a smart and sustainable energy platform. It empowers users with distributed energy solutions to reduce carbon footprints effortlessly.',
    metrics: [{ label: 'Project timeline', value: '2.5 Months' }, { label: 'Customer Acquisition', value: '40%' }],
    client: { name: 'Ted Nash', role: 'Yenex CEO', avatar: '13' },
    image: 'https://picsum.photos/seed/saas/600/500'
  },
  {
    id: 4,
    tag: 'Healthcare',
    color: 'bg-[#7AF9C4]', 
    title: 'Simplifying Vehicle Care',
    subtitle: 'Vehicle Maintenance Platform',
    desc: 'Zantrik is an innovative vehicle maintenance app. We revamped it with a fresh design, gamification, and intuitive features to boost user engagement.',
    metrics: [{ label: 'Project Duration', value: '8 Weeks' }, { label: 'Work Scope', value: 'Mobile App' }],
    client: { name: 'Shubho Al-Farooque', role: 'Zantrik CEO', avatar: '14' },
    image: 'https://picsum.photos/seed/health/600/500'
  }
];

export function IndustryWins() {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto bg-brand-bg relative z-10" id="work">
      <div className="relative">
        {cases.map((c, index) => (
          <div 
            key={c.id}
            className={`sticky ${c.color} text-black rounded-[2rem] p-10 shadow-xl transition-all duration-500`}
            style={{ 
              top: `${50 + index * 40}px`,
              marginBottom: index === cases.length - 1 ? 0 : '-300px',
              zIndex: index + 1
            }}
          >
            <div className={`grid gap-12 items-center ${index < cases.length - 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
              <h3 className="text-3xl font-serif italic font-medium h-16 flex items-center">{c.tag}</h3>
              {index === cases.length - 1 && (
                <div>
                  <p className="font-serif italic text-lg mb-2">{c.subtitle}</p>
                  <h3 className="text-5xl font-bold mb-6 leading-tight">{c.title}</h3>
                  <p className="text-black/80 text-lg leading-relaxed mb-8">{c.desc}</p>
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    {c.metrics?.map((m, i) => (
                      <div key={i}>
                        <p className="text-sm opacity-60 mb-1">{m.label}</p>
                        <p className="font-bold text-2xl">{m.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-black/10 rounded-full p-2 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={`https://picsum.photos/seed/${c.client?.avatar}/40/40`} referrerPolicy="no-referrer" alt={c.client?.name} className="w-10 h-10 rounded-full" />
                      <div className='pr-4'>
                        <p className="font-bold text-sm">{c.client?.name}</p>
                        <p className="text-xs opacity-70">{c.client?.role}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              )}
              {index === cases.length - 1 && (
                <div className="relative">
                  <img 
                    src={c.image} 
                    alt={c.title} 
                    referrerPolicy="no-referrer" 
                    className="rounded-3xl shadow-2xl w-full h-[400px] object-cover" 
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
