
// TODO GET THE TOGGLE BUTTON
// TODO ON CLICK OPEN SIDE BAR
// TODO SHOW CLOSE BUTTON
// TODO ON CLICK ON SHOW BUTTON CLOSE THE SIDE BAR

const openButton = document.getElementById("open-mobile-menu"),
    closeButton = document.getElementById("close-mobile-menu"),
    navList = document.getElementById("nav__list")

openButton.addEventListener("click", () => {
    closeButton.style.display = "block"
    openButton.style.display = "none"
    navList.style.display = "block"
    
})

closeButton.addEventListener("click", () => {
    closeButton.style.display = "none"
    openButton.style.display = "block"
    navList.style.display = "none"
})