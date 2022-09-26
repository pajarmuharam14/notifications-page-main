
const btn = document.querySelector('#btn')
const unRead = document.querySelector('.notif-message-unread')
const number = document.querySelector('#number-notif')
const dot = document.querySelectorAll('.dot')
btn.addEventListener('click', () => {
    for (let element of unRead.children) {
        element.style.backgroundColor = 'hsl(0, 0%, 100%)'
    }

    for (let i = 0; i < dot.length; i++){
        dot[i].classList.remove('dot')
    }
    number.innerHTML = 0
})