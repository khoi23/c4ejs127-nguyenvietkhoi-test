const body = document.querySelector("body");
const input = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");
const btn = document.getElementById('btn')

setColor();
input.addEventListener("input", setColor);

function setColor() {
	body.style.backgroundColor = input.value;
	colorCode.innerHTML = input.value;
}

colorCode.addEventListener('click', copy)
function copy() {
    navigator.clipboard.writeText(colorCode.innerHTML);
}
// colorCode.addEventListener('click', ()=> {
//     navigator.clipboard.writeText(colorCode.innerHTML)
// })


function ramdomColor () {
    let r = parseInt( Math.random() * 255)
    let g = parseInt( Math.random() * 255)
    let b = parseInt( Math.random() * 255)
    let r1 = parseInt( Math.random() * 255)
    let g1 = parseInt( Math.random() * 255)
    let b1 = parseInt( Math.random() * 255)
    // let per = parseInt (Math.random() * 100)
    // return `rgb(${r}, ${g}, ${b})`
    return `linear-gradient(rgb(${r}, ${g}, ${b}),rgb(${r1}, ${g1}, ${b1}))`
}
// linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);
btn.addEventListener('click', () =>{
    let ramdom = ramdomColor();
    body.style.background = ramdom;
}) 