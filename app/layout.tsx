import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | NYT Best Sellers",
    default: "NYT Best Sellers",
  },
  description: "Explore New York Times Best Sellers lists and discover great books",
  keywords: ["books", "best sellers", "new york times", "reading", "literature"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-6 text-center">
          <p>Data provided by The New York Times Books API</p>
        </footer>
      </body>
    </html>
  );
}
