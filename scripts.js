const containerDiv = document.querySelector(".container");

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
      const card = document.createElement("div");
      const bookTitle = document.createElement("h2");
      const author = document.createElement("p");
      const pages = document.createElement("p");
      const read = document.createElement("p");

      card.classList.add("card");
      bookTitle.classList.add("book-title");
      author.classList.add("author");
      pages.classList.add("pages");
      read.classList.add("read");

      card.appendChild(bookTitle)
      card.appendChild(author)
      card.appendChild(pages)
      card.appendChild(read)

      bookTitle.textContent = book.name;
      author.textContent = book.author;
      pages.textContent = book.pages;
      read.textContent = book.read;

      containerDiv.appendChild(card);
  });
}

const modal = document.querySelector(".modal");
const newButton = document.querySelector(".new-button");
const closeButton = document.querySelector(".close-button");

newButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});



// TESTS
addBookToLibrary("Lucas", "Azevedo", "23", "yes");
addBookToLibrary("Manuely", "Fogaça", "23", "yes");
addBookToLibrary("Manuely", "Fogaça", "23", "yes");
addBookToLibrary("Manuely", "Fogaça", "23", "yes");
addBookToLibrary("Manuely", "Fogaça", "23", "yes");
addBookToLibrary("Manuely", "Fogaça", "23", "yes");
addBookToLibrary("Manuely", "Fogaça", "23", "yes");
addBookToLibrary("Manuely", "Fogaça", "23", "yes");
readLibrary();