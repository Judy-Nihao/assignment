const showMoreBtn = document.querySelector('.show-more');
const longText = document.querySelector('.long-text');

showMoreBtn.addEventListener('click', ()=>{
    longText.classList.toggle('active');
})

longText.addEventListener('click', ()=>{
    longText.classList.toggle('active');
})


ScrollReveal().reveal('.item', {duration: 1250, delay: 150, distance: '50px', scale: 0.85});
