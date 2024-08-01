const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
console.log(buttons);
buttons.forEach(function(button){
//The “click” function is used here. Colors have been linked to the webpage using ‘target’.
    button.addEventListener("click", function(e){
        console.log(e.target);
//When you select that color, that color will appear in the webpage.
        if (e.target.id === "grey"){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "white"){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "red"){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "green"){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "pink"){
            body.style.backgroundColor = e.target.id;
        }
    })
})