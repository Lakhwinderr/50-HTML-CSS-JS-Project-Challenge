const percentage = document.querySelector("h1");
const bg = document.querySelector(".bg")
let load = 0;

const blurring = () => {
  load++;
  if (load > 99) {
    clearInterval(int);
  }

  percentage.innerText = `${load}%`;

  //blur image to zero
  percentage.style.opacity = load / 100;
  const num = Math.floor(load/100 * 70);
  bg.style.filter = `blur(${70 - num}px)`
  
};
let int = setInterval(blurring, 30);
