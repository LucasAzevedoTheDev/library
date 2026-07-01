const theLibrary = [];

function Book(name, author, pages, read) {
  if(!new.target) {
    throw Error("You must use the 'new' operator to call the constructor")
  };
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(...parameters) {
  
  const book = new Book(...parameters);

  theLibrary.push(book);
}

function readLibrary() {
  theLibrary.forEach((book) => {
      //display card
      containerDiv.appendChild(card);
  });
  // Set up basic HTML to see if it get easier☠️
}

const containerDiv = document.querySelector(".container");
const card = document.querySelector(".card");
const bookTitle = document.querySelector(".book-title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const read = document.querySelector(".read");


// TESTS
addBookToLibrary("Lucas", "Azevedo", "23", "yes");
readLibrary();