import '../styles/home.css'
let menuIcon = document.getElementById('menuIcon')
let smContainerSidebar = document.getElementById('sm-container-sidebar')
let isSlide = false

menuIcon.addEventListener('click', ()=>{
    if (!isSlide) {
        smContainerSidebar.style.left = 0
        isSlide = true
    }
    else {
        smContainerSidebar.style.left = '-209px'
        isSlide = false
    } 
})
