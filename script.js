let jokebtn = document.getElementById("jokebtn")
let jokeel = document.getElementById("joke")

function genaratejoke(){
    fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json ",
      },
    })
    .then((res)=>{
       return res.json()
    })
    .then((data) =>{
        jokeel.innerText = data.joke
    })
    .catch((err)=>{
        console.log(err)
    })
    }

    genaratejoke();

jokebtn.addEventListener("click",genaratejoke )