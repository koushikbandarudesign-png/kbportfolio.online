import { HashLink } from '../components/HashLink'
import { PromoVideo } from '../components/PromoVideo'
import { Shot } from '../components/Shot'

export default function TelmyProcess() {
  return (
    <>
    <div className="page">
      {/* NAV */}
      <header style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="header-bar gutter wrap">
          <HashLink to="home" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", fontSize: "15px", textDecoration: "none", color: "var(--ink2)" }}>← Koushik Bandaru</HashLink>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span className="label">Reading as</span>
            <div role="group" aria-label="Choose your view" style={{ display: "flex", padding: "4px", border: "1px solid var(--line2)", borderRadius: "999px", background: "var(--surface)" }}>
              <HashLink to="telmy" style={{ display: "inline-flex", alignItems: "center", minHeight: "36px", padding: "0 16px", borderRadius: "999px", fontSize: "14px", textDecoration: "none", color: "var(--ink2)" }}>Recruiter</HashLink>
              <span aria-current="true" style={{ display: "inline-flex", alignItems: "center", minHeight: "36px", padding: "0 16px", borderRadius: "999px", fontSize: "14px", background: "var(--ink)", color: "var(--on-ink)" }}>Designer</span>
            </div>
          </div>
        </div>
      </header>
      {/* TITLE */}
      <section className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 32px 40px" }}>
        <p className="eyebrow">Case study 02 · AI · Mobile · Studio project</p>
        <h1 style={{ margin: "18px 0 0", fontSize: "clamp(56px, 8vw, 120px)", lineHeight: "0.95", letterSpacing: "-0.045em", fontWeight: "500" }}>Telmy</h1>
        <p style={{ margin: "14px 0 0", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--ink2)" }}>A mobile personal assistant for managers</p>
        <p style={{ margin: "28px 0 0", maxWidth: "30ch", fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: "1.25", letterSpacing: "-0.015em" }}>
          A manager’s day is not lost to the work.
          {" "}
          <span style={{ color: "var(--ink3)" }}>It is lost to sorting the work.</span>
        </p>
        <dl className="stack-sm" style={{ margin: "48px 0 0", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "24px", borderTop: "1px solid var(--line)", paddingTop: "24px" }}>
          <div>
            <dt className="label">Role</dt>
            <dd className="meta-value">{"Project lead & product designer"}</dd>
          </div>
          <div>
            <dt className="label">Team</dt>
            <dd className="meta-value">Six-person studio team</dd>
          </div>
          <div>
            <dt className="label">Timeline</dt>
            <dd className="meta-value">Aug — Oct 2024</dd>
          </div>
          <div>
            <dt className="label">Tools</dt>
            <dd className="meta-value">Figma · [others]</dd>
          </div>
        </dl>
      </section>
      <section className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px" }}>
        <PromoVideo controls preload="metadata" aria-label="Telmy promo film, 34 seconds" style={{ display: "block", width: "100%", aspectRatio: "16 / 9", borderRadius: "20px", background: "#000", objectFit: "cover" }} />
      </section>
      {/* BODY */}
      <div className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px 0", display: "flex", flexWrap: "wrap", gap: "48px 80px", alignItems: "flex-start" }}>
        <nav aria-label="Case study sections" style={{ flex: "1 1 180px", maxWidth: "220px" }}>
          <p style={{ margin: "0 0 12px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink3)" }}>The full process</p>
          <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", borderLeft: "1px solid var(--line)" }}>
            <li>
              <HashLink to="role" style={{ display: "flex", alignItems: "center", minHeight: "36px", paddingLeft: "16px", marginLeft: "-1px", borderLeft: "2px solid var(--ink)", fontSize: "15px", textDecoration: "none", color: "var(--ink)" }}>01 My role</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="brief">02 The brief</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="process">03 Process</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="research">04 Research</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="market">05 Competitors</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="persona">06 Persona</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="journey">07 Journey</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="insights">08 Insights</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="concepts">09 Concepts</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="evaluation">10 Evaluation</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="iterations">11 Iterations</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="tradeoffs">12 Trade-offs</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="flows">13 Task flows</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="screens">14 Screens</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="outcome">15 Outcome</HashLink>
            </li>
          </ol>
        </nav>
        <main style={{ flex: "999 1 640px", minWidth: "0", maxWidth: "860px" }}>
          {/* 01 ROLE */}
          <section id="role">
            <p className="eyebrow">01 · My role</p>
            <h2 className="section-title h2-sm">Project lead of a six-person team.</h2>
            <p className="body-lead">
              Project lead for group G-02, Product Design 2026 — from brief and research, through concept selection, to the final prototype.
            </p>
            <p style={{ margin: "16px 0 0", fontSize: "18px", lineHeight: "1.65", color: "var(--ink2)", maxWidth: "62ch" }}>
              [The parts that were personally yours: which concept cards you authored, which flows and screens you drew, and what you ran — interviews, the evaluation matrix, the crits.]
            </p>
            <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ padding: "8px 14px", borderRadius: "999px", background: "var(--surface)", border: "1px solid var(--line2)", fontSize: "14px" }}>Kawin</span>
              <span style={{ padding: "8px 14px", borderRadius: "999px", background: "var(--surface)", border: "1px solid var(--line2)", fontSize: "14px" }}>Vedanti</span>
              <span style={{ padding: "8px 14px", borderRadius: "999px", background: "var(--surface)", border: "1px solid var(--line2)", fontSize: "14px" }}>Kanika</span>
              <span style={{ padding: "8px 14px", borderRadius: "999px", background: "var(--surface)", border: "1px solid var(--line2)", fontSize: "14px" }}>Falaq</span>
              <span style={{ padding: "8px 14px", borderRadius: "999px", background: "var(--ink)", color: "var(--on-ink)", fontSize: "14px" }}>Koushik · lead</span>
              <span style={{ padding: "8px 14px", borderRadius: "999px", background: "var(--surface)", border: "1px solid var(--line2)", fontSize: "14px" }}>Rama</span>
            </div>
          </section>
          {/* 02 BRIEF */}
          <section className="case-section" id="brief">
            <p className="eyebrow">02 · The brief</p>
            <h2 className="section-title h2-sm">Every productivity tool already claims this.</h2>
            <div className="stack-sm" style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
              <div className="panel">
                <p className="tag">Situation</p>
                <p style={{ margin: "10px 0 0", fontSize: "16px", lineHeight: "1.6" }}>
                  A mobile assistant for mid-level managers: manage information from several sources at once, pick out what’s critical, and remind in time to be useful.
                </p>
              </div>
              <div className="panel">
                <p className="tag">Challenge</p>
                <p style={{ margin: "10px 0 0", fontSize: "16px", lineHeight: "1.6" }}>
                  Find where the day actually leaks, and build something that removes a step rather than adding another place to check.
                </p>
              </div>
            </div>
          </section>
          {/* 03 PROCESS */}
          <section className="case-section" id="process">
            <p className="eyebrow">03 · Process</p>
            <h2 className="section-title h2-sm">Three months, from survey to prototype.</h2>
            <ol className="grid-6" style={{ margin: "32px 0 0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "8px" }}>
              <li style={{ padding: "16px 14px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                <p style={{ margin: "0", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "11px", color: "var(--ink3)" }}>01</p>
                <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.35" }}>Research</p>
              </li>
              <li style={{ padding: "16px 14px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                <p style={{ margin: "0", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "11px", color: "var(--ink3)" }}>02</p>
                <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.35" }}>Persona and journey</p>
              </li>
              <li style={{ padding: "16px 14px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                <p style={{ margin: "0", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "11px", color: "var(--ink3)" }}>03</p>
                <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.35" }}>Insights and needs</p>
              </li>
              <li style={{ padding: "16px 14px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                <p style={{ margin: "0", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "11px", color: "var(--ink3)" }}>04</p>
                <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.35" }}>Four concepts</p>
              </li>
              <li style={{ padding: "16px 14px", borderRadius: "12px", background: "var(--ink)", color: "var(--bg)" }}>
                <p style={{ margin: "0", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "11px", color: "var(--band-muted2)" }}>05</p>
                <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.35" }}>Scored evaluation</p>
              </li>
              <li style={{ padding: "16px 14px", borderRadius: "12px", background: "var(--surface)", border: "2px solid var(--accent)" }}>
                <p style={{ margin: "0", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "11px", color: "var(--accent)" }}>06</p>
                <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.35" }}>One loop, prototyped</p>
              </li>
            </ol>
          </section>
          {/* 04 RESEARCH */}
          <section className="case-section" id="research">
            <p className="eyebrow">04 · Research</p>
            <h2 className="section-title h2-sm">The clearest ask wasn’t for better task lists.</h2>
            <ol style={{ margin: "28px 0 0", padding: "0", listStyle: "none", borderTop: "1px solid var(--line)" }}>
              <li style={{ display: "flex", gap: "20px", padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ flex: "0 0 32px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--accent)" }}>01</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>In-person interviews with working professionals</span>
              </li>
              <li style={{ display: "flex", gap: "20px", padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ flex: "0 0 32px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--accent)" }}>02</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>
                  A survey distributed and analysed across about 50 respondents
                </span>
              </li>
              <li style={{ display: "flex", gap: "20px", padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ flex: "0 0 32px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--accent)" }}>03</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>Competitive teardown — four direct tools and one indirect</span>
              </li>
            </ol>
            <div className="stack-sm" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
              <div style={{ padding: "24px", borderRadius: "12px", background: "var(--ink)", color: "var(--bg)" }}>
                <p className="stat-lg">48%</p>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--band-muted)" }}>felt overwhelmed managing schedules, calls and meetings</p>
              </div>
              <div className="card">
                <p className="stat-lg">25%+</p>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  said official communication goes undocumented — decided out loud, then lost
                </p>
              </div>
              <div className="card">
                <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.35" }}>A constant struggle to hold work and personal life apart</p>
              </div>
              <div style={{ padding: "24px", borderRadius: "12px", background: "var(--surface)", border: "2px solid var(--accent)" }}>
                <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.35" }}>The most repeated ask: better call and meeting management</p>
              </div>
            </div>
          </section>
          {/* 05 MARKET */}
          <section className="case-section" id="market">
            <p className="eyebrow">05 · Competitors</p>
            <h2 className="section-title h2-sm">
              Capable on desktop, hostile on a phone, nowhere near the call.
            </h2>
            <div style={{ marginTop: "28px", overflowX: "auto", borderRadius: "14px", border: "1px solid var(--line)", background: "var(--surface)" }}>
              <table style={{ width: "100%", minWidth: "600px", borderCollapse: "collapse", fontSize: "15px", lineHeight: "1.5" }}>
                <thead>
                  <tr style={{ textAlign: "left" }}>
                    <th scope="col" style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink3)", fontWeight: "500" }}>Tool</th>
                    <th scope="col" style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink3)", fontWeight: "500" }}>Type</th>
                    <th scope="col" style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink3)", fontWeight: "500" }}>Where it falls short</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", textAlign: "left", fontWeight: "500" }}>Notion</th>
                    <td style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", color: "var(--ink2)" }}>Direct</td>
                    <td style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", color: "var(--ink2)" }}>High learning curve. No indexing on pages.</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", textAlign: "left", fontWeight: "500" }}>Microsoft To Do</th>
                    <td style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", color: "var(--ink2)" }}>Direct</td>
                    <td style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", color: "var(--ink2)" }}>No bulk delete, no work sync, no overview of lists.</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", textAlign: "left", fontWeight: "500" }}>IFTTT</th>
                    <td style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", color: "var(--ink2)" }}>Direct</td>
                    <td style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", color: "var(--ink2)" }}>Paid model, weak UI, limited connectivity between apps.</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", textAlign: "left", fontWeight: "500" }}>Asana</th>
                    <td style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", color: "var(--ink2)" }}>Direct</td>
                    <td style={{ padding: "14px 20px", borderBottom: "1px solid var(--line)", color: "var(--ink2)" }}>No reminders, basics hidden, can’t manage team on mobile.</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ padding: "14px 20px", textAlign: "left", fontWeight: "500" }}>Truecaller</th>
                    <td style={{ padding: "14px 20px", color: "var(--ink2)" }}>Indirect</td>
                    <td style={{ padding: "14px 20px", color: "var(--ink2)" }}>Still needs the user to handle the caller.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* 06 PERSONA */}
          <section className="case-section" id="persona">
            <p className="eyebrow">06 · Persona</p>
            <h2 className="section-title h2-sm">Rekha S — her own time is not negotiable.</h2>
            <div style={{ marginTop: "28px", padding: "28px", borderRadius: "16px", background: "var(--surface)", border: "1px solid var(--line)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px 32px", alignItems: "center" }}>
                <div aria-hidden="true" style={{ width: "88px", height: "88px", borderRadius: "50%", background: "var(--placeholder)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", color: "var(--ink2)" }}>RS</div>
                <div style={{ flex: "1 1 360px" }}>
                  <p style={{ margin: "0", fontSize: "24px" }}>Rekha S, 44</p>
                  <p style={{ margin: "6px 0 0", fontSize: "15px", color: "var(--ink2)" }}>Senior Project Manager, IT · Bangalore · 15 years in role</p>
                  <p style={{ margin: "12px 0 0", fontSize: "15px", lineHeight: "1.6", color: "var(--ink2)" }}>
                    Goal-oriented. Prioritises deadlines, client satisfaction and efficient time management.
                  </p>
                </div>
              </div>
              <div className="stack-sm" style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "24px", borderTop: "1px solid var(--line)", paddingTop: "24px" }}>
                <div>
                  <p className="tag">Goals</p>
                  <ul style={{ margin: "10px 0 0", paddingLeft: "18px", fontSize: "15px", lineHeight: "1.7", color: "var(--ink2)" }}>
                    <li>Timely deliverables</li>
                    <li>Quality in output</li>
                    <li>Client satisfaction</li>
                    <li>Optimise time, money and resources</li>
                  </ul>
                </div>
                <div>
                  <p className="tag">Needs</p>
                  <ul style={{ margin: "10px 0 0", paddingLeft: "18px", fontSize: "15px", lineHeight: "1.7", color: "var(--ink2)" }}>
                    <li>Auto-schedule overlaps, with permission</li>
                    <li>Advance reminders</li>
                    <li>Pin and retrieve important messages</li>
                    <li>Cloud collaboration</li>
                  </ul>
                </div>
                <div>
                  <p className="tag">Frustrations</p>
                  <ul style={{ margin: "10px 0 0", paddingLeft: "18px", fontSize: "15px", lineHeight: "1.7", color: "var(--ink2)" }}>
                    <li>Prioritising inside a timeline</li>
                    <li>Overlapping schedules</li>
                    <li>Several projects on one calendar</li>
                    <li>Bandwidth when travelling</li>
                  </ul>
                </div>
                <div>
                  <p className="tag">Already lives in</p>
                  <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    <span style={{ padding: "6px 12px", borderRadius: "999px", background: "var(--bg)", fontSize: "13px" }}>WhatsApp</span>
                    <span style={{ padding: "6px 12px", borderRadius: "999px", background: "var(--bg)", fontSize: "13px" }}>Teams</span>
                    <span style={{ padding: "6px 12px", borderRadius: "999px", background: "var(--bg)", fontSize: "13px" }}>Outlook</span>
                    <span style={{ padding: "6px 12px", borderRadius: "999px", background: "var(--bg)", fontSize: "13px" }}>Calendar</span>
                    <span style={{ padding: "6px 12px", borderRadius: "999px", background: "var(--bg)", fontSize: "13px" }}>Slack</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 07 JOURNEY */}
          <section className="case-section" id="journey">
            <p className="eyebrow">07 · Journey</p>
            <h2 className="section-title h2-sm">
              The day dips twice. That’s where the product earns its place.
            </h2>
            <div className="grid-6" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "8px", alignItems: "end" }}>
              <div style={{ height: "90px", borderRadius: "8px", background: "var(--bar)" }} />
              <div style={{ height: "36px", borderRadius: "8px", background: "var(--accent)" }} />
              <div style={{ height: "140px", borderRadius: "8px", background: "var(--bar)" }} />
              <div style={{ height: "36px", borderRadius: "8px", background: "var(--accent)" }} />
              <div style={{ height: "90px", borderRadius: "8px", background: "var(--bar)" }} />
              <div style={{ height: "140px", borderRadius: "8px", background: "var(--bar)" }} />
            </div>
            <div className="grid-6" style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "8px" }}>
              <div>
                <p style={{ margin: "0", fontSize: "15px" }}>Plan</p>
                <p style={{ margin: "6px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink2)" }}>“What are my priorities?”</p>
                <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink3)" }}>Easy goal-setting</p>
              </div>
              <div>
                <p style={{ margin: "0", fontSize: "15px", color: "var(--accent)" }}>Schedule</p>
                <p style={{ margin: "6px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink2)" }}>“How do I fit everything in?”</p>
                <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink3)" }}>Flexible, AI-suggested slots</p>
              </div>
              <div>
                <p style={{ margin: "0", fontSize: "15px" }}>Remind</p>
                <p style={{ margin: "6px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink2)" }}>“Should I reschedule?”</p>
                <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink3)" }}>Highlight what’s next</p>
              </div>
              <div>
                <p style={{ margin: "0", fontSize: "15px", color: "var(--accent)" }}>Execution</p>
                <p style={{ margin: "6px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink2)" }}>“Am I on track?”</p>
                <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink3)" }}>Real-time assistance</p>
              </div>
              <div>
                <p style={{ margin: "0", fontSize: "15px" }}>Follow up</p>
                <p style={{ margin: "6px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink2)" }}>“Did I miss anything?”</p>
                <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink3)" }}>Review unfinished tasks</p>
              </div>
              <div>
                <p style={{ margin: "0", fontSize: "15px" }}>Report</p>
                <p style={{ margin: "6px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink2)" }}>“What can I improve?”</p>
                <p style={{ margin: "8px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink3)" }}>Insights to report upward</p>
              </div>
            </div>
          </section>
          {/* 08 INSIGHTS */}
          <section className="case-section" id="insights">
            <p className="eyebrow">08 · Insights and needs</p>
            <h2 className="section-title h2-sm">Three insights that changed the brief.</h2>
            <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", borderTop: "1px solid var(--line)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 32px", padding: "24px 0", borderBottom: "1px solid var(--line)" }}>
                <p style={{ margin: "0", flex: "1 1 260px", fontSize: "20px", lineHeight: "1.3" }}>The call is the undocumented layer.</p>
                <p style={{ margin: "0", flex: "1 1 380px", fontSize: "15px", lineHeight: "1.6", color: "var(--ink2)" }}>
                  Decisions get made out loud, then exist only in memory. Every competitor fought over the task list; none were near the conversation.
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 32px", padding: "24px 0", borderBottom: "1px solid var(--line)" }}>
                <p style={{ margin: "0", flex: "1 1 260px", fontSize: "20px", lineHeight: "1.3" }}>Overload is a triage problem, not a volume problem.</p>
                <p style={{ margin: "0", flex: "1 1 380px", fontSize: "15px", lineHeight: "1.6", color: "var(--ink2)" }}>
                  Rekha didn’t need less information. She needed someone to have already decided what mattered.
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 32px", padding: "24px 0", borderBottom: "1px solid var(--line)" }}>
                <p style={{ margin: "0", flex: "1 1 260px", fontSize: "20px", lineHeight: "1.3" }}>Availability is the one thing she can’t delegate.</p>
                <p style={{ margin: "0", flex: "1 1 380px", fontSize: "15px", lineHeight: "1.6", color: "var(--ink2)" }}>
                  Calendars can be shared and tasks assigned, but being reachable can’t. That’s the gap an assistant can stand in.
                </p>
              </div>
            </div>
            <div className="stack-sm" style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "8px" }}>
              <p style={{ margin: "0", padding: "16px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line)", fontSize: "15px", lineHeight: "1.4" }}>A point of contact</p>
              <p style={{ margin: "0", padding: "16px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line)", fontSize: "15px", lineHeight: "1.4" }}>Optimised time</p>
              <p style={{ margin: "0", padding: "16px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line)", fontSize: "15px", lineHeight: "1.4" }}>Simpler communication</p>
              <p style={{ margin: "0", padding: "16px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line)", fontSize: "15px", lineHeight: "1.4" }}>Automated routine tasks</p>
            </div>
            <div className="stack-sm" style={{ marginTop: "16px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
              <div style={{ padding: "24px", borderRadius: "14px", background: "var(--ink)", color: "var(--bg)" }}>
                <p style={{ margin: "0", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--band-muted2)" }}>Problem</p>
                <p style={{ margin: "10px 0 0", fontSize: "17px", lineHeight: "1.5" }}>
                  Managers are the bottleneck in their own communication — and what was said out loud is the part nothing captures.
                </p>
              </div>
              <div style={{ padding: "24px", borderRadius: "14px", background: "var(--surface)", border: "2px solid var(--accent)" }}>
                <p className="tag-accent">Hypothesis</p>
                <p style={{ margin: "10px 0 0", fontSize: "17px", lineHeight: "1.5" }}>
                  If the assistant stands in when she’s unavailable and turns conversation into approvable entries, it removes work instead of adding a place to check.
                </p>
              </div>
            </div>
          </section>
          {/* 09 CONCEPTS */}
          <section className="case-section" id="concepts">
            <p className="eyebrow">09 · Concepts</p>
            <h2 className="section-title h2-sm">Four concept cards before a single screen.</h2>
            <p className="body-lead">
              Each card held a value proposition, solution, key features, required technology and dependencies.
            </p>
            <div className="stack-sm" style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
              <div style={{ padding: "24px", borderRadius: "14px", background: "var(--rejected)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <p className="tag-strong">Concept A · Rejected</p>
                <p style={{ margin: "0", fontSize: "21px", lineHeight: "1.25", color: "var(--ink2)", textDecoration: "line-through" }}>Voicemails for Android</p>
                <p className="body-sm">
                  Reminders against voicemail content, swipe to tag, colour-coded priority. Strong value, weakest innovation — the category already exists.
                </p>
              </div>
              <div style={{ padding: "24px", borderRadius: "14px", background: "var(--rejected)", border: "1px dashed var(--line3)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <p className="tag-strong">Concept B · Folded in</p>
                <p style={{ margin: "0", fontSize: "21px", lineHeight: "1.25", color: "var(--ink2)" }}>PriorityQ — VIP contacts</p>
                <p className="body-sm">
                  VIP groups split personal and professional. Most adaptive, least usable — it front-loads configuration, the tax every competitor charges.
                </p>
              </div>
              <div style={{ padding: "24px", borderRadius: "14px", background: "var(--surface)", border: "2px solid var(--accent)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <p className="tag-accent">Concept C · Chosen</p>
                <p style={{ margin: "0", fontSize: "21px", lineHeight: "1.25" }}>Listen-in — in-person transcription</p>
                <p className="body-sm">
                  Listens during a call or conversation, highlights trigger words, drafts an event for approval. The one concept that met the undocumented-call finding head-on.
                </p>
              </div>
              <div style={{ padding: "24px", borderRadius: "14px", background: "var(--surface)", border: "2px solid var(--accent)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <p className="tag-accent">Concept D · Chosen as partner</p>
                <p style={{ margin: "0", fontSize: "21px", lineHeight: "1.25" }}>Scheduling of events</p>
                <p className="body-sm">
                  Approved, declined and pending, with an approval workflow and external sync. A draft is worthless without somewhere clean to approve it.
                </p>
              </div>
            </div>
            <figure style={{ margin: "16px 0 0" }}>
              <Shot name="dk-cards" alt="The team’s four concept cards: Voicemails for Android, PriorityQ, Listen-in mode and Scheduling of events, each with value proposition, solution, sketches, features, technology and challenges" loading="lazy" decoding="async" width="2200" height="1530" style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px", border: "1px solid var(--line)", background: "#FFFFFF", cursor: "zoom-in" }} />
              <figcaption style={{ marginTop: "10px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                The four concept cards, dated 7 Oct 2024: value proposition, solution, sketch, key features, technology and dependencies for each.
              </figcaption>
            </figure>
            <figure style={{ margin: "16px 0 0" }}>
              <Shot name="dk-sketch" alt="Hand-drawn ideation sketches: voicemails, AI-based automated replies, voicemail features, call scheduling, VIP configuration and message categorisation" loading="lazy" decoding="async" width="2200" height="975" style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px", border: "1px solid var(--line)", background: "#FFFFFF", cursor: "zoom-in" }} />
              <figcaption style={{ marginTop: "10px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                Ideation sketches before the cards: voicemail handling, AI replies, VIP configuration and sorting messages into due, finished and not finished.
              </figcaption>
            </figure>
          </section>
          {/* 10 EVALUATION */}
          <section className="case-section" id="evaluation">
            <p className="eyebrow">10 · Evaluation</p>
            <h2 className="section-title h2-sm">Scored, not argued.</h2>
            <p className="body-lead">
              Each concept was scored 0–5 on eight axes and plotted as a radar, so the comparison was structural rather than whoever argued hardest in the room.
            </p>
            <div className="stack-sm" style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "8px" }}>
              <span style={{ padding: "12px", borderRadius: "10px", background: "var(--surface)", border: "1px solid var(--line)", fontSize: "14px", textAlign: "center" }}>User value</span>
              <span style={{ padding: "12px", borderRadius: "10px", background: "var(--surface)", border: "1px solid var(--line)", fontSize: "14px", textAlign: "center" }}>Feasibility</span>
              <span style={{ padding: "12px", borderRadius: "10px", background: "var(--surface)", border: "1px solid var(--line)", fontSize: "14px", textAlign: "center" }}>Innovation</span>
              <span style={{ padding: "12px", borderRadius: "10px", background: "var(--surface)", border: "1px solid var(--line)", fontSize: "14px", textAlign: "center" }}>Usability</span>
              <span style={{ padding: "12px", borderRadius: "10px", background: "var(--surface)", border: "1px solid var(--line)", fontSize: "14px", textAlign: "center" }}>Business viability</span>
              <span style={{ padding: "12px", borderRadius: "10px", background: "var(--surface)", border: "1px solid var(--line)", fontSize: "14px", textAlign: "center" }}>Scalability</span>
              <span style={{ padding: "12px", borderRadius: "10px", background: "var(--surface)", border: "1px solid var(--line)", fontSize: "14px", textAlign: "center" }}>Desirability</span>
              <span style={{ padding: "12px", borderRadius: "10px", background: "var(--surface)", border: "1px solid var(--line)", fontSize: "14px", textAlign: "center" }}>Adaptivity</span>
            </div>
            <figure style={{ margin: "16px 0 0" }}>
              <Shot name="dk-radar" alt="Evaluation matrix: four radar charts scoring Voicemail for Android, Configuration of Contacts, Voice Transcription and Scheduling Events from 0 to 5 on eight axes" loading="lazy" decoding="async" width="2095" height="1455" style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px", border: "1px solid var(--line)", background: "#FFFFFF", cursor: "zoom-in" }} />
              <figcaption style={{ marginTop: "10px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                The evaluation matrix as the team plotted it: one radar per concept across the eight axes.
              </figcaption>
            </figure>
          </section>
          {/* 11 ITERATIONS */}
          <section className="case-section" id="iterations">
            <p className="eyebrow">11 · Iterations</p>
            <h2 className="section-title h2-sm">Four products became one loop.</h2>
            <ol className="stack-sm" style={{ margin: "28px 0 0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
              <li className="panel">
                <p style={{ margin: "0", fontSize: "32px", letterSpacing: "-0.02em", color: "var(--accent)" }}>v1</p>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink2)" }}>
                  Four independent products. Each defensible alone; together, not an assistant.
                </p>
              </li>
              <li className="panel">
                <p style={{ margin: "0", fontSize: "32px", letterSpacing: "-0.02em", color: "var(--accent)" }}>v2</p>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink2)" }}>
                  Scored. PriorityQ fell away as a standalone; its VIP logic moved into the call assistant, where configuration finally paid off.
                </p>
              </li>
              <li style={{ padding: "24px", borderRadius: "14px", background: "var(--surface)", border: "2px solid var(--accent)" }}>
                <p style={{ margin: "0", fontSize: "32px", letterSpacing: "-0.02em", color: "var(--accent)" }}>v3</p>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink2)" }}>
                  One loop: answer, listen, draft, hand back to approve. Listen-in became the mechanism the product runs on.
                </p>
              </li>
            </ol>
          </section>
          {/* 12 TRADE-OFFS */}
          <section className="case-section" id="tradeoffs">
            <p className="eyebrow">12 · Trade-offs</p>
            <h2 className="section-title h2-sm">What each yes cost.</h2>
            <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="cell-grid stack-sm">
                <div className="cell">
                  <p className="tag-accent">Yes</p>
                  <p style={{ margin: "8px 0 0", fontSize: "17px", lineHeight: "1.4" }}>The assistant answers when she can’t.</p>
                </div>
                <div className="cell">
                  <p className="tag">But</p>
                  <p className="body-sm-gap">
                    It says plainly that it’s an assistant. No pretending to be a person — honesty costs a little polish and buys credibility.
                  </p>
                </div>
              </div>
              <div className="cell-grid stack-sm">
                <div className="cell">
                  <p className="tag-accent">Yes</p>
                  <p style={{ margin: "8px 0 0", fontSize: "17px", lineHeight: "1.4" }}>Conversations become event drafts.</p>
                </div>
                <div className="cell">
                  <p className="tag">But</p>
                  <p className="body-sm-gap">
                    Nothing reaches the calendar unapproved. A wrong entry added silently is worse than no entry.
                  </p>
                </div>
              </div>
              <div className="cell-grid stack-sm">
                <div className="cell">
                  <p className="tag-accent">Yes</p>
                  <p style={{ margin: "8px 0 0", fontSize: "17px", lineHeight: "1.4" }}>Listening needs mic, contacts and calendar.</p>
                </div>
                <div className="cell">
                  <p className="tag">But</p>
                  <p className="body-sm-gap">
                    A real privacy cost, asked openly on its own screen. Accuracy depends on the room, which the design admits rather than hides.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* 13 FLOWS */}
          <section className="case-section" id="flows">
            <p className="eyebrow">13 · Task flows</p>
            <h2 className="section-title h2-sm">Three flows the prototype had to prove.</h2>
            <div className="stack-sm" style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
              <div style={{ padding: "22px", borderRadius: "14px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.3" }}>Listen-in to event draft</p>
                <ol style={{ margin: "14px 0 0", paddingLeft: "20px", fontSize: "14px", lineHeight: "1.7", color: "var(--ink2)" }}>
                  <li>Allow Listen-in and recording</li>
                  <li>Use the caller app</li>
                  <li>Get a call receipt</li>
                  <li>Open the receipt</li>
                  <li>Verify or edit the draft</li>
                  <li>Approve</li>
                </ol>
              </div>
              <div style={{ padding: "22px", borderRadius: "14px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.3" }}>Nudging to mark events</p>
                <ol style={{ margin: "14px 0 0", paddingLeft: "20px", fontSize: "14px", lineHeight: "1.7", color: "var(--ink2)" }}>
                  <li>Meeting details shown</li>
                  <li>Start meeting</li>
                  <li>End meeting</li>
                  <li>Tap the notification</li>
                  <li>Mark complete</li>
                </ol>
              </div>
              <div style={{ padding: "22px", borderRadius: "14px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.3" }}>The assistant takes a call</p>
                <ol style={{ margin: "14px 0 0", paddingLeft: "20px", fontSize: "14px", lineHeight: "1.7", color: "var(--ink2)" }}>
                  <li>Call received</li>
                  <li>Assistant says she’s busy, takes a message</li>
                  <li>Voice message saved</li>
                  <li>User notified</li>
                  <li>User reviews and replies</li>
                </ol>
              </div>
            </div>
          </section>
          {/* 14 SCREENS */}
          <section className="case-section" id="screens">
            <p className="eyebrow">14 · Screens</p>
            <h2 className="section-title h2-sm">The app, screen by screen.</h2>
            <p style={{ margin: "16px 0 0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink2)", maxWidth: "62ch" }}>
              Redesigned in 2026 from the team’s original studio prototype: the flows are the team’s, the visual system is my revision around the answer → listen → draft → approve loop.
            </p>
            <div className="stack-sm" style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "32px 20px" }}>
              <figure style={{ margin: "0" }}>
                <Shot name="tm01" alt="Telmy welcome screen with sign-in options" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  <span style={{ color: "var(--ink)" }}>Welcome.</span>
                  {" "}
                  One sign-in screen, and a privacy promise before the first tap.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot name="tm02" alt="Telmy permissions screen with a reason under each toggle" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  <span style={{ color: "var(--ink)" }}>Permissions.</span>
                  {" "}
                  Each source explains why it’s needed and stays revocable.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot name="tm03" alt="Telmy home screen" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  <span style={{ color: "var(--ink)" }}>Home.</span>
                  {" "}
                  Leads with drafts waiting for approval; Listen-in is one labelled tap.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot name="tm04" alt="Incoming call screen with a Telmy answers button" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  <span style={{ color: "var(--ink)" }}>Incoming call.</span>
                  {" "}
                  A third choice between decline and accept: let Telmy answer.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot name="tm05" alt="Live Listen-in transcript with highlighted trigger words" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  <span style={{ color: "var(--ink)" }}>Listen-in, live.</span>
                  {" "}
                  Trigger words highlight as they’re heard; the draft builds alongside.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot name="tm06" alt="Event draft screen with approve, edit and discard" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  <span style={{ color: "var(--ink)" }}>Event draft.</span>
                  {" "}
                  Shows the exact words it heard and flags clashes before anything is saved.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot name="tm07" alt="Day calendar with approved events and a dashed pending draft" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  <span style={{ color: "var(--ink)" }}>Events.</span>
                  {" "}
                  Drafts sit on the calendar as dashed outlines, never mistaken for confirmed.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot name="tm08" alt="Deferred messages with voice playback and a scheduled reply" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  <span style={{ color: "var(--ink)" }}>Deferred messages.</span>
                  {" "}
                  Messages taken while busy, with playback, transcript and timed replies.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot name="tm09" alt="Call for me bottom sheet with timing options" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  <span style={{ color: "var(--ink)" }}>Call for me.</span>
                  {" "}
                  Smart timing like “after meeting” instead of date and time pickers.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot name="tm10" alt="Scribes list of conversation summaries" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  <span style={{ color: "var(--ink)" }}>Scribes.</span>
                  {" "}
                  Every conversation summarised, tagged Call or In-person.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot name="tm11" alt="Scribe detail with decisions, to-dos and an event draft" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  <span style={{ color: "var(--ink)" }}>Scribe detail.</span>
                  {" "}
                  Decisions, to-dos and open questions instead of a raw transcript.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot name="tm12" alt="VIP contacts and call rules screen" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  <span style={{ color: "var(--ink)" }}>Who gets through.</span>
                  {" "}
                  PriorityQ folded in: one star per contact, plus two call rules.
                </figcaption>
              </figure>
            </div>
          </section>
          {/* 15 OUTCOME */}
          <section id="outcome" style={{ marginTop: "112px", paddingBottom: "120px" }}>
            <p className="eyebrow">15 · Outcome and reflection</p>
            <h2 className="section-title h2-sm">
              A full prototype, and a team that decided instead of argued.
            </h2>
            <div className="stack-sm" style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
              <div className="card">
                <p className="stat">4 → 1</p>
                <p style={{ margin: "10px 0 0", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>concepts resolved by a scored matrix, not preference</p>
              </div>
              <div className="card">
                <p className="stat">6</p>
                <p style={{ margin: "10px 0 0", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>designers led end to end, brief to prototype</p>
              </div>
              <div className="card">
                <p className="stat">1</p>
                <p style={{ margin: "10px 0 0", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>interactive prototype: onboarding to review</p>
              </div>
            </div>
            <blockquote style={{ margin: "40px 0 0", padding: "36px", borderRadius: "16px", background: "var(--ink)", color: "var(--bg)", fontSize: "24px", lineHeight: "1.45", letterSpacing: "-0.01em" }}>
              The most useful thing I did as lead was hold the team to the evaluation matrix when we all had a favourite concept — including me.
            </blockquote>
            <p style={{ margin: "24px 0 0", fontSize: "18px", lineHeight: "1.65", color: "var(--ink2)", maxWidth: "62ch" }}>
              The instinct at the start was a better task list, because that’s what a productivity brief sounds like. The survey said something else: a quarter of people were losing the decisions made out loud, and nobody was competing there.
            </p>
            <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
              <p style={{ margin: "0", fontSize: "22px" }}>
                The lesson: an assistant that waits to be asked is one more thing to manage.
              </p>
              <HashLink to="connx-process" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 24px", borderRadius: "999px", background: "var(--ink)", color: "var(--on-ink)", textDecoration: "none", fontSize: "16px" }}>Next: CONNX →</HashLink>
            </div>
          </section>
        </main>
      </div>
    </div>
    </>
  )
}
