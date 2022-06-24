import { Book } from "./class/book.js"
import { AddBook } from "./class/add-book.js"
let arrayBooks = []

const container = document.querySelector(".container-lg")
const url=`https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/.json`


async function getBooks() {
    container.innerHTML = ""
    arrayBooks = []
  const response = await fetch(url)
  const data = await response.json()
    for (let key in data) {    
        data[key]['isbn'] = key
    arrayBooks = arrayBooks.concat(data[key]).sort((a,b)=>{
        return a.title.localeCompare(b.title)})
  }
  const book = new Book(arrayBooks)
  container.append(book.render())
    eventButtonAdd()
    eventButtonDelete()
}
getBooks()


async function post(url,data1){  
    try{
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(data1)          
        });
        const content = await response.json();
        getBooks() 
        return content;
    }
    catch(error){
        const alert = new Alert('Error: '+error.message,'red','#alert-container')
        alert.showAlert()
    }   
}

async function deleteBook(url1){
    try{
        const response = await fetch(url1,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
        });
        const content = await response.json();
        getBooks()
        return content;
    }
    catch(error){
        console.log(error)
    }
}

function eventButtonForm(){
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    const newBook = {
        title:e.target.elements[0].value,
        author:e.target.elements[1].value,
        isbn:""  
    }
     post(url,newBook)      
})
}

function eventButtonAdd(){
document.querySelector("#add-book").addEventListener("click",(e)=>{
    document.querySelector('.container-lg').innerHTML = ""
    const addBook = new AddBook(arrayBooks)
    document.querySelector('.container-lg').append(addBook.render())
    eventButtonForm()
});
}

function eventButtonDelete(){
    document.querySelectorAll("#delete-book").forEach(element => {
        element.addEventListener("click",(e)=>{
            const isbn = e.target.dataset.isbn
            deleteBook(`https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/${isbn}.json`)
           
        })
        
    })
}
