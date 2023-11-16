const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle")
const progress = document.getElementById("progress")
// console.log(circles)
let state = 1;

next.addEventListener("click", () => {
  if(state < 4){
    state++;
  }
  update();
  
});
prev.addEventListener("click", () => {
  if(state > 1){state--;}
  update();
});


const update = () =>{
    circles.forEach(circle => circle.classList.remove("active"))
    circles.forEach( (circle, id) => {
        if(id < state){
            circle.classList.add("active")
        }
    })
    progress.style.width = `${((state - 1)/3*100)}%`

    switch(state){
        case 1:
            prev.disabled = true;
            break;
        case 4:
            next.disabled = true;
            break;
        default:
            prev.disabled = false;
            next.disabled = false;
    }
}