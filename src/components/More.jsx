import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "./ui/card";


const More = () => {
    return (
        <div className="min-h-screen py-12 px-4">
            {/* Header */}
            <header className="text-center mb-12 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                    Discover More with Pustak Ghar
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    Beyond just notes — a complete hub for organized study, collaboration,
                    and success.
                </p>
            </header>

            <div className="max-w-6xl mx-auto space-y-12">
                {/* Resources */}
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">📚 Resources Offered</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-300">Notes & Study Guides</h3>
                                <p className="text-gray-700 dark:text-gray-300">Concise, subject-specific notes to make revision easier.</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-300">Previous Year Papers</h3>
                                <p className="text-gray-700 dark:text-gray-300">PYQs for better exam preparation and pattern analysis.</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-purple-800 dark:text-purple-300">Video Playlists</h3>
                                <p className="text-gray-700 dark:text-gray-300">Handpicked tutorials and lectures for visual learning.</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-orange-800 dark:text-orange-300">Syllabus & Roadmaps</h3>
                                <p className="text-gray-700 dark:text-gray-300">Structured syllabus breakdowns and learning roadmaps.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">🌐 Why Choose Pustak Ghar?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-red-800 dark:text-red-300">100% Free</h3>
                                <p className="text-gray-700 dark:text-gray-300">No subscriptions, no hidden charges — just knowledge.</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-indigo-800 dark:text-indigo-300">For Everyone</h3>
                                <p className="text-gray-700 dark:text-gray-300">Universities, branches, and years — tailored for all.</p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-teal-800 dark:text-teal-300">Community Driven</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Contributions from students & educators keep it fresh and
                                    relevant.
                                </p>
                            </div>
                            <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-pink-800 dark:text-pink-300">Accessible Anywhere</h3>
                                <p className="text-gray-700 dark:text-gray-300">Mobile & desktop friendly with modern, responsive design.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* How It Works */}
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">🛠️ How It Works?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ol className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                            <li className="flex items-start space-x-3">
                                <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">1</span>
                                <span>Select your university & course from the homepage.</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">2</span>
                                <span>Get instant access to notes, PYQs, and curated resources.</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">3</span>
                                <span>Use playlists & roadmaps to plan your study routine.</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">4</span>
                                <span>Contribute and share your own resources with others!</span>
                            </li>
                        </ol>
                    </CardContent>
                </Card>

                {/* Student Stories */}
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">📖 Student Stories</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg border-l-4 border-blue-500">
                                <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-4">
                                    "Pustak Ghar helped me organize my exam prep. The PYQs gave me
                                    exactly what I needed to focus on. Highly recommended!"
                                </p>
                                <span className="font-semibold text-blue-600 dark:text-blue-400">– Aditi, B.Tech Student</span>
                            </div>
                            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border-l-4 border-green-500">
                                <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-4">
                                    "As an educator, I love how easy it is to share resources with my
                                    students. It's building a real learning community."
                                </p>
                                <span className="font-semibold text-green-600 dark:text-green-400">– Prof. Sharma</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Impact */}
                <Card className="shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-200">🌟 Community Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="p-6">
                                <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10,000+</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-medium">Resources Shared</p>
                            </div>
                            <div className="p-6">
                                <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5,000+</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-medium">Students Benefited</p>
                            </div>
                            <div className="p-6">
                                <h3 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">200+</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-medium">Universities Covered</p>
                            </div>
                            <div className="p-6">
                                <h3 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">500+</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-medium">Contributors Joined</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default More;