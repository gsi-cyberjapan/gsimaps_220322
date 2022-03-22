/*-------------------------------------------------------

http://www.gsi.go.jp/common/common.js

-------------------------------------------------------*/

// フォントサイズを変更
$(function(){
	var history = $.cookie('fontSize');
	var target = $('body');
	
	if(history != null){
		target.addClass(history);
	}else{
		target.addClass('fontDefault');
	}

	$('#fontDefault').click(function(){
			var currentFontSize = this.id;
			$.cookie('fontSize', currentFontSize, {path: '/'});
			target.removeClass().addClass(currentFontSize);
	});

	$('#fontLarge').click(function(){
		if(target.hasClass('fontDefault')){
			var currentFontSize = ('fontLarge01');
		}else if(target.hasClass('fontLarge01')){
			var currentFontSize = ('fontLarge02');
		}else if(target.hasClass('fontLarge02')){
			var currentFontSize = ('fontLarge03');
		}else if(target.hasClass('fontLarge03')){
			var currentFontSize = ('fontLarge04');
		}else{
			var currentFontSize = ('fontLarge04');
		}
		$.cookie('fontSize', currentFontSize, {path: '/'});
		target.removeClass().addClass(currentFontSize);
	});
});


// 指定したクラスのリンクを新規ウィンドウで開く
$(function(){
	$('a.blank').click(function(){
		window.open(this.href, '_blank');
		return false;
	});
});


// 「ページトップへ」のスクロール表示

// 現れる位置
var apprpos = 400;

$(function(){
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
	});

	// クリックイベント
	$("#page_top_scroll").click(function(){
			$("html,body").animate({scrollTop:0}, "slow");
	});
});


// アコーディオン表示の際の「▼」⇔「▲」切替
$(function(){
	$("label.la_h3").click(function(){
		var checkboxId = $(this).attr("for");
		var arrowId = checkboxId + "_arrow";
		if(!document.getElementById(checkboxId).checked){
			$("#"+arrowId).css("transform", "rotate(180deg)");
		}else{
			$("#"+arrowId).css("transform", "none");
		}
	});
});

// アコーディオン表示の際の「▼」⇔「▲」切替その2（180823追加）
$(function(){
	$("label.la_h3_1").click(function(){
		var checkboxId = $(this).attr("for");
		var arrowId = checkboxId + "_arrow";
		if(!document.getElementById(checkboxId).checked){
			$("#"+arrowId).css("transform", "rotate(180deg)");
		}else{
			$("#"+arrowId).css("transform", "none");
		}
	});
});
