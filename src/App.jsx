import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaMoon, FaSun, FaWhatsapp, FaArrowUp, FaLeaf, FaPray, FaHeart } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import heroImg from './public/images/photo5.jpg.jpeg';
import gallery1 from './public/images/photo1.jpeg';
import gallery2 from './public/images/photo2.jpeg';
import gallery4 from './public/images/photo4.jpeg';
import gallery6 from './public/images/photo6.jpeg';
import gallery7 from './public/images/photo7.jpeg';

const navItems = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.biography', href: '#biography' },
  { key: 'nav.ashram', href: '#ashram' },
  { key: 'nav.yoga', href: '#yoga' },
  { key: 'nav.records', href: '#records' },
  { key: 'nav.events', href: '#events' },
  { key: 'nav.gallery', href: '#gallery' },
  { key: 'nav.contact', href: '#contact' }
];

const galleryImages = [
  gallery7,
  gallery1,
  gallery2,
  gallery6,
  gallery4
];

function App() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [userEvents, setUserEvents] = useState([]);
  const [adminEmail] = useState('basavrajshejale7@gmail.com');
  const [adminMobile] = useState('9483104846');
  const [authEmail, setAuthEmail] = useState('');
  const [authMobile, setAuthMobile] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', type: '', description: '' });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('userEvents');
      if (stored) setUserEvents(JSON.parse(stored));
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <div className="min-h-screen bg-cream text-ink transition-colors duration-500 dark:bg-slate-950 dark:text-cream">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl dark:bg-slate-950/70">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <div className="font-cinzel text-lg font-semibold text-forest dark:text-amber-300">
            {t('site.name')}
          </div>
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.key} href={item.href} className="text-sm font-medium transition hover:text-saffron">
                {t(item.key)}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <select
              aria-label="Language selector"
              className="rounded-full border border-amber-400/40 bg-white/70 px-3 py-2 text-sm shadow-sm outline-none dark:bg-slate-900/70"
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="en">🇮🇳 English</option>
              <option value="kn">🇮🇳 ಕನ್ನಡ</option>
              <option value="mr">🇮🇳 मराठी</option>
            </select>
            <button
              aria-label="Toggle theme"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full border border-amber-400/40 bg-white/70 p-2.5 shadow-sm dark:bg-slate-900/70"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
          <img
            src={heroImg}
            alt=""
            aria-hidden="true"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover rotate-270 origin-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-mandala opacity-40" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl text-white">
              <p className="mb-4 font-cinzel text-sm uppercase tracking-[0.3em] text-amber-300">{t('hero.badge')}</p>
              <h1 className="font-cinzel text-4xl leading-tight sm:text-5xl lg:text-7xl">{t('hero.title')}</h1>
              <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">{t('hero.subtitle')}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#about" className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400">{t('hero.learn')}</a>
                <a href="#contact" className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10">{t('hero.visit')}</a>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-10 right-10 hidden rounded-full border border-white/20 bg-white/10 p-4 text-amber-300 lg:block">
            <FaLeaf size={28} className="animate-pulse" />
          </div>
        </section>
        <section id="presence" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="glass rounded-[2rem] p-6 lg:p-8">
            <div className="rounded-[1.5rem] border border-amber-200/40 bg-gradient-to-br from-forest/10 to-amber-100/60 p-6 dark:from-amber-500/10 dark:to-slate-900/80">
              <div className="flex items-center gap-3 text-amber-600 dark:text-amber-300">
                <FaPray size={24} />
                <span className="font-cinzel text-2xl text-forest dark:text-amber-200">{t('presence.title')}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
                {t('presence.description')}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {t('presence.items', { returnObjects: true }).map((item) => (
                  <div key={item} className="rounded-2xl border border-amber-200/40 bg-white/70 p-3 text-center text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700/40 dark:bg-slate-900/60 dark:text-slate-200">{item}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
        <section id="about" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="space-y-10">
            <div data-aos="fade-up">
              <p className="font-cinzel text-sm uppercase tracking-[0.3em] text-amber-600">{t('about.heading')}</p>
              <h2 className="mt-3 font-cinzel text-3xl text-forest dark:text-amber-200 sm:text-4xl">{t('about.timelineTitle')}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
                {t('about.paragraph')}
              </p>
            </div>
            <div data-aos="fade-up" className="grid gap-6 rounded-[2rem] border border-amber-200/40 bg-white/90 p-8 shadow-xl shadow-amber-200/10 dark:border-slate-700/40 dark:bg-slate-950/80 lg:grid-cols-4">
              {t('about.timeline', { returnObjects: true }).map((item, index) => (
                <div key={index} className="rounded-[2rem] border border-amber-100/70 bg-amber-50/80 p-6 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700/30 dark:bg-slate-900/70 dark:text-slate-200">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg shadow-amber-500/20">
                    {index + 1}
                  </div>
                  <p className="leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="biography" className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="glass rounded-[2rem] p-8 lg:p-12" data-aos="fade-up">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-cinzel text-sm uppercase tracking-[0.3em] text-amber-600">{t('biography.title')}</p>
                <h3 className="mt-2 font-cinzel text-3xl text-forest dark:text-amber-200">{t('biography.name')}</h3>
              </div>
              <div className="rounded-full border border-amber-300/40 bg-amber-100/70 px-4 py-2 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">{t('hero.subtitle')}</div>
            </div>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
                <p>{t('biography.paragraph1')}</p>
                <p>{t('biography.paragraph2')}</p>
                <p>{t('biography.paragraph3')}</p>
              </div>
              <div className="rounded-[1.5rem] border border-amber-200/40 bg-gradient-to-br from-forest/10 to-amber-100/60 p-6 dark:from-amber-500/10 dark:to-slate-900/80">
                <h4 className="font-cinzel text-xl text-forest dark:text-amber-200">{t('biography.achievementsTitle')}</h4>
                <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
                  {t('biography.achievements', { returnObjects: true }).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="ashram" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-cinzel text-sm uppercase tracking-[0.3em] text-amber-600">{t('ashram.heading')}</p>
              <h2 className="mt-2 font-cinzel text-3xl text-forest dark:text-amber-200 sm:text-4xl">{t('ashram.location')}</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t('ashram.items', { returnObjects: true }).map((item) => (
              <motion.div key={item} whileHover={{ y: -8, scale: 1.01 }} className="glass rounded-[1.5rem] p-6">
                <div className="mb-4 flex items-center gap-3 text-amber-600">
                  <FaHeart />
                  <span className="font-semibold">{item}</span>
                </div>
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{t('ashram.description')}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="records" className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="glass rounded-[2rem] p-8 lg:p-12" data-aos="fade-up">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-cinzel text-sm uppercase tracking-[0.3em] text-amber-600">{t('records.heading')}</p>
                <h2 className="mt-2 font-cinzel text-3xl text-forest dark:text-amber-200 sm:text-4xl">{t('records.title')}</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {t('records.items', { returnObjects: true }).map((item, index) => (
                <motion.div key={item} whileHover={{ scale: 1.03 }} className="rounded-[1.5rem] border border-amber-200/40 bg-gradient-to-br from-amber-100/80 to-white/80 p-6 text-center dark:from-amber-500/10 dark:to-slate-900/70">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-700">{index + 1}</div>
                  <h3 className="font-semibold text-forest dark:text-amber-200">{item}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="yoga" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div data-aos="fade-right">
              <p className="font-cinzel text-sm uppercase tracking-[0.3em] text-amber-600">{t('yoga.sectionTitle')}</p>
              <h2 className="mt-2 font-cinzel text-3xl text-forest dark:text-amber-200 sm:text-4xl">{t('yoga.heading')}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">{t('yoga.description')}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {t('yoga.benefits', { returnObjects: true }).map((benefit) => (
                  <span key={benefit} className="rounded-full border border-amber-300/40 bg-amber-100/70 px-4 py-2 text-sm dark:bg-amber-500/10">{benefit}</span>
                ))}
              </div>
              <p className="mt-6 rounded-2xl border border-amber-200/40 bg-white/70 p-4 text-slate-700 shadow-sm dark:bg-slate-900/60 dark:text-slate-300">{t('yoga.schedule')}</p>
              <a href="#contact" className="mt-6 inline-flex rounded-full bg-forest px-6 py-3 font-semibold text-white transition hover:bg-forest/90">{t('yoga.onlineRegistration')}</a>
            </div>
            <div data-aos="fade-left" className="glass rounded-[2rem] p-8">
              <div className="flex items-center gap-3 text-amber-600">
                <FaPray size={26} />
                <h3 className="font-cinzel text-2xl text-forest dark:text-amber-200">{t('yoga.dailyPractice')}</h3>
              </div>
              <div className="mt-6 space-y-4">
                {t('yoga.dailyPracticeItems', { returnObjects: true }).map((item) => (
                  <div key={item} className="rounded-2xl border border-amber-200/40 bg-white/60 p-4 dark:bg-slate-900/60">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="mb-8">
            <p className="font-cinzel text-sm uppercase tracking-[0.3em] text-amber-600">{t('gallery.heading')}</p>
            <h2 className="mt-2 font-cinzel text-3xl text-forest dark:text-amber-200 sm:text-4xl">{t('gallery.title')}</h2>
          </div>
          <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 3000 }} pagination={{ clickable: true }} className="mx-auto w-full max-w-6xl rounded-[2rem]">
            {galleryImages.map((src) => (
              <SwiperSlide key={src} className="flex justify-center">
                <div className="relative mx-auto h-[320px] w-full max-w-[980px] overflow-hidden rounded-[2rem] sm:h-[420px] lg:h-[560px]">
                  <img src={src} alt={t('gallery.alt')} loading="lazy" decoding="async" className="h-full w-full object-cover object-center" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section id="events" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="mb-8">
            <p className="font-cinzel text-sm uppercase tracking-[0.3em] text-amber-600">{t('events.heading')}</p>
            <h2 className="mt-2 font-cinzel text-3xl text-forest dark:text-amber-200 sm:text-4xl">{t('events.title')}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass rounded-[1.5rem] p-6 lg:col-span-2">
              <details className="group">
                <summary className="cursor-pointer font-semibold">Manage Events (admin)</summary>
                <div className="mt-4">
                  {!isAuthenticated && (
                    <form onSubmit={(e) => { e.preventDefault(); if (authEmail === adminEmail && authMobile === adminMobile) { setIsAuthenticated(true); } else { alert('Invalid credentials'); } }} className="mt-4 space-y-3">
                      <input type="email" value={authEmail} onChange={(e) => setAuthEmail(e.target.value)} placeholder="Email" className="w-full rounded-2xl border border-amber-200/40 p-3" />
                      <input type="text" value={authMobile} onChange={(e) => setAuthMobile(e.target.value)} placeholder="Mobile" className="w-full rounded-2xl border border-amber-200/40 p-3" />
                      <div className="flex gap-3">
                        <button type="submit" className="rounded-full bg-amber-500 px-4 py-2 text-white">Login</button>
                        <button type="button" onClick={() => { setAuthEmail(''); setAuthMobile(''); }} className="rounded-full border px-4 py-2">Clear</button>
                      </div>
                    </form>
                  )}

                  {isAuthenticated && (
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      const ev = { ...newEvent };
                      const updated = [ev, ...(userEvents || [])];
                      setUserEvents(updated);
                      localStorage.setItem('userEvents', JSON.stringify(updated));
                      setNewEvent({ title: '', date: '', type: '', description: '' });
                    }} className="mt-4 grid gap-3 sm:grid-cols-2">
                      <input value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} placeholder="Event title" className="w-full rounded-2xl border border-amber-200/40 p-3" />
                      <input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} className="w-full rounded-2xl border border-amber-200/40 p-3" />
                      <input value={newEvent.type} onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })} placeholder="Type (e.g., Workshop)" className="w-full rounded-2xl border border-amber-200/40 p-3" />
                      <input value={newEvent.description} onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })} placeholder="Short description" className="w-full rounded-2xl border border-amber-200/40 p-3" />
                      <div className="sm:col-span-2 flex gap-3">
                        <button className="rounded-full bg-forest px-4 py-2 text-white">Add Event</button>
                        <button type="button" onClick={() => { setIsAuthenticated(false); }} className="rounded-full border px-4 py-2">Logout</button>
                      </div>
                    </form>
                  )}
                </div>
              </details>
            </div>

            {((userEvents || []).length > 0) && (userEvents || []).map((event, idx) => (
              <div key={`user-${idx}-${event.title}`} className="glass rounded-[1.5rem] p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-100/80 px-3 py-1 text-sm text-amber-700 dark:bg-amber-500/10 dark:text-amber-200">{event.type || 'Event'}</span>
                </div>
                <h3 className="mt-4 font-cinzel text-xl text-forest dark:text-amber-200">{event.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{event.date} — {event.description}</p>
                <a href="#contact" className="mt-5 inline-flex rounded-full bg-forest px-5 py-2 text-sm font-semibold text-white">{t('events.register')}</a>
              </div>
            ))}

            {[
              { title: t('events.item1Title'), date: t('events.item1Date'), type: t('events.item1Type') },
              { title: t('events.item2Title'), date: t('events.item2Date'), type: t('events.item2Type') }
            ].map((event) => (
              <div key={event.title} className="glass rounded-[1.5rem] p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-100/80 px-3 py-1 text-sm text-amber-700 dark:bg-amber-500/10 dark:text-amber-200">{event.type}</span>
                </div>
                <h3 className="mt-4 font-cinzel text-xl text-forest dark:text-amber-200">{event.title}</h3>
                <p className="mt-3 text-slate-700 dark:text-slate-300">{t('events.description')}</p>
                <a href="#contact" className="mt-5 inline-flex rounded-full bg-forest px-5 py-2 text-sm font-semibold text-white">{t('events.register')}</a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass rounded-[2rem] p-8" data-aos="fade-right">
              <p className="font-cinzel text-sm uppercase tracking-[0.3em] text-amber-600">{t('contact.heading')}</p>
              <h2 className="mt-2 font-cinzel text-3xl text-forest dark:text-amber-200 sm:text-4xl">{t('contact.address')}</h2>
              <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">{t('contact.phoneLabel')}: {t('contact.phone')}</p>
              <a href="mailto:basavrajshejale7@gmail.com" className="mt-3 inline-flex text-lg text-slate-700 transition hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-300">
                {t('contact.emailLabel')}: basavrajshejale7@gmail.com
              </a>
              <a href="https://wa.me/9483104846" className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-semibold text-white" target="_blank" rel="noreferrer">
                <FaWhatsapp /> {t('contact.whatsapp')}
              </a>
              <div className="mt-6">
                <div className="w-full overflow-hidden rounded-2xl border border-amber-200/40">
                  <div className="aspect-[16/9] w-full">
                    <iframe
                      title="Gurudev Ashram location"
                      src="https://www.google.com/maps?q=5J39+Q7H+Shree+GurudevAshram+Akkalawadi+Aakalwadi+Maharashtra+416413&output=embed"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full border-0"
                    />
                  </div>
                </div>
                <a href="https://maps.app.goo.gl/c6udCWqBkvyM42K8A?g_st=aw" target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-amber-700">Open in Google Maps</a>
              </div>
            </div>
            <div className="glass rounded-[2rem] p-8" data-aos="fade-left">
              <form className="space-y-4">
                <input className="w-full rounded-2xl border border-amber-200/40 bg-white/70 p-3 outline-none dark:bg-slate-900/60" placeholder={t('contact.form.name')} />
                <input className="w-full rounded-2xl border border-amber-200/40 bg-white/70 p-3 outline-none dark:bg-slate-900/60" placeholder={t('contact.form.phone')} />
                <input className="w-full rounded-2xl border border-amber-200/40 bg-white/70 p-3 outline-none dark:bg-slate-900/60" placeholder={t('contact.form.email')} />
                <textarea className="min-h-32 w-full rounded-2xl border border-amber-200/40 bg-white/70 p-3 outline-none dark:bg-slate-900/60" placeholder={t('contact.form.message')} />
                <button className="rounded-full bg-amber-500 px-5 py-3 font-semibold text-slate-950">{t('contact.form.send')}</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-amber-200/40 bg-white/70 py-10 backdrop-blur-xl dark:bg-slate-950/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-4 lg:px-8">
          <div>
            <h3 className="font-cinzel text-xl text-forest dark:text-amber-200">{t('site.name')}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{t('footer.description')}</p>
          </div>
          <div>
            <h4 className="font-semibold">{t('footer.quickLinks')}</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li><a href="#about">{t('nav.about')}</a></li>
              <li><a href="#ashram">{t('nav.ashram')}</a></li>
              <li><a href="#contact">{t('nav.contact')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">{t('footer.social')}</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li><a href="https://wa.me/9483104846">{t('footer.socialLinks.whatsapp')}</a></li>
              <li><a href="https://www.youtube.com/@shreegurudevashrambhaktaru6613" target="_blank" rel="noreferrer">{t('footer.socialLinks.youtube')}</a></li>
              <li><a href="https://www.instagram.com/shree_amrutanand_swamiji_bhakt?igsh=ZW9pdWtxdmdpdWlz" target="_blank" rel="noreferrer">{t('footer.socialLinks.instagram')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">{t('footer.languageSwitch')}</h4>
            <select className="mt-3 w-full rounded-full border border-amber-400/40 bg-white/70 px-3 py-2 text-sm dark:bg-slate-900/70" value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="kn">ಕನ್ನಡ</option>
              <option value="mr">मराठी</option>
            </select>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap items-center justify-between px-4 text-sm text-slate-600 dark:text-slate-300 lg:px-8">
          <span>{t('footer.copyright')}</span>
          <a href="#home" className="text-amber-700 dark:text-amber-300">{t('footer.backToTop')}</a>
        </div>
      </footer>

      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 rounded-full bg-amber-500 p-4 text-slate-950 shadow-glow">
          <FaArrowUp />
        </button>
      )}
      <a href="https://wa.me/9483104846" target="_blank" rel="noreferrer" aria-label="WhatsApp chat" className="fixed bottom-24 right-6 rounded-full bg-green-600 p-4 text-white shadow-glow">
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}

export default App;
