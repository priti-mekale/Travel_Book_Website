let menu = document.querySelector('#menu-btn');
let Navbar =document.querySelector('.header .Navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    Navbar.classList.toggle('active');
    
} ;

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    Navbar.classList.remove('active');
    
}  


    var swiper = new Swiper(".home-slider", {
        loop:true,
        navigation:{
            nextE1: "swiper-button-next",
            prevE1:" swiper-button-prev",
        },
    });


    var swiper = new Swiper(".reviews-slider", {
        loop:true,
        spaceBetween:20,
        autoHeight:true,
        grabCursor:true,
        breakpoints:{
            640:{
                slidesPerView:1,
               
            },
            768:{
                slidesPerView:2,
                
            },
            1024:{
                slidesPerView:3,
            },
        },
    });

    let loadMoreBtn = document.querySelector('.packages .load-more .btn');
    let currentItem=3;
    loadMoreBtn.onclick = ( ) =>{
        let boxes = [...document.querySelectorAll('.packages .box-container .box')];
        for(var i = currentItem;i <currentItem +3;i++){
            boxes[i].Style.display = 'inline-block';
        };
        currentItem += 3;
        if(currentItem >= boxes.length){
            loadMoreBtn.Style.display = 'none';
        }
    }
