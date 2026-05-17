import {useState, useEffect} from "react";
import { Reveal, Glass, useInView } from "./button";
  const About = () => {
    const [ref, vis] = useInView();
    return (
      <section id="about" style={{ padding: "96px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal><div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ color: "#10b981", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>ປະຫວັດຂອງຮຸ່ນທີ 56</span>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginTop: 8 }}>ກ່ຽວກັບຫ້ອງພວກເຮົາ</h2>
          </div></Reveal>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 32 }}>
            {[
              { icon: "🎯", title: "ເປົ້າຫມາຍ", text: "describe" },
              { icon: "🌟", title: "ມຸມມອງ", text: "describe" },
              { icon: "💡", title: "ຄູນຄ່າ", text: "describe" },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.15}>
                <Glass style={{ padding: 32, height: "100%" }}>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, color: "#0f172a", fontSize: "1.1rem", marginBottom: 10 }}>{c.title}</h3>
                  <p style={{ color: "#64748b", lineHeight: 1.7, margin: 0 }}>{c.text}</p>
                </Glass>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <Glass style={{ marginTop: 32, padding: 32 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "center" }}>
                <div style={{ flex: "1 1 260px" }}>
                  <h3 style={{ fontWeight: 700, color: "#0f172a", fontSize: "1.2rem", marginBottom: 12 }}>ພາບໂດຍລວມ</h3>
                  <p style={{ color: "#64748b", lineHeight: 1.8, margin: 0 }}>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias!
                  </p>
                </div>
                <div style={{ flex: "0 0 auto", display: "flex", flexWrap: "wrap", gap: 16 }}>
                  {[["2025-2026","Year"],["155","Students"],["6","Clubs"]].map(([n,l]) => (
                    <div key={l} style={{ background: "linear-gradient(135deg,#eff6ff,#f0fdf4)", borderRadius: 12, padding: "16px 24px", textAlign: "center", minWidth: 90 }}>
                      <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#2563eb" }}>{n}</div>
                      <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Glass>
          </Reveal>
        </div>
      </section>
    );
  };
  

export default About;