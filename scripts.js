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
      // display card
      const card = document.createElement("div");
      card.classList.add("card");
      const bookTitle = document.createElement("h2");
      bookTitle.classList.add("book-title");
      const author = document.createElement("p");
      author.classList.add("author");
      const pages = document.createElement("p");
      pages.classList.add("pages");
      const checkboxLabel = document.createElement("label");
      checkboxLabel.classList.add("read-label");
      checkboxLabel.htmlFor = book.id;
      const read = document.createElement("input");
        read.classList.add("read");
        read.type = "checkbox";
        read.id = book.id;
        read.checked = book.read;
        
      const deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-button");
      const deleteIcon = document.createElement("img");
      deleteIcon.src = "icons/delete.svg";
      deleteIcon.alt = "delete icon";
      deleteIcon.classList.add("delete-icon");
      deleteButton.appendChild(deleteIcon); 



      // add div containers
      const upperCardFlex = document.createElement("div");
      upperCardFlex.classList.add("upper-card-flex");
      const lowerCardFlex = document.createElement("div");
      lowerCardFlex.classList.add("lower-card-flex");
      const checkboxField = document.createElement("div");
      checkboxField.classList.add("checkbox-field");
      upperCardFlex.appendChild(bookTitle);
      upperCardFlex.appendChild(author);
      upperCardFlex.appendChild(pages);
      checkboxField.appendChild(checkboxLabel);
      checkboxField.appendChild(read);      
      lowerCardFlex.appendChild(checkboxField);
      lowerCardFlex.appendChild(deleteButton);

      card.appendChild(upperCardFlex);
      card.appendChild(lowerCardFlex);

      bookTitle.textContent = book.name;
      author.textContent = book.author;
      pages.textContent = book.pages + " Pages";
      checkboxLabel.textContent = "Read";
      containerDiv.appendChild(card);

      deleteButton.addEventListener("click", () => {
        card.remove();
      });

      read.addEventListener("click", () => {
        book.toggleRead();
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
  if(!currentName.value === "" || !currentAuthor.value === "" || !currentPages.value === "") {
    if(theLibrary.length < 10 ) {
      let currentName = document.querySelector("#name-input").value;
      let currentAuthor = document.querySelector("#author-input").value;
      let currentPages = document.querySelector("#pages-input").value;

      addBookToLibrary(currentName, currentAuthor, currentPages);
      readLibrary();
      form.reset();
    }

    else {
      alert("Your library is full. Please delete some books to add more.");
    }
  }
})

Book.prototype.toggleRead = function() {
  if(this.read === true) {
    this.read = false;
  }

  else {
    this.read = true;
  }
}

// TESTS
addBookToLibrary("Lucas", "Azevedo", "23", false);
addBookToLibrary("Manuely", "Fogaça", "23", false);
addBookToLibrary("Manuel", "Fogaça", "23", false);
addBookToLibrary("Manu", "Fogaça", "23", false);
addBookToLibrary("Mano", "Fogaça", "23", false);
 readLibrary();



 

