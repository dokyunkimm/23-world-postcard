$(function() {
	var scrlTp = $(window).scrollTop();
	var wndOtH = $(window).outerHeight();
	var wndOtW = $(window).outerWidth();
	var fltBtnPst = 107;
	var topBtnPst = 20;

	var $gnb = $(".kwqGnb");
	var $menuBtn = $(".nav-open-btn");
	var $gnbM = $(".kwqGnbM");
	var $gnbMList = $gnbM.find(".navigation").children("li");
	var menuState = false;
	var mobMde = wndOtW > 1024 ? false : true;

	// PC메뉴
	$('.kwqPstWrp .post_menu li > a').on('click', function() {
		let kwqTbTrg = $(this).attr('data-target');
		let kwqContTop = $(kwqTbTrg).offset().top;
		let kwqContH = kwqContTop - $('.kwqPstWrp .post_menu').outerHeight();
		$('html, body').animate({
			scrollTop : kwqContTop
		});
	});
	// 모바일 메뉴
	$('.kwqPstWrp .navigation li > a').on('click', function() {
		let kwqTbTrg = $(this).attr('data-target');
		let kwqContTop = $(kwqTbTrg).offset().top;
		let kwqContH = kwqContTop - $('.kwqPstWrp .nav-open-btn').outerHeight();
		$('html, body').animate({
			scrollTop : kwqContTop
		});
	});
	
	

	$('.kwqTpBtn > a').click(function() {
		$('html, body').animate({
			scrollTop : 0,
		});
	});
	
	function mobFaqSltTgl(){
		$('.postcard_popup_table > ul > li > div:nth-child(1)').on('click', function() {
			$('.postcard_popup_table > ul > li').removeClass('opn');
			$('.postcard_popup_table > ul > li > div:nth-child(3)').slideUp();
			if($(this).siblings('.postcard_popup_table > ul > li > div:nth-child(3)').is(':hidden')){
				$(this).siblings('.postcard_popup_table > ul > li > div:nth-child(3)').slideDown();
				$(this).parent().addClass('opn');
			}
		});
	}

	function mobChk(){
		mobMde = wndOtW > 1024 ? false : true;
	};

	mobChk();
	if(mobMde){
		mobFaqSltTgl();
	} else {
		$('#kwqFaqWrp .postcard_popup_table > ul > li').removeClass('opn');
		$('#kwqFaqWrp .postcard_popup_table > ul > li > div:nth-child(3)').removeAttr('style');
	}

	$('.kwqJsAlrt').on('click', function() {
		alert('3월 2일부터 참여 가능합니다.');
	});
	$('.kwqJsAlrt02').on('click', function() {
		alert('준비중입니다.');
	});

	function menuOpen() {
		menuState = true;
		$menuBtn.addClass("active");
		$gnbM.addClass("open");
		//$("body").css({'height':$(window).height(), 'overflow':'hidden'});
	}
	
	function menuClose() {
		menuState = false;
		$menuBtn.removeClass("active");
		$gnbM.removeClass("open");
		//$("body").css({'height':'auto', 'overflow':'auto'});
	}

	$menuBtn.click(function () {
		if (menuState) {
			menuClose();
		} else {
			menuOpen();
		}
		return false;
	});

	$(".kwqPstWrp .faq_menu span").click(function(){
		$(".faq_con").slideUp();
		$(".kwqPstWrp .faq_menu").removeClass('open');
		if($(this).parent().find("+div").is(":hidden")){
			$(this).parent().find("+div").slideDown();
			$(this).parent().addClass('open');
		}
	});

	jQuery(function($){
		$(".kwqPstWrp .quick_menu_btn .quick_inner p a.modal_count").click(function(){ 
			$(".kwqPstWrp .quick_menu_btn .quick_inner > div").addClass('on');
		  });
		
		$(".modal-open").click(function(){ 
			$("#popup").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close").click(function(){
		  modalClose(); 
		  });
		function modalClose(){
		  $("#popup").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
		$(".modal-open1").click(function(){ 
			$("#popup1").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close1").click(function(){
		  modalClose1(); 
		  });
		function modalClose1(){
		  $("#popup1").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
		$(".modal-open2").click(function(){ 
			$("#popup2").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close2").click(function(){
		  modalClose2(); 
		  });
		function modalClose2(){
		  $("#popup2").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
		$(".modal-open3").click(function(){ 
			$("#popup3").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close3").click(function(){
		  modalClose3(); 
		  });
		function modalClose3(){
		  $("#popup3").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
		$(".modal-open4").click(function(){ 
			$("#popup4").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close4").click(function(){
		  modalClose4(); 
		  });
		function modalClose4(){
		  $("#popup4").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
		$(".modal-open-gallery1").click(function(){ 
			$("#popupgallery1").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close-gallery1").click(function(){
		  modalCloseGallery1(); 
		  });
		function modalCloseGallery1(){
		  $("#popupgallery1").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
		$(".modal-open-gallery2").click(function(){ 
			$("#popupgallery2").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close-gallery2").click(function(){
		  modalCloseGallery2(); 
		  });
		function modalCloseGallery2(){
		  $("#popupgallery2").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
		$(".modal-open-gallery3").click(function(){ 
			$("#popupgallery3").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close-gallery3").click(function(){
		  modalCloseGallery3(); 
		  });
		function modalCloseGallery3(){
		  $("#popupgallery3").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
		$(".modal-open-gallery4").click(function(){ 
			$("#popupgallery4").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close-gallery4").click(function(){
		  modalCloseGallery4(); 
		  });
		function modalCloseGallery4(){
		  $("#popupgallery4").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
		$(".modal-open-gallery5").click(function(){ 
			$("#popupgallery5").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close-gallery5").click(function(){
		  modalCloseGallery5(); 
		  });
		function modalCloseGallery5(){
		  $("#popupgallery5").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
		$(".modal-open-gallery6").click(function(){ 
			$("#popupgallery6").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close-gallery6").click(function(){
		  modalCloseGallery6(); 
		  });
		function modalCloseGallery6(){
		  $("#popupgallery6").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
	
		$(".modal-open-gallery7").click(function(){ 
			$("#popupgallery7").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close-gallery7").click(function(){
		  modalCloseGallery7(); 
		  });
		function modalCloseGallery7(){
		  $("#popupgallery7").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
		$(".modal-open-gallery8").click(function(){ 
			$("#popupgallery8").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close-gallery8").click(function(){
		  modalCloseGallery8(); 
		  });
		function modalCloseGallery8(){
		  $("#popupgallery8").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
		$(".modal-open-gallery9").click(function(){ 
			$("#popupgallery9").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close-gallery9").click(function(){
		  modalCloseGallery9(); 
		  });
		function modalCloseGallery9(){
		  $("#popupgallery9").hide(); 
		  $('html').removeClass('hidden1');
	  }
	
	  $(".modal-open-gallery10").click(function(){ 
		$("#popupgallery10").css('display','flex').show();
		 $('html').addClass('hidden1');
	  });
		$("#close-gallery10").click(function(){
			modalCloseGallery10(); 
		});
		function modalCloseGallery10(){
			$("#popupgallery10").hide(); 
			$('html').removeClass('hidden1');
		}
		
		$(".modal-open-gallery11").click(function(){ 
		  $("#popupgallery11").css('display','flex').show();
			$('html').addClass('hidden1');
		});
		$("#close-gallery11").click(function(){
			modalCloseGallery11(); 
		});
		function modalCloseGallery11(){
			$("#popupgallery11").hide(); 
			$('html').removeClass('hidden1');
		}
	
		// 최우수상
		$(".modal-open-gallery_list1").click(function(){ 
			$("#popupgallerynew1").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close-gallerynew1").click(function(){
		  modalCloseGalleryNew1(); 
		  });
		function modalCloseGalleryNew1(){
		  $("#popupgallerynew1").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
		$(".modal-open-gallery_list2").click(function(){ 
			$("#popupgallerynew2").css('display','flex').show();
			 $('html').addClass('hidden1');
		  });
		$("#close-gallerynew2").click(function(){
			modalCloseGalleryNew2(); 
		  });
		function modalCloseGalleryNew2(){
		  $("#popupgallerynew2").hide(); 
		  $('html').removeClass('hidden1');
	  }
		
		$(".modal-open-gallery_list3").click(function(){ 
			$("#popupgallerynew3").css('display','flex').show();
			$('html').addClass('hidden1');
		});
		$("#close-gallerynew3").click(function(){
			modalCloseGalleryNew3(); 
		});
		function modalCloseGalleryNew3(){
			$("#popupgallerynew3").hide(); 
			$('html').removeClass('hidden1');
		}
		
	});
	
	
	$(".popup-wrap > .ltrRboxJs").click(function(){
		$('.popup-wrap').hide();
		$('html').removeClass('hidden1');
	});

	// $('.popup-wrap').click(function() {
	// 	$('.popup-wrap').hide()
	// });


	$(window).resize(function() {
		scrlTp = $(window).scrollTop();
		wndOtH = $(window).outerHeight();
		wndOtW = $(window).outerWidth();
		mobChk();
		

		if(wndOtW > 1800){
			fltBtnPst = 107;
			topBtnPst = 20;
		} else if(wndOtW <= 540){
			topBtnPst = 70;
		}
	});

	$(window).scroll(function() {
		scrlTp = $(window).scrollTop();
		wndOtH = $(window).outerHeight();
		wndOtW = $(window).outerWidth();
		mobChk();

		if(wndOtW > 1800){
			fltBtnPst = 107;
			topBtnPst = 20;
		} else if(wndOtW <= 540){
			topBtnPst = 70;
		}

		// if((scrlTp + (wndOtH * 0.7)) >= $('.kwqPstWrp .sec01 .video_box').offset().top && scrlTp + wndOtH < $('.kwqPstWrp').offset().top + $('.kwqPstWrp').outerHeight()){
		if((scrlTp + (wndOtH * 0.9)) >= wndOtH && scrlTp + wndOtH < $('.kwqPstWrp').offset().top + $('.kwqPstWrp').outerHeight()){
			$('.kwqPstWrp .kwqFlt').css({
				'position' : 'fixed',
				'top' : 'auto',
				'bottom' : '150px'
			});
		} else if(scrlTp + wndOtH >= $('.kwqPstWrp').offset().top + $('.kwqPstWrp').outerHeight()){
			$('.kwqPstWrp .kwqFlt').css({
				'position' : 'absolute',
				'top' : 'auto',
				'bottom' : fltBtnPst + 'px',
			});
		} else {
			$('.kwqPstWrp .kwqFlt').removeAttr('style');
		}

		if(scrlTp + wndOtH > (wndOtH * 1.1) + $('.kwqTpBtn > a').outerHeight() && scrlTp + wndOtH < $('.kwqPstWrp').offset().top + $('.kwqPstWrp').outerHeight() ){
			// $('.kwqTpBtn').css({
			// 	'position' : 'fixed',
			// 	'top' : 'auto',
			// 	'bottom' : '30px',
			// 	'opacity' : '1',
			// });
			$('.kwqTpBtn').addClass('shw');
			$('.kwqTpBtn').removeClass('asl');
		} else if(scrlTp + wndOtH >= $('.kwqPstWrp').offset().top + $('.kwqPstWrp').outerHeight()) {
			$('.kwqTpBtn').addClass('asl asl');
		} else {
			// $('.kwqTpBtn').removeAttr('style');
			// $('.kwqTpBtn').css({
			// 	'opacity' : '0',
			// });
			$('.kwqTpBtn').removeClass('shw');
		}
	});

	
});