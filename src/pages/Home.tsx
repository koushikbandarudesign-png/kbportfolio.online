import portrait from '../assets/portrait.webp'
import { CopyEmailButton } from '../components/CopyEmailButton'
import { HashLink } from '../components/HashLink'
import { PromoVideo } from '../components/PromoVideo'
import { ResumeLink } from '../components/ResumeLink'
import { Shot } from '../components/Shot'
import { useLensView } from '../context/SiteContext'

export default function Home() {
  const v = useLensView()
  return (
    <>
    <div className="page">
      {/* NAV */}
      <header style={{ borderBottom: "1px solid var(--line)", background: "var(--bg)" }}>
        <div className="header-bar gutter wrap">
          <HashLink to="top" style={{ fontSize: "17px", fontWeight: "600", textDecoration: "none", color: "var(--ink)" }}>Koushik Bandaru</HashLink>
          <nav aria-label="Sections" style={{ display: "flex", flexWrap: "wrap", gap: "28px", fontSize: "15px" }}>
            <HashLink to="top" style={{ textDecoration: "none", color: "var(--ink2)" }}>Intro</HashLink>
            <HashLink to="work" style={{ textDecoration: "none", color: "var(--ink2)" }}>Work</HashLink>
            <HashLink to="principles" style={{ textDecoration: "none", color: "var(--ink2)" }}>Principles</HashLink>
            <HashLink to="references" style={{ textDecoration: "none", color: "var(--ink2)" }}>References</HashLink>
            <HashLink to="about" style={{ textDecoration: "none", color: "var(--ink2)" }}>About</HashLink>
            <HashLink to="contact" style={{ textDecoration: "none", color: "var(--ink2)" }}>Contact</HashLink>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span className="label">Reading as</span>
            <div role="group" aria-label="Choose your view" style={{ display: "flex", padding: "4px", border: "1px solid var(--line2)", borderRadius: "999px", background: "var(--surface)" }}>
              <button onClick={v.setRec} aria-pressed={v.isRec} style={v.recBtn} type="button">Recruiter</button>
              <button onClick={v.setDes} aria-pressed={v.isDes} style={v.desBtn} type="button">Designer</button>
            </div>
          </div>
        </div>
      </header>
      {/* HERO */}
      <section className="gutter wrap" id="top" style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 32px 88px" }}>
        <h1 style={{ margin: "0", fontSize: "clamp(44px, 6.2vw, 92px)", lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "500", maxWidth: "15ch" }}>
          I design decision surfaces
          {" "}
          <span style={{ color: "var(--ink3)" }}>for B2B and AI products.</span>
        </h1>
        <div style={{ marginTop: "56px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 520px", maxWidth: "620px" }}>
            {v.isRec && (
              <>
                <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.45", color: "var(--ink)" }}>
                  Product Designer at Leoforce in Hyderabad, with a B.Des (Hons) in Industrial Design. I led a six-person team on an AI calling assistant and was the sole designer on a recruiter communication platform.
                </p>
                <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <ResumeLink style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "48px", padding: "0 24px", borderRadius: "999px", background: "var(--ink)", color: "var(--on-ink)", textDecoration: "none", fontSize: "16px" }}>View résumé</ResumeLink>
                  <HashLink to="contact" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 24px", borderRadius: "999px", border: "1px solid var(--line3)", color: "var(--ink)", textDecoration: "none", fontSize: "16px" }}>Email me</HashLink>
                </div>
              </>
            )}
            {v.isDes && (
              <>
                <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.45", color: "var(--ink)" }}>
                  I work on the screens where somebody has to choose — and the product decides how hard that is. Trained as an industrial designer, I start with what is actually being decided and what it costs to build, before anyone opens Figma.
                </p>
                <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <HashLink to="connx-process" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "48px", padding: "0 24px", borderRadius: "999px", background: "var(--ink)", color: "var(--on-ink)", textDecoration: "none", fontSize: "16px" }}>Read the CONNX case study →</HashLink>
                  <HashLink to="contact" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 24px", borderRadius: "999px", border: "1px solid var(--line3)", color: "var(--ink)", textDecoration: "none", fontSize: "16px" }}>Email me</HashLink>
                </div>
              </>
            )}
          </div>
          {v.isRec && (
            <>
              <dl className="dl-2col" style={{ flex: "0 1 440px", margin: "0", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "24px 32px", borderTop: "1px solid var(--line)", paddingTop: "24px" }}>
                <div>
                  <dt className="label">Availability</dt>
                  <dd className="meta-value-sm">Open to full-time roles</dd>
                </div>
                <div>
                  <dt className="label">Location</dt>
                  <dd className="meta-value-sm">Hyderabad · IST · [Remote?]</dd>
                </div>
                <div>
                  <dt className="label">Current role</dt>
                  <dd className="meta-value-sm">UI/UX Designer, Leoforce</dd>
                </div>
                <div>
                  <dt className="label">Education</dt>
                  <dd className="meta-value-sm">B.Des (Hons), Industrial Design</dd>
                </div>
              </dl>
            </>
          )}
          {v.isDes && (
            <>
              <dl className="dl-2col" style={{ flex: "0 1 440px", margin: "0", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "24px 32px", borderTop: "1px solid var(--line)", paddingTop: "24px" }}>
                <div>
                  <dt className="label">Focus</dt>
                  <dd className="meta-value-sm">Decision surfaces</dd>
                </div>
                <div>
                  <dt className="label">Domains</dt>
                  <dd className="meta-value-sm">B2B SaaS, workflow, AI</dd>
                </div>
                <div>
                  <dt className="label">Method</dt>
                  <dd className="meta-value-sm">Research in context</dd>
                </div>
                <div>
                  <dt className="label">Background</dt>
                  <dd className="meta-value-sm">Industrial design</dd>
                </div>
              </dl>
            </>
          )}
        </div>
      </section>
      {/* WORK */}
      <section id="work" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px 96px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="h2-sm" style={{ margin: "14px 0 0", fontSize: "40px", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }}>The decisions inside the work</h2>
            </div>
            {v.isRec && (
              <>
                <p style={{ margin: "0", maxWidth: "380px", fontSize: "16px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  Role, timeline and the key finding for each project. Switch to Designer view for the decisions behind them.
                </p>
              </>
            )}
            {v.isDes && (
              <>
                <p style={{ margin: "0", maxWidth: "380px", fontSize: "16px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  Each project opens with the decision that was actually hard, and the options I rejected on the way.
                </p>
              </>
            )}
          </div>
          {/* CONNX */}
          <article style={{ marginTop: "56px", display: "flex", flexWrap: "wrap", gap: "48px", alignItems: "center" }}>
            <HashLink to={v.connxHref} aria-label="CONNX case study" style={{ flex: "1 1 560px", minWidth: "0", display: "block", textDecoration: "none" }}>
              <Shot name="dashboard" zoomable={false} alt="CONNX recruiter dashboard: today’s call stats, a prioritised action plan and a LEO Assist suggestion" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto", aspectRatio: "16 / 10", objectFit: "cover", borderRadius: "16px", border: "1px solid var(--line)", background: "#FFFFFF", cursor: "pointer" }} />
            </HashLink>
            <div style={{ flex: "1 1 420px", maxWidth: "520px" }}>
              <p className="eyebrow">01 · Enterprise · Leoforce</p>
              <h3 style={{ margin: "12px 0 0", fontSize: "44px", letterSpacing: "-0.025em", fontWeight: "500", lineHeight: "1.05" }}>CONNX</h3>
              <p style={{ margin: "10px 0 0", fontSize: "19px", lineHeight: "1.45", color: "var(--ink2)" }}>
                A communication layer between the ATS and the recruiter’s day.
              </p>
              {v.isRec && (
                <>
                  <dl className="dl-2col" style={{ margin: "28px 0 0", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px", borderTop: "1px solid var(--line)", paddingTop: "20px" }}>
                    <div>
                      <dt className="label">Role</dt>
                      <dd className="meta-value-sm">Sole designer</dd>
                    </div>
                    <div>
                      <dt className="label">Timeline</dt>
                      <dd className="meta-value-sm">6 months</dd>
                    </div>
                    <div>
                      <dt className="label">Stage</dt>
                      <dd className="meta-value-sm">Prototyped</dd>
                    </div>
                  </dl>
                  <div style={{ marginTop: "20px", padding: "20px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                    <p style={{ margin: "0", fontSize: "36px", letterSpacing: "-0.02em" }}>11 of 15</p>
                    <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>
                      calls went to voicemail in a typical session — found by shadowing a recruiter for a full day.
                    </p>
                  </div>
                </>
              )}
              {v.isDes && (
                <>
                  <p style={{ margin: "28px 0 12px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink3)" }}>The hard decision</p>
                  <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <li style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center", padding: "14px 16px", borderRadius: "10px", border: "1px solid var(--line)", background: "var(--surface)" }}>
                      <span style={{ fontSize: "16px", color: "var(--ink3)", textDecoration: "line-through" }}>Redesign the dialer, screen by screen</span>
                      <span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink3)" }}>Rejected</span>
                    </li>
                    <li style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center", padding: "14px 16px", borderRadius: "10px", border: "1px solid var(--line)", background: "var(--surface)" }}>
                      <span style={{ fontSize: "16px", color: "var(--ink3)", textDecoration: "line-through" }}>A separate tool for each gap</span>
                      <span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink3)" }}>Rejected</span>
                    </li>
                    <li style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center", padding: "14px 16px", borderRadius: "10px", border: "2px solid var(--accent)", background: "var(--surface)" }}>
                      <span style={{ fontSize: "16px", color: "var(--ink)" }}>One platform between the ATS and the day</span>
                      <span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--accent)" }}>Chosen</span>
                    </li>
                  </ul>
                  <p style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>
                    The cost was switching across six or seven tools, not any one screen.
                  </p>
                </>
              )}
              <HashLink to={v.connxHref} style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", minHeight: "44px", fontSize: "16px", color: "var(--accent)", textDecoration: "none" }}>Read the case study →</HashLink>
            </div>
          </article>
          {/* TELMY */}
          <article style={{ marginTop: "96px", display: "flex", flexWrap: "wrap-reverse", gap: "48px", alignItems: "center" }}>
            <div style={{ flex: "1 1 420px", maxWidth: "520px" }}>
              <p className="eyebrow">02 · AI · Mobile</p>
              <h3 style={{ margin: "12px 0 0", fontSize: "44px", letterSpacing: "-0.025em", fontWeight: "500", lineHeight: "1.05" }}>Telmy</h3>
              <p style={{ margin: "10px 0 0", fontSize: "19px", lineHeight: "1.45", color: "var(--ink2)" }}>
                An assistant that answers the call when you can’t, and drafts what it hears into your calendar.
              </p>
              {v.isRec && (
                <>
                  <dl className="dl-2col" style={{ margin: "28px 0 0", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px", borderTop: "1px solid var(--line)", paddingTop: "20px" }}>
                    <div>
                      <dt className="label">Role</dt>
                      <dd className="meta-value-sm">Project lead</dd>
                    </div>
                    <div>
                      <dt className="label">Timeline</dt>
                      <dd className="meta-value-sm">3 months</dd>
                    </div>
                    <div>
                      <dt className="label">Team</dt>
                      <dd className="meta-value-sm">Six designers</dd>
                    </div>
                  </dl>
                  <div style={{ marginTop: "20px", padding: "20px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                    <p style={{ margin: "0", fontSize: "36px", letterSpacing: "-0.02em" }}>48%</p>
                    <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>
                      of 50 managers surveyed felt overwhelmed managing schedules, calls and meetings.
                    </p>
                  </div>
                </>
              )}
              {v.isDes && (
                <>
                  <p style={{ margin: "28px 0 12px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink3)" }}>The hard decision</p>
                  <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <li style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center", padding: "14px 16px", borderRadius: "10px", border: "1px solid var(--line)", background: "var(--surface)" }}>
                      <span style={{ fontSize: "16px", color: "var(--ink3)", textDecoration: "line-through" }}>Voicemails for Android</span>
                      <span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink3)" }}>Rejected</span>
                    </li>
                    <li style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center", padding: "14px 16px", borderRadius: "10px", border: "1px solid var(--line)", background: "var(--surface)" }}>
                      <span style={{ fontSize: "16px", color: "var(--ink3)", textDecoration: "line-through" }}>PriorityQ, as its own app</span>
                      <span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink3)" }}>Rejected</span>
                    </li>
                    <li style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center", padding: "14px 16px", borderRadius: "10px", border: "2px solid var(--accent)", background: "var(--surface)" }}>
                      <span style={{ fontSize: "16px", color: "var(--ink)" }}>Listen-in: transcribe and draft</span>
                      <span style={{ fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--accent)" }}>Chosen</span>
                    </li>
                  </ul>
                  <p style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>
                    Every competitor fought over the task list. None were near the conversation.
                  </p>
                </>
              )}
              <HashLink to={v.telmyHref} style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", minHeight: "44px", fontSize: "16px", color: "var(--accent)", textDecoration: "none" }}>Read the case study →</HashLink>
            </div>
            <PromoVideo ambient preload="metadata" aria-label="Telmy promo film" style={{ flex: "1 1 560px", minWidth: "0", aspectRatio: "16 / 10", borderRadius: "16px", background: "#000", objectFit: "cover" }} />
          </article>
        </div>
      </section>
      {/* PRINCIPLES (the one dark moment) */}
      <section id="principles" style={{ background: "var(--ink)", color: "var(--bg)" }}>
        <div className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 32px" }}>
          <p style={{ margin: "0", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--band-muted2)" }}>How I work</p>
          <h2 className="h2-sm" style={{ margin: "14px 0 0", fontSize: "40px", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "500" }}>Three rules, each one paid for.</h2>
          <div style={{ marginTop: "48px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 48px", padding: "32px 0", borderTop: "1px solid var(--band-line)" }}>
              <p style={{ margin: "0", flex: "0 0 48px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--band-accent)" }}>01</p>
              <h3 style={{ margin: "0", flex: "1 1 360px", fontSize: "28px", lineHeight: "1.2", fontWeight: "500", letterSpacing: "-0.015em" }}>Lead with the problem, not the screen.</h3>
              {v.isDes && (
                <>
                  <p style={{ margin: "0", flex: "1 1 440px", fontSize: "16px", lineHeight: "1.6", color: "var(--band-muted)" }}>
                    I went into CONNX assuming the problem was a weak dialer. A day of shadowing dismantled it: the recruiter moved across six or seven tools, and the cost was the switching, not any one of them.
                  </p>
                </>
              )}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 48px", padding: "32px 0", borderTop: "1px solid var(--band-line)" }}>
              <p style={{ margin: "0", flex: "0 0 48px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--band-accent)" }}>02</p>
              <h3 style={{ margin: "0", flex: "1 1 360px", fontSize: "28px", lineHeight: "1.2", fontWeight: "500", letterSpacing: "-0.015em" }}>Constraints are the brief, not the obstacle.</h3>
              {v.isDes && (
                <>
                  <p style={{ margin: "0", flex: "1 1 440px", fontSize: "16px", lineHeight: "1.6", color: "var(--band-muted)" }}>
                    GDPR, DPDP and the limits of the ATS were the starting conditions on CONNX. They are why consent became a gate on the dialer rather than a form filled in afterwards.
                  </p>
                </>
              )}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 48px", padding: "32px 0", borderTop: "1px solid var(--band-line)", borderBottom: "1px solid var(--band-line)" }}>
              <p style={{ margin: "0", flex: "0 0 48px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--band-accent)" }}>03</p>
              <h3 style={{ margin: "0", flex: "1 1 360px", fontSize: "28px", lineHeight: "1.2", fontWeight: "500", letterSpacing: "-0.015em" }}>A design you can’t make is just a drawing.</h3>
              {v.isDes && (
                <>
                  <p style={{ margin: "0", flex: "1 1 440px", fontSize: "16px", lineHeight: "1.6", color: "var(--band-muted)" }}>
                    Four years of industrial design taught me to ask what something costs to build before asking whether it looks right — tooling then, engineering time now.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* REFERENCES */}
      <section id="references" style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 32px" }}>
          <p className="eyebrow">References</p>
          <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "56px" }}>
            <figure style={{ margin: "0", maxWidth: "900px" }}>
              <blockquote className="fs-34" style={{ margin: "0", fontSize: "34px", lineHeight: "1.25", letterSpacing: "-0.02em" }}>
                “[Quote from your Leoforce manager — one or two sentences on how you work.]”
              </blockquote>
              <figcaption style={{ marginTop: "16px", fontSize: "16px", color: "var(--ink2)" }}>
                <HashLink to="references" style={{ color: "var(--ink)" }}>[Name]</HashLink>
                {" "}
                · [Role], Leoforce
              </figcaption>
            </figure>
            <figure style={{ margin: "0", maxWidth: "900px", alignSelf: "flex-end" }}>
              <blockquote className="fs-34" style={{ margin: "0", fontSize: "34px", lineHeight: "1.25", letterSpacing: "-0.02em" }}>“[Quote from a Telmy teammate — on leading the team.]”</blockquote>
              <figcaption style={{ marginTop: "16px", fontSize: "16px", color: "var(--ink2)" }}>
                <HashLink to="references" style={{ color: "var(--ink)" }}>[Name]</HashLink>
                {" "}
                · [Role], Telmy team
              </figcaption>
            </figure>
            <figure style={{ margin: "0", maxWidth: "900px" }}>
              <blockquote className="fs-34" style={{ margin: "0", fontSize: "34px", lineHeight: "1.25", letterSpacing: "-0.02em" }}>“[Quote from a Woxsen faculty member — on craft.]”</blockquote>
              <figcaption style={{ marginTop: "16px", fontSize: "16px", color: "var(--ink2)" }}>
                <HashLink to="references" style={{ color: "var(--ink)" }}>[Name]</HashLink>
                {" "}
                · [Role], Woxsen University
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* ABOUT */}
      <section id="about">
        <div className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "96px 32px", display: "flex", flexWrap: "wrap", gap: "64px" }}>
          <div style={{ flex: "1 1 320px", maxWidth: "420px" }}>
            <p style={{ margin: "0 0 20px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink3)" }}>About</p>
            <img src={portrait} alt="Portrait of Koushik Bandaru" width="732" height="915" loading="lazy" decoding="async" style={{ display: "block", width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover", borderRadius: "16px", background: "#0b0b0b" }} />
          </div>
          <div style={{ flex: "1 1 520px", maxWidth: "640px" }}>
            <p style={{ margin: "40px 0 0", fontSize: "22px", lineHeight: "1.5" }}>
              Before screens, I trained as an industrial designer — four years learning that every addition has a price somebody eventually pays. Screens turned out to be the same discipline with a faster feedback loop.
            </p>
            <p style={{ margin: "20px 0 0", fontSize: "18px", lineHeight: "1.6", color: "var(--ink2)" }}>
              Today I design products at Leoforce, an AI-powered recruiting platform, where I care most about the part before Figma: arguing about what is actually being decided.
            </p>
            <ol style={{ margin: "48px 0 0", padding: "0", listStyle: "none", borderTop: "1px solid var(--line)" }}>
              <li style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", padding: "18px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ flex: "0 0 180px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--ink3)" }}>Jul 2026 — Now</span>
                <span style={{ flex: "1 1 260px", fontSize: "17px" }}>UI/UX Designer, Leoforce</span>
              </li>
              <li style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", padding: "18px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ flex: "0 0 180px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--ink3)" }}>Nov 2025 — Jul 2026</span>
                <span style={{ flex: "1 1 260px", fontSize: "17px" }}>UI/UX Design Intern, Leoforce — sole designer on CONNX</span>
              </li>
              <li style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", padding: "18px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ flex: "0 0 180px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--ink3)" }}>May — Jun 2025</span>
                <span style={{ flex: "1 1 260px", fontSize: "17px" }}>
                  Product Design Intern, PractiSc — educational products for kids
                </span>
              </li>
              <li style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", padding: "18px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ flex: "0 0 180px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--ink3)" }}>Aug — Oct 2024</span>
                <span style={{ flex: "1 1 260px", fontSize: "17px" }}>Project lead, Telmy — six-person studio team</span>
              </li>
              <li style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", padding: "18px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ flex: "0 0 180px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--ink3)" }}>2026</span>
                <span style={{ flex: "1 1 260px", fontSize: "17px" }}>B.Des (Hons), Industrial Design, Woxsen University</span>
              </li>
            </ol>
          </div>
        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "112px 32px 96px" }}>
          <p className="eyebrow">Contact</p>
          <h2 style={{ margin: "16px 0 0", fontSize: "clamp(36px, 4.6vw, 64px)", lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "500", maxWidth: "16ch" }}>
            Tell me what you’re deciding.
            {" "}
            <span style={{ color: "var(--ink3)" }}>I’ll tell you if I can help.</span>
          </h2>
          <div style={{ marginTop: "40px", display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
            <a href="mailto:koushikbandaru.uxd@gmail.com?subject=Hello%20from%20your%20portfolio" style={{ fontSize: "28px", letterSpacing: "-0.015em", color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: "6px", textDecorationThickness: "1px" }}>koushikbandaru.uxd@gmail.com</a>
            <CopyEmailButton style={{ minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "1px solid var(--line3)", background: "transparent", fontFamily: "inherit", fontSize: "15px", color: "var(--ink)", cursor: "pointer" }} />
          </div>
          <p style={{ margin: "20px 0 0", fontSize: "16px", color: "var(--ink2)" }}>
            Replies within a day ·
            {" "}
            <a href="https://www.linkedin.com/in/vishnu-koushik-bandaru/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" style={{ color: "var(--ink)" }}>LinkedIn</a>
            {" "}
            ·
            {" "}
            <ResumeLink style={{ color: "var(--ink)" }}>Résumé</ResumeLink>
          </p>
        </div>
      </section>
      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--line)" }}>
        <div className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "28px 32px 40px", display: "flex", flexWrap: "wrap", gap: "12px 32px", justifyContent: "space-between", fontSize: "14px", color: "var(--ink2)" }}>
          <p style={{ margin: "0" }}>
            Design and code by Koushik Bandaru · Set in Inter Tight and JetBrains Mono
          </p>
          <p style={{ margin: "0" }}>© 2026</p>
        </div>
      </footer>
    </div>
    </>
  )
}
