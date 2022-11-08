$(function () {
    $('.H_AllCar').click(function() {
      $('.H_ModalMenu').toggle(1); 
      gsap.from('.H_CarMenu',{opacity:0,duration:1,x:-100,delay:0.5})
    });  
     $('.openclosemodal').click(function() {
      $('.H_ModalMenu').toggle(1); 
    });
  });

 
  $(function() {
    $('.H_ButtonContent').click(function() {
      $('.form_H_Modal').show(1); 
      gsap.from('.H_ResForm',{opacity:0,duration:1,x:-100,delay:0.5})
    });  
     $('.openclosemodal1').click(function() {
      $('.form_H_Modal').hide(1); 
    });
  });
gsap.from('.H_content0 h1',{scrollTrigger: ".H_content0",opacity:0,duration:2,x:"-50%",delay:0.5,ease:'power1'})
gsap.from('.H_content0 h2',{scrollTrigger: ".H_content0",opacity:0,duration:2,y:"-50%",delay:2.5})

$(function() {
  $('.H_Driver').click(function() {
    $('.form_H_Modal').show(1); 
    gsap.from('.H_ResForm',{opacity:0,duration:1,x:-100,delay:0.5})
  });  
   $('.openclosemodal1').click(function() {
    $('.form_H_Modal').hide(1); 
  });
})

//slide mc600LT
var couter=1;
setInterval(function(){
    document.getElementById('radio'+ couter).checked=true;
    couter++;
    if(couter>6){
        couter=1;
    }
},8000)   

//change
$(function(){
  $('.H_changeImage h2').click(function(){
    $('.H_changeImage h1').css("color","gray")
    $('.H_changeImage h1').css("border-bottom","none")
    $('.H_changeImage h2').css("color","black")
    $('.H_changeImage h2').css("border-bottom","2px solid")
    $('.green_H_car').css("display","block")
    gsap.from('.green_H_car',{opacity:0,duration:1,ease:'power0'})

});
})

$(function(){
  $('.H_changeImage h1').click(function(){
    $('.H_changeImage h2').css("color","gray")
    $('.H_changeImage h2').css("border-bottom","none")
    $('.H_changeImage h1').css("color","black")
    $('.H_changeImage h1').css("border-bottom","2px solid")
    $('.green_H_car').css("display","none")
    gsap.from('.meta_H_car',{opacity:0,duration:1,ease:'power0'})
});
})

gsap.from('.contentHeaderA',{opacity:0,duration:1,y:'100%',ease:'power0',delay:0.5})
gsap.from('.contentHeaderB',{scrollTrigger: "contentHeaderB p",opacity:0,duration:1,x:'100'})
gsap.from('.selectService img',{scrollTrigger: ".H_service img",opacity:0,duration:1,stagger:0.2,y:'170',ease:'back',delay:0.2})
gsap.from('.H_thongKe',{scrollTrigger: ".H_thongKe",opacity:0,duration:0.8,stagger:0.3,y:'170',ease:'back',delay:0.5})

gsap.from('.contenimageC',{scrollTrigger: ".contenimageC img",opacity:0,duration:2,ease:'power1',delay:0.3})
gsap.from('.contenimageD',{scrollTrigger: ".contenimageD ",opacity:0,duration:2,ease:'power1',delay:0.3})
gsap.from('.contenimageE',{scrollTrigger: ".contenimageE ",opacity:0,duration:2,ease:'power1',delay:0.3})
gsap.from('.imageG',{scrollTrigger: ".imageG ",opacity:0,duration:2,ease:'power0',delay:0.6})
gsap.from('.contenimageF img',{scrollTrigger: ".contenimageF img ",opacity:0,duration:2,ease:'power0',delay:0.3})

$(function() {
  $('#Test_Drive').click(function() {
    $('.form_H_Modal').show(1); 
    gsap.from('.H_ResForm',{opacity:0,duration:1,x:-100,delay:0.5})
  });  
   $('.openclosemodal1').click(function() {
    $('.form_H_Modal').hide(1); 
  });
})


//slide index 
var couter=1;
setInterval(function(){
    document.getElementById('radio'+ couter+'_H').checked=true;
    couter++;
    if(couter>4){
        couter=1;
    }
},6000)   

//local 
$(function() {
  $('#map1').click(function() {
    $('.modal_local').show(1); 
    gsap.from('.modal_local_img img',{opacity:0,duration:1,y:-100,delay:0.2})
  });  
   $('.fa-times').click(function() {
    $('.modal_local').hide(1); 
  });
});

$(function() {
  $('#map2').click(function() {
    $('.modal_local_1').show(1); 
    gsap.from('.modal_local_img img',{opacity:0,duration:1,y:-100,delay:0.2})
  });  
   $('.fa-times').click(function() {
    $('.modal_local_1').hide(1); 
  });
});

$(function() {
  $('#map3').click(function() {
    $('.modal_local_2').show(1); 
    gsap.from('.modal_local_img img',{opacity:0,duration:1,y:-100,delay:0.2})
  });  
   $('.fa-times').click(function() {
    $('.modal_local_2').hide(1); 
  });
});

