//DATA STRUCTURE

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const form = document.querySelector('form');
const open = document.querySelector('#openModal');
const close = document.querySelector('#closeModal');
const addBookBtn = document.querySelector('#addBookBtn');
const bookCount = document.getElementById('bookCount');
const formInput = document.getElementById('formInput');
var booksToRead = document.querySelector('#booksToRead');
var booksRead = document.querySelector('#booksRead');
const tableLabel = document.querySelector('#tableLabel');
const divRead = document.querySelector('.read-status');

  class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
  }
  let library = [];
  //functions  
  function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  library.push(book);
  createCard();
  }
  function validateForm (){
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read');
  if (title.value !== '' && author.value !== '' && pages.value !== '' && pages.value > 0) {
  if (read.checked) {
  addBookToLibrary(title.value, author.value, pages.value, true);
  sumCounter();
  } else {
  addBookToLibrary(title.value, author.value, pages.value, false);
  sumCounter();
  }form.reset();
  }}
    function createCard(){
    var table = document.querySelector('#tableLabel');
    table.textContent = '';
    //loop library
    for (let i = 0 ;  i < library.length ; i += 1)  {
    var tableLabel = document.createElement('tr');
    table.appendChild(tableLabel);
    //TITLE
    var divTitle = document.createElement('td');
    divTitle.textContent = library[i].title;
    tableLabel.appendChild(divTitle);
    //AUTHOR
    var divAuthor = document.createElement('td');
    divAuthor.textContent = library[i].author;
    tableLabel.appendChild(divAuthor);
    //PAGES
    var divPages = document.createElement('td');
    divPages.textContent = library[i].pages;
    tableLabel.appendChild(divPages);
    //READ
    var divRead = document.createElement('td');
    var icon = document.createElement('i');
    if(library[i].read === false ){
     icon.classList.add('fas', 'fa-times')
    }else {
      icon.classList.add('fas', 'fa-user-check')
    }
    tableLabel.appendChild(divRead);
    divRead.appendChild(icon);
    
    var btn = document.createElement('button')
    btn.setAttribute('type', 'button');
    btn.textContent = 'Delete this book';
    btn.classList.add('delBtn')
    tableLabel.appendChild(divRead);
     divRead.appendChild(btn);
    }
}  
  function handleKeyboardInput(e) {
  if (e.key === 'Escape')
    openModal();
  }
  function openModal () {
  form.classList.toggle('active');
  open.classList.toggle('hide');
  close.classList.toggle('closeModal');  
  }  
  function sumCounter(){  
  if(!library.length==0){
    bookCount.textContent = `Books = ${library.length}`;
  }}
  function resetForm(){
  bookCount.textContent = `Books = `;
  library = [];
  tableLabel.textContent = '';
  console.log(library.length);
  }
 
  function clicks(){
    document.addEventListener('click',(event) => {const { target } = event;const tr = target.parentNode.parentNode.rowIndex - 1; if (target.classList.contains('addBookBtn')){validateForm(event);}else if(target.classList.contains('resetBtn')){resetForm();}else if(target.classList.contains('delBtn')){library.splice(tr,1);bookCount.textContent = `Books = ${library.length}`}createCard();})
  }
  
  //functions calls
  open.onclick = openModal
  close.onclick = openModal
  window.onkeydown = handleKeyboardInput
  createCard();
  clicks();
  