export class Book {
  constructor(books) {
    this.books = books || [];
  }
  render() {
    const container = document.createElement("div");
    const booksList = document.createElement("table");
    booksList.classList.add("table");
    booksList.classList.add("table-striped");
    const thead = document.createElement("thead");
    const trThead = document.createElement("tr");
    const thTitle = document.createElement("th");
    const thAuthor = document.createElement("th");
    const thISBN = document.createElement("th");
    const thDelete = document.createElement("th");
    const thEdit = document.createElement("th");
    thTitle.innerHTML = "Title";
    thAuthor.innerHTML = "Author";
    thISBN.innerHTML = "ISBN";
    thISBN.classList.add("d-isbn");
    thDelete.innerHTML = "Delete";
    thEdit.innerHTML = "Edit";
    trThead.append(thTitle, thAuthor, thISBN, thDelete, thEdit);
    thead.append(trThead);
    const tbody = document.createElement("tbody")
    for (let i = 0; i < this.books.length; i++) {
      const trTbody = document.createElement("tr")
      var tdTitle = document.createElement("td")
      tdTitle.innerHTML = `${this.books[i].title}`
      var tdAuthor = document.createElement("td")
      tdAuthor.innerHTML = `${this.books[i].author}`
      var tdISBN = document.createElement("td")
      tdISBN.innerHTML = `${this.books[i].isbn}`
      tdISBN.classList.add("isbn")
      var tdDelete = document.createElement("td")
      tdDelete.innerHTML = `<button class="btn btn-danger" id="delete-book" data-isbn="${this.books[i].isbn}">🗑️</button>`
      var tdEdit = document.createElement("td")
      tdEdit.innerHTML = `<button class="btn btn-warning" id="edit-book" data-isbn="${this.books[i].isbn}">🖊️</button>`
      trTbody.append(tdTitle, tdAuthor, tdISBN, tdDelete, tdEdit)
      tbody.append(trTbody)
      booksList.append(thead, tbody)
      container.append(booksList)
    }
    const button=document.createElement("button")
    button.classList.add("btn")
    button.classList.add("btn-primary")
    button.id="add-book"
    button.innerText="Add Book"
    container.append(button)
    return container
  }
}
