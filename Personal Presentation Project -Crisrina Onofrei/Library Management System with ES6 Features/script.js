class Book {
    constructor(title, author, ISBN) {
      this._title = title;
      this._author = author;
      this._ISBN = ISBN;
    }
  
    // Getter for the title property
    get title() {
      return this._title;
    }
  
    // Setter for the title property
    set title(newTitle) {
      this._title = newTitle;
    }
  
    // Getter for the author property
    get author() {
      return this._author;
    }
  
    // Setter for the author property
    set author(newAuthor) {
      this._author = newAuthor;
    }
  
    // Method to display book details
    displayDetails() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`ISBN: ${this._ISBN}`);
    }
  }
  
  // Creating a new Book object
  const book = new Book('Ultimul Regat', 'Bernard Cornwell', '978-606-33-7463-0');
  
  // Using the getter and setter
  console.log(book.title); // Output: 'Ultimul Regat'
  console.log(book.author); // Output: 'Bernard Cornwell'
  
  book.title = 'Stepa si alte povestiri';
  book.author = 'A.P. Cehov';
  
  console.log(book.title); // Output: 'Stepa si alte povestiri'
  console.log(book.author); // Output: 'A.P. Cehov'
  
  // Displaying book details
  book.displayDetails();
  
  // Create a class called `Magazine` that extends the `Book` class.
  class Magazine extends Book {
    constructor(title, author, ISBN, issueNumber) {
      super(title, author, ISBN);
      this._issueNumber = issueNumber;
    }
  
    // Getter for the issueNumber property
    get issueNumber() {
      return this._issueNumber;
    }
  
    // Setter for the issueNumber property
    set issueNumber(newIssueNumber) {
      this._issueNumber = newIssueNumber;
    }
  
    // Override the displayDetails method
    displayDetails() {
      super.displayDetails();
      console.log(`Issue Number: ${this.issueNumber}`);
    }
  }
  
  // Creating a new Magazine object
  const magazine = new Magazine('National Geographic', 'National Geographic Society', 'NG-123', 202107);
  
  // Using the getter and setter
  console.log(magazine.title); // Output: 'National Geographic'
  console.log(magazine.author); // Output: 'National Geographic Society'
  console.log(magazine.issueNumber); // Output: 202107
  
  magazine.issueNumber = 202108;
  
  console.log(magazine.issueNumber); // Output: 202108
  
  // Displaying magazine details
  magazine.displayDetails();
  
  // Create a class called `Library` that represents a library.
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      this.books = [...this.books, book];
    }
  
    removeBook(ISBN) {
      this.books = this.books.filter(book => book._ISBN !== ISBN);
    }
  
    findBooksByAuthor(author) {
      return this.books.filter(book => book._author === author);
    }
  
    listBooks() {
      this.books.forEach(book => {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`ISBN: ${book._ISBN}`);
      });
    }
  
    getTotalBooks() {
      return this.books.length;
    }
  
    getBooksByAuthor(author) {
      return this.books.filter(book => book.author === author);
    }

    
  getBooksWithTitleContaining(keyword) {
    return this.books.filter(book => book.title.includes(keyword));
  }

  getUniqueAuthors() {
    return [...new Set(this.books.map(book => book.author))];
  }

  getTotalBooksByAuthor(author) {
    return this.books.reduce((count, book) => (book.author === author ? count + 1 : count), 0);
  }

  hasAnyBooksByAuthor(author) {
    return this.books.some(book => book.author === author);
  }

  haveAllBooksByAuthor(author) {
    return this.books.every(book => book.author === author);
  }


  }
  
  // Creating an instance of the Library class called myLibrary with the name "My Library"
  const myLibrary = new Library('My Library');
  console.log(myLibrary.name); // Output: 'My Library'
  console.log(myLibrary.books); // Output: []
  
  // Adding books to the library
  const book1 = new Book('Anna Karenina', 'Lev Tolstoy', 'ISBN 1');
  const book2 = new Book('The Trial', 'Franz Kafka', 'ISBN 2');
  myLibrary.addBook(book1);
  myLibrary.addBook(book2);
  
  console.log(myLibrary.books); // Output: [Book, Book]
  
  // Removing a book from the library
  myLibrary.removeBook('ISBN 1');
  
  console.log(myLibrary.books); // Output: [Book]
  
  // Finding books by author
  const booksByAuthor = myLibrary.findBooksByAuthor('Franz Kafka');
  console.log(booksByAuthor); // Output: [Book]
  
  // Listing all books in the library
  myLibrary.listBooks();
  
  // Getting the total number of books in the library
  console.log(myLibrary.getTotalBooks()); // Output: 1
  
 
  /* example usage for - `getBooksWithTitleContaining(keyword: string): Book[]`:
     - ES6 Feature: `filter()` method for array manipulation.
   - `getUniqueAuthors(): string[]`
   - `getTotalBooksByAuthor(author: string): number`:*/
const books = [
    new Book('JavaScript: The Good Parts', 'Douglas Crockford', 'ISBN123'),
    new Book('Eloquent JavaScript', 'Marijn Haverbeke', 'ISBN456'),
    new Book('JavaScript: The Definitive Guide', 'David Flanagan', 'ISBN789'),
    new Book("You Don't Know JS", 'Kyle Simpson', 'ISBN1011'),
    new Book('JavaScript: The Good Parts', 'Douglas Crockford', 'ISBN1213')
  ];
  
  const library = new Library(books);
  
  const booksWithTitleContainingJavaScript = library.getBooksWithTitleContaining('JavaScript');
  console.log(booksWithTitleContainingJavaScript);
  // Output: [
  //   { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', ISBN: 'ISBN123' },
  //   { title: 'JavaScript: The Definitive Guide', author: 'David Flanagan', ISBN: 'ISBN789' },
  //   { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', ISBN: 'ISBN1213' }
  // ]
  
  const uniqueAuthors = library.getUniqueAuthors();
  console.log(uniqueAuthors);
  // Output: ['Douglas Crockford', 'Marijn Haverbeke', 'David Flanagan', 'Kyle Simpson']
  
  const totalBooksByDouglasCrockford = library.getTotalBooksByAuthor('Douglas Crockford');
  console.log(totalBooksByDouglasCrockford);
  // Output: 2

/* ex usage   - ES6 Feature: `reduce()` method for counting books.
   - `hasAnyBooksByAuthor(author: string): boolean`: */
  const hasBooksByAuthor = library.hasAnyBooksByAuthor('Kyle Simpson');
  console.log(hasBooksByAuthor);
  // Output: true

  // Example usage for `haveAllBooksByAuthor(author: string): boolean`
const haveAllBooksByAuthor = myLibrary.haveAllBooksByAuthor('Lev Tolstoy');
console.log(haveAllBooksByAuthor);
// Output: false