import styles from "../../styles/about.module.css";

export const metadata = {
    title: "About | The NYT Bestseller Chronicle",
    description: "Technical information about this Next.js project",
};

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <article className={styles.article}>
                <header className={styles.header}>
                    <h2 className={styles.title}>About This Project</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.subtitle}>
                        A Next.js application for exploring NYT bestseller lists
                    </p>
                </header>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Project Overview</h3>
                    <p>
                        This application provides an interface to browse New York Times bestselling books across multiple categories. It uses a newspaper-inspired design to present the information in an elegant and readable format.
                    </p>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Technical Information</h3>
                    <div className={styles.techInfo}>
                        <ul className={styles.techListWithIcons}>
                            <li className={styles.techItem}>
                                <div className={styles.techIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                        <path d="M2 17l10 5 10-5"></path>
                                        <path d="M2 12l10 5 10-5"></path>
                                    </svg>
                                </div>
                                <div className={styles.techText}>
                                    <strong>Framework:</strong> Next.js 14 with App Router architecture
                                </div>
                            </li>
                            <li className={styles.techItem}>
                                <div className={styles.techIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <circle cx="12" cy="12" r="4"></circle>
                                        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
                                        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
                                        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
                                        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
                                    </svg>
                                </div>
                                <div className={styles.techText}>
                                    <strong>Frontend:</strong> React 18 with CSS Modules
                                </div>
                            </li>
                            <li className={styles.techItem}>
                                <div className={styles.techIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <line x1="10" y1="9" x2="8" y2="9"></line>
                                    </svg>
                                </div>
                                <div className={styles.techText}>
                                    <strong>Data:</strong> New York Times Books API
                                </div>
                            </li>
                            <li className={styles.techItem}>
                                <div className={styles.techIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="3" y1="9" x2="21" y2="9"></line>
                                        <line x1="9" y1="21" x2="9" y2="9"></line>
                                    </svg>
                                </div>
                                <div className={styles.techText}>
                                    <strong>Features:</strong> Dynamic routing, server components, responsive design
                                </div>
                            </li>
                            <li className={styles.techItem}>
                                <div className={styles.techIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="16 18 22 12 16 6"></polyline>
                                        <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                </div>
                                <div className={styles.techText}>
                                    <strong>Deployment:</strong> Vercel
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h3 className={styles.sectionTitle}>Key Features</h3>
                    <ul className={styles.featureList}>
                        <li>Browse all New York Times bestseller lists</li>
                        <li>View detailed information about books in each category</li>
                        <li>Responsive design that works on mobile and desktop</li>
                        <li>Clean, newspaper-inspired user interface</li>
                        <li>Direct links to purchase books from various retailers</li>
                    </ul>
                </section>

                <footer className={styles.aboutFooter}>
                    <p>The application uses the New York Times Books API for educational purposes.</p>
                </footer>
            </article>
        </div>
    );
}