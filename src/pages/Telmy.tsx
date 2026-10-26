import { HashLink } from '../components/HashLink'
import { PromoVideo } from '../components/PromoVideo'
import { Shot } from '../components/Shot'
import { useLensView } from '../context/SiteContext'

export default function Telmy() {
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
              <HashLink to="telmy-process" style={{ display: "inline-flex", alignItems: "center", minHeight: "36px", padding: "0 16px", borderRadius: "999px", fontSize: "14px", fontWeight: "500", textDecoration: "none", color: "var(--ink2)" }}>Designer</HashLink>
            </div>
          </div>
        </div>
      </header>
      {/* TITLE */}
      <section className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "80px 32px 48px" }}>
        <p className="eyebrow">Case study 02 · AI · Mobile</p>
        <h1 style={{ margin: "18px 0 0", fontSize: "clamp(56px, 8vw, 120px)", lineHeight: "0.95", letterSpacing: "-0.045em", fontWeight: "500" }}>Telmy</h1>
        <p style={{ margin: "28px 0 0", maxWidth: "30ch", fontSize: "clamp(24px, 2.4vw, 34px)", lineHeight: "1.25", letterSpacing: "-0.015em" }}>
          A manager’s day is not lost to the work.
          {" "}
          <span style={{ color: "var(--ink3)" }}>It is lost to sorting the work.</span>
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
                  <dd className="meta-value">Decisions made out loud on calls were never captured.</dd>
                </div>
                <div>
                  <dt className="label">My role</dt>
                  <dd className="meta-value">Project lead and product designer.</dd>
                </div>
                <div>
                  <dt className="label">What we did</dt>
                  <dd className="meta-value">
                    Survey of 50, four concepts scored, one interactive prototype.
                  </dd>
                </div>
                <div>
                  <dt className="label">Outcome</dt>
                  <dd className="meta-value">Full prototype: calls, transcripts, approvals.</dd>
                </div>
                <div>
                  <dt className="label">Timeline</dt>
                  <dd className="meta-value">Aug — Oct 2024 · team of six</dd>
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
                Project lead · team of six · 3 months · Interactive prototype
              </p>
              <button onClick={v.toggleSummary} type="button" style={{ minHeight: "44px", padding: "0 18px", borderRadius: "999px", border: "0", background: "var(--ink)", fontFamily: "inherit", fontSize: "14px", color: "var(--on-ink)", cursor: "pointer" }}>Show summary</button>
            </div>
          </>
        )}
      </section>
      {/* HERO FILM */}
      <section className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "40px 32px 0" }}>
        <PromoVideo controls preload="metadata" aria-label="Telmy promo film, 34 seconds" style={{ display: "block", width: "100%", aspectRatio: "16 / 9", borderRadius: "20px", background: "#000", objectFit: "cover" }} />
      </section>
      {/* BODY */}
      <div className="gutter wrap" style={{ maxWidth: "1240px", margin: "0 auto", padding: "88px 32px 0", display: "flex", flexWrap: "wrap", gap: "48px 80px", alignItems: "flex-start" }}>
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
              <HashLink className="toc-link-lg" to="tradeoffs">Trade-offs</HashLink>
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
            <h2 className="section-title h2-sm">Every productivity tool already claims to fix this.</h2>
            <p className="body-lead">
              The brief was a mobile assistant for mid-level managers, to cut information overload. The challenge was finding where the day actually leaks, and removing a step rather than adding another place to check.
            </p>
            <div style={{ marginTop: "32px", padding: "28px", borderRadius: "14px", background: "var(--surface)", border: "1px solid var(--line)", display: "flex", flexWrap: "wrap", gap: "24px 40px" }}>
              <div style={{ flex: "1 1 220px" }}>
                <p className="tag">Designing for</p>
                <p style={{ margin: "10px 0 0", fontSize: "26px", letterSpacing: "-0.015em" }}>Rekha S, 44</p>
                <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>Senior Project Manager, IT · Bangalore · 15 years in role</p>
              </div>
              <div className="stack-sm" style={{ flex: "2 1 340px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "16px" }}>
                <div>
                  <p style={{ margin: "0", fontSize: "15px" }}>Needs</p>
                  <p style={{ margin: "6px 0 0", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                    Auto-schedule overlaps with her permission. Pin and retrieve what matters.
                  </p>
                </div>
                <div>
                  <p style={{ margin: "0", fontSize: "15px" }}>Frustrations</p>
                  <p style={{ margin: "6px 0 0", fontSize: "14px", lineHeight: "1.5", color: "var(--ink2)" }}>
                    Overlapping schedules. Several projects sharing one calendar.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* RESEARCH */}
          <section id="research" style={{ marginTop: "96px" }}>
            <p className="eyebrow">02 · Research</p>
            <h2 className="section-title h2-sm">The call is the undocumented layer.</h2>
            {v.isDes && (
              <>
                <p className="body-lead">
                  In-person interviews, a survey of about 50 people, and a teardown of Notion, Microsoft To Do, IFTTT, Asana and Truecaller. Every competitor was fighting over the task list. None were near the conversation.
                </p>
              </>
            )}
            <div className="stack-sm" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
              <div style={{ padding: "28px 24px", borderRadius: "12px", background: "var(--ink)", color: "var(--bg)" }}>
                <p className="stat-xl fs-48">48%</p>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--band-muted)" }}>felt overwhelmed managing schedules, calls and meetings</p>
              </div>
              <div style={{ padding: "28px 24px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                <p className="stat-xl fs-48">25%+</p>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>said official communication routinely goes undocumented</p>
              </div>
              <div style={{ padding: "28px 24px", borderRadius: "12px", background: "var(--surface)", border: "1px solid var(--line)" }}>
                <p className="stat-xl fs-48">5</p>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>competitors — none of them anywhere near the call</p>
              </div>
            </div>
            {v.isDes && (
              <>
                <p style={{ margin: "48px 0 16px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink3)" }}>Rekha’s day — where it dips</p>
                <div className="grid-6" style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "10px", alignItems: "end" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ height: "90px", borderRadius: "8px", background: "var(--bar)" }} />
                    <p style={{ margin: "0", fontSize: "15px" }}>Plan</p>
                    <p style={{ margin: "0", fontSize: "13px", color: "var(--ink3)" }}>Even</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ height: "40px", borderRadius: "8px", background: "var(--accent)" }} />
                    <p style={{ margin: "0", fontSize: "15px" }}>Schedule</p>
                    <p style={{ margin: "0", fontSize: "13px", color: "var(--accent)" }}>Low</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ height: "140px", borderRadius: "8px", background: "var(--bar)" }} />
                    <p style={{ margin: "0", fontSize: "15px" }}>Remind</p>
                    <p style={{ margin: "0", fontSize: "13px", color: "var(--ink3)" }}>High</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ height: "40px", borderRadius: "8px", background: "var(--accent)" }} />
                    <p style={{ margin: "0", fontSize: "15px" }}>Execution</p>
                    <p style={{ margin: "0", fontSize: "13px", color: "var(--accent)" }}>Low</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ height: "90px", borderRadius: "8px", background: "var(--bar)" }} />
                    <p style={{ margin: "0", fontSize: "15px" }}>Follow up</p>
                    <p style={{ margin: "0", fontSize: "13px", color: "var(--ink3)" }}>Even</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ height: "140px", borderRadius: "8px", background: "var(--bar)" }} />
                    <p style={{ margin: "0", fontSize: "15px" }}>Report</p>
                    <p style={{ margin: "0", fontSize: "13px", color: "var(--ink3)" }}>High</p>
                  </div>
                </div>
                <p style={{ margin: "16px 0 0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink2)" }}>
                  The two troughs are where the product had to earn its place.
                </p>
              </>
            )}
          </section>
          {/* DECISION */}
          <section id="decision" style={{ marginTop: "96px" }}>
            <p className="eyebrow">03 · The decision</p>
            <h2 className="section-title h2-sm">Four concepts, scored on eight axes, became one loop.</h2>
            <p className="body-lead">
              Each concept was scored 0–5 on user value, feasibility, innovation, usability, viability, scalability, desirability and adaptivity — so the comparison was structural, not whoever argued hardest.
            </p>
            <div className="stack-sm" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
              <div style={{ padding: "24px", borderRadius: "14px", background: "var(--rejected)", border: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <p className="tag-strong">Concept A · Rejected</p>
                <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", color: "var(--ink2)", textDecoration: "line-through" }}>Voicemails for Android</p>
                <p className="body-sm">
                  Strong on value and usability, weakest on innovation — the category already exists.
                </p>
              </div>
              <div style={{ padding: "24px", borderRadius: "14px", background: "var(--rejected)", border: "1px dashed var(--line3)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <p className="tag-strong">Concept B · Folded in</p>
                <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", color: "var(--ink2)" }}>PriorityQ — VIP contacts</p>
                <p className="body-sm">
                  Most adaptive, least usable: configuration before any payoff. Cut as a product; its VIP logic moved into the call assistant.
                </p>
              </div>
              <div style={{ padding: "24px", borderRadius: "14px", background: "var(--surface)", border: "2px solid var(--accent)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <p className="tag-accent">Concept C · Chosen</p>
                <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", color: "var(--ink)" }}>Listen-in — transcribe and draft</p>
                <p className="body-sm">
                  The one concept that answered the undocumented-call finding head-on, and carried desirability and feasibility together.
                </p>
              </div>
              <div style={{ padding: "24px", borderRadius: "14px", background: "var(--surface)", border: "2px solid var(--accent)", display: "flex", flexDirection: "column", gap: "12px" }}>
                <p className="tag-accent">Concept D · Chosen as its partner</p>
                <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", color: "var(--ink)" }}>Scheduling with approval</p>
                <p className="body-sm">A draft is worthless without somewhere clean to approve it.</p>
              </div>
            </div>
            {v.isDes && (
              <>
                <ol style={{ margin: "40px 0 0", padding: "0", listStyle: "none", borderTop: "1px solid var(--line)" }}>
                  <li style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", padding: "18px 0", borderBottom: "1px solid var(--line)" }}>
                    <span style={{ flex: "0 0 56px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--accent)" }}>v1</span>
                    <span style={{ flex: "1 1 400px", fontSize: "16px", lineHeight: "1.55", color: "var(--ink2)" }}>
                      Four concepts as independent products. Each defensible alone; together, not an assistant.
                    </span>
                  </li>
                  <li style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", padding: "18px 0", borderBottom: "1px solid var(--line)" }}>
                    <span style={{ flex: "0 0 56px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--accent)" }}>v2</span>
                    <span style={{ flex: "1 1 400px", fontSize: "16px", lineHeight: "1.55", color: "var(--ink2)" }}>
                      Scored against the matrix. PriorityQ fell away as a standalone; its VIP logic survived inside the call assistant.
                    </span>
                  </li>
                  <li style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", padding: "18px 0", borderBottom: "1px solid var(--line)" }}>
                    <span style={{ flex: "0 0 56px", fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: "13px", color: "var(--accent)" }}>v3</span>
                    <span style={{ flex: "1 1 400px", fontSize: "16px", lineHeight: "1.55", color: "var(--ink2)" }}>
                      One loop: the assistant answers, listens, drafts, and hands back something to approve.
                    </span>
                  </li>
                </ol>
              </>
            )}
          </section>
          {/* TRADE-OFFS (designer only) */}
          {v.isDes && (
            <>
              <section id="tradeoffs" style={{ marginTop: "96px" }}>
                <p className="eyebrow">04 · Trade-offs</p>
                <h2 className="section-title h2-sm">What each yes cost.</h2>
                <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div className="cell-grid stack-sm">
                    <div className="cell">
                      <p className="tag-accent">Yes</p>
                      <p style={{ margin: "8px 0 0", fontSize: "17px", lineHeight: "1.4" }}>The assistant answers when she can’t.</p>
                    </div>
                    <div className="cell">
                      <p className="tag">But</p>
                      <p className="body-sm-gap">
                        It says plainly it’s an assistant. Less polish, more credibility.
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
                        Nothing reaches the calendar unapproved. A silent wrong entry is worse than none.
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
                        Asked for openly on its own screen, each toggle revocable — not buried in onboarding.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
          {/* SOLUTION */}
          <section id="solution" style={{ marginTop: "96px" }}>
            <p className="eyebrow">05 · Solution</p>
            <h2 className="section-title h2-sm">Answer, listen, draft, approve.</h2>
            <div className="stack-sm" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "16px" }}>
              <figure style={{ margin: "0" }}>
                <Shot name="tm03" alt="Telmy home screen: an event draft from a call awaiting approval, deferred messages, and today’s schedule" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  Home opens on what needs a decision: drafts heard on calls come first.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot name="tm06" alt="Telmy event draft: the call summary, the drafted event with the exact words heard, a clash warning, and approve or discard" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  A call becomes a draft that shows what it heard and waits for one tap.
                </figcaption>
              </figure>
              <figure style={{ margin: "0" }}>
                <Shot name="tm10" alt="Telmy scribes: summaries of calls and in-person conversations with their actions" loading="lazy" decoding="async" width="782" height="1688" style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }} />
                <figcaption style={{ marginTop: "12px", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>
                  Each scribe says what was decided, tagged Call or In-person.
                </figcaption>
              </figure>
            </div>
          </section>
          {/* OUTCOME */}
          <section id="outcome" style={{ marginTop: "96px", paddingBottom: "120px" }}>
            <p className="eyebrow">06 · Outcome</p>
            <h2 className="section-title h2-sm">
              A full prototype, and a team that decided instead of argued.
            </h2>
            <div className="stack-sm" style={{ marginTop: "32px", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px" }}>
              <div className="card">
                <p className="stat">4 → 1</p>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>concepts resolved by a scored matrix, not preference</p>
              </div>
              <div className="card">
                <p className="stat">6</p>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>designers led from brief to final prototype</p>
              </div>
              <div className="card">
                <p className="stat">3</p>
                <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.5", color: "var(--ink2)" }}>core flows prototyped: take calls, Listen-in drafts, nudges</p>
              </div>
            </div>
            <blockquote style={{ margin: "48px 0 0", padding: "32px", borderRadius: "16px", background: "var(--ink)", color: "var(--bg)", fontSize: "22px", lineHeight: "1.45", letterSpacing: "-0.01em" }}>
              The most useful thing I did as lead was hold the team to the evaluation matrix when we all had a favourite concept — including me.
            </blockquote>
            <div style={{ marginTop: "64px", paddingTop: "32px", borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
              <p style={{ margin: "0", fontSize: "22px" }}>
                The lesson: an assistant that waits to be asked is one more thing to manage.
              </p>
              <HashLink to="connx" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 24px", borderRadius: "999px", background: "var(--ink)", color: "var(--on-ink)", textDecoration: "none", fontSize: "16px" }}>Next: CONNX →</HashLink>
            </div>
          </section>
        </main>
      </div>
    </div>
    </>
  )
}
