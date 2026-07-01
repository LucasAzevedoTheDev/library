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
    console.log("It works!");
  });
  // Set up basic HTML to see if it get easier☠️
}




// TESTS
addBookToLibrary("Lucas", "Azevedo", "23", "yes");
readLibrary();