const popup = document.querySelector(".temporary_update")

document.addEventListener("DOMContentLoaded", () => {

    popup.style.display = "flex";

    document.body.style.overflow = "hidden"
})

const back_top = document.querySelector("#back_top_btn")
const back_top_fr = document.querySelector("#back_top_btn_fr");

window.addEventListener("scroll", () =>{

    if (window.scrollY > 2000){
        back_top.classList.add('show')
    }

    else{
        back_top.classList.remove('show')
    }
})

window.addEventListener("scroll", () => {

    if (window.scrollY > 2000){
        back_top_fr.classList.add('visible')
    }

    else{
        back_top_fr.classList.remove('visible')
    }
})

const language = document.getElementById('lang_select');

language.addEventListener('change', () => {
    
    switch (language.value){
        case 'eng':
            window.location.href = '../english/home.html'
            break;
        
        case 'fre':
            window.location.href = '../french/fr_home.html'
            break;
        
        default:
            
            break;
    }
})


const currentpage = window.location.pathname.split("/").pop();
let currentValue = "";

switch (currentpage){
    case 'home.html':
        currentValue = "eng";
        break;

    case 'fr_home.html':
        currentValue = "fre";
        break;

    default:
        break;
}


for (let option of language.options){
    if (option.value === currentValue){
        option.selected = true;
        break;
    }
}


back_top.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    window.open('../english/info.html', '_blank')
})

