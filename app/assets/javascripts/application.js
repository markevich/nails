// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree 	.
//= require bootstrap

$(document).on('ready page:load', function(){
	$('.carousel').carousel();
	//padding();

	$("#show-all").on('click',function(){ 
		showHide();
		showOpacity();
		
	});
	
})


function showHide(){
	var span = $(".nav-bar").find("span")
	if ($(".nav-bar").find("span").is(":visible")){
		$("#show-all").find("i").css("opacity","0.5");
		$("#side-bar-nav").css("width","67");
		//$(".right-content").removeClass("padding-left-a");
		//$(".right-content").addClass("padding-left-b");
	}else{
		$("#show-all").find("i").css("opacity","1");
		$("#side-bar-nav").css("width","190")
		//$(".right-content").addClass("padding-left-a");
		//$(".right-content").removeClass("padding-left-b");
	}
}

function showOpacity(){
	var a = $(".nav-bar").find("span").find("a");
	var span = $(".nav-bar").find("span");
	if ($(".nav-bar").find("span").is(":visible")){	
			span.css("display","none");
			a.css("opacity","0");
	}else{
		setTimeout(function(){
			span.css("display","inline-block");
			a.css("opacity","1");
		}, 300);
		
	}
	

}
function padding(){
	var width = $("#side-bar-nav").width() + 42;
	var padLeft = 20;
	var left = width + padLeft;
	$(".right-content").css("padding-left", left);
}
