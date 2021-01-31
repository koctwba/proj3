$(function(){
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows : false,
        dots : false
      });
      var sta = 1;
      $('.mo_nav_btn').click(function(){
        if( sta == 1) {
          $(this).addClass('close')
          $('.mo_nav').fadeIn();
          sta = 2; 
       }else {
         $(this).removeClass('close');
         $('.mo_nav').fadeOut();
         sta = 1; 
       }
      })
     $('#sec7 img').hover(function(){
       $('#sec7 p').css({'color':'#8DD3D3'})
       $('#sec7 p').css({'border-color':'#8DD3D3'})
       $('#sec7 span').css({'color':'#fff'})
     },function(){
      $('#sec7 p').css({'color':'#fff'})
      $('#sec7 span').css({'color':'#cecece'})
     }) 
     $('#sec9 .notice img').hover(function(){
       $('#sec9 .notice span').css({'color':'#8DD3D3'});
       $('#sec9 .notice p').css({'color':'#fff'});
     },function(){
      $(' #sec9 .notice span').css({'color':'#F38486'});
      $('#sec9 .notice p').css({'color':'#cecece'});
     })
     /*$('#sec9 .newsletter_img img').hover(function(){
       $(' #sec9 .newsletter .newsletter_img span').css({'color':'#F38486'});
       $(' #sec9 .newsletter .newsletter_img p').css({'color':'#fff'});
     },function(){
      $(' #sec9 .newsletter .newsletter_img span').css({'color':'#F38486'});
      $(' #sec9 .newsletter .newsletter_img p').css({'color':'#fff'});
     })*/
     $('.slide-image').hover(function(){
       $('.slide-title p').css({'color':'#F38486'});
     },function(){
      $('.slide-title p').css({'color':'#fff'});
     })
     
     $('.sec_img p').each(function(){ 
      if($(window).width() < 927){ 
        var img = $(this).find('img');
        var img_pc = img.attr('src'); 
        var img_mo = img_pc.replace('_pc','_mo')
        img.attr('src',img_mo);
     }else{
        var img = $(this).find('img');
        var img_mo = img.attr('src'); 
        var img_pc = img_mo.replace('_mo','_pc')
          img.attr('src',img_pc);
        }
   })  
    $(window).resize(function(){
      // 윈도우 창을 사용자가 움직이기 시작하면 이미지변수 다시 불러와야 함
    $('.sec_img p').each(function(){ 
      if($(window).width() < 927){ 
        var img = $(this).find('img');
        var img_pc = img.attr('src'); 
        var img_mo = img_pc.replace('_pc','_mo')
        img.attr('src',img_mo);
     }else{
        var img = $(this).find('img');
        var img_mo = img.attr('src'); 
        var img_pc = img_mo.replace('_mo','_pc')
          img.attr('src',img_pc);
        }
    })  
  })
  $('.sec4_img').each(function(){ 
    if($(window).width() < 927){ 
      var img = $(this).find('img');
      var img_pc = img.attr('src'); 
      var img_mo = img_pc.replace('_pc','_mo')
      img.attr('src',img_mo);
   }else{
      var img = $(this).find('img');
      var img_mo = img.attr('src'); 
      var img_pc = img_mo.replace('_mo','_pc')
        img.attr('src',img_pc);
      }
 })  
  $(window).resize(function(){
    // 윈도우 창을 사용자가 움직이기 시작하면 이미지변수 다시 불러와야 함
  $('.sec4_img').each(function(){ 
    if($(window).width() < 927){ 
      var img = $(this).find('img');
      var img_pc = img.attr('src'); 
      var img_mo = img_pc.replace('_pc','_mo')
      img.attr('src',img_mo);
   }else{
      var img = $(this).find('img');
      var img_mo = img.attr('src'); 
      var img_pc = img_mo.replace('_mo','_pc')
        img.attr('src',img_pc);
      }
  })  
})
$('.sec5_img').each(function(){ 
  if($(window).width() < 927){ 
    var img = $(this).find('img');
    var img_pc = img.attr('src'); 
    var img_mo = img_pc.replace('_pc','_mo')
    img.attr('src',img_mo);
 }else{
    var img = $(this).find('img');
    var img_mo = img.attr('src'); 
    var img_pc = img_mo.replace('_mo','_pc')
      img.attr('src',img_pc);
    }
})  
$(window).resize(function(){
  // 윈도우 창을 사용자가 움직이기 시작하면 이미지변수 다시 불러와야 함
$('.sec5_img').each(function(){ 
  if($(window).width() < 927){ 
    var img = $(this).find('img');
    var img_pc = img.attr('src'); 
    var img_mo = img_pc.replace('_pc','_mo')
    img.attr('src',img_mo);
 }else{
    var img = $(this).find('img');
    var img_mo = img.attr('src'); 
    var img_pc = img_mo.replace('_mo','_pc')
      img.attr('src',img_pc);
    }
})  
})
})