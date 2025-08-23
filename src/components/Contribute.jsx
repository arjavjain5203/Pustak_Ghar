import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar";

const GITHUB_REPO = "arjavjain5203/Pustak_Ghar";

const Contribute = () => {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch top contributors from GitHub API
    fetch(`https://api.github.com/repos/${GITHUB_REPO}/contributors?per_page=15`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setContributors(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app-wrapper">
      <div className="page-container contribute-page-container">
        <Card className="contribute-card">
          <CardHeader>
            <CardTitle className="contribute-title">🤝 How to Contribute to Pustak Ghar</CardTitle>
            <CardDescription className="contribute-tagline">
              Join our vibrant open source family — help us make study resources accessible for all!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <section className="contribute-section">
              <h2>📝 Contribution Steps</h2>
              <ol className="contribute-steps-list">
                <li>
                  <span className="step-icon">🍴</span> <strong>Fork the repository</strong> on GitHub by clicking the <em>Fork</em> button at the top right of the page.
                </li>
                <li>
                  <span className="step-icon">💻</span> <strong>Clone your fork locally</strong> using the command:
                  <pre>git clone https://github.com/YOUR-USERNAME/Pustak_Ghar.git</pre>
                </li>
                <li>
                  <span className="step-icon">🌿</span> <strong>Create a feature branch</strong> to keep your work organized:
                  <pre>git checkout -b feature/YourFeatureName</pre>
                </li>
                <li>
                  <span className="step-icon">📦</span> <strong>Install dependencies</strong> so the project runs smoothly:
                  <pre>npm install</pre>
                </li>
                <li>
                  <span className="step-icon">✨</span> <strong>Make your changes</strong> following our coding standards and UI guidelines for consistency and quality.
                </li>
                <li>
                  <span className="step-icon">🧪</span> <strong>Test your changes</strong> locally to make sure everything works as expected.
                  <pre>npm start</pre>
                </li>
                <li>
                  <span className="step-icon">💾</span> <strong>Commit your changes</strong> with a clear message describing your work:
                  <pre>git add .<br />git commit -m "Add your feature"</pre>
                </li>
                <li>
                  <span className="step-icon">🛫</span> <strong>Push your branch</strong> to your fork:
                  <pre>git push origin feature/YourFeatureName</pre>
                </li>
                <li>
                  <span className="step-icon">📬</span> <strong>Open a Pull Request</strong> on the original repository to propose your changes for review and merge.
                </li>
              </ol>
            </section>


            <section className="contribute-section">
              <h2>🌈 Community & Coding Guidelines</h2>
              <ul>
                <li>Use clear commit messages and keep your code readable</li>
                <li>Stick to responsive, modern UI with gradients, cards, and consistent theme</li>
                <li>Maintain the resource JSON hierarchy: <span>University → Courses → Branches → Years → Subjects → Resources</span></li>
                <li>Test on both desktop and mobile before submitting</li>
                <li>Review our <a href="https://github.com/arjavjain5203/Pustak_Ghar/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contributing Guide</a> & <a href="https://github.com/arjavjain5203/Pustak_Ghar/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer">Code of Conduct</a></li>
              </ul>
            </section>

            <section className="contribute-section">
              <h2>⚡ Top Contributors</h2>
              {loading ? (
                <p>Loading contributors...</p>
              ) : (
                <div className="contributor-list">
                  {contributors.slice(0, 8).map((user) => (
                    <a
                      className="contributor-profile"
                      key={user.id}
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Avatar>
                        <AvatarImage src={user.avatar_url} alt={user.login} />
                        <AvatarFallback>{user.login.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <span>{user.login}</span>
                    </a>
                  ))}
                </div>
              )}
            </section>

            <section className="contribute-section">
              <h2>💌 Communication</h2>
              <p>
                If you have questions or ideas, open an issue or start a discussion.<br />
                Connect on <a href="https://www.linkedin.com/in/arjavjain5203/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="https://github.com/arjavjain5203/Pustak_Ghar/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a>.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contribute;