const fixednav = document.getElementById("fixednav")

let throttleTimer = false
const throttle = (callback, time) => {
  if (throttleTimer) return
  throttleTimer = true
  setTimeout(() => {
    callback()
    throttleTimer = false
  }, time)
}

const showHideNav = () => {
  let scrollY = document.documentElement.scrollTop || document.body.scrollTop
  if (scrollY > 0) {
    fixednav.classList.add("fixednavbar__shownav")
  } else {
    fixednav.classList.remove("fixednavbar__shownav")
  }
}

// show the fixed navbar when page start scroll
window.addEventListener("scroll", () => {
  throttle(showHideNav, 200)
})
