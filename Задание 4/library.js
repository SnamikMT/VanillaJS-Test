
class Book {
    constructor(title, author, isbn) {
        this.title = title;          
        this.author = author;        
        this.isbn = isbn;            
        this.status = 'available'; 
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    // Добавляем книгу
    addBook(book) {
        this.books.push(book);
        console.log(`Книга "${book.title}" добавлена в библиотеку.`);
    }

    // Возвращаем
    borrowBook(isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        if (book) {
            if (book.status === 'available') {
                book.status = 'borrowed';
                console.log(`Вы взяли книгу "${book.title}".`);
            } else {
                console.log(`Книга "${book.title}" уже взята.`);
            }
        } else {
            console.log(`Книга с ISBN ${isbn} не найдена.`);
        }
    }

    // Возврат по isbn
    returnBook(isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        if (book) {
            if (book.status === 'borrowed') {
                book.status = 'available';
                console.log(`Книга "${book.title}" возвращена в библиотеку.`);
            } else {
                console.log(`Книга "${book.title}" уже доступна.`);
            }
        } else {
            console.log(`Книга с ISBN ${isbn} не найдена.`);
        }
    }

    // Выведем доступные книжки
    listAvailableBooks() {
        const availableBooks = this.books.filter(book => book.status === 'available');
        if (availableBooks.length > 0) {
            console.log('Доступные книги:');
            availableBooks.forEach(book => {
                console.log(`Название: "${book.title}", Автор: ${book.author}, ISBN: ${book.isbn}`);
            });
        } else {
            console.log('Нет доступных книг.');
        }
    }
}

const library = new Library();

// Создаём книги
const book1 = new Book('1984', 'Джордж Оруэлл', '123456');
const book2 = new Book('Мастер и Маргарита', 'Михаил Булгаков', '789101');
const book3 = new Book('Коралловый корабль', 'Стэкпул Генри Де-Вер', '111213');

// Пополним библиотеку
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);


library.listAvailableBooks();

library.borrowBook('123456');

library.borrowBook('123456');

library.returnBook('123456');

library.listAvailableBooks();
