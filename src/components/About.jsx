import "./About.css";

const About = () => {
    return (
        <div className="app-wrapper" >
            <div className="page-container about-page-container">
                <div className="content-card about-card">
                    <div className="about-content-inner">
                        <h1 className="about-title">📚 Pustak Ghar</h1>
                        <p className="about-tagline">
                            Unlocking free, organized, and accessible study resources for university students across India.
                        </p>
                    </div>

                    <section className="about-section">
                        <h2>🌟 What is Pustak Ghar?</h2>
                        <p>
                            Pustak Ghar is a dynamic, open-source platform dedicated to democratizing learning for university communities. Its mission is simple: Help students find reliable study notes, previous year question papers, video tutorials, and curated content for their subjects — all in one place, absolutely free.
                        </p>
                    </section>

                    <section className="about-section">
                        <h2>🚀 Key Features</h2>
                        <ul>
                            <li><strong>Customized Experience:</strong> Select your university, branch, and year for tailored resources.</li>
                            <li><strong>Subject-wise Materials:</strong> Access notes, video playlists, PYQs, and syllabus easily.</li>
                            <li><strong>Modern Design:</strong> Beautiful UI with gradient backgrounds, responsive for desktop and mobile.</li>
                            <li><strong>For Everyone:</strong> Entirely free; no paid tiers or locked content.</li>
                            <li><strong>Community Driven:</strong> Contributions welcome! New resources and improvements from students and educators help it grow.</li>
                        </ul>
                    </section>

                    <section className="about-section">
                        <h2>🎯 Our Vision</h2>
                        <p>
                            We believe knowledge should be accessible to all. By removing barriers and centralizing quality materials, Pustak Ghar empowers students to succeed academically, collaborate, and prepare for exams with confidence.
                        </p>
                    </section>

                    <section className="about-section">
                        <h2>🖥️ Technologies</h2>
                        <ul>
                            <li>React.js for a fast and interactive frontend</li>
                            <li>Responsive CSS with glassmorphism and gradients</li>
                            <li>JSON-based resource organization for scalability</li>
                            <li>Open-source—anyone can contribute via GitHub</li>
                        </ul>
                    </section>

                    <section className="about-section">
                        <h2>💡 How to Use</h2>
                        <ol>
                            <li>Choose your university and branch via the homepage.</li>
                            <li>Browse or search for your subject.</li>
                            <li>Start learning: view notes, watch video tutorials, or solve PYQs.</li>
                        </ol>
                    </section>

                    <section className="about-section">
                        <h2>🤝 Get Involved</h2>
                        <p>
                            Pustak Ghar is open for contributions, whether you’re a student, teacher, coder, or enthusiast. Add new resources, suggest features, or help improve documentation—every bit helps the community!
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;