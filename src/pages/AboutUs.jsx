import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "About Us", hasDropdown: true },
  { label: "Academics", hasDropdown: true },
  { label: "Admissions", hasDropdown: true },
  { label: "Achievements", hasDropdown: true },
  { label: "Parents Corner", hasDropdown: true },
  { label: "Students Corner", hasDropdown: true },
  { label: "Alumni", hasDropdown: true },
  { label: "Career", hasDropdown: false },
];

const CORE_VALUES = [
  { key: "INDIVIDUALITY", desc: "To develop a unique thought process and respect for oneself" },
  { key: "SINCERITY", desc: "To instill an honest approach towards life" },
  { key: "DIGNITY", desc: "Dignity of labour and commitment towards work" },
  { key: "EQUITY", desc: "Being fair and impartial to everyone" },
  { key: "EMPATHY", desc: "Being considerate towards others" },
];

export default function AboutUs() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800 overflow-x-hidden">

      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center h-16 gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 w-52">
            <svg width="36" height="36" viewBox="0 0 38 38" fill="none">
              <path d="M8 30 L19 8 L30 30" stroke="#84cc16" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M19 8 L8 30" stroke="#1e3a5f" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="19" cy="8" r="3" fill="#f59e0b"/>
            </svg>
            <div>
              <div className="text-xs text-gray-400 leading-none">The</div>
              <div className="text-sm font-extrabold text-[#1e3a5f] leading-tight">Kalyani School</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 flex-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href="#"
                className="text-xs font-semibold text-gray-700 hover:text-[#84cc16] transition-colors px-2 py-1 flex items-center gap-0.5 whitespace-nowrap"
              >
                {l.label}
                {l.hasDropdown && (
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 12 12">
                    <path d="M2 4l4 4 4-4" strokeLinecap="round"/>
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Close / Menu Button (green X visible on hero) */}
          <button className="ml-auto bg-[#84cc16] text-white p-2 rounded-md md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h12M3 9h12M3 12h12" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="hidden md:flex bg-[#84cc16] text-white p-2 rounded-md">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 4l10 10M14 4L4 14" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href="#" className="text-sm font-semibold text-gray-700 hover:text-[#84cc16] py-1">{l.label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO HEADER ── */}
      <div className="pt-16">
        <div className="relative h-56 md:h-72 overflow-hidden">
          {/* School building background */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-800/50 to-gray-700/40 z-10" />
          <div className="absolute inset-0">
            <svg viewBox="0 0 1440 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
              {/* Sky */}
              <rect width="1440" height="300" fill="#b0c4b8"/>
              {/* Main building facade */}
              <rect x="100" y="40" width="1240" height="260" fill="#c8874a"/>
              {/* Brick rows */}
              {Array.from({length: 12}).map((_, row) =>
                Array.from({length: 20}).map((_, col) => (
                  <rect key={`${row}-${col}`}
                    x={100 + col * 62 + (row % 2) * 31}
                    y={40 + row * 22}
                    width="58" height="18"
                    fill="none" stroke="#a06030" strokeWidth="1" rx="1"
                  />
                ))
              )}
              {/* Large windows row 1 */}
              {[200, 400, 600, 800, 1000, 1200].map((x) => (
                <g key={x}>
                  <rect x={x} y="80" width="100" height="70" fill="#1e3a5f" rx="3"/>
                  <line x1={x+50} y1="80" x2={x+50} y2="150" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                  <line x1={x} y1="115" x2={x+100} y2="115" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                </g>
              ))}
              {/* Windows row 2 */}
              {[200, 400, 600, 800, 1000, 1200].map((x) => (
                <rect key={`w2-${x}`} x={x} y="175" width="100" height="50" fill="#1e3a5f" rx="3"/>
              ))}
              {/* School name sign */}
              <rect x="350" y="230" width="740" height="50" fill="rgba(0,0,0,0.3)" rx="4"/>
              <text x="720" y="263" textAnchor="middle" fill="white" fontSize="26" fontWeight="bold" fontFamily="sans-serif" opacity="0.7">THE KALYANI SCHOOL</text>
              {/* Greenery */}
              {[130, 280, 1100, 1250].map((x) => (
                <ellipse key={x} cx={x} cy="295" rx="35" ry="50" fill="#4a8a3a" opacity="0.8"/>
              ))}
            </svg>
          </div>
          {/* Page Title */}
          <div className="relative z-20 flex items-center h-full px-8 md:px-16">
            <h1 className="text-white text-3xl md:text-4xl font-bold drop-shadow-lg">The Kalyani School</h1>
          </div>
          {/* Left panel overlay with logo info */}
          <div className="absolute left-0 top-0 bottom-0 w-52 md:w-64 bg-white z-20 flex flex-col items-center justify-center px-4 py-4 border-r border-gray-100">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M12 50 L30 12 L48 50" stroke="#84cc16" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M30 12 L12 50" stroke="#1e3a5f" strokeWidth="6" strokeLinecap="round"/>
              <circle cx="30" cy="12" r="5" fill="#f59e0b"/>
            </svg>
            <div className="text-center mt-1">
              <div className="text-xs text-gray-400">The</div>
              <div className="text-lg font-extrabold text-[#1e3a5f]">Kalyani</div>
              <div className="text-lg font-extrabold text-[#1e3a5f]">School</div>
            </div>
            <div className="text-xs text-gray-500 mt-1">॥ अक्षयं ज्ञानम् ॥</div>
            <div className="mt-3 text-center">
              <p className="text-[11px] font-bold text-[#1e3a5f]">
                Linguistic Minority<span className="text-[#84cc16]"> Affiliated to CBSE </span>
                <span className="text-orange-500">1130643</span>
              </p>
            </div>
            <div className="mt-3 bg-[#1e3a5f] rounded-lg px-3 py-2 text-white text-center">
              <div className="text-[10px] font-bold tracking-widest text-yellow-400 uppercase">Diamond+</div>
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <div className="bg-yellow-400 text-[#1e3a5f] text-[9px] font-extrabold px-1.5 py-0.5 rounded">QS</div>
                <span className="font-bold text-xs">I-GAUGE</span>
              </div>
              <div className="text-[9px] text-gray-300">Indian School Ratings</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-2">
        <div className="max-w-5xl mx-auto ml-64 md:ml-72">
          <p className="text-xs text-gray-500">
            <Link to="/" className="hover:text-[#84cc16]">Home</Link>
            <span className="mx-1">›</span>
            <span className="text-[#1e3a5f] font-semibold">About Us</span>
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <main className="max-w-4xl mx-auto px-6 py-12">

        {/* About Text */}
        <h2 className="text-2xl font-extrabold text-[#1e3a5f] mb-5">The Kalyani school</h2>
        <p className="text-gray-600 text-sm leading-7 mb-5">
          For the past decade, The Kalyani School has proudly upheld a legacy of educational excellence. Guided by the philosophy of Padmashri Mrs. Manju Bharat Ram, her daughter Mrs. Deeksha Kalyani founded the school in 2015. From a young age she was inspired by her mother and wanted to build an institution like The Shri Ram Schools, in Pune. In a short span of time, The Kalyani School has created a name for itself that is considered synonymous with quality education. By providing students with opportunities for self-awareness, character development, and global exposure, it serves as a hub for holistic growth. Above all, the school places students and their mental well-being at the heart of its mission, fostering an environment where learners thrive and truly enjoy their educational journey.
        </p>
        <p className="text-gray-600 text-sm leading-7 mb-8">
          Promoted by the Kalyani Group under the aegis of the Akutai Kalyani Charitable Trust, The Kalyani School believes in guiding the mind, body and spirit of the young generation, helping them discover and realize their full potential as individuals and moulding them to be responsible citizens of society. We provide our children with a harmonious, stimulating learning environment; encouraging them to think independently, to respect themselves and others, and to value excellence.
        </p>

        <button className="bg-[#0d7a5f] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#0a6650] transition-all mb-12">
          Read More
        </button>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {
              title: "Our Mission",
              text: "To become a beacon of excellence in the teaching-learning process by offering an environment built on ethics and values. Providing vast, well equipped learning spaces and resources to optimise each student's potential. Continuously evolving to manage change.",
              color: "#84cc16",
            },
            {
              title: "Our Vision",
              text: "To provide a harmonious, stimulating environment which inspires all to strive for excellence and emerge as responsible future ready citizens.",
              color: "#f59e0b",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              {/* Header bar */}
              <div className="py-3 px-6 text-center" style={{ backgroundColor: item.color + "22" }}>
                <h3 className="font-bold text-base" style={{ color: item.color === "#84cc16" ? "#5a8a00" : "#c47a00" }}>
                  {item.title}
                </h3>
              </div>
              {/* Arrow decoration */}
              <div className="flex justify-center -mt-1">
                <svg width="24" height="16" viewBox="0 0 24 16">
                  <path d="M12 16 L0 0 L24 0 Z" fill={item.color + "22"}/>
                </svg>
              </div>
              {/* Body */}
              <div className="px-6 py-5 bg-white">
                <p className="text-sm text-gray-600 text-center leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-12">
          {/* Header */}
          <div className="py-3 px-6 text-center bg-yellow-50">
            <h3 className="font-bold text-base text-yellow-700">Core Values</h3>
          </div>
          <div className="flex justify-center -mt-1">
            <svg width="24" height="16" viewBox="0 0 24 16">
              <path d="M12 16 L0 0 L24 0 Z" fill="#fefce8"/>
            </svg>
          </div>
          <div className="px-8 py-6 bg-white flex flex-col md:flex-row gap-10 items-start">
            {/* Left: Values list */}
            <div className="flex-1">
              <p className="text-sm text-gray-600 mb-5">The values we wish to inculcate:</p>
              <ul className="space-y-3">
                {CORE_VALUES.map((v) => (
                  <li key={v.key} className="flex items-start gap-3">
                    <span className="text-[#84cc16] mt-0.5">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 8 L6 12 L14 4" stroke="#84cc16" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <p className="text-sm text-gray-700">
                      <span className="font-bold text-[#1e3a5f]">{v.key}</span>
                      {" – "}{v.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Hexagon diagram */}
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-64">
              <svg viewBox="0 0 260 240" width="260" height="240">
                {/* Vision hexagon - top */}
                <polygon
                  points="130,10 175,37.5 175,92.5 130,120 85,92.5 85,37.5"
                  fill="#f59e0b"
                />
                <text x="130" y="62" textAnchor="middle" fill="white" fontSize="22">🎯</text>
                <text x="130" y="95" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Vision</text>

                {/* Mission hexagon - bottom left */}
                <polygon
                  points="82,120 127,147.5 127,202.5 82,230 37,202.5 37,147.5"
                  fill="#0d7a5f"
                />
                <text x="82" y="172" textAnchor="middle" fill="white" fontSize="22">🌱</text>
                <text x="82" y="205" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Mission</text>

                {/* Values hexagon - bottom right */}
                <polygon
                  points="178,120 223,147.5 223,202.5 178,230 133,202.5 133,147.5"
                  fill="#1e3a5f"
                />
                <text x="178" y="172" textAnchor="middle" fill="white" fontSize="22">✨</text>
                <text x="178" y="205" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Values</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Leadership / Founder section */}
        <div className="bg-gradient-to-r from-[#0d7a5f]/5 to-[#84cc16]/5 rounded-2xl p-8 border border-[#84cc16]/20">
          <h3 className="text-xl font-bold text-[#1e3a5f] mb-4">Our Founder</h3>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0d7a5f] to-[#84cc16] flex items-center justify-center flex-shrink-0">
              <span className="text-4xl">👩‍💼</span>
            </div>
            <div>
              <h4 className="font-bold text-[#1e3a5f] text-lg mb-1">Mrs. Deeksha Kalyani</h4>
              <p className="text-sm text-[#84cc16] font-semibold mb-3">Founder & Director</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Inspired by Padmashri Mrs. Manju Bharat Ram's philosophy of education, Mrs. Deeksha Kalyani founded The Kalyani School in 2015 with a vision to create an institution synonymous with quality education in Pune — one where every child thrives holistically.
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0d7a5f] text-white mt-10 relative overflow-hidden">
        {/* Wave top */}
        <div className="w-full overflow-hidden leading-none" style={{ marginTop: -2 }}>
          <svg viewBox="0 0 1440 60" className="w-full" fill="white" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-10 pt-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Map + Address */}
          <div>
            <div className="bg-white rounded-xl overflow-hidden mb-4 h-32 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100" />
              <div className="relative z-10 text-center">
                <div className="text-2xl">📍</div>
                <div className="text-xs font-bold text-gray-700">The Kalyani School</div>
                <div className="text-[10px] text-gray-500">Manjari, Pune</div>
              </div>
            </div>
            <div className="space-y-2 text-sm text-white/90">
              <div className="flex items-start gap-2">
                <span>📍</span>
                <p>Manjari (Budruk), Near Hadapsar, Pune 412307.</p>
              </div>
              <div className="flex items-start gap-2">
                <span>📞</span>
                <div>
                  <p>Connect with us:</p>
                  <p>+91 8149117666 &nbsp; +91 8149118666</p>
                  <p>+91 8149119666</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <p className="text-sm">info@thekalyanischool.edu.in</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-light mb-3">
              Main <span className="font-extrabold">Quicklinks</span>
            </h4>
            <div className="w-10 h-0.5 bg-orange-400 mb-4" />
            {["Home", "About Us", "Curriculum", "Admissions", "Achievements", "Parents Corner", "Career", "Contact us"].map((l) => (
              <a key={l} href="#" className="flex items-center gap-2 text-sm text-white/80 hover:text-white mb-2 transition-colors">
                <span className="text-xs">→</span> {l}
              </a>
            ))}
          </div>

          {/* Associations */}
          <div>
            <h4 className="text-base font-extrabold mb-3">Associations</h4>
            <div className="w-10 h-0.5 bg-orange-400 mb-4" />
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "INTACH", emoji: "🏛️" },
                { name: "Int'l Youth Program", emoji: "🌍" },
                { name: "Sports Champ", emoji: "🏆" },
                { name: "World Classroom", emoji: "🌐" },
                { name: "TORRINS", emoji: "📖" },
                { name: "AFS Programs", emoji: "✈️" },
              ].map((a) => (
                <div key={a.name} className="bg-white/10 rounded-lg px-2 py-2 flex flex-col items-center gap-1 hover:bg-white/20 transition-all cursor-pointer">
                  <span className="text-xl">{a.emoji}</span>
                  <span className="text-[10px] text-center font-semibold text-white/80">{a.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Collaboration */}
          <div>
            <h4 className="text-base font-light mb-3">
              Academic <span className="font-extrabold">Collaboration</span>
            </h4>
            <div className="w-10 h-0.5 bg-orange-400 mb-4" />
            <div className="flex flex-col gap-3">
              {[
                { name: "The Shri Ram School", emoji: "🏫" },
                { name: "Shri Educare", emoji: "🎓" },
              ].map((c) => (
                <div key={c.name} className="bg-white rounded-xl p-3 flex items-center gap-3">
                  <span className="text-2xl">{c.emoji}</span>
                  <span className="text-sm font-bold text-gray-700">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 px-6 py-3 flex items-center justify-between max-w-7xl mx-auto">
          <p className="text-xs text-white/50">© 2025 The Kalyani School, Pune. All rights reserved.</p>
          <p className="text-xs text-white/50">Crafted with ❤️ by Evonia</p>
        </div>
      </footer>

    </div>
  );
}