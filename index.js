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
    event.preventDefault()
    // console.log("clicked")
    
    // console.log(quote)
    getNextQuote()
})

async function getNextQuote() {
    const response = await fetch("https://api.quotable.io/random?tags=inspirational")
    const data = await response.json();
    
        console.log(data)
        if (response.ok) {
            quote.innerHTML = data.content
        } else {
            quote.innerHTML = "An error occurred"
            console.log(data)
        }        
}

