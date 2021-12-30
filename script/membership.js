const infoElements = document.getElementsByClassName("info")
const cards = document.getElementsByClassName("cards__row-card")
const roaster = document.getElementById("roaster")
const cafeOwner = document.getElementById("cafeowner")
const supplier = document.getElementById("supplier")

let currentCard = null
//check current status
const checkStatus = () => {
  console.log(currentCard)
  if (currentCard === "roaster") {
    removeStatus()
    roaster.classList.add("show")
  } else if (currentCard === "cafeOwner") {
    removeStatus()
    cafeOwner.classList.add("show")
  } else if (currentCard === "supplier") {
    removeStatus()
    supplier.classList.add("show")
  }
}

// hide all card details
const removeStatus = () => {
  Array.from(infoElements).forEach((el) => {
    el.classList.remove("show")
  })
}

// function trigered when click on roaster card
const clickRoaster = () => {
  currentCard = "roaster"
  checkStatus()
}

// function trigered when click on cafe owner card
const clickCafeOwner = () => {
  currentCard = "cafeOwner"
  checkStatus()
}

// function trigered when click on supplier card
const clickSupplier = () => {
  currentCard = "supplier"
  checkStatus()
}

let clickfuncs = [clickRoaster, clickCafeOwner, clickSupplier]

Array.from(cards).forEach((el, i) => {
  el.addEventListener("click", clickfuncs[i])
})
