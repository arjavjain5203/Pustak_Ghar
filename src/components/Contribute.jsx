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
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Card className="animate-in fade-in-50 duration-400">
          <CardHeader className="pt-6">
            <CardTitle className="text-3xl font-bold text-[#16213e] dark:text-white mb-2">
              🤝 How to Contribute to Pustak Ghar
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
              Join our vibrant open source family — help us make study resources accessible for all!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">📝 Contribution Steps</h2>
              <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">🍴</span>
                  <div>
                    <strong className="font-semibold">Fork the repository</strong> on GitHub by clicking the <em>Fork</em> button at the top right of the page.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">💻</span>
                  <div>
                    <strong className="font-semibold">Clone your fork locally</strong> using the command:
                    <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-md text-sm overflow-x-auto">git clone https://github.com/YOUR-USERNAME/Pustak_Ghar.git</pre>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <strong className="font-semibold">Create a feature branch</strong> to keep your work organized:
                    <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-md text-sm overflow-x-auto">git checkout -b feature/YourFeatureName</pre>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">📦</span>
                  <div>
                    <strong className="font-semibold">Install dependencies</strong> so the project runs smoothly:
                    <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-md text-sm overflow-x-auto">npm install</pre>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <strong className="font-semibold">Make your changes</strong> following our coding standards and UI guidelines for consistency and quality.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">🧪</span>
                  <div>
                    <strong className="font-semibold">Test your changes</strong> locally to make sure everything works as expected.
                    <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-md text-sm overflow-x-auto">npm start</pre>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">💾</span>
                  <div>
                    <strong className="font-semibold">Commit your changes</strong> with a clear message describing your work:
                    <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-md text-sm overflow-x-auto">git add .<br />git commit -m "Add your feature"</pre>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">🛫</span>
                  <div>
                    <strong className="font-semibold">Push your branch</strong> to your fork:
                    <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-md text-sm overflow-x-auto">git push origin feature/YourFeatureName</pre>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">📬</span>
                  <div>
                    <strong className="font-semibold">Open a Pull Request</strong> on the original repository to propose your changes for review and merge.
                  </div>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">🌈 Community & Coding Guidelines</h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Use clear commit messages and keep your code readable</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Stick to responsive, modern UI with gradients, cards, and consistent theme</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Maintain the resource JSON hierarchy: <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">University → Courses → Branches → Years → Subjects → Resources</span></span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Test on both desktop and mobile before submitting</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Review our <a href="https://github.com/arjavjain5203/Pustak_Ghar/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Contributing Guide</a> & <a href="https://github.com/arjavjain5203/Pustak_Ghar/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Code of Conduct</a></span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">⚡ Top Contributors</h2>
              {loading ? (
                <p className="text-gray-600 dark:text-gray-400">Loading contributors...</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {contributors.slice(0, 8).map((user) => (
                    <a
                      className="flex flex-col items-center p-4 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                      key={user.id}
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Avatar className="mb-2">
                        <AvatarImage src={user.avatar_url} alt={user.login} />
                        <AvatarFallback>{user.login.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">{user.login}</span>
                    </a>
                  ))}
                </div>
              )}
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">💌 Communication</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If you have questions or ideas, open an issue or start a discussion.<br />
                Connect on <a href="https://www.linkedin.com/in/arjavjain5203/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a> or <a href="https://github.com/arjavjain5203/Pustak_Ghar/issues" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub Issues</a>.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contribute;