export class Book {
    title:string
    author:string
    price:number
    quantity:number
    constructor(title:string,author:string,price:number,quantity:number){
        this.title = title
        this.author = author
        this.price = price
        this.quantity = quantity
    }
    getTitle(): string {
        return this.title;
      }
    
      getPrice(): number {
        return this.price;
      }
    
      getQuantityInStock(): number {
        return this.quantity;
      }
    
}

export class Customer {
    name:string
    static count:number = 100
    email:string
    address:string
    constructor(name:string,address:string){
        this.name = name
        this.email = ++Customer.count + "@gmail.com"
        this.address = address
    }
}

export class Order {
    static calculateTotal() {
        throw new Error("Method not implemented.")
    }
    static totalPrice(arg0: string, totalPrice: any) {
        throw new Error("Method not implemented.")
    }
    static addBooks(book: Book) {
        throw new Error("Method not implemented.")
    }
    customer: Customer[] = []
    books: Book[] = []

    calculateTotal(): number {
        return this.books.reduce((total, book) => total + book.getPrice(), 0);
      }

    addBooks (book:Book){
        this.books.push(book)
    }
    addCustomer(customer:Customer){
        this.customer.push(customer)
    }
}