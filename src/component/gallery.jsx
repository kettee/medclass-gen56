import { useState, useEffect} from "react";
import { GALLERY, Reveal, Glass,} from './button.jsx';
const Gallery = () => {
  const [active, setActive] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const openModal = (g) => {
    setActive(g);
    setImgIndex(0);
  };
  
  const prev = (e) => {
    e.stopPropagation();
    setImgIndex((imgIndex - 1 + active.Images.length) % active.Images.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setImgIndex((imgIndex + 1) % active.Images.length);
  };
  return (
    <section id="gallery" style={{ padding: "96px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal><div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ color: "#10b981", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}> # picture </span>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginTop: 8 }}>  ຮຼບພາບ</h2>
        </div></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 16 }}>
          {GALLERY.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.07}>
              <div onClick={() => openModal(g)} style={{ background: g.bg,  overflow: "hidden", borderRadius: 16, padding: 0, aspectRatio: "4/3", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s", border: "1px solid rgba(0,0,0,0.04)" }}   //format shape image is hear
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}>
                  {g.cover
    ? <> <img src={g.cover} alt={g.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
     <div style={{ position: "absolute", bottom: 8, left: 8, fontSize: 28 }}></div>
     
    
    </>
    
    : <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
      
        <div style={{ fontSize: 52 }}>{g.emoji}</div>
      </div>
  }              
             </div>
            </Reveal>
          ))}
        </div>
      {active && (
          <div onClick={() => setActive(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999, backdropFilter: "blur(6px)" }}>
            <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: 20, padding: 24, maxWidth: 600, width: "90vw", textAlign: "center"}}>
              <h3 style={{ fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>
                <span style={{ fontSize: 32, marginRight: 8 }}>{active.emoji}</span>
                {active.label}</h3>
              {active.Images && active.Images.length > 0 ? (
                <>
                  <img src={active.Images[imgIndex]} alt={active.label} style={{ width: "100%", maxHeight: 600, objectFit: "contain", borderRadius: 16, marginBottom: 12 }} />
                  {active.Images.length > 1 && (
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginBottom: 12 }}>
                      <button onClick={prev} style={{ background: "#eff6ff", border: "none", borderRadius: 99, padding: "8px 20px", cursor: "pointer", fontWeight: 700, fontSize: 20 }}>‹</button>
                      <span style={{ color: "#94a3b8", fontSize: 13 }}>{imgIndex + 1} / {active.Images.length}</span>
                      <button onClick={next} style={{ background: "#eff6ff", border: "none", borderRadius: 99, padding: "8px 20px", cursor: "pointer", fontWeight: 700, fontSize: 20 }}>›</button>
                    </div>
                  )}
                </>
              ) : (
                <div style={{ fontSize: 80, marginBottom: 16 }}>{active.emoji}</div>
              )}
              <button onClick={() => setActive(null)} style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 99, padding: "10px 28px", cursor: "pointer", fontWeight: 600 }}>Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};


export default Gallery;