/* 
اكتب هذا السطر لجعل رابط ال 
java script 
يعمل حتي لو وضعته في ال 
head
وهي تعطي نفس نتيجه وضع اللنك فى اخر سطر فى ال 
body

$(document).ready(function(){
    $("h1").css("color","red");
});
*/
/*
يجب ان اعدل الالوان والخطوط فى ال 
css
وليس في ال
javascript
ليكون ال 
code clean

$("h1").css("color","red"); // اذا كتبت متغيران فيعني ذلك انك تريد تغيير الخواص
console.log($("h1").css("color")); // اذا كتبت متغير واحد فيعني ذلك انك تريد عرض الخواص
console.log($("h1").css("font-size"));
console.log($("h1").css("font-size","5rem"));
$("button");
*/

/*
$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title margin-50");
console.log($("h1").hasClass("margin-50"));
*/

/*
$("h1").text("bye");
$("button").text("do not click me");
$("button").html("<em>tawfik</em>");

console.log($("img").attr("src"));
$("a").attr("href","https://www.yahoo.com");

console.log($("h1").attr("class"));

// jQuery event listener
$("h1").click(function(){
$("h1").css("color","purple");
});

// js event listener for buttons and h1
for(var i=0;i<5;i++){
   document.querySelectorAll("button")[i].addEventListener("click",function(){
    document.querySelector("h1").style.color="purple";
   }); 
}

$("button").click(function(){
    $("h2").css("color","purple");
});

//event keypress
$("input").keypress(function(event){
    console.log(event.key);
});

$("body").keypress(function(event){
    console.log(event.key);
});

$(document).keypress(function(event){
    console.log(event.key);
});
*/

$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
});

$("h1").click("mouseover",function(){
    $("h1").css("color","green");
});

$("h1").before("<button>before</button>");

$("h1").after("<button>after</button>");

$("h1").prepend("<button>prepend</button>");

$("h1").append("<button>apend</button>");

// $("button").remove();

/*$("button").on("click",function(){
    $("h1").hide();
});*/

/*$("h2").on("click",function(){
    $("h1").show();
});*/

/*$("h2").on("click",function(){
    $("h1").toggle();
});*/

/*$("h2").on("click",function(){
    $("h1").fadeOut();
});*/

/*$("h2").on("click",function(){
    $("h1").fadeIn();
});*/

/*$("h2").on("click",function(){
    $("h1").fadeToggle();
});*/

/*$("button").on("click",function(){
    $("h1").slideUp();
});*/

/*$("button").on("click",function(){
    $("h1").slideDown();
});*/

/*$("button").on("click",function(){
    $("h1").slideToggle();
});*/

/*$("button").on("click",function(){
    $("h1").animate({opacity:.5});
}); //value should be number
*/

/*$("button").on("click",function(){
    $("h1").animate({margin:20  });
});*/

/*$("button").on("click",function(){
    $("h1").animate({margin:"20%"  });
});*/

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:.5  });
});