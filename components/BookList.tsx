import Link from "next/link";
import styles from "../styles/book-list.module.css";

interface BookListProps {
    displayName: string;
    listNameEncoded: string;
    updated: string;
}

export default function BookList({ displayName, listNameEncoded, updated }: BookListProps) {
    // Format the updated date in a newspaper style
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            month: 'short',
            day: 'numeric'
        };

        try {
            return new Date(dateString).toLocaleDateString('en-US', options);
        } catch (e) {
            return updated;
        }
    };

    return (
        <div className={styles.category}>
            <Link href={`/booklist/${listNameEncoded}`} className={styles.categoryLink}>
                <div className={styles.stamp}>
                    <span>{formatDate(updated)}</span>
                </div>
                <h3 className={styles.categoryTitle}>{displayName}</h3>
                <p className={styles.categoryUpdated}>Updated: {updated}</p>
                <div className={styles.readMore}>
                    <span>Read More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </div>
            </Link>
        </div>
    );
}