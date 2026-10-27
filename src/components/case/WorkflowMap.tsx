const BEFORE = ['Client sends JD', 'Recruiter receives requirement', 'Studies JD & requirements']
const IN_SCOPE = ['Sourcing · ATS, job boards', 'Screening · résumé vs JD', 'Outreach · call, SMS, email', 'Shortlists candidate']

/** The recruiter's hiring chain, with the stretch CONNX covers bracketed. */
export function WorkflowMap() {
  return (
    <figure className="cs-map" aria-label="Workflow map of the hiring chain">
      <p className="cs-tag">Workflow map · The hiring chain</p>
      <ol className="cs-map-steps">
        {BEFORE.map((step, i) => (
          <li key={step} className="cs-map-step">
            <span className="cs-map-num">{String(i + 1).padStart(2, '0')}</span>
            {step}
          </li>
        ))}
      </ol>
      <div className="cs-map-scope">
        <ol className="cs-map-steps" start={BEFORE.length + 1}>
          {IN_SCOPE.map((step, i) => (
            <li key={step} className="cs-map-step is-scope">
              <span className="cs-map-num">{String(BEFORE.length + i + 1).padStart(2, '0')}</span>
              {step}
            </li>
          ))}
        </ol>
        <span className="cs-map-bracket">CONNX scope</span>
      </div>
      <figcaption className="cs-map-foot">
        Then: handover to QM → client. <span className="cs-map-out">Out of scope for v1</span>
      </figcaption>
    </figure>
  )
}
