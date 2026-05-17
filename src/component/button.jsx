//   activities
// donate blood
import DNB from "../assets/donate_blood/dnb.jpeg"
import DNB1 from "../assets/donate_blood/dnb1.jpeg"
import DNB2 from "../assets/donate_blood/dnb2.jpeg"
import DNB3 from "../assets/donate_blood/dnb3.jpeg"
import DNB4 from "../assets/donate_blood/dnb4.jpeg"
import DNB5 from "../assets/donate_blood/dnb5.jpeg"
import DNB6 from "../assets/donate_blood/dnb6.jpeg"
import DNB7 from "../assets/donate_blood/dnb7.jpeg"
import DNB8 from "../assets/donate_blood/dnb8.jpeg"
import DNB9 from "../assets/donate_blood/dnb9.jpeg"
import DNB10 from "../assets/donate_blood/dnb10.jpeg"
import DNB11 from "../assets/donate_blood/dnb11.jpeg"
import DNB12 from "../assets/donate_blood/dnb12.jpeg"
import DNB13 from "../assets/donate_blood/dnb13.jpeg"
import DNB14 from "../assets/donate_blood/dnb14.jpeg"
import DNB15 from "../assets/donate_blood/dnb15.jpeg"
import DNB16 from "../assets/donate_blood/dnb16.jpeg"
//cca
import Ca from "../assets/curricular_activities/Class.JPG"
import Ca1 from "../assets/curricular_activities/Class2.JPG"
import Ca2 from "../assets/curricular_activities/Class3.JPG"
import Ca3 from "../assets/curricular_activities/Class4.JPG"
import Ca4 from "../assets/curricular_activities/Class5.JPG"
import Ca5 from "../assets/curricular_activities/labordayclass56 _1.jpeg"
import Ca6 from "../assets/curricular_activities/labordayclass56 _2.jpeg"
// group A
import egA from "../assets/groupA/group1.jpeg"
import egA1 from "../assets/groupA/group2.jpeg"
import egA2 from "../assets/groupA/group3.jpeg"
//group B
// icon
import iconFacebook from "../assets/icon/iconapp/facebook.png";
import iconInstagram from "../assets/icon/iconapp/instagram.png";

// leader
// performance
import Pfm from "../assets/performance/pfm.jpg"
import Pfm1 from "../assets/performance/pfm1.png"
import Pfm2 from "../assets/performance/pfm2.png"
// teacher
import principal from "../assets/teacher/Principal/mx.png";
import vice from "../assets/teacher/Principal/sls.png";
import principals from "../assets/teacher/Principal/alk.png";

//logo
import logoUHS from "../assets/logo/logouhs.ico";
import logoClass from "../assets/logo/logoclass.ico"
//import outside data
import Team from "./member.jsx";
import About from "./about.jsx";
import Program from "./program.jsx"
//import Clubs from "./club&activities.jsx"
import Contact from "./contact.jsx"
//import Achievements from "./achievement.jsx";
import Gallery from "./gallery.jsx";

import { useState, useEffect, useRef } from "react";

import laoluangFont from "../assets/font/laoluang.ttf";

// ── Utilities ──────────────────────────────────────────────────────────────
export const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
};

export const Reveal = ({ children, delay = 0, className = "" }) => {
const [ref, vis] = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  );
};

// ── Data ──────────────────────────────────────────────────────────────────
const NAV = 
[ {label:"Home", id:"home" },
  { label:"About", id:"about"},
  { label:"Program", id:"program"},
  { label:"Teachers & Members", id:"team"},
  { label:"Gallery", id:"gallery"},
  { label:"Contact", id:"contact"},
];

const STATS = [
  { n: "156", label: "Students" },
  { n: "7", label: "Leaders" },
  { n: "6", label: "Teachers" },
  { n: "3", label: "Principals of the Medicine Faculty" },
  
];

export const PROGRAMS = [
  { icon: "🩺", title: "describe", desc: "describe" },
  { icon: "🔬", title: "describe", desc: "describe" },
  { icon: "💊", title: "describe", desc: " describe" },
  { icon: "🧬", title: "describe", desc: " describe" },
  { icon: "🏥", title: "describe", desc: "describe" },
  { icon: "📋", title: "describe", desc: "describe " },
];

 export const CLUBS = [
  { icon: "🩻", name: "Radiology Club", members: 12, desc: "Medical imaging interpretation and radiology case studies." },
  { icon: "🧪", name: "Research Society", members: 18, desc: "Student-led research projects and scientific publication mentorship." },
  { icon: "🎭", name: "Arts & Wellbeing", members: 14, desc: "Creative expression and mental health advocacy for students." },
  { icon: "⚽", name: "Sports League", members: 22, desc: "Inter-class tournaments promoting teamwork and physical fitness." },
  { icon: "🌿", name: "Green Campus", members: 9, desc: "Sustainability initiatives and eco-health awareness campaigns." },
  { icon: "📖", name: "Book & Discussion", members: 11, desc: "Medical literature reviews and interdisciplinary reading circles." },
];
 export const PRINCIPAL = [
 
 { name:"Dr Alongkone Phengsavanh", role: "Head of faculty of Medicine", picture: principals },
 { name:"Dr Maiyfong MAIYXAIY", role: "Principal of UNIVERSITY OF HEALTH SCIENCE Laos", picture: principal },
 { name:"Dr Soulisack Luanglard", role: "Vice dean of faculty of Medicine", picture: vice },
 ]

export const TEACHERS = [
  { name: "Dr Phoutsomphong VILAI", role: "Class Advisor · Internal Medicine", picture: "👩‍⚕️", tag: "Advisor" },
  { name: "Dr Vunphaserth PHILKHAMPHA", role: "Anatomy & Physiology", picture: "👨‍🏫", tag: "Teacher" },
  { name: "Dr Manila CHANTHALUESY", role: "Biochemistry & Pharmacology", picture: "👩‍🔬", tag: "Teacher" },
  { name: "Dr Souphaphone LUANGSANLARD", role: "Pathology & Diagnostics", picture: "👨‍⚕️", tag: "Teacher" },
  { name: "Dr Vilounnar XANAPHAI", role: "Pathology & Diagnostics", picture: "👨‍⚕️", tag: "Teacher" },
  { name: "Dr Souphaphone PHIMMAVONG", role: "Pathology & Diagnostics", picture: "👨‍⚕️", tag: "Teacher" },
];

export const LEADERS = [
  { name: "Mr Oudalai BUAKHEM", role: <> Class Leader <br/> Leading with vision & integrity</>, emoji: "👩‍🎓" },
  { name: "Mr Ammatathao PHIALUANG", role: "Class Leader ", emoji: "👨‍🎓" },
  { name: "MS Phetphailin OUDOMMIXAI", role: <> Class Manager <br/> OPeration & Planing</>, emoji: "👩‍🎓" },
  { name: "Ms Vanhkham SIBOUNTHUN", role: <> Finance <br/> Budget & accoounting</>, emoji: "👨‍🎓" },
  { name: "Mr Vrthsouvanh SIMMAVONG", role: <> Department of HEALTH <br /> Record & Communication</>, emoji: "👨‍🎓" },
  { name: "Mr Me XONG", role: <> Communication <br/>  </>, emoji: "👨‍🎓" },
  { name: "Mr Jo LUANGLARD", role: "Activities", emoji: "👨‍🎓" },
];



/*/export const ACHIEVEMENTS = [
  { icon: "🏆", title: "National Medical Olympiad", subtitle: "1st Place – 2025", color: "#f59e0b" },
  { icon: "🥇", title: "Research Excellence Award", subtitle: "Regional Winner – 2024", color: "#3b82f6" },
  { icon: "🎖️", title: "Best Class GPA", subtitle: "Semester Award – 2024", color: "#10b981" },
  { icon: "🌟", title: "Community Health Drive", subtitle: "500+ patients served", color: "#8b5cf6" },
  { icon: "📰", title: "Published Research Paper", subtitle: "Journal of Student Medicine", color: "#06b6d4" },
  { icon: "🤝", title: "Inter-University Debate", subtitle: "Runner-Up – Health Policy", color: "#f97316" },
];*/



export const GALLERY = [
  { emoji: "🔬", label: "ບໍລິຈາກເລືອດ", bg: "#dbeafe", cover: DNB11, Images: [
    DNB11, DNB, DNB1, DNB2, DNB3, DNB4, DNB5, DNB6, DNB7, DNB8, DNB9, DNB10, DNB12, DNB13, DNB14, DNB15, DNB16
  ] },
  { emoji: "🏥", label: "ກິດຈະກຳນອກຫລັກສູດ", bg: "#d1fae5", cover: Ca, Images: [ Ca1, Ca2, Ca3, Ca4] },
  { emoji: "🎓", label: "ວັນຄູ", bg: "#ede9fe", cover: Ca4 },
  { emoji: "⚽", label: "ວັນກຳມະກອນ", bg: "#cffafe", cover: Ca5, Images: [Ca5, Ca6] },
  { emoji: "🏆", label: "ກຸ່ມພາສາອັງກິດ", bg: "#fef3c7", cover:egA, Images: [egA, egA1, egA2] },
  
  { emoji: "⚽", label: "ຜົນງານຂອງນັກສຶກສາ", bg: "#cffafe",cover:Pfm, Images: [Pfm, Pfm1, Pfm2] },
 
];

// ── Sub-components ─────────────────────────────────────────────────────────
export const Glass = ({ children, className = "", style = {} }) => (
  <div className={className} style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.5)", borderRadius: 16, ...style }}>
    {children}
  </div>
);

export const Tag = ({ text, color }) => (
  <span style={{ background: color + "20", color, border: `1px solid ${color}40`, borderRadius: 99, padding: "2px 10px", fontSize: 11, fontWeight: 600 }}>{text}</span>
);

// ── Sections ──────────────────────────────────────────────────────────────
const Hero = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => { const t = setInterval(() => setTick(p => p + 1), 3000); return () => clearInterval(t); }, []);
  const slogans = ["ມະຫາວິທະຍາໄລແຫ່ງຊາດ ", "ກາຍເປັນສູນກາງການສຶກສາ ", "ການຄົ້ນຄວ້າທາງດ້ານສຸຂະພາບທີ່ມີຄຸນນະພາບ ມາດຕະຖານພາກພື້ນ ແລະ ສາກົນ"]; // ບ່ອນນີ້
  return (
    <section id="home" style={{ minHeight: "100vh", background: "linear-gradient(135deg,#eff6ff 0%,#f0fdf4 50%,#f8fafc 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: -80, left: -80, width: 340, height: 340, borderRadius: "50%", background: "rgba(59,130,246,0.08)", filter: "blur(40px)" }} />
      <div style={{ position: "absolute", bottom: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: "rgba(16,185,129,0.08)", filter: "blur(40px)" }} />
      <div style={{ textAlign: "center", padding: "0 24px", maxWidth: 700, zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
    src={logoUHS}
    alt="logo"
    style={{ width: 190, height: 190, marginBottom: 16,  objectFit: "contain" }}
      />
        </div>
        <h1 style={{ fontSize: "clamp(2.2rem,6vw,3.8rem)", fontWeight: 800, color: "#0f172a", lineHeight: 1.2, marginBottom: 16 }}>
          ຍິນດີຕ້ອນຮັບ <span style={{ background: "linear-gradient(90deg,#2563eb,#10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>ສູ່ນັກສຶກສາແພດຮຸ່ນທີ 56</span>
        </h1>
        <p style={{ fontSize: "clamp(1rem,2.5vw,1.2rem)", color: "#64748b", minHeight: 32, transition: "opacity 0.5s", marginBottom: 40 }}>{slogans[tick % slogans.length]}</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#about" style={{ background: "linear-gradient(135deg,#2563eb,#1d4ed8)", color: "#fff", padding: "12px 28px", borderRadius: 99, textDecoration: "none", fontWeight: 1000, fontSize: 15, boxShadow: "0 4px 20px rgba(37,99,235,0.3)" }}>ກ່ຽວກັບຫ້ອງພວກເຮົາ</a>
          <a href="#contact" style={{ background: "#fff", color: "#2563eb", padding: "12px 28px", borderRadius: 99, textDecoration: "none", fontWeight: 600, fontSize: 15, border: "1.5px solid #bfdbfe" }}>ຊ່ອງທາງການຕິດຕໍ່</a>
        </div>
        {/* Stats mini */}
        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginTop: 56 }}>
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#2563eb" }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



// export program to program.jsx
 

// team section

// achievement section

// gallery section

// contact section


const Footer = () => (
  <footer style={{ background: "#0f172a", color: "#fff", padding: "48px 24px 24px" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between", marginBottom: 40 }}>
        <div style={{ flex: "1 1 240px" }}>
          <div style={{ fontWeight: 800, fontSize: "1.2rem", marginBottom: 10, background: "linear-gradient(90deg,#60a5fa,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>ຫ້ອງຮຽນນັກສຶກສາແພດຮຸ່ນທີ 56</div>
        <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7, maxWidth: 280 }}>Healing the future, one lesson at a time. University of health sciences</p>  
        </div>
        <div style={{ flex: "1 1 150px" }}>
          <div style={{ fontWeight: 700, marginBottom: 12, color: "#e2e8f0" }}>Quick Links</div>
          {NAV.slice(0, 5).map(n => <div key={n.label} style={{ marginBottom: 8 }}><a href={`#${n.id}`} style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>{n.label}</a></div>)}
        </div>
        <div style={{ flex: "1 1 150px" }}>
          <div style={{ fontWeight: 700, marginBottom: 12, color: "#e2e8f0" }}>More</div>
          {NAV.slice(5).map(n => <div key={n.label} style={{ marginBottom: 8 }}><a href={`#${n.id}`} style={{ color: "#94a3b8", textDecoration: "none", fontSize: 14 }}>{n.label}</a></div>)}
        </div>
        <div style={{ flex: "1 1 180px" }}>
          <div style={{ fontWeight: 700, marginBottom: 12, color: "#e2e8f0" }}>ຊ່ອງທາງຕິດຕາມ</div>
          {[[ iconFacebook, "Facebook",<a href="https://www.facebook.com/profile.php?id=61582130393803" target="_blank" rel="noopener noreferrer">Medical Gen56</a>],[iconInstagram, "Instagram",<a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>]].map(([ic,name,handle,isImg]) => (
            <div key={name} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
             
              
               {isImg
      ? <span style={{ fontSize: 20 }}>{ic}</span>
      : <img src={ic} alt={name} style={{ width: 20, height: 20, objectFit: "contain" }} />
    }
              <div>
                <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600 }}>{name}</div>
                <div style={{ color: "#64748b", fontSize: 12 }}>{handle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ borderTop: "1px solid #1e293b", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ color: "#475569", fontSize: 13 }}>© 2025 MedicineClass 56  </div>
        <div style={{ color: "#475569", fontSize: 13 }}>Made with Med Educators by the Class Generation 56</div>
      </div>
    </div>
  </footer>
);

// ── Navbar ─────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "all 0.3s", background: scrolled ? "rgba(255,255,255,0.9)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none", padding: scrolled ? "10px 24px" : "18px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#home" style={{ fontWeight: 900, fontSize: "1.1rem", textDecoration: "none", background: "linear-gradient(90deg,#2563eb,#10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", display:"flex", alignItems:"center", gap:8,
          marginLeft:10 , padding:10 ,
         }}>
           <img
  src={logoUHS }
  alt="logo"
  style={{ width: 90, height: 90,   objectFit: "contain", flexShrink: 0, }}
/>
          
          
           ນັກສຶກສາແພດຮຸ່ນທີ່ 56 <br /> Medicine Educator Gen56</a>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {NAV.map(n => (
            <a key={n.label} href={`#${n.id}`} onClick={() => { setActive(n); setOpen(false); }}
              style={{ padding: "6px 12px", borderRadius: 99, fontSize: 16, fontWeight: 900, textDecoration: "none", color: active === n.label ? "#2563eb" : "#475569", background: active === n.label ? "#eff6ff" : "transparent", transition: "all 0.2s" }}>
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// ── Loader ─────────────────────────────────────────────────────────────────
const Loader = ({ done }) => (
  <div style={{ position: "fixed", inset: 0, background: "linear-gradient(135deg,#eff6ff,#f0fdf4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 9999, opacity: done ? 0 : 1, pointerEvents: done ? "none" : "all", transition: "opacity 0.5s ease 0.2s" }}>
   <img
  src={logoUHS }
  alt="logo"
  style={{ width: 300, height: 300, marginBottom: 16, animation: "pulse 1s infinite", objectFit: "contain" }}
/>
    <div style={{ fontWeight: 800, fontSize: "1.4rem", background: "linear-gradient(90deg,#2563eb,#10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 24 }}>ນັກສຶກສາແພດຮຸ່ນທີ່ 56</div>
    <div style={{ width: 160, height: 4, background: "#e2e8f0", borderRadius: 99, overflow: "hidden" }}>
      <div style={{ height: "100%", background: "linear-gradient(90deg,#2563eb,#10b981)", borderRadius: 99, animation: "load 1.6s ease forwards" }} />
    </div>
    <style>{`@keyframes load{from{width:0%}to{width:100%}} @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}`}</style>
  </div>
);

// ── App ────────────────────────────────────────────────────────────────────
export default function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 1800); return () => clearTimeout(t); }, []);
  return (
    <>
     <style>{`
        @font-face {
          font-family: 'LaoLuang';
          src: url('${laoluangFont}') format('truetype');
        }
        * { font-family: 'LaoLuang', sans-serif; }
      `}</style>
      <Loader done={loaded} />
      <Navbar />
      <main style={{ fontFamily: "'laoluang',sans-serif" }}>
        <Hero />
        <About />
        <Program />
        {/*<Clubs />*/}
        <Team/>
        {/* <Achievements /> */}
       
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}