$(function() {
	$(".phone").mask("+ 7 ( 999 ) 999 99 99?");
	$('#block-menu').children('ul').after('<div id="mobile-menu">').clone().appendTo('#mobile-menu');
	$('#mobile-menu').mmenu({
		extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "Меню",
			// titleLink: "/"
		}
	});
	$(".toggle-mnu").click(function() {
		$(this).addClass("on");
	});
	var api = $("#mobile-menu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});
	// $('.az-mobile-menu-click').click(function(){
	// 		$(this).next('.az-drop-menu').toggleClass('active');
	// 		return false;
	// });

	$('.owl-carousel').owlCarousel({
		items: 1,
		dots: true,
		margin: 0
	});
	$('.owl-carousel2').owlCarousel({
		responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            }
        },
		dots: true,
		margin: 40,
		loop: true,
		nav: true,
		navText: ["",""]
	});
	$('.owl-carousel3').owlCarousel({
		responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            992:{
            	items:4
            }
        },
		dots: true,
		margin: 40,
		loop: true,
		nav: true,
		navText: ["",""]
	});

	/*my az-tabs*/
	$('.az-tab-switcher>div').click(function(){
		$('.az-tab-switcher>div').removeClass('active');
		$('.az-tab-content>div').removeClass('active');
		$(this).addClass('active');
		var item;
		$('.az-tab-switcher>div').each(function(i){
			if($(this).hasClass('active')){
				item = i;
			}
		});
		$('.az-tab-content>div').eq(item).addClass('active');
	});
	var az_delta = $('.tabs-navigation').innerHeight() - $('.tabs-navigation li:first-child').innerHeight();
	$('.ah-content_tab1-cont').innerHeight(az_delta);
	$(window).resize(function(){
		// if(window.matchMedia( "(max-width: 992px)" ).matches){
			var az_delta = $('.tabs-navigation').innerHeight() - $('.tabs-navigation li:first-child').innerHeight();
			$('.ah-content_tab1-cont').innerHeight(az_delta);
		// }
	});
	
	function az_validateEmail(email2) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email2);
    }
    function cleanTnakns(form){
        $('input[type="text"]').removeClass("error-input");
        $("input[type=text], textarea").val("");
        $(form).parents('.popup-first').hide().next('.popup-thanks').show();
    }

    $('*:not(input[name="tel"])').mousedown(function() { 
        $('input[type="text"], textarea').removeClass("error-input");
    });

    $('.az-send').submit(function(){
        var uname = $(this).find('input[name="uname"]');
        var tel = $(this).find('input[name="tel"]');
        var email = $(this).find('input[name="email"]');
        var empty = false;
        var empty2 = false;
        if (!az_validateEmail(email.val())){
            empty2 = true;
        }
        var az_this = $(this);
        reg_tel = /^((8|\+ 7 )[\- ]?)?(\( ?\d{3} \) ?[\- ]?)?[\d\- ]{7,13}$/
        if (!reg_tel.test(tel.val())){
            empty = true;
        }
        if(uname.val() == ''){
            uname.addClass("error-input");
            uname.focus();
        }else if (empty == true){
            tel.addClass("error-input");
            tel.focus();
        }else if (empty2 == true){
            email.addClass("error-input");
            email.focus();
        }else{
            var form_data = $(this).serialize();//+'&url='+location.href;
            alert('ok');
            //send email
        }
        return false;
    });
    $('.az-send2').submit(function(){
        var tel = $(this).find('input[name="tel"]');
        var empty = false;
        var az_this = $(this);
        reg_tel = /^((8|\+ 7 )[\- ]?)?(\( ?\d{3} \) ?[\- ]?)?[\d\- ]{7,13}$/
        if (!reg_tel.test(tel.val())){
            empty = true;
        }
        if (empty == true){
            tel.addClass("error-input");
            tel.focus();
        }else{
            var form_data = $(this).serialize();//+'&url='+location.href;
            alert('ok');
            //send email
        }
        return false;
    });
	// $('#az-modal').click(function(){
	// 	$('#az-popup').modal('show');
	// 	// alert(1);
	// 	return false;
	// });

	// $('.az-close').click(function(){
	// 	// alert(1);
	// 	$('#az-popup').modal('hide');
	// 	return false;
	// });

	// $('.az-close2').click(function(){
	// 	$('#az-popup2').modal('hide');
	// 	return false;
	// });

	// $(".form1").submit(function() { 
 //        // var tel = $(this).find('input[name="tel"]');
 //        // var empty = false;
 //        // if (tel.val() == ""){
 //        //     empty = true;
 //        // }
 //        // if (empty == true){
 //        //     tel.addClass("error-input");
 //        //     tel.focus();
 //        // }else{
 //            var form_data = $(this).serialize(); 
 //            $.ajax({
 //                type: "POST", 
 //                url: "/sendmessage.php", 
 //                data: form_data,
 //                success: function() {
 //                    // cleanTnakns(this);
 //                    $('#az-popup').modal('hide');
 //                    $('#az-popup2').modal('show');
 //                }
 //            });
 //        // }
 //        return false;
 //    });
	// var header = $('header').height();
	// $('body').css('padding-top', header+10+'px');
	// $(window).scroll(function(){
	// 	// alert(1);
	// 	if($(window).scrollTop() > 5){
	// 		$('header').css('box-shadow', '0px 0px 10px #999');
	// 	} else {
	// 		$('header').css('box-shadow', 'none');
	// 	}
	// });
	// Custom JS

	//****************** Tabs **********************

	var tabContainers = $('.tabs-container > div');
    tabContainers.hide().filter(':first').show();
 
    $('ul.tabs-navigation li a').click(function(){
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('ul.tabs-navigation a').parent('li').removeClass('selected');
        $(this).parent('li').addClass('selected');
        return false;
        }).filter(':first').click();
          
    function pressNextTab(){
        if ($('ul.tabs-navigation li.selected').hasClass('last')){
            $('ul.tabs-navigation li:first').find('a').trigger('click');
            }else{
                $('ul.tabs-navigation li.selected').next('li').find('a').trigger('click');
                }
        }
    // $('ul.tabs-navigation li:last').addClass('last');
    // var int = setInterval(pressNextTab, 5000);

	//MagnificPopup

	$('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

});
