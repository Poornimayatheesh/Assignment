let next = document.querySelector('#next')
let prev = document.querySelector('#prev')
let slide = document.querySelector('.image-container')
next.addEventListener('click', () =>{
    let items = document.querySelectorAll('.item')
    for (let i = 0; i < items.length; i++) {
        if (i === 0) {
            slide.appendChild(items[i]); 
        }
    }
})

prev.addEventListener('click', () =>{
    let items = document.querySelectorAll('.item')
    for (let i = items.length - 1; i >= 0; i--) {
        if (i === items.length - 1) {
            slide.prepend(items[items.length - 1]); 
        } 
    }
})