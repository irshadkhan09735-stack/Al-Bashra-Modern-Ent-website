
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
          <p className="text-slate-500 text-xs uppercase tracking-widest">Â© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
