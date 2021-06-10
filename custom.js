const plane = document.querySelectorAll('.plane')
plane.forEach((plane)=>{
    plane.addEventListener('click', () =>{
        removeActiveClasses()
        plane.classList.add("active")
    })
})

function removeActiveClasses() {
    plane.forEach(plane =>{
        plane.classList.remove('active')
    })
} 