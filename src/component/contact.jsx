import { useState, useEffect} from 'react';
import { Reveal, Glass} from "./button.jsx"

const Contact = () => (
  <section id="contact" style={{ padding: "96px 24px", background: "linear-gradient(135deg,#eff6ff,#f0fdf4)" }}>
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <Reveal><div style={{ textAlign: "center", marginBottom: 48 }}>
        <span style={{ color: "#10b981", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}> </span>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginTop: 8 }}>ຊ່ອງທາງການຕິດຕໍ່</h2>
      </div></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20, marginBottom: 48 }}>
        {[
          { icon: "📍", label: "Location", val: "ຖະຫນົນສາມແສນໄທ, ບ້ານເພຍວັດ ເມືອງສີສັດຕະນາກ ນະຄອນຫລວງວຽງຈັນ" },
          { icon: "📧", label: "Email", val: "medclass56@UHS.gmail" },
          { icon: "📞", label: "Phone", val: "+856 020 55555555  " },
        ].map(c => (
          <Reveal key={c.label} delay={0.1}>
            <Glass style={{ padding: 24, textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>{c.icon}</div>
              <div style={{ fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{c.label}</div>
              <div style={{ color: "#64748b", fontSize: 13 }}>{c.val}</div>
            </Glass>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;