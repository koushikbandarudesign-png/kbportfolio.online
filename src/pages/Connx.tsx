import { HashLink } from '../components/HashLink'
import { Shot } from '../components/Shot'
import { useLensView } from '../context/SiteContext'

export default function Connx() {
  const v = useLensView()
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
              <button onClick={v.setRec} aria-pressed={v.isRec} style={v.recBtn} type="button">Recruiter</button>
              <HashLink to="connx-process" style={{ display: "inline-flex", alignItems: "center", minHeight: "36px", padding: "0 16px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", textDecoration: "none", color: "var(--ink2)" }}>Designer</HashLink>
            </div>
          </div>
        </div>
      </header>
      {/* TITLE */}
      <section className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 32px 48px" }}>
        <p className="eyebrow">Case study 01 · Enterprise · Leoforce</p>
        <h1 style={{ margin: "18px 0 0", fontSize: "clamp(56px, 8vw, 120px)", lineHeight: "0.95", letterSpacing: "-0.045em", fontWeight: "500" }}>CONNX</h1>
        <p style={{ margin: "28px 0 0", maxWidth: "30ch", fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: "1.25", letterSpacing: "-0.015em" }}>
          A recruiter’s value is the conversation.
          {" "}
          <span style={{ color: "var(--ink3)" }}>
            Everything around it is machine work being done by a skilled person.
          </span>
        </p>
      </section>
      {/* TL;DR */}
      <section className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px" }}>
        {v.showSummary && (
          <>
            <div style={{ borderRadius: "16px", background: "var(--surface)", border: "1px solid var(--line)", padding: "32px", display: "flex", flexWrap: "wrap", gap: "24px 48px" }}>
              <div style={{ flex: "1 1 100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
                <p style={{ margin: "0", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent)" }}>The 30-second summary</p>
                {v.isDes && (
                  <>
                    <button onClick={v.toggleSummary} type="button" style={{ minHeight: "44px", padding: "0 16px", borderRadius: "999px", border: "1px solid var(--line3)", background: "transparent", fontFamily: "inherit", fontSize: "14px", color: "var(--ink)", cursor: "pointer" }}>Hide summary</button>
                  </>
                )}
              </div>
              <dl className="stack-sm" style={{ flex: "1 1 100%", margin: "0", display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "24px" }}>
                <div>
                  <dt className="label">Problem</dt>
                  <dd className="meta-value">
                    Recruiters lost context, consent and outcomes across 6–7 tools.
                  </dd>
                </div>
                <div>
                  <dt className="label">My role</dt>
                  <dd className="meta-value">Sole designer. Proposed, researched and designed it.</dd>
                </div>
                <div>
                  <dt className="label">What I did</dt>
                  <dd className="meta-value">Shadowing, workflow mapping, a full recruiter prototype.</dd>
                </div>
                <div>
                  <dt className="label">Outcome</dt>
                  <dd className="meta-value">Recruiter core prototyped end to end. [Add result]</dd>
                </div>
                <div>
                  <dt className="label">Timeline</dt>
                  <dd className="meta-value">6 months, in-house at Leoforce</dd>
                </div>
              </dl>
              {v.isRec && (
                <>
                  <HashLink to="outcome" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", fontSize: "15px", color: "var(--accent)", textDecoration: "none" }}>Skip to the outcome →</HashLink>
                </>
              )}
            </div>
          </>
        )}
        {v.hideSummary && (
          <>
            <div style={{ borderRadius: "999px", background: "var(--surface)", border: "1px solid var(--line)", padding: "8px 8px 8px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
              <p style={{ margin: "0", fontSize: "16px", color: "var(--ink2)" }}>
                Sole designer · 6 months · Recruiter core prototyped end to end
              </p>
              <button onClick={v.toggleSummary} type="button" style={{ minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "0", background: "var(--ink)", fontFamily: "inherit", fontSize: "14px", color: "var(--on-ink)", cursor: "pointer" }}>Show summary</button>
            </div>
          </>
        )}
      </section>
      {/* HERO IMAGE */}
      <section className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "40px 32px 0" }}>
        <Shot className="shot" name="dashboard" alt="CONNX recruiter dashboard: today’s action plan, follow-ups and goals" loading="lazy" decoding="async" />
      </section>
      {/* BODY: side nav + content */}
      <div className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px 0", display: "flex", flexWrap: "wrap", gap: "48px 80px", alignItems: "flex-start", height: "3069px" }}>
        <nav aria-label="Case study sections" style={{ flex: "1 1 180px", maxWidth: "220px" }}>
          <p style={{ margin: "0 0 12px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink3)" }}>On this page</p>
          <ol style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", borderLeft: "1px solid var(--line)" }}>
            <li>
              <HashLink to="situation" style={{ display: "flex", alignItems: "center", minHeight: "40px", paddingLeft: "16px", marginLeft: "-1px", borderLeft: "2px solid var(--ink)", fontSize: "15px", textDecoration: "none", color: "var(--ink)" }}>Situation</HashLink>
            </li>
            <li>
              <HashLink className="toc-link-lg" to="research">Research</HashLink>
            </li>
            <li>
              <HashLink className="toc-link-lg" to="decision">The decision</HashLink>
            </li>
            <li>
              <HashLink className="toc-link-lg" to="solution">Solution</HashLink>
            </li>
            <li>
              <HashLink className="toc-link-lg" to="outcome">Outcome</HashLink>
            </li>
          </ol>
        </nav>
        <main style={{ flex: "999 1 640px", minWidth: "0", maxWidth: "860px" }}>
          {/* SITUATION */}
          <section id="situation">
            <p className="eyebrow">01 · Situation</p>
            <h2 className="section-title h2-sm">
              Connect let recruiters make calls. That was the whole of it.
            </h2>
            <p className="body-lead">
              Leoforce is an AI-powered recruiting platform. Its internal tool, Connect, solved one narrow function and missed the reality around every call. Four gaps kept appearing — and they weren’t bugs. They were symptoms of one missing layer.
            </p>
            <div className="stack-sm" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "12px" }}>
              <div className="card-sm">
                <p style={{ margin: "0", fontSize: "18px" }}>No context</p>
                <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>No candidate info at the point of a call.</p>
              </div>
              <div className="card-sm">
                <p style={{ margin: "0", fontSize: "18px" }}>No consent</p>
                <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>Verbal, undocumented, no scope.</p>
              </div>
              <div className="card-sm">
                <p style={{ margin: "0", fontSize: "18px" }}>No continuity</p>
                <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>Outcomes logged later, from memory.</p>
              </div>
              <div className="card-sm">
                <p style={{ margin: "0", fontSize: "18px" }}>No clarity</p>
                <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>Opened into chat, not priorities.</p>
              </div>
            </div>
          </section>
          {/* RESEARCH */}
          <section id="research" style={{ marginTop: "96px" }}>
            <p className="eyebrow">02 · Research</p>
            <h2 className="section-title h2-sm">A full day beside one recruiter.</h2>
            {v.isDes && (
              <>
                <p className="body-lead">
                  Contextual inquiry with no scripted tasks, because shadowing surfaces the workarounds people no longer think to mention. Then secondary research, a competitive teardown against Aircall and Salesloft, workflow mapping and affinity mapping.
                </p>
              </>
            )}
            <div className="stack-sm" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
              <div style={{ padding: "28px 24px", borderRadius: "12px", background: "var(--ink)", color: "var(--bg)" }}>
                <p className="stat-xl fs-48">11 of 15</p>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--band-muted)" }}>calls went to voicemail in a typical session</p>
              </div>
              <div style={{ padding: "28px 24px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                <p className="stat-xl fs-48">6–7</p>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>tools used in a single recruiting session</p>
              </div>
              <div style={{ padding: "28px 24px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                <p className="stat-xl fs-48">0</p>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>records of when consent was given, or for what</p>
              </div>
            </div>
          </section>
          {/* DECISION CARD */}
          <section id="decision" style={{ marginTop: "96px" }}>
            <p className="eyebrow">03 · The decision</p>
            <h2 className="section-title h2-sm">Fix the dialer, add more tools, or build the missing home?</h2>
            <div className="stack-sm" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
              <div style={{ padding: "24px", borderRadius: "14px", background: "var(--rejected)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: "14px" }}>
                <p className="tag-strong">Option A · Rejected</p>
                <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", color: "var(--ink2)", textDecoration: "line-through" }}>Redesign Connect, screen by screen</p>
                <p className="body-sm">
                  Tidier symptoms, same problem. The cost was the switching between tools, not any one screen.
                </p>
              </div>
              <div style={{ padding: "24px", borderRadius: "14px", background: "var(--rejected)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: "14px" }}>
                <p className="tag-strong">Option B · Rejected</p>
                <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", color: "var(--ink2)", textDecoration: "line-through" }}>A separate tool for each gap</p>
                <p className="body-sm">
                  Solving fragmentation with more fragmentation — the exact problem the research had just documented.
                </p>
              </div>
              <div style={{ padding: "24px", borderRadius: "14px", background: "var(--surface)", border: "2px solid var(--accent)", display: "flex", flexDirection: "column", gap: "14px" }}>
                <p className="tag-accent">Option C · Chosen</p>
                <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", color: "var(--ink)" }}>One platform between the ATS and the day</p>
                <p className="body-sm">
                  The recruiter’s communication work had no home, so build the home — and leave the ATS as the system of record.
                </p>
              </div>
            </div>
          </section>
          {/* SOLUTION */}
          <section id="solution" style={{ marginTop: "96px" }}>
            <p className="eyebrow">04 · Solution</p>
            <h2 className="section-title h2-sm">Three moments, one record.</h2>
            <figure style={{ margin: "32px 0 0" }}>
              <Shot className="shot" name="session" alt="CONNX Active-Call View with the candidate’s resume pre-loaded in zone A" loading="lazy" decoding="async" />
              <figcaption style={{ marginTop: "12px", fontSize: "15px", color: "var(--ink2)" }}>
                The profile, history and last outcome arrive before the line connects.
              </figcaption>
            </figure>
            <div className="stack-sm" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
              <figure style={{ margin: "0" }}>
                <Shot className="shot" name="consent" alt="CONNX consent center listing each candidate’s consent status, channel and scope" loading="lazy" decoding="async" />
                <figcaption style={{ marginTop: "12px", fontSize: "15px", color: "var(--ink2)" }}>
                  Every consent record — status, channel and scope — in one place, checked before a call connects.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot className="shot" name="disposition" alt="Wrap-up dialog with four one-tap dispositions: shortlist, callback, hold, reject" loading="lazy" decoding="async" />
                <figcaption style={{ marginTop: "12px", fontSize: "15px", color: "var(--ink2)" }}>The outcome is logged as the call ends, not hours later.</figcaption>
              </figure>
            </div>
          </section>
          {/* OUTCOME */}
          <section id="outcome" style={{ marginTop: "96px", paddingBottom: "120px" }}>
            <p className="eyebrow">05 · Outcome</p>
            <h2 className="section-title h2-sm">Prototyped end to end. Honest about what isn’t done.</h2>
            <div className="stack-sm" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
              <div style={{ padding: "28px", borderRadius: "14px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                <p className="tag-accent">Done</p>
                <p style={{ margin: "12px 0 0", fontSize: "20px", lineHeight: "1.35" }}>Recruiter core designed and prototyped end to end.</p>
                <p style={{ margin: "12px 0 0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink2)" }}>[What the Leoforce team said or decided after the review]</p>
              </div>
              <div style={{ padding: "28px", borderRadius: "14px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                <p className="tag">Next</p>
                <p style={{ margin: "12px 0 0", fontSize: "20px", lineHeight: "1.35" }}>Validate the 50/30/20 call layout.</p>
                <p style={{ margin: "12px 0 0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink2)" }}>
                  Session recordings and A/B testing, then the Hiring Manager and Recruitment Lead views.
                </p>
              </div>
            </div>
            <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
              <p style={{ margin: "0", fontSize: "22px" }}>The lesson: understand before you design.</p>
              <HashLink to="telmy" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 24px", borderRadius: "999px", background: "var(--ink)", color: "var(--on-ink)", textDecoration: "none", fontSize: "16px" }}>Next: Telmy →</HashLink>
            </div>
          </section>
        </main>
      </div>
    </div>
    </>
  )
}
