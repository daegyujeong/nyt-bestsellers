import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | The NYT Bestseller Chronicle",
    default: "The NYT Bestseller Chronicle",
  },
  description: "Explore The New York Times Best Sellers in a classic newspaper format",
  keywords: ["books", "best sellers", "new york times", "reading", "literature"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="newspaper-container paper-texture">
          <header className="newspaper-header">
            <div className="date-edition">
              <span>{currentDate}</span>
              <span>Literary Edition</span>
            </div>
            <h1 className="newspaper-title">The NYT Bestseller Chronicle</h1>
            <div className="newspaper-motto">
              "All the books that are fit to read"
            </div>
            <Navigation />
          </header>

          <main className="newspaper-content">
            {children}
          </main>

          <footer className="newspaper-footer">
            <div className="footer-content">
              <div>
                <p>Data provided by The New York Times Books API</p>
              </div>
              <div className="footer-columns">
                <div>
                  <h4>Navigation</h4>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                  </ul>
                </div>
                <div>
                  <h4>Connect</h4>
                  <ul>
                    <li><a href="https://github.com/daegyujeong" aria-label="github">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/daegyu-jeong-sw/" aria-label="linkedin">LinkedIn</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-border"></div>
          </footer>
        </div>
      </body>
    </html>
  );
}