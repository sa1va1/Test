const open = document.querySelector("#open")
const modal = document.querySelector("#modal")
const close = document.querySelector(".bi")

modal.style.display = "none"

open.addEventListener("click", ()=>{
    modal.style.display = "block"
    open.style.display = "none"
})

close.addEventListener("click", ()=>{
    modal.style.display = "none"
    open.style.display = "block"
})
