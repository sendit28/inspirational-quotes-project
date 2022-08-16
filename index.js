const button = document.getElementById("btn-new-quote")
const quote = document.getElementById("quote")

button.addEventListener("click", (event) =>{
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
    const container = document.getElementById("gratitude-container")
    container.innerHTML = ""
    
    const gratitude1 = event.target.messageOne.value
    const p1 = document.createElement("p")
    p1.innerText = gratitude1
    container.append(p1)  

    const gratitude2 = event.target.messageTwo.value
    const p2 = document.createElement("p")
    p2.innerText = gratitude2
    container.append(p2)  
   
    const gratitude3 = event.target.messageThree.value
    const p3 = document.createElement("p")
    p3.innerText = gratitude3
    container.append(p3)  
    
    form.reset()   
})   






