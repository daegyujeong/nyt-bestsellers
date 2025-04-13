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
                        <ul className={styles.techList}>
                            <li><strong>Framework:</strong> Next.js 14 with App Router architecture</li>
                            <li><strong>Frontend:</strong> React 18 with CSS Modules</li>
                            <li><strong>Data:</strong> New York Times Books API</li>
                            <li><strong>Features:</strong> Dynamic routing, server components, responsive design</li>
                            <li><strong>Deployment:</strong> Vercel</li>
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