const containerDiv = document.querySelector(".container");
const form = document.querySelector(".form");
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
  containerDiv.replaceChildren();

  theLibrary.forEach((book) => {
      //display card
      const card = document.createElement("div");
      const bookTitle = document.createElement("h2");
      const author = document.createElement("p");
      const pages = document.createElement("p");
      const read = document.createElement("p");
      const deleteButton = document.createElement("button");

      card.classList.add("card");
      bookTitle.classList.add("book-title");
      author.classList.add("author");
      pages.classList.add("pages");
      read.classList.add("read");
      deleteButton.classList.add("delete-button");

      card.appendChild(bookTitle);
      card.appendChild(author);
      card.appendChild(pages);
      card.appendChild(read);
      card.appendChild(deleteButton);

      bookTitle.textContent = book.name;
      author.textContent = book.author;
      pages.textContent = book.pages;
      read.textContent = book.read;

      containerDiv.appendChild(card);

      deleteButton.addEventListener("click", () => {
        card.remove();
      });
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
  form.reset();
});

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", () => {

  if(theLibrary.length < 10) {
    let currentName = document.querySelector("#name-input").value;
    let currentAuthor = document.querySelector("#author-input").value;
    let currentPages = document.querySelector("#pages-input").value;
    let currentRead = document.querySelector("#read-input").value;

    addBookToLibrary(currentName, currentAuthor, currentPages, currentRead);
    readLibrary();
    form.reset();
  }

  else {
    alert("Your library is full. Please delete some books to add more.")
  }
})



// TESTS
addBookToLibrary("Lucas", "Azevedo", "23", "yes");
addBookToLibrary("Manuely", "Fogaça", "23", "yes");
addBookToLibrary("Manuel", "Fogaça", "23", "yes");
addBookToLibrary("Manu", "Fogaça", "23", "yes");
addBookToLibrary("Mano", "Fogaça", "23", "yes");
 readLibrary();