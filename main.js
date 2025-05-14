const forward = document.querySelector("#forward")
const back = document.querySelector("#back")
const imgWindow = document.querySelector(".img-window")


function changeClassForward(){
    const prev = document.querySelector(".prev")
    const active = document.querySelector(".active")
    const next = document.querySelector(".next")
    const notDisplay = document.querySelector(".not-display")

    next.classList.replace('next', 'active')
    active.classList.replace('active', 'prev')
    prev.classList.replace('prev', 'not-display')
    notDisplay.classList.replace('not-display', 'next') 
}

function changeClassBack(){
    const prev = document.querySelector(".prev")
    const active = document.querySelector(".active")
    const next = document.querySelector(".next")
    const notDisplay = document.querySelector(".not-display")

    active.classList.replace('active', 'next')
    prev.classList.replace('prev', 'active')
    next.classList.replace('next', 'not-display')
    notDisplay.classList.replace('not-display', 'prev') 
}

function sliderForward(){
    imgWindow.animate({ translate: "-100%" }, 1000).finished
        .then(changeClassForward)
}


function sliderBack(){
    imgWindow.animate({ translate: "100%" }, 1000).finished
        .then(changeClassBack)
}


forward.addEventListener("click", sliderForward)
back.addEventListener("click", sliderBack)
