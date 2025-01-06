const mobile_btn = document.querySelector('#mobile_btn')
const i_mobile_btn = document.querySelector('#mobile_btn > i')
const mobile_menu = document.querySelector('#mobile_menu')

mobile_btn.addEventListener('click', ()=>{

    i_mobile_btn.classList.toggle('fa-bars')
    i_mobile_btn.classList.toggle('fa-x')
    mobile_menu.classList.toggle('hide')
})