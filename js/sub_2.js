$(function(){
    $('#sec2 .tabSet').each(function(){
        var anchor_all = $(this).find('.tabs a'); //모든 .tabs a
        var panels_all = $(this).find('.panel');  //모든 .panel(div)
        var anchor_active = $(this).find('.tabs a.active'); //a.active만 검색
        var panels_active = anchor_active.attr('href');
                              //a.active의 href 값을 기억함 = 패널id
        $(panels_active).show();
        
        anchor_all.each(function(){ //.tabs a
            var panels_active = $(this).attr('href');

            $(this).click(function(){ //.tabs a
              event.preventDefault();;
              panels_all.hide();
              anchor_all.removeClass('active');
              $(this).addClass('active');
              $(panels_active).show();
            })
        })
    })//tabSet
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    $( ".button_su_inner" ).mouseenter(function(e) {
      var parentOffset = $(this).offset(); 
     
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
      $(this).prev(".su_button_circle").removeClass("desplode-circle");
      $(this).prev(".su_button_circle").addClass("explode-circle");
   
   });
   
   $( ".button_su_inner" ).mouseleave(function(e) {
   
        var parentOffset = $(this).offset(); 
   
        var relX = e.pageX - parentOffset.left;
        var relY = e.pageY - parentOffset.top;
        $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
        $(this).prev(".su_button_circle").removeClass("explode-circle");
        $(this).prev(".su_button_circle").addClass("desplode-circle");
   });

   var slide;
      slide = setInterval(function(){
          $('.sec7_recent_list > li:first-child').animate({
              'margin-top':'-2.5rem'},800,function(){
                  $('.sec7_recent_box .sec7_recent_list').append($('.sec7_recent_list > li:first-child'));
                  $('.sec7_recent_box .sec7_recent_list > li:last-child').css({'margin-top':0});
              })
      },2000)
  })//jq end