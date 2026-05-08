import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = ["About", "Academics", "Admissions", "Activities", "Gallery", "Contact"];

const AWARDS = [
  {
    title: "QS I-GAUGE",
    desc: "The Kalyani School has achieved a DIAMOND+ level in the QS I-GAUGE rating for Indian schools.",
    side: "left",
    color: "#f59e0b",
  },
  {
    title: "Education World: C-Fore Rankings",
    desc: "C-Fore has ranked The Kalyani School 1st in Pune amongst all the CBSE schools for following the National Curriculum.",
    side: "left",
    color: "#84cc16",
  },
  {
    title: "National Green School Rankings",
    desc: "The Kalyani School, Pune, Maharashtra, has been honoured with the Platinum Category of The Climate Project Foundation's Green Campus Programme Award in 2025.",
    side: "left",
    color: "#10b981",
  },
  {
    title: "Education World India School Rankings",
    desc: "TKS ranked 1st in Pune & 6th in Maharashtra – under the CO-ED Day Schools Category by Education World India School Rankings 2023-24.",
    side: "right",
    color: "#f59e0b",
  },
  {
    title: "IC3 Institute",
    desc: "The Kalyani School has been awarded the accreditation level Grade A+ accredited by the IC3 Institute.",
    side: "right",
    color: "#10b981",
  },
];

export default function KalyaniSchool() {
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
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
              <path d="M8 30 L19 8 L30 30" stroke="#84cc16" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M19 8 L8 30" stroke="#1e3a5f" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="19" cy="8" r="3" fill="#f59e0b"/>
            </svg>
            <div>
              <div className="text-xs text-gray-400 leading-none font-medium">The</div>
              <div className="text-base font-extrabold text-[#1e3a5f] leading-tight tracking-tight">Kalyani School</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((l) => (
                l === "About" ? (
                  <Link key={l} to="/about" className="text-sm font-semibold text-gray-700 hover:text-[#84cc16] transition-colors">
                    {l}
                  </Link>
                ) : (
                  <a
                    key={l}
                    href="#"
                    className="text-sm font-semibold text-gray-700 hover:text-[#84cc16] transition-colors"
                  >
                    {l}
                  </a>
                )
              ))}
            <button className="bg-[#84cc16] text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#65a30d] transition-colors">
              Admissions
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden bg-[#84cc16] text-white p-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              l === "About" ? (
                <Link key={l} to="/about" className="text-sm font-semibold text-gray-700 hover:text-[#84cc16]">
                  {l}
                </Link>
              ) : (
                <a key={l} href="#" className="text-sm font-semibold text-gray-700 hover:text-[#84cc16]">
                  {l}
                </a>
              )
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="pt-16 min-h-screen flex">
        {/* Left Panel */}
        <div className="w-full md:w-[340px] flex-shrink-0 flex flex-col items-center justify-center px-8 py-12 bg-white border-r border-gray-100">
          {/* Logo large */}
          <div className="flex flex-col items-center mb-6">
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
              <path d="M20 74 L45 20 L70 74" stroke="#84cc16" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M45 20 L20 74" stroke="#1e3a5f" strokeWidth="8" strokeLinecap="round"/>
              <circle cx="45" cy="20" r="7" fill="#f59e0b"/>
            </svg>
            <div className="text-center mt-2">
              <div className="text-sm text-gray-400">The</div>
              <div className="text-2xl font-extrabold text-[#1e3a5f]">Kalyani</div>
              <div className="text-2xl font-extrabold text-[#1e3a5f]">School</div>
            </div>
            <div className="text-sm text-gray-500 mt-1 font-medium">॥ अक्षयं ज्ञानम् ॥</div>
          </div>

          {/* Affiliation Badge */}
          <div className="text-center mb-5">
            <p className="text-sm font-bold text-[#84cc16]">
              Affiliated to CBSE{" "}
              <span className="text-orange-500">1130643</span>
            </p>
            <p className="text-sm font-semibold text-[#1e3a5f]">Linguistic Minority</p>
          </div>

          {/* I-GAUGE Badge */}
          <div className="bg-[#1e3a5f] rounded-xl px-5 py-3 text-white text-center mb-6 w-full max-w-[200px]">
            <div className="text-xs font-bold tracking-widest text-yellow-400 uppercase">Diamond+</div>
            <div className="flex items-center justify-center gap-1 mt-1">
              <div className="bg-yellow-400 text-[#1e3a5f] text-xs font-extrabold px-2 py-0.5 rounded">QS</div>
              <span className="font-bold text-sm">I-GAUGE</span>
            </div>
            <div className="text-xs text-gray-300 mt-0.5">Indian School Ratings</div>
          </div>

          {/* Vision */}
          <div className="text-center mb-6">
            <p className="text-base font-bold text-[#84cc16] mb-2">Our Vision</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              To provide a harmonious stimulating learning environment which inspires all to strive for excellence and emerge as responsible citizens
            </p>
          </div>

          <button className="border-2 border-gray-300 text-gray-700 text-sm font-semibold px-6 py-3 rounded-xl hover:border-[#84cc16] hover:text-[#84cc16] transition-all flex items-center gap-2">
            <span>→</span> Explore More
          </button>
        </div>

        {/* Right Hero */}
        <div
          className="flex-1 relative overflow-hidden flex items-center"
          style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2018/07/05/16/59/students-3518726_1280.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Background blur circles */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-[#84cc16]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl" />

          {/* Gradient overlay text area */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />

          {/* Placeholder for school children image */}
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="w-full h-full bg-gradient-to-l from-[#1e3a5f]/20 to-transparent" />
          </div>

          {/* Hero Text */}
          <div className="relative z-20 px-12 py-16 max-w-lg">
            <p
              className="text-5xl font-black leading-none mb-1 uppercase tracking-tight"
              style={{
                color: "#1e3a5f",
                textShadow: "0 0 20px rgba(255, 255, 255, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3)"
              }}
            >
              The
            </p>
            <p
              className="text-6xl font-black leading-none mb-5 uppercase tracking-tight"
              style={{
                color: "#1e3a5f",
                textShadow: "0 0 25px rgba(255, 255, 255, 0.7), 0 3px 6px rgba(0, 0, 0, 0.4)"
              }}
            >
              Happy Place
            </p>

            <div className="mt-10 flex gap-4 flex-wrap">
              <Link
                to="/admission-enquiry"
                className="bg-[#84cc16] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#65a30d] transition-all shadow-lg"
              >
                Admissions Enquiry
              </Link>
              <button className="border-2 border-white/60 text-white font-semibold px-6 py-3 rounded-xl hover:border-white hover:bg-white/10 transition-all">
                Explore More →
              </button>
            </div>
          </div>

          {/* Decorative school children silhouette */}
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-20 flex items-end justify-end">
            <svg viewBox="0 0 400 500" className="w-full h-full" fill="white">
              <ellipse cx="200" cy="480" rx="180" ry="20" />
              <circle cx="160" cy="200" r="40" />
              <rect x="130" y="240" width="60" height="120" rx="10"/>
              <circle cx="240" cy="210" r="35" />
              <rect x="215" y="245" width="50" height="110" rx="10"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS BAR ── */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {[
          { label: "Parent", sub: "Portal", color: "bg-orange-500", icon: "👨‍👩‍👧", link: "/parent-portal" },
          { label: "Admissions", sub: "Enquiry", color: "bg-blue-600", icon: "📋" },
          { label: "Contact Us", sub: "+91 8149117666", color: "bg-pink-500", icon: "📞" },
          { label: "TKS International Exam", sub: "Planner", color: "bg-teal-500", icon: "🌐" },
        ].map((item) => {
          const tile = (
            <div
              className={`${item.color} text-white px-6 py-5 flex items-center gap-4 cursor-pointer hover:brightness-110 transition-all`}
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <div className="text-sm font-medium opacity-90">{item.label}</div>
                <div className="text-lg font-extrabold leading-snug whitespace-pre-line">{item.sub}</div>
              </div>
            </div>
          );
          return item.link ? (
            <Link key={item.sub} to={item.link}>
              {tile}
            </Link>
          ) : (
            <div key={item.sub}>
              {tile}
            </div>
          );
        })}
      </div>

      {/* ── WELCOME SECTION ── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-light text-gray-700">
            Welcome to{" "}
            <span className="font-extrabold text-[#1e3a5f]">The Kalyani School</span>
          </h2>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* School Building Image Placeholder */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-amber-100 to-orange-50 aspect-[4/3] flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-100" />
            {/* Brick building illustration */}
            <svg viewBox="0 0 600 400" className="w-full h-full absolute inset-0" preserveAspectRatio="xMidYMid slice">
              {/* Sky */}
              <rect width="600" height="400" fill="#e8f4f8"/>
              {/* Building */}
              <rect x="80" y="120" width="440" height="260" fill="#c87941" rx="4"/>
              {/* Brick pattern */}
              {Array.from({length: 10}).map((_, row) =>
                Array.from({length: 8}).map((_, col) => (
                  <rect key={`${row}-${col}`}
                    x={80 + col*55 + (row%2)*27}
                    y={120 + row*26}
                    width="50" height="22"
                    fill="none" stroke="#a0622e" strokeWidth="1.5" rx="1"
                  />
                ))
              )}
              {/* Windows */}
              {[150, 280, 410].map((x) => (
                <g key={x}>
                  <rect x={x} y="160" width="90" height="80" fill="#1e3a5f" rx="4"/>
                  <line x1={x+45} y1="160" x2={x+45} y2="240" stroke="white" strokeWidth="2"/>
                  <line x1={x} y1="200" x2={x+90} y2="200" stroke="white" strokeWidth="2"/>
                </g>
              ))}
              {/* Ground */}
              <rect x="0" y="370" width="600" height="30" fill="#8db87a"/>
              {/* Plants */}
              <ellipse cx="100" cy="360" rx="20" ry="30" fill="#5a9e4a"/>
              <rect x="97" y="360" width="6" height="20" fill="#8b6914"/>
              <ellipse cx="500" cy="355" rx="25" ry="35" fill="#5a9e4a"/>
            </svg>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
              A school that every child, parent, and teacher loves
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              At The Kalyani School, happiness is at the heart of learning. Experience an environment where every child feels valued, every parent feels heard, and every teacher feels inspired.
            </p>
            <button className="border-2 border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:border-[#84cc16] hover:text-[#84cc16] transition-all flex items-center gap-2 mb-8">
              → Explore More
            </button>

            {/* Partners */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-bold text-[#1e3a5f] mb-3">Promoted By</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 16 L10 4 L16 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">KALYANI</div>
                      <div className="text-xs font-semibold text-gray-700">Driving Innovation</div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1e3a5f] mb-3">Academic Collaboration</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                      <span className="text-lg">🎓</span>
                      <span className="text-xs font-bold text-blue-700">SHRI EDUCARE</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-lg">🏫</span>
                      <span className="text-xs font-bold text-red-700">THE SHRI RAM SCHOOL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AWARDS SECTION ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-700">
              Our <span className="font-extrabold text-[#1e3a5f]">Awards</span>
            </h2>
            <div className="w-24 h-1 bg-orange-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="relative flex flex-col md:flex-row gap-0 items-center justify-center">
            {/* Left Awards */}
            <div className="flex flex-col gap-8 md:w-[35%] md:text-right">
              {AWARDS.filter((a) => a.side === "left").map((award) => (
                <div key={award.title} className="group">
                  <div className="flex md:flex-row-reverse items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
                      style={{ backgroundColor: award.color + "22", border: `2px solid ${award.color}` }}
                    >
                      <span style={{ color: award.color }} className="text-lg">🏆</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1e3a5f] mb-1">{award.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{award.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Logo */}
            <div className="md:w-[30%] flex items-center justify-center py-8 md:py-0">
              <div className="relative">
                {/* Orbit rings */}
                <div className="w-52 h-52 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-xl">
                    <div className="text-center">
                      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="mx-auto">
                        <path d="M10 42 L25 10 L40 42" stroke="#84cc16" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <path d="M25 10 L10 42" stroke="#1e3a5f" strokeWidth="5" strokeLinecap="round"/>
                        <circle cx="25" cy="10" r="4" fill="#f59e0b"/>
                      </svg>
                      <div className="text-xs font-bold text-[#1e3a5f] mt-1">The Kalyani</div>
                      <div className="text-xs font-bold text-[#1e3a5f]">School</div>
                      <div className="text-[9px] text-gray-400 mt-1">॥ अक्षयं ज्ञानम् ॥</div>
                    </div>
                  </div>
                </div>

                {/* Decorative dots */}
                {[0, 72, 144, 216, 288].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      top: `${50 + 47 * Math.sin((deg * Math.PI) / 180)}%`,
                      left: `${50 + 47 * Math.cos((deg * Math.PI) / 180)}%`,
                      transform: "translate(-50%, -50%)",
                      backgroundColor: ["#f59e0b", "#84cc16", "#10b981", "#1e3a5f", "#f59e0b"][i],
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right Awards */}
            <div className="flex flex-col gap-8 md:w-[35%]">
              {AWARDS.filter((a) => a.side === "right").map((award) => (
                <div key={award.title} className="group">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mt-1"
                      style={{ backgroundColor: award.color + "22", border: `2px solid ${award.color}` }}
                    >
                      <span style={{ color: award.color }} className="text-lg">🥇</span>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#1e3a5f] mb-1">{award.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{award.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GUIDING ALUMNI ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-3">
            <h2 className="text-4xl font-light text-gray-700">
              Guiding <span className="font-extrabold text-[#1e3a5f]">Alumni</span>
            </h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto mt-3 rounded-full mb-5" />
            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
              We are proud of our alumni who are setting an example and motivating younger students. Here are some alumni who are actively guiding current students by answering questions, conducting webinars and much more.
            </p>
          </div>

          <div className="relative mt-12">
            {/* Prev arrow */}
            <button className="absolute -left-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow hover:bg-gray-100 z-10">
              <span className="text-gray-500 text-sm">‹</span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Annesha Bhattacharjee", year: "2025", avatar: "AB", color: "#f87171", university: "OP Jindal Global University", stream: "Law" },
                { name: "Aadya Sharma", year: "2025", avatar: "AS", color: "#0d9488", university: "CHRIST (Deemed to be University)", stream: "Psychology" },
                { name: "Kritiv Prabhu", year: "2025", avatar: "K", color: "#0d9488", university: "Indian Institute of Technology (Banaras Hindu University), Varanasi", stream: "Science" },
              ].map((alumni) => (
                <div key={alumni.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center mb-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-3"
                      style={{ backgroundColor: alumni.color }}
                    >
                      {alumni.avatar}
                    </div>
                    <h4 className="font-bold text-[#0d9488] text-base text-center">{alumni.name}</h4>
                    <p className="text-xs font-semibold text-gray-600 mt-0.5">{alumni.year} – The Kalyani school</p>
                  </div>
                  <div className="border-t border-gray-100 pt-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">🎓</span>
                      <p className="text-xs text-gray-600">{alumni.university}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">⚡</span>
                      <p className="text-xs text-gray-600">{alumni.stream}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Next arrow */}
            <button className="absolute -right-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow hover:bg-gray-100 z-10">
              <span className="text-gray-500 text-sm">›</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── ALUMNI GUIDANCE / SUCCESS STORIES BAR ── */}
      <div className="bg-[#84cc16] grid grid-cols-2">
        {[
          { label: "Alumni", bold: "Guidance" },
          { label: "Success", bold: "Stories" },
        ].map((item) => (
          <div key={item.bold} className="flex items-center justify-center gap-4 py-4 border-r border-white/30 last:border-r-0">
            <span className="text-white text-sm font-medium">
              {item.label} <span className="font-extrabold">{item.bold}</span>
            </span>
            <button className="bg-white text-gray-700 text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-gray-50 transition-all flex items-center gap-1">
              → Explore More
            </button>
          </div>
        ))}
      </div>

      {/* ── RECENT ACTIVITIES ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-light text-gray-700">
              Recent <span className="font-extrabold text-[#1e3a5f]">Activities</span>
            </h2>
            <div className="w-20 h-1 bg-orange-400 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Large featured */}
            <div className="md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: 420 }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-purple-900 flex items-end">
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                    {/* Dancer silhouettes */}
                    {[80, 150, 220, 290].map((x, i) => (
                      <g key={i} transform={`translate(${x}, 100)`}>
                        <circle cx="20" cy="0" r="15" fill="white" opacity="0.6"/>
                        <line x1="20" y1="15" x2="20" y2="80" stroke="white" strokeWidth="4" opacity="0.6"/>
                        <line x1="20" y1="40" x2={i%2===0 ? "0" : "40"} y2="60" stroke="white" strokeWidth="3" opacity="0.6"/>
                        <line x1="20" y1="80" x2={i%2===0 ? "5" : "35"} y2="120" stroke="white" strokeWidth="3" opacity="0.6"/>
                        <line x1="20" y1="80" x2={i%2===0 ? "35" : "5"} y2="120" stroke="white" strokeWidth="3" opacity="0.6"/>
                      </g>
                    ))}
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-10">
                <p className="text-white text-xs font-medium">Founder's Day Celebration 2024</p>
                <button className="mt-2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full hover:bg-yellow-300 transition-all">
                  Read More
                </button>
              </div>
              <div className="absolute top-4 left-4 right-4 flex justify-center">
                <span className="text-white/60 text-6xl">💃</span>
              </div>
            </div>

            {/* 4 small tiles */}
            {[
              { title: "Sports Day 2025", emoji: "🏃", bg: "from-blue-500 to-blue-700" },
              { title: "Mad About Literature 2024", emoji: "📚", bg: "from-orange-500 to-red-600" },
              { title: "Graduation Day 2025", emoji: "🎓", bg: "from-[#1e3a5f] to-[#0f2540]" },
              { title: "Sr. KG Graduation Day", emoji: "🎒", bg: "from-teal-600 to-teal-800" },
            ].map((act) => (
              <div
                key={act.title}
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${act.bg} flex items-end cursor-pointer group`}
                style={{ minHeight: 200 }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-30 text-8xl">
                  {act.emoji}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="relative z-10 p-3 w-full flex items-end justify-between">
                  <p className="text-white text-xs font-medium">{act.title}</p>
                  <button className="bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full hover:bg-yellow-300 transition-all whitespace-nowrap">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="px-6 py-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden relative flex flex-col md:flex-row items-center" style={{ background: "linear-gradient(135deg, #f97316 0%, #ec4899 60%, #be185d 100%)" }}>
            {/* Left text */}
            <div className="flex-1 p-10 text-white">
              <h3 className="text-2xl font-light mb-1">
                Newsletter <span className="font-extrabold">News & Events</span>
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mt-4 max-w-sm">
                In this digital era, we recognize the importance of staying connected and fostering a sense of community, especially since we live in such a fast paced world.
              </p>
              <p className="text-white/80 text-sm leading-relaxed mt-3 max-w-sm">
                The Kalyani School newsletter will serve as a platform to bridge the gap between home and school, bringing you closer to the remarkable journey of learning, growth, and discovery that unfolds within our vibrant walls.
              </p>
            </div>

            {/* Center newsletter card */}
            <div className="flex flex-col items-center py-8 px-4">
              <div className="bg-white rounded-2xl shadow-xl px-8 py-5 text-center mb-4">
                <div className="text-2xl font-black text-[#0d9488]">TKS</div>
                <div className="text-lg font-bold text-gray-800">Newsletter</div>
              </div>
              <p className="text-white text-center text-sm font-semibold max-w-[160px]">
                Don't miss out on the monthly updates about the school, students and staff!
              </p>
            </div>

            {/* Right student illustration area */}
            <div className="hidden md:flex items-end justify-center w-48 h-full relative pr-6">
              <div className="text-9xl opacity-40 absolute bottom-0">👦</div>
            </div>

            {/* CTA button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:mr-8">
              <button className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all text-sm whitespace-nowrap">
                Check out Our Newsletter Now!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0d7a5f] text-white mt-6 relative overflow-hidden">
        {/* Wave top */}
        <div className="w-full overflow-hidden leading-none" style={{ marginTop: -2 }}>
          <svg viewBox="0 0 1440 60" className="w-full" fill="white" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-10 pt-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Map + Address */}
          <div>
            {/* Map placeholder */}
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