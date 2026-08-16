import { FaPlus, FaImage, FaBook, FaBullhorn, FaEnvelopeOpenText, FaShieldAlt } from 'react-icons/fa';
import { useEffect } from 'react';

const adminCards = [
  { title: 'Add Events', icon: <FaPlus />, description: 'Create or update upcoming spiritual gatherings and retreats.' },
  { title: 'Manage Gallery', icon: <FaImage />, description: 'Upload and organize ashram, yoga and community images.' },
  { title: 'Publish Books', icon: <FaBook />, description: 'Upload newsletters, magazines and PDF resources.' },
  { title: 'Announcements', icon: <FaBullhorn />, description: 'Publish updates for all three languages.' },
  { title: 'Contact Submissions', icon: <FaEnvelopeOpenText />, description: 'Review visitor messages and registrations.' }
];

export default function Admin() {
  useEffect(() => {
    const robots = document.querySelector('meta[name="robots"]');
    const previous = robots?.content;
    if (robots) robots.content = 'noindex, nofollow';
    document.title = 'Admin | Shree Gurudev Yogashram';

    return () => {
      if (robots && previous) robots.content = previous;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-amber-50 p-6 text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-amber-200/40 bg-white/80 p-8 shadow-xl backdrop-blur-xl dark:bg-slate-900/80">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-cinzel text-sm uppercase tracking-[0.3em] text-amber-600">Admin Panel</p>
              <h1 className="mt-2 font-cinzel text-3xl text-forest dark:text-amber-200">Secure Content Management</h1>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-forest/20 bg-forest/10 px-4 py-2 text-sm text-forest dark:text-amber-200">
              <FaShieldAlt /> Protected Dashboard
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {adminCards.map((card) => (
              <div key={card.title} className="rounded-[1.5rem] border border-amber-200/40 bg-gradient-to-br from-amber-50 to-white p-6 dark:from-slate-800/70 dark:to-slate-900/80">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300">{card.icon}</div>
                <h2 className="mt-4 font-cinzel text-xl text-forest dark:text-amber-200">{card.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
