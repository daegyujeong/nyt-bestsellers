interface Book {
    rank: number;
    title: string;
    author: string;
    description: string;
    book_image: string;
    amazon_product_url: string;
}

interface BookListResponse {
    results: {
        display_name: string;
        books: Book[];
    };
}

async function getBookList(listName: string): Promise<BookListResponse> {
    const response = await fetch(
        `https://books-api.nomadcoders.workers.dev/list?name=${listName}`,
        { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
        throw new Error('Failed to fetch book list');
    }

    return response.json();
}

export default async function BookListPage({
    params: { id },
}: {
    params: { id: string };
}) {
    const { results: { display_name, books } } = await getBookList(id);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">{display_name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book) => (
                    <div key={book.rank} className="border rounded-lg overflow-hidden shadow-lg">
                        {book.book_image && (
                            <img
                                src={book.book_image}
                                alt={book.title}
                                className="w-full h-64 object-cover"
                            />
                        )}
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                            <p className="text-gray-600 mb-2">by {book.author}</p>
                            <p className="text-gray-700 mb-4">{book.description}</p>
                            <a
                                href={book.amazon_product_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                            >
                                Buy on Amazon
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 