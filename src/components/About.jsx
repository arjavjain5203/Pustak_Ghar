import "./About.css";

const About = () => (
    <section className="about-section-main">
        <div className="about-container">
            <h2 className="about-title">📚 Pustak Ghar</h2>
            <p className="about-desc">
                Unlocking free, organized, and accessible study resources for students across India. Built by students, for students!
            </p>

            <div className="about-card-content">
                <div className="about-topic">
                    <h3>🌟 What is Pustak Ghar?</h3>
                    <p>
                        Pustak Ghar is a dynamic open-source platform making college learning accessible—find notes, PYQs, video playlists, and more, all for free.
                    </p>
                </div>
                <div className="about-topic">
                    <h3>🚀 Key Features</h3>
                    <ul>
                        <li><strong>Personalized:</strong> Select your university, branch, and year.</li>
                        <li><strong>Rich Resources:</strong> Notes, videos, PYQs, syllabus—all by subject.</li>
                        <li><strong>Responsive Design:</strong> Beauty and clarity on any device.</li>
                        <li><strong>Open-Source:</strong> Community powered, free for everyone.</li>
                    </ul>
                </div>
                <div className="about-topic">
                    <h3>🎯 Our Vision</h3>
                    <p>
                        Empower students to succeed—by making reliable, curated knowledge easy to access and share.
                    </p>
                </div>
                <div className="about-topic">
                    <h3>🖥️ Technologies</h3>
                    <ul>
                        <li>React.js frontend</li>
                        <li>Responsive CSS & gradients</li>
                        <li>JSON-based resource organization</li>
                        <li>GitHub community</li>
                    </ul>
                </div>
                <div className="about-topic">
                    <h3>💡 How to Use</h3>
                    <ol>
                        <li>Select your university and branch</li>
                        <li>Browse or search for subjects</li>
                        <li>Access all resources and start learning!</li>
                    </ol>
                </div>
                <div className="about-topic">
                    <h3>🤝 Get Involved</h3>
                    <p>
                        Anyone can contribute—students, teachers, coders. Suggest features, add resources, or improve docs: every bit helps.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default About;
