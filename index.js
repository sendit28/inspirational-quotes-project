console.log("hello world")

fetch("https://api.quotable.io/random?tags=inspirational")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(error => console.log(error)) 
