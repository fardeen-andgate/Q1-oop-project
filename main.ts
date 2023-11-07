#! /usr/bin/env node
import { Customer,Order,Book } from "./classes/class.js";
import { faker } from "@faker-js/faker/locale/af_ZA";
import inquirer from "inquirer";
import Welcome from "./design/ascii.js";

let system = new Order()
for (let i = 0; i <= 10; i++){
    let title = faker.music.songName()
    let author = faker.person.fullName()
    let price = parseInt(faker.finance.amount(200,500))
    let quantity = parseInt(faker.finance.amount(5,10))
    const bookData = new Book(title,author,price,quantity)
    system.addBooks(bookData)
}

for(let i = 0; i<=5; i++){
    let name = faker.person.fullName()
    let address = faker.location.streetAddress()
    const cust = new Customer(name,address)
    system.addCustomer(cust)
}

Welcome()


async function orderBooks(system:Order) {
    const { userEmail } = await inquirer.prompt([
        {
          type: 'input',
          name: 'userEmail',
          message: 'Enter your email:',
        },
      ]);
    
      const customer = system.customer.find((c) => c.email === userEmail);
    
      if (!customer) {
        console.log('Customer not found. Please check your email address.');
        return;
      }
    
      const bookChoices = system.books.map((book) => ({
        name: `${book.title} by ${book.author} - $${book.price}`,
        value: book,
      }));
    
      const { selectedBooks } = await inquirer.prompt([
        {
          type: 'checkbox',
          name: 'selectedBooks',
          message: 'Select the books you want to order:',
          choices: bookChoices,
        },
      ]);
    
      const order = new Order();
    
      selectedBooks.forEach((book: Book) => order.addBooks(book));
    
      const totalPrice = order.calculateTotal();
    
      console.log('Order Summary:');
      console.log('Customer:', customer.name);
      console.log('Email:', customer.email);
      console.log('Address:', customer.address);
      console.log('Selected Books:');
      selectedBooks.forEach((book: { title: any; author: any; price: any; }) => {
        console.log(`- ${book.title} by ${book.author} - $${book.price}`);
      });
      console.log('Total Price:', totalPrice);
}

orderBooks(system)


    