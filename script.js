const myLibrary = []
let block = document.getElementById("books")
block.style.textAlign = "center"
block.style.padding = "30px"



function Book(title,author,pages,didRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.didRead = didRead
}

function addBook() {
    let bookName = document.getElementById("bookTitle");
    let bookPages = document.getElementById("pages");
    let bookAuthor = document.getElementById("author");
    let didRead = document.getElementById("didRead");

    let bookNameValue = bookName.value;
    let bookPagesValue = bookPages.value;
    let bookAuthorValue = bookAuthor.value;

    if (bookNameValue === '' || bookPagesValue === '' || bookAuthorValue === '') {
        alert("Please fill in all the fields before adding a book.");
        return; 
    }

    let did = didRead.checked ? "Yes" : "No";

    let book = new Book(bookNameValue, bookAuthorValue, bookPagesValue, did);
    myLibrary.push(book);

    let bookDetailsDiv = document.createElement("div");
    bookDetailsDiv.className = "book-details";

    let bookNameElement = document.createElement("p");
    let bookAuthorElement = document.createElement("p");
    let bookPagesElement = document.createElement("p");
    let didReadElement = document.createElement("p");

    bookNameElement.textContent = `Title: ${bookNameValue}`;
    bookAuthorElement.textContent = `Author: ${bookAuthorValue}`;
    bookPagesElement.textContent = `Pages: ${bookPagesValue}`;
    didReadElement.textContent = `Did Read: ${did}`;

    bookDetailsDiv.appendChild(bookNameElement);
    bookDetailsDiv.appendChild(bookAuthorElement);
    bookDetailsDiv.appendChild(bookPagesElement);
    bookDetailsDiv.appendChild(didReadElement);

    let booksAddedDiv = document.querySelector(".books-added");
    booksAddedDiv.appendChild(bookDetailsDiv);

    bookName.value = '';
    bookPages.value = '';
    bookAuthor.value = '';
    didRead.checked = false;
}


function removeBook(){
    if(myLibrary.length === 0)
    {
        alert("No books to be removed")
    }
    else{
        myLibrary.pop();
        let booksAddedDiv = document.querySelector(".books-added");
        booksAddedDiv.removeChild(booksAddedDiv.lastChild);   
    }

}