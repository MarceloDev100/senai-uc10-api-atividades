let categoriesEl = document.querySelector('.categories')

let toTopButton = document.getElementById('to-top')

categoriesEl.addEventListener('mouseover', function (e) {
    if ("IMG" == e.srcElement.tagName) {
        e.srcElement.className = "shadow"
    }
})

categoriesEl.addEventListener('mouseout', function (e) {
    if ("IMG" == e.srcElement.tagName) {
        e.srcElement.classList.remove("shadow")
    }
})

