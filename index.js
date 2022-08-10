// console.log("hello world")
// https://github.com/lukePeavey/quotable
// fetch("https://api.quotable.io/random?tags=inspirational")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch(error => console.log(error)) 

const button = document.getElementById("btn-new-quote")
const quote = document.getElementById("quote")
// console.log(button)
button.addEventListener("click", (event) =>{
    // console.log("clicked")
    // console.log(quote)
    getNextQuote()
})


function getNextQuote() {
    fetch("https://api.quotable.io/random?tags=inspirational")
        .then((response) => response.json())
        .then((data) => {
            quote.innerHTML = data.content
        })
        .catch(error => console.log(error))
}

const form = document.getElementById("gratitude-form")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    // console.log(event.target)
    // after submit, I want the text to display on the DOM
    // How do I get the text from this form
    console.log(event.target.children[1])
    event.target.children[1].value = "x"

})    






// fetch("https://imsea.herokuapp.com/api/1?q=sunset",{mode: 'cors'})
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch(error => console.log(error)) 