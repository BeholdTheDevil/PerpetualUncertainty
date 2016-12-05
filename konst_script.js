$(document).ready(function(){


  $(".text-toggle").click(function(){
    //  Change button up/down every toggle
    var menuChange = $(this).children().hasClass("glyphicon-menu-up");
    if (!menuChange) {
      $(this).children().removeClass("glyphicon-menu-down").addClass("glyphicon-menu-up");
    } else {
      $(this).children().removeClass("glyphicon-menu-up").addClass("glyphicon-menu-down");
    }
    //  Toggle text content
    $(this).siblings(".textInfo").toggle(500);

  });

  
  //functions ...
});
