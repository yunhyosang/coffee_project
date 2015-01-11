$(document).ready(function(){
	
	lnbTitle();
	moveElm();

	$(window).resize(function(){
	// resize 이벤트용
		lnbTitle();
		moveElm();

	});

	$(window).scroll(function(){
	//스크롤이벤트용
	});

	/* sub layout */
	var lnb_1dp = $(".menu_list>li");
	lnb_1dp.click(function(){
		$(".menu_list>li").removeClass("on")
		$(this).addClass('on')
	});

	/* 모바일 메뉴아이콘 클릭 */
	var menu_btn = $('.menu_btn')
		, gnb = $(".gnb")
		dimmed = $("<div class='dimmed'></div>");

	menu_btn.click(function(){
		var headerH = $("#header").height()
			, gnbH = gnb.height()
			,dimmedTop = headerH+gnbH;
		$(this).toggleClass('on');
		if($(this).hasClass('on')){
			gnb.slideDown();
			$("#header").after(dimmed);
			dimmed.show();
			dimmed.css({"top":dimmedTop});
		}else{
			gnb.slideUp();
			dimmed.hide()
		}
	});


	function lnbTitle(){
				// 940보다 작아지면 lnb 메뉴 타이틀 헤더 센터로 
		var winW = $(window).width(); 
		var  lnbTitle = $(".lnb_tit"); // lnb 메뉴 타이틀
			if((winW<940) && ($("#container").has("#aside"))){
					lnbTitle.insertAfter(".logo").addClass("mobile_tit");
				console.log('a')
			}else if((winW>940) && ($("#container").has("#aside"))){
					lnbTitle.insertBefore(".menu_list").removeClass("mobile_tit");
			}
	}

	function moveElm(){
		// 상단 로그인, 가입, lnb 의 2depth 위치이동
		var login_join = $(".login, .join")
			, sub_menu = $("<div class='sub_menu'></div>");
		var winW = $(window).width(); 

		if(940>winW){
			login_join.insertBefore('.provision');

		}else{
			login_join.insertBefore('.util .contact');
		}
		
	}

	function lnb_2Depth(){

	}

});

