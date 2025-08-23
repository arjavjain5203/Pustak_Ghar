import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const About = () => {
    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <Card className="animate-in fade-in-50 duration-400">
                    <CardHeader className="pt-6">
                        <CardTitle className="text-3xl font-bold text-[#16213e] dark:text-white mb-2">📚 Pustak Ghar</CardTitle>
                        <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                            Unlocking free, organized, and accessible study resources for university students across India.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-7">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">🌟 What is Pustak Ghar?</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Pustak Ghar is a dynamic, open-source platform dedicated to democratizing learning for university communities. Its mission is simple: Help students find reliable study notes, previous year question papers, video tutorials, and curated content for their subjects — all in one place, absolutely free.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">🚀 Key Features</h2>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li><strong className="font-semibold">Customized Experience:</strong> Select your university, branch, and year for tailored resources.</li>
                                <li><strong className="font-semibold">Subject-wise Materials:</strong> Access notes, video playlists, PYQs, and syllabus easily.</li>
                                <li><strong className="font-semibold">Modern Design:</strong> Beautiful UI with gradient backgrounds, responsive for desktop and mobile.</li>
                                <li><strong className="font-semibold">For Everyone:</strong> Entirely free; no paid tiers or locked content.</li>
                                <li><strong className="font-semibold">Community Driven:</strong> Contributions welcome! New resources and improvements from students and educators help it grow.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">🎯 Our Vision</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                We believe knowledge should be accessible to all. By removing barriers and centralizing quality materials, Pustak Ghar empowers students to succeed academically, collaborate, and prepare for exams with confidence.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">🖥️ Technologies</h2>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                <li>React.js for a fast and interactive frontend</li>
                                <li>Responsive CSS with glassmorphism and gradients</li>
                                <li>JSON-based resource organization for scalability</li>
                                <li>Open-source—anyone can contribute via GitHub</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">💡 How to Use</h2>
                            <ol className="space-y-2 text-gray-700 dark:text-gray-300 list-decimal list-inside">
                                <li>Choose your university and branch via the homepage.</li>
                                <li>Browse or search for your subject.</li>
                                <li>Start learning: view notes, watch video tutorials, or solve PYQs.</li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">🤝 Get Involved</h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                Pustak Ghar is open for contributions, whether you're a student, teacher, coder, or enthusiast. Add new resources, suggest features, or help improve documentation—every bit helps the community!
                            </p>
                        </section>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default About;