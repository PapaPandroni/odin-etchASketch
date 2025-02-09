const CONTAINER = document.querySelector(".container")
let pixelSize = 16;

generateGrid(pixelSize);

function generateGrid (pixelSize) { 
    CONTAINER.innerHTML= "";
    for (let i = 0; i < pixelSize*pixelSize; i++){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = `${960 / pixelSize}px`;
        pixel.style.height = `${960 / pixelSize}px`;

        pixel.addEventListener("mouseenter", ()=>{
            pixel.style.backgroundColor = "grey";
        })
        pixel.addEventListener("mouseleave", ()=>{
            pixel.style.backgroundColor = "";
        })

        CONTAINER.appendChild(pixel);
    }
}

let btn = document.querySelector("button")

btn.addEventListener("click", ()=>{
    pixelSize = parseInt(prompt("What size of the pixels?"));
    generateGrid(pixelSize);
})

