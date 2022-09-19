const containerDiv = document.querySelector(".container");
const generateBtn = document.querySelector(".generate-btn");
const input = document.querySelector("#input-el");

generateGrid();

generateBtn.addEventListener("click", () => {

    if (input.value < 16 || input.value > 100) {
        alert("Please enter a number between 16 - 100!");
    }

    removeAllChildrenNodes(containerDiv);
    generateGrid();

})

function removeAllChildrenNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateGrid() {

    containerDiv.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${input.value}, 1fr)`;

    for (let i = 0; i < (input.value * input.value); i++) {
        let singleDiv = document.createElement("div")
        singleDiv.classList.add("single-div");
        containerDiv.appendChild(singleDiv);

        singleDiv.addEventListener("click", () => {
            singleDiv.classList.add("single-div-color");
        })
    };

}