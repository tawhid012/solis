import React from 'react';

export function HumanCareSection() {
  return (
    <section className="section human-care-editorial">
      <div className="container">
        <div className="human-care-grid">
          {/* Left: Emotional Headline & Statement */}
          <div className="human-care-quote-block">
            <span className="chapter-badge">05 / The Human Standard</span>
            <h2>Healthcare is personal.</h2>
            <p className="lead">
              Every medicine is dispensed and every patient is counselled by a qualified, registered pharmacist.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Behind every prescription is an individual seeking clarity, relief, and peace of mind. We take the time to answer your questions in plain, reassuring language — ensuring you understand why each medication was prescribed and how to use it safely at home.
            </p>
          </div>

          {/* Right: Strong Editorial Documentary Photograph */}
          <div className="human-care-photo">
            <img
              src="/images/human_care_moment.jpg"
              alt="Registered pharmacist handing a medicine package with warm care to an elderly patient"
              width="640"
              height="480"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
