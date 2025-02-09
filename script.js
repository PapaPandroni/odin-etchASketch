const CONTAINER = document.querySelector(".container")

for (let i = 0; i < 16*16; i++){
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    CONTAINER.appendChild(pixel);
}

const grid = document.querySelectorAll(".pixel");

grid.forEach((square) =>{
    square.addEventListener("mouseenter", ()=>{
        square.style.backgroundColor = "grey";
    })
})