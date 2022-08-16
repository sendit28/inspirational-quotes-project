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
    const container = document.getElementById("gratitude_container")
    container.innerHTML = ""
    // console.log(event.target)
    // // after submit, I want the text to display on the DOM
    // How do I get the text from this form
    // console.log(event.target.children[1])
   const gratitude1 = event.target.messageOne.value
   const p1 = document.createElement("p")
   p1.innerText = gratitude1
   
   container.append(p1)  //this is where text appears on DOM
   //Why is it happening multiple times?
   
   const gratitude2 = event.target.messageTwo.value
   const p2 = document.createElement("p")
   p2.innerText = gratitude2
   container.append(p2)  //this is where text appears on DOM

   const gratitude3 = event.target.messageThree.value
   const p3 = document.createElement("p")
   p3.innerText = gratitude3
   
   container.append(p3)  //this is where text appears on DOM
   form.reset()
   
})   






// fetch("https://imsea.herokuapp.com/api/1?q=sunset",{mode: 'cors'})
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch(error => console.log(error)) 