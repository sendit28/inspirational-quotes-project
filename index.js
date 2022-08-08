// console.log("hello world")

// fetch("https://api.quotable.io/random?tags=inspirational")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch(error => console.log(error)) 

const button = document.getElementById("btn-new-quote")
console.log(button)
button.addEventListener("click", (event) =>{
    event.preventDefault()
    console.log("clicked")
    const quote = document.getElementById("quote")
    console.log(quote)
    quote.innerHTML = "X"
})
