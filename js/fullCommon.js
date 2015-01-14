$(document).ready(function(){
	
	moveElm();

	$(window).resize(function(){
	// resize 이벤트용
		var winW = $(window).width(); 
		moveElm();



	});

	$(window).scroll(function(){
	//스크롤이벤트용
	});



	/* 모바일 메뉴아이콘 클릭 */
	var menu_btn = $('.menu_btn')
		, gnb = $(".gnb")
		, dimmed = $("<div class='dimmed'></div>");

	menu_btn.click(function(){
alert('test');
		
		var headerH = $("#header").height()
			, gnbH = gnb.height()
			, dimmedTop = headerH+gnbH;
			$(this).toggleClass('on');

		if($(this).hasClass('on')){
			
			gnb.slideDown();
			$("#header").after(dimmed);
			dimmed.show();
			dimmed.css({"top":dimmedTop});
		}else{
			
			gnb.slideUp();
			dimmed.hide();
		}
	});


	function lnbTitle(){
				// 940보다 작아지면 lnb 메뉴 타이틀 헤더 센터로 
		var winW = $(window).width(); 
		var  lnbTitle = $(".lnb_tit"); // lnb 메뉴 타이틀
			if((winW<940) && ($("#container").has("#aside"))){
					lnbTitle.insertAfter(".logo").addClass("mobile_tit");
			}else if((winW>940) && ($("#container").has("#aside"))){
					lnbTitle.insertBefore(".menu_list").removeClass("mobile_tit");
			}
	}

	function moveElm(){
		// 상단 로그인, 가입, lnb 의 2depth 위치이동 및 푸터 내 컨텐츠 위치변경
		var login_join = $(".login, .join")
			, foot_utils = $(".foot_utils");
		var winW = $(window).width(); 

		if(940>winW){
			login_join.insertBefore('.provision');
			foot_utils.insertBefore('address');
			$("#footer span:nth-child(2)").css({"display":"none"});	
			//$(".sub_menu").hide();
		//	$(".sub_menu ul").hide();
		}else{
			login_join.insertBefore('.util .contact');
			$("#footer span:nth-child(2)").css({"display":"inline-block"});
		}
		
	}
});

