import { motion } from 'motion/react';
import { Terminal, Network, Cpu, Code2, Github, Instagram, Mail, ChevronRight } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 border-b border-border bg-surface/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3 font-bold text-white group cursor-pointer">
        <div className="w-10 h-10 bg-brand rounded-sm flex items-center justify-center text-black font-bold text-xl">H</div>
        <span className="tracking-widest uppercase text-sm">Hyde Ezra</span>
      </div>
      <div className="hidden md:flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.2em]">
        {['About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-brand transition-colors">
            <span className="text-brand mr-2">0{i + 1} /</span>
            {item}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="about" className="relative min-h-screen pt-40 pb-20 px-6 grid-bg overflow-hidden flex items-center">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 space-y-10">
        <div className="flex items-center gap-4">
          <span className="h-[1px] w-12 bg-brand"></span>
          <span className="text-brand uppercase tracking-widest text-[10px] font-bold">Teknik Komputer dan Jaringan 1</span>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[72px] md:text-[96px] leading-[0.85] font-bold text-white tracking-tighter"
        >
          Building <br/> 
          <span className="text-brand">Connected</span> <br/> 
          Systems.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-md leading-relaxed"
        >
          Specializing in network infrastructure, server management, and technical troubleshooting. 
          Crafting stable digital environments from the hardware up.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <button className="px-10 py-5 bg-brand text-black font-bold uppercase text-[10px] tracking-[0.2em] rounded-sm hover:-translate-y-1 transition-all shadow-lg shadow-brand/20">
            Download CV
          </button>
          <button className="px-10 py-5 border border-slate-700 text-white font-bold uppercase text-[10px] tracking-[0.2em] rounded-sm hover:bg-white hover:text-black transition-all">
            View Projects
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="relative w-full max-w-lg aspect-[4/5] bg-card border border-slate-800 rounded-sm overflow-hidden shadow-2xl group"
      >
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
          alt="Technical Background"
          className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 p-6 bg-card/90 backdrop-blur-md border border-slate-800 rounded-sm z-20 font-mono text-[10px] space-y-3 min-w-[200px]">
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-500 uppercase tracking-widest">ID</span>
            <span className="text-white">EZRA_HE_01</span>
          </div>
          <div className="flex justify-between border-b border-slate-800 pb-2">
            <span className="text-slate-500 uppercase tracking-widest">Specialization</span>
            <span className="text-brand">TKJ Networking</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
            <span className="text-slate-400">System Ready</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const SkillCard = ({ title, skills }: { title: string, skills: { name: string, level: string }[] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-10 bg-card border border-slate-800 rounded-sm relative overflow-hidden group shadow-2xl"
  >
    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
      <Network size={120} />
    </div>
    <h3 className="text-white uppercase tracking-widest text-xs font-bold mb-8 flex items-center gap-3">
      <span className="w-2 h-2 bg-brand"></span> {title}
    </h3>
    <div className="space-y-5">
      {skills.map(skill => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-end border-b border-slate-800/50 pb-2">
            <span className="text-sm font-medium text-slate-300">{skill.name}</span>
            <span className="text-brand font-mono text-[10px] uppercase">{skill.level}</span>
          </div>
          <div className="h-[2px] w-full bg-slate-800/50 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '85%' : '70%' }}
              className="h-full bg-brand"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div className="space-y-3">
          <p className="text-brand font-mono text-[11px] uppercase tracking-[0.3em] font-bold">Capabilities</p>
          <h2 className="text-5xl font-bold tracking-tighter">Technical Stack</h2>
        </div>
        <div className="hidden md:block h-[1px] flex-1 bg-slate-800/50 mx-16 mb-4" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <SkillCard 
          title="Networking"
          skills={[
            { name: 'MikroTik Configuration', level: 'Advanced' },
            { name: 'Cisco Routing/Switching', level: 'Advanced' },
            { name: 'VLAN & Layer 3 Setup', level: 'Intermediate' }
          ]}
        />
        <SkillCard 
          title="Hardware"
          skills={[
            { name: 'PC Assembly & Diagnostic', level: 'Expert' },
            { name: 'Server Infrastructure', level: 'Advanced' },
            { name: 'Maintenance & Troubleshooting', level: 'Expert' }
          ]}
        />
        <SkillCard 
          title="System Admin"
          skills={[
            { name: 'Debian/Ubuntu Server', level: 'Advanced' },
            { name: 'DNS & Web Server Setup', level: 'Advanced' },
            { name: 'System Security', level: 'Intermediate' }
          ]}
        />
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, img, category, desc, date }: { title: string, img: string, category: string, desc: string, date: string }) => (
  <motion.div 
    className="group bg-card border border-slate-800 rounded-sm overflow-hidden shadow-xl"
  >
    <div className="aspect-video relative overflow-hidden">
      <img 
        src={img} 
        alt={title}
        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4 px-3 py-1 bg-surface/90 backdrop-blur-sm border border-slate-800 text-brand font-mono text-[9px] uppercase tracking-widest">
        {category}
      </div>
    </div>
    <div className="p-8 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors tracking-tight">{title}</h3>
        <span className="text-[10px] text-brand font-mono italic">{date}</span>
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
      <a href="#" className="inline-flex items-center gap-2 text-brand text-[10px] uppercase font-bold tracking-[0.2em] group/link">
        View implementation <span className="text-lg group-hover/link:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-24 px-6 bg-[#0c0c0c]">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div className="space-y-3">
          <p className="text-brand font-mono text-[11px] uppercase tracking-[0.3em] font-bold">Portfolio</p>
          <h2 className="text-5xl font-bold tracking-tighter">Case Studies</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProjectCard 
          title="Enterprise WLAN Setup"
          category="Networking"
          date="Q3 2023"
          desc="Deployed a multi-VLAN wireless infrastructure for a school lab using CAPsMAN and Radius authentication."
          img="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800"
        />
        <ProjectCard 
          title="Debian Server Security"
          category="System Admin"
          date="Q2 2024"
          desc="Hardening Debian server environments with advanced firewall rules and security auditing."
          img="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
        />
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-40 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div className="space-y-10">
        <div className="space-y-4">
          <p className="text-brand font-mono text-[11px] uppercase tracking-[0.3em] font-bold">Contact</p>
          <h2 className="text-6xl font-bold tracking-tighter">Ready for <br/> <span className="text-brand">Collaboration.</span></h2>
          <p className="text-slate-400 max-w-sm leading-relaxed text-lg">
            Terbuka untuk peluang magang, proyek networking, atau diskusi teknis seputar infrastruktur IT.
          </p>
        </div>
        
        <div className="flex gap-6">
          <Github className="text-slate-500 hover:text-brand cursor-pointer transition-colors" size={24} />
          <Instagram className="text-slate-500 hover:text-brand cursor-pointer transition-colors" size={24} />
          <Mail className="text-slate-500 hover:text-brand cursor-pointer transition-colors" size={24} />
        </div>
      </div>
      
      <div className="bg-card border border-slate-800 p-10 rounded-sm relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
          <Code2 size={150} />
        </div>
        <div className="space-y-8 relative z-10">
          <div className="space-y-2">
            <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Full Name</label>
            <input type="text" className="w-full bg-surface border border-slate-800 p-4 text-white rounded-sm focus:border-brand outline-none transition-colors" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Email Address</label>
            <input type="email" className="w-full bg-surface border border-slate-800 p-4 text-white rounded-sm focus:border-brand outline-none transition-colors" placeholder="johndoe@email.com" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Message</label>
            <textarea className="w-full bg-surface border border-slate-800 p-4 text-white rounded-sm focus:border-brand outline-none transition-colors h-32" placeholder="Tell me about your project..." />
          </div>
          <button className="w-full py-5 bg-brand text-black font-bold uppercase text-[10px] tracking-[0.2em] rounded-sm hover:-translate-y-1 transition-all">
            Send Transmission
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="mt-auto flex flex-col md:flex-row justify-between items-center py-10 px-8 border-t border-slate-900 bg-surface">
    <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest text-slate-500">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
        Available for internships
      </div>
      <div className="hidden sm:block text-slate-700">|</div>
      <div>Location: Bandung, Indonesia</div>
    </div>
    <div className="flex gap-8 text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-6 md:mt-0">
      <a href="#" className="hover:text-brand transition-colors">GitHub</a>
      <a href="#" className="hover:text-brand transition-colors font-mono">01</a>
      <a href="#" className="hover:text-brand transition-colors">LinkedIn</a>
      <a href="#" className="hover:text-brand transition-colors font-mono">02</a>
      <a href="#" className="hover:text-brand transition-colors">Twitter</a>
      <a href="#" className="hover:text-brand transition-colors font-mono">03</a>
    </div>
  </footer>
);

export { Navbar, Hero, Skills, Projects, Contact, Footer };
