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
        // 
        var duration = 100;
        // buttons1 :nth-child(-n+4) 대신에 태그 부분에 클래스를 주고 여기에 클래스 이름을 직접 써도 됨
        $('.sec2_btn_bottom button')
            .on('mouseover', function() {
                $(this).stop(true).animate({
                    backgroundColor: '#ED666D',
                    color: '#fff'
                }, duration);
            })
            .on('mouseout', function(){
                $(this).stop(true).animate({
                    backgroundColor: '#8DD3D3',
                    color: '#000'
                }, duration);
            });
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
  })//jq end