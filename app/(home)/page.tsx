import BookList from "../../components/BookList";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "The NYT Bestseller Chronicle",
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

  // Get current date for newspaper format
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <div className={styles.leadStory}>
          <h2 className={styles.leadTitle}>Today's Bestseller Lists</h2>
          <div className={styles.byline}>Literary Desk • {currentDate}</div>
          <p className={styles.leadParagraph}>
            The New York Times Best Seller list is widely considered the preeminent list of best-selling books in the United States.
            Published weekly in The New York Times Book Review magazine, the best-seller list has been published since October 12, 1931.
          </p>
          <p>
            Browse through our comprehensive collection of bestseller lists below, updated regularly to reflect the most current reading trends across the nation.
          </p>
        </div>
      </div>

      <div className={styles.categoriesSection}>
        <h3 className={styles.sectionTitle}>Bestseller Categories</h3>
        <div className={styles.decorativeLine}></div>

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

      <div className={styles.featureSection}>
        <h3 className={styles.sectionTitle}>Why Read Bestsellers?</h3>
        <div className={styles.decorativeLine}></div>

        <div className={styles.feature}>
          <div className={styles.featureContent}>
            <p>
              <span className={styles.dropCap}>B</span>estsellers often reflect the cultural zeitgeist, offering insights into what captivates readers in our current moment.
              They provide shared experiences, fuel conversations, and connect us through our reading choices.
            </p>
            <p>
              While some bestsellers rise through genuine word-of-mouth and critical acclaim, others benefit from marketing campaigns or famous authors. The lists represent
              a fascinating mix of literary merit, commercial appeal, and cultural impact.
            </p>
            <p>
              Whether you're looking for your next great read or simply curious about what's popular, these lists offer a window into America's reading habits and preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}