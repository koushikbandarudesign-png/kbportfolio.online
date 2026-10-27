import { CaseCol, CaseGrid, Flow, Stat } from '../components/case/CaseGrid'
import { OptionCard } from '../components/case/OptionCard'
import { PhaseTimeline } from '../components/case/Timeline'
import { WorkflowMap } from '../components/case/WorkflowMap'
import { HashLink } from '../components/HashLink'
import { Shot } from '../components/Shot'

export default function ConnxProcess() {
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
              <HashLink to="connx" style={{ display: "inline-flex", alignItems: "center", minHeight: "36px", padding: "0 16px", borderRadius: "999px", fontSize: "14px", textDecoration: "none", color: "var(--ink2)" }}>Recruiter</HashLink>
              <span aria-current="true" style={{ display: "inline-flex", alignItems: "center", minHeight: "36px", padding: "0 16px", borderRadius: "999px", fontSize: "14px", background: "var(--ink)", color: "var(--on-ink)" }}>Designer</span>
            </div>
          </div>
        </div>
      </header>
      {/* TITLE */}
      <section className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 32px 40px" }}>
        <p className="eyebrow">Case study 01 · Enterprise · Leoforce × Woxsen University</p>
        <h1 style={{ margin: "18px 0 0", fontSize: "clamp(56px, 8vw, 120px)", lineHeight: "0.95", letterSpacing: "-0.045em", fontWeight: "500" }}>CONNX</h1>
        <p style={{ margin: "14px 0 0", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--ink2)" }}>
          A communication platform built for recruiters, not bent toward them
        </p>
        <p style={{ margin: "28px 0 0", maxWidth: "30ch", fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: "1.25", letterSpacing: "-0.015em" }}>
          A recruiter’s value is the conversation.
          {" "}
          <span style={{ color: "var(--ink3)" }}>
            Everything around it is machine work being done by a skilled person.
          </span>
        </p>
        <dl className="stack-sm" style={{ margin: "48px 0 0", display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: "24px", borderTop: "1px solid var(--line)", paddingTop: "24px" }}>
          <div>
            <dt className="label">Role</dt>
            <dd className="meta-value">UX/UI Design Intern — sole designer</dd>
          </div>
          <div>
            <dt className="label">Context</dt>
            <dd className="meta-value">Leoforce · B.Des graduation project</dd>
          </div>
          <div>
            <dt className="label">Timeframe</dt>
            <dd className="meta-value">Six months, in-house</dd>
          </div>
          <div>
            <dt className="label">Tools</dt>
            <dd className="meta-value">Figma</dd>
          </div>
          <div>
            <dt className="label">Stage</dt>
            <dd className="meta-value">Recruiter core prototyped</dd>
          </div>
        </dl>
      </section>
      <section className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px" }}>
        <Shot className="shot" name="dashboard" alt="CONNX recruiter dashboard: today’s call stats, a prioritised action plan and a LEO Assist suggestion" loading="lazy" decoding="async" />
        <div style={{ marginTop: "16px", padding: "18px 22px", borderRadius: "12px", border: "1px solid var(--line)", background: "var(--surface)", display: "flex", flexWrap: "wrap", gap: "8px 24px", alignItems: "baseline" }}>
          <p style={{ margin: "0", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--accent)" }}>Honest status</p>
          <p style={{ margin: "0", flex: "1 1 500px", fontSize: "15px", lineHeight: "1.55", color: "var(--ink2)" }}>
            The recruiter side is designed and prototyped end to end. The Hiring Manager and Lead views are evidenced directions still being built, and the 50/30/20 layout is a reasoned hypothesis, not a tested result.
          </p>
        </div>
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
              <HashLink className="toc-link" to="context">02 Context</HashLink>
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
              <HashLink className="toc-link" to="synthesis">06 Synthesis</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="journey">07 Journey</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="reframe">08 Reframing</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="decision">09 The decision</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="tradeoffs">10 Trade-offs</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="solution">11 Solution</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="flows">12 Task flows</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="outcome">13 Outcome</HashLink>
            </li>
            <li>
              <HashLink className="toc-link" to="reflection">14 Reflection</HashLink>
            </li>
          </ol>
        </nav>
        <main style={{ flex: "999 1 640px", minWidth: "0", maxWidth: "860px" }}>
          {/* 01 ROLE */}
          <section id="role">
            <p className="eyebrow">01 · My role</p>
            <h2 className="section-title h2-sm">I proposed it, researched it, and designed it.</h2>
            <p className="body-lead">
              The first four weeks were orientation, not design: knowledge transfer from the senior team and time with the live products, the users, and the technical and business constraints. I was then placed on Connect, Leoforce’s recruiter communication tool, where I designed live features including Call History and Call Agent.
            </p>
            <p style={{ margin: "16px 0 0", fontSize: "18px", lineHeight: "1.65", color: "var(--ink2)", maxWidth: "62ch" }}>
              CONNX came out of that placement. Shadowing recruiters surfaced workflow gaps no screen-level fix would close, so I proposed a full revamp. The orientation is what made the proposal credible when I put it forward.
            </p>
            <CaseGrid cols={3}>
              <CaseCol title="Research" text="Shadowing, secondary research, competitive and workflow analysis" />
              <CaseCol title="Strategy" text="Problem framing, the platform direction, scope for v1" />
              <CaseCol title="Design" text="Flows, UI and the interactive prototype of the recruiter core" />
            </CaseGrid>
          </section>
          {/* 02 CONTEXT */}
          <section className="case-section" id="context">
            <p className="eyebrow">02 · Context</p>
            <h2 className="section-title h2-sm">
              Connect let recruiters make calls. That was the whole of it.
            </h2>
            <p className="body-lead">
              Leoforce is an outcome-based, AI-powered recruiting platform that helps staffing firms, employers and government agencies find interview-ready candidates. Every feature ties back to a measurable hiring result. Connect was built without end-to-end workflow thinking, and four gaps followed from that.
            </p>
            <CaseGrid cols={2}>
              <CaseCol title="No context" text="No candidate information at the point of a call." />
              <CaseCol title="No consent" text="No way to capture or manage it." />
              <CaseCol title="No continuity" text="Outcomes logged later, from memory, with no on-the-spot disposition." />
              <CaseCol title="No clarity" text="It opened straight into chat, not a prioritised view." />
            </CaseGrid>
            <p style={{ margin: "40px 0 0", fontSize: "18px", lineHeight: "1.55", maxWidth: "62ch" }}>
              These weren’t bugs in Connect. They were symptoms of one missing thing: a communication layer that understands the whole recruiter workflow.
            </p>
          </section>
          {/* 03 PROCESS */}
          <section className="case-section" id="process">
            <p className="eyebrow">03 · Process</p>
            <h2 className="section-title h2-sm">Six months, one method applied every time.</h2>
            <PhaseTimeline
              steps={[
                { label: "Weeks 1–4", title: "Orientation" },
                { label: "Phase 2", title: "Connect features" },
                { label: "Phase 3", title: "Shadowing and research" },
                { label: "Phase 4", title: "Synthesis and reframing" },
                { label: "Phase 5", title: "Direction and decision" },
                { label: "Phase 6", title: "Design and prototype" },
              ]}
            />
            <p style={{ margin: "56px 0 16px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink3)" }}>The decision method, for every feature</p>
            <p className="cs-chain">
              <span>Insight</span>
              <span className="cs-chain-arrow" aria-hidden="true">→</span>
              <span>Problem + how might we</span>
              <span className="cs-chain-arrow" aria-hidden="true">→</span>
              <span>Brainstorm</span>
              <span className="cs-chain-arrow" aria-hidden="true">→</span>
              <span>Select</span>
              <span className="cs-chain-arrow" aria-hidden="true">→</span>
              <span className="cs-chain-end">Solution</span>
            </p>
            <p style={{ margin: "16px 0 0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink2)", maxWidth: "62ch" }}>
              The rigour isn’t in any single decision — it’s the same chain applied every time.
            </p>
          </section>
          {/* 04 RESEARCH */}
          <section className="case-section" id="research">
            <p className="eyebrow">04 · Research</p>
            <h2 className="section-title h2-sm">
              Secondary research first. Then a full day beside a recruiter.
            </h2>
            <p className="body-lead">
              Secondary research established that tool fragmentation is a documented problem, not my assumption. Contextual inquiry then surfaced the tacit workarounds people no longer think to mention — the gap between what someone says they do and what they actually do.
            </p>
            <ol style={{ margin: "28px 0 0", padding: "0", listStyle: "none", borderTop: "1px solid var(--line)" }}>
              <li style={{ display: "flex", gap: "20px", padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ flex: "0 0 32px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--accent)" }}>01</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>
                  Recruiter shadowing — a full working day, no scripted tasks, no survey
                </span>
              </li>
              <li style={{ display: "flex", gap: "20px", padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ flex: "0 0 32px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--accent)" }}>02</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>Secondary research into the recruiting-tools market</span>
              </li>
              <li style={{ display: "flex", gap: "20px", padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ flex: "0 0 32px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--accent)" }}>03</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>
                  Competitive analysis — Connect against Aircall and Salesloft
                </span>
              </li>
              <li style={{ display: "flex", gap: "20px", padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ flex: "0 0 32px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--accent)" }}>04</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>End-to-end workflow mapping of the hiring chain</span>
              </li>
              <li style={{ display: "flex", gap: "20px", padding: "16px 0", borderBottom: "1px solid var(--line)" }}>
                <span style={{ flex: "0 0 32px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--accent)" }}>05</span>
                <span style={{ fontSize: "16px", lineHeight: "1.5" }}>Affinity mapping across the shadowing observations</span>
              </li>
            </ol>
            <p style={{ margin: "40px 0 14px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink3)" }}>What it found</p>
            <CaseGrid cols={3} style={{ marginTop: "0" }}>
              <Stat lead value="11 of 15" note="calls went to voicemail in a typical session" />
              <Stat value="6–7" note="tools in one session, against an industry average of 4–5 a day" />
              <Stat value="40%" note="of a recruiter’s day goes to admin, not candidates" />
              <Stat value="75%" note="of large organisations run an ATS as their hiring backbone" />
              <Stat value="98 vs 20" note="SMS open rate against email — phone-adjacent channels dominate" />
              <Stat value="0" note="records of consent — verbal, with no time, channel or scope" />
            </CaseGrid>
            <p style={{ margin: "32px 0 0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink2)", maxWidth: "62ch" }}>
              The 75% figure set the first constraint early: CONNX integrates with the system of record. It doesn’t try to replace it.
            </p>
            <div className="cs-visuals">
              <figure className="cs-photo">
                <Shot name="shadowing" alt="The shadowing day at Leoforce: recruiters at their desks, one on a headset call at a laptop, another taking handwritten notes" loading="lazy" decoding="async" width="1280" height="960" />
              </figure>
              <WorkflowMap />
            </div>
          </section>
          {/* 05 MARKET */}
          <section className="case-section" id="market">
            <p className="eyebrow">05 · Competitive analysis</p>
            <h2 className="section-title h2-sm">
              Every rival was built for sales, then bent toward recruiting.
            </h2>
            <p className="body-lead">
              None is purpose-built for recruitment, and not one has any concept of consent.
            </p>
            <div style={{ marginTop: "28px", overflowX: "auto", borderRadius: "14px", border: "1px solid var(--line)", background: "var(--surface)" }}>
              <table style={{ width: "100%", minWidth: "640px", borderCollapse: "collapse", fontSize: "15px", lineHeight: "1.5" }}>
                <thead>
                  <tr style={{ textAlign: "left" }}>
                    <th scope="col" style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink3)", fontWeight: "500" }}>Product</th>
                    <th scope="col" style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink3)", fontWeight: "500" }}>Strength</th>
                    <th scope="col" style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink3)", fontWeight: "500" }}>Gap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", textAlign: "left", fontWeight: "500", verticalAlign: "top" }}>Connect</th>
                    <td style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", color: "var(--ink2)", verticalAlign: "top" }}>Recruitment-specific, already in recruiters’ hands</td>
                    <td style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", color: "var(--ink2)", verticalAlign: "top" }}>
                      Basic dialer. No call context, history, consent or hiring-manager view
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", textAlign: "left", fontWeight: "500", verticalAlign: "top" }}>Aircall</th>
                    <td style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", color: "var(--ink2)", verticalAlign: "top" }}>Strong outbound calling, basic active-call view</td>
                    <td style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", color: "var(--ink2)", verticalAlign: "top" }}>A sales tool. No candidate history, no consent</td>
                  </tr>
                  <tr>
                    <th scope="row" style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", textAlign: "left", fontWeight: "500", verticalAlign: "top" }}>Salesloft</th>
                    <td style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", color: "var(--ink2)", verticalAlign: "top" }}>Strong dialer, history pulled from the CRM</td>
                    <td style={{ padding: "16px 20px", borderBottom: "1px solid var(--line)", color: "var(--ink2)", verticalAlign: "top" }}>CRM-shaped history, no consent architecture</td>
                  </tr>
                  <tr style={{ background: "var(--highlight)" }}>
                    <th scope="row" style={{ padding: "16px 20px", textAlign: "left", fontWeight: "600", verticalAlign: "top", color: "var(--accent)" }}>CONNX</th>
                    <td style={{ padding: "16px 20px", color: "var(--ink)", verticalAlign: "top" }}>
                      Built for recruitment: call context, native history, GDPR and DPDP consent in the data model
                    </td>
                    <td style={{ padding: "16px 20px", color: "var(--ink)", verticalAlign: "top" }}>Prototyped, not shipped</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* 06 SYNTHESIS */}
          <section className="case-section" id="synthesis">
            <p className="eyebrow">06 · Synthesis</p>
            <h2 className="section-title h2-sm">Affinity mapping: four structural gaps.</h2>
            <p className="body-lead">
              The shadowing observations clustered into four themes. Each names a gap, and every module further down traces back to one of them.
            </p>
            <CaseGrid cols={2}>
              <CaseCol tag="GAP 01" accentTag title="The Context Gap">
                <ul className="cs-col-list">
                  <li>No candidate information at the point of a call</li>
                  <li>The profile lives in the ATS; the call lives somewhere else</li>
                </ul>
              </CaseCol>
              <CaseCol tag="GAP 02" accentTag title="The Compliance Gap">
                <ul className="cs-col-list">
                  <li>Consent is verbal and undocumented</li>
                  <li>No record of when, by what channel, or for what scope</li>
                </ul>
              </CaseCol>
              <CaseCol tag="GAP 03" accentTag title="The Visibility Gap">
                <ul className="cs-col-list">
                  <li>Hiring managers interrupt recruiters constantly for updates</li>
                  <li>No self-service way to see where a role stands</li>
                </ul>
              </CaseCol>
              <CaseCol tag="GAP 04" accentTag title="The Analytics Gap">
                <ul className="cs-col-list">
                  <li>Performance tracked in a manual spreadsheet</li>
                  <li>Low-trust numbers, assembled by hand</li>
                </ul>
              </CaseCol>
            </CaseGrid>
            <p style={{ margin: "56px 0 16px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink3)" }}>Three insights</p>
            <div className="cs-rows">
              <div className="cs-row">
                <p className="cs-row-lead">The problem was never one tool. It was the switching.</p>
                <p className="cs-row-text">
                  Every context switch costs attention, and every lost moment is a candidate detail missed. Fixing any one tool wouldn’t touch the real cost.
                </p>
              </div>
              <div className="cs-row">
                <p className="cs-row-lead">The conversation is the job. Everything around it isn’t.</p>
                <p className="cs-row-text">
                  Repeated voicemails, channel-hopping and memory-based logging are machine work being done by a skilled person.
                </p>
              </div>
              <div className="cs-row">
                <p className="cs-row-lead">Compliance can’t be bolted on later.</p>
                <p className="cs-row-text">
                  Undocumented consent isn’t a discipline problem — it’s what happens when nothing in the tool asks for it.
                </p>
              </div>
            </div>
          </section>
          {/* 07 JOURNEY */}
          <section className="case-section" id="journey">
            <p className="eyebrow">07 · Journey</p>
            <h2 className="section-title h2-sm">Six phases. Only the first one works.</h2>
            <div className="grid-6" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "8px", alignItems: "end" }}>
              <div style={{ height: "100px", borderRadius: "8px", background: "var(--bar)" }} />
              <div style={{ height: "40px", borderRadius: "8px", background: "var(--accent)" }} />
              <div style={{ height: "40px", borderRadius: "8px", background: "var(--accent)" }} />
              <div style={{ height: "28px", borderRadius: "8px", background: "var(--accent)" }} />
              <div style={{ height: "34px", borderRadius: "8px", background: "var(--accent)" }} />
              <div style={{ height: "40px", borderRadius: "8px", background: "var(--accent)" }} />
            </div>
            <div className="grid-6" style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "8px" }}>
              <div>
                <p style={{ margin: "0", fontSize: "15px" }}>Identify</p>
                <p style={{ margin: "4px 0 0", fontSize: "13px", color: "var(--ink3)" }}>Neutral</p>
                <p style={{ margin: "10px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink2)" }}>A unified view: status, consent, last contact.</p>
              </div>
              <div>
                <p style={{ margin: "0", fontSize: "15px" }}>Consent</p>
                <p style={{ margin: "4px 0 0", fontSize: "13px", color: "var(--accent)" }}>Uncertain</p>
                <p style={{ margin: "10px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink2)" }}>One-click request, logged automatically.</p>
              </div>
              <div>
                <p style={{ margin: "0", fontSize: "15px" }}>Pre-call</p>
                <p style={{ margin: "4px 0 0", fontSize: "13px", color: "var(--accent)" }}>Rushed</p>
                <p style={{ margin: "10px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink2)" }}>Context pre-loaded before the line connects.</p>
              </div>
              <div>
                <p style={{ margin: "0", fontSize: "15px" }}>Live call</p>
                <p style={{ margin: "4px 0 0", fontSize: "13px", color: "var(--accent)" }}>Overloaded</p>
                <p style={{ margin: "10px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink2)" }}>A 50/30/20 layout, everything on one screen.</p>
              </div>
              <div>
                <p style={{ margin: "0", fontSize: "15px" }}>Post-call</p>
                <p style={{ margin: "4px 0 0", fontSize: "13px", color: "var(--accent)" }}>Fatigued</p>
                <p style={{ margin: "10px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink2)" }}>Disposition in a single tap.</p>
              </div>
              <div>
                <p style={{ margin: "0", fontSize: "15px" }}>Pipeline</p>
                <p style={{ margin: "4px 0 0", fontSize: "13px", color: "var(--accent)" }}>Interrupted</p>
                <p style={{ margin: "10px 0 0", fontSize: "13px", lineHeight: "1.5", color: "var(--ink2)" }}>A manager view that updates itself.</p>
              </div>
            </div>
            <p style={{ margin: "24px 0 0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink2)", maxWidth: "62ch" }}>
              Every step after the first carries the cost of one of the four gaps — which is what made a structural revamp the answer rather than a better dialer.
            </p>
          </section>
          {/* 08 REFRAMING */}
          <section className="case-section" id="reframe">
            <p className="eyebrow">08 · Reframing</p>
            <h2 className="section-title h2-sm">Four gaps, restated as design questions.</h2>
            <CaseGrid cols={2}>
              <CaseCol title="How might we surface candidate context during a live call, without making the recruiter navigate away?" />
              <CaseCol title="How might we make consent capture a natural, frictionless part of outreach?" />
              <CaseCol title="How might we give hiring managers self-service pipeline visibility, without more work for recruiters?" />
              <CaseCol title="How might we give leads real-time team performance, generated from recruiter activity?" />
            </CaseGrid>
            <div className="cs-callouts">
              <div className="cs-callout">
                <p className="cs-tag">Problem</p>
                <p className="cs-callout-text">
                  Recruiters lose their day to the work around the conversation — switching tools, chasing consent nothing records, rebuilding outcomes from memory.
                </p>
              </div>
              <div className="cs-callout is-accent">
                <p className="cs-tag is-accent">Hypothesis</p>
                <p className="cs-callout-text">
                  If context, consent and disposition live in one layer, the recruiter stops assembling a workflow by hand — and compliance becomes a by-product of doing the job.
                </p>
              </div>
            </div>
          </section>
          {/* 09 DECISION */}
          <section className="case-section" id="decision">
            <p className="eyebrow">09 · The decision</p>
            <h2 className="section-title h2-sm">Four routes. Three of them rejected.</h2>
            <p className="body-lead">
              The reasons for rejecting three routes are what justify the one I chose.
            </p>
            <CaseGrid cols={2} className="cs-options">
              <OptionCard label="Route A" status="rejected" title="Improve Connect screen by screen">
                The problem is structural, not cosmetic. Six months making the symptoms look tidier.
              </OptionCard>
              <OptionCard label="Route B" status="rejected" title="A separate point-tool for each gap">
                Adds to the four-to-five-tools problem. Solving fragmentation with more fragmentation.
              </OptionCard>
              <OptionCard label="Route C" status="rejected" title="A thin layer on top of the ATS">
                Limited to what the ATS permits, and unable to own the communication experience — the thing that needed owning.
              </OptionCard>
              <OptionCard label="Route D" status="chosen" title="One unified communication platform">
                The communication work had no home, so build the home. It sits between the ATS and the day, and leaves the system of record where it is.
              </OptionCard>
            </CaseGrid>
          </section>
          {/* 10 TRADE-OFFS */}
          <section className="case-section" id="tradeoffs">
            <p className="eyebrow">10 · Trade-offs</p>
            <h2 className="section-title h2-sm">What each yes cost, and why I accepted it.</h2>
            <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="cell-grid stack-sm">
                <div className="cell">
                  <p className="tag-accent">Yes</p>
                  <p style={{ margin: "8px 0 0", fontSize: "17px", lineHeight: "1.4" }}>Consent is a structural gate, not a feature.</p>
                </div>
                <div className="cell">
                  <p className="tag">But</p>
                  <p className="body-sm-gap">
                    No call connects without a valid record — a real cost to someone working a queue. Accepted, because relying on discipline is what created the gap.
                  </p>
                </div>
              </div>
              <div className="cell-grid stack-sm">
                <div className="cell">
                  <p className="tag-accent">Yes</p>
                  <p style={{ margin: "8px 0 0", fontSize: "17px", lineHeight: "1.4" }}>Fixed 50/30/20 zones in the Active-Call View.</p>
                </div>
                <div className="cell">
                  <p className="tag">But</p>
                  <p className="body-sm-gap">
                    Panels can be swapped, not resized. Stability during a live call beats flexibility — a hypothesis from cognitive load theory I’d test before shipping.
                  </p>
                </div>
              </div>
              <div className="cell-grid stack-sm">
                <div className="cell">
                  <p className="tag-accent">Yes</p>
                  <p style={{ margin: "8px 0 0", fontSize: "17px", lineHeight: "1.4" }}>Sit beside the ATS, not replace it.</p>
                </div>
                <div className="cell">
                  <p className="tag">But</p>
                  <p className="body-sm-gap">
                    Gives up ownership of candidate data and inherits the ATS’s limits. Owning the communication was the point; replacing the record never was.
                  </p>
                </div>
              </div>
              <div className="cell-grid stack-sm">
                <div className="cell">
                  <p className="tag-accent">Yes</p>
                  <p style={{ margin: "8px 0 0", fontSize: "17px", lineHeight: "1.4" }}>Scoped to the recruiter’s stretch of the chain.</p>
                </div>
                <div className="cell">
                  <p className="tag">But</p>
                  <p className="body-sm-gap">
                    QM verification and client hand-off are out of v1. Covering one stretch properly beats covering seven thinly.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* 11 SOLUTION */}
          <section className="case-section" id="solution">
            <p className="eyebrow">11 · Solution</p>
            <h2 className="section-title h2-sm">The recruiter lands on a plan, not an inbox.</h2>
            <p className="body-lead">
              Today’s prioritised calls, follow-ups due, pending consents, a daily progress tracker, a pipeline funnel per role, and overdue callbacks flagged by urgency — the dashboard at the top of this page.
            </p>
            <p style={{ margin: "48px 0 14px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink3)" }}>The Active-Call View — why 50/30/20</p>
            <div className="stack-sm" style={{ display: "grid", gridTemplateColumns: "5fr 3fr 2fr", gap: "8px" }}>
              <div style={{ minHeight: "240px", padding: "20px", borderRadius: "12px", background: "var(--surface)", border: "2px solid var(--accent)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <p style={{ margin: "0", fontSize: "40px", letterSpacing: "-0.03em", color: "var(--accent)" }}>50%</p>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>Candidate context, pre-loaded before the line connects</p>
              </div>
              <div style={{ minHeight: "240px", padding: "20px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line2)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <p className="stat">30%</p>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>Live controls and real-time notes</p>
              </div>
              <div style={{ minHeight: "240px", padding: "20px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line2)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <p className="stat">20%</p>
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5" }}>Script, objections, scheduling</p>
              </div>
            </div>
            <p style={{ margin: "16px 0 0", fontSize: "16px", lineHeight: "1.6", color: "var(--ink2)", maxWidth: "62ch" }}>
              The proportions map to cognitive priority, not visual balance. During a call the recruiter is referencing, talking and capturing at once.
            </p>
            <figure style={{ margin: "28px 0 0" }}>
              <Shot className="shot" name="session" alt="CONNX Active-Call View: resume, screening questions and notes in zones A, B and C, with call controls along the bottom" loading="lazy" decoding="async" />
              <figcaption style={{ marginTop: "10px", fontSize: "15px", color: "var(--ink2)" }}>
                The Active-Call View: résumé in zone A, screening questions in B, notes and quick tags in C.
              </figcaption>
            </figure>
            <figure style={{ margin: "28px 0 0" }}>
              <Shot className="shot" name="customise" alt="Customise your call view: choose which panel sits in zones A, B and C" loading="lazy" decoding="async" />
              <figcaption style={{ marginTop: "10px", fontSize: "15px", color: "var(--ink2)" }}>
                Recruiters can swap what sits in each zone — but not resize them.
              </figcaption>
            </figure>
            <div className="stack-sm" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
              <figure style={{ margin: "0" }}>
                <Shot className="shot" name="consent" alt="CONNX consent center" loading="lazy" decoding="async" />
                <figcaption style={{ marginTop: "10px", fontSize: "15px", color: "var(--ink2)" }}>One-click request; time, channel and scope recorded.</figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot className="shot" name="disposition" alt="Wrap-up dialog with four one-tap dispositions" loading="lazy" decoding="async" />
                <figcaption style={{ marginTop: "10px", fontSize: "15px", color: "var(--ink2)" }}>
                  Shortlist, reject, log later or reschedule — it assumes interruption.
                </figcaption>
              </figure>
            </div>
            <p style={{ margin: "48px 0 14px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink3)" }}>Six modules — and which came from research</p>
            <CaseGrid cols={3} style={{ marginTop: "0", rowGap: "28px" }}>
              <CaseCol tag="RESEARCH-DRIVEN" accentTag title="Recruiter Dashboard" />
              <CaseCol tag="RESEARCH-DRIVEN" accentTag title="Consent Management" />
              <CaseCol tag="RESEARCH-DRIVEN" accentTag title="Auto Dialer + Active-Call View" />
              <CaseCol tag="RESEARCH-DRIVEN · IN PROGRESS" accentTag title="Hiring Manager & Lead views" />
              <CaseCol tag="COMPLETENESS" title="Bulk communication" />
              <CaseCol tag="COMPLETENESS" title="Integrations" />
            </CaseGrid>
            <p style={{ margin: "56px 0 14px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink3)" }}>More from the prototype</p>
            <div className="stack-sm" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "24px 16px" }}>
              <figure style={{ margin: "0" }}>
                <Shot className="shot" name="dialer" alt="Building the dialer queue: role, contact order and consent checks" loading="lazy" decoding="async" />
                <figcaption style={{ marginTop: "10px", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  Building the dialer queue: role, contact order and consent checks.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot className="shot" name="roles" alt={"Roles & candidates: the pipeline funnel for each open role"} loading="lazy" decoding="async" />
                <figcaption style={{ marginTop: "10px", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  {"Roles & candidates: the pipeline funnel for each open role."}
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot className="shot" name="conversations" alt="Conversations: every channel with a candidate in one thread" loading="lazy" decoding="async" />
                <figcaption style={{ marginTop: "10px", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  Conversations: every channel with a candidate in one thread.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot className="shot" name="bulk" alt="Bulk communication with consent-aware audience filtering" loading="lazy" decoding="async" />
                <figcaption style={{ marginTop: "10px", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>Bulk communication with consent-aware audience filtering.</figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot className="shot" name="integrations" alt="Integrations: the ATS stays the system of record" loading="lazy" decoding="async" />
                <figcaption style={{ marginTop: "10px", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>Integrations: the ATS stays the system of record.</figcaption>
              </figure>
            </div>
          </section>
          {/* 12 FLOWS */}
          <section className="case-section" id="flows">
            <p className="eyebrow">12 · Task flows</p>
            <h2 className="section-title h2-sm">The three paths the prototype had to prove.</h2>
            <CaseGrid cols={3}>
              <Flow title="Login to disposition" steps={["Dashboard: the action plan", "Auto Dialer queue", "Active-Call View", "One-tap disposition", "Back to the dashboard"]} />
              <Flow title="Capturing consent" steps={["Send a request in one click", "Time, channel and scope recorded", "Record attached to candidate", "The gate opens; the call connects"]} />
              <Flow title="Working the queue" steps={["Queue built from the pipeline", "Consent checked per candidate", "Dials in sequence", "Context opens on connect", "Outcome in one tap"]} />
            </CaseGrid>
          </section>
          {/* 14 OUTCOME */}
          <section className="case-section" id="outcome">
            <p className="eyebrow">13 · Outcome</p>
            <h2 className="section-title h2-sm">What exists, and what it’s designed to do.</h2>
            <CaseGrid cols={3}>
              <Stat value="4 → 4" note="gaps, each answered by one research-driven module" />
              <Stat value="2 live" note="Connect features shipped: Call History and Call Agent" />
              <Stat value="1" note="full interactive prototype of the recruiter core" />
            </CaseGrid>
            <div className="cs-callout" style={{ marginTop: "40px" }}>
              <p className="cs-tag">Design targets — not measured results</p>
              <p className="cs-callout-text">
                3× more candidates screened · under 10 minutes to first contact · zero unlogged consent events
              </p>
            </div>
            <p style={{ margin: "56px 0 16px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink3)" }}>Still open</p>
            <ol className="cs-list">
              <li>Validate 50/30/20 with session recordings and A/B testing</li>
              <li>Finish the Hiring Manager view — status, screening summaries, advance / hold / archive</li>
              <li>Finish the Lead view — leaderboard, goals vs actuals, exportable reports</li>
              <li>Extend into QM verification and client hand-off</li>
            </ol>
          </section>
          {/* 15 REFLECTION */}
          <section id="reflection" style={{ marginTop: "112px", paddingBottom: "120px" }}>
            <p className="eyebrow">14 · Reflection</p>
            <blockquote style={{ margin: "20px 0 0", padding: "36px", borderRadius: "16px", background: "var(--ink)", color: "var(--bg)", fontSize: "24px", lineHeight: "1.45", letterSpacing: "-0.01em" }}>
              I went in assuming the problem was a weak dialer. The shadowing dismantled that in a day — and it was the best investment in the project.
            </blockquote>
            <p style={{ margin: "24px 0 0", fontSize: "18px", lineHeight: "1.65", color: "var(--ink2)", maxWidth: "62ch" }}>
              The constraints turned out to be the brief. GDPR, DPDP and the ATS limits shaped the architecture from week one. What I’d still push on is the 50/30/20 layout: a strong hypothesis, but a hypothesis — I’d want recordings and an A/B test before it ships.
            </p>
            <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
              <p style={{ margin: "0", fontSize: "22px" }}>The lesson: understand before you design.</p>
              <HashLink to="telmy-process" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 24px", borderRadius: "999px", background: "var(--ink)", color: "var(--on-ink)", textDecoration: "none", fontSize: "16px" }}>Next: Telmy →</HashLink>
            </div>
          </section>
        </main>
      </div>
    </div>
    </>
  )
}
