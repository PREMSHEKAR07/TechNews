// for responsive menu
const icons = document.querySelector('.icons');

const menu_icon = document.querySelector(".menu_icon_bars");
const ul = document.querySelector(".menu_items");
const close_button = document.querySelector('.menu_icon_cross');

function menuDisplay(){
    ul.classList.toggle('display');
    ul.classList.toggle("menu_flex_display");
    
    menu_icon.classList.toggle('hide')
    close_button.classList.toggle('display')
    
}

icons.addEventListener("click",menuDisplay);



const scrollToTop = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    console.log(scrollY)
    if(scrollY > 240){
        scrollToTop.style.display = 'block';
    }
    else if(scrollY > 400){
        window.scrollTo({top:0})
    }
    else{
        scrollToTop.style.display = 'none';
    }
});

scrollToTop.addEventListener('click', () =>{
    window.scrollTo({top:0});
});