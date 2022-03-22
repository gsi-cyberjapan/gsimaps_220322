// 現れる位置
var apprpos = 400;

$( function(){
	// スクロールイベントの設定
	$(window).scroll( function(){
		// 対象の要素
		var element = $("#page_top_scroll");

		// 現在の位置・表示状態
		var now = $( window ).scrollTop();
		var visible = element.is(":visible");

		if(now > apprpos && !visible){
			element.fadeIn("slow");
		}else if(now <= apprpos && visible){
			element.fadeOut("slow");
		}
	} ) ;

	// クリックイベント
	$("#page_top_scroll").click(
		function(){
			$("html,body").animate({scrollTop:0}, "slow");
		}
	);
});