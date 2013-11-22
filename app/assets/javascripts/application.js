

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
//= require_tree .
//= require turbolinks
//= require bootstrap
//= require jquery.flexslider

$(document).on('ready page:load', function(){
	$('.carousel').carousel();
	//padding();

	$("#show-all").on('click',function(){ 
		showHide();
		showOpacity();
	});
	 $('#carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 210,
		itemMargin: 5,
		asNavFor: '#slider'
	});
	$('#slider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemMargin: 5,
		sync: "#carousel"
	});
});




function showHide(){
	var span = $(".nav-bar").find("span")
	if ($(".nav-bar").find("span").is(":visible")){
		$("#show-all").find("i").css("opacity","0.5");
		$("#side-bar-nav").css("width","67");	
		$(".right-content > section").addClass("left-content-two");	
		$(".right-content > section").removeClass("left-content-one");
		
	}else{
		$("#show-all").find("i").css("opacity","1");
		$("#side-bar-nav").css("width","195")
		$(".right-content > section").addClass("left-content-one");	
		$(".right-content > section").removeClass("left-content-two");
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