const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', () => {
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        const triggerPoint = window.innerHeight / 5 * 3.2

        if(triggerPoint > boxTop) {
            box.classList.add('show')
        }

        else {
            box.classList.remove('show')
        }
    })
})