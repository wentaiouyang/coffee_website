const burgerBtn = document.getElementById("burgerbtn")
const mobileMenu = document.getElementById("mobilemenu")
const main = document.getElementById("main")
const closeBtn = document.getElementById("close")

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("mobilemenu__show")
})

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("mobilemenu__show")
})
