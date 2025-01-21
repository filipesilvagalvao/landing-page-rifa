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

const award = document.querySelector('#grid-awards');
const gift = document.querySelectorAll('.gift');

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let count = 0;

            const interval = setInterval(() => {
                gift[count].id = 'run1'
                gift[count].style.opacity = '1'
                count++;
                console.log(`Execução número: ${count}`);

                if (count === 3) {
                    clearInterval(interval); // Para o intervalo após 3 execuções
                }
            }, 300)

        } 
    });
    
});

myObserver.observe(award);

const testimonials = document.querySelector('#testimonials');
const winner = document.querySelectorAll('.winner');

const myObserver2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            /*let i = 4
            winner.forEach((e) => {
                e.id = `run${i}`; // Define IDs únicos para os elementos visíveis
                i++
            });*/
            let count = 0;

            const interval = setInterval(() => {
                winner[count].classList.add('runfeedbacks') 
                winner[count].style.opacity = '1'
                count++;
                console.log(`Execução número: ${count}`);

                if (count === 15) {
                    clearInterval(interval); // Para o intervalo após 15 execuções
                }
            }, 200); // 1000 ms = 1 segundo

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

//button ontop
jQuery(document).ready(function () {

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('a[href="#top"]').fadeIn();
        } else {
            jQuery('a[href="#top"]').fadeOut();
        }
    });

    jQuery('a[href="#top"]').click(function () {
        jQuery('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

});	

//compartilhar função
function compartilhar(plataforma) {
    const url = encodeURIComponent(window.location.href); // URL da página atual
    const texto = encodeURIComponent("Confira este conteúdo incrível!"); // Texto a ser compartilhado

    let linkCompartilhamento = "";

    switch (plataforma) {
        case 'facebook':
            linkCompartilhamento = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'whatsapp':
            linkCompartilhamento = `https://api.whatsapp.com/send?text=${texto} ${url}`;
            break;
        case 'instagram':
            alert("O Instagram não possui um link direto para compartilhamento como o Facebook e o WhatsApp. Por favor, use o app para compartilhar.");
            return; // Não abrir link
        default:
            alert("Plataforma não suportada!");
            return;
    }

    // Abre o link em uma nova aba
    window.open(linkCompartilhamento, '_blank');
}

