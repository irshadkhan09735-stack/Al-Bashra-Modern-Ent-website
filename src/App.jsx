import React, { useState, useEffect } from 'react';
import {
  Building2,
  HardHat,
  Construction,
  PaintBucket,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Users,
  Clock,
  Award,
  Star,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Hammer,
  Home,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const COLORS = {
  primary: '#0F172A', // Dark Blue (Slate 900)
  accent: '#D4AF37',  // Gold
  light: '#F8FAFC',   // Light Gray/White
  text: '#334155',    // Slate 700
};

const SERVICES = [
  {
    title: 'Building Construction',
    desc: 'Full-scale residential and commercial building construction with structural excellence.',
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    title: 'Villa Construction',
    desc: 'Luxury villa projects tailored to modern architectural aesthetics and client needs.',
    icon: <Home className="w-8 h-8" />,
  },
  {
    title: 'Commercial Projects',
    desc: 'Robust infrastructure and commercial spaces designed for business growth.',
    icon: <Construction className="w-8 h-8" />,
  },
  {
    title: 'Finishing Works',
    desc: 'High-quality block work, plastering, and premium finishing for interiors and exteriors.',
    icon: <PaintBucket className="w-8 h-8" />,
  },
  {
    title: 'Civil & Structural',
    desc: 'Expert civil engineering and structural works ensuring long-term durability.',
    icon: <HardHat className="w-8 h-8" />,
  },
  {
    title: 'Maintenance',
    desc: 'Professional renovation and maintenance services to keep your assets in top shape.',
    icon: <Hammer className="w-8 h-8" />,
  },
];

const PROJECTS = [
  { id: 1, title: "Modern Commercial Plaza", category: "Commercial", location: "Ibri", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Luxury Desert Villa", category: "Residential", location: "Dhahirah", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Government Admin Building", category: "Civil", location: "Muscat", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, title: "Premium Residential Block", category: "Residential", location: "Ibri", img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80" },
  { id: 5, title: "Site Inspection Team", category: "On-Site", location: "Tabuk", img: "https://i.postimg.cc/QKjTHBbq/1767010702268.jpg" },
  { id: 6, title: "Site Inspection", category: "Going On-Site", location: "Saudi Arabia", img: "https://i.postimg.cc/kVpyLy7j/IMG-20260320-061804.jpg" },
];

const NavItem = ({ href, children, mobile, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`${mobile ? 'block py-4 text-xl border-b border-slate-800' : 'relative group px-2 text-sm font-semibold'} text-white uppercase tracking-wider transition-colors hover:text-amber-500`}
  >
    {children}
    {!mobile && (
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
    )}
  </a>
);

const SectionTitle = ({ subtitle, title, light }) => (
  <div className="mb-12 text-center">
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-amber-500 font-bold tracking-[0.2em] uppercase text-sm block mb-3"
    >
      {subtitle}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className={`text-3xl md:text-5xl font-bold ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      className="w-24 h-1 bg-amber-500 mx-auto mt-6 rounded-full"
    ></motion.div>
  </div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden selection:bg-amber-500 selection:text-white">

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-slate-900">
              <Building2 size={24} strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-xl font-black text-white tracking-tighter leading-none block">AL-BASHRA</span>
              <span className="text-[10px] text-amber-500 font-bold tracking-[0.25em] block -mt-1 uppercase">Modern Ent.</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#contact">Contact</NavItem>
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-2.5 rounded-sm font-bold text-sm uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              Get a Quote
            </a>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[90] bg-slate-950 px-8 pt-24"
          >
            <NavItem mobile href="#home" onClick={() => setMobileMenuOpen(false)}>Home</NavItem>
            <NavItem mobile href="#about" onClick={() => setMobileMenuOpen(false)}>About</NavItem>
            <NavItem mobile href="#services" onClick={() => setMobileMenuOpen(false)}>Services</NavItem>
            <NavItem mobile href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</NavItem>
            <NavItem mobile href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavItem>
            <div className="mt-12 flex flex-col gap-6">
              <div className="flex items-center gap-4 text-slate-400">
                <Phone size={20} className="text-amber-500" />
                <span>+968 9977 9216</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <Mail size={20} className="text-amber-500" />
                <span>irshadkk0786@gmail.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541976590911-c19e38f7ad20?auto=format&fit=crop&q=80&w=1920"
            alt="Construction background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block py-2 px-4 border border-amber-500/50 rounded-full bg-amber-500/10 backdrop-blur-sm"
          >
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs">Modern Construction Specialists</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight"
          >
            Building the <br /><span className="text-amber-500">Modern Vision</span> of Oman
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            Excellence in civil engineering, architectural finishing, and premium construction projects based in Ibri, Al-Dhahirah.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#projects" className="group bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2">
              Our Portfolio <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest transition-all">
              Contact Us
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Completed Projects', val: '250+', icon: <CheckCircle2 className="text-amber-500 mx-auto mb-4" /> },
              { label: 'Years Experience', val: '15+', icon: <Clock className="text-amber-500 mx-auto mb-4" /> },
              { label: 'Skilled Workers', val: '120+', icon: <Users className="text-amber-500 mx-auto mb-4" /> },
              { label: 'Satisfied Clients', val: '100%', icon: <Award className="text-amber-500 mx-auto mb-4" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {stat.icon}
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.val}</div>
                <div className="text-slate-400 font-semibold text-xs uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                alt="Expert construction workers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-amber-500 -z-0"></div>
            <div className="absolute top-10 -left-6 bg-slate-900 text-white p-8 z-20 shadow-xl hidden lg:block">
              <span className="text-4xl font-bold text-amber-500">15+</span>
              <p className="text-xs font-bold uppercase tracking-widest mt-2">Years of <br />Industry Mastery</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">About Al-Bashra Modern Ent.</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Mastering Construction with Integrity & Quality</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Founded in Ibri, Al-Bashra Modern Enterprises has grown into a leading name in Oman's construction landscape. We specialize in turning architectural blueprints into enduring structures that define the future of our communities.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Uncompromising Quality Assurance",
                "On-Time Project Delivery",
                "Advanced Safety Standards",
                "Eco-Friendly Construction Practices"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-amber-600" />
                  </div>
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact" className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-sm group w-fit">
              Learn More About Us <ArrowRight size={20} className="text-amber-500 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Our Specializations" title="Comprehensive Solutions" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full group-hover:bg-amber-500/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-900 text-amber-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4">{s.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6">{s.desc}</p>
                  <a href="#contact" className="text-amber-600 text-xs font-black uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                    Inquire Now <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 block">Our Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Delivering Landmarks Across the Region</h2>
            </div>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-colors">
              View All Projects
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative h-[400px] overflow-hidden cursor-pointer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-amber-500 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">{project.category} — {project.location}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <div className="w-12 h-1 bg-amber-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle light subtitle="Why Choose Us" title="Building Excellence" />

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
            {[
              { icon: <Users size={40} />, title: 'Expert Team', text: 'Highly qualified engineers and master craftsmen.' },
              { icon: <Award size={40} />, title: 'Quality First', text: 'Sourcing premium materials for structural integrity.' },
              { icon: <Clock size={40} />, title: 'Timely Delivery', text: 'Rigorous project management to meet deadlines.' },
              { icon: <MessageSquare size={40} />, title: 'Client Focus', text: 'Transparent communication throughout the build.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center text-amber-500 mx-auto mb-6 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Get In Touch" title="Let's Build Something Great" />

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: <Phone size={22} />, label: 'Call Us', val: '+968 9977 9216' },
                { icon: <Mail size={22} />, label: 'Email Us', val: 'irshadkk0786@gmail.com' },
                { icon: <MapPin size={22} />, label: 'Visit Us', val: 'Ibri, Al-Dhahirah, Sultanate of Oman' },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-5 p-6 bg-white shadow-md border border-slate-100">
                  <div className="w-12 h-12 shrink-0 bg-slate-900 text-amber-500 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-1">{c.label}</div>
                    <div className="text-slate-800 font-semibold">{c.val}</div>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 pt-4">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-11 h-11 flex items-center justify-center bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-900 transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={(e) => e.preventDefault()}
              className="bg-white p-8 shadow-xl space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <input type="text" placeholder="Full Name" className="w-full border border-slate-200 px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" />
                <input type="tel" placeholder="Phone Number" className="w-full border border-slate-200 px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full border border-slate-200 px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" />
              <textarea placeholder="Tell us about your project" rows={5} className="w-full border border-slate-200 px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors resize-none"></textarea>
              <button type="submit" className="w-full bg-slate-900 hover:bg-amber-500 hover:text-slate-900 text-white px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                Send Message <ArrowRight size={18} />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-slate-900">
              <Building2 size={18} strokeWidth={2.5} />
            </div>
            <span className="text-white font-black tracking-tighter text-sm">AL-BASHRA MODERN ENT.</span>
          </div>
          <p className="text-slate-500 text-xs uppercase tracking-widest">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
