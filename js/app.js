var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.list-container');
var containerMenu = document.querySelector('.menu');
var activador = true;

//menu de navegacion
 btnMenu.addEventListener('click', function () {
    
    document.querySelector('.btn-menu i').classList.toggle('fa-times');
    if(activador){
        
        menu.style.left = "0";
        menu.style.transition ="0.5s";
        
        activador= false;
        
     }else{
         activador = false;
         
         menu.style.left = "-100%";
         menu.style.transition = "0.5s";
         
         activador = true;
    }
});

//intercalar clases active

var enlaces = document.querySelectorAll('.lists li a');
enlaces.forEach( function(element) {
   element.addEventListener('click', function (event) {
     
       enlaces.forEach( function (link){
    link.classList.remove('activo');      
       });
       event.target.classList.add('activo');
   });
   
});

//efectos scroll
var prevScrollPos = window.pageYOffset;
var goTop = document.querySelector('.go-top');
window.onscroll = function () {
    var currenScrollPos = window.pageYOffset;
   
    //mostrar y ocultar
    if(prevScrollPos > currenScrollPos){
      containerMenu.style.top = "0";
      containerMenu.style.transition = "0.5s";
  }else{
      containerMenu.style.top = "-60px";
      containerMenu.style.transition = "0.5s";
      
    }
    prevScrollPos = currenScrollPos;
    
    //mostrar y ocultar scroll estilos
    
    var arriba = window.pageYOffset;
    
    if (arriba <= 600) {
        containerMenu.style.borderBottom = "none";
    
    goTop.style.right = "-100%";
    
    }else{
        containerMenu.style.borderBottom = "2px solid #eb4559";
        
        goTop.style.right = "0";
        goTop.style.transition = "0.5s";
    }
    
    }
    goTop.addEventListener('click', function () {
       
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    
    var verAbajo = document.querySelector('#abajo');
    
    verAbajo.addEventListener('click', function (){
        
       document.body.scrollTop = 600;
        document.documentElement.scrollTop = 600;
    });

