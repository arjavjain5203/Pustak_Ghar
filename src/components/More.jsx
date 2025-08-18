import React from "react";
import "./More.css";

const More = () => {
  return (
    <div className="more-container">
      {/* Header */}
      <header className="more-header">
        <h1>Discover More with Pustak Ghar</h1>
        <p>
          Beyond just notes — a complete hub for organized study, collaboration,
          and success.
        </p>
      </header>

      {/* Resources */}
      <section className="more-section">
        <h2>📚 Resources Offered</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <h3>Notes & Study Guides</h3>
            <p>Concise, subject-specific notes to make revision easier.</p>
          </div>
          <div className="resource-card">
            <h3>Previous Year Papers</h3>
            <p>PYQs for better exam preparation and pattern analysis.</p>
          </div>
          <div className="resource-card">
            <h3>Video Playlists</h3>
            <p>Handpicked tutorials and lectures for visual learning.</p>
          </div>
          <div className="resource-card">
            <h3>Syllabus & Roadmaps</h3>
            <p>Structured syllabus breakdowns and learning roadmaps.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="more-section">
        <h2>🌐 Why Choose Pustak Ghar?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>100% Free</h3>
            <p>No subscriptions, no hidden charges — just knowledge.</p>
          </div>
          <div className="why-card">
            <h3>For Everyone</h3>
            <p>Universities, branches, and years — tailored for all.</p>
          </div>
          <div className="why-card">
            <h3>Community Driven</h3>
            <p>
              Contributions from students & educators keep it fresh and
              relevant.
            </p>
          </div>
          <div className="why-card">
            <h3>Accessible Anywhere</h3>
            <p>Mobile & desktop friendly with modern, responsive design.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="more-section">
        <h2>🛠️ How It Works?</h2>
        <ol className="steps-list">
          <li>Select your university & course from the homepage.</li>
          <li>Get instant access to notes, PYQs, and curated resources.</li>
          <li>Use playlists & roadmaps to plan your study routine.</li>
          <li>Contribute and share your own resources with others!</li>
        </ol>
      </section>

      {/* Student Stories */}
      <section className="more-section">
        <h2>📖 Student Stories</h2>
        <div className="testimonial">
          <p>
            "Pustak Ghar helped me organize my exam prep. The PYQs gave me
            exactly what I needed to focus on. Highly recommended!"
          </p>
          <span>– Aditi, B.Tech Student</span>
        </div>
        <div className="testimonial">
          <p>
            "As an educator, I love how easy it is to share resources with my
            students. It’s building a real learning community."
          </p>
          <span>– Prof. Sharma</span>
        </div>
      </section>

      {/* Impact */}
      <section className="more-section impact">
        <h2>🌟 Community Impact</h2>
        <div className="impact-grid">
          <div>
            <h3>10,000+</h3>
            <p>Resources Shared</p>
          </div>
          <div>
            <h3>5,000+</h3>
            <p>Students Benefited</p>
          </div>
          <div>
            <h3>200+</h3>
            <p>Universities Covered</p>
          </div>
          <div>
            <h3>500+</h3>
            <p>Contributors Joined</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default More;
