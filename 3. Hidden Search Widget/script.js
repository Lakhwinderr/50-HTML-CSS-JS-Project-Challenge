const btn = document.getElementsByTagName('button')
const search = document.querySelector(".search-container")
const input = document.querySelector('.search')

btn[0].addEventListener("click", () => {
    search.classList.toggle('active')
})