# Library

A fully functional virtual book library application built with Vanilla JavaScript, HTML, and CSS. This project is part of The Odin Project's Intermediate JavaScript curriculum, focusing on object-oriented concepts and dynamic DOM manipulation.

## Features

* **Dynamic Book Catalog:** Allows users to add, store, and view books in a responsive card-based layout.
* **State Syncing:** Real-time synchronization between the JavaScript memory array (`theLibrary`) and the rendered UI.
* **Interactive Modal Form:** Clean modal interface for adding new books, built with the native HTML `<dialog>` element.
* **Form Validation & Constraints:** Implements robust logical checking (`&&` operators) to ensure all fields are filled before entry, with a built-in library limit of 10 books.
* **Book Management:** Users can dynamically remove books from the library or toggle their "Read/Unread" status with real-time state changes.

## Key Learnings

* **Prototypes & Constructors:** Mastering JavaScript Object Constructors, the `new` keyword constraint checking (`new.target`), and extending object capabilities efficiently using `Book.prototype`.
* **Advanced DOM Manipulation:** Using `containerDiv.replaceChildren()` to efficiently clean and re-render DOM nodes, along with generating highly nested, semantic HTML structures entirely via JavaScript.
* **Logical Conditionals & Precedence:** Deepened understanding of operator precedence (fixing bugs involving the negation `!` operator versus strict equality `!==`) and combining constraints with logical AND (`&&`).
* **Event Handling & Defaults:** Managing form submission lifecycles within modal dialogs using `event.preventDefault()` to gain full manual control over the application's flow.
* **Deployment & Cache Environments:** Debugging real-world deployment challenges on GitHub Pages, understanding continuous integration builds (GitHub Actions), and handling browser cache behavior.

## How to run locally

1. Clone this repository:
   ```bash
   git clone https://github.com/LucasAzevedoTheDev/library.git 
```
2. Open `index.html` in your browser  

---
Developed by [Lucas Azevedo](https://github.com/LucasAzevedoTheDev)