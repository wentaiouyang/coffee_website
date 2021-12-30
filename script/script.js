const fixedNav = document.getElementById("fixednav")
const readMore = document.getElementById("readmore")
const desGroup = document.getElementById("desgroup")

let showDesGroup = false

// throttle function
let throttleTimer = false
const throttle = (callback, time) => {
  if (throttleTimer) return
  throttleTimer = true
  setTimeout(() => {
    callback()
    throttleTimer = false
  }, time)
}

// function to show/hide navbar
const showHideNav = () => {
  let scrollY = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollY > 0) {
    fixedNav.classList.add("fixednavbar__shownav")
  } else {
    fixedNav.classList.remove("fixednavbar__shownav")
  }
}

// show the fixed navbar when page start scroll
window.addEventListener("scroll", () => {
  throttle(showHideNav, 200)
})

readMore.addEventListener("click", () => {
  if (!showDesGroup) {
    desGroup.classList.add("membershipintro__content-des-group-show")
    showDesGroup = !showDesGroup
  } else {
    desGroup.classList.remove("membershipintro__content-des-group-show")
    showDesGroup = !showDesGroup
  }
})
