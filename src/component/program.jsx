

import { useState, useEffect} from 'react';
import { Reveal, Glass, PROGRAMS } from "./button";

// program of class



const Program = () => (
  <section id="program" style={{ padding: "96px 24px", background: "linear-gradient(135deg,#f8fafc,#eff6ff)" }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <Reveal><div style={{ textAlign: "center", marginBottom: 56 }}>
        <span style={{ color: "#10b981", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>ຫລັກສູດ</span>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginTop: 8 }}> ການຮຽນ</h2>
        <p style={{ color: "#64748b", maxWidth: 480, margin: "12px auto 0" }}> describe</p>
      </div></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
        {PROGRAMS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <Glass style={{ padding: 28, cursor: "default", transition: "transform 0.2s, box-shadow 0.2s" }}
              className="prog-card">
              <div style={{ fontSize: 38, marginBottom: 14 }}>{p.icon}</div>
              <h3 style={{ fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{p.title}</h3>
              <p style={{ color: "#64748b", lineHeight: 1.7, margin: 0, fontSize: 14 }}>{p.desc}</p>
            </Glass>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);





export default Program;