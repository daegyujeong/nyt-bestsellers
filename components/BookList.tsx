import Link from "next/link";
import styles from "../styles/book-list.module.css";

interface BookListProps {
    displayName: string;
    listNameEncoded: string;
    updated: string;
}

export default function BookList({ displayName, listNameEncoded, updated }: BookListProps) {
    return (
        <div className={styles.category}>
            <Link href={`/booklist/${listNameEncoded}`}>
                <h2>{displayName}</h2>
                <p>Updated: {updated}</p>
            </Link>
        </div>
    );
}

