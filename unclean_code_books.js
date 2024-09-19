let books = [
  { id: 1, title: "Der alte Mann und das Meer", price: 10.5 },
  { id: 2, title: "Moby Dick", price: 12.3 },
  { id: 3, title: "1984", price: 8.5 },
];

function getBookById(id) {
  const book = books.find(book => book.id === id);
  return book || null;
}

function addBook(title, price) {
  const maxId = Math.max(...books.map(book => book.id));
  const newBook = { id: maxId + 1, title, price };
  books.push(newBook);
}

function listBooks() {
  books.forEach(book => {
    console.log(`${book.title} - ${book.price}€`);
  });
}

let selectedBook = getBookById(2);
console.log(selectedBook);

addBook("Fahrenheit 451", 9.2);
listBooks();                  
