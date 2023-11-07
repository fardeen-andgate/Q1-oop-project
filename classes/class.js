export class Book {
    constructor(title, author, price, quantity) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
    getTitle() {
        return this.title;
    }
    getPrice() {
        return this.price;
    }
    getQuantityInStock() {
        return this.quantity;
    }
}
export class Customer {
    constructor(name, address) {
        this.name = name;
        this.email = ++Customer.count + "@gmail.com";
        this.address = address;
    }
}
Customer.count = 100;
export class Order {
    constructor() {
        this.customer = [];
        this.books = [];
    }
    static calculateTotal() {
        throw new Error("Method not implemented.");
    }
    static totalPrice(arg0, totalPrice) {
        throw new Error("Method not implemented.");
    }
    static addBooks(book) {
        throw new Error("Method not implemented.");
    }
    calculateTotal() {
        return this.books.reduce((total, book) => total + book.getPrice(), 0);
    }
    addBooks(book) {
        this.books.push(book);
    }
    addCustomer(customer) {
        this.customer.push(customer);
    }
}
