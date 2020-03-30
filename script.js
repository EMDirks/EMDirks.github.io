// DO NOT JUDGE THIS SHITTY CODE
// I DIDN'T HAVE ANY TIME TO DO THINGS RIGHT
// WILL FIX LATER
// THANK YOU

var bladeOfNight = false;
var wizIsDead = false;

$("#wizard").css("opacity","1");

var cursorArray = ['url("images/grab1.png"), pointer',
                   'url("images/grab2.png"), pointer',
                  'url("images/grab3.png"), pointer'];

i = 0;
(function cursor(){
  $("a, .glyph").css("cursor",cursorArray[i])
  i++;
  if(i == cursorArray.length){
    i = 0; 
  }
   setTimeout(cursor, 100);
})();


$(document).ready(function(){
    animateDiv();
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height();
    var w = $(window).width();
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    if (wizIsDead == true) {
       return false;
    }
    else {
      var newq = makeNewPosition();
      var oldq = $('.move').offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);
      
      $('.move').animate({ top: newq[0], left: newq[1] }, speed, function(){
        animateDiv();        
      });
    }
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    speed = Math.ceil(greatest/speedModifier);

    return speed;

}

$("#wizard").click(function(){
  if (bladeOfNight == false) {
      $("#wizard-fuckery").fadeIn(5000);
      $("body").css("background-color","#000000");
      $("#wizard").css("opacity","0");
      $("#portfolio").css("transform","scale(7)");
      $("#portfolio").css("opacity","0");
  }
  else {
    $("#wizard").css("background-image","url(images/wiz_die.gif");
    $("#wizard").css("z-index","10");
    $("#wizard").removeClass("move");
    wizIsDead = true;
    setTimeout(destroyWizard, 1000);
    function destroyWizard(){
      $("#wiz-slain-text").css("display","block");
      $("#wizard").css("pointer-events","none");
    }
  }
});

$("#glyph3").click(function(){
    $("#wizard").css("cursor","url(images/blade.png), pointer");
    $("#wizard-fuckery").css("display","none");  
    $("#sword").fadeIn(5000); 
    bladeOfNight = true;
    setTimeout(backToNormal, 6000);
});

$("#glyph2").click(function(){
    $("#wizard-fuckery").css("display","none");  
    $("body").css("transition","none");
    $("body").css("background-color","#ffffff");
    $("#goblin").fadeIn(1000); 
    setTimeout(backToNormal, 6000);
});

$("#glyph1").click(function(){
    $("#wizard-fuckery").css("display","none");  
    $("#curse").fadeIn(1000); 
    setTimeout(backToNormal, 8000);
});

function backToNormal(){
  $("#goblin").css("display","none");
  $("#curse").css("display","none");
  $("#sword").css("display","none");
  $("body").css("background-color","#ffffff");
  $("#wizard-fuckery").css("display","none"); 
  $("#portfolio").css("transform","scale(1)");
  $("#portfolio").css("transform-style", "flat;");
  $("#portfolio").css("opacity","1");
  $("#wizard").css("opacity","1");
}