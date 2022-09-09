let title = document.getElementById("noteTitle") 
let Notes = document.getElementById("notes") 
let error =  document.getElementById("errorParagraph")
let bookDiv = document.querySelector('.bookDiv')

    //  else{window.location.href = '/'}
    // window.location.assign('/')

//     const userInfo = {
//         "name": "Chibuzor",
//         "age": 20,
//         "sex": "male"
//      }

//  localStorage.setItem("user", JSON.stringify(userInfo))

//  const userData = JSON.parse(localStorage.getItem("user"))
// console.log(userData.name)

function createNote(){
    let bookArray = JSON.parse(localStorage.getItem('book')) || [];
    if(title.value === "" || Notes.value === ""){
        error.textContent = "Please fill in all boxes"
    }  else {
        let bookDetails = {
            title: title.value.trim(),
            body: Notes.value.trim()
        }
        bookArray.push(bookDetails)
        localStorage.setItem("book", JSON.stringify(bookArray))

        window.location.assign('/')
    }
    if(title.value && Notes.value === ""){
        error.textContent = "fill in the notes"
    } 
    if (title.value === "" && Notes.value ){
        error.textContent = "fill in the title"
    }

}

function readNote(){
    let bookArray = JSON.parse(localStorage.getItem('book'))
    if(!bookArray){
        bookDiv.innerHTML = `
            <p>
                No books to display
            </p>
            `
        return
    }else{
        bookArray.forEach(book => {
            bookDiv.innerHTML += `
            <div>
                <h2>Title: ${book.title}</h2>
                <p>Body: ${book.body} </p>
            </div>
                `
        })
    }
}

readNote()

// https://fullstackheroes.com/tutorials/javascript/local-storage/