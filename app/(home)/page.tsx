import BookList from "../../components/BookList";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "NYT Best Sellers",
  description: "Explore New York Times Best Sellers lists",
};

interface BookCategory {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

async function getBookCategories(): Promise<BookCategory[]> {
  try {
    const response = await fetch(
      "https://books-api.nomadcoders.workers.dev/lists",
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch book categories');
    }

    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error("Error fetching book categories:", error);
    return [];
  }
}

export default async function HomePage() {
  const bookCategories = await getBookCategories();

  return (
    <div className={styles.container}>
      <h1>New York Times Best Sellers</h1>
      <div className={styles.grid}>
        {bookCategories.map((category) => (
          <BookList
            key={category.list_name_encoded}
            displayName={category.display_name}
            listNameEncoded={category.list_name_encoded}
            updated={category.updated}
          />
        ))}
      </div>
    </div>
  );
}
