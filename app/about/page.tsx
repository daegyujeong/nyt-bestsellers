export const metadata = {
    title: "About",
    description: "About the New York Times Best Sellers Explorer",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">About NYT Best Sellers Explorer</h1>

            <div className="prose lg:prose-xl">
                <p className="mb-4">
                    The NYT Best Sellers Explorer is a modern web application that provides an interactive way to explore
                    the New York Times Best Sellers lists. Built with performance and user experience in mind, this app
                    allows you to discover popular books across various categories and genres.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Key Features</h2>
                <ul className="list-disc pl-6 mb-6">
                    <li>Browse comprehensive list of NYT Best Sellers categories</li>
                    <li>View detailed information for books in each category</li>
                    <li>See book covers, descriptions, and author information</li>
                    <li>Direct purchase links to Amazon for each book</li>
                    <li>Regular updates from NYT Books API</li>
                    <li>Responsive design that works on all devices</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Technical Stack</h2>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Frontend Framework</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Next.js 14 - React framework with server-side rendering</li>
                        <li>TypeScript - For type safety and better development experience</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Styling</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>CSS Modules - For component-scoped styling</li>
                        <li>Modern CSS features for responsive design</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Data Fetching</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Server-side rendering with Next.js</li>
                        <li>New York Times Books API integration</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-2">Development Tools</h3>
                    <ul className="list-disc pl-6 mb-4">
                        <li>TypeScript - For static type checking</li>
                        <li>Git - For version control</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Data Source</h2>
                <p className="mb-4">
                    This application uses the official New York Times Books API to fetch best sellers data.
                    The content is regularly updated to ensure you have access to the latest best seller
                    information. Each book entry includes detailed information such as:
                </p>
                <ul className="list-disc pl-6 mb-6">
                    <li>Book title and author</li>
                    <li>Cover image</li>
                    <li>Description</li>
                    <li>Ranking information</li>
                    <li>Purchase links</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-4">Performance Features</h2>
                <ul className="list-disc pl-6 mb-6">
                    <li>Server-side rendering for optimal loading speed</li>
                    <li>Responsive images</li>
                    <li>Optimized routing with Next.js App Router</li>
                </ul>
            </div>
        </div>
    );
} 