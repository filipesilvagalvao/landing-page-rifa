//button x toggle
const mobile_btn = document.querySelector('#mobile_btn')
const i_mobile_btn = document.querySelector('#mobile_btn > i')
const mobile_menu = document.querySelector('#mobile_menu')

mobile_btn.addEventListener('click', ()=>{

    i_mobile_btn.classList.toggle('fa-bars')
    i_mobile_btn.classList.toggle('fa-x')
    mobile_menu.classList.toggle('hide')
})

//accordion
const accordions = document.querySelectorAll('.accordion')

accordions.forEach(accordion =>{
    accordion.addEventListener('click', (e)=>{
        e.stopPropagation()
        const body = accordion.querySelector('.accordion-body')
        body.classList.toggle('active-accordion')
    })
})

//animation appear awards

const award = document.querySelector('#award');
const gift = document.querySelectorAll('.gift');

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            gift.forEach((e, i) => {
                myObserver.unobserve(award);
                e.id = `run${i + 1}`; // Define IDs únicos para os elementos visíveis
            });
        } 
    });
    
});

myObserver.observe(award);

const testimonials = document.querySelector('#testimonials');
const winner = document.querySelectorAll('.winner');

const myObserver2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let i = 4
            winner.forEach((e) => {
                myObserver2.unobserve(testimonials);
                e.id = `run${i}`; // Define IDs únicos para os elementos visíveis
                i++
            });
        } 
    });
    
});

myObserver2.observe(testimonials);

//scroll suave
const a = document.querySelectorAll('header a[href^="#"')

a.forEach((link)=>{
    link.addEventListener('click', (e)=>{
        document.querySelectorAll('.nav-item').forEach(clas => clas.classList.remove('active'))
        e.preventDefault()
        const element = e.target
        const id = element.getAttribute('href')
        //const section = document.querySelector(id)
        window.scroll({
            top:document.querySelector(id).offsetTop,
            behavior: 'smooth'
        })
        e.target.parentElement.classList.add('active')
    })
})

