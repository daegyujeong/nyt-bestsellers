import Link from "next/link";
import styles from "../../../../styles/book-category.module.css";

interface Book {
    title: string;
    author: string;
    description: string;
    book_image: string;
    buy_links: Array<{
        name: string;
        url: string;
    }>;
    rank: number;
    publisher: string;
}

interface BookListResponse {
    results: {
        display_name: string;
        books: Book[];
        updated: string;
    };
}

export async function generateMetadata({ params }: { params: { id: string } }) {
    const { id } = params;
    const category = id
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return {
        title: `${category} | The NYT Bestseller Chronicle`,
        description: `Browse the New York Times ${category} bestseller list`,
    };
}

async function getBookList(id: string): Promise<BookListResponse> {
    try {
        const response = await fetch(
            `https://books-api.nomadcoders.workers.dev/list?name=${id}`,
            { next: { revalidate: 3600 } }
        );

        if (!response.ok) {
            throw new Error(`Failed to fetch book list for ${id}`);
        }

        return response.json();
    } catch (error) {
        console.error(`Error fetching book list for ${id}:`, error);
        throw error;
    }
}

export default async function BookListPage({
    params,
}: {
    params: { id: string };
}) {
    const { id } = params;
    const data = await getBookList(id);
    const { display_name, books, updated } = data.results;

    // Format the date in newspaper style
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        try {
            return new Date(dateString).toLocaleDateString("en-US", options);
        } catch (e) {
            return updated;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.breadcrumb}>
                    <Link href="/" className={styles.backLink}>
                        ← Home
                    </Link>
                    <span className={styles.separator}>/</span>
                    <span className={styles.current}>{display_name}</span>
                </div>

                <h2 className={styles.title}>{display_name}</h2>
                <div className={styles.titleUnderline}></div>
                <p className={styles.updated}>
                    <span className={styles.updateLabel}>Last Updated: </span>
                    {formatDate(updated)}
                </p>
            </div>

            <div className={styles.introduction}>
                <p className={styles.introText}>
                    <span className={styles.dropCap}>W</span>elcome to The New York Times {display_name} Bestseller List.
                    These are the books that have captivated readers across the nation, representing the most popular
                    titles in this category according to The New York Times' comprehensive tracking methodology.
                </p>
            </div>

            <div className={styles.booksContainer}>
                {books.map((book, index) => (
                    <article key={book.title} className={styles.bookItem}>
                        {/* Enhanced rank badge with medal colors for top 3 */}
                        <div className={`${styles.rank} ${book.rank === 1 ? styles.rankGold :
                                book.rank === 2 ? styles.rankSilver :
                                    book.rank === 3 ? styles.rankBronze : ''
                            }`}>
                            <span className={styles.rankNumber}>{book.rank}</span>
                        </div>

                        <div className={styles.bookImageWrapper}>
                            {book.book_image ? (
                                <img
                                    src={book.book_image}
                                    alt={book.title}
                                    className={styles.bookImage}
                                    style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px' }}
                                />
                            ) : (
                                <div className={styles.placeholderImage}>
                                    <span className={styles.placeholderTitle}>{book.title}</span>
                                </div>
                            )}
                        </div>

                        <div className={styles.bookInfo}>
                            <h3 className={styles.bookTitle}>{book.title}</h3>
                            <p className={styles.bookAuthor}>By {book.author}</p>
                            <p className={styles.bookDescription}>{book.description}</p>

                            <div className={styles.bookMeta}>
                                <span className={styles.publisher}>{book.publisher}</span>
                            </div>

                            <div className={styles.purchaseSection}>
                                <h4 className={styles.purchaseTitle}>Where to Purchase</h4>
                                <div className={styles.allBuyLinks}>
                                    {book.buy_links && book.buy_links.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.buyLink}
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className={styles.footer}>
                <Link href="/" className={styles.backToHomeLink}>
                    ← Back to All Lists
                </Link>
            </div>
        </div>
    );
}