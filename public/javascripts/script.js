let menu = document.querySelector('#menu-btn');
let mnvbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
    
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
    
}