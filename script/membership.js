const infoElements = document.getElementsByClassName("info")
const cards = document.getElementsByClassName("cards__row-card")
const roaster = document.getElementById("roaster")
const cafeOwner = document.getElementById("cafeowner")
const supplier = document.getElementById("supplier")
const barista = document.getElementById("barista")
const coffeeEnthusiast = document.getElementById("coffeeEnthusiast")
const inResidence = document.getElementById("inResidence")

const content = document.getElementById("content")
const offsetBottom = content.getBoundingClientRect().bottom

let currentCard = null

//check current status
const checkStatus = () => {
  if (currentCard === "roaster") {
    removeStatus()
    roaster.classList.add("show")
  } else if (currentCard === "cafeOwner") {
    removeStatus()
    cafeOwner.classList.add("show")
  } else if (currentCard === "supplier") {
    removeStatus()
    supplier.classList.add("show")
  } else if (currentCard === "barista") {
    removeStatus()
    barista.classList.add("show")
  } else if (currentCard === "coffeeEnthusiast") {
    removeStatus()
    coffeeEnthusiast.classList.add("show")
  } else if (currentCard === "inResidence") {
    removeStatus()
    inResidence.classList.add("show")
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

// function trigered when click on barista card
const clickBarista = () => {
  currentCard = "barista"
  checkStatus()
}

// function trigered when click on coffeeEnthusiast card
const clickCoffeeEnthusiast = () => {
  currentCard = "coffeeEnthusiast"
  checkStatus()
}

// function trigered when click on inResidence card
const clickInResidence = () => {
  currentCard = "inResidence"
  checkStatus()
}

let clickfuncs = [
  clickRoaster,
  clickCafeOwner,
  clickSupplier,
  clickBarista,
  clickCoffeeEnthusiast,
  clickInResidence,
]

Array.from(cards).forEach((el, i) => {
  el.addEventListener("click", () => {
    clickfuncs[i]()
    window.scrollTo({
      top: offsetBottom - 100,
      behavior: "smooth",
    })
  })
})
