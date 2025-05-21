const popup = document.querySelector(".temporary_update")

document.addEventListener("DOMContentLoaded", () => {

    popup.style.display = "flex";

    document.body.style.overflow = "hidden"
})

const back_top = document.querySelector("#back_top_btn")

window.addEventListener("scroll", () =>{

    if (window.scrollY > 2000){
        back_top.classList.add('show')
    }

    else{
        back_top.classList.remove('show')
    }
})

back_top.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    window.open('info.html', '_blank')
})