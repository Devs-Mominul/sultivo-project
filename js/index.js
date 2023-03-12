$(".banner-slide").slick({

  autoplay:true,
  autoplaySpedd:100,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,

})
new VenoBox({
  selector: '.my-video-links',
});
$(".text-slide").slick({

  autoplay:true,
  autoplaySpedd:100,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:".prev-icon",
  nextArrow:".next-icon"
 

})
new VenoBox({
  selector: '.my-video-links1',
  numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});


var acc=document.getElementsByClassName("accordians");
var i;
for(i=0;i <acc.length;i++){
  acc[i].addEventListener("click",function(){
    this.classList.toggle("active");
    var panel=this.nextElementSibling;
    if(panel.style.display==="block"){
      panel.style.display="none";
    }else{
      panel.style.display="block";

    }
  })
}
$(document).ready(function(){
  $(".preloader").delay(500).fadeOut(500)
})

$(document).ready(function(){
  $(".back2-top").click(function(){
    $("html , body").animate({
      scrollTop:0,

    },1000)
  })
})




$(window).scroll(function(){
  var minar=$(this).scrollTop();
  if(minar >20){
    $(".back2-top").fadeIn()
  
 
  }else{
   

      $(".back2-top").fadeOut()

  }
})
































































































































































































