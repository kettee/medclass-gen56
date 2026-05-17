
import { useState, useEffect } from "react";
import { Reveal, Glass, Tag, TEACHERS, LEADERS,  PRINCIPAL  } from "./button.jsx";


// team section
const Team = () => {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState('');
  const [activeGroup, setActiveGroup] = useState('all');
  const [selectedPic, setSelectedPic] = useState(null); 

  const groups = ['all', 'ຫນ່ວຍ 1', 'ຫນ່ວຍ 2', 'ຫນ່ວຍ 3', 'ຫນ່ວຍ 4', 'ຫນ່ວຍ 5'];
  const groupMap = {'1':'ຫນ່ວຍ 1','2':'ຫນ່ວຍ 2','3':'ຫນ່ວຍ 3','4':'ຫນ່ວຍ 4','5':'ຫນ່ວຍ 5'};

  useEffect(() => {
    fetch(`https://opensheet.elk.sh/1BpvaMfUDMWlE59sCWODkp_h2Nc2YqFnR_ZUQJ1U3V-c/sheet1`)
      .then(res => res.json())
      .then(data => {
        const parsed = data.map((row, i) => {
          const first = row[' FIRST NAME'] || '';
          const last = row['LAST NAME'] || '';
          const name = (first + ' ' + last).trim();
          const group = groupMap[(row['GROUP'] || '').trim()] || 'Unknown';
          return { num: i + 1, name, group };
        }).filter(m => m.name);
        setMembers(parsed);
      });
  }, []);

  const filtered = members.filter(m => {
    const matchGroup = activeGroup === 'all' || m.group === activeGroup;
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || String(m.num).includes(search);
    return matchGroup && matchSearch;
  });

  const hues = [220, 210, 230, 215, 205, 225, 200, 235, 218, 208];
  const getInitials = (name) =>
    name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();

  return (
    <section id="team" style={{ padding: "96px 24px", background: "linear-gradient(135deg,#f8fafc,#f0fdf4)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal><div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{ color: "#10b981", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>ພາຍໃນຫ້ອງ</span>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginTop: 8 }}> ອາຈານ, ຄະນະຫ້ອງ & ສະມາຊິກ </h2>
        </div></Reveal>
        <Reveal>
  <h3 style={{ fontWeight: 700, color: "#334155", marginBottom: 50, fontSize: "1rem", letterSpacing: 1, textTransform: "uppercase" }}>
    ອະທິການບໍດີ ແລະ ຮອງອະທິການບໍດີ
  </h3>
</Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20, marginBottom: 48 }}>
       {PRINCIPAL.map((p, i) => (
         <Reveal key={i} delay={i * 0.1}>
         <Glass style={{ padding: 24, textAlign: "center", marginTop: i === 1 ? -50 : 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
            { typeof p.picture === "string" && p.picture.length <= 2
            ?<div style={{ fontSize: 52, marginBottom: 12 }}>{p.picture}</div>
            : <img src={p.picture} alt={p.name}  
            onClick={() => setSelectedPic(p.picture)} 
           style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover", marginBottom: 12 }} />
           }
          <Tag text="Principal" color="#8b5cf6" />
          <h4 style={{ fontWeight: 700, color: "#0f172a", margin: "10px 0 4px", fontSize: "0.95rem" }}>{p.name}</h4>
          <p style={{ color: "#64748b", fontSize: 13, margin: 0 }}>{p.role}</p>
        </Glass>
        </Reveal>
         ))}
      </div>
      
      {selectedPic && (
  <div
    onClick={() => setSelectedPic(null)}
    style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, cursor: "pointer" }}
  >
    <img
      src={selectedPic}
      alt="full"
      style={{ maxWidth: "90vw", maxHeight: "90vh", borderRadius: 16, objectFit: "contain", boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}
    />
  </div>
)}
          

        <Reveal><h3 style={{ fontWeight: 700, color: "#334155", marginBottom: 20, fontSize: "1rem", letterSpacing: 1, textTransform: "uppercase" }}> ຄູປະຈຳຫ້ອງ</h3></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20, marginBottom: 48 }}>
          {TEACHERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <Glass style={{ padding: 24, textAlign: "center" }}>
                <div style={{ fontSize: 52, marginBottom: 12 }}>{t.emoji}</div>
                <Tag text={t.tag} color="#2563eb" />
                <h4 style={{ fontWeight: 700, color: "#0f172a", margin: "10px 0 4px", fontSize: "0.95rem" }}>{t.name}</h4>
                <p style={{ color: "#64748b", fontSize: 13, margin: 0 }}>{t.role}</p>
              </Glass>
            </Reveal>
          ))}
        </div>

        <Reveal><h3 style={{ fontWeight: 700, color: "#334155", marginBottom: 20, fontSize: "1rem", letterSpacing: 1, textTransform: "uppercase" }}> ຄະນະຫ້ອງ </h3></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, marginBottom: 48 }}>
          {LEADERS.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.1}>
              <Glass style={{ padding: 24, textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 10 }}>{l.emoji}</div>
                <Tag text="Leadership" color="#10b981" />
                <h4 style={{ fontWeight: 700, color: "#0f172a", margin: "10px 0 4px" }}>{l.name}</h4>
                <p style={{ color: "#64748b", fontSize: 13, margin: 0 }}>{l.role}</p>
              </Glass>
            </Reveal>
          ))}
        </div>

        <Reveal><h3 style={{ fontWeight: 700, color: "#334155", marginBottom: 20, fontSize: "1rem", letterSpacing: 1, textTransform: "uppercase" }}>ສະມາຊິກພາຍໃນຫ້ອງ</h3></Reveal>
        <Reveal delay={0.1}>
          <Glass style={{ padding: 28 }}>

            {/* Search + Filter */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
              <input
                placeholder="ຄົ້ນຫາດ້ວຍຊື່ ຫຼື ຕົວເລກ......................."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ flex: "1 1 200px", padding: "8px 14px", borderRadius: 99, border: "1px solid #bfdbfe", fontSize: 13, outline: "none" }}
              />
              {groups.map(g => (
                <button key={g} onClick={() => setActiveGroup(g)}
                  style={{ padding: "8px 16px", borderRadius: 99, border: "1px solid #bfdbfe", fontSize: 13, fontWeight: 600, cursor: "pointer",
                    background: activeGroup === g ? "#2563eb" : "#eff6ff",
                    color: activeGroup === g ? "#fff" : "#2563eb" }}>
                  {g === 'all' ? 'All' : g}
                </button>
              ))}
            </div>

            {/* Count */}
            <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 20 }}>
              Showing {filtered.length} of {members.length} members
            </div>

            {/* ✅ Member Profile Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 14 }}>
              {members.length === 0
                ? <span style={{ color: "#94a3b8" }}>Loading members…</span>
                : filtered.length === 0
                  ? <span style={{ color: "#94a3b8" }}>No members found</span>
                  : filtered.map(m => {
                      const h = hues[(m.num - 1) % hues.length];
                      const initials = getInitials(m.name);
                      return (
                        <div key={m.num} style={{
                          borderRadius: 14, overflow: "hidden",
                          border: "1px solid #bfdbfe",
                          background: "#fff",
                          display: "flex", flexDirection: "column", alignItems: "center",
                          position: "relative",
                          boxShadow: "0 2px 8px rgba(37,99,235,0.08)"
                        }}>
                          {/* Blue gradient header (background area) */}
                          <div style={{
                            width: "100%", height: 75,
                            background: `linear-gradient(135deg, hsl(${h},80%,22%), hsl(${h},70%,48%))`,
                            flexShrink: 0, position: "relative"
                          }}>
                            {/* Number badge */}
                            <span style={{
                              position: "absolute", top: 8, left: 8,
                              background: "rgba(255,255,255,0.25)",
                              color: "#fff", fontSize: 10, fontWeight: 700,
                              padding: "2px 7px", borderRadius: 99,
                            }}>{m.num}</span>
                          </div>

                          {/* Avatar circle (overlapping) */}
                          <div style={{
                            width: 56, height: 56, borderRadius: "50%",
                            border: "3px solid #fff",
                            background: `linear-gradient(135deg, hsl(${h},80%,18%), hsl(${h},65%,42%))`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: "#fff", fontSize: 17, fontWeight: 700,
                            position: "absolute", top: 47, left: "50%",
                            transform: "translateX(-50%)", zIndex: 2,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                          }}>{initials}</div>

                          {/* Card body */}
                          <div style={{ paddingTop: 34, paddingBottom: 14, paddingLeft: 10, paddingRight: 10, textAlign: "center", width: "100%" }}>
                            <p style={{ fontWeight: 700, color: "#0f172a", margin: "0 0 6px", fontSize: 12, lineHeight: 1.3 }}>{m.name}</p>
                            <span style={{
                              fontSize: 10, color: "#2563eb",
                              background: "#eff6ff", padding: "2px 8px",
                              borderRadius: 99, border: "1px solid #bfdbfe"
                            }}>{m.group}</span>
                          </div>
                        </div>
                      );
                    })
              }
            </div>

          </Glass>
        </Reveal>
      </div>
    </section>
  );
};

export default Team;