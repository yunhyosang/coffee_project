/*
	주석 s (시작), e(구문 끝)

*/


$(document).ready(function(){
	
	lnbTitle();
	moveElm();
//	lnb_2Depth();

	$(window).resize(function(){
	// resize 이벤트용
		var winW = $(window).width(); 
		lnbTitle();
		moveElm();
//		lnb_2Depth();


	});

	$(window).scroll(function(){
	//스크롤이벤트용
	});

	/* sub layout */
	var lnb_1dp = $(".menu_list>li");

	lnb_1dp.click(function(){
		$(".menu_list>li").removeClass("on");
		$(this).addClass('on');
		var winW = $(window).width(); 
		if(940>winW){
			var manuTarget = $(this).find('a').attr("href");
			console.log(manuTarget)
			$(".sub_menu").show();
			$(".sub_menu ul").hide();
			$(".sub_menu ul"+manuTarget).show();
		}
	});

	/* 모바일 메뉴아이콘 클릭 */
	var menu_btn = $('.menu_btn')
		, gnb = $(".gnb")
		, dimmed = $("<div class='dimmed'></div>");

	menu_btn.click(function(){
			var headerH = $("#header").height()
			, gnbH = gnb.height()
			,dimmedTop = headerH+gnbH-50;
			$(this).toggleClass('on');

		if($(this).hasClass('on')){
			gnb.slideDown();
			$("#header").after(dimmed);
			dimmed.show();
			dimmed.css({"top":dimmedTop});
		}else{
			gnb.slideUp(function(){dimmed.hide();});
			
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

					// s 익스플로러 7,8 check
					if (!$.support.leadingWhitespace) {
						//IE7 and 8 stuff
							$("#wrap").css({'width':'940px','margin' : '0 auto'});
							$(".mobileContents").css('display','none');
							$("#container").css('margin-top','-50px');
							$('.pcVer').css('display','none');
						}
  				 // e 익스플로러 7,8 check
			}
	}

	function moveElm(){

//IE8 버전에서는 동작 안함
	if($.support.leadingWhitespace) {
						// 상단 로그인, 가입, lnb 의 2depth 위치이동 및 푸터 내 컨텐츠 위치변경
					var login_join = $(".login, .join")
						, foot_utils = $(".foot_utils");
					var winW = $(window).width(); 

					if(940>winW){
						login_join.insertBefore('.provision');
						foot_utils.insertBefore('address');
						$("#footer span:nth-child(2)").css({"display":"none"});	
						$(".sub_menu").hide();
						$(".sub_menu ul").hide();
					}else{
						login_join.insertBefore('.util .contact');
						$("#footer span:nth-child(2)").css({"display":"inline-block"});
						$(".dimmed").css("display","none");
					}
				}
		}
});


//	function lnb_2Depth(){
//		var winW = $(window).width();
//		if(940>winW){
//			var menu_list = $(".menu_list")
//				, sub_menu = $(".sub_menu")
//				, menu_list_1dp = $(".menu_list>li.on")
//				, depth2 = $(".menu_list>li ul")
//				, cloneD2 = $(".menu_list>li ul").clone();
//				menu_list.after("<div class='sub_menu'></div>");
//				depth2.hide();
//				$('.sub_menu').append(cloneD2)
//		}else{
//			$(".menu_list>li.on>ul").show()
//			$('div').remove(".sub_menu")
//		}
//	}


/*		회원가입에서 사용되어지는 스크립트  */
function joinPageFunc(){
	//IE8 버전에서는 동작 안함
	if($.support.leadingWhitespace) {
		var winW = $(window).width();
		
		if(940>winW){
			
		}
		else{
		
		}
	
	}

}