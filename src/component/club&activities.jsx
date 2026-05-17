/*import { useState, useEffect} from 'react';
import { CLUBS, Reveal, Glass } from "./button.jsx"

const Clubs = () => (
  <section id="clubs" style={{ padding: "96px 24px", background: "#fff" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <Reveal><div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ color: "#10b981", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>ນອກຫລັກສູດ</span>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginTop: 8 }}>ກິດຈະກຳ</h2>
      </div></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
        {CLUBS.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.1}>
            <Glass style={{ padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ fontSize: 36 }}>{c.icon}</span>
                <span style={{ background: "#eff6ff", color: "#2563eb", borderRadius: 99, padding: "3px 12px", fontSize: 12, fontWeight: 600 }}>{c.members} members</span>
              </div>
              <h3 style={{ fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{c.name}</h3>
              <p style={{ color: "#64748b", lineHeight: 1.7, margin: 0, fontSize: 14 }}>{c.desc}</p>
            </Glass>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);


export default Clubs;*/