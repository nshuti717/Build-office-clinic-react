import LibraryCards from './LibraryCards'

function LibraryBooks() {
  const books = [
    { code: 'BIO234', title: 'Biology', price: 200 },
    { code: 'CHEM234', title: 'Chemistry', price: 300 },
    { code: 'MATH234', title: 'Mathematics', price: 400 },
  ];

  const totalBooks = books.length;
  const totalPrice = books.reduce((sum, book) => sum + book.price, 0);

  return (
    <div>
      <h2>List of Books</h2>
      <div>
        {books.map((book) => (
          <LibraryCards key={book.code} bookInfo={book} />
        ))}
      </div>
      <p>Total books: {totalBooks}</p>
      <p>The total price for {totalBooks} books is {totalPrice}</p>
    </div>
  );
}

export default LibraryBooks;
