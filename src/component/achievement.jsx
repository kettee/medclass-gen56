import {useState, useEffect } from "react";
import { ACHIEVEMENTS, Reveal, Glass} from "./button.jsx";

const Achievements = () => (
  <section id="achievements" style={{ padding: "96px 24px", background: "#fff" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <Reveal><div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ color: "#10b981", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Recognition</span>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginTop: 8 }}> ຜົນງານ</h2>
      </div></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
        {ACHIEVEMENTS.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.1}>
            <Glass style={{ padding: 28, borderLeft: `4px solid ${a.color}` }}>
              <div style={{ fontSize: 40, marginBottom: 14 }}>{a.icon}</div>
              <h3 style={{ fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>{a.title}</h3>
              <p style={{ color: a.color, fontWeight: 600, fontSize: 13, margin: 0 }}>{a.subtitle}</p>
            </Glass>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;