export class AddBook {
  constructor(books, valueTitle, valueAuthor, mainTitle) {
    this.books = books || [];
    this.valueTitle = valueTitle || "";
    this.valueAuthor = valueAuthor || "";
    this.mainTitle = mainTitle || "Add Book"; 
  }
  render() {
    const addBook = document.createElement("div");
    addBook.classList.add("card");
    addBook.classList.add("card-body");
    addBook.style.margin="0 auto";
    addBook.style.transform="translateY(50%)";
    addBook.innerHTML = `<h5>${this.mainTitle}</h5>`
    const form = document.createElement("form");
    form.classList.add("form-inline");
    const inputTitle = document.createElement("input");
    inputTitle.classList.add("form-control");
    inputTitle.classList.add("mb-4");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("placeholder", "Title");
    inputTitle.value = this.valueTitle;
    const inputAuthor = document.createElement("input");
    inputAuthor.classList.add("form-control");
    inputAuthor.classList.add("mb-4");
    inputAuthor.setAttribute("type", "text");
    inputAuthor.setAttribute("placeholder", "Author");
    inputAuthor.value = this.valueAuthor;
    const inputISBN = document.createElement("input");
    inputISBN.classList.add("form-control");
    inputISBN.setAttribute("type", "hidden");
    inputISBN.style.border = "none";
    inputISBN.value=''
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.innerHTML = "Save Book";
    form.append(inputTitle, inputAuthor, inputISBN, button);
    addBook.append(form);
    return addBook;
  }
}