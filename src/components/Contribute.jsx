import { useEffect, useState } from "react";
import "./Contribute.css";

const GITHUB_REPO = "arjavjain5203/Pustak_Ghar";
const Contribute = () => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${GITHUB_REPO}/contributors?per_page=12`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setContributors(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="contrib-section-main">
      <div className="contrib-container">
        <h2 className="contrib-title">🤝 How to Contribute</h2>
        <p className="contrib-desc">
          Want to add resources, fix bugs, or make Pustak Ghar better? Here’s how!
        </p>
        <div className="contrib-card-content">

          <div className="contrib-topic">
            <h3>📝 Contribution Steps</h3>
            <ol className="contrib-steps-list">
              <li><span className="step-icon">🍴</span> Fork the repository on GitHub</li>
              <li><span className="step-icon">💻</span> Clone your fork:<pre>git clone https://github.com/YOUR-USERNAME/Pustak_Ghar.git</pre></li>
              <li><span className="step-icon">🌿</span> Create a feature branch:<pre>git checkout -b feature/YourFeatureName</pre></li>
              <li><span className="step-icon">📦</span> Install dependencies:<pre>npm install</pre></li>
              <li><span className="step-icon">✨</span> Make your changes and tests.</li>
              <li><span className="step-icon">💾</span> Commit & push:<pre>git add .<br />git commit -m "Add your feature"<br />git push origin feature/YourFeatureName</pre></li>
              <li><span className="step-icon">📬</span> Open a Pull Request!</li>
            </ol>
          </div>

          <div className="contrib-topic">
            <h3>🌈 Guidelines</h3>
            <ul>
              <li>Clear commit messages, readable code.</li>
              <li>Responsive, consistent UI and gradient theme.</li>
              <li>Preserve resource structure: University → Branches → Years → Subjects → Resources.</li>
              <li>Test on desktop and mobile.</li>
            </ul>
          </div>

          <div className="contrib-topic">
            <h3>⚡ Top Contributors</h3>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="contrib-list">
                {contributors.slice(0, 8).map((user) => (
                  <a
                    className="contrib-profile"
                    key={user.id}
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={user.avatar_url} alt={user.login} className="contrib-avatar" />
                    <span>{user.login}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contribute;
